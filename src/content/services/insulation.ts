import type { ServicePage } from "./types";

const insulation: ServicePage = {
  slug: "insulation",
  bucket: "Building Repair & Insulation",

  meta: {
    title: "Thermal Insulation Contractor UAE — Sixty Newton Dubai",
    description:
      "Building thermal and acoustic insulation across the UAE. Spray PU foam, EPS / XPS boards, mineral wool, foam-glass. Combo metal roof systems with waterproof topcoat. Dubai Municipality compliant.",
    keywords: [
      "thermal insulation contractor Dubai",
      "building insulation UAE",
      "spray foam insulation Dubai",
      "PU foam metal roof UAE",
      "EPS XPS insulation",
    ],
  },

  hero: {
    eyebrow: "Building Repair & Insulation · Thermal · Acoustic · Combo",
    h1: "Thermal insulation — building envelope, metal roof, MEP, marine.",
    sub: "Spray polyurethane foam for metal roofs. EPS / XPS boards for walls and slabs. Mineral wool for fire-rated partitions. Combo systems that waterproof and insulate in one pass.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Insulation cuts the cooling load. Bad insulation cuts the building.",
      body:
        "Dubai Municipality mandates insulation on every building. The difference between insulation that works and insulation that doesn't shows up two years later in the electricity bill and the moisture stains on the soffit." +
        "\n\n" +
        "We apply spray PU foam (closed-cell, monolithic, self-waterproofing), EPS and XPS boards (with the right ship-lap detailing and no air gaps), mineral wool (for fire-rated partitions), and foam-glass / cellular glass for cryogenic and high-temperature lines.",
    },

    {
      type: "comparison",
      eyebrow: "System types",
      heading: "Six insulation families. One discipline.",
      body: "Each system answers a different question. Spray PU foam dominates metal roofs and complex geometry; EPS / XPS handle walls and slabs; mineral wool is the fire-and-acoustic specialist.",
      table: {
        columns: ["Spray PU foam — closed cell", "EPS boards", "XPS boards", "Mineral wool", "Foam glass", "Combo roof system"],
        rows: [
          { label: "Application",  cells: ["Metal roofs, warehouses, soffits", "Walls, slabs, façades", "High-load areas, podiums", "Fire-rated partitions, MEP", "Cryogenic, hot lines, marine", "Metal roofs"] },
          { label: "Density",      cells: ["35–45 kg/m³",                       "16–30 kg/m³",          "30–45 kg/m³",            "Variable",                    "Cellular glass — rigid",       "PU foam + UV topcoat"] },
          { label: "Strength",     cells: ["Monolithic, self-waterproofing",     "Ship-lap edge, taped joints", "High compressive strength", "Non-combustible, fire-rated", "Dimensionally stable",         "Insulate + waterproof in one trade"] },
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Six disciplined steps.",
      steps: [
        { index: 1, title: "Site survey",          body: "Building envelope assessment, thermal-bridge mapping.",     duration: "½ day" },
        { index: 2, title: "Substrate prep",       body: "Clean, dry surface. Anti-corrosion primer on metal.",       duration: "1 day" },
        { index: 3, title: "Layout planning",      body: "Board cuts, joint stagger plan, edge details.",             duration: "½ day" },
        { index: 4, title: "Application",          body: "Spray, board-fix, or wool-cut per system.",                 duration: "2–5 days" },
        { index: 5, title: "Detailing",            body: "Penetrations, parapet upturns, MEP coordination.",          duration: "1–2 days" },
        { index: 6, title: "Protection / topcoat", body: "UV-stable PU sealer (for foam) or cladding (for boards).",  duration: "1–2 days" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Eleven applications across the building envelope.",
      items: [
        { label: "Warehouse roofs",        icon: "Warehouse" },
        { label: "Villa walls",            icon: "Home" },
        { label: "Building façades",       icon: "Building" },
        { label: "Cold rooms",             icon: "Snowflake" },
        { label: "Hot lines",              icon: "Thermometer" },
        { label: "Pipework",               icon: "Pipe" },
        { label: "Tanks",                  icon: "Container" },
        { label: "Marine hulls",           icon: "Ship" },
        { label: "Refrigerated transport", icon: "Truck" },
        { label: "Acoustic walls",         icon: "Volume2" },
        { label: "Fire-rated walls",       icon: "Flame" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Buildings we've insulated.",
      projects: [
        { name: "Ahlatci Gold Refinery",         location: "Industrial",     year: "2023", scope: "Roof and process insulation" },
        { name: "Warehouse — JAFZA",             location: "Jebel Ali, Dubai", year: "2024", scope: "Combo roof system: PU foam + UV-stable waterproof topcoat" },
        { name: "Cold room — F&B Dubai Hills",   location: "Dubai Hills",    year: "2024", scope: "High-density XPS install for walk-in cold room" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Performance",
      heading: "Spec-grade R-values.",
      body:
        "Typical indicative R-values per 25 mm of system. Actual performance is project-specific and depends on installation quality and thermal bridging — we provide a calculation per the specific drawing on quotation.",
      specs: [
        {
          title: "R-value (per 25 mm)",
          rows: [
            { label: "PU foam",      value: "1.31 m²·K/W" },
            { label: "XPS board",    value: "0.86 m²·K/W" },
            { label: "EPS board",    value: "0.69 m²·K/W" },
            { label: "Mineral wool", value: "0.62 m²·K/W" },
            { label: "Foam glass",   value: "0.50 m²·K/W" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions about insulation.",
      items: [
        { q: "Spray foam vs EPS — when do I want which?",         a: "Spray PU foam for metal roofs, complex geometry, retrofit applications, and anywhere thermal-bridge-free monolithic insulation matters. EPS boards for new-build walls and slabs where you can plan the joint layout, ship-lap the edges and detail penetrations cleanly. Foam is faster but more expensive per m²." },
        { q: "Does spray foam waterproof?",                        a: "Closed-cell PU foam (35 kg/m³ and up) is effectively waterproof — it's a monolithic layer with no joints. It still needs a UV-stable topcoat for outdoor exposure (the foam itself degrades under UV) but it provides the waterproofing function as part of the insulation. This is why combo roof systems use it." },
        { q: "What's R-value vs U-value?",                          a: "R-value is thermal resistance — higher is better. U-value is thermal transmittance — lower is better. They're reciprocals (U = 1/R). Dubai Municipality and most spec documents call out U-value targets for walls and roofs. We quote both on every job." },
        { q: "Dubai Municipality compliance — what do I need?",     a: "Dubai Municipality requires U-value ≤ 0.57 W/m²·K for roofs and ≤ 0.57 W/m²·K for external walls on most building types (residential and commercial). We calculate the build-up to meet or exceed the target and submit the spec with the construction permit." },
        { q: "Can you insulate an existing villa?",                a: "Yes — internal wall insulation (EPS or PU board) for retrofit, attic spray foam for ceilings, and external wall insulation system (EWIS) where façade access permits. Each option has different cost and disruption — we survey before quoting." },
        { q: "Acoustic insulation — different material?",          a: "Mineral wool is the acoustic specialist — it absorbs sound (not just blocks it). For STC-rated partitions in hotels and offices we install rockwool slabs in metal-stud cavities. Thermal insulation alone (EPS, XPS) gives only modest acoustic benefit." },
        { q: "What lifespan?",                                      a: "PU foam: 25–40 years. EPS / XPS boards: 40+ years. Mineral wool: 50+ years. Foam glass: 50+ years. The insulation outlives the building in most cases — what fails is the protection layer above (cladding, screed, waterproofing)." },
        { q: "Cost per square metre?",                              a: "Indicative ranges. Spray PU foam (75 mm): AED 110–180 / m². EPS boards (75 mm) installed: AED 75–135 / m². XPS boards (50 mm): AED 95–160 / m². Mineral wool (75 mm) for fire-rated wall: AED 120–200 / m². Combo roof system: AED 180–280 / m²." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "waterproofing",           title: "Waterproofing",         note: "Combo roof systems pair waterproofing with insulation in one pass." },
        { slug: "bitumen-waterproofing",   title: "Bitumen Waterproofing", note: "Torch-applied membranes paired with foam-board insulation underneath." },
        { slug: "general-maintenance",     title: "Repair & General Maintenance", note: "Annual inspection and repair of insulation systems." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the U-value target. We'll spec the build-up.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation with project-specific R-value calculation back within 48 working hours.",
    },
  ],
};

export default insulation;
