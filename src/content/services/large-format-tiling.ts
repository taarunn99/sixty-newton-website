import type { ServicePage } from "./types";

const lft: ServicePage = {
  slug: "large-format-tiling",
  bucket: "Tile & Stone Works",

  meta: {
    title: "Large Format Tile Installation Dubai — Porcelain Slabs UAE",
    description:
      "Laticrete and Mapei-certified installation of large-format porcelain tile and slabs up to 1.6 × 3.2 m. Floors, walls, podiums, façades. Hollow-free QC, MVIS for vertical, deformable adhesive systems.",
    keywords: [
      "large format tile installation Dubai",
      "porcelain slab installation UAE",
      "big tile fixing contractor",
      "Laticrete MVIS",
      "Mapei Keraflex Maxi",
    ],
  },

  hero: {
    eyebrow: "Tile & Stone Works · Laticrete MVIS + Mapei Keraflex Maxi S1",
    h1: "Large-format tile up to 1.6 × 3.2 m — installed with the system the slab actually needs.",
    sub: "Floor, wall, podium, façade. The bigger the slab, the less margin for the wrong adhesive, the wrong trowel, the wrong substrate flatness. We install LFT to the system spec — every slab back-buttered, every layout dry-laid.",
  },

  primaryBrands: ["laticrete", "mapei"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Large-format isn't just bigger tile. It's a different system.",
      body:
        "LFT moves more under thermal load, telegraphs every substrate dip, and forces the adhesive to take the entire weight. Standard C1 adhesive fails on it." +
        "\n\n" +
        "We install with deformable, slip-resistant, large-format-rated systems — Mapei Keraflex Maxi S1 Zero on floors, Laticrete MVIS on vertical façades — back-buttered with at least 95 % adhesive contact, and we run a sound test on every panel.",
    },

    {
      type: "system-matrix",
      eyebrow: "Choose the system",
      heading: "Match the application to the adhesive family.",
      matrix: {
        intro: "Six common LFT applications. The starred one is what we'd specify by default on a typical UAE podium / pool deck.",
        options: [
          { slug: "floor-int",   label: "Floor — interior",     recommended: false, system: { brand: "MAPEI",    name: "Keraflex Maxi S1 Zero",         applicationMethod: "12 mm notch · ≥95% contact" }, spec: ["12 mm notch trowel",         "Back-butter every slab",        "Levelling clips through cure"] },
          { slug: "floor-ext",   label: "Floor — exterior",     recommended: false, system: { brand: "MAPEI",    name: "Keraflex Maxi S1 + flexible additive", applicationMethod: "12 mm + back-butter" },         spec: ["Flexible additive",          "12 mm + back-butter",            "Thermal expansion provisions"] },
          { slug: "podium",      label: "Podium / pool deck",   recommended: true,  system: { brand: "Laticrete", name: "254 Platinum + flex additive",   applicationMethod: "As LFT spec — back-butter" },     spec: ["Flexible underlayment",      "Tile clips full grid",           "Joint movement per slab size"] },
          { slug: "wall-int",    label: "Wall — interior",      recommended: false, system: { brand: "MAPEI",    name: "Adesilex P10 + Isolastic",      applicationMethod: "8 mm notch" },                    spec: ["8 mm notch",                 "Mechanical retention on > 60 × 60 cm", "Sound test every panel"] },
          { slug: "wall-facade", label: "Wall — façade",        recommended: false, system: { brand: "Laticrete", name: "MVIS system",                    applicationMethod: "Mechanical + adhesive" },          spec: ["Mechanical fixing mandatory","Adhesive load + safety factor",  "Engineer sign-off on tall panels"] },
          { slug: "pool",        label: "Pool / submerged",     recommended: false, system: { brand: "Laticrete", name: "254 + Hydro Ban",                applicationMethod: "Adhesive over waterproofing" },   spec: ["Mandatory waterproofing",    "Epoxy grout for water immersion", "Pressure test before fill"] },
        ],
        closingNote: "Send the floor or façade drawing — we'll spec the adhesive family and joint plan with the quotation.",
      },
    },

    {
      type: "comparison",
      eyebrow: "Substrate readiness",
      heading: "Whether the substrate is LFT-ready.",
      body: "Surface flatness over a 2 m straight-edge dictates whether you can install large format directly, need a self-levelling skim, or need a full SL screed.",
      table: {
        columns: ["Deviation over 2 m", "Verdict"],
        rows: [
          { label: "SR1",  cells: ["< 2 mm",  "LFT-ready — install directly"] },
          { label: "SR2",  cells: ["< 4 mm",  "Self-levelling skim recommended before LFT"] },
          { label: "SR3",  cells: ["< 8 mm",  "Full SL screed mandatory before LFT"] },
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight disciplined steps.",
      steps: [
        { index: 1, title: "Substrate survey",      body: "Flatness check, moisture reading, drawing cross-check.",     duration: "½ day" },
        { index: 2, title: "SL screed (if needed)", body: "Ultraplan / Ultraplan Maxi to bring substrate to SR1.",      duration: "1–2 days" },
        { index: 3, title: "Dry layout",            body: "Book-match planning, balance cuts at perimeter.",            duration: "½ day" },
        { index: 4, title: "Adhesive application", body: "Notched + back-butter for ≥ 95 % contact.",                 duration: "Continuous" },
        { index: 5, title: "Tile placement",         body: "Vacuum cups, beating block, alignment.",                    duration: "Continuous" },
        { index: 6, title: "Levelling clips",        body: "Where required to hold flush during cure.",                  duration: "Per slab" },
        { index: 7, title: "Sound test",             body: "Tap every panel — re-set any with > 10 % hollow.",          duration: "Per zone" },
        { index: 8, title: "Grouting",               body: "Epoxy or cementitious per spec. Joints cleaned.",            duration: "1–2 days" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Where LFT earns its premium.",
      items: [
        { label: "Lobby floors",     icon: "DoorOpen" },
        { label: "Hotel rooms",      icon: "BedDouble" },
        { label: "Villa flooring",   icon: "Home" },
        { label: "Pool decks",       icon: "Waves" },
        { label: "Bathroom walls",   icon: "Bath" },
        { label: "Feature walls",    icon: "PanelTop" },
        { label: "Façade cladding",  icon: "Building" },
        { label: "Outdoor pavers",   icon: "Sun" },
        { label: "Kitchen splash",   icon: "ChefHat" },
        { label: "Retail floors",    icon: "Store" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "LFT we've laid hollow-free.",
      projects: [
        { name: "Atlantis The Royal",     location: "Palm Jumeirah, Dubai", year: "2023", scope: "LFT installation across suite bathrooms" },
        { name: "Le Méridien",            location: "Dubai",                year: "2022", scope: "Lobby LFT and feature wall" },
        { name: "Jumeirah Golf Villas",   location: "Dubai",                year: "2024", scope: "Pool deck LFT pavers" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions every consultant asks.",
      items: [
        { q: "What's 'large format' — exact size threshold?",     a: "Industry definition: any tile or slab with one edge > 600 mm. Above that the adhesive class, trowel size and substrate tolerance all change. We treat anything 600 × 600 mm and up as LFT for spec purposes." },
        { q: "Why is LFT adhesive different from standard?",     a: "LFT adhesive is C2 or higher (high bond strength), S1 or S2 (deformable, allows movement), and slip-resistant (so the slab doesn't drift under its own weight before set). Standard C1 adhesive can't take the load and fails under thermal cycling." },
        { q: "What's back-buttering?",                            a: "Applying a thin coat of adhesive to the back of the slab in addition to the notched bed on the substrate. Ensures full contact across the slab face. Mandatory on LFT — without it you'll have voids and hollow spots." },
        { q: "How do you handle a slab that's not perfectly flat itself?", a: "Larger porcelain slabs have a slight bow (1–2 mm over 3 m is common). We dry-lay first, identify the bowed face, orient the bow consistently across the field, and use levelling clips through cure to flatten the surface. We never force a bowed slab flat with adhesive alone." },
        { q: "Hollow tiles — how do you avoid?",                  a: "Back-butter every slab. Use the right notch (12 mm for LFT, 8 mm only on walls). Spread perpendicular to the slab direction so trowel ridges collapse cleanly. Sound-test every panel before grouting — re-set anything with > 10 % hollow area." },
        { q: "Vertical LFT — adhesive plus mechanical?",          a: "Above 1.2 m vertical or on façades, yes — Laticrete MVIS system or Mapei mechanical-fix systems. The adhesive carries the load until cure; the mechanical anchors carry it forever. Engineer sign-off on façade-grade installations." },
        { q: "Pool LFT — what changes?",                          a: "Mandatory waterproofing membrane (Laticrete Hydro Ban or Mapei Mapelastic) under the adhesive. Epoxy grout instead of cementitious for water immersion. Joint movement plan for thermal expansion. Pressure test before water-fill." },
        { q: "Grout — cementitious or epoxy?",                     a: "Cementitious (Mapei Ultracolor Plus) for most interior floors and walls. Epoxy (Mapei Kerapoxy) for wet areas, pools, kitchens, F&B. Epoxy is harder to install but won't stain or absorb water — the right call wherever water is constant." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "marble-installation", title: "Marble Installation",         note: "Where natural stone is in the brief instead of porcelain." },
        { slug: "polishing",           title: "Polishing — Marble & Floors", note: "Honing and polishing of stone after install." },
        { slug: "self-levelling",      title: "Self-Levelling & Screed",      note: "The flat substrate every LFT install depends on." },
      ],
    },

    {
      type: "cta",
      heading: "Send the slab schedule. We'll quote the install plan.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default lft;
