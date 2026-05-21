/**
 * One-shot: resize the user's home-hero screenshot to a 1200×630 OG image
 * at q88 PNG, saved to src/app/opengraph-image.png. Next.js App Router
 * auto-picks that filename as the static OG asset, superseding the
 * dynamic opengraph-image.tsx.
 *
 *   npx tsx scripts/resize-og.ts
 */
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC = "/tmp/og-source.png";
const DST = path.resolve(process.cwd(), "src/app/opengraph-image.png");

async function main() {
  await sharp(SRC)
    .resize({ width: 1200, height: 630, fit: "cover", position: "center" })
    .png({ quality: 88, compressionLevel: 9, palette: false })
    .toFile(DST);

  const stat = await fs.stat(DST);
  console.log(`${DST} · ${(stat.size / 1024).toFixed(0)} KB`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
