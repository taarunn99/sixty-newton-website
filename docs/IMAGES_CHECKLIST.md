# Sixty Newton — Image Asset Checklist

This file lists every place the site is currently using a placeholder
and what real image is needed. Hand each image off in the linked source
folder and run the matching optimisation script — the build picks them
up automatically.

> **Location:** `docs/IMAGES_CHECKLIST.md`
> **Last reviewed:** Phase 4 launch prep

---

## Optimisation tooling already in place

| Script | Purpose | Output |
|---|---|---|
| `npm run image:visit <src.jpg> <dest.webp> [width]` | Single-image WebP with EXIF stripped, auto-rotated | per call |
| `npm run image:debg <src.png> <dest.webp> [width]` | Remove white background → transparent WebP (unpremultiplied) | per call |
| `npm run images:seed` | Regenerate the SVG-coded microtopping before/after placeholders | `public/images/services/microtopping-{before,after}.webp` |
| `npm run frames:optimize` | Re-encode the home-page scroll-sequence frames | `public/animation/frame-000.webp …` |

A future batch script can extend the same Sharp pipeline to handle a folder
drop — propose adding `npm run images:batch <src-folder>` once real photos
land. Naming convention should follow §5.6 of the master brief
(`{service}-{descriptor}-{location}.webp`).

---

## 1 · Home page

| Where | Asset | Status | Real-asset spec |
|---|---|---|---|
| Hero | (no photo — atelier headline + dashed frame) | INTENTIONAL | Editorial: nothing needed |
| Scroll sequence | 140 WebP frames at 1600w | DONE | `/public/animation/` (already optimised) |
| Credentials section | (no photo — text + DocButtons) | INTENTIONAL | n/a |
| Home enquiry | (no photo) | INTENTIONAL | n/a |
| Visit-Us section (LocationCard) | Dubai office photo | DONE (placeholder optimised from your iPhone shot) | Real shoot of the Al Quoz office exterior — 1200w + 2000w WebP, portrait 4:5 |

**Replace target:**
- `public/images/home/visit-dubai.webp` (1200w · ≤ 70 KB)
- `public/images/home/visit-dubai@2x.webp` (2000w · ≤ 130 KB)

---

## 2 · Service pages — Hero photographs

Every `/disciplines/<slug>` page currently uses the editorial atelier hero
(dashed frame · Cormorant headline · gold CTAs · brand strip). No
photograph is shown in the hero. The brief expected a full-bleed photo
hero — adding it requires drop-in photos and a small layout switch.

If you want hero photographs, drop a wide landscape WebP per service into
`public/images/services/` with the filename below.

| Slug | Brief moodboard | Filename | Status |
|---|---|---|---|
| `waterproofing` | Two applicators rolling cementitious membrane on a podium, raking light, skyline | `hero-waterproofing.webp` | ⏳ awaiting photo |
| `bitumen-waterproofing` | Flame torch licking the edge of a rolling membrane, smoke just visible, applicator in PPE | `hero-bitumen-waterproofing.webp` | ⏳ |
| `specialised-coatings-and-sealants` | Applicator running a sealant gun along a façade joint, masking tape framing the line | `hero-coatings-sealants.webp` | ⏳ |
| `microtopping` | A sweeping hand-trowelled microcement floor in a luxury villa with dramatic lighting | `hero-microtopping.webp` | ⏳ |
| `epoxy-flooring` | A vast warehouse self-levelling floor mid-application, gauge rake visible, gloss reflection | `hero-epoxy-flooring.webp` | ⏳ |
| `self-levelling` | Flowing creamy self-levelling compound spreading across a warehouse floor | `hero-self-levelling.webp` | ⏳ |
| `marble-installation` | A luxury hotel lobby with book-matched marble feature wall under dramatic lighting | `hero-marble-installation.webp` | ⏳ |
| `large-format-tiling` | Two applicators lifting a vacuum-cup 3.2 m porcelain slab into position | `hero-large-format-tiling.webp` | ⏳ |
| `polishing` | A planetary diamond grinder on a marble floor with water-fed dust suppression | `hero-marble-polishing.webp` | ⏳ |
| `design-concrete` | A polished concrete gallery floor with raking light | `hero-design-concrete.webp` | ⏳ |
| `vinyl-flooring` | Applicator clicking together LVT planks on a freshly screeded substrate | `hero-vinyl-flooring.webp` | ⏳ |
| `insulation` | Spray PU foam being applied to the underside of a metal warehouse roof in golden hour | `hero-insulation.webp` | ⏳ |
| `painting` | Applicator rolling a feature wall in soft afternoon light, Dulux can visible | `hero-painting.webp` | ⏳ |
| `general-maintenance` | Engineer with a crack-width gauge against a concrete column, applicator nearby with injection packers | `hero-repair-maintenance.webp` | ⏳ |

**Spec:** 2560 × 1440 source → encode 1600w and 2560w WebP at q72.
File-size target: ≤ 250 KB at 2×. EXIF stripped.

---

## 3 · Service pages — Microtopping interactive viz

| Where | Asset | Status |
|---|---|---|
| Before/After slider (microtopping) — BEFORE | `public/images/services/microtopping-before.webp` | TEMP placeholder (7 KB SVG) |
| Before/After slider (microtopping) — AFTER | `public/images/services/microtopping-after.webp` | TEMP placeholder (4 KB SVG) |

**Replace target:** real bathroom-before-and-after photos at 1200×800, q72.

---

## 4 · Service pages — ProjectCard imagery

Every service page references projects (`type: "projects"` section).
ProjectCards render a "Photo to follow" dashed slot when `imageUrl` is
absent. Pass `imageUrl` in each service-page content module's `projects`
array when real photos land.

**Spec:** 1600 × 1000 (16:10), q72, ≤ 180 KB. Filename pattern:
`project-<slug>.webp` in `public/images/projects/`.

Already referenced by content modules — no code changes needed once the
file exists at the path.

| Project | Filename |
|---|---|
| Atlantis The Royal | `project-atlantis-the-royal.webp` |
| Al Wathba Desert Resort & Spa | `project-al-wathba-desert-resort.webp` |
| St. Regis (developments) | `project-st-regis-developments.webp` |
| The Address Boulevard Hotel | `project-address-boulevard-hotel.webp` |
| Jumeirah Golf Villas | `project-jumeirah-golf-villas.webp` |
| Le Méridien Hotels | `project-le-meridien-hotels.webp` |
| Dubai Hills Villas | `project-dubai-hills-villas.webp` |
| Ahlatci Gold Refinery | `project-ahlatci-gold-refinery.webp` |
| Masha'Allah Building | `project-mashaallah-building.webp` |
| Delhi Metro | `project-delhi-metro.webp` |
| Patna Metro Station | `project-patna-metro-station.webp` |
| Omaxe Mall | `project-omaxe-mall.webp` |

---

## 5 · Case-study pages (`/portfolio/<slug>`)

Each `/portfolio/<slug>` page reserves a 16:10 dashed-frame photo block
near the top (after the programme facts). Drop the matching image:

**Spec:** 2560 × 1600 hero shot, q72, ≤ 320 KB. Filename:
`case-<slug>-hero.webp` in `public/images/projects/`.

| Slug | Filename |
|---|---|
| `atlantis-the-royal` | `case-atlantis-the-royal-hero.webp` |
| `al-wathba-desert-resort` | `case-al-wathba-desert-resort-hero.webp` |
| `st-regis-developments` | `case-st-regis-developments-hero.webp` |
| (and matching files for the 9 case studies built in Phase 4) | |

Optionally: a 4-image strip per case study for additional context shots.
Filenames: `case-<slug>-{01|02|03|04}.webp`. Wired in once available.

---

## 6 · Open Graph (social-share) images

Currently every page uses the **dynamic** `/opengraph-image` route
(generated from the headline + site name). That's good enough but
generic.

To upgrade per-page, decide:
1. **Keep generic** (current state — zero work, "fine").
2. **Per-service dynamic OG** — Build a `/disciplines/<slug>/opengraph-image.tsx`
   route that composes the service H1 + brand strip on a dark/gold canvas
   using `@vercel/og`. Auto-generated at request time. ~30 min of work.
3. **Hand-designed** — Design 18 unique 1200×630 OG cards in Figma. Better
   visual fidelity, more maintenance.

**Recommendation:** option 2 once real hero photos land.

---

## 7 · Applicator logos (current state)

| Logo | Source | Status |
|---|---|---|
| Mapei | `public/brand/applicators/mapei.png` | DONE |
| Laticrete | `public/brand/applicators/laticrete.webp` | DONE |
| AkzoNobel | `public/brand/applicators/akzonobel.webp` | DONE — background removed via `npm run image:debg` |
| X-Calibur | `public/brand/applicators/xcalibur.webp` | DONE |

No action.

---

## 8 · Client / project logos

| Logo | Path | Status |
|---|---|---|
| Atlantis | `public/brand/clients/atlantis.webp` | DONE |
| Al Wathba | `public/brand/clients/al-wathba.webp` | DONE |
| St. Regis | `public/brand/clients/st-regis.webp` | DONE |
| Le Méridien | `public/brand/clients/le-meridien.webp` | DONE |
| Dubai Hills | `public/brand/clients/dubai-hills.webp` | DONE |
| Emaar | `public/brand/clients/emaar.webp` | DONE |
| Sobha Realty | `public/brand/clients/sobha-realty.webp` | DONE |
| DAMAC | `public/brand/clients/damac.webp` | DONE |

No action.

---

## 9 · Company Profile PDF (urgent — needed before launch)

The /about page has a **Company Profile / Download** section with a
gold CTA pointing to `/docs/sixty-newton-company-profile.pdf`.

**Status:** the PDF is NOT in the repo — the original was 32 MB and
GitHub push timed out trying to upload it. The CTA will 404 until the
file is in place.

**To fix:**
1. Compress the original `Sixty Newton (6).pdf` (32 MB → target 3–5 MB).
   Free options: [ilovepdf.com/compress_pdf](https://www.ilovepdf.com/compress_pdf),
   [smallpdf.com](https://smallpdf.com/compress-pdf),
   or in Preview (macOS): Export → Quartz Filter → Reduce File Size
2. Save the compressed file as `sixty-newton-company-profile.pdf`
3. Drop it into `public/docs/` (replacing the missing file)
4. `git add public/docs/sixty-newton-company-profile.pdf && git commit -m "company profile pdf (compressed)" && git push`

The /about download button + the `/docs/...` URL both pick it up
automatically — no code changes needed once the file is in place.

**Recommended compression:** PDF settings = "eBook" or "Screen" quality.
Strip embedded fonts where possible. Convert any large embedded
images to JPEG q70. Target final size ≤ 5 MB.

---

## TL;DR — when you have a photo shoot

1. Drop a folder of source JPEGs anywhere (e.g. `~/Downloads/sixty-newton-photos/`)
2. Tell me the folder path
3. I'll add a batch optimisation script: `npm run images:batch <folder>`
4. It writes optimised WebPs into `public/images/{services,projects,home}/`
5. Build + push

Until then — every "Photo to follow" placeholder stays as-is, and the page
layout is correct. No rebuild needed when photos finally arrive; just drop
the file and Next picks it up.
