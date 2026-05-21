import type { ProjectPage } from "./types";

const mashaallah: ProjectPage = {
  slug: "mashaallah-building",

  meta: {
    title: "Masha'Allah Building, Al Nahda — Façade Repair + Repaint | Sixty Newton",
    description:
      "Sixty Newton case study — Masha'Allah Building, Al Nahda. Façade crack injection, concrete spall repair and full interior + exterior Dulux repaint package. Diagnosis-first repair scope on an occupied building.",
    keywords: [
      "Al Nahda façade repair",
      "crack injection contractor UAE",
      "Dulux Weathershield case study",
      "Mapei Planitop repair mortar",
    ],
  },

  hero: {
    eyebrow: "Reference project · Repair + refurb",
    h1: "Masha'Allah Building, Al Nahda",
    sub: "Façade crack injection, concrete spall repair and full interior + exterior Dulux repaint package — diagnosis-first repair scope on an occupied residential building.",
  },

  programme: {
    location: "Al Nahda, Sharjah",
    year: "2023",
    scope: "Façade repair + interior + exterior paint",
    facts: [
      { label: "Disciplines",   value: "Concrete repair · Painting · Sealants" },
      { label: "Brands",        value: "MAPEI · AkzoNobel Dulux" },
      { label: "Sector",        value: "Occupied residential" },
      { label: "NDT survey",    value: "Half-cell + carbonation depth" },
    ],
  },

  story: {
    challenge:
      "An occupied residential building in Al Nahda had visible façade cracking, hairline spalling around the parapet and signs of rebar corrosion telegraphing through the paint. The owners had been told by previous contractors to 'just paint over it'. We took the brief as a repair problem, not a paint problem — but the repair work had to happen on an occupied façade with residents still living in the apartments below.",
    approach:
      "Step one: non-destructive testing. Half-cell potential survey, carbonation depth tests, cover-meter rebar mapping. Step two: chip back to sound concrete around exposed rebar, treat rebar with corrosion inhibitor, build back with Mapei Planitop polymer-modified repair mortar. Step three: PU expanding injection on the wet/active hairline cracks, epoxy injection on the dry structural ones. Step four: AkzoNobel Dulux Stucco wall putty + Weathershield exterior + Velvet Touch interior, applied to TDS coverage rates.",
    outcome:
      "Repair scope handed over with a stamped engineering report. 18 months on, the repaired patches have not re-cracked, the paint film is intact, and there's no fresh rebar staining anywhere on the façade. The diagnosis-first approach is now our standard for any refurbishment tender that arrives as a 'paint job'.",
  },

  systemsApplied: [
    { discipline: "Repair & General Maintenance",      disciplineSlug: "general-maintenance",                  brand: "MAPEI",     products: ["Planitop Rasa & Ripara", "Eporip (epoxy injection)", "Carbofix PU (PU injection)"] },
    { discipline: "Interior & Exterior Painting",       disciplineSlug: "painting",                              brand: "AkzoNobel", products: ["Dulux Stucco wall putty", "Dulux Weathershield", "Dulux Velvet Touch"] },
    { discipline: "Specialised Coatings & Sealants",    disciplineSlug: "specialised-coatings-and-sealants",     brand: "MAPEI",     products: ["Mapeflex PU45 (movement joints)"] },
  ],

  images: {
    hero: "/images/projects/mashaallah-building/hero.webp",
    heroAlt: "Masha'Allah Building, Al Nahda Dubai — Sixty Newton repair + paint + sealants",
  },

  relatedDisciplines: [
    { slug: "general-maintenance", title: "Repair & General Maintenance", note: "Diagnosis-first concrete repair was the project foundation." },
    { slug: "painting",             title: "Interior & Exterior Painting",   note: "Dulux Stucco system + Weathershield finish was the visible outcome." },
    { slug: "specialised-coatings-and-sealants", title: "Specialised Coatings & Sealants", note: "Joint sealing around windows and movement zones." },
  ],

  relatedProjects: [
    { slug: "delhi-metro",          name: "Delhi Metro",          location: "Delhi, India" },
    { slug: "ahlatci-gold-refinery", name: "Ahlatci Gold Refinery", location: "Industrial" },
  ],
};

export default mashaallah;
