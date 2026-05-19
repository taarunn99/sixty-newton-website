import type { ServicePage } from "./types";

const microtopping: ServicePage = {
  slug: "microtopping",
  bucket: "Decorative Concrete",

  meta: {
    title: "Microtopping Contractor Dubai — Seamless Microcement UAE",
    description:
      "3 mm seamless microtopping and microcement applied to floors, walls, stairs and joinery. Hand-trowelled by certified applicators. Hospitality and luxury residential across the UAE.",
    keywords: [
      "microtopping contractor Dubai",
      "microcement Dubai",
      "seamless concrete floor UAE",
      "microtopping applicator",
      "Mapei Ultratop",
      "microcement bathroom Dubai",
    ],
  },

  hero: {
    eyebrow: "Decorative Concrete · 3 mm hand-trowelled overlay",
    h1: "Microtopping at 3 mm. Continuous surface. No joints. No demolition.",
    sub: "Over tile. Over screed. Over plaster. We apply microcement at 3 mm thickness across floors, walls, stairs, vanities and joinery — for a continuous surface nothing else can deliver.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "The finish architects ask for. The system most contractors get wrong.",
      body:
        "Microtopping is the finish luxury residential and boutique hospitality clients keep asking for — and the finish that most applicators get visibly wrong. The cloud pattern is too aggressive, or there's a joint at every doorway, or the surface seals with brush marks." +
        "\n\n" +
        "We apply microcement at 3 mm in 3–4 coats with hand-trowelled tonal variation, top-sealed with a UV-stable PU coat that doesn't yellow under direct sun. Floor or wall, residential or commercial.",
    },

    {
      type: "before-after",
      eyebrow: "Before / After",
      heading: "Same bathroom. Five-day programme. No demolition.",
      pairs: [
        {
          beforeImageUrl: "/images/services/microtopping-before.webp",
          afterImageUrl:  "/images/services/microtopping-after.webp",
          caption:
            "We applied microcement directly over the existing tile. No demolition. No grout lines. Five-day programme, dust-controlled. (Placeholder pair — real shots to follow.)",
        },
      ],
    },

    {
      type: "swatch-picker",
      eyebrow: "Colour & finish",
      heading: "Twelve standard colours. Custom matches on request.",
      body:
        "All colours available in matte, satin or gloss top-seal. Mock-up samples are produced on a 30 × 30 cm board and signed off by the client before site mobilisation.",
      swatches: [
        { slug: "bone",        label: "Bone",        hex: "#E8DFCB" },
        { slug: "linen",       label: "Linen",       hex: "#D9CFB6" },
        { slug: "mushroom",    label: "Mushroom",    hex: "#B7A992" },
        { slug: "stone",       label: "Stone",       hex: "#9F9789" },
        { slug: "mist",        label: "Mist",        hex: "#BEBAB1" },
        { slug: "concrete",    label: "Concrete",    hex: "#8E8B85" },
        { slug: "slate",       label: "Slate",       hex: "#5B5A57" },
        { slug: "charcoal",    label: "Charcoal",    hex: "#33312E" },
        { slug: "sand",        label: "Sand",        hex: "#CDB897" },
        { slug: "warm-grey",   label: "Warm Grey",   hex: "#7D7468" },
        { slug: "pebble",      label: "Pebble",      hex: "#A89B89" },
        { slug: "custom",      label: "Custom",      hex: "#1f1c19" },
      ],
    },

    {
      type: "cross-section",
      eyebrow: "Build-up",
      heading: "A 6-layer 3 mm system, primer to sealer.",
      crossSection: {
        layers: [
          { index: 1, title: "UV-stable PU top-seal (2 coats)", detail: "Matte / satin / gloss" },
          { index: 2, title: "Microcement finish coat",           detail: "≈ 1 mm — trowelled to tonal pattern" },
          { index: 3, title: "Microcement base coat 2",           detail: "≈ 1 mm — over embedded mesh" },
          { index: 4, title: "Microcement base coat 1",           detail: "≈ 1 mm — mesh laid in" },
          { index: 5, title: "Fibreglass mesh",                   detail: "Embedded in base coat 1" },
          { index: 6, title: "Primer + existing substrate",       detail: "Bonding primer on tile, screed or plaster" },
        ],
        notes: [
          "Total system thickness: ≈ 3 mm + sealer.",
          "Mesh bridges hairline movement in the substrate.",
          "Tonal pattern controlled at the finish-coat trowel pass — never at the sealer.",
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps across roughly a working week.",
      steps: [
        { index: 1, title: "Site survey + substrate test", body: "Bond test on existing tile or screed. Moisture and flatness check.", duration: "½ day" },
        { index: 2, title: "Substrate prep + primer",      body: "Mechanical key, dust extraction, bonding primer.",                   duration: "½ day · 24 hr cure" },
        { index: 3, title: "Base coat 1",                  body: "First 1 mm pass — fibreglass mesh laid in.",                          duration: "1 day" },
        { index: 4, title: "Base coat 2",                  body: "Second 1 mm pass over the mesh.",                                     duration: "1 day" },
        { index: 5, title: "Finish coat",                  body: "Hand-trowelled tonal pass — cloud pattern + edge breaks.",            duration: "1 day" },
        { index: 6, title: "Sand + clean",                 body: "Light sand for an even close pore. Vacuum + tack off.",               duration: "½ day" },
        { index: 7, title: "PU sealer × 2 coats",          body: "UV-stable polyurethane sealer in matte / satin / gloss.",             duration: "1 day" },
        { index: 8, title: "Cure & hand over",             body: "Walk-on at 24 hr. Full cure at 7 days. Care guide to client.",        duration: "Week 1 close" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Twelve surfaces. One continuous skin.",
      items: [
        { label: "Living areas",         icon: "Sofa" },
        { label: "Bathrooms",            icon: "Bath" },
        { label: "Kitchens",             icon: "ChefHat" },
        { label: "Showers",              icon: "ShowerHead" },
        { label: "Vanity tops",          icon: "Square" },
        { label: "Staircases",           icon: "Footprints" },
        { label: "Feature walls",        icon: "PanelTop" },
        { label: "Terraces",             icon: "Sun" },
        { label: "Retail floors",        icon: "Store" },
        { label: "Reception lobbies",    icon: "DoorOpen" },
        { label: "Restaurant feature",   icon: "UtensilsCrossed" },
        { label: "Joinery wraps",        icon: "Package" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Surfaces clients keep specifying us for.",
      projects: [
        { name: "Boutique restaurant — DIFC",         location: "DIFC, Dubai",       year: "2024", scope: "240 m² seamless floor + bar wrap" },
        { name: "Luxury villa — Dubai Hills",         location: "Dubai Hills",       year: "2023", scope: "Living area, three bathrooms, vanity tops" },
        { name: "Le Méridien — guestroom refurb",     location: "Dubai",             year: "2022", scope: "Bathroom and wet-area microcement" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Specification",
      heading: "Thickness, sealer, warranty.",
      body:
        "Indicative price: AED 320–420 / m² depending on area, finish complexity, sealer choice and access. Mock-up samples are produced before commitment so the colour and tonal pattern are signed off in advance." +
        "\n\n" +
        "1-year workmanship warranty as standard. UV-stable PU sealer means no yellowing under direct sun. Water-resistant by default; can be made fully waterproof with an extra membrane layer beneath in wet rooms.",
      specs: [
        {
          title: "System",
          rows: [
            { label: "Thickness",  value: "≈ 3 mm + sealer" },
            { label: "Coats",      value: "3–4 + 2 sealer" },
            { label: "Walk-on",    value: "24 hr" },
            { label: "Full cure",  value: "7 days" },
            { label: "Warranty",   value: "1 year" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions clients ask before signing.",
      items: [
        {
          q: "Microtopping vs microcement — same thing?",
          a: "Yes, mostly. Both terms describe a thin (typically 2–4 mm) hand-trowelled polymer-modified cementitious overlay. Different manufacturers use different names for what is essentially the same system family.",
        },
        {
          q: "Can I apply it over my existing tile?",
          a: "Yes — that's one of the main reasons clients choose microtopping. We bond-test the existing tile, key the surface, prime, and apply the system directly. No demolition, no dust event.",
        },
        {
          q: "How thick is the finish?",
          a: "≈ 3 mm of microcement + the sealer film. The build-up bridges hairline movement in the substrate via an embedded fibreglass mesh.",
        },
        {
          q: "Will it crack?",
          a: "Only if the substrate moves. We embed fibreglass mesh in the first base coat to bridge minor hairline movement. For structural cracks, we crack-stitch the substrate first.",
        },
        {
          q: "How does it handle UAE humidity?",
          a: "Once cured and sealed, microtopping is dimensionally stable in UAE humidity. We use a UV-stable PU sealer specifically chosen against yellowing under direct sun.",
        },
        {
          q: "Is it waterproof?",
          a: "Water-resistant by default. Fully waterproof on request — we apply an additional waterproofing membrane (e.g. Mapei Mapelastic Aquadefense) beneath the microcement for wet rooms.",
        },
        {
          q: "How does it wear over 5–10 years?",
          a: "On floors, the sealer is the wear surface — it can be re-coated every 5–7 years without re-doing the microcement. On walls, the system effectively lasts as long as the substrate.",
        },
        {
          q: "Can you match a specific colour?",
          a: "Yes. We produce mock-up samples on a 30 × 30 cm board before site mobilisation. Custom matches against fabric, stone or paint references are routine.",
        },
        {
          q: "How long does the install take?",
          a: "A typical bathroom: 4–6 working days end to end. A villa living area: 7–10 working days. The schedule is driven by cure times between coats, not labour.",
        },
        {
          q: "Pricing per square metre?",
          a: "AED 320–420 / m² depending on area, finish complexity, sealer choice and access. Mock-up samples and method statement are produced before commitment.",
        },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "epoxy-flooring",  title: "Epoxy Flooring",  note: "Where a resin floor system is the right answer instead of a decorative overlay." },
        { slug: "waterproofing",   title: "Waterproofing",    note: "Membrane build-up under microtopping for fully waterproof wet rooms." },
      ],
    },

    {
      type: "cta",
      heading: "Send us a reference image. We'll mock it up.",
      body:
        "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation and a 30 × 30 cm physical sample within one working week.",
    },
  ],
};

export default microtopping;
