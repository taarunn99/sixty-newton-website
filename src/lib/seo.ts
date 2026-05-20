import "server-only";
import type { Metadata } from "next";
import { SITE } from "@/constants/site";

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
};

/**
 * Centralised per-route metadata builder.
 * - Sets canonical (self-referencing, absolute, no trailing slash beyond root)
 * - Sets Open Graph + Twitter (summary_large_image)
 * - Title resolves against template defined in root layout
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  const image = ogImage ?? SITE.ogImage;
  const desc = description ?? SITE.description;

  return {
    title,
    description: desc,
    alternates: { canonical: url, languages: { "en-AE": url } },
    keywords,
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title,
      description: desc,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
