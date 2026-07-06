import type { ServicePage } from "./types";

const maintenance: ServicePage = {
  slug: "general-maintenance",
  bucket: "Building Repair & Insulation",

  meta: {
    title: "Concrete Repair & Maintenance Dubai — Sixty Newton UAE",
    description:
      "Concrete repair, crack injection, structural strengthening and building maintenance across the UAE. Mapei Planitop repair mortars, epoxy and PU crack injection, CFRP strengthening, signed engineering reports.",
    keywords: [
      "concrete repair contractor Dubai",
      "crack injection UAE",
      "building maintenance specialist Dubai",
      "CFRP strengthening",
      "Mapei Planitop",
    ],
  },

  hero: {
    eyebrow: "Building Repair & Insulation · Concrete repair specialist",
    h1: "Concrete repair, crack injection, structural strengthening — diagnosed before it's quoted.",
    sub: "Cracks, spalls, exposed rebar, water ingress, settlement. We diagnose the cause first, then specify the right Mapei Planitop repair mortar, epoxy or PU injection, CFRP wrap or jacketing — and we document every step.",
  },

  primaryBrands: ["mapei", "xcalibur", "weber"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Most repair work in the UAE treats the symptom. We find the cause.",
      body:
        "A crack is rarely the problem. It's a symptom — of substrate movement, of corroding rebar, of failed waterproofing upstream, of differential settlement." +
        "\n\n" +
        "We diagnose: crack-width measurement, half-cell potential, carbonation depth, cover-meter rebar mapping. Then we specify and apply the right solution: Mapei Planitop polymer-modified repair mortars for spalls, epoxy or PU injection for cracks, CFRP wrap or steel-plate jacketing for structural strengthening, corrosion inhibitor for rebar.",
    },

    {
      type: "comparison",
      eyebrow: "Defect → solution",
      heading: "What you see — what we apply.",
      body: "The first call on any repair brief is diagnosis. Once the defect is named, the system family becomes obvious.",
      table: {
        columns: ["Defect", "Likely cause", "Our solution"],
        rows: [
          { label: "Hairline cracks (< 0.2 mm) — stable",    cells: ["Shrinkage, surface stress", "Surface treatment (Mapei Mapelastic Smart over crack)", "Cosmetic + protective"] },
          { label: "Hairline cracks — active",                cells: ["Substrate movement",         "PU injection (Carbofix PU) for flex",                   "Stops water ingress"] },
          { label: "Wide cracks (0.2–2 mm) — dry",            cells: ["Structural, stable",         "Epoxy injection (Eporip / Sika Epox)",                   "Restores monolithic structure"] },
          { label: "Wide cracks — wet / leaking",             cells: ["Active leak through crack",  "PU expanding injection first, then epoxy",               "Stops water + restores strength"] },
          { label: "Spalling / exposed rebar",                cells: ["Carbonation + corrosion",    "Chip back · treat rebar · Mapei Planitop repair mortar", "Stops corrosion progression"] },
          { label: "Active water ingress",                     cells: ["Failed waterproofing",       "Re-waterproof at source · Idrosilex Pronto negative-side", "Addresses cause + symptom"] },
          { label: "Settlement cracks",                       cells: ["Differential settlement",     "Engineering assessment · jacketing / underpinning",     "Structural intervention"] },
          { label: "Structural strengthening required",       cells: ["Load increase, deterioration", "CFRP wrap (Mapewrap) or steel plate jacketing",         "Adds capacity to existing element"] },
        ],
      },
    },

    {
      type: "brands",
      eyebrow: "Service types",
      heading: "Six ways we engage.",
      lines: [
        { brand: "Crack injection",         systems: "Epoxy (structural restoration) or PU (flexible / leaking cracks). Packer system, photo-documented per joint." },
        { brand: "Concrete spall repair",   systems: "Chip-back, rebar treatment, Mapei Planitop polymer-modified repair mortar, finish to match." },
        { brand: "Corrosion treatment",      systems: "Galvanic anodes, corrosion inhibitor, passivation. Half-cell potential mapping before and after." },
        { brand: "Structural strengthening", systems: "CFRP wrap (Mapewrap carbon fibre), steel-plate jacketing, micro-concrete. Engineer-signed scheme." },
        { brand: "Soil stabilisation",       systems: "High-pressure resin injection for ground stabilisation behind retaining walls and below foundations." },
        { brand: "General maintenance",      systems: "Annual inspection, snag closure, periodic re-coating, condition reports. Maintenance contracts available." },
      ],
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight disciplined steps.",
      steps: [
        { index: 1, title: "Site survey + NDT",          body: "Non-destructive testing — crack width, half-cell, carbonation, cover.", duration: "1 day" },
        { index: 2, title: "Root-cause report",          body: "Engineer's stamp where applicable. Clear findings + recommendation.",  duration: "2–3 days" },
        { index: 3, title: "Method statement + PAR",     body: "Material approval submission. Consultant sign-off pack.",              duration: "1–2 days" },
        { index: 4, title: "Substrate prep",             body: "Chip back, clean, treat rebar, prime per system.",                     duration: "1–2 days" },
        { index: 5, title: "Application",                body: "Injection, repair mortar, or strengthening system per spec.",          duration: "1–5 days" },
        { index: 6, title: "Curing",                     body: "Per material TDS — wet cure for cementitious systems.",                duration: "3–7 days" },
        { index: 7, title: "Surface restoration",        body: "Finish to match surrounding concrete — texture and colour.",           duration: "1–2 days" },
        { index: 8, title: "IR + handover documentation", body: "Photos, NDT before/after, engineer sign-off pack.",                    duration: "1 day" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Twelve element types we repair.",
      items: [
        { label: "Basements",            icon: "ArrowDownToLine" },
        { label: "Foundations",          icon: "Hammer" },
        { label: "Columns",              icon: "Columns3" },
        { label: "Beams",                icon: "AlignVerticalJustifyCenter" },
        { label: "Slabs",                icon: "Square" },
        { label: "Roof slabs",           icon: "Home" },
        { label: "Façades",              icon: "Building" },
        { label: "Water tanks",          icon: "Container" },
        { label: "Swimming pools",       icon: "Waves" },
        { label: "Retaining walls",      icon: "Layers" },
        { label: "Industrial floors",    icon: "Factory" },
        { label: "Marine structures",    icon: "Ship" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Repair work we've documented.",
      projects: [
        { name: "Masha'Allah Building, Al Nahda", location: "Al Nahda, Sharjah", year: "2023", scope: "Façade crack injection + spall repair package" },
        { name: "Delhi Metro infrastructure",      location: "Delhi, India",      year: "2022", scope: "Concrete repair package across station structures" },
        { name: "Industrial warehouse — Mussafah", location: "Mussafah, Abu Dhabi", year: "2024", scope: "Floor and column repair, corrosion treatment" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions about repair.",
      items: [
        { q: "When is a crack structural vs cosmetic?",                  a: "Structural cracks typically: width > 0.3 mm, propagate through full element thickness, active under load, often diagonal. Cosmetic cracks: width < 0.2 mm, surface-only, often pattern (shrinkage) cracking. We measure width with a crack gauge and core-sample where the cause isn't obvious from the surface." },
        { q: "Epoxy injection vs PU injection — which?",                 a: "Epoxy for structural cracks in dry concrete — it restores monolithic strength. PU expanding injection for active leaks or moving cracks — it stops water and flexes with movement. Often we use both: PU first to stop the leak, epoxy second to restore strength." },
        { q: "How do I know if rebar is corroding behind the surface?", a: "Three tests: half-cell potential (electrical reading at the surface), cover meter mapping (locates rebar and measures concrete cover), and carbonation depth (acid-base test on a fresh core). Together they tell us whether the rebar is actively corroding even before spalling is visible." },
        { q: "What's CFRP and when is it used?",                          a: "Carbon Fibre Reinforced Polymer — a thin, high-strength fabric or laminate epoxied to the concrete surface to add tensile capacity. Used when a structural element needs strengthening (e.g. load increase, deterioration) and adding more concrete or steel isn't practical. Faster, lighter, more expensive. Engineer-designed every time." },
        { q: "Will the repaired patch match the surrounding concrete colour?", a: "Usually no — repair mortars have a different binder mix and age at a different rate. We can apply a coloured finish coat or full elevation paint after the repair to disguise the patches. Cosmetic matching is part of our scope when called out in the brief." },
        { q: "Can you stop a live leak from a basement crack?",          a: "Yes — high-pressure PU expanding injection through packers drilled into the crack. The PU expands when it hits water and seals the crack from the inside. Sometimes followed by epoxy injection in dry conditions to restore strength. We've done this on tier-1 hospitality basements in active leak conditions." },
        { q: "Annual maintenance contracts — what's included?",         a: "Typically: quarterly visual inspection, annual NDT scan on critical elements, snag closure of routine cracks and spalls, condition report with photos, recommendations for the year ahead. Bespoke per portfolio — we scope to what the FM team needs." },
        { q: "How quickly can you mobilise for an emergency?",           a: "24–48 hours for an active leak or live structural concern in Dubai / Sharjah / Abu Dhabi. Same day where access is straightforward. Diagnosis first, fix second — we don't pile materials onto a problem before we know the cause." },
        { q: "Do you provide engineering reports?",                       a: "Yes — for structural repair scopes we provide a chartered engineer's stamp on the root-cause report and the repair scheme. Required for insurance, refurbishment permits and litigation. Optional for cosmetic repairs." },
        { q: "Cost — how is it estimated?",                              a: "Three components: diagnosis (NDT survey + report — typically AED 4,000–18,000 depending on scope), repair (per element type and area — quoted after diagnosis), and engineering (where required, AED 6,000–30,000 for a stamped scheme). We quote diagnosis separately so you can decide on the repair scope with data in hand." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "waterproofing",                  title: "Waterproofing",                     note: "When repair reveals a failed membrane upstream." },
        { slug: "insulation",                      title: "Insulation",                         note: "Combined remedial works on roofs and metal envelopes." },
        { slug: "specialised-coatings-and-sealants", title: "Specialised Coatings & Sealants", note: "Joint sealing where movement is the underlying cause." },
      ],
    },

    {
      type: "cta",
      heading: "Got a crack you can't explain? Send us a photo.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Diagnosis-first quotation back within 48 working hours.",
    },
  ],
};

export default maintenance;
