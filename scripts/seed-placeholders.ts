/**
 * Generate visually-coherent placeholder WebPs for service-page imagery
 * until real photos land. Each placeholder is a 1200×800 tonal panel
 * matching the brand palette plus a faint dashed grid + eyebrow text.
 * Real photos replace these one-for-one by filename.
 *
 *   npm run images:seed
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DEST = path.resolve(process.cwd(), "public/images/services");

interface Seed {
  filename: string;
  bg: string;       // hex
  fg: string;       // hex (text + grid)
  label: string;    // eyebrow text
  sub: string;      // small note
}

const SEEDS: Seed[] = [
  {
    filename: "microtopping-before.webp",
    bg: "#1f1c19",
    fg: "#5a5346",
    label: "BEFORE — TILED BATHROOM",
    sub: "placeholder · replace with real photograph",
  },
  {
    filename: "microtopping-after.webp",
    bg: "#c9b59a",
    fg: "#4a3c2a",
    label: "AFTER — MICROCEMENT",
    sub: "placeholder · replace with real photograph",
  },
];

function svgFor(seed: Seed, w: number, h: number): Buffer {
  const grid =
    seed.filename.includes("before")
      ? Array.from({ length: 8 }, (_, i) =>
          `<line x1="0" y1="${(h / 8) * (i + 1)}" x2="${w}" y2="${(h / 8) * (i + 1)}" stroke="${seed.fg}" stroke-width="1" stroke-dasharray="4 6" opacity="0.35"/>` +
          `<line x1="${(w / 8) * (i + 1)}" y1="0" x2="${(w / 8) * (i + 1)}" y2="${h}" stroke="${seed.fg}" stroke-width="1" stroke-dasharray="4 6" opacity="0.35"/>`,
        ).join("")
      : "";
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="${seed.bg}"/>
  ${grid}
  <g font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" fill="${seed.fg}" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - 6}" font-size="22" font-weight="600" letter-spacing="6">${seed.label}</text>
    <text x="${w / 2}" y="${h / 2 + 24}" font-size="13" letter-spacing="2" opacity="0.7">${seed.sub.toUpperCase()}</text>
  </g>
</svg>
  `);
}

async function main() {
  await fs.mkdir(DEST, { recursive: true });
  for (const seed of SEEDS) {
    const out = path.join(DEST, seed.filename);
    await sharp(svgFor(seed, 1200, 800))
      .webp({ quality: 80, effort: 5 })
      .toFile(out);
    const { size } = await fs.stat(out);
    console.log(`  ${seed.filename}  ${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
