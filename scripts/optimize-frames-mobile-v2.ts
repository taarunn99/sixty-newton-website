/**
 * Mobile frame bundle — Apple-grade smooth.
 *
 * The previous mobile bundle (45 frames @ 900 w q55) looked "Minecraft-y"
 * on phone — visible frame jumps. Apple's iPhone product pages run
 * scroll-controlled animations on mobile at much higher frame density.
 *
 * New bundle: 90 frames @ 900 w q62 ≈ 4 MB total. Same frame count as
 * desktop so motion is fluid; smaller dimension since phones cap at
 * 414 px logical / ~1242 px physical (DPR 3) — 900 w is already 2.17×
 * the largest common phone width.
 *
 * Source: re-samples from the existing 90 desktop frames (1800 w q55)
 * so we don't need the original raw images.
 *
 *   npm run frames:mobile-v2
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.resolve(process.cwd(), "public/animation/desktop");
const DEST_DIR = path.resolve(process.cwd(), "public/animation/mobile");
const SRC_COUNT = 90;
const DEST_COUNT = 90;
const WIDTH = 900;
const QUALITY = 62;
const TMP_SUFFIX = ".__tmp__";

function sampleIndices(srcCount: number, destCount: number): number[] {
  if (destCount >= srcCount) return Array.from({ length: srcCount }, (_, i) => i);
  if (destCount <= 1) return [0];
  const out: number[] = [];
  for (let i = 0; i < destCount; i++) {
    const t = i / (destCount - 1);
    out.push(Math.round(t * (srcCount - 1)));
  }
  return out;
}

async function main() {
  console.log(`Mobile bundle: ${SRC_COUNT} desktop frames → ${DEST_COUNT} frames at ${WIDTH} w q${QUALITY}`);
  await fs.mkdir(DEST_DIR, { recursive: true });

  const indices = sampleIndices(SRC_COUNT, DEST_COUNT);

  for (let i = 0; i < indices.length; i++) {
    const srcIdx = indices[i];
    const srcName = `frame-${String(srcIdx).padStart(3, "0")}.webp`;
    const destName = `frame-${String(i).padStart(3, "0")}.webp${TMP_SUFFIX}`;
    const srcPath = path.join(SRC_DIR, srcName);
    const destPath = path.join(DEST_DIR, destName);
    await sharp(srcPath)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(destPath);
    if ((i + 1) % 15 === 0 || i === indices.length - 1) {
      process.stdout.write(`  encoded ${i + 1}/${indices.length}\n`);
    }
  }

  // Remove any old frames before renaming temp files into place
  const oldFiles = (await fs.readdir(DEST_DIR))
    .filter(f => /^frame-\d{3}\.webp$/.test(f));
  for (const f of oldFiles) {
    await fs.unlink(path.join(DEST_DIR, f));
  }
  const tmpFiles = (await fs.readdir(DEST_DIR))
    .filter(f => f.endsWith(TMP_SUFFIX));
  for (const f of tmpFiles) {
    const finalName = f.slice(0, -TMP_SUFFIX.length);
    await fs.rename(path.join(DEST_DIR, f), path.join(DEST_DIR, finalName));
  }

  const files = (await fs.readdir(DEST_DIR))
    .filter(f => /^frame-\d{3}\.webp$/.test(f));
  let totalBytes = 0;
  for (const f of files) {
    const stat = await fs.stat(path.join(DEST_DIR, f));
    totalBytes += stat.size;
  }
  console.log(`Done. ${files.length} files · ${(totalBytes / 1024 / 1024).toFixed(2)} MB total`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
