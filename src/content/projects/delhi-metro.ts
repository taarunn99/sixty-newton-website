import type { ProjectPage } from "./types";

const delhiMetro: ProjectPage = {
  slug: "delhi-metro",

  meta: {
    title: "Delhi Metro — Concrete Repair + Marble Installation | Sixty Newton",
    description:
      "Sixty Newton case study — Delhi Metro infrastructure scope. Concrete repair package across station structures and quartz marble installation across high-traffic concourse zones. Fast-track infrastructure programme.",
    keywords: [
      "Delhi Metro contractor",
      "metro station concrete repair",
      "quartz marble installation",
      "infrastructure repair contractor",
    ],
  },

  hero: {
    eyebrow: "Reference project · Public infrastructure",
    h1: "Delhi Metro",
    sub: "Concrete repair package across station structures plus quartz marble installation across the high-traffic concourse zones — fast-track infrastructure delivery serving millions of daily commuters.",
  },

  programme: {
    location: "Delhi, India",
    year: "2022",
    scope: "Concrete repair + marble installation",
    facts: [
      { label: "Disciplines",    value: "Repair · Marble (quartz)" },
      { label: "Brands",         value: "MAPEI · Laticrete" },
      { label: "Sector",         value: "Mass-transit public infrastructure" },
      { label: "Throughput",     value: "Millions of daily commuters" },
    ],
  },

  story: {
    challenge:
      "Metro stations are unforgiving. Repair work runs overnight on a 4-hour window between last train and first train. Marble fixed in the concourse needs to survive luggage wheels, footfall, monsoon water and disinfection cycles for two decades. There's no second pass — once a station re-opens, the floor is in service.",
    approach:
      "Repair: Mapei Planitop repair mortars chipped into sound substrate, rebar treated with corrosion inhibitor, cure-accelerated where the next-day train was a hard constraint. Marble: engineered quartz slabs (more thermal-stable than natural marble for high-thermal-cycling infrastructure) on Laticrete C2FT adhesive, back-buttered, sound-tested before grout. Programme synchronised with the metro operator's nightly maintenance window.",
    outcome:
      "Repair scope delivered without a single missed train opening. Quartz concourse floors are still in operational service with no hollow-tile complaints from the maintenance team. Delhi Metro is the reference we lead with on any infrastructure tender where the brief includes 'continuous operations' as a hard constraint.",
  },

  systemsApplied: [
    { discipline: "Repair & General Maintenance", disciplineSlug: "general-maintenance",   brand: "MAPEI",    products: ["Planitop Rasa & Ripara", "Mapegrout T40 (rapid-set)"] },
    { discipline: "Marble Installation",          disciplineSlug: "marble-installation",   brand: "Laticrete", products: ["C2FT rapid adhesive", "Engineered quartz slabs"] },
  ],

  relatedDisciplines: [
    { slug: "general-maintenance", title: "Repair & General Maintenance", note: "Overnight concrete repair was the project's organising constraint." },
    { slug: "marble-installation",  title: "Marble Installation",          note: "Quartz concourse floors deliver marble-grade finish with infrastructure-grade durability." },
    { slug: "large-format-tiling",  title: "Large Format Tiling",          note: "Same trowel + sound-test discipline applied to LFT porcelain on other scopes." },
  ],

  relatedProjects: [
    { slug: "omaxe-mall",          name: "Omaxe Mall",          location: "Delhi, India" },
    { slug: "ahlatci-gold-refinery", name: "Ahlatci Gold Refinery", location: "Industrial" },
  ],
};

export default delhiMetro;
