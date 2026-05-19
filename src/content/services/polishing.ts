import type { ServicePage } from "./types";

const polishing: ServicePage = {
  slug: "polishing",
  bucket: "Tile & Stone Works",

  meta: {
    title: "Marble Polishing Dubai — Floor Restoration UAE",
    description:
      "Diamond-pad marble and stone polishing across Dubai, Abu Dhabi and Sharjah. Honed, polished, crystallised finishes. Floor restoration, scratch removal, hospitality maintenance contracts.",
    keywords: [
      "marble polishing Dubai",
      "floor polishing UAE",
      "marble restoration Dubai",
      "diamond pad polishing",
      "stone polishing contractor",
    ],
  },

  hero: {
    eyebrow: "Tile & Stone Works · Diamond-pad stone restoration",
    h1: "From 30 grit to 3000 — marble polishing the way marble was meant to look.",
    sub: "We grind, hone, polish and — where requested — crystallise. Mirror-finish, honed-matte, or anywhere between. Lead-free chemistry. Water-fed dust-suppression. Hotel-grade results.",
  },

  primaryBrands: ["mapei", "laticrete"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Marble doesn't lose its shine. The wrong chemistry takes it away.",
      body:
        "Old marble loses its lustre because of acidic cleaners, scratches from foot traffic and the wrong sealant choice." +
        "\n\n" +
        "We restore stone the right way — diamond-pad grinding through a measured grit progression, no lead crystallisers (banned in many jurisdictions and bad for the stone), water-fed dust-free, finished with a penetrating sealer that protects without changing the colour.",
    },

    {
      type: "process",
      eyebrow: "Grit progression",
      heading: "Eight pads. Coarse to mirror.",
      steps: [
        { index: 1, title: "30 grit",   body: "Heavy scratch removal. Levels deep damage.",          duration: "Coarse" },
        { index: 2, title: "50 grit",   body: "Levelling — removes coarse pad marks.",                 duration: "Coarse" },
        { index: 3, title: "100 grit",  body: "Cut & smooth — primary refinement.",                    duration: "Medium" },
        { index: 4, title: "200 grit",  body: "Refinement — surface starts to clarify.",               duration: "Medium" },
        { index: 5, title: "400 grit",  body: "Honed-finish stop point. Matte but smooth.",            duration: "Fine" },
        { index: 6, title: "800 grit",  body: "Pre-polish — first sheen visible.",                     duration: "Fine" },
        { index: 7, title: "1500 grit", body: "Polish — high-gloss surface.",                          duration: "Polish" },
        { index: 8, title: "3000 grit", body: "Mirror polish — reflective, premium-hospitality finish.", duration: "Mirror" },
      ],
    },

    {
      type: "comparison",
      eyebrow: "Finish matrix",
      heading: "Honed vs polished vs crystallised vs sealed.",
      body: "The same stone can carry four different finishes. The right one depends on slip rating, traffic, and the look the brief calls for.",
      table: {
        columns: ["Honed", "Polished", "Crystallised", "Sealed only"],
        rows: [
          { label: "Reflectivity",      cells: ["Matte",             "High gloss",         "Mirror",                "Natural"] },
          { label: "Grit endpoint",     cells: ["400",                "1500",                "3000 + chemistry",       "None"] },
          { label: "Slip rating",       cells: ["R10–R11",            "R9",                  "R9",                     "R9–R10"] },
          { label: "Re-polish interval", cells: ["12–18 months",       "8–12 months",         "12–24 months",           "6 months"] },
          { label: "Best for",          cells: ["Bathrooms, slip-critical", "Lobbies, residential", "Hospitality showcases", "Outdoor, patios"] },
        ],
      },
    },

    {
      type: "brands",
      eyebrow: "Service types",
      heading: "Four ways we engage.",
      lines: [
        { brand: "New-install final polish", systems: "After stone setting, before handover. Confirms the design finish on a brand-new floor." },
        { brand: "Restoration polishing",     systems: "Bringing dulled, scratched or etched stone back to spec — through the full grit progression as needed." },
        { brand: "Periodic maintenance",      systems: "Annual or 18-monthly polishing contracts for hotels and high-traffic residences." },
        { brand: "Spot scratch / etch removal", systems: "Single-stone or localised repair without re-polishing the whole floor." },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Ten surfaces we polish.",
      items: [
        { label: "Hotel lobbies",        icon: "DoorOpen" },
        { label: "Hotel corridors",      icon: "AlignJustify" },
        { label: "Villa flooring",       icon: "Home" },
        { label: "Bathroom marble",      icon: "Bath" },
        { label: "Staircases",           icon: "Footprints" },
        { label: "Bar tops",             icon: "Wine" },
        { label: "Reception desks",      icon: "Store" },
        { label: "Retail showrooms",     icon: "ShoppingBag" },
        { label: "Office lobbies",       icon: "Briefcase" },
        { label: "Restaurant features",  icon: "UtensilsCrossed" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Floors we've brought back to spec.",
      projects: [
        { name: "Le Méridien",       location: "Dubai", year: "2023", scope: "Lobby floor restoration — full grit progression" },
        { name: "St. Regis",          location: "Dubai", year: "2024", scope: "Suite bathroom polishing programme" },
        { name: "Jumeirah Golf Villas", location: "Dubai", year: "Ongoing", scope: "Periodic maintenance contract — quarterly visits" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions about polishing.",
      items: [
        { q: "Honed vs polished — which for my villa?",                        a: "Honed for bathrooms, kitchens and any wet zone (R10–R11 slip rating). Polished for living areas, dining rooms and feature walls. We often hone the bathroom and polish the corridor connecting it — same stone, two different finishes through the floor plan." },
        { q: "Marble crystallisation — what is it, is it safe?",               a: "Crystallisation is a chemical treatment applied after polishing that hardens the surface and adds a mirror-grade shine. We use lead-free crystalliser only (some traditional crystallisers contained lead and are now banned in the EU and parts of the GCC). Safe and durable when done with the right chemistry." },
        { q: "How often does marble need re-polishing?",                       a: "Lobby floors: 8–12 months. Residential floors: 18–24 months. Bathroom marble: every 12–18 months if you use acidic cleaners; longer if pH-neutral. Crystallised floors: 12–24 months." },
        { q: "Can you remove etch marks from acidic spills?",                  a: "Yes — etch marks are surface damage in the polished layer. We grind through them with a finer-grit pad progression and re-polish. Deep etches need going back to 200 grit and working back up." },
        { q: "What about scratches?",                                            a: "Same answer — grind through to the depth of the scratch and re-polish. Light scuffs: 800 grit and up. Deep gouges: 100–200 grit and up the full ladder again." },
        { q: "Dust during grinding — how do you handle it?",                   a: "Water-fed pads. The water suppresses dust at the cut and is vacuum-extracted with the slurry. Hotel and occupied-residential projects need this discipline — we don't dry-grind in occupied spaces." },
        { q: "Do you seal after polishing?",                                    a: "Yes — penetrating sealer (not surface coating) applied after the final pad pass. Protects against acid etching and water marks without changing the stone's appearance. Reapplied annually as part of maintenance." },
        { q: "Can polished marble be made anti-slip?",                          a: "Yes — anti-slip treatment chemically micro-etches the surface to raise the slip rating from R9 to R10 or R11 without visibly dulling the polish. Lasts about 18 months before reapplication." },
        { q: "Time on site for a 200 m² lobby?",                               a: "3–5 working days for a full restoration (heavy grind → polish → seal). Periodic maintenance polishing: 1–2 days. We can work overnight in hotels to keep the lobby in service during the day." },
        { q: "Do you offer maintenance contracts?",                            a: "Yes — quarterly or annual contracts for hotels, embassies and high-traffic residences. Includes inspection, spot polish, sealer top-up and a written condition report each visit." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "marble-installation", title: "Marble Installation",       note: "The install that the polishing finishes off." },
        { slug: "large-format-tiling", title: "Large Format Tiling",       note: "LFT porcelain doesn't need polishing, but pairs with marble." },
        { slug: "general-maintenance", title: "Repair & General Maintenance", note: "After-care contracts to keep the polish current." },
      ],
    },

    {
      type: "cta",
      heading: "Lobby looking tired? Send us a photo.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours — including a sample-area test polish on request.",
    },
  ],
};

export default polishing;
