import type { ServicePage } from "./types";

const epoxyFlooring: ServicePage = {
  slug: "epoxy-flooring",
  bucket: "Flooring Systems",

  meta: {
    title: "Epoxy Flooring Contractor UAE — Industrial, Commercial, ESD",
    description:
      "Brand-certified epoxy flooring applicator across the UAE. Self-levelling, roller-applied, decorative, ESD, heavy-duty PU-cement systems. F&B, pharma, automotive, retail and hospitality.",
    keywords: [
      "epoxy flooring contractor Dubai",
      "epoxy floor UAE",
      "industrial epoxy applicator",
      "Mapei Mapefloor",
      "PU cement Ucrete",
      "ESD floor Dubai",
      "self-levelling epoxy",
    ],
  },

  hero: {
    eyebrow: "Flooring Systems · Mapei Mapefloor approved applicator",
    h1: "Epoxy floor systems engineered to the spec the consultant signed off.",
    sub: "Self-levelling. Roller-coated. Decorative flake. ESD. Heavy-duty PU-cement for cold rooms and food prep. We apply the system the brief calls for — at the WFT, at the cure time, at the slip rating it specifies.",
  },

  primaryBrands: ["mapei", "xcalibur"],

  sections: [
    {
      type: "intro",
      eyebrow: "What we do",
      heading: "Epoxy isn't one product. It's a system family that has to match the use.",
      body:
        "A warehouse forklift floor and a kitchen prep floor and an ESD assembly floor all use \"epoxy\" — but they're four different system specs with four different build-ups. We apply Mapei Mapefloor for self-levelling and decorative, X-Calibur for heavy-duty industrial, Mapei Ucrete for food-grade PU-cement, and Mapei Mapecoat ESD for static-controlled environments." +
        "\n\n" +
        "The reason floors fail in the UAE isn't usually the resin — it's the substrate moisture, the wrong primer, or the wrong system for the chemical exposure. We test first. We never quote without seeing the slab.",
    },

    {
      type: "system-matrix",
      eyebrow: "Choose the system",
      heading: "Match the environment to the right epoxy family.",
      matrix: {
        intro:
          "Six environments, six systems. The recommended one for each is what we'd specify after a site survey on a comparable brief.",
        options: [
          {
            slug: "light-commercial",
            label: "Light commercial",
            recommended: false,
            system: { brand: "MAPEI", name: "Mapefloor Finish 58 W", applicationMethod: "Roller-applied" },
            spec: [
              "3 mm build-up",
              "Best for showrooms, retail",
              "Light foot traffic",
              "10–15-year wear life",
            ],
          },
          {
            slug: "industrial",
            label: "Industrial / warehouse",
            recommended: false,
            system: { brand: "MAPEI", name: "Mapefloor I 500 W", applicationMethod: "Self-levelling 3–5 mm" },
            spec: [
              "3–5 mm self-levelling",
              "Forklift + racking traffic",
              "8–12-year wear life",
              "Chemical resistance per TDS",
            ],
          },
          {
            slug: "heavy-duty-fnb",
            label: "Heavy-duty (F&B)",
            recommended: true,
            system: { brand: "MAPEI", name: "Ucrete UD200", applicationMethod: "PU-cement, 6–9 mm trowel" },
            spec: [
              "6–9 mm PU-cement",
              "Food prep, cold-room rated",
              "Thermal shock resistant",
              "15+ year wear life",
            ],
          },
          {
            slug: "esd",
            label: "ESD / anti-static",
            recommended: false,
            system: { brand: "MAPEI", name: "Mapecoat ESD", applicationMethod: "Conductive primer + body" },
            spec: [
              "3 mm conductive build-up",
              "Resistance to spec (e.g. 10⁶–10⁹ Ω)",
              "Electronics assembly grade",
              "Static-controlled environments",
            ],
          },
          {
            slug: "decorative-flake",
            label: "Decorative — flake",
            recommended: false,
            system: { brand: "MAPEI", name: "Mapefloor System 33", applicationMethod: "Flake broadcast" },
            spec: [
              "Broadcast flake + topcoat",
              "Garages, retail, service areas",
              "Hides minor traffic wear",
              "Slip-rated topcoat options",
            ],
          },
          {
            slug: "decorative-metallic",
            label: "Decorative — metallic",
            recommended: false,
            system: { brand: "Custom", name: "Metallic SL + UV-stable topcoat", applicationMethod: "Self-levelling poured + dispersed pigment" },
            spec: [
              "3–4 mm self-levelling body",
              "Showrooms, hospitality",
              "UV-stable topcoat against yellowing",
              "Unique cloud pattern per pour",
            ],
          },
        ],
        closingNote:
          "Got a chemical-resistance schedule or BOQ? Send it over and we'll match the system family to the line items.",
      },
    },

    {
      type: "cross-section",
      eyebrow: "Build-up",
      heading: "A 5-layer resin floor, top to substrate.",
      crossSection: {
        layers: [
          { index: 1, title: "Top sealer",            detail: "2-coat UV-stable PU" },
          { index: 2, title: "Body coat",             detail: "Self-levelling 2–3 mm" },
          { index: 3, title: "Reinforcement",         detail: "Broadcast quartz where specified" },
          { index: 4, title: "Primer",                detail: "Epoxy or moisture-tolerant" },
          { index: 5, title: "Concrete substrate",    detail: "Shotblasted, < 4 % MC" },
        ],
        notes: [
          "Substrate moisture verified before primer — > 4 % MC and the floor will fail.",
          "Shotblast profile per ICRI CSP — never grind alone for resin.",
          "Joint and crack repair before primer, never bridged with the body coat.",
        ],
      },
    },

    {
      type: "process",
      eyebrow: "Our process",
      heading: "Eight steps from slab to handover.",
      steps: [
        { index: 1, title: "Site survey + moisture test",  body: "MC reading at multiple points. Pass at < 4 % MC for standard epoxy.", duration: "½ day" },
        { index: 2, title: "Shotblast / grind / vacuum",    body: "Mechanical surface prep to manufacturer-spec CSP profile.",          duration: "1 day" },
        { index: 3, title: "Crack & joint repair",          body: "Resin-bonded crack stitching and joint filling.",                    duration: "½ day" },
        { index: 4, title: "Primer application",            body: "Full cure before body coat — never wet-on-wet.",                     duration: "Apply 2 hr · 24 hr cure" },
        { index: 5, title: "Body coat application",         body: "Gauge raked, spiked roller for de-aeration.",                        duration: "1 day" },
        { index: 6, title: "Broadcast / decoration",        body: "Flake, quartz or metallic dispersion where specified.",              duration: "½ day" },
        { index: 7, title: "Top sealer (2 coats)",          body: "UV-stable PU sealer 24 hr between coats.",                           duration: "2 days" },
        { index: 8, title: "Cure schedule",                 body: "Walk-on 24 hr · light service 72 hr · full chemical resistance 7 days.", duration: "1 week" },
      ],
    },

    {
      type: "applications",
      eyebrow: "Where it fits",
      heading: "Twelve environments — one system family.",
      items: [
        { label: "Warehouses",        icon: "Warehouse" },
        { label: "Factories",         icon: "Factory" },
        { label: "Food & beverage",   icon: "UtensilsCrossed" },
        { label: "Pharmaceutical",    icon: "Pill" },
        { label: "Hospitals + labs",  icon: "Stethoscope" },
        { label: "Cold rooms",        icon: "Snowflake" },
        { label: "Automotive",        icon: "Car" },
        { label: "Showrooms",         icon: "Store" },
        { label: "Retail",            icon: "ShoppingBag" },
        { label: "Car park decks",    icon: "ParkingCircle" },
        { label: "Hangars",           icon: "Plane" },
        { label: "ESD facilities",    icon: "Zap" },
      ],
    },

    {
      type: "projects",
      eyebrow: "Reference projects",
      heading: "Floors we've stood behind.",
      projects: [
        { name: "Ahlatci Gold Refinery",           location: "Industrial",         year: "2023", scope: "Industrial epoxy across processing floor — 4,800 m²" },
        { name: "F&B kitchen — Dubai Hills",       location: "Dubai",              year: "2024", scope: "Ucrete PU-cement for cold-room + prep area" },
        { name: "Automotive showroom — SZR",       location: "Sheikh Zayed Road",  year: "2023", scope: "Decorative metallic self-levelling, 1,600 m²" },
      ],
    },

    {
      type: "warranty",
      eyebrow: "Specification",
      heading: "Wear life, slip rating, chemical resistance.",
      body:
        "Wear life varies by system: 10–15 years for light commercial · 8–12 years for industrial · 15+ years for PU-cement food-grade. Slip rating from R9 (smooth top sealer) to R13 (aggressive broadcast)." +
        "\n\n" +
        "Full chemical-resistance schedule on the manufacturer TDS — we send the relevant TDS with every quotation so the consultant can audit before award.",
      specs: [
        {
          title: "Wear life",
          rows: [
            { label: "Light com.",  value: "10–15 yr" },
            { label: "Industrial",  value: "8–12 yr" },
            { label: "PU-cement",   value: "15+ yr" },
          ],
        },
        {
          title: "Slip rating",
          rows: [
            { label: "Smooth",   value: "R9" },
            { label: "Standard", value: "R10–R11" },
            { label: "Aggressive", value: "R12–R13" },
          ],
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Frequently asked",
      heading: "Ten questions every facilities manager asks.",
      items: [
        {
          q: "How thick is \"epoxy flooring\"?",
          a: "Anywhere from 0.3 mm (roller coating) to 9 mm (PU-cement). The thickness is dictated by the spec, the substrate condition and the loading — not by preference. We confirm thickness in the method statement before mobilisation.",
        },
        {
          q: "What's the difference between self-levelling epoxy and PU-cement?",
          a: "Self-levelling epoxy is a poured, gauge-raked resin body at 2–5 mm — best for clean industrial, commercial and decorative floors. PU-cement (e.g. Mapei Ucrete) is a polyurethane–cement hybrid trowelled at 6–9 mm — designed for thermal-shock and chemical-aggressive environments like food prep, dairy, brewing and cold rooms.",
        },
        {
          q: "Can you apply over an existing tiled floor?",
          a: "Usually not. Tile bonds to the slab through a thin-set; epoxy bonds best to the slab directly. We remove the tile, repair the slab and shotblast before priming. We'd rather lose a day to demolition than warranty-replace a delamination later.",
        },
        {
          q: "How long until the floor takes traffic?",
          a: "Walk-on at 24 hr for most epoxies, 12 hr for fast-cure systems. Light service at 72 hr. Full chemical resistance at 7 days. PU-cement reaches walk-on at 12–24 hr and full service at 5–7 days.",
        },
        {
          q: "What about hot exposure — kitchen wash-downs, steam?",
          a: "PU-cement is rated for steam cleaning and thermal shock; epoxies are not. For kitchens, cold rooms and dairies we always specify a Ucrete-grade PU-cement, never standard epoxy.",
        },
        {
          q: "ESD floor — what does the resistance spec usually call for?",
          a: "Typically 10⁶ to 10⁹ Ω resistance to ground, measured per ANSI/ESD S20.20 or IEC 61340. We use Mapei Mapecoat ESD with a conductive primer + grounding strap network laid before the body coat.",
        },
        {
          q: "How do you handle moisture-positive substrates?",
          a: "Moisture-tolerant primer (e.g. Mapei Primer MF or Eporip) where the slab reads 4–6 % MC. Above 6 % MC we install a moisture-blocking epoxy membrane below the primer — the schedule of works adjusts by 1–2 days.",
        },
        {
          q: "Anti-slip rating — what's R9 / R11 / R13?",
          a: "DIN 51130 slip-rating: R9 is shallow (offices, dry retail), R10–R11 is general (commercial wet zones), R12–R13 is aggressive (kitchens, factory wash-downs). We broadcast aggregate or specify a textured top sealer to hit the rating in the spec.",
        },
        {
          q: "Will the colour stay true under UV?",
          a: "Standard epoxy yellows under direct UV — add a UV-stable PU topcoat (Mapei Mapecoat TNS UV or X-Calibur PolyU). For atrium and showroom floors we always specify the UV topcoat in the method statement.",
        },
        {
          q: "What's the typical cost per square metre?",
          a: "Indicative ranges only — every job is quoted after a site survey. Roller-applied: AED 90–150 / m². SL epoxy 3 mm: AED 160–260 / m². Decorative flake / metallic: AED 220–360 / m². PU-cement 6 mm: AED 360–560 / m². Add for difficult access or night-only programmes.",
        },
      ],
    },

    {
      type: "related",
      eyebrow: "Related disciplines",
      heading: "Often specified alongside.",
      items: [
        { slug: "waterproofing", title: "Waterproofing", note: "Vapour-tight membranes for moisture-positive substrates before resin priming." },
        { slug: "microtopping",  title: "Microtopping",  note: "Decorative seamless overlay when an epoxy isn't the right finish." },
      ],
    },

    {
      type: "cta",
      heading: "Send us the chemical schedule. We'll match the system.",
      body:
        "Free site survey across Dubai, Abu Dhabi and Sharjah. Written quotation back within 48 working hours.",
    },
  ],
};

export default epoxyFlooring;
