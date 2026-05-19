import type { ServicePage } from "./types";

const painting: ServicePage = {
  slug: "painting",
  bucket: "Coatings & Protection",

  meta: {
    title: "Painting Contractor Dubai — AkzoNobel Dulux Applicator UAE",
    description:
      "AkzoNobel-approved painting applicator across the UAE. Villa, apartment, office, façade. Dulux Stucco putty system, EasyClean, Velvet Touch, Weathershield. Professional surface prep, signed-off finish.",
    keywords: [
      "painting contractor Dubai",
      "villa painting UAE",
      "exterior painting Dubai",
      "Dulux applicator UAE",
      "AkzoNobel approved painter",
    ],
  },

  hero: {
    eyebrow: "Coatings & Protection · AkzoNobel approved applicator",
    h1: "AkzoNobel-approved painting — Stucco, EasyClean, Velvet Touch, Weathershield.",
    sub: "We apply Dulux as a system, not as a product. Stucco wall putty for the substrate. EasyClean or Velvet Touch for the topcoat. Weathershield for façades. Sanded, primed, applied to TDS coverage rate.",
  },

  primaryBrands: ["akzonobel"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "The paint job that ages well started with the putty job that wasn't rushed.",
      body:
        "Paint is the trade clients most often expect cheap. Then they're surprised when peelers and cracks show up in 18 months." +
        "\n\n" +
        "The difference between a 5-year paint job and a 12-year one is the surface prep — proper Dulux Stucco wall putty system, sanded between coats, primer where the substrate calls for it, two finish coats at the spec'd coverage. We're an AkzoNobel-approved applicator. We do it as a system.",
    },

    {
      type: "system-matrix",
      eyebrow: "Pick the right Dulux",
      heading: "Match the space to the right Dulux system.",
      matrix: {
        intro: "Six common scenarios mapped to the Dulux system we'd specify. The starred one is the most common UAE callout — façade Weathershield.",
        options: [
          { slug: "kids-kitchen",  label: "Kids' room / kitchen",      recommended: false, system: { brand: "AkzoNobel", name: "Dulux EasyClean",            applicationMethod: "Brush + roller" }, spec: ["Stain-repellent finish",   "Wipeable surface",          "Mid-sheen — modern feel",   "Low-VOC option available"] },
          { slug: "living",        label: "Living / bedroom",          recommended: false, system: { brand: "AkzoNobel", name: "Dulux Velvet Touch",         applicationMethod: "Brush + roller" }, spec: ["Luxurious soft sheen",      "Premium tactile feel",      "Best for feature walls",    "20+ year colour retention"] },
          { slug: "bathroom",      label: "Bathroom",                  recommended: false, system: { brand: "AkzoNobel", name: "Dulux Promise + anti-fungal", applicationMethod: "Brush + roller" }, spec: ["Mould-resistant additive",  "Steam-tolerant",            "Matte or satin",            "Annual care, not weekly"] },
          { slug: "facade",        label: "Façade",                     recommended: true,  system: { brand: "AkzoNobel", name: "Dulux Weathershield",         applicationMethod: "Brush + roller" }, spec: ["UV stable",                  "Algae + fungus resistant",  "10-year warranty",          "Cracks bridged with elastomeric"] },
          { slug: "commercial",    label: "Commercial / office",       recommended: false, system: { brand: "AkzoNobel", name: "Dulux Professional",          applicationMethod: "Brush + roller / spray" }, spec: ["Coverage + cost balanced", "Tight schedule programmes", "Choice of sheen levels",   "Suitable for occupied spaces"] },
          { slug: "industrial",    label: "Industrial / heavy duty",   recommended: false, system: { brand: "AkzoNobel", name: "International coatings",      applicationMethod: "Substrate-specific spec" }, spec: ["Anti-corrosion primer",     "Chemical resistance",        "Steelwork compatible",     "Marine and offshore options"] },
        ],
        closingNote: "Send us the colour schedule and area schedule — we'll quote with sheen, primer and coverage rates per Dulux TDS.",
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps from inspection to handover.",
      steps: [
        { index: 1, title: "Surface inspection",  body: "Cracks, peelers, moisture, substrate type.",              duration: "½ day" },
        { index: 2, title: "Repair + Stucco putty", body: "1–2 coats Dulux Stucco wall putty, sanded smooth.",       duration: "1–2 days" },
        { index: 3, title: "Primer",              body: "Substrate-specific primer per TDS.",                      duration: "Apply · 4–6 hr cure" },
        { index: 4, title: "First topcoat",       body: "Full coverage at TDS rate. Brush cuts-in, roller fills.",  duration: "1 day" },
        { index: 5, title: "Light sand",          body: "Between coats — removes any nibs for a flat second coat.", duration: "½ day" },
        { index: 6, title: "Second topcoat",      body: "Second full coverage coat per TDS.",                       duration: "1 day" },
        { index: 7, title: "Defect inspection",   body: "Snag walk-around with client, touch-ups as needed.",       duration: "½ day" },
        { index: 8, title: "Clean-up + handover", body: "Sheets pulled, masking removed, surfaces cleaned.",        duration: "½ day" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Twelve scopes — one disciplined applicator.",
      items: [
        { label: "Villas",          icon: "Home" },
        { label: "Apartments",      icon: "Building" },
        { label: "Offices",         icon: "Briefcase" },
        { label: "Retail",          icon: "Store" },
        { label: "Schools",         icon: "GraduationCap" },
        { label: "Hospitals",       icon: "Stethoscope" },
        { label: "Hotels",          icon: "BedDouble" },
        { label: "Façades",         icon: "Building2" },
        { label: "Feature walls",   icon: "PanelTop" },
        { label: "Industrial walls", icon: "Factory" },
        { label: "Steelwork",       icon: "Hammer" },
        { label: "Wood trim",       icon: "TreePine" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Paint we've signed off.",
      projects: [
        { name: "Masha'Allah Building, Al Nahda", location: "Al Nahda, Sharjah", year: "2023", scope: "Full interior + façade paint package" },
        { name: "Dubai Hills Villas",              location: "Dubai Hills",      year: "2024", scope: "Villa interior repaint with full Stucco system" },
        { name: "Boutique office — DIFC",          location: "DIFC, Dubai",      year: "2023", scope: "Office interior repaint, occupied programme" },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions clients ask before quoting.",
      items: [
        { q: "How many coats?",                                       a: "Standard system: 1–2 coats Stucco putty + 1 coat primer + 2 coats finish. That's the minimum for a 5-year paint job. Quoting one-coat finishes is what produces 18-month peelers." },
        { q: "Stucco putty — is it necessary?",                      a: "Yes for any wall that hasn't been recently skim-coated. Stucco is a polymer-modified wall putty that fills imperfections, gives the topcoat a flat substrate, and prevents the paint from telegraphing every dent and patch. Skipping it is the most common contractor shortcut — and the most visible." },
        { q: "EasyClean vs Velvet Touch — which?",                    a: "EasyClean for high-touch zones — kids' rooms, kitchens, hallways. It's stain-repellent and wipes clean. Velvet Touch for living rooms, bedrooms, feature walls. It's a premium soft-sheen finish — looks and feels expensive. Both are top of the Dulux range." },
        { q: "How long does paint last in the UAE?",                  a: "Interior: 5–8 years on Stucco system + premium finish. Façade with Weathershield: 8–10 years on the elevation that doesn't see direct south sun, 5–7 years on the one that does. Cheaper paint jobs cycle every 2–3 years — usually that costs more over the building's life." },
        { q: "Façade painting — Weathershield vs others?",            a: "Dulux Weathershield is the AkzoNobel UV-stable, algae-resistant, hairline-crack-bridging elastomeric façade paint. It's the right call for any exterior wall in the UAE. We never spec interior paint outdoors — it fails within a season." },
        { q: "Can you match an existing colour?",                     a: "Yes — we can colour-match against a fabric, stone, or existing paint sample using AkzoNobel's tinting station. Custom matches need a 24-hour turnaround for the sample, and we recommend a 1 m² test patch on the wall before scaling up." },
        { q: "Anti-fungal paint — where?",                            a: "Bathrooms (especially under-tile zones above showers), kitchens above the prep counter, and any north-facing exterior elevation in older buildings. Dulux Promise + anti-fungal additive solves it without changing the look." },
        { q: "Can you paint while we live in the villa?",             a: "Yes — we work room-by-room with dust sheeting and low-VOC paint. The discomfort is mostly furniture relocation and the smell of fresh paint for 24 hours after each room. We brief on schedule and access points before mobilisation." },
        { q: "Smell / VOC — low-VOC options?",                        a: "Yes — Dulux EasyClean and Velvet Touch are both available in low-VOC formulations. Recommended where children, asthmatics or sensitive clients are in residence. Negligible cost premium." },
        { q: "Cost per square metre or per villa?",                   a: "We quote per area (m² of wall) and per system level. Indicative: interior Stucco + premium 2-coat: AED 22–38 / m². Façade Weathershield: AED 32–55 / m². Full 4-bed villa interior repaint typically lands AED 18,000–32,000 depending on size and prep needed." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "specialised-coatings-and-sealants", title: "Specialised Coatings & Sealants", note: "Joint sealing before paint — for façades and movement joints." },
        { slug: "microtopping",                       title: "Microtopping",                    note: "Where decorative wall + floor finish replaces paint entirely." },
        { slug: "design-concrete",                    title: "Design Concrete & Screeding",     note: "When the architecture wants raw concrete instead of paint." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the area schedule. We'll spec the system.",
      body: "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default painting;
