import type { ProjectPage } from "./types";

const alWathba: ProjectPage = {
  slug: "al-wathba-desert-resort",

  meta: {
    title: "Al Wathba Desert Resort & Spa — Spa Waterproofing | Sixty Newton",
    description:
      "Sixty Newton case study — Al Wathba Desert Resort & Spa, Abu Dhabi. Spa wet-room cementitious waterproofing + podium liquid-PU build-up. Mapei Mapelastic + X-Calibur PolyU 600 systems applied to spec.",
    keywords: [
      "Al Wathba Desert Resort contractor",
      "Abu Dhabi spa waterproofing",
      "X-Calibur PolyU 600 case study",
      "luxury resort applicator UAE",
    ],
  },

  hero: {
    eyebrow: "Reference project · Hospitality / wellness",
    h1: "Al Wathba Desert Resort & Spa",
    sub: "A luxury Abu Dhabi desert retreat where Sixty Newton delivered spa wet-room cementitious waterproofing and the podium liquid-PU build-up underneath the landscape works.",
  },

  programme: {
    location: "Abu Dhabi",
    year: "2022",
    scope: "Spa wet-room + podium liquid-PU waterproofing",
    facts: [
      { label: "Disciplines",    value: "Waterproofing · two systems" },
      { label: "Brands",         value: "MAPEI · X-Calibur" },
      { label: "Sector",         value: "Hospitality / wellness" },
      { label: "Climate",        value: "Desert — high thermal cycling" },
    ],
  },

  story: {
    challenge:
      "Al Wathba is a luxury desert retreat where the spa programme demanded mould-free wet-rooms and the landscaped podium had to survive both standing irrigation water and Abu Dhabi summer thermal cycling. Two different waterproofing problems, two different systems — both with hospitality-grade finish standards above.",
    approach:
      "Spa wet rooms: MAPEI Mapelastic Smart cementitious, mesh-reinforced, 2-coat 2 mm WFT — tile-ready in a week. Podium decks: X-Calibur PolyU 600 UV-stable liquid polyurethane, brushed and rolled in two coats at 1.5 kg/m² total. Both systems primed substrate-specific, both flood-tested before the next trade walked the surface.",
    outcome:
      "Both scopes handed over inside programme. The combination of cementitious for tile-receiving wet zones and liquid-PU for exposed podiums is now our default split-system specification on hospitality projects with both interior and exterior waterproofing scope.",
  },

  systemsApplied: [
    {
      discipline: "Waterproofing",
      disciplineSlug: "waterproofing",
      brand: "MAPEI",
      products: ["Mapelastic Smart", "Mapenet 150"],
    },
    {
      discipline: "Waterproofing",
      disciplineSlug: "waterproofing",
      brand: "X-Calibur",
      products: ["PolyU 600 liquid PU", "Primer system"],
    },
  ],

  relatedDisciplines: [
    { slug: "waterproofing",        title: "Waterproofing",          note: "Cementitious + liquid-PU split-system was the project signature." },
    { slug: "microtopping",         title: "Microtopping",            note: "Decorative wet-room overlay where the design called for it." },
    { slug: "marble-installation",  title: "Marble Installation",     note: "Stone-setting discipline in the spa programme." },
  ],

  relatedProjects: [
    { slug: "atlantis-the-royal",     name: "Atlantis The Royal",      location: "Palm Jumeirah, Dubai" },
    { slug: "st-regis-developments",  name: "St. Regis Developments",   location: "UAE" },
  ],
};

export default alWathba;
