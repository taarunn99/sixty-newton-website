/**
 * One-shot script: convert the 140 source JPG frames into WebP at web-friendly size.
 * Run with:  npm run frames:optimize
 *
 * Output: public/animation/frame-000.webp ... frame-139.webp
 * Target size: ~60KB / frame  →  ~8MB total for the full sequence.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "/Users/tarunshukla/Downloads/Sixtynewton Images for animation";
const DEST = path.resolve(process.cwd(), "public/animation");
const WIDTH = 1600;
const QUALITY = 70;
const CONCURRENCY = 8;

async function main() {
  await fs.mkdir(DEST, { recursive: true });

  const all = (await fs.readdir(SRC))
    .filter(f => /^openart-enhanced_.*_\d{3}\.jpg$/.test(f))
    .sort();

  if (all.length === 0) {
    console.error("No source frames found in:", SRC);
    process.exit(1);
  }

  console.log(`Found ${all.length} frames in ${SRC}`);
  console.log(`Converting to WebP at ${WIDTH}px wide, q${QUALITY} → ${DEST}`);

  let done = 0;
  const failed: string[] = [];

  async function processOne(filename: string, idx: number) {
    const outName = `frame-${String(idx).padStart(3, "0")}.webp`;
    const outPath = path.join(DEST, outName);
    try {
      await sharp(path.join(SRC, filename))
        .resize({ width: WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outPath);
      done++;
      if (done % 10 === 0 || done === all.length) {
        process.stdout.write(`  ${done}/${all.length}\n`);
      }
    } catch (err) {
      failed.push(filename);
      console.error(`  FAIL ${filename}:`, (err as Error).message);
    }
  }

  // Worker-pool pattern
  const queue = all.map((file, i) => ({ file, idx: i }));
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      await processOne(item.file, item.idx);
    }
  });
  await Promise.all(workers);

  // Report total output size
  const files = await fs.readdir(DEST);
  let totalBytes = 0;
  for (const f of files) {
    const stat = await fs.stat(path.join(DEST, f));
    totalBytes += stat.size;
  }
  console.log(`\nDone. ${files.length} files → ${(totalBytes / 1024 / 1024).toFixed(2)} MB total`);
  if (failed.length) {
    console.error(`Failed: ${failed.length} files`);
    process.exit(1);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
