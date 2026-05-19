import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import { SITE } from "@/constants/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { GTM } from "@/components/analytics/gtm";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  keywords: [
    "fit-out contractor UAE",
    "MEP contractor Sharjah",
    "swimming pool contractor UAE",
    "epoxy flooring Dubai",
    "waterproofing UAE",
    "microcement Dubai",
    "joinery UAE",
    "Sixty Newton",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    locale: SITE.locale,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  // Favicon + Apple touch icon — Next.js auto-detects /src/app/icon.svg and
  // /src/app/apple-icon.png and injects the correct <link rel> tags, so no
  // explicit `icons` field is needed here. Removed to avoid stale references
  // to the deleted dynamic /icon route.
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />
      </head>
      <body className="bg-bg text-fg antialiased font-sans">
        <GTM />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-h-[60dvh]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ConsentBanner />
        <Toaster theme="dark" position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
