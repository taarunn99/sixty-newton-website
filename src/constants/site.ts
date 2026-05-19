/**
 * Single source of truth for site-wide brand + contact data.
 * Imported by: layout metadata, JSON-LD, navbar, footer, mailto/tel/wa.me, sitemap, SEO helpers.
 * NEVER hard-code these values anywhere else.
 */

export const SITE = {
  name: "Sixty Newton",
  legalName: "Sixty Newton Technical Services L.L.C.",
  parentGroup: "Lapiz Blue Group of Companies",
  tagline: "Your go-to applicators.",
  description:
    "Sixty Newton Technical Services is a specialist contracting company powering some of the UAE's most demanding projects — waterproofing, seamless flooring, microtopping, large-format tiling and high-performance finishes. Approved applicators for Mapei, Laticrete, AkzoNobel and X-Calibur.",
  shortDescription:
    "UAE specialist contracting — waterproofing, seamless flooring, microtopping, large-format tiling and high-performance finishes. Approved applicators for Mapei, Laticrete, AkzoNobel and X-Calibur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixtynewton.com",
  locale: "en_US",
  themeColor: "#0a0807",

  // ─── Contact ───
  phone: "+971 50 619 4737",
  phoneHref: "+971506194737",
  whatsapp: "+971 50 281 4338",
  whatsappHref: "971502814338",
  whatsappMessage: "Hello Sixty Newton, I'd like to discuss a project.",
  email: "info@60newton.com",
  emailSalim: "salim@60newton.com", // direct sales contact per company profile

  address: {
    streetAddress: "TODO_PLACEHOLDER",
    locality: "Sharjah",
    region: "Sharjah",
    postalCode: "TODO_PLACEHOLDER",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

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

  // ─── Trade license (UAE Sharjah LLC) ───
  tradeLicense: "TODO_PLACEHOLDER",

  // ─── Founded ───
  foundedYear: 2024,
} as const;

export type SiteConfig = typeof SITE;

// ─── Disciplines registered with /disciplines hub ───
// Source-of-truth list per the company profile + client confirmation.
export const DISCIPLINES = [
  {
    slug: "waterproofing",
    title: "Waterproofing",
    short: "Waterproofing",
    description:
      "Cementitious and acrylic membrane systems — for surfaces, facades and roofs. Decades-deep applicator expertise across the building envelope.",
  },
  {
    slug: "bitumen-waterproofing",
    title: "Bitumen Waterproofing",
    short: "Bitumen",
    description:
      "Hot- and cold-applied bituminous membrane systems for below-grade, podium decks and heavy-duty waterproofing scopes.",
  },
  {
    slug: "specialised-coatings-and-sealants",
    title: "Specialised Coatings & Sealants",
    short: "Coatings",
    description:
      "Engineered protective coatings and joint sealants for industrial, hospitality and infrastructure projects.",
  },
  {
    slug: "microtopping",
    title: "Microtopping Finishes",
    short: "Microtopping",
    description:
      "Seamless cementitious micro-finish for walls and floors — a refined, monolithic surface delivered to a designer's spec.",
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    short: "Epoxy",
    description:
      "Industrial, decorative and ESD epoxy floor systems — cementitious polyurethane and high-performance resin finishes.",
  },
  {
    slug: "self-levelling",
    title: "Self-Levelling & Screed",
    short: "Self-Levelling",
    description:
      "Cementitious self-levelling and screed substrates — the precision base every premium finish depends on.",
  },
  {
    slug: "marble-installation",
    title: "Marble Installation",
    short: "Marble",
    description:
      "Specialist marble installation across hotel, residential and infrastructure projects — including quartz and engineered stone.",
  },
  {
    slug: "large-format-tiling",
    title: "Large Format Tiling",
    short: "Tiling",
    description:
      "Precision installation of large-format porcelain and stone slabs — the finish where tolerances are unforgiving.",
  },
  {
    slug: "polishing",
    title: "Polishing — Marble & Floors",
    short: "Polishing",
    description:
      "Restoration and finishing polish for natural stone, marble and engineered floors — bringing surfaces back to specification.",
  },
  {
    slug: "design-concrete",
    title: "Design Concrete & Screeding",
    short: "Design Concrete",
    description:
      "Decorative and structural concrete finishes — including pattern, polished and exposed-aggregate systems.",
  },
  {
    slug: "vinyl-flooring",
    title: "Vinyl Flooring",
    short: "Vinyl",
    description:
      "LVT, sheet vinyl and resilient flooring — precision-laid and warranted.",
  },
  {
    slug: "insulation",
    title: "Insulation",
    short: "Insulation",
    description:
      "Thermal and acoustic insulation systems for floors, walls and roofs.",
  },
  {
    slug: "painting",
    title: "Interior & Exterior Painting",
    short: "Painting",
    description:
      "Specification-grade paint systems for interior walls and ceilings, and weather-tested exterior facades.",
  },
  {
    slug: "general-maintenance",
    title: "Repair & General Maintenance",
    short: "Maintenance",
    description:
      "Reactive and planned maintenance — the after-sales relationship that protects the work.",
  },
] as const;

export type Discipline = (typeof DISCIPLINES)[number];

// ─── Approved applicator brands (per company profile, page 22) ───
export const APPROVED_APPLICATORS = [
  { name: "Mapei",     slug: "mapei" },
  { name: "Laticrete", slug: "laticrete" },
  { name: "AkzoNobel", slug: "akzonobel" },
  { name: "X-Calibur", slug: "x-calibur" },
] as const;

// ─── Selected reference projects (per company profile, pages 10-17) ───
export const REFERENCE_PROJECTS = [
  { name: "Atlantis The Royal",          location: "Palm Jumeirah, Dubai" },
  { name: "Al Wathba Desert Resort & Spa", location: "Abu Dhabi" },
  { name: "Ahlatci Gold Refinery",       location: "Industrial" },
  { name: "St. Regis Developments",      location: "UAE" },
  { name: "The Address Boulevard Hotel", location: "Dubai" },
  { name: "Jumeirah Golf Villas",        location: "Dubai" },
  { name: "Dubai Hills Villas",          location: "Dubai" },
  { name: "Le Méridien Hotels",          location: "UAE" },
  { name: "Masha'Allah Building",        location: "Al Nahda" },
  { name: "Delhi Metro",                 location: "Delhi, India" },
  { name: "Patna Metro Station",         location: "Patna, India" },
  { name: "Omaxe Mall",                  location: "Delhi, India" },
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
    items: DISCIPLINES.map(d => ({
      label: d.title,
      href: `/disciplines/${d.slug}`,
    })),
  },
  {
    heading: "Applicators",
    items: APPROVED_APPLICATORS.map(b => ({
      label: b.name,
      href: `/about#applicators`,
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
// slug matches /public/brand/applicators/<slug>.png
export type ApplicatorCertificate = {
  slug: "mapei" | "laticrete" | "akzonobel" | "xcalibur";
  brand: string;
  scope: string;
  href: string;
  // Logos vary wildly in aspect — let each one size itself within the chip
  // rather than forcing a uniform box.
  logoAspect?: "square" | "wide";
};

export const APPLICATOR_CERTIFICATES: readonly ApplicatorCertificate[] = [
  {
    slug: "mapei",
    brand: "Mapei",
    scope: "Adhesives, grouts, waterproofing",
    href: "/docs/mapei-applicator-certificate.pdf",
  },
  {
    slug: "laticrete",
    brand: "Laticrete",
    scope: "Tile & stone systems",
    href: "/docs/laticrete-applicator-certificate.pdf",
  },
  {
    slug: "akzonobel",
    brand: "AkzoNobel · Dulux",
    scope: "Decorative & protective coatings",
    href: "/docs/akzonobel-applicator-certificate.pdf",
  },
  {
    slug: "xcalibur",
    brand: "X-Calibur",
    scope: "Concrete admixtures & repair systems",
    href: "/docs/xcalibur-applicator-certificate.pdf",
    logoAspect: "wide",
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
      { label: "Applicators", href: "/about#applicators" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Request a Quote", href: "/request-a-quote" },
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
