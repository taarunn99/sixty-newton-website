import type { ProjectPage } from "./types";

const ahlatci: ProjectPage = {
  slug: "ahlatci-gold-refinery",

  meta: {
    title: "Ahlatci Gold Refinery — Industrial Epoxy + Roof Insulation | Sixty Newton",
    description:
      "Sixty Newton case study — Ahlatci Gold Refinery. 4,800 m² of industrial epoxy across the processing floor with chemical-resistant top-seal, plus combo roof system (PU foam + UV-stable waterproof topcoat). High-security site discipline.",
    keywords: [
      "Ahlatci Gold Refinery contractor",
      "industrial epoxy refinery floor",
      "high-security industrial flooring",
      "Mapei Mapefloor case study",
      "combo roof system gold refinery",
    ],
  },

  hero: {
    eyebrow: "Reference project · Industrial / high-security",
    h1: "Ahlatci Gold Refinery",
    sub: "4,800 m² of industrial-grade self-levelling epoxy across the processing floor plus a combo roof system that insulates and waterproofs in one trade — delivered under refinery security clearance.",
  },

  programme: {
    location: "Industrial — Ahlatci Group",
    year: "2023",
    scope: "Industrial epoxy floor + combo roof system",
    facts: [
      { label: "Floor area",     value: "4,800 m²" },
      { label: "Disciplines",    value: "Epoxy · Insulation · Waterproofing" },
      { label: "Brands",         value: "MAPEI · X-Calibur" },
      { label: "Sector",         value: "Gold refinery / high-security" },
      { label: "Programme",      value: "Phased to keep refining operations live" },
    ],
  },

  story: {
    challenge:
      "Gold refineries don't shut down. The processing-floor refurbishment had to be sequenced into a working refinery — clean-room hygiene levels, controlled access, chemical resistance to nitric and aqua-regia exposure, and zero programme slip because every closed bay meant lost production. The roof needed to insulate against summer heat-gain AND waterproof against rare-but-aggressive winter rain in one continuous build-up.",
    approach:
      "Floor: shotblast prep + Mapei Mapefloor I 500 W self-levelling epoxy with broadcast quartz and chemical-resistant PU top-seal. Floor sequenced into 6 bays so refining stayed live in the adjacent ones. Roof: spray closed-cell PU foam (35 kg/m³) for monolithic thermal insulation, sealed with UV-stable X-Calibur PolyU 600 topcoat — single combo system covering both the U-value spec and the waterproofing scope.",
    outcome:
      "Floor handed over zero callbacks on chemical-resistance audit. Roof has now seen two full summers with no thermal degradation visible at the PolyU layer. Site has become our standard reference for chemical-aggressive industrial projects and is the case study we lead with on F&B, pharma and refining tenders.",
  },

  systemsApplied: [
    { discipline: "Epoxy Flooring", disciplineSlug: "epoxy-flooring", brand: "MAPEI",     products: ["Mapefloor I 500 W", "Mapefloor Finish 58 W (PU topcoat)", "Quartz broadcast"] },
    { discipline: "Insulation",     disciplineSlug: "insulation",     brand: "X-Calibur",  products: ["Spray PU foam (closed cell, 35 kg/m³)"] },
    { discipline: "Waterproofing",  disciplineSlug: "waterproofing",  brand: "X-Calibur",  products: ["PolyU 600 (UV-stable liquid PU)"] },
  ],

  images: {
    hero: "/images/projects/ahlatci-gold-refinery/hero.webp",
    heroAlt: "Ahlatci Gold Refinery — Sixty Newton industrial epoxy flooring & PU roof",
    gallery: [
      "/images/projects/ahlatci-gold-refinery/gallery-1.webp",
    ],
  },

  relatedDisciplines: [
    { slug: "epoxy-flooring", title: "Epoxy Flooring",   note: "Chemical-resistant industrial floor systems were the core of the project." },
    { slug: "insulation",      title: "Insulation",        note: "Combo roof system — PU foam + waterproof topcoat in one trade." },
    { slug: "general-maintenance", title: "Repair & General Maintenance", note: "Annual condition inspection and re-coat schedule on the floor." },
  ],

  relatedProjects: [
    { slug: "atlantis-the-royal",     name: "Atlantis The Royal",            location: "Palm Jumeirah, Dubai" },
    { slug: "le-meridien-hotels",     name: "Le Méridien Hotels",            location: "Dubai" },
  ],
};

export default ahlatci;
