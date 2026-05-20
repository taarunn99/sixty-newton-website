/**
 * Phase-5 fast re-encode of the scroll-sequence frames.
 *
 *   Desktop: 169 frames @ 2400w → 90 frames @ 1800w, WebP q55  (~7 MB target)
 *   Mobile:   85 frames @ 1200w → 45 frames @ 900w,  WebP q55  (~1.4 MB target)
 *
 * Reads the existing WebP frames as sources (no need for the raw JPGs)
 * and samples evenly to hit the new count. Picks every Nth frame so
 * the first and last frames are preserved (hero start + final state).
 *
 * Run with:  npm run frames:fast
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

interface BundleSpec {
  label: string;
  srcDir: string;
  destDir: string;
  srcCount: number;
  destCount: number;
  width: number;
  quality: number;
}

const DESKTOP: BundleSpec = {
  label: "desktop",
  srcDir: path.resolve(process.cwd(), "public/animation/desktop"),
  destDir: path.resolve(process.cwd(), "public/animation/desktop"),
  srcCount: 169,
  destCount: 90,
  width: 1800,
  quality: 55,
};

const MOBILE: BundleSpec = {
  label: "mobile",
  srcDir: path.resolve(process.cwd(), "public/animation/mobile"),
  destDir: path.resolve(process.cwd(), "public/animation/mobile"),
  srcCount: 85,
  destCount: 45,
  width: 900,
  quality: 55,
};

const TMP_SUFFIX = ".__tmp__";

/** Even-spaced sampling that keeps the first and last frames. */
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

async function processBundle(spec: BundleSpec): Promise<void> {
  console.log(`\n[${spec.label}] ${spec.srcCount} → ${spec.destCount} frames at ${spec.width}w q${spec.quality}`);

  const indices = sampleIndices(spec.srcCount, spec.destCount);

  // Stage 1 — re-encode each sampled source into a temp file. Avoids reading
  // a file we're about to overwrite (Sharp is async and would race).
  for (let i = 0; i < indices.length; i++) {
    const srcIdx = indices[i];
    const srcName = `frame-${String(srcIdx).padStart(3, "0")}.webp`;
    const destName = `frame-${String(i).padStart(3, "0")}.webp${TMP_SUFFIX}`;
    const srcPath = path.join(spec.srcDir, srcName);
    const destPath = path.join(spec.destDir, destName);
    await sharp(srcPath)
      .resize({ width: spec.width, withoutEnlargement: true })
      .webp({ quality: spec.quality, effort: 6 })
      .toFile(destPath);
    if ((i + 1) % 10 === 0 || i === indices.length - 1) {
      process.stdout.write(`  encoded ${i + 1}/${indices.length}\n`);
    }
  }

  // Stage 2 — delete every old source frame, then rename temp files to the
  // canonical name. This guarantees we don't have leftover frames 91..168.
  const oldFiles = (await fs.readdir(spec.srcDir))
    .filter(f => /^frame-\d{3}\.webp$/.test(f));
  for (const f of oldFiles) {
    await fs.unlink(path.join(spec.srcDir, f));
  }

  const tmpFiles = (await fs.readdir(spec.destDir))
    .filter(f => f.endsWith(TMP_SUFFIX));
  for (const f of tmpFiles) {
    const finalName = f.slice(0, -TMP_SUFFIX.length);
    await fs.rename(path.join(spec.destDir, f), path.join(spec.destDir, finalName));
  }

  // Stage 3 — total size report
  const files = (await fs.readdir(spec.destDir))
    .filter(f => /^frame-\d{3}\.webp$/.test(f));
  let totalBytes = 0;
  for (const f of files) {
    const stat = await fs.stat(path.join(spec.destDir, f));
    totalBytes += stat.size;
  }
  console.log(`  ${files.length} files · ${(totalBytes / 1024 / 1024).toFixed(2)} MB total`);
}

async function main() {
  await processBundle(DESKTOP);
  await processBundle(MOBILE);
  console.log("\nDone.");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
