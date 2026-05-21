/**
 * Single source of truth for site-wide brand + contact data.
 * Imported by: layout metadata, JSON-LD, navbar, footer, mailto/tel/wa.me, sitemap, SEO helpers.
 * NEVER hard-code these values anywhere else.
 */

export const SITE = {
  name: "Sixty Newton",
  legalName: "Sixty Newton Technical Services L.L.C.",
  parentGroup: "Lapiz Blue Group of Companies",
  parentGroupUrl: "https://www.lapizblue.com",
  // Concise tagline used in meta titles, OG headers and other compact
  // brand surfaces. The long-form hero headline lives in the Hero
  // component itself ("Your trusted partner in technical services and
  // contracting.") — that's the company-profile-anchored statement.
  tagline: "Specialist technical services & contracting · UAE",
  description:
    "Sixty Newton Technical Services is a specialist contracting company powering some of the UAE's most demanding projects — waterproofing, seamless flooring, microtopping, large-format tiling and high-performance finishes. Approved applicators for Mapei, Laticrete, AkzoNobel and X-Calibur.",
  shortDescription:
    "UAE specialist contracting — waterproofing, seamless flooring, microtopping, large-format tiling and high-performance finishes. Approved applicators for Mapei, Laticrete, AkzoNobel and X-Calibur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixtynewton.com",
  locale: "en_AE",
  htmlLang: "en-AE",
  themeColor: "#0a0807",

  // ─── Contact ───
  phone: "+971 50 619 4737",
  phoneHref: "+971506194737",
  landline: "+971 4 885 5257",
  landlineHref: "+97148855257",
  whatsapp: "+971 50 281 4338",
  whatsappHref: "971502814338",
  whatsappMessage: "Hello Sixty Newton, I'd like to discuss a project.",
  // Lead-gen primary mailbox. Sales enquiries, quote requests, BOQs,
  // press, partnerships — everything routes through info@.
  email: "info@60newton.com",
  // Chief-contractor direct line. Salim runs ground operations and isn't
  // always at a desk; promoted only in narrow contexts (Leadership card,
  // privacy "direct line") where the personal touch matters. Never the
  // primary CTA — always backed by info@ on lead-gen surfaces.
  emailDirect: "salim@60newton.com",

  // Registered office in Dubai. Sixty Newton serves clients across the
  // entire UAE — see `serviceAreas` for the full coverage list emitted
  // in JSON-LD areaServed.
  // Note: the trading-quote document references Warehouse 11; the
  // user-confirmed operational address is Shop 12. If correspondence
  // ever requires the legal unit number, verify with finance.
  address: {
    streetAddress: "Shop 12, 14 Street, Al Quoz Industrial Area 4",
    locality: "Dubai",
    region: "Dubai",
    postalCode: "914005",
    country: "United Arab Emirates",
    countryCode: "AE",
    geo: { latitude: 25.1972, longitude: 55.2744 },
  },

  // ─── UAE VAT / tax registration number (from the trading quote) ───
  trn: "104670113000003",

  // Coverage statement — used on contact, footer, and Visit Us section.
  serviceAreaTagline: "Registered in Dubai. Serving projects across the UAE.",
  serviceAreas: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
  ],

  // ─── Brand assets ───
  // OG image is generated dynamically by /src/app/opengraph-image.tsx — Next serves
  // it at /opengraph-image. Use absolute path so it works in meta tags too.
  ogImage: "/opengraph-image",
  logo: {
    placeholder: false,
    dark: "/brand/logo.svg",        // white wordmark + gold mark — for dark bg
    light: "/brand/logo-light.svg", // dark wordmark + gold mark — for light bg
  },

  // ─── Social ───
  social: {
    instagram: "https://www.instagram.com/60newton/",
    // Sixty Newton shares the LinkedIn presence of its parent Lapiz Blue Group.
    linkedin: "https://www.linkedin.com/company/lapizblue/posts/?feedView=all",
  },

  // ─── Trade license (UAE Dubai LLC) ───
  tradeLicense: "1369014",

  // ─── Founded ───
  foundedYear: 2024,
} as const;

export type SiteConfig = typeof SITE;

// ─── Disciplines registered with /disciplines hub ───
// Source-of-truth list per the company profile + client confirmation.
// `published: true` = a dedicated /disciplines/[slug] page exists; only
// published disciplines are linked from the navbar/hamburger to avoid 404s.
export const DISCIPLINES = [
  {
    slug: "waterproofing",
    title: "Waterproofing",
    short: "Waterproofing",
    bucket: "Waterproofing Systems",
    published: true,
    description:
      "Cementitious and acrylic membrane systems — for surfaces, facades and roofs. Decades-deep applicator expertise across the building envelope.",
  },
  {
    slug: "bitumen-waterproofing",
    title: "Bitumen Waterproofing",
    short: "Bitumen",
    bucket: "Waterproofing Systems",
    published: true,
    description:
      "Hot- and cold-applied bituminous membrane systems for below-grade, podium decks and heavy-duty waterproofing scopes.",
  },
  {
    slug: "specialised-coatings-and-sealants",
    title: "Specialised Coatings & Sealants",
    short: "Coatings",
    bucket: "Coatings & Protection",
    published: true,
    description:
      "Engineered protective coatings and joint sealants for industrial, hospitality and infrastructure projects.",
  },
  {
    slug: "microtopping",
    title: "Microtopping Finishes",
    short: "Microtopping",
    bucket: "Decorative Concrete",
    published: true,
    description:
      "Seamless cementitious micro-finish for walls and floors — a refined, monolithic surface delivered to a designer's spec.",
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    short: "Epoxy",
    bucket: "Flooring Systems",
    published: true,
    description:
      "Industrial, decorative and ESD epoxy floor systems — cementitious polyurethane and high-performance resin finishes.",
  },
  {
    slug: "self-levelling",
    title: "Self-Levelling & Screed",
    short: "Self-Levelling",
    bucket: "Flooring Systems",
    published: true,
    description:
      "Cementitious self-levelling and screed substrates — the precision base every premium finish depends on.",
  },
  {
    slug: "marble-installation",
    title: "Marble Installation",
    short: "Marble",
    bucket: "Tile & Stone Works",
    published: true,
    description:
      "Specialist marble installation across hotel, residential and infrastructure projects — including quartz and engineered stone.",
  },
  {
    slug: "large-format-tiling",
    title: "Large Format Tiling",
    short: "Tiling",
    bucket: "Tile & Stone Works",
    published: true,
    description:
      "Precision installation of large-format porcelain and stone slabs — the finish where tolerances are unforgiving.",
  },
  {
    slug: "polishing",
    title: "Polishing — Marble & Floors",
    short: "Polishing",
    bucket: "Tile & Stone Works",
    published: true,
    description:
      "Restoration and finishing polish for natural stone, marble and engineered floors — bringing surfaces back to specification.",
  },
  {
    slug: "design-concrete",
    title: "Design Concrete & Screeding",
    short: "Design Concrete",
    bucket: "Decorative Concrete",
    published: true,
    description:
      "Decorative and structural concrete finishes — including pattern, polished and exposed-aggregate systems.",
  },
  {
    slug: "vinyl-flooring",
    title: "Vinyl Flooring",
    short: "Vinyl",
    bucket: "Flooring Systems",
    published: true,
    description:
      "LVT, sheet vinyl and resilient flooring — precision-laid and warranted.",
  },
  {
    slug: "insulation",
    title: "Insulation",
    short: "Insulation",
    bucket: "Building Repair & Insulation",
    published: true,
    description:
      "Thermal and acoustic insulation systems for floors, walls and roofs.",
  },
  {
    slug: "painting",
    title: "Interior & Exterior Painting",
    short: "Painting",
    bucket: "Coatings & Protection",
    published: true,
    description:
      "Specification-grade paint systems for interior walls and ceilings, and weather-tested exterior facades.",
  },
  {
    slug: "general-maintenance",
    title: "Repair & General Maintenance",
    short: "Maintenance",
    bucket: "Building Repair & Insulation",
    published: true,
    description:
      "Reactive and planned maintenance — the after-sales relationship that protects the work.",
  },
] as const;

export type Discipline = (typeof DISCIPLINES)[number];

// ─── Bucket grouping (used by /disciplines hub + Disciplines mega-menu) ───
// Bucket name and slug must match DISCIPLINES[].bucket so DISCIPLINES_BY_BUCKET
// computes cleanly. Slugs are URL-safe anchors for #bucket targets on the hub.
export const DISCIPLINE_BUCKETS = [
  {
    slug: "waterproofing-systems",
    name: "Waterproofing Systems",
    eyebrow: "Membranes & moisture protection",
    blurb:
      "Cementitious, polyurethane, GRP and torch-applied bitumen membranes — across roofs, podiums, basements, water tanks and wet areas.",
  },
  {
    slug: "flooring-systems",
    name: "Flooring Systems",
    eyebrow: "Resin · screed · vinyl",
    blurb:
      "Industrial, commercial and decorative floor systems — self-levelling screed, epoxy, PU-cement, ESD and luxury vinyl.",
  },
  {
    slug: "tile-stone-works",
    name: "Tile & Stone Works",
    eyebrow: "Marble · porcelain · large format",
    blurb:
      "Hollow-free marble installation, large-format porcelain slabs to 1.6 × 3.2 m, diamond-pad polishing for hospitality-grade finish.",
  },
  {
    slug: "decorative-concrete",
    name: "Decorative Concrete",
    eyebrow: "Architectural finish",
    blurb:
      "Polished concrete, microtopping, stamped, exposed-aggregate and colour-hardened systems — concrete as the visible architecture.",
  },
  {
    slug: "coatings-protection",
    name: "Coatings & Protection",
    eyebrow: "Sealants · paint · joint systems",
    blurb:
      "Joint sealing in PU / silicone / polysulphide / MS polymer, plus AkzoNobel-approved Dulux paint systems for interior and exterior.",
  },
  {
    slug: "repair-insulation",
    name: "Building Repair & Insulation",
    eyebrow: "Diagnose · repair · insulate",
    blurb:
      "Concrete repair, crack injection, CFRP strengthening and thermal / acoustic insulation across walls, roofs and MEP.",
  },
] as const satisfies readonly { slug: string; name: ServiceBucketName; eyebrow: string; blurb: string }[];

export type ServiceBucketName = (typeof DISCIPLINES)[number]["bucket"];
export type DisciplineBucket = (typeof DISCIPLINE_BUCKETS)[number];

/** Grouped view of disciplines for the hub + mega-menu. */
export function getDisciplinesByBucket() {
  return DISCIPLINE_BUCKETS.map(bucket => ({
    ...bucket,
    disciplines: DISCIPLINES.filter(d => d.bucket === bucket.name),
  }));
}

// ─── Approved applicator brands (per company profile, page 22) ───
// Slugs MUST match APPLICATOR_CERTIFICATES[].slug below so hamburger / footer
// anchors resolve to certificate cards on /approach.
export const APPROVED_APPLICATORS = [
  { name: "Mapei",     slug: "mapei" },
  { name: "Laticrete", slug: "laticrete" },
  { name: "AkzoNobel", slug: "akzonobel" },
  { name: "X-Calibur", slug: "xcalibur" },
] as const;

// ─── Selected reference projects (per company profile, pages 10-17) ───
// `published: true` = a dedicated /portfolio/[slug] case study exists.
export const REFERENCE_PROJECTS = [
  { name: "Atlantis The Royal",          location: "Palm Jumeirah, Dubai", slug: "atlantis-the-royal",        published: true },
  { name: "Al Wathba Desert Resort & Spa", location: "Abu Dhabi",           slug: "al-wathba-desert-resort",   published: true },
  { name: "St. Regis Developments",      location: "UAE",                   slug: "st-regis-developments",      published: true },
  { name: "Ahlatci Gold Refinery",       location: "Industrial",            slug: "ahlatci-gold-refinery",      published: true},
  { name: "The Address Boulevard Hotel", location: "Dubai",                 slug: "address-boulevard-hotel",    published: true},
  { name: "Jumeirah Golf Villas",        location: "Dubai",                 slug: "jumeirah-golf-villas",       published: true},
  { name: "Dubai Hills Villas",          location: "Dubai",                 slug: "dubai-hills-villas",         published: true},
  { name: "Le Méridien Hotels",          location: "UAE",                   slug: "le-meridien-hotels",         published: true},
  { name: "Masha'Allah Building",        location: "Al Nahda",              slug: "mashaallah-building",        published: true},
  { name: "Delhi Metro",                 location: "Delhi, India",          slug: "delhi-metro",                published: true},
  { name: "Omaxe Mall",                  location: "Delhi, India",          slug: "omaxe-mall",                 published: true},
] as const;

// ─── Navbar items (top-level) ───
// Order matters — left-to-right in the centre nav.
// Hamburger drawer holds overflow links (DISCIPLINES sub-pages, applicators,
// blog, FAQ, legal). See HAMBURGER_GROUPS below.
export const NAV_ITEMS = [
  { label: "Home",        href: "/" },
  { label: "Disciplines", href: "/disciplines" },
  { label: "Approach",    href: "/approach" },
  { label: "Portfolio",   href: "/portfolio" },
  { label: "About",       href: "/about" },
] as const;

// ─── Hamburger drawer groups (overflow nav, visible on ALL viewports) ───
export type HamburgerLink = { label: string; href: string; external?: boolean };
export type HamburgerGroup = { heading: string; items: readonly HamburgerLink[] };

export const HAMBURGER_GROUPS: readonly HamburgerGroup[] = [
  {
    heading: "Disciplines",
    items: DISCIPLINES.filter(d => d.published).map(d => ({
      label: d.title,
      href: `/disciplines/${d.slug}`,
    })),
  },
  {
    heading: "Applicators",
    items: APPROVED_APPLICATORS.map(b => ({
      label: b.name,
      href: `/approach#${b.slug}`,
    })),
  },
  {
    heading: "Reference",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ",  href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms",   href: "/legal/terms" },
    ],
  },
];

// ─── Footer secondary links ───
export const FOOTER_SECONDARY = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
] as const;

// ─── Company-issued documents (Trade License, VAT, etc.) ───
export type CompanyDocument = {
  slug: string;
  title: string;
  subtitle?: string;
  href: string;
};

export const COMPANY_DOCUMENTS: readonly CompanyDocument[] = [
  {
    slug: "trade-license",
    title: "Trade License",
    subtitle: "2025 – 26 · Issued by UAE authorities",
    href: "/docs/trade-license-2025-26.pdf",
  },
  {
    slug: "vat-certificate",
    title: "VAT Registration",
    subtitle: "2025 – 26 · Federal Tax Authority",
    href: "/docs/vat-registration-2025-26.pdf",
  },
];

// ─── Applicator certificates from manufacturer partners ───
// Each logo uses whichever format compressed smaller (mixed PNG/WebP).
// `puzzleSpan` controls the bento layout at md+ (col-span on a 12-col grid).
export type ApplicatorCertificate = {
  slug: "mapei" | "laticrete" | "akzonobel" | "xcalibur";
  brand: string;
  scope: string;
  href: string;
  logoSrc: string;
  logoAspect: "square" | "wide";
  puzzleSpan: 5 | 7;  // 12-col bento: alternates 7+5 / 5+7 for zigzag interlock
};

export const APPLICATOR_CERTIFICATES: readonly ApplicatorCertificate[] = [
  {
    slug: "mapei",
    brand: "Mapei",
    scope: "Adhesives, grouts, waterproofing",
    href: "/docs/mapei-applicator-certificate.pdf",
    logoSrc: "/brand/applicators/mapei.png",
    logoAspect: "square",
    puzzleSpan: 7,
  },
  {
    slug: "laticrete",
    brand: "Laticrete",
    scope: "Tile & stone systems",
    href: "/docs/laticrete-applicator-certificate.pdf",
    logoSrc: "/brand/applicators/laticrete.webp",
    logoAspect: "square",
    puzzleSpan: 5,
  },
  {
    slug: "akzonobel",
    brand: "AkzoNobel · Dulux",
    scope: "Decorative & protective coatings",
    href: "/docs/akzonobel-applicator-certificate.pdf",
    logoSrc: "/brand/applicators/akzonobel.webp",
    logoAspect: "square",
    puzzleSpan: 5,
  },
  {
    slug: "xcalibur",
    brand: "X-Calibur",
    scope: "Concrete admixtures & repair",
    href: "/docs/xcalibur-applicator-certificate.pdf",
    logoSrc: "/brand/applicators/xcalibur.webp",
    logoAspect: "wide",
    puzzleSpan: 7,
  },
];

// ─── Footer 4-column structure (premium-fitout style: wayfinding map, not sitemap dump) ───
export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterSection = { heading: string; links: readonly FooterLink[] };

export const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    heading: "Practice",
    links: [
      { label: "About", href: "/about" },
      { label: "Approach", href: "/approach" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Disciplines", href: "/disciplines" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Applicators", href: "/approach#applicators" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Request a Quote", href: "/request-a-quote" },
      { label: SITE.email, href: `mailto:${SITE.email}`, external: true },
      { label: "WhatsApp", href: `https://wa.me/${SITE.whatsappHref}`, external: true },
      { label: "Instagram", href: SITE.social.instagram, external: true },
      { label: "LinkedIn", href: SITE.social.linkedin, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];
