import type { ProjectPage } from "./types";

const address: ProjectPage = {
  slug: "address-boulevard-hotel",

  meta: {
    title: "The Address Boulevard Hotel — Façade Joint Sealing | Sixty Newton",
    description:
      "Sixty Newton case study — The Address Boulevard Hotel, Downtown Dubai. Façade movement-joint sealing across the hotel envelope plus lobby + ballroom marble installation. Mapei Mapeflex + Laticrete systems.",
    keywords: [
      "Address Boulevard Hotel contractor",
      "Downtown Dubai façade sealing",
      "Mapei Mapeflex case study",
      "Laticrete 254 Platinum Rapid",
    ],
  },

  hero: {
    eyebrow: "Reference project · Urban luxury hotel",
    h1: "The Address Boulevard Hotel",
    sub: "Movement-joint sealing across the urban hotel envelope plus lobby and ballroom marble installation — two scopes, two disciplines, one programme.",
  },

  programme: {
    location: "Downtown Dubai",
    year: "2023",
    scope: "Façade joint sealing + lobby marble",
    facts: [
      { label: "Disciplines",    value: "Coatings & Sealants · Marble Installation" },
      { label: "Brands",         value: "MAPEI · Laticrete" },
      { label: "Sector",         value: "Urban luxury hospitality" },
      { label: "Building",       value: "63 storeys, downtown skyline" },
    ],
  },

  story: {
    challenge:
      "Downtown towers move — thermally, with wind load, with daily sun-shadow cycling. The Address Boulevard's façade joints needed re-sealing with a movement-tolerant PU system that wouldn't tear under the building's annual deflection envelope, applied by rope-access teams who could match the consultant's lap and tooling spec without dropping a single squeeze of sealant on the cars below. Separately, the lobby and ballroom required white-marble installation on a hotel-operator's downtime window.",
    approach:
      "Façade: Mapei Mapeflex PU45 + backer rod sized to the joint geometry, 2:1 width-to-depth ratio, hourglass-tooled profile. Rope-access crew rotated on a 4-hour weather window. Marble: Laticrete 254 Platinum Rapid non-staining adhesive on the white marble — the only spec choice that doesn't yellow the stone — back-buttered for ≥95% contact, sound-tested every panel before grouting.",
    outcome:
      "Façade re-seal completed inside a 6-week rope-access programme. Marble lobby + ballroom signed off without a single hollow-spot re-set on the consultant's tap-test. The Address Boulevard is now the reference we lead with on tier-1 urban-hotel tenders requiring both envelope and finish trades.",
  },

  systemsApplied: [
    { discipline: "Specialised Coatings & Sealants", disciplineSlug: "specialised-coatings-and-sealants", brand: "MAPEI",    products: ["Mapeflex PU45", "Backer rod (closed-cell foam)"] },
    { discipline: "Marble Installation",              disciplineSlug: "marble-installation",              brand: "Laticrete", products: ["254 Platinum Rapid (non-staining)", "Hydro Ban (wet-area)"] },
    { discipline: "Polishing — Marble & Floors",      disciplineSlug: "polishing",                         brand: "—",         products: ["On-site final polish through 1500 grit"] },
  ],

  images: {
    hero: "/images/projects/address-boulevard-hotel/hero.webp",
    heroAlt: "The Address Boulevard Hotel, Downtown Dubai — Sixty Newton façade & marble works",
    gallery: [
      "/images/projects/address-boulevard-hotel/gallery-1.webp",
    ],
  },

  relatedDisciplines: [
    { slug: "specialised-coatings-and-sealants", title: "Specialised Coatings & Sealants", note: "Façade movement-joint sealing was the headline scope." },
    { slug: "marble-installation",                title: "Marble Installation",              note: "White-marble lobby and ballroom installation." },
    { slug: "polishing",                          title: "Polishing — Marble & Floors",      note: "On-site polish progression after install." },
  ],

  relatedProjects: [
    { slug: "atlantis-the-royal",     name: "Atlantis The Royal",            location: "Palm Jumeirah, Dubai" },
    { slug: "st-regis-developments",  name: "St. Regis Developments",         location: "UAE" },
  ],
};

export default address;
