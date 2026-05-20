import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "podium-waterproofing-uae",
  meta: {
    title: "How to spec waterproofing for a UAE podium deck",
    description:
      "Field-applicator guide to specifying waterproofing for a UAE podium deck — system families, substrate prep, lap discipline, flood testing, joint manufacturer-applicator warranties. Written by the team that delivered Atlantis The Royal.",
    keywords: [
      "podium waterproofing UAE",
      "Mapei Mapelastic Smart UAE",
      "X-Calibur PolyU 600",
      "waterproofing spec consultant",
      "joint manufacturer warranty",
    ],
  },
  title: "How to spec waterproofing for a UAE podium deck",
  publishedAt: "2026-05-12",
  author: "Salim Zafar",
  authorRole: "Chief Contractor · Sixty Newton",
  lede:
    "Podium decks are the single most common waterproofing failure in UAE construction. Here is the spec discipline we&apos;ve standardised on across Atlantis, Al Wathba and the St. Regis developments — read it before you publish your next BOQ.",
  relatedDisciplines: ["waterproofing", "bitumen-waterproofing", "insulation"],
  tags: ["Waterproofing", "Spec discipline", "Hospitality", "UAE climate"],
  readTime: "9 min read",
  sections: [
    {
      type: "paragraph",
      body: "If you've ever had a podium deck callback, you already know that the failure point isn't usually the membrane. It's the substrate prep, the lap dimension, the primer coverage, or the protection layer that wasn't installed before the next trade walked the floor. The membrane itself fails closer to the end of its service life than to the start.",
    },
    {
      type: "paragraph",
      body: "This is a practical, applicator-side guide to specifying a podium waterproofing scope on a UAE project. It assumes you're a consultant, developer or project manager preparing a BOQ for a tier-1 hospitality, residential or commercial build. We'll walk the system families, the brand stack we apply, the spec discipline that earns the joint manufacturer warranty, and the common failures we see in tenders that arrive with weaker specs.",
    },

    { type: "heading", body: "Step 1 — Pick the system family before you pick the brand", level: 2 },
    {
      type: "paragraph",
      body: "There are three viable system families for UAE podium decks, and the choice depends on three site facts: exposure (above-grade open podium vs covered under landscape vs trafficked), thermal cycling tolerance required, and the protection layer above the membrane.",
    },
    {
      type: "list",
      items: [
        "Liquid polyurethane (PU) — best for above-grade open podiums with direct sun exposure. UV-stable variants (e.g. X-Calibur PolyU 600) tolerate UAE thermal cycling without a top-coat. Walk-on inside 24–48 hr.",
        "Cementitious flexible (e.g. MAPEI Mapelastic Smart) — best for podium decks that will receive a tile finish above the membrane. Mesh-reinforced, brushable, tile-ready in 7 days.",
        "Bituminous two-layer torch-applied (APP) — best for podium decks that will be heavily protected (landscape, paving, screed). 10–15 year service life, 4+4 mm build-up, 100mm end laps, 150mm side laps.",
      ],
    },
    {
      type: "callout",
      eyebrow: "Rule of thumb",
      body: "If the podium will be tiled, default to cementitious flexible. If it'll be exposed or trafficked, default to liquid PU. If it'll be heavily protected and you want a 15+ year warranty, default to bituminous.",
    },

    { type: "heading", body: "Step 2 — Spec the substrate, not just the membrane", level: 2 },
    {
      type: "paragraph",
      body: "Most BOQ specs name the membrane and stop. That's where the warranty is at risk. The membrane manufacturer's joint applicator warranty depends on a substrate that meets their TDS. Spec the substrate explicitly and you protect both the work and the warranty.",
    },
    {
      type: "list",
      items: [
        "Concrete cured 28 days minimum (ASTM C150 compliant) before membrane application",
        "Surface moisture content below 4% MC for resin systems (handheld moisture meter at minimum 5 locations per 100 m²)",
        "Substrate shotblasted to ICRI CSP profile 2–3 (no grinding alone — the open profile is required for adhesion)",
        "Bituminous primer applied at 300–400 g/m² to the manufacturer's TDS rate, full 24 hr cure before torching",
        "Crack and joint repair completed with resin-bonded stitching before primer",
      ],
    },

    { type: "heading", body: "Step 3 — Be explicit about lap dimensions and reinforcement", level: 2 },
    {
      type: "paragraph",
      body: "Every system fails at its laps. The single most common cause of UAE podium callbacks we audit is undersized laps. Spec them explicitly — the BOQ language should leave no interpretation.",
    },
    {
      type: "list",
      items: [
        "Bituminous: 100mm end laps, 150mm side laps. Both layers offset 50% relative to each other. Visible bitumen bead after torch.",
        "Liquid PU: brush the second coat perpendicular to the first. Pinhole-bridging mesh (e.g. Mapenet 150) embedded between coats at vulnerable junctions.",
        "Cementitious: 2-coat 2mm WFT total. Mapenet 150 mesh embedded into the first coat, second coat brushed perpendicular.",
      ],
    },

    { type: "heading", body: "Step 4 — Flood test before the next trade walks the floor", level: 2 },
    {
      type: "paragraph",
      body: "Spec a 24–48 hour flood test at 50mm head, monitored at the perimeter and the floor below. Document with photographs and a written report. Costs almost nothing. Saves a six-figure rip-up. The flood test is the single most important pre-handover deliverable in a podium waterproofing scope — yet it's the line most often value-engineered out of a tender.",
    },
    {
      type: "callout",
      eyebrow: "Discipline note",
      body: "We've never installed a flood test that didn't catch at least one fishmouth or pinhole on a freshly-applied membrane. The deck looks perfect right up until the water finds the gap. That's the test's job.",
    },

    { type: "heading", body: "Step 5 — Register the joint manufacturer warranty before mobilisation", level: 2 },
    {
      type: "paragraph",
      body: "Joint manufacturer-applicator warranties (10–20 years depending on system) require manufacturer inspection at substrate, primer, first coat and final coat. The inspection has to be registered BEFORE the work begins. If you spec it after the membrane is on the deck, you've already missed the discipline gates.",
    },
    {
      type: "paragraph",
      body: "MAPEI and X-Calibur both run joint-warranty programmes in the UAE. Your applicator (us, or whoever) submits the registration on award; the manufacturer's technical rep attends each milestone; the warranty is co-issued at handover. Worth its weight in gold on tier-1 hospitality projects where the operator demands 10+ years of cover.",
    },

    { type: "heading", body: "Step 6 — Anticipate the protection layer", level: 2 },
    {
      type: "paragraph",
      body: "The membrane is rarely the wearing surface. Whatever sits above — screed, insulation, paving, landscape — is your protection layer. If you don't specify it, the next trade will pour, walk and drop onto the membrane and you'll have hidden damage you'll only find when water finds it.",
    },
    {
      type: "list",
      items: [
        "Protection screed (cementitious, ≥50mm) above bituminous membranes before any traffic",
        "Geotextile separator (300 gsm minimum) between the membrane and the insulation layer to prevent puncture",
        "Reinforced insulation (XPS, 30–45 kg/m³) where the podium takes vehicular load",
        "Wearing course / paving as the visible surface — large-format porcelain, natural stone, or design concrete depending on the architecture",
      ],
    },

    { type: "heading", body: "What we apply, and why we apply it", level: 2 },
    {
      type: "paragraph",
      body: "On UAE podium decks our default split-system spec is X-Calibur PolyU 600 for exposed zones and MAPEI Mapelastic Smart with Mapenet 150 for tile-receiving zones. Both registered under joint manufacturer-applicator warranty programmes. Both photo-documented per zone in the consultant handover pack.",
    },
    {
      type: "paragraph",
      body: "If you're preparing a BOQ for a podium scope and would like the spec language reviewed before tender, send us the drawings — we'll mark up the membrane lines and lap discipline against the manufacturer TDS and return a clean spec within a working week. No fee, no obligation. The cost is in not catching the gaps now.",
    },

    {
      type: "pullquote",
      body: "We have never had a callback on a podium where the substrate prep, the lap dimension and the flood test were all specced explicitly in the BOQ. Where they weren't, we've patched dozens.",
      attribution: "Salim Zafar, Chief Contractor",
    },
  ],
};

export default post;
