import type { ProjectPage } from "./types";

const stRegis: ProjectPage = {
  slug: "st-regis-developments",

  meta: {
    title: "St. Regis Developments — Cementitious + PU Waterproofing | Sixty Newton",
    description:
      "Sixty Newton case study — St. Regis hotel developments in the UAE. Back-of-house cementitious + PU combination waterproofing with MEP coordination. Mapei + X-Calibur systems applied to consultant spec.",
    keywords: [
      "St. Regis contractor UAE",
      "St. Regis waterproofing Dubai",
      "hotel back of house applicator",
      "Mapei X-Calibur case study",
    ],
  },

  hero: {
    eyebrow: "Reference project · Hospitality portfolio",
    h1: "St. Regis Developments",
    sub: "Cementitious + liquid-PU back-of-house waterproofing across St. Regis hotel developments in the UAE — MEP-coordinated, photo-documented, signed-off zone by zone.",
  },

  programme: {
    location: "UAE",
    year: "2024",
    scope: "Cementitious + PU combination, MEP coordination",
    facts: [
      { label: "Disciplines",   value: "Waterproofing · split-system" },
      { label: "Brands",        value: "MAPEI · X-Calibur" },
      { label: "Sector",        value: "Tier-1 hospitality" },
      { label: "Coordination",  value: "Full MEP integration" },
    ],
  },

  story: {
    challenge:
      "St. Regis demands hospitality-grade finishes with hotel-operator standards — and back-of-house waterproofing that won't fail under a live MEP schedule. The brief called for cementitious where tile finishes followed and liquid-PU where podium and roof exposure was the concern, with consultant sign-off photo-documented at every milestone.",
    approach:
      "Combination spec — Mapei Mapelastic family for cementitious zones, X-Calibur PolyU 600 for liquid-PU zones. MEP penetrations were sequenced into the method statement before mobilisation so we never had to re-cut a finished membrane. Inspection Requests submitted for substrate, primer, first coat and final coat per zone.",
    outcome:
      "Sequenced delivery with zero re-work on flood-test inspections. The St. Regis sign-off pack is now part of our standard hospitality reference deck and the project gave us the joint manufacturer-applicator warranty record we use to qualify on tier-1 hospitality tenders.",
  },

  systemsApplied: [
    {
      discipline: "Waterproofing",
      disciplineSlug: "waterproofing",
      brand: "MAPEI",
      products: ["Mapelastic Smart", "Mapelastic Foundation", "Mapenet 150"],
    },
    {
      discipline: "Waterproofing",
      disciplineSlug: "waterproofing",
      brand: "X-Calibur",
      products: ["PolyU 600 liquid PU"],
    },
    {
      discipline: "Marble Installation",
      disciplineSlug: "marble-installation",
      brand: "Laticrete",
      products: ["254 Platinum Rapid", "Hydro Ban"],
    },
  ],

  relatedDisciplines: [
    { slug: "waterproofing",        title: "Waterproofing",         note: "Split-system spec — cementitious + liquid PU." },
    { slug: "marble-installation",  title: "Marble Installation",    note: "Suite bathroom marble across the developments." },
    { slug: "large-format-tiling",  title: "Large Format Tiling",    note: "LFT porcelain for lobby and circulation finishes." },
  ],

  relatedProjects: [
    { slug: "atlantis-the-royal",       name: "Atlantis The Royal",            location: "Palm Jumeirah, Dubai" },
    { slug: "al-wathba-desert-resort",  name: "Al Wathba Desert Resort & Spa",  location: "Abu Dhabi" },
  ],
};

export default stRegis;
