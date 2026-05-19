/**
 * One-shot: optimise the Dubai visit photo into web-ready WebPs.
 * Run with:  npm run image:visit "/absolute/path/to/source.jpg"
 *
 * Output:
 *   public/images/home/visit-dubai.webp     (1200w q72)
 *   public/images/home/visit-dubai@2x.webp  (2000w q72)
 *
 * EXIF (incl. GPS) is stripped — Sharp omits metadata by default unless
 * `.withMetadata()` is called. We never call it.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DEST_DIR = path.resolve(process.cwd(), "public/images/home");
const VARIANTS = [
  { suffix: "",     width: 1200, quality: 72 },
  { suffix: "@2x",  width: 2000, quality: 72 },
];

async function main() {
  const src = process.argv[2];
  if (!src) {
    console.error("Usage: tsx scripts/optimize-visit-image.ts <source.jpg>");
    process.exit(1);
  }

  await fs.mkdir(DEST_DIR, { recursive: true });

  for (const v of VARIANTS) {
    const outPath = path.join(DEST_DIR, `visit-dubai${v.suffix}.webp`);
    await sharp(src)
      .rotate() // auto-orient from EXIF before stripping
      .resize({ width: v.width, withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 5 })
      .toFile(outPath);
    const { size } = await fs.stat(outPath);
    console.log(`  ${path.basename(outPath)}  ${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
