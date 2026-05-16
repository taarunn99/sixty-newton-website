/**
 * Single source of truth for site-wide brand + contact data.
 * Imported by: layout metadata, JSON-LD, navbar, footer, mailto/tel/wa.me, sitemap, SEO helpers.
 * NEVER hard-code these values anywhere else.
 *
 * TODO before launch: confirm every TODO_PLACEHOLDER value with the client.
 */

export const SITE = {
  name: "Sixty Newton",
  legalName: "Sixty Newton Technical Services L.L.C.",
  tagline: "Precision Engineered, at Scale.",
  description:
    "A single-source fit-out contractor for mechanical, electrical, plumbing, swimming pool and joinery scopes — delivered with the discipline of an atelier and the throughput of a tier-one builder.",
  shortDescription:
    "Single-source MEP, fit-out, pools and specialist systems contractor in the UAE.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixtynewton.com",
  locale: "en_US",
  themeColor: "#1a1410",

  // ─── Contact ───  (TODO_PLACEHOLDER values — confirm before launch)
  phone: "+971 0 000 0000",
  phoneHref: "+971000000000",
  whatsapp: "+971 0 000 0000",
  whatsappHref: "971000000000",
  email: "hello@sixtynewton.com",

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
    instagram: "https://www.instagram.com/sixtynewton",
    linkedin: "https://www.linkedin.com/company/sixty-newton",
  },

  // ─── Trade license (UAE Sharjah LLC) ───
  tradeLicense: "TODO_PLACEHOLDER",

  // ─── Founded ───
  foundedYear: 2024,
} as const;

export type SiteConfig = typeof SITE;

// ─── Disciplines registered with /disciplines hub ───
export const DISCIPLINES = [
  {
    slug: "mechanical-electrical-plumbing",
    title: "Mechanical, Electrical & Plumbing",
    short: "MEP",
    description: "HVAC, power, lighting, ELV, plumbing and drainage — designed and installed as one coordinated package.",
  },
  {
    slug: "swimming-pools",
    title: "Swimming Pools & Specialist Water",
    short: "Pools",
    description: "Filtration, dosing, hydraulics, finishing — pool builds and specialist water systems to spec.",
  },
  {
    slug: "fit-out",
    title: "Fit-Out & General Contracting",
    short: "Fit-Out",
    description: "Single-point responsibility for interiors — from demolition through handover.",
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    short: "Epoxy",
    description: "Industrial, decorative and high-performance epoxy floor systems.",
  },
  {
    slug: "vinyl-flooring",
    title: "Vinyl Flooring",
    short: "Vinyl",
    description: "LVT, sheet vinyl and resilient flooring — precision-laid and warranted.",
  },
  {
    slug: "screed-self-levelling",
    title: "Screed & Self-Levelling",
    short: "Screed",
    description: "Cementitious and self-levelling screeds — the substrate the finish depends on.",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    short: "Waterproofing",
    description: "Membrane, liquid and crystalline systems for wet rooms, terraces and below-grade.",
  },
  {
    slug: "tiling",
    title: "Tiling",
    short: "Tiling",
    description: "Wall and floor tiling — large-format, mosaic, and natural stone.",
  },
  {
    slug: "microcement",
    title: "Microcement",
    short: "Microcement",
    description: "Seamless cementitious micro-finish for walls and floors.",
  },
  {
    slug: "paint",
    title: "Paint — Interior & Exterior",
    short: "Paint",
    description: "Specification-grade paint systems for interior walls, ceilings and exterior facades.",
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    short: "Maintenance",
    description: "Reactive and planned maintenance — the after-sales relationship that protects the work.",
  },
] as const;

export type Discipline = (typeof DISCIPLINES)[number];

// ─── Navbar items (top-level) ───
export const NAV_ITEMS = [
  { label: "Disciplines", href: "/disciplines" },
  { label: "Approach", href: "/approach" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Footer secondary links ───
export const FOOTER_SECONDARY = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
] as const;
