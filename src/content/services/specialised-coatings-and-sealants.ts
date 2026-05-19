import type { ServicePage } from "./types";

const sealants: ServicePage = {
  slug: "specialised-coatings-and-sealants",
  bucket: "Coatings & Protection",

  meta: {
    title: "Specialised Coatings & Sealants — Sixty Newton UAE",
    description:
      "UAE applicator for PU, silicone, polysulphide and MS polymer joint sealants. Expansion joints, movement joints, perimeter sealing, façade coatings. Mapei and AkzoNobel systems.",
    keywords: [
      "joint sealant applicator Dubai",
      "polyurethane sealant UAE",
      "expansion joint specialist Dubai",
      "façade sealant applicator",
      "Mapei Mapeflex UAE",
    ],
  },

  hero: {
    eyebrow: "Coatings & Protection · Joint sealing specialist",
    h1: "The joints. The seals. The protective coats nobody specifies until something fails.",
    sub: "Expansion joints, control joints, perimeter seals, façade movement joints. Two-part PU, silicone neutral, polysulphide, MS polymer hybrids. Backer rod, primer, sealant — done in the right order.",
  },

  primaryBrands: ["mapei", "akzonobel"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Sealants fail more often than membranes. We treat them with the same discipline.",
      body:
        "A 200 mm long sealant joint costs less than a square metre of waterproofing — and it leaks faster. We treat joint sealing like a system: backer rod sized to the joint, primer where the substrate calls for it, sealant tooled to the right hourglass profile, and the surface inspected before the bond is cosmetic-finished." +
        "\n\n" +
        "We apply Mapei Mapeflex range and AkzoNobel/Sika-equivalent systems on tier-1 hospitality and high-end residential.",
    },

    {
      type: "comparison",
      eyebrow: "System comparison",
      heading: "PU vs silicone vs polysulphide vs MS polymer.",
      body:
        "Four sealant families, four very different jobs. The right one depends on the substrate, the movement capacity required, whether it'll be painted, and whether it'll see fuel or chemicals.",
      table: {
        columns: ["PU (polyurethane)", "Silicone — neutral", "Polysulphide", "MS polymer"],
        rows: [
          { label: "Use case",     cells: ["Concrete movement joints", "Glass, façade, perimeter", "Below-grade, fuel-resistant", "Mixed substrates"] },
          { label: "Movement",     cells: ["±25%",                       "±50%",                       "±25%",                       "±25–50%"] },
          { label: "Service life", cells: ["10–15 yr",                   "20+ yr",                     "15–20 yr",                   "15–20 yr"] },
          { label: "Paintable",    cells: ["Yes",                         "No",                          "Yes",                         "Yes"] },
          { label: "Cure type",    cells: ["Moisture",                    "Moisture (neutral)",          "Chemical",                    "Moisture"] },
          { label: "We typically use", cells: ["Mapei Mapeflex PU45", "Mapei Mapesil AC", "Mapei Idrostop / Sika-2c", "Mapei Mapeflex MS45"] },
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "A sealant joint done right.",
      steps: [
        { index: 1, title: "Joint geometry",        body: "Width-to-depth ratio target 2:1 (e.g. 20 mm wide → 10 mm deep).", duration: "Survey" },
        { index: 2, title: "Backer rod",            body: "Closed-cell foam, 25–30% wider than the joint, inserted to set depth.", duration: "Per joint" },
        { index: 3, title: "Masking",               body: "Tape along both edges of the joint for a clean line.", duration: "Per joint" },
        { index: 4, title: "Primer (where required)", body: "Substrate-specific primer, dry to touch before sealant.", duration: "Apply · TDS cure" },
        { index: 5, title: "Sealant",               body: "Gun-applied, tooled to a concave hourglass profile.", duration: "Per joint" },
        { index: 6, title: "De-mask & cure",        body: "Tape pulled while sealant is still tacky; cure per TDS.", duration: "24–72 hr cure" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Eight joint families. One discipline.",
      items: [
        { label: "Expansion joints",     icon: "Move" },
        { label: "Construction joints",  icon: "Hammer" },
        { label: "Control joints",       icon: "Minus" },
        { label: "Window perimeters",    icon: "Square" },
        { label: "Door perimeters",      icon: "DoorOpen" },
        { label: "Façade joints",        icon: "Building" },
        { label: "Wet-area perimeters",  icon: "Droplet" },
        { label: "Trafficked floor",     icon: "ParkingCircle" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Joints we've laid and stood behind.",
      projects: [
        { name: "The Address Boulevard Hotel", location: "Dubai",        year: "2023", scope: "Façade joint sealing across hotel envelope" },
        { name: "Dubai Hills Villas",          location: "Dubai Hills",  year: "2024", scope: "Perimeter and wet-area sealing for cluster villas" },
        { name: "Jumeirah Golf Villas",         location: "Dubai",        year: "2023", scope: "Movement joints across podium decks" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Warranty",
      heading: "Sealant life is about the spec — and the prep.",
      body:
        "Workmanship warranty: 5 years on PU, 10 years on silicone neutral, 7 years on polysulphide and MS polymer. We won't sealant-over a moving substrate without backer rod and primer — that's a callback we don't take.",
      specs: [
        {
          title: "Service life",
          rows: [
            { label: "PU",            value: "10–15 yr" },
            { label: "Silicone",      value: "20+ yr" },
            { label: "Polysulphide",  value: "15–20 yr" },
            { label: "MS polymer",    value: "15–20 yr" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions every consultant asks.",
      items: [
        { q: "When do I need PU vs silicone?", a: "PU for concrete movement joints, trafficked joints, and anywhere you need a paintable surface. Silicone (neutral cure) for glass, façade and perimeter sealing where movement is high and paint isn't required. We never use acetoxy silicone on concrete — it acid-attacks the substrate." },
        { q: "How long do sealants last in UAE sun?", a: "PU: 10–15 years. Silicone neutral: 20+ years if installed correctly. Polysulphide and MS polymer: 15–20 years. The biggest factor isn't the sealant — it's whether the joint geometry and primer were right at install." },
        { q: "Can I paint over silicone?", a: "No. Paint does not adhere to silicone. If the joint needs to be painted, specify PU, polysulphide or MS polymer instead." },
        { q: "What's a backer rod and why does it matter?", a: "Closed-cell foam rod sized 25–30% wider than the joint, inserted to set the depth. It controls the sealant's geometry (2:1 width-to-depth) and prevents three-sided adhesion — which is what makes sealants tear under movement. No backer rod = warranty void." },
        { q: "Do you do trafficable floor joints?", a: "Yes — Mapei Mapeflex PU45 and equivalent self-levelling PU sealants rated for foot and vehicle traffic. The joint geometry is critical: we cut and clean before injecting, never apply over old failed sealant." },
        { q: "Can sealant replace waterproofing?", a: "No. Sealants seal joints; membranes seal surfaces. A façade needs both — sealant at the movement joints, waterproofing on the wall. Treating sealants as waterproofing is the most common reason wet-room perimeter failures happen." },
        { q: "What's the warranty?", a: "Workmanship: 5–10 years per system. Material: per manufacturer TDS (typically 20 years on silicone neutral, 15 on PU). Joint manufacturer-applicator warranty available on Mapei Mapeflex products where the application is inspected at install." },
        { q: "Can you re-seal an old joint?", a: "Yes — strip the old sealant, clean the substrate, insert new backer rod, prime if required, install new sealant. We don't sealant-over old sealant. Adhesion is unreliable and the failure mode is invisible from the surface." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "waterproofing", title: "Waterproofing",     note: "Sealants complement membranes at joints — they don't replace them." },
        { slug: "painting",       title: "Interior & Exterior Painting", note: "PU and polysulphide sealants are paintable; silicone is not." },
      ],
    },

    {
      type: "cta",
      heading: "Send the joint schedule. We'll spec the sealant family.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default sealants;
