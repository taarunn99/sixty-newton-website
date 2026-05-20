import type { ProjectPage } from "./types";

const patnaMetro: ProjectPage = {
  slug: "patna-metro-station",

  meta: {
    title: "Patna Metro Station — Self-Levelling + Marble Fixing | Sixty Newton",
    description:
      "Sixty Newton case study — Patna Metro Station. Self-levelling screed to SR1 across the concourse plus quartz marble installation. Greenfield infrastructure programme delivered to mass-transit specification.",
    keywords: [
      "Patna Metro Station contractor",
      "metro concourse marble installation",
      "self-levelling screed infrastructure",
      "Mapei Topcem case study",
    ],
  },

  hero: {
    eyebrow: "Reference project · Greenfield infrastructure",
    h1: "Patna Metro Station",
    sub: "Pumped self-levelling screed across the entire concourse plus quartz marble installation on the platform circulation zones — a greenfield mass-transit programme.",
  },

  programme: {
    location: "Patna, India",
    year: "2024",
    scope: "Self-levelling concourse + marble fixing",
    facts: [
      { label: "Disciplines",   value: "Self-levelling · Marble" },
      { label: "Brands",        value: "MAPEI · Laticrete" },
      { label: "Sector",        value: "Greenfield public infrastructure" },
      { label: "Substrate spec", value: "SR1 flatness across concourse" },
    ],
  },

  story: {
    challenge:
      "A greenfield metro station is a different problem from a refurb. The slab arrives as it pours — and you have one shot to bring it to SR1 flatness before the finish trades follow. Pumping self-levelling compound across thousands of square metres of concourse, around MEP penetrations, day-jointed cleanly, and tile-ready inside the construction programme is the foundation discipline the whole station depends on.",
    approach:
      "Substrate prep: shotblast + Mapei Primer SN to TDS coverage. Pump-mixed Mapei Topcem self-levelling, gauge-raked to target thickness, spike-rollered for de-aeration, day-joints respected and dammed. Marble: Laticrete C2FT rapid-set adhesive on engineered quartz slabs across the platform circulation zones, back-buttered, hollow-tested before grout.",
    outcome:
      "Concourse handed over to the tile trade at SR1 flatness with zero re-work. Quartz marble passed the operator's sound-test audit on first pass. The Topcem + quartz combination is now our standard mass-transit specification for new-build metro and rail projects.",
  },

  systemsApplied: [
    { discipline: "Self-Levelling & Screed", disciplineSlug: "self-levelling",       brand: "MAPEI",    products: ["Topcem screed", "Ultraplan Maxi (skim)", "Primer SN"] },
    { discipline: "Marble Installation",      disciplineSlug: "marble-installation",   brand: "Laticrete", products: ["C2FT rapid adhesive", "Engineered quartz slabs"] },
  ],

  relatedDisciplines: [
    { slug: "self-levelling",       title: "Self-Levelling & Screed", note: "Concourse-wide SR1 substrate prep was the foundation discipline." },
    { slug: "marble-installation",  title: "Marble Installation",      note: "Platform circulation zones in engineered quartz." },
    { slug: "epoxy-flooring",       title: "Epoxy Flooring",            note: "Adjacent technical-area floors used resin systems on the same substrate." },
  ],

  relatedProjects: [
    { slug: "delhi-metro", name: "Delhi Metro", location: "Delhi, India" },
    { slug: "omaxe-mall",   name: "Omaxe Mall",   location: "Delhi, India" },
  ],
};

export default patnaMetro;
