/**
 * Typed access to public env vars (client-safe).
 * Server-only env should be read directly in server modules/route handlers.
 */

export const PUBLIC_ENV = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixtynewton.com",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
} as const;

export const isProd = process.env.NODE_ENV === "production";
export const isPreview = process.env.VERCEL_ENV === "preview";
