/**
 * Build the scroll-sequence frames from the MP4 source — produces TWO bundles:
 *
 *   - public/animation/desktop/  → high-fidelity for laptop / desktop / TV
 *   - public/animation/mobile/   → reduced-fidelity for phones (cellular-friendly)
 *
 * Run with:  npm run frames:build
 *
 * Pipeline (each bundle):
 *   ffmpeg → JPEG (q=2, Lanczos-downscaled) → sharp → WebP
 *
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
const DEST_ROOT = path.resolve(process.cwd(), "public/animation");
const SHARP_CONCURRENCY = 8;

type BundleSpec = {
  name: "desktop" | "mobile";
  width: number;          // target pixel width (16:7-ish aspect from native 3208×1440)
  step: number;           // emit every Nth source frame (337 native / step)
  webpQuality: number;
  webpEffort: number;     // 0–6, higher = slower encode but smaller file
};

const BUNDLES: BundleSpec[] = [
  { name: "desktop", width: 2400, step: 2, webpQuality: 88, webpEffort: 6 },
  // Mobile bundle: half-width frames every 4th source frame → ~84 frames @ ~60KB each
  // ≈ 5 MB total — friendly on cellular, still scrubs smoothly.
  { name: "mobile",  width: 1200, step: 4, webpQuality: 78, webpEffort: 5 },
];

async function buildBundle(spec: BundleSpec) {
  const dest = path.join(DEST_ROOT, spec.name);
  console.log(`\n── Bundle: ${spec.name.toUpperCase()} ──`);
  await fs.mkdir(dest, { recursive: true });

  // 1. ffmpeg → temp JPEGs
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), `sn-frames-${spec.name}-`));
  console.log(`  Extracting via ffmpeg → ${tmpDir}`);
  console.log(`  filter: select every ${spec.step}, scale to ${spec.width}w (Lanczos)`);
  await execFileP(
    "ffmpeg",
    [
      "-hide_banner",
      "-loglevel", "error",
      "-i", SRC_MP4,
      "-vf",
      `select='not(mod(n\\,${spec.step}))',scale=${spec.width}:-2:flags=lanczos`,
      "-vsync", "vfr",
      "-q:v", "2",
      path.join(tmpDir, "frame-%03d.jpg"),
    ],
    { maxBuffer: 1024 * 1024 * 200 },
  );

  const jpgs = (await fs.readdir(tmpDir)).filter(f => f.endsWith(".jpg")).sort();
  if (!jpgs.length) throw new Error(`${spec.name}: ffmpeg produced no frames`);
  console.log(`  ${jpgs.length} JPEGs extracted`);

  // 2. sharp → WebP, 0-indexed numbering
  console.log(`  Encoding WebP (q${spec.webpQuality}, effort ${spec.webpEffort})`);
  let done = 0;
  const queue = jpgs.map((file, i) => ({ file, idx: i }));
  const workers = Array.from({ length: SHARP_CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const outName = `frame-${String(item.idx).padStart(3, "0")}.webp`;
      await sharp(path.join(tmpDir, item.file))
        .webp({ quality: spec.webpQuality, effort: spec.webpEffort })
        .toFile(path.join(dest, outName));
      done++;
      if (done % 20 === 0 || done === jpgs.length) {
        process.stdout.write(`    ${done}/${jpgs.length}\n`);
      }
    }
  });
  await Promise.all(workers);

  await fs.rm(tmpDir, { recursive: true, force: true });

  // 3. Report bundle size
  const files = (await fs.readdir(dest)).filter(f => f.endsWith(".webp")).sort();
  let totalBytes = 0;
  for (const f of files) totalBytes += (await fs.stat(path.join(dest, f))).size;
  const avgKb = (totalBytes / files.length / 1024).toFixed(1);
  const totalMb = (totalBytes / 1024 / 1024).toFixed(2);
  console.log(`  → ${files.length} frames @ ${spec.width}w · ${avgKb} KB avg · ${totalMb} MB total`);
  return { name: spec.name, frames: files.length, totalMb };
}

async function main() {
  // Wipe entire animation dir and rebuild both bundles cleanly
  await fs.rm(DEST_ROOT, { recursive: true, force: true });
  await fs.mkdir(DEST_ROOT, { recursive: true });

  const results = [];
  for (const spec of BUNDLES) {
    results.push(await buildBundle(spec));
  }

  console.log("\n── Summary ──");
  for (const r of results) {
    console.log(`  ${r.name.padEnd(8)} ${r.frames} frames · ${r.totalMb} MB`);
  }
  console.log("\nUpdate scroll-sequence.tsx FRAME_COUNT_DESKTOP / FRAME_COUNT_MOBILE if these counts changed.");
}

main().catch(err => { console.error(err); process.exit(1); });
