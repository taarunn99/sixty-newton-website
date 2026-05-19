import type { ServicePage } from "./types";

const marble: ServicePage = {
  slug: "marble-installation",
  bucket: "Tile & Stone Works",

  meta: {
    title: "Marble Installation Dubai — Luxury Stone Fixing UAE",
    description:
      "Laticrete-certified marble installation across UAE. Book-matched panels, large-format slabs, honeycomb-backed cladding. Tier-1 hotel, residence and lobby projects. Hollow-free guarantee.",
    keywords: [
      "marble installation Dubai",
      "marble fixing UAE",
      "luxury marble contractor Dubai",
      "book-matched marble",
      "Laticrete marble installation",
    ],
  },

  hero: {
    eyebrow: "Tile & Stone Works · Laticrete-certified stone setting",
    h1: "Marble set on the right adhesive, in the right pattern, hollow-free.",
    sub: "Book-matched feature walls. Honeycomb-backed lobby slabs. Bookend bathroom vanities. We set marble with the right system for the stone — and we sound-test every panel.",
  },

  primaryBrands: ["laticrete", "mapei"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Stone is unforgiving. The adhesive choice is non-negotiable.",
      body:
        "Natural stone behaves differently from porcelain — it absorbs moisture, it telegraphs adhesive staining, it expands under heat. The wrong cementitious adhesive yellows white marble within months. The wrong waterproofing underneath buckles a slab." +
        "\n\n" +
        "We apply Laticrete and Mapei spec systems for marble — including white marble — with the correct rapid-set, non-staining adhesive (Laticrete 254 Platinum Rapid, Mapei Kerabond T + Isolastic), back-buttered for hollow-free contact, and sound-tested with a tapping rod before joint application.",
    },

    {
      type: "cross-section",
      eyebrow: "Build-up",
      heading: "What sits between the slab and the floor.",
      crossSection: {
        layers: [
          { index: 1, title: "Sealed joint",              detail: "Epoxy or cementitious per spec" },
          { index: 2, title: "Marble slab",               detail: "Variable thickness — book-matched layout" },
          { index: 3, title: "Non-staining rapid adhesive", detail: "5 mm bed — Laticrete 254 Platinum Rapid" },
          { index: 4, title: "Waterproofing (if wet area)", detail: "Mapelastic Smart or Hydro Ban" },
          { index: 5, title: "Substrate",                  detail: "Cementitious screed, cured 28 days" },
        ],
        notes: [
          "Lateral expansion gap at perimeter and every 4–6 m through the field.",
          "Back-butter every slab — ≥ 95% adhesive contact.",
          "Sound-test every panel before grouting.",
        ],
      },
    },

    {
      type: "comparison",
      eyebrow: "Stone-type matrix",
      heading: "Different stones, different rules.",
      body: "What we'd specify for each stone family on a high-end project.",
      table: {
        columns: ["White marble", "Coloured marble", "Granite", "Travertine", "Onyx"],
        rows: [
          { label: "Adhesive", cells: ["Non-staining rapid (Laticrete 254 Platinum Rapid)", "Standard rapid C2FT", "Standard C2FT", "Non-staining + filler", "Non-staining + back-fill"] },
          { label: "Backing",  cells: ["Honeycomb where slab > 900 × 900 mm", "Direct or honeycomb", "Direct", "Direct or backed", "Honeycomb mandatory"] },
          { label: "Sealing",  cells: ["Pre-seal recommended",                 "Optional",            "Optional", "Pre-seal strongly recommended", "Pre-seal mandatory"] },
        ],
      },
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Ten surfaces marble earns.",
      items: [
        { label: "Lobby floors",       icon: "DoorOpen" },
        { label: "Lobby feature walls", icon: "Building" },
        { label: "Bathroom walls",     icon: "Bath" },
        { label: "Bathroom floors",    icon: "Square" },
        { label: "Vanity surfaces",    icon: "Box" },
        { label: "Pool surrounds",     icon: "Waves" },
        { label: "Staircases",         icon: "Footprints" },
        { label: "Reception desks",    icon: "Store" },
        { label: "Bar fronts",         icon: "Wine" },
        { label: "Façade cladding",    icon: "Building2" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Marble we've set and signed off.",
      projects: [
        { name: "The Address Boulevard Hotel", location: "Dubai",       year: "2023", scope: "Lobby and ballroom marble installation" },
        { name: "St. Regis Hotel",              location: "Dubai",       year: "2024", scope: "Suite bathroom marble installation" },
        { name: "Dubai Hills Villas",           location: "Dubai Hills", year: "2023", scope: "Master bathroom book-matched marble" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions luxury clients ask.",
      items: [
        { q: "Why does white marble yellow after a few months?",                  a: "Wrong adhesive. Standard cementitious adhesive contains soluble salts and minor iron content; moisture migrates through the porous marble and brings them to the surface as yellow staining. We use non-staining rapid adhesive (Laticrete 254 Platinum Rapid or Mapei Kerabond T + Isolastic) on all white and pale marbles, no exceptions." },
        { q: "What's 'non-staining' adhesive?",                                   a: "An adhesive formulated with low-alkali cement and selected aggregates that don't migrate through porous stone. Specifically designed for white and translucent marbles. Costs about 30 % more than standard adhesive — and saves the cost of replacing a yellowed feature wall." },
        { q: "How do you handle large-format slabs (e.g. 1.6 m × 3.2 m)?",          a: "Vacuum-cup lifting frame, two-applicator crew, back-buttering both substrate and slab for ≥ 95 % contact, dry-laid in pattern before any adhesive goes down. We refuse to attempt LFT marble without proper handling kit — that's how slabs crack." },
        { q: "Honeycomb-backed slabs — when needed?",                              a: "Mandatory on onyx (always). Recommended on marble slabs > 900 × 900 mm, and on any slab in a vertical or overhead installation. The aluminium honeycomb backing distributes stress and prevents the slab from cracking under its own weight." },
        { q: "What's a sound test and why do you do it?",                          a: "Tapping each installed slab with a phenolic rod and listening for hollow spots. Hollow areas indicate adhesive voids — they fail under thermal cycling and traffic. We sound-test every panel before grouting and re-set any with > 10 % hollow area." },
        { q: "Should marble be sealed before grouting?",                           a: "Yes — for porous marble (Calacatta, Carrara, Statuario, all whites). Penetrating sealer applied before grout prevents grout pigment from staining the stone. For dense marbles (Nero Marquina, Emperador) sealing first is optional but still good practice." },
        { q: "Tile expansion joints — where?",                                     a: "Perimeter (against walls and fixed elements), and every 4–6 m through the field. Filled with matching colour sealant, not grout — grout has no movement capacity and will crack." },
        { q: "Can marble be installed over underfloor heating?",                   a: "Yes — with a slow ramp-up curing schedule, a non-staining flexible adhesive, and a thicker bed (8–10 mm). Marble handles UFH well but the install programme is longer because the heating is turned on gradually after install to let the adhesive cure without thermal shock." },
        { q: "Polished vs honed vs leathered — which finish for what?",            a: "Polished for lobbies and feature walls where you want the stone to read as luxurious. Honed for slip-critical zones and bathrooms — matte, modern. Leathered for kitchens and bars — a textured, low-sheen surface that hides fingerprints and water marks. We polish or hone on site after install when the brief requires it." },
        { q: "How long does a marble lobby take to install?",                      a: "A 100 m² hotel lobby with book-matched feature wall: 14–21 working days end to end (dry-lay + slab prep + adhesive bedding + cure + sound test + grout + polish + handover). Faster with a larger crew but we don't compromise the sound-test discipline to hit a date." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "What pairs with marble.",
      items: [
        { slug: "large-format-tiling", title: "Large Format Tiling",       note: "LFT porcelain when marble isn't the brief, but the look is." },
        { slug: "polishing",           title: "Polishing — Marble & Floors", note: "On-site finishing after install, plus restoration contracts." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the stone schedule. We'll match the system.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default marble;
