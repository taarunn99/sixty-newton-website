/**
 * One-shot importer for the intern's image drop.
 *
 *   npm run images:intern
 *
 * Walks /Users/tarunshukla/Downloads/SIXTYNEWTON WEBSITE PIX/, maps each
 * sub-folder to a site slug (project or discipline), and emits clean,
 * Apple-class WebP versions into public/images/{type}/{slug}/.
 *
 * Naming convention in the output dir:
 *   - any source file ending in _MAIN / _main → hero.webp
 *   - everything else → gallery-1.webp, gallery-2.webp, ... (alphabetic
 *     order of source filename)
 *
 * Sizes:
 *   - hero        → 1920 w, q82, effort 6
 *   - gallery     → 1600 w, q80, effort 6
 *
 * Existing output files are overwritten — the script is idempotent
 * across re-runs.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_ROOT = "/Users/tarunshukla/Downloads/SIXTYNEWTON WEBSITE PIX";
const OUT_ROOT = path.resolve(process.cwd(), "public/images");

type Target = { type: "projects" | "disciplines"; slug: string };

/**
 * Folder → site-slug mapping. Keys are paths relative to SRC_ROOT.
 * Multiple intern folders can point to the same target (e.g. the
 * primer/screed shots are gallery material for waterproofing /
 * self-levelling disciplines).
 */
const MAPPING: Record<string, Target> = {
  // ── Project case studies ────────────────────────────────────────────
  "PROJECTS/THE ROYALE ATLANTIS": { type: "projects", slug: "atlantis-the-royal" },
  "PROJECTS/Al Wathba Desert Resort & Spa": { type: "projects", slug: "al-wathba-desert-resort" },
  "PROJECTS/DUBAI HILLS VILLA": { type: "projects", slug: "dubai-hills-villas" },
  "PROJECTS/ST REGIS": { type: "projects", slug: "st-regis-developments" },
  "PROJECTS/The Address Boulevard Hotel": { type: "projects", slug: "address-boulevard-hotel" },
  "PROJECTS/AHLATCI GOLD REFINERY": { type: "projects", slug: "ahlatci-gold-refinery" },
  "PROJECTS/JUMEIRAH GOLF VILLAS": { type: "projects", slug: "jumeirah-golf-villas" },
  "PROJECTS/LE MERIDIEN HOTELS": { type: "projects", slug: "le-meridien-hotels" },
  "PROJECTS/DELHI METRO": { type: "projects", slug: "delhi-metro" },
  "PROJECTS/OMAXE MALL": { type: "projects", slug: "omaxe-mall" },
  "PROJECTS/MASHAALLAH BUILDING": { type: "projects", slug: "mashaallah-building" },

  // The "grouting at atlantis" shots belong to the Atlantis case study
  // as additional gallery imagery — not a discipline page.
  "SERVICES PAGE/Sealant at the royal atlantis by sixty newton": {
    type: "projects", slug: "atlantis-the-royal",
  },

  // ── Discipline / service pages ─────────────────────────────────────
  "SERVICES PAGE/EPOXY_FLOORING": { type: "disciplines", slug: "epoxy-flooring" },
  // The intern's "WATERPROOFING" folder is actually all bitumen-torched
  // membrane shots — re-route to the bitumen-waterproofing discipline.
  "SERVICES PAGE/WATERPROOFING": { type: "disciplines", slug: "bitumen-waterproofing" },
  // Primer images are part of the bitumen / heavy-waterproofing prep
  // workflow — route to bitumen-waterproofing rather than vanilla
  // waterproofing (which now uses its own dedicated hero).
  "SERVICES PAGE/PRIMER": { type: "disciplines", slug: "bitumen-waterproofing" },
  // Clean dedicated waterproofing imagery — separate folder so the
  // bitumen content above doesn't bleed in.
  "SERVICES PAGE/WATERPROOFING-LIQUID": { type: "disciplines", slug: "waterproofing" },
  "SERVICES PAGE/MICROTOPPING": { type: "disciplines", slug: "microtopping" },
  "SERVICES PAGE/SELF LEVELING": { type: "disciplines", slug: "self-levelling" },
  "SERVICES PAGE/marble installation": { type: "disciplines", slug: "marble-installation" },
  "SERVICES PAGE/screed": { type: "disciplines", slug: "self-levelling" },
  "SERVICES PAGE/tile installation": { type: "disciplines", slug: "large-format-tiling" },
  "SERVICES PAGE/VINYL FLOORING": { type: "disciplines", slug: "vinyl-flooring" },
  "SERVICES PAGE/POLISHING": { type: "disciplines", slug: "polishing" },
  "SERVICES PAGE/SPECIALISED COATINGS": { type: "disciplines", slug: "specialised-coatings-and-sealants" },
  "SERVICES PAGE/PAINTING": { type: "disciplines", slug: "painting" },
};

const HERO_RE = /_main\.(jpg|jpeg|png|webp|heic|avif)$/i;

function isImage(name: string) {
  return /\.(jpe?g|png|webp|avif)$/i.test(name);
}

async function listImages(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter(e => e.isFile() && isImage(e.name))
    .map(e => e.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }));
}

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function encode(src: string, dst: string, width: number, quality: number) {
  await sharp(src)
    .rotate()                                      // honour EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dst);
}

async function processFolder(relFolder: string, target: Target) {
  const srcDir = path.join(SRC_ROOT, relFolder);
  const outDir = path.join(OUT_ROOT, target.type, target.slug);
  await ensureDir(outDir);

  const files = await listImages(srcDir);
  if (files.length === 0) {
    console.warn(`! ${relFolder}: no images, skipped`);
    return;
  }

  // Split hero vs gallery
  const heroes = files.filter(f => HERO_RE.test(f));
  const gallery = files.filter(f => !HERO_RE.test(f));

  let heroWritten = false;

  // Hero — keep just the first _MAIN match per folder; if multiple
  // folders map to the same slug, only the FIRST processed folder's
  // hero wins (later ones contribute gallery only). The mapping order
  // controls precedence: project hero before discipline hero etc.
  for (const f of heroes) {
    const dst = path.join(outDir, "hero.webp");
    const heroExists = await fs.access(dst).then(() => true).catch(() => false);
    if (!heroExists && !heroWritten) {
      await encode(path.join(srcDir, f), dst, 1920, 82);
      console.log(`  ✓ ${target.type}/${target.slug}/hero.webp  ← ${relFolder}/${f}`);
      heroWritten = true;
    } else {
      // Demote extra hero candidates to gallery
      gallery.unshift(f);
    }
  }

  // Gallery — number contiguously from the highest existing index in
  // the output dir so multiple intern folders can layer galleries on
  // the same site slug without clobbering.
  const existing = (await fs.readdir(outDir))
    .filter(f => /^gallery-\d+\.webp$/.test(f))
    .map(f => Number(f.match(/^gallery-(\d+)\.webp$/)![1]));
  let next = (existing.length ? Math.max(...existing) : 0) + 1;

  for (const f of gallery) {
    const dst = path.join(outDir, `gallery-${next}.webp`);
    try {
      await encode(path.join(srcDir, f), dst, 1600, 80);
      console.log(`  ✓ ${target.type}/${target.slug}/gallery-${next}.webp  ← ${relFolder}/${f}`);
      next++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`  ⚠ skipped ${relFolder}/${f}: ${msg}`);
    }
  }
}

async function main() {
  console.log(`Source: ${SRC_ROOT}`);
  console.log(`Output: ${OUT_ROOT}`);
  console.log("");

  const folders = Object.keys(MAPPING);
  for (const rel of folders) {
    const target = MAPPING[rel];
    console.log(`→ ${rel}  ⇒  ${target.type}/${target.slug}`);
    try {
      await processFolder(rel, target);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`  ✗ ${rel}: ${msg}`);
    }
  }

  console.log("\nDone.");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
