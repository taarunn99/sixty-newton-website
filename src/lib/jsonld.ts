import { SITE } from "@/constants/site";

/**
 * JSON-LD structured-data builders.
 * Inject in page <head> via dangerouslySetInnerHTML in a <script type="application/ld+json"> tag.
 * Validate with https://search.google.com/test/rich-results before launch.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo-mark.svg`,
    description: SITE.description,
    foundingDate: String(SITE.foundedYear),
    sameAs: [SITE.social.instagram, SITE.social.linkedin].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.landline,
        email: SITE.email,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        email: SITE.email,
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}${SITE.ogImage}`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.geo.latitude,
      longitude: SITE.address.geo.longitude,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "AdministrativeArea", name: "Sharjah" },
      { "@type": "AdministrativeArea", name: "Ajman" },
      { "@type": "AdministrativeArea", name: "Ras Al Khaimah" },
      { "@type": "AdministrativeArea", name: "Fujairah" },
      { "@type": "AdministrativeArea", name: "Umm Al Quwain" },
    ],
    hasCredential: [
      "Approved applicator — MAPEI",
      "Approved applicator — LATICRETE",
      "Approved applicator — AKZONOBEL",
      "Approved applicator — X-CALIBUR",
    ],
  };
}

type ServiceJsonLdInput = {
  serviceType: string;
  name: string;
  description: string;
  url: string;
  systemVariants?: string[];
};
export function serviceJsonLd({ serviceType, name, description, url, systemVariants = [] }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType,
    provider: { "@id": `${SITE.url}#localbusiness` },
    name,
    description,
    url,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "AdministrativeArea", name: "Sharjah" },
    ],
    ...(systemVariants.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} systems`,
            itemListElement: systemVariants.map(v => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: v },
            })),
          },
        }
      : {}),
    termsOfService: `${SITE.url}/legal/terms`,
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(it => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: new URL(item.href, SITE.url).toString(),
    })),
  };
}

export function jsonLdScript(payload: object) {
  return {
    __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
  };
}
