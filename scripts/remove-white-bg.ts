/**
 * Convert a PNG/JPG with a white background to a transparent-bg WebP,
 * un-premultiplying the colours so the foreground doesn't dim against
 * non-white backgrounds.
 *
 *   npm run image:debg <input> <output.webp> [maxWidth=800]
 *
 * Algorithm:
 *   alpha = 255 − min(R, G, B)                    // white → fully transparent
 *   foreground_RGB = back out white from premultiplied composite
 *
 * Works cleanly for line-art logos on white. Not chroma-key; will not
 * remove a coloured background (use a designer for that).
 */
import sharp from "sharp";

async function main() {
  const [, , src, dst, widthArg] = process.argv;
  if (!src || !dst) {
    console.error("Usage: tsx scripts/remove-white-bg.ts <input> <output.webp> [maxWidth=800]");
    process.exit(1);
  }
  const maxWidth = widthArg ? parseInt(widthArg, 10) : 800;

  const img = sharp(src).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    throw new Error(`Expected 4 channels (RGBA) after ensureAlpha, got ${info.channels}`);
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const minRGB = Math.min(r, g, b);
    const alpha = 255 - minRGB;

    if (alpha === 0) {
      data[i + 3] = 0;
      continue;
    }

    // Unpremultiply: composite = fg*(a/255) + 255*(1 − a/255)
    //              => fg = 255*(composite − (255 − a)) / a
    data[i]     = clamp((r - (255 - alpha)) * 255 / alpha);
    data[i + 1] = clamp((g - (255 - alpha)) * 255 / alpha);
    data[i + 2] = clamp((b - (255 - alpha)) * 255 / alpha);
    data[i + 3] = alpha;
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 92, effort: 5 })
    .toFile(dst);

  console.log(`  ${dst}`);
}

function clamp(v: number) {
  return Math.max(0, Math.min(255, Math.round(v)));
}

main().catch(err => { console.error(err); process.exit(1); });
