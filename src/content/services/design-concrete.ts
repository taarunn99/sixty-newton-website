import type { ServicePage } from "./types";

const designConcrete: ServicePage = {
  slug: "design-concrete",
  bucket: "Decorative Concrete",

  meta: {
    title: "Decorative Concrete Dubai — Polished & Stamped Concrete UAE",
    description:
      "Polished, stamped, exposed-aggregate and colour-hardened decorative concrete across the UAE. Mapei Ultratop + X-Calibur sealer systems. Industrial-look interiors, hospitality, landscape.",
    keywords: [
      "decorative concrete Dubai",
      "polished concrete UAE",
      "stamped concrete Dubai",
      "exposed aggregate driveway",
      "Mapei Ultratop",
    ],
  },

  hero: {
    eyebrow: "Decorative Concrete · Polished · Stamped · Exposed Aggregate",
    h1: "Concrete as a finish — designed, screeded, sealed, signed off.",
    sub: "Polished concrete floor with a near-mirror gloss. Stamped concrete that reads as natural stone. Exposed aggregate driveways. We design, pour, hone and seal — for the architectural look concrete delivers better than any tile imitation.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Concrete became architectural the moment we stopped hiding it.",
      body:
        "Polished concrete, stamped concrete, exposed-aggregate, colour-hardened — these are no longer industrial finishes. They're the surface luxury hospitality and commercial projects are calling for." +
        "\n\n" +
        "We apply Mapei Ultratop SL for designed self-levelling concrete topping, hone existing slabs to a polished finish, and seal everything with UV-stable PU or wax-emulsion penetrating sealer.",
    },

    {
      type: "system-matrix",
      eyebrow: "Pick a finish",
      heading: "Four decorative-concrete families.",
      matrix: {
        intro: "Each finish is built differently. Click through to see the spec, the look and where we'd use it.",
        options: [
          { slug: "polished",       label: "Polished concrete",       recommended: true,  system: { brand: "MAPEI",   name: "Ultratop SL + densifier",       applicationMethod: "Ground 50 → 3000 grit" }, spec: ["Densifier-treated",   "UV-stable PU sealer",       "Industrial-luxe finish",      "8–12-yr wear life"] },
          { slug: "stamped",        label: "Stamped concrete",        recommended: false, system: { brand: "MAPEI",   name: "Colour-hardened + imprint",      applicationMethod: "Stamp wet slab" },           spec: ["Slate, flagstone, wood patterns", "Coloured with hardener",     "Hospitality, landscape",      "Re-seal every 3–5 yr"] },
          { slug: "exposed",        label: "Exposed aggregate",       recommended: false, system: { brand: "Custom",  name: "Aggregate + retarder + wash",     applicationMethod: "Wash surface paste off" },    spec: ["Reveals decorative aggregate", "Driveways, podiums, landscape", "High-grip surface",           "Sealed against staining"] },
          { slug: "colour-hardened", label: "Colour-hardened",         recommended: false, system: { brand: "MAPEI",   name: "Pigmented hardener + UV sealer", applicationMethod: "Trowelled into wet slab" },   spec: ["Custom pigment colours", "Hard-wearing surface",        "Suitable for traffic areas",  "UV-stable topcoat"] },
        ],
        closingNote: "Send us a mood-board image — we'll mock up a sample tile on a 30 × 30 cm board before site mobilisation.",
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps from pour to handover.",
      steps: [
        { index: 1, title: "Site survey",              body: "Substrate assessment, drainage check, drawing cross-check.", duration: "½ day" },
        { index: 2, title: "SL screed if needed",      body: "Mapei Topcem / Ultraplan to bring substrate to spec.",       duration: "1–2 days" },
        { index: 3, title: "Design layer pour",        body: "Mapei Ultratop self-levelling, or designed in-situ slab.",   duration: "1–2 days" },
        { index: 4, title: "Imprint / colour-harden",  body: "Stamps applied while wet; colour-hardener trowelled in.",    duration: "Same-day" },
        { index: 5, title: "Curing window",            body: "Wet-cure under fleece — slows shrinkage cracking.",          duration: "7 days" },
        { index: 6, title: "Grind / hone progression",  body: "Diamond pads through the polished-concrete grit ladder.",    duration: "2–3 days" },
        { index: 7, title: "Densifier",                body: "Lithium silicate densifier hardens the surface.",            duration: "Apply · 24 hr cure" },
        { index: 8, title: "UV-stable PU sealer × 2", body: "Two thin coats. Full cure 7 days.",                          duration: "2 days" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Ten spaces decorative concrete owns.",
      items: [
        { label: "Retail floors",              icon: "Store" },
        { label: "Showrooms",                  icon: "Briefcase" },
        { label: "Gallery spaces",             icon: "Frame" },
        { label: "Hospitality lobbies",        icon: "DoorOpen" },
        { label: "F&B spaces",                 icon: "UtensilsCrossed" },
        { label: "Driveways",                  icon: "Car" },
        { label: "Landscape paving",           icon: "TreePine" },
        { label: "Pool surrounds",             icon: "Waves" },
        { label: "Patios",                     icon: "Sun" },
        { label: "Industrial-aesthetic office", icon: "Building" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Decorative concrete we've signed off.",
      projects: [
        { name: "Boutique gallery — Al Quoz", location: "Al Quoz, Dubai",  year: "2023", scope: "Polished concrete + Ultratop SL, 480 m²" },
        { name: "Restaurant — DIFC",          location: "DIFC, Dubai",     year: "2024", scope: "Stamped concrete floor in heritage stone pattern" },
        { name: "Villa driveway — Emirates Hills", location: "Emirates Hills", year: "2023", scope: "Exposed aggregate driveway" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions about decorative concrete.",
      items: [
        { q: "Polished concrete vs microtopping — what's the difference?",     a: "Polished concrete grinds and polishes the existing structural slab (or a new pour) — you're seeing the actual concrete. Microtopping is a 3 mm overlay applied on top of a substrate (which could be tile, screed, or anything else) — it's a finish, not the slab. Different spec, different look, different cost." },
        { q: "Can you polish my existing slab?",                              a: "Yes if the slab is sound. We core-sample to check density and aggregate distribution, and only proceed if the slab will polish predictably. Older slabs with surface laitance need an Ultratop SL topping coat first." },
        { q: "Does it crack?",                                                  a: "Hairline shrinkage cracks happen on any concrete pour. We control them with steel mesh reinforcement, day-joint planning and wet-curing under fleece. Structural cracks are different — those come from substrate movement and need engineering input first." },
        { q: "How does it handle UV?",                                          a: "We seal with UV-stable PU sealer (not generic acrylic). Indoor polished concrete is unaffected by UV. Outdoor decorative concrete (driveways, patios) needs the UV-stable sealer reapplied every 3–5 years." },
        { q: "Slip rating of polished concrete?",                              a: "R9 polished, R10 honed (lower-grit endpoint). For wet zones we honed-finish at 400 grit instead of polishing to 3000. Anti-slip additive can be added to the topcoat without dulling the polish too much." },
        { q: "Maintenance — what's involved?",                                  a: "Routine: pH-neutral cleaner, microfibre mop. Periodic: re-coat the sealer every 3–5 years. We do this as a maintenance visit — no need to re-grind unless the floor has been heavily abused." },
        { q: "Colours — how customisable?",                                      a: "Polished concrete is grey-on-grey (the natural slab colour with the aggregate revealed). Coloured polished concrete uses pigmented Ultratop SL — we can mix to a sample. Stamped concrete uses colour-hardener — a wide palette of earth tones, terracotta, slate, sand." },
        { q: "Cost per square metre?",                                          a: "Indicative ranges only — quoted after survey. Polish existing slab: AED 180–280 / m². Polished Ultratop SL topping: AED 320–480 / m². Stamped concrete: AED 280–420 / m². Exposed aggregate: AED 220–360 / m². Add for difficult access, mock-ups, and bespoke colour matching." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "microtopping",   title: "Microtopping",        note: "When a 3 mm overlay is the right answer instead of polishing the slab." },
        { slug: "self-levelling", title: "Self-Levelling & Screed", note: "The substrate prep that decorative concrete relies on." },
        { slug: "polishing",      title: "Polishing — Marble & Floors", note: "The same diamond-pad discipline applied to natural stone." },
      ],
    },

    {
      type: "cta",
      heading: "Got a mood board? We'll match the finish.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours — sample tile on request.",
    },
  ],
};

export default designConcrete;
