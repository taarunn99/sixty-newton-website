/**
 * Build the scroll-sequence frames from the MP4 source.
 * Run with:  npm run frames:build
 *
 * Pipeline:
 *   ffmpeg → JPEG (lossless-ish q=2, Lanczos-downscaled to 1920w, every 2nd frame)
 *   sharp  → WebP q78 effort 5
 *
 * Output: /public/animation/frame-000.webp ... frame-NNN.webp
 * Source: /Users/tarunshukla/Downloads/openart-enhanced_1778926197306_35e323f3.mp4
 *         (3208 × 1440, 24 fps, 337 native frames)
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const execFileP = promisify(execFile);

const SRC_MP4 = "/Users/tarunshukla/Downloads/openart-enhanced_1778926197306_35e323f3.mp4";
const DEST = path.resolve(process.cwd(), "public/animation");
// 2400w is enough to render crisp on a 1512-logical-px 14"/15" Retina MacBook
// at 2x DPR (≈ 3024 actual pixels wide). At 1920w, ~1.5x upscale → visible softness.
const WIDTH = 2400;
const STEP = 2;           // every Nth source frame (337 native / 2 ≈ 168 output)
const WEBP_Q = 88;        // q88 — preserves gold gradient banding + skyline detail
const WEBP_EFFORT = 6;    // max effort — slower encode, smaller files at same quality
const SHARP_CONCURRENCY = 8;

async function main() {
  // 0. Wipe and re-create destination
  await fs.rm(DEST, { recursive: true, force: true });
  await fs.mkdir(DEST, { recursive: true });

  // 1. ffmpeg → temp JPEGs
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "sn-frames-"));
  console.log(`Extracting frames from MP4 via ffmpeg → ${tmpDir}`);
  console.log(`  source: ${SRC_MP4}`);
  console.log(`  filter: select every ${STEP}, scale to ${WIDTH}w (Lanczos)`);
  await execFileP(
    "ffmpeg",
    [
      "-hide_banner",
      "-loglevel", "error",
      "-i", SRC_MP4,
      "-vf",
      `select='not(mod(n\\,${STEP}))',scale=${WIDTH}:-2:flags=lanczos`,
      "-vsync", "vfr",
      "-q:v", "2",
      path.join(tmpDir, "frame-%03d.jpg"),
    ],
    { maxBuffer: 1024 * 1024 * 200 },
  );

  const jpgs = (await fs.readdir(tmpDir)).filter(f => f.endsWith(".jpg")).sort();
  if (!jpgs.length) {
    console.error("ffmpeg produced no frames");
    process.exit(1);
  }
  console.log(`ffmpeg produced ${jpgs.length} JPEG frames`);

  // 2. sharp → WebP, 0-indexed numbering
  console.log(`Converting JPEG → WebP (q${WEBP_Q}, effort ${WEBP_EFFORT}) → ${DEST}`);
  let done = 0;
  const queue = jpgs.map((file, i) => ({ file, idx: i }));
  const workers = Array.from({ length: SHARP_CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const outName = `frame-${String(item.idx).padStart(3, "0")}.webp`;
      await sharp(path.join(tmpDir, item.file))
        .webp({ quality: WEBP_Q, effort: WEBP_EFFORT })
        .toFile(path.join(DEST, outName));
      done++;
      if (done % 20 === 0 || done === jpgs.length) {
        process.stdout.write(`  ${done}/${jpgs.length}\n`);
      }
    }
  });
  await Promise.all(workers);

  // 3. Cleanup + report
  await fs.rm(tmpDir, { recursive: true, force: true });

  const files = (await fs.readdir(DEST)).filter(f => f.endsWith(".webp")).sort();
  let totalBytes = 0;
  for (const f of files) totalBytes += (await fs.stat(path.join(DEST, f))).size;
  const avgKb = (totalBytes / files.length / 1024).toFixed(1);
  const totalMb = (totalBytes / 1024 / 1024).toFixed(2);

  console.log(`\nDone.`);
  console.log(`  ${files.length} frames @ ${WIDTH}w`);
  console.log(`  ${avgKb} KB avg / ${totalMb} MB total`);
  console.log(`  FRAME_COUNT for scroll-sequence.tsx → ${files.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
