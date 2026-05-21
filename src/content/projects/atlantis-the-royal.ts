import type { ProjectPage } from "./types";

const atlantis: ProjectPage = {
  slug: "atlantis-the-royal",

  meta: {
    title: "Atlantis The Royal — Wet Area Waterproofing | Sixty Newton",
    description:
      "Sixty Newton waterproofing case study — Atlantis The Royal, Palm Jumeirah. 6,400 m² of back-of-house wet area waterproofing applied to Mapei Mapelastic Smart spec, photo-documented per zone, signed-off IR.",
    keywords: [
      "Atlantis The Royal contractor",
      "Palm Jumeirah waterproofing",
      "Mapei Mapelastic case study",
      "tier-1 hospitality waterproofing UAE",
    ],
  },

  hero: {
    eyebrow: "Reference project · Hospitality",
    h1: "Atlantis The Royal",
    sub: "Back-of-house wet-area waterproofing across 6,400 m² of the ultra-luxury Palm Jumeirah resort — applied to Mapei spec, sequenced around live MEP coordination.",
  },

  programme: {
    location: "Palm Jumeirah, Dubai",
    year: "2023",
    scope: "Back-of-house wet area waterproofing",
    facts: [
      { label: "Scope area",     value: "6,400 m²" },
      { label: "Discipline",     value: "Waterproofing" },
      { label: "Primary brand",  value: "MAPEI" },
      { label: "Programme",      value: "Multi-phase" },
      { label: "Sector",         value: "Ultra-luxury hospitality" },
    ],
  },

  story: {
    challenge:
      "Atlantis The Royal carries the ultra-luxury hospitality programme on Palm Jumeirah — back-of-house wet zones across the resort's hotel core, F&B kitchens and spa support areas needed a waterproofing system that could be applied at scale without compromising on the spec consultants signed off. Substrate variation, live MEP coordination and tight programme windows meant the system had to be brushed in, tile-ready inside a week, and fully IR-documented for every zone.",
    approach:
      "We applied MAPEI Mapelastic Smart reinforced with Mapenet 150 — two coats at 2 mm WFT, mesh-embedded into the first coat, full primer discipline at the bay-by-bay substrate prep. Every lap, every penetration and every upturn was photo-documented before grouting. The consultant pack included a full PAR / TDS / IR record per zone.",
    outcome:
      "All 6,400 m² handed over inside the consultant programme. Zero callbacks on flood-test inspections at handover. The same system spec is now our default for tier-1 hospitality back-of-house wet area work across the UAE.",
  },

  systemsApplied: [
    {
      discipline: "Waterproofing",
      disciplineSlug: "waterproofing",
      brand: "MAPEI",
      products: ["Mapelastic Smart", "Mapenet 150 reinforcing mesh", "Primer SN"],
    },
    {
      discipline: "Large Format Tiling",
      disciplineSlug: "large-format-tiling",
      brand: "MAPEI / Laticrete",
      products: ["Keraflex Maxi S1 Zero", "Ultracolor Plus grout"],
    },
  ],

  images: {
    hero: "/images/projects/atlantis-the-royal/hero.webp",
    heroAlt: "Atlantis The Royal, Palm Jumeirah — Sixty Newton waterproofing reference",
    gallery: [
      "/images/projects/atlantis-the-royal/gallery-1.webp",
      "/images/projects/atlantis-the-royal/gallery-2.webp",
      "/images/projects/atlantis-the-royal/gallery-3.webp",
      "/images/projects/atlantis-the-royal/gallery-4.webp",
      "/images/projects/atlantis-the-royal/gallery-5.webp",
      "/images/projects/atlantis-the-royal/gallery-6.webp",
    ],
  },

  relatedDisciplines: [
    { slug: "waterproofing",       title: "Waterproofing",       note: "The membrane system that anchored the project." },
    { slug: "large-format-tiling", title: "Large Format Tiling", note: "Tile install over the protected substrate." },
    { slug: "microtopping",        title: "Microtopping",         note: "Decorative finish family used elsewhere on the resort." },
  ],

  relatedProjects: [
    { slug: "al-wathba-desert-resort", name: "Al Wathba Desert Resort & Spa", location: "Abu Dhabi" },
    { slug: "st-regis-developments",   name: "St. Regis Developments",         location: "UAE" },
  ],
};

export default atlantis;
