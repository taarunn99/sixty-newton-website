import type { ServicePage } from "./types";

const waterproofing: ServicePage = {
  slug: "waterproofing",
  bucket: "Waterproofing Systems",

  meta: {
    title: "Waterproofing Contractor UAE — Sixty Newton",
    description:
      "Brand-certified waterproofing applicator across Dubai, Abu Dhabi and Sharjah. Cementitious, PU, polyurea, GRP and bituminous systems on tier-1 projects. Request a site survey.",
    keywords: [
      "waterproofing contractor UAE",
      "waterproofing Dubai",
      "waterproofing applicator",
      "Mapei waterproofing",
      "polyurethane waterproofing Dubai",
      "cementitious waterproofing UAE",
      "basement waterproofing",
      "roof waterproofing",
    ],
  },

  hero: {
    eyebrow: "Waterproofing Systems · Brand-certified applicator",
    h1: "Waterproofing systems applied to specification — not interpretation.",
    sub: "We apply the system the consultant spec'd — at the WFT they spec'd, at the lap dimensions they spec'd, on the substrate moisture they spec'd. The membrane only fails when one of those is wrong. We get all four right.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Waterproofing the consultant signs off on the first time.",
      body:
        "Waterproofing is the system that fails most often in UAE construction — and it's the system clients hide. By the time water shows up on a ceiling, the membrane underneath has already been failing for months. We work upstream: site survey, substrate prep, primer, the right system at the right thickness, full IR sign-off, and the protection layer before the next trade walks on it." +
        "\n\n" +
        "We're an approved applicator for MAPEI, Laticrete, AkzoNobel and X-Calibur — which means our crews are trained on each manufacturer's protocols and our work qualifies for joint manufacturer-applicator warranties where available. We don't switch systems mid-project. We don't skip the primer to save half a day. We document every step with photos, moisture readings and IR sign-offs that go straight into the project handover file.",
    },

    {
      type: "system-matrix",
      eyebrow: "Choose the system",
      heading: "Pick the application — we'll match the system.",
      matrix: {
        intro:
          "Five common UAE applications, each mapped to the system we'd recommend on site. Click through to see indicative spec and the manufacturer's TDS.",
        options: [
          {
            slug: "wet-area",
            label: "Wet area (bath, kitchen)",
            recommended: false,
            system: {
              brand: "MAPEI",
              name: "Mapelastic Smart + Mapenet 150",
              applicationMethod: "Brush-applied, mesh-reinforced",
            },
            spec: [
              "2 coats · 2 mm WFT",
              "Tile-ready after 7-day cure",
              "Walk-on at 24 hr",
              "5-year workmanship warranty",
            ],
          },
          {
            slug: "flat-roof-podium",
            label: "Flat roof / podium",
            recommended: true,
            system: {
              brand: "X-Calibur",
              name: "PolyU 600 (liquid polyurethane)",
              applicationMethod: "Roller-applied, UV-stable",
            },
            spec: [
              "2 coats · 1.5 kg/m² total",
              "UV stable, no top-coat required",
              "Walk-on at 24–48 hr",
              "10-year workmanship warranty",
            ],
          },
          {
            slug: "basement-negative",
            label: "Basement (negative side)",
            recommended: false,
            system: {
              brand: "MAPEI",
              name: "Idrosilex Pronto",
              applicationMethod: "Cementitious crystalline",
            },
            spec: [
              "2 coats · 2 mm total",
              "Crystalline self-sealing on hairline cracks",
              "Stand water after 7 days",
              "5-year workmanship warranty",
            ],
          },
          {
            slug: "water-tank",
            label: "Water tank lining",
            recommended: false,
            system: {
              brand: "X-Calibur",
              name: "GRP lining system",
              applicationMethod: "Multi-layer fibreglass",
            },
            spec: [
              "Potable-water certified",
              "Multi-layer fibreglass build-up",
              "Hydrostatic test before handover",
              "Up to 15-year workmanship warranty",
            ],
          },
          {
            slug: "swimming-pool",
            label: "Swimming pool",
            recommended: false,
            system: {
              brand: "Laticrete",
              name: "Hydro Ban + 9235",
              applicationMethod: "Liquid + sheet hybrid",
            },
            spec: [
              "ANSI A118.10 compliant",
              "Liquid + sheet hybrid build",
              "Tile or render-ready after cure",
              "10-year workmanship warranty",
            ],
          },
        ],
        closingNote:
          "Not sure which fits your site? Send us the spec or drawing and we'll come back with the right system.",
      },
    },

    {
      type: "cross-section",
      eyebrow: "Build-up",
      heading: "What sits between your slab and the next trade.",
      crossSection: {
        layers: [
          { index: 1, title: "Wearing course / paving",       detail: "Final visible surface" },
          { index: 2, title: "Insulation",                    detail: "Thermal break, per spec" },
          { index: 3, title: "Protection screed",             detail: "Cementitious, ≥ 50 mm" },
          { index: 4, title: "Second membrane coat",          detail: "1 mm WFT — total 2 mm" },
          { index: 5, title: "Reinforcement mesh",            detail: "Mapenet 150, embedded into first coat" },
          { index: 6, title: "First membrane coat",           detail: "1 mm WFT, brush-applied" },
          { index: 7, title: "Primer coat",                   detail: "Mapei Primer SN — 100–150 g/m²" },
          { index: 8, title: "Surface preparation",           detail: "Grind, prime, moisture < 4 % MC" },
          { index: 9, title: "Structural concrete slab",      detail: "Cured 28 days, dust-free" },
        ],
        notes: [
          "Side laps held at 150 mm. End laps at 100 mm. No exceptions.",
          "Second coat brushed perpendicular to first to bridge pinholes.",
          "Protection screed cast before the following trade walks the floor.",
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Seven disciplined steps. Every job.",
      steps: [
        { index: 1, title: "Site survey",            body: "Moisture readings, substrate condition and drawings cross-check.", duration: "½ day" },
        { index: 2, title: "Substrate preparation",  body: "Grind, repair, dust extraction, moisture validation (< 4 % MC for resin systems).", duration: "1–2 days" },
        { index: 3, title: "Priming",                body: "Manufacturer-spec primer at TDS coverage rate.", duration: "2 hr · 24 hr cure" },
        { index: 4, title: "First coat",             body: "Brush, roller or spray per system. Same-day reinforcement embed where required.", duration: "1 day" },
        { index: 5, title: "Second coat",            body: "Applied 24–48 hr after first coat. Full WFT verified.", duration: "1 day" },
        { index: 6, title: "Cure & inspect",         body: "7 days for cementitious, 24–72 hr for PU. Flood test on roofs and podiums.", duration: "3–7 days" },
        { index: 7, title: "Handover IR + protect",  body: "Issue Inspection Request, get consultant sign-off, install protection screed for the next trade.", duration: "1 day" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Twelve applications. One discipline.",
      items: [
        { label: "Wet rooms",       icon: "Droplet" },
        { label: "Flat roofs",      icon: "Home" },
        { label: "Sloped roofs",    icon: "Triangle" },
        { label: "Metal roofs",     icon: "Layers" },
        { label: "Sandwich panel",  icon: "Layers2" },
        { label: "Podium decks",    icon: "Building2" },
        { label: "Basements",       icon: "ArrowDownToLine" },
        { label: "Foundations",     icon: "Hammer" },
        { label: "Water tanks",     icon: "Container" },
        { label: "Swimming pools",  icon: "Waves" },
        { label: "Planters",        icon: "Leaf" },
        { label: "Marine / ship",   icon: "Ship" },
      ],
    },

    {
      type: "brands",
      eyebrow: "Brands we apply",
      heading: "Brand-certified across four manufacturers.",
      lines: [
        { brand: "MAPEI",      systems: "Mapelastic Smart · Mapelastic Foundation · Mapelastic Aquadefense · Idrosilex Pronto · Mapenet 150" },
        { brand: "Laticrete",  systems: "Hydro Ban · Hydro Ban 9235 · Hydro Ban Sheet Membrane · Plazadeck" },
        { brand: "AkzoNobel",  systems: "Dulux Weathershield Waterguard" },
        { brand: "X-Calibur",  systems: "PolyU 600 · PolyU 800 · GRP lining system · Crystalline range" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Where we've stood behind the membrane.",
      projects: [
        { name: "Atlantis The Royal",           location: "Palm Jumeirah, Dubai", year: "2023", scope: "Back-of-house wet-area waterproofing — 6,400 m²" },
        { name: "Al Wathba Desert Resort & Spa", location: "Abu Dhabi",            year: "2022", scope: "Spa wet rooms + podium liquid-PU build-up" },
        { name: "St. Regis — back of house",     location: "Dubai",                year: "2024", scope: "Cementitious + PU combination, MEP coordination" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Warranty",
      heading: "What we stand behind.",
      body:
        "5-year workmanship warranty on cementitious systems. 10 years on liquid PU and bituminous. Up to 20 years on GRP." +
        "\n\n" +
        "Joint manufacturer-applicator warranties are available on Mapei and X-Calibur systems where the site is inspected by the manufacturer at handover. Talk to us before award if a JM warranty is in the spec.",
      specs: [
        {
          title: "Warranty term",
          rows: [
            { label: "Cementitious", value: "5 years" },
            { label: "Liquid PU",    value: "10 years" },
            { label: "Bituminous",   value: "10 years" },
            { label: "GRP",          value: "up to 20 years" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions every consultant asks.",
      items: [
        {
          q: "What's the difference between an applicator and a general waterproofing contractor?",
          a: "An applicator is trained and certified by a specific manufacturer to apply that manufacturer's systems to TDS spec. The work qualifies for joint manufacturer-applicator warranties. A general contractor applies materials from whatever supplier wins the trade; warranties are workmanship-only.",
        },
        {
          q: "Which waterproofing system is best for the UAE climate?",
          a: "Depends on the application. For exposed flat roofs and podiums, UV-stable liquid PU (X-Calibur PolyU 600) handles thermal cycling well. For wet areas under tile, cementitious flexible (Mapei Mapelastic Smart) is the safe default — it's mesh-reinforced and tile-compatible. For water tanks, GRP. We don't recommend one system for everything.",
        },
        {
          q: "How long does waterproofing last?",
          a: "Cementitious systems: 5–10 years. Liquid PU: 10–15 years if protected. GRP: 15–20 years. Self-adhered bituminous sheet: 10–15 years. Lifespan depends as much on the substrate prep and the protection layer above as on the membrane itself.",
        },
        {
          q: "What does it cost per square metre in the UAE?",
          a: "Indicative ranges only — every job is quoted after a site survey. Cementitious: AED 45–75 / m². Liquid PU: AED 75–140 / m². GRP: AED 140–220 / m². Polyurea (sprayed): AED 200–320 / m². Add 15–25 % for difficult access, night works, or fast-track programmes.",
        },
        {
          q: "Do you need to demolish existing finishes?",
          a: "For new construction, no — we waterproof during the build. For refurbishment, we usually do — you can't waterproof over a leaking, contaminated substrate and expect bond. We sometimes overlay with GRP on water tanks where demolition is impractical.",
        },
        {
          q: "How long after waterproofing can the next trade start?",
          a: "Walk-on for cementitious: 24 hr. Full cure: 7 days. PU walk-on: 24–48 hr. Tile-ready cure: 5–7 days. We don't release for the next trade until cure is verified and the IR is signed off.",
        },
        {
          q: "Can you do flood testing?",
          a: "Yes — and we recommend it on every horizontal application. 24–48 hr flood, 50 mm head, monitored leak paths below. Documented with photos and a report.",
        },
        {
          q: "What's a joint manufacturer-applicator warranty?",
          a: "A warranty co-issued by the manufacturer and the applicator that covers both the material and the workmanship. The manufacturer's technical rep inspects the site at key milestones (substrate, primer, first coat, final coat) and signs off. Available on Mapei and X-Calibur systems when registered before mobilisation.",
        },
        {
          q: "Do you handle the prior approval and material approval submittals?",
          a: "Yes — we prepare the Prior Approval Request (PAR), the method statement, the TDS / SDS pack, the mockup proposal, and the Inspection Request (IR) for each milestone. The consultant approval pack is part of our scope.",
        },
        {
          q: "What if the consultant changes the spec mid-job?",
          a: "We re-price and re-submit. We don't apply a system that isn't in writing.",
        },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "What else we'd bring to your project.",
      items: [
        { slug: "epoxy-flooring", title: "Epoxy Flooring",  note: "Resin floor systems that pair with podium and basement waterproofing." },
        { slug: "microtopping",   title: "Microtopping",    note: "Seamless decorative finish over the protected slab." },
      ],
    },

    {
      type: "cta",
      heading: "Got a drawing? Got a leak? Send it over.",
      body:
        "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default waterproofing;
