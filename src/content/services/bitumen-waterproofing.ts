import type { ServicePage } from "./types";

const bitumen: ServicePage = {
  slug: "bitumen-waterproofing",
  bucket: "Waterproofing Systems",

  meta: {
    title: "Bitumen Membrane Waterproofing Dubai — Sixty Newton",
    description:
      "Torch-applied APP and SBS bituminous membrane waterproofing across UAE. Roofs, podiums, basements, wet areas. Manufacturer-spec laps, primed substrate, signed-off IR. 10-year systems.",
    keywords: [
      "bitumen membrane waterproofing Dubai",
      "torch applied membrane UAE",
      "APP SBS bituminous Dubai",
      "bitumen waterproofing contractor",
      "two-layer bitumen UAE",
    ],
  },

  hero: {
    eyebrow: "Waterproofing Systems · Torch-applied membranes",
    h1: "Torch-applied bitumen membranes — laid to the spec, not to the eye.",
    sub: "APP, SBS, mineral-finished, self-protected. Two-layer or single-layer. We prime, we torch, we overlap to the millimetre, and we issue the IR with photographs of every lap.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "The system everyone knows. Almost nobody installs to spec.",
      body:
        "Bitumen membrane waterproofing is the oldest reliable system in the UAE. Done right, you get 10–15 years of leak-free service. Done wrong — wrong lap dimension, unprimed substrate, blowtorch too close, fishmouths uncrimped — you get a callback in 18 months." +
        "\n\n" +
        "We torch-apply APP-modified and SBS-modified bituminous membranes from manufacturers including Mapei (Polyfond, Polyplan) and X-Calibur. 4 mm thickness is standard; some applications take a 4+4 two-layer build-up. We prime every substrate. We honour 100 mm end laps and 150 mm side laps without exception. And we photograph laps for the handover pack.",
    },

    {
      type: "cross-section",
      eyebrow: "Build-up",
      heading: "What a podium two-layer bitumen system actually looks like.",
      crossSection: {
        layers: [
          { index: 1, title: "Protection screed",           detail: "Cementitious, ≥ 50 mm" },
          { index: 2, title: "Geotextile separator",         detail: "300 gsm — protects the membrane" },
          { index: 3, title: "Second membrane layer",        detail: "4 mm APP, offset 50% from first" },
          { index: 4, title: "First membrane layer",         detail: "4 mm APP, torch-bonded" },
          { index: 5, title: "Bituminous primer",            detail: "300–400 g/m²" },
          { index: 6, title: "Concrete substrate",           detail: "Cured 28 days, primed, dry" },
        ],
        notes: [
          "End laps: 100 mm — bitumen bead visible after torch.",
          "Side laps: 150 mm — pressed with a roller, never just by foot.",
          "Both layers staggered 50% relative to each other to break the seam plane.",
        ],
      },
    },

    {
      type: "comparison",
      eyebrow: "System comparison",
      heading: "APP vs SBS vs self-adhered.",
      body:
        "All three are bituminous. They behave differently under temperature, on a UAE roof and on a basement wall. We default to APP for UAE flat roofs and recommend others only when the brief calls for them.",
      table: {
        columns: ["APP modified", "SBS modified", "Self-adhered"],
        rows: [
          { label: "Application", cells: ["Torch-applied",      "Torch / mop / cold",   "Peel-and-stick"] },
          { label: "Climate fit", cells: ["Hot — UV stable",    "Cold flex",            "Mid-temperature"] },
          { label: "Service temp", cells: ["−10 to +110 °C",    "−25 to +90 °C",        "−20 to +80 °C"] },
          { label: "Thickness",   cells: ["4 mm",                "4 mm",                 "1.5–3 mm"] },
          { label: "Best for",    cells: ["UAE flat roofs, podiums", "Cooler regions, joints", "Fast-track re-roofing"] },
          { label: "Lifespan",    cells: ["10–15 yr",            "10–15 yr",             "8–12 yr"] },
          { label: "We default to", cells: ["★ Recommended for UAE", "Specific applications", "Re-roofing only"] },
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Seven steps from primed slab to flood test.",
      steps: [
        { index: 1, title: "Substrate prep",       body: "Concrete cured 28 days, dry, dust-free.",                     duration: "1 day" },
        { index: 2, title: "Bituminous primer",    body: "Applied at 300–400 g/m². Full cure before torching.",          duration: "1 day · 24 hr cure" },
        { index: 3, title: "Membrane unrolled",    body: "Aligned for end + side laps. Dry-fitted before torching.",     duration: "½ day" },
        { index: 4, title: "Torch + bond",         body: "Underside ignited; membrane rolled and pressed.",              duration: "1–2 days" },
        { index: 5, title: "Lap seal",             body: "Each lap tooled — bitumen bead confirms bond.",                duration: "Continuous" },
        { index: 6, title: "Second layer",         body: "Offset 50% from the first. Repeat torch + lap discipline.",    duration: "1–2 days" },
        { index: 7, title: "Flood test + IR",      body: "24–48 hr flood, 50 mm head, photo-documented IR.",             duration: "2–3 days" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Where torch-applied bitumen earns its place.",
      items: [
        { label: "Flat roofs",              icon: "Home" },
        { label: "Sloped roofs",            icon: "Triangle" },
        { label: "Podium decks",            icon: "Building2" },
        { label: "Basement walls",          icon: "ArrowDownToLine" },
        { label: "Foundations",             icon: "Hammer" },
        { label: "Planter boxes",           icon: "Leaf" },
        { label: "Below-grade",             icon: "Layers" },
        { label: "Wet areas (secondary)",   icon: "Droplet" },
        { label: "Water tanks (external)",  icon: "Container" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Bitumen roofs we've torched and signed off.",
      projects: [
        { name: "Le Méridien Hotels",     location: "Dubai",     year: "2022", scope: "Roof reroofing with APP two-layer system" },
        { name: "Ahlatci Gold Refinery",  location: "Industrial", year: "2023", scope: "High-security facility roof waterproofing" },
        { name: "Dubai Hills Villas",     location: "Dubai Hills", year: "2023", scope: "Cluster villa roof waterproofing" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Warranty",
      heading: "What we stand behind.",
      body:
        "10-year workmanship warranty on two-layer APP systems. 5-year on single-layer. Manufacturer warranty on the material itself per the supplier's terms.",
      specs: [
        {
          title: "Warranty term",
          rows: [
            { label: "2-layer APP", value: "10 years" },
            { label: "1-layer APP", value: "5 years" },
            { label: "SBS systems", value: "10 years" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Eight questions every consultant asks.",
      items: [
        { q: "APP vs SBS — which one in the UAE?", a: "APP — for the UAE climate. APP polymer is UV-stable and rated for service to +110 °C, which suits exposed flat roofs and podiums baking in summer. SBS shines in colder climates where elastomeric flex at low temperatures matters. We specify SBS only for specific applications where joint movement or low service temperature is in the brief." },
        { q: "Why do you torch-apply rather than self-adhere?",     a: "Torch-applied gives a true monolithic bond with bitumen bead visible at every lap — you can see the seal. Self-adhered systems are faster but rely on pressure-sensitive adhesive that can creep over time. For new-build podium and roof waterproofing we always torch. Self-adhered is reserved for fast-track re-roofing where torching isn't safe (live occupied building, fuel proximity)." },
        { q: "What happens when the membrane gets perforated by HVAC kit later?", a: "We patch — same membrane, same primer, 150 mm overlap onto sound membrane. We don't recommend self-adhered patches over torched membranes — they bond inconsistently. If you're planning HVAC kit at handover, give us the layout and we'll add factory-finished puddle flanges before the second layer goes down." },
        { q: "Can you torch over an existing roof?",                a: "Sometimes. We core-sample to verify the existing membrane is sound and dry, do a bond pull test, and only torch the new layer if both pass. If either fails, the existing roof comes off — there's no clever way around a wet substrate." },
        { q: "How do you handle the parapet upturn?",               a: "150 mm minimum upturn onto the parapet, mechanically fixed at the top edge with termination bar + sealant. Always reinforced with a separate piece of membrane at the corner. The detail is what fails most often on bitumen roofs — we photograph it for every handover." },
        { q: "Is bitumen safe for podium and roof gardens?",        a: "Yes — with a root-resistant membrane (APP-R grade) and proper geotextile + drainage layer above. Standard APP is not root-resistant. Specify the green-roof variant before quoting." },
        { q: "Mineral-finished vs slate-finished?",                  a: "Mineral-finished is the standard exposed top layer — coloured granules embedded for UV protection and walkability. Slate-finished is heavier and more decorative, used where the roof is visible. Function-wise they perform identically." },
        { q: "Do you do flood testing?",                              a: "Yes — and we recommend it before any insulation or paving goes down. 24–48 hr flood at 50 mm head, perimeter monitored, documented with photos. Costs almost nothing now, saves a six-figure rip-up later." },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "waterproofing", title: "Waterproofing",  note: "Liquid-applied membranes where torching isn't practical." },
        { slug: "insulation",    title: "Insulation",      note: "Combo roof systems pair bitumen waterproofing with spray PU insulation." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the roof drawing. We'll quote the torch programme.",
      body:
        "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default bitumen;
