import type { ServicePage } from "./types";

const vinyl: ServicePage = {
  slug: "vinyl-flooring",
  bucket: "Flooring Systems",

  meta: {
    title: "LVT & Vinyl Flooring Installation Dubai — Sixty Newton UAE",
    description:
      "LVT, SPC and sheet vinyl flooring installation across UAE. Click, glue-down, loose-lay. Subfloor prep with Mapei self-levelling. Commercial and residential — offices, retail, hospitality, villas.",
    keywords: [
      "LVT vinyl flooring contractor Dubai",
      "luxury vinyl tile installation UAE",
      "commercial vinyl Dubai",
      "SPC flooring installer",
      "sheet vinyl welded seams",
    ],
  },

  hero: {
    eyebrow: "Flooring Systems · LVT · SPC · Sheet Vinyl",
    h1: "LVT installed properly — because the floor is the substrate, not the planks.",
    sub: "Subfloor prepared with Mapei self-levelling. Vapour barrier where moisture demands it. Click, glue-down or loose-lay — we install the system the planks specify, not the one that finishes fastest.",
  },

  primaryBrands: ["mapei", "laticrete"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "LVT fails because the subfloor failed. We fix the subfloor.",
      body:
        "Luxury vinyl planks click together in 20 minutes. The hard part — the part that determines whether the floor lasts 5 years or 15 — happens before the planks come out of the box." +
        "\n\n" +
        "We screed flat to SR1 with Mapei Ultraplan, install moisture barriers where the substrate calls for one, plan the layout to avoid stupid slivers at thresholds, and use the right Mapei or Laticrete adhesive for glue-down systems.",
    },

    {
      type: "comparison",
      eyebrow: "System comparison",
      heading: "Click LVT vs glue-down vs SPC vs sheet vinyl.",
      body: "Four families, four different best-fits. The right one depends on the substrate, the use, and whether the floor needs to be repairable.",
      table: {
        columns: ["Click LVT", "Glue-down LVT", "SPC click", "Sheet vinyl"],
        rows: [
          { label: "Plank build", cells: ["PVC core, 4–5 mm", "PVC, 2–3 mm",         "Stone-polymer core, 5–6 mm", "Continuous roll"] },
          { label: "Subfloor",    cells: ["SR1–SR2",            "SR1",                   "SR1–SR2",                     "SR1 critical"] },
          { label: "Best for",    cells: ["Residential, light commercial", "Heavy commercial, retail", "Mid-commercial, residential", "F&B, healthcare, hygiene-critical"] },
          { label: "UFH-ready",   cells: ["Yes",                "Yes",                    "Check product",                "Yes"] },
          { label: "Wet areas",   cells: ["Limited",            "Yes",                    "Yes",                          "Yes (welded seams)"] },
          { label: "Repair",      cells: ["Easy plank swap",     "Difficult",              "Easy plank swap",              "Difficult"] },
          { label: "Lifespan",    cells: ["10–15 yr",            "15–20 yr",                "12–18 yr",                     "15–20 yr"] },
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps from subfloor to walk-on.",
      steps: [
        { index: 1, title: "Subfloor inspection",       body: "Visual check + moisture test (< 75% RH for adhesive).",  duration: "½ day" },
        { index: 2, title: "Self-levelling screed",     body: "Mapei Ultraplan to SR1. Critical for click systems.",     duration: "1 day" },
        { index: 3, title: "Moisture barrier",          body: "Where the substrate calls for one — vapour-tight membrane.", duration: "½ day" },
        { index: 4, title: "Acclimatisation",           body: "Planks unboxed in space for 48 hr to acclimate.",           duration: "2 days" },
        { index: 5, title: "Dry layout planning",       body: "Balance cuts at thresholds, plan herringbone offset.",     duration: "½ day" },
        { index: 6, title: "Installation",              body: "Click / adhesive / weld — per system.",                    duration: "1–3 days" },
        { index: 7, title: "Edges & transitions",       body: "Threshold strips, skirting, scotia, end profiles.",         duration: "½ day" },
        { index: 8, title: "Walk-on ready",             body: "Immediate for click, 24 hr for glue-down.",                 duration: "Same-day" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Where LVT and sheet vinyl earn their spec.",
      items: [
        { label: "Villas",        icon: "Home" },
        { label: "Apartments",    icon: "Building" },
        { label: "Offices",       icon: "Briefcase" },
        { label: "Retail",        icon: "Store" },
        { label: "F&B",           icon: "UtensilsCrossed" },
        { label: "Schools",       icon: "GraduationCap" },
        { label: "Clinics",       icon: "Stethoscope" },
        { label: "Hotels",        icon: "BedDouble" },
        { label: "Spa / wellness", icon: "Sparkles" },
        { label: "Gym",           icon: "Dumbbell" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Vinyl we've laid.",
      projects: [
        { name: "F&B kitchen — Dubai Hills",  location: "Dubai Hills",  year: "2024", scope: "Welded sheet vinyl with self-coved upturn" },
        { name: "Boutique office — DIFC",     location: "DIFC, Dubai",  year: "2023", scope: "Herringbone LVT with feature borders" },
        { name: "Le Méridien refurb",          location: "Dubai",        year: "2022", scope: "Guestroom LVT installation across multiple floors" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions about LVT and vinyl.",
      items: [
        { q: "LVT vs SPC — which one?",                     a: "LVT (PVC core) is more comfortable underfoot and pairs better with underfloor heating. SPC (stone-polymer core) is more dimensionally stable, better for big open spaces and rooms where direct sun moves the floor. For most residential work we recommend LVT; for big retail floors with daylight, SPC." },
        { q: "Click vs glue-down — when?",                   a: "Click LVT for residential, light commercial, and any space where ease of repair matters (you can lift a damaged plank without ripping up the floor). Glue-down for heavy commercial, retail, F&B and anywhere wheels or heavy furniture roll over the floor — glue-down doesn't shift." },
        { q: "Can vinyl go in a bathroom?",                  a: "Sheet vinyl with welded seams: yes, ideal — fully waterproof. Glue-down LVT: yes with sealed perimeter. Click LVT: not recommended in wet zones — water seeps through the click joints and ruins the subfloor." },
        { q: "Is it waterproof?",                            a: "The planks themselves are 100% waterproof. Joints are not. Sheet vinyl with heat-welded seams is the only fully waterproof vinyl floor system. For wet-zone use, specify accordingly." },
        { q: "How long does it last?",                       a: "Residential click LVT: 10–15 years. Commercial glue-down: 15–20 years. SPC: 12–18 years. Sheet vinyl: 15–20 years. Lifespan depends on the wear-layer thickness — we always quote planks at 0.55 mm or thicker for commercial use." },
        { q: "Can it go over my existing tile?",             a: "Yes — with a self-levelling skim to bridge the grout lines. We never click LVT directly over tile (the grout lines telegraph). We screed flat with Mapei Ultraplan first, then install." },
        { q: "Cost per square metre?",                       a: "Indicative ranges. Subfloor prep + Ultraplan: AED 45–95 / m². Click LVT installed: AED 100–220 / m² (incl. planks). Glue-down LVT: AED 130–260 / m². SPC: AED 110–230 / m². Sheet vinyl welded: AED 140–280 / m²." },
        { q: "How long does install take?",                  a: "A 100 m² villa apartment: 3–5 working days (incl. subfloor prep + acclimatisation + install + edges). A 500 m² commercial office: 7–10 working days. We can stagger across zones to keep parts of the space operational." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "What prepares the floor.",
      items: [
        { slug: "self-levelling",       title: "Self-Levelling & Screed",  note: "The flat substrate every LVT install depends on." },
        { slug: "large-format-tiling",  title: "Large Format Tiling",       note: "Where porcelain is the brief instead of vinyl." },
        { slug: "epoxy-flooring",       title: "Epoxy Flooring",            note: "Heavy-duty resin systems for industrial use cases." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the floor plan. We'll spec the system.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default vinyl;
