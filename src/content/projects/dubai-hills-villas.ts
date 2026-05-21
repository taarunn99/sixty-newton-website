import type { ProjectPage } from "./types";

const dubaiHills: ProjectPage = {
  slug: "dubai-hills-villas",

  meta: {
    title: "Dubai Hills Villas — Book-Matched Marble + Microcement | Sixty Newton",
    description:
      "Sixty Newton case study — Dubai Hills Villas. Master bathroom book-matched marble installation plus living-area microcement floor and vanity tops. Multi-discipline luxury residential turn-key finish.",
    keywords: [
      "Dubai Hills Villas contractor",
      "book-matched marble Dubai",
      "luxury villa microcement",
      "villa fit-out contractor UAE",
    ],
  },

  hero: {
    eyebrow: "Reference project · Luxury residential",
    h1: "Dubai Hills Villas",
    sub: "Master-bathroom book-matched marble, living-area microcement floors and vanity-top wraps across the cluster — multi-discipline luxury residential turn-key finish.",
  },

  programme: {
    location: "Dubai Hills",
    year: "2023",
    scope: "Marble + microcement + bathroom waterproofing",
    facts: [
      { label: "Disciplines",    value: "Marble · Microtopping · Waterproofing" },
      { label: "Brands",         value: "Laticrete · MAPEI · X-Calibur" },
      { label: "Sector",         value: "Luxury single-family residential" },
      { label: "Programme",      value: "Cluster — phased per villa" },
    ],
  },

  story: {
    challenge:
      "Each villa in the cluster had a different finish brief from a different interior designer, but the underlying disciplines were the same: book-matched white marble feature walls in the master bathrooms, seamless microcement floors and vanity tops in the living areas, and waterproofing build-up under everything. Coordination across IDs, the snagging schedule and the developer's handover programme had to happen without sacrificing the workmanship-warranty standards on any single villa.",
    approach:
      "Marble: Laticrete 254 Platinum Rapid non-staining adhesive on white marble — back-buttered, dry-laid in book-match pattern for designer sign-off before any adhesive went down. Microcement: Mapei Ultratop + custom-pigment tonal pass, hand-trowelled by senior crews, finished with UV-stable PU sealer in matte or satin per ID brief. Waterproofing: Mapelastic Smart under the marble and tile, with Aquadefense in shower zones.",
    outcome:
      "11 villas delivered across the cluster on the developer's phased programme. Zero callbacks on marble yellowing or microcement crazing in the first year. Our default villa finish stack — marble + microcement + waterproofing — was set on this project.",
  },

  systemsApplied: [
    { discipline: "Marble Installation",  disciplineSlug: "marble-installation", brand: "Laticrete", products: ["254 Platinum Rapid (non-staining)", "Hydro Ban (wet-area substrate)"] },
    { discipline: "Microtopping",         disciplineSlug: "microtopping",         brand: "MAPEI",     products: ["Ultratop SL", "UV-stable PU sealer"] },
    { discipline: "Waterproofing",        disciplineSlug: "waterproofing",        brand: "MAPEI",     products: ["Mapelastic Smart", "Mapelastic Aquadefense"] },
  ],

  images: {
    hero: "/images/projects/dubai-hills-villas/hero.webp",
    heroAlt: "Dubai Hills Villa — Sixty Newton marble installation & microtopping",
    gallery: [
      "/images/projects/dubai-hills-villas/gallery-1.webp",
    ],
  },

  relatedDisciplines: [
    { slug: "marble-installation", title: "Marble Installation", note: "Book-matched white-marble feature walls were the project signature." },
    { slug: "microtopping",        title: "Microtopping",         note: "Seamless living-area floors and vanity-top wraps." },
    { slug: "polishing",            title: "Polishing — Marble & Floors", note: "On-site polish after install across the bathrooms." },
  ],

  relatedProjects: [
    { slug: "jumeirah-golf-villas",   name: "Jumeirah Golf Villas",  location: "Dubai" },
    { slug: "st-regis-developments",  name: "St. Regis Developments", location: "UAE" },
  ],
};

export default dubaiHills;
