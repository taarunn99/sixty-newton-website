import type { ServicePage } from "./types";

const selfLevelling: ServicePage = {
  slug: "self-levelling",
  bucket: "Flooring Systems",

  meta: {
    title: "Self-Levelling Screed Dubai — Floor Levelling UAE",
    description:
      "Pump-applied self-levelling screed across Dubai, Abu Dhabi and Sharjah. Mapei Ultraplan and Topcem systems. 3–50 mm thickness, fast-cure, ready for tile, vinyl, epoxy or microcement.",
    keywords: [
      "self levelling screed Dubai",
      "self levelling cement UAE",
      "floor screed contractor Dubai",
      "Mapei Ultraplan",
      "Mapei Topcem",
    ],
  },

  hero: {
    eyebrow: "Flooring Systems · Mapei Ultraplan / Topcem certified",
    h1: "Pump-applied self-levelling screed — flat enough for the finish above to behave.",
    sub: "From a 3 mm smoothing skim to a 50 mm structural screed. Pumped. Gauge-raked. Spiked. Ready for the next trade in 24 hours.",
  },

  primaryBrands: ["mapei", "laticrete"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "The system every floor finish depends on — and the one most projects under-budget.",
      body:
        "A 2 mm bow in a 6 m room sounds like nothing. Tile a large-format slab over it and you'll see daylight under the diagonal." +
        "\n\n" +
        "We pump self-levelling compounds from Mapei (Ultraplan, Ultraplan Maxi, Planitop) and Laticrete (Supercap, NXT) to deliver flatness tolerances that match the finish above — whether that's microcement at 3 mm, LVT at 2 mm, large-format porcelain at 3 mm, or epoxy at 5 mm.",
    },

    {
      type: "system-matrix",
      eyebrow: "Choose the screed",
      heading: "Match the overlay to the right SL system.",
      matrix: {
        intro: "Six overlay types — six recommended self-levelling systems. The starred one is what we'd specify by default when nothing else in the brief constrains us.",
        options: [
          { slug: "microcement",   label: "Microcement / micro-topping", recommended: false, system: { brand: "MAPEI", name: "Ultraplan", applicationMethod: "Pumped, 3–10 mm" },          spec: ["3–10 mm thickness", "Walk-on 2–4 hr", "Finish-ready 12–24 hr", "SR1 achievable"] },
          { slug: "lvt",           label: "LVT, vinyl, carpet",          recommended: false, system: { brand: "MAPEI", name: "Ultraplan", applicationMethod: "Pumped, 3–10 mm" },          spec: ["3–10 mm thickness", "Tight flatness for clicking systems", "Walk-on 2–4 hr"] },
          { slug: "lft",           label: "Large-format porcelain / tile", recommended: false, system: { brand: "MAPEI", name: "Ultraplan Maxi", applicationMethod: "Pumped, 10–40 mm" },  spec: ["10–40 mm thickness", "Walk-on 12 hr", "Tile-ready 24–72 hr"] },
          { slug: "epoxy",         label: "Epoxy resin floor",            recommended: true,  system: { brand: "MAPEI", name: "Topcem + Mapefer", applicationMethod: "Pumped, 20–50 mm" }, spec: ["20–50 mm thickness", "Cure to < 4% MC before resin", "Walk-on 24 hr", "Full cure 7 days"] },
          { slug: "underfloor",    label: "Heated / underfloor system",   recommended: false, system: { brand: "MAPEI", name: "Topcem Pronto", applicationMethod: "Pumped, 30–50 mm" },  spec: ["30–50 mm thickness", "Pours around UFH pipes", "Walk-on 24 hr"] },
          { slug: "fast-track",    label: "Fast-track structural",        recommended: false, system: { brand: "MAPEI", name: "Mapecem Pronto", applicationMethod: "Pumped, 10–60 mm rapid" }, spec: ["10–60 mm thickness", "Walk-on 4 hr", "Finish-ready 24–36 hr"] },
        ],
        closingNote: "Send us the overlay spec — we'll match the SL system to the cure schedule and the flatness target.",
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps from primer to walk-on.",
      steps: [
        { index: 1, title: "Site survey + substrate test", body: "Moisture, levels, condition. Drawing cross-check.",        duration: "½ day" },
        { index: 2, title: "Edge banding + dams",         body: "Threshold dams set the pour edges. Tape, foam.",          duration: "½ day" },
        { index: 3, title: "Substrate primer",            body: "Mapei Primer SN — coverage to TDS rate.",                  duration: "Apply 2 hr · 24 hr cure" },
        { index: 4, title: "Pump-mix compound",            body: "Continuous mixer, ¾\" hose to the pour zone.",             duration: "Continuous" },
        { index: 5, title: "Gauge rake",                   body: "Spread to target thickness — uniform across the room.",    duration: "Continuous" },
        { index: 6, title: "Spiked roller",                body: "De-aerates the slurry. Tracks every direction.",          duration: "Continuous" },
        { index: 7, title: "Cure to walk-on",              body: "Per product — 2–24 hr depending on system.",               duration: "2 hr–1 day" },
        { index: 8, title: "Handover for next trade",      body: "Flatness check, moisture re-test, IR signed off.",         duration: "½ day" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "What the screed sits under.",
      items: [
        { label: "Tile underlayment",     icon: "Grid3x3" },
        { label: "Vinyl underlayment",    icon: "Square" },
        { label: "Epoxy underlayment",    icon: "Layers" },
        { label: "Microcement substrate", icon: "Triangle" },
        { label: "Underfloor heating",    icon: "Thermometer" },
        { label: "Industrial floors",     icon: "Factory" },
        { label: "Renovation overlay",    icon: "Repeat" },
        { label: "Acoustic underlay",     icon: "Volume2" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Screeds we've pumped.",
      projects: [
        { name: "Le Méridien — guestroom refurb", location: "Dubai",        year: "2022", scope: "5,800 m² Ultraplan under LVT" },
        { name: "F&B kitchen — Dubai Hills",      location: "Dubai Hills",  year: "2024", scope: "Topcem screed under Ucrete PU-cement" },
        { name: "Boutique retail — City Walk",    location: "City Walk, Dubai", year: "2023", scope: "Ultraplan under microcement, 320 m²" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions about screed.",
      items: [
        { q: "Self-levelling vs traditional sand-cement screed?", a: "SL is pump-mixed, continuously poured, and reaches walk-on in hours — not days. Traditional sand-cement screed is hand-laid, cures over weeks, and almost always needs an SL skim on top before fine finishes. For most premium projects we lay traditional only as a bulk-fill structural base and finish with SL." },
        { q: "How flat can you get?",                              a: "SR1 (< 2 mm deviation over 2 m) is achievable with Ultraplan. FF40+ on floor flatness rating. Anything tighter needs a specialist polished-concrete or precision floor team — we'd subcontract or call it out before quoting." },
        { q: "Can you screed over a tiled floor?",                a: "Sometimes — depends on bond. We do a pull test on the tile, prime aggressively, and only proceed if the tile is solidly bonded. Otherwise the tile comes off first. We never trap loose tile under a screed." },
        { q: "What's the maximum thickness in one pour?",         a: "Ultraplan: 10 mm in one pass. Ultraplan Maxi: 40 mm. Topcem: 50 mm. Above 50 mm we layer with intermediate cure, or use a structural screed system." },
        { q: "How long until tile or vinyl can be laid?",          a: "Walk-on at 2–4 hr for Ultraplan. Tile-ready at 12–24 hr. Vinyl-ready at 24–72 hr once moisture reads below the adhesive manufacturer's spec (typically < 75 % RH or < 4 % MC). We test before we sign off." },
        { q: "Does it crack?",                                      a: "Only with substrate movement. We install crack-arrest mesh on suspect substrates, prime aggressively, and respect day-joint locations. Hairline shrinkage cracks are routine and don't telegraph through tile or LVT." },
        { q: "Can you pour around underfloor heating pipes?",      a: "Yes — Mapei Topcem Pronto and Ultraplan Maxi both pour around UFH pipework. We coordinate with the MEP team on pipe layout, fix the pipes to spacers, and pump SL to embed them with cover to spec." },
        { q: "Cost per square metre?",                              a: "Indicative ranges only — quoted after survey. Ultraplan skim 3–5 mm: AED 55–95 / m². Ultraplan Maxi 10–25 mm: AED 95–170 / m². Topcem structural 25–50 mm: AED 130–220 / m². Add 15–25 % for difficult access or night programmes." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "What sits on top.",
      items: [
        { slug: "epoxy-flooring",    title: "Epoxy Flooring",       note: "Resin floor systems that depend on a flat, dry SL screed." },
        { slug: "microtopping",      title: "Microtopping",          note: "The 3 mm decorative overlay we pour above your Ultraplan." },
        { slug: "large-format-tiling", title: "Large Format Tiling", note: "Big slabs telegraph every dip — SL is the precondition." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the slab survey. We'll quote the pour.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default selfLevelling;
