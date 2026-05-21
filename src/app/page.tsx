import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { SITE } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

// Everything below the hero is lazy-loaded. Hero is the only thing
// that needs to be in the critical bundle so the LCP fires fast.
// All sections still SSR (ssr: true) so HTML is complete; the *JS*
// for these client islands loads after the hero is painted.
const ScrollSequence = dynamic(
  () => import("@/components/sections/scroll-sequence").then(m => m.ScrollSequence),
  { ssr: true, loading: () => <section aria-hidden className="relative w-full h-dvh bg-bg" /> },
);
const HomeEnquiry = dynamic(
  () => import("@/components/sections/home-enquiry").then(m => m.HomeEnquiry),
  { ssr: true },
);
const HomeFeaturedDisciplines = dynamic(
  () => import("@/components/sections/home-featured-disciplines").then(m => m.HomeFeaturedDisciplines),
  { ssr: true },
);
const HomeFeaturedCaseStudies = dynamic(
  () => import("@/components/sections/home-featured-case-studies").then(m => m.HomeFeaturedCaseStudies),
  { ssr: true },
);
const CredentialsSection = dynamic(
  () => import("@/components/sections/credentials").then(m => m.CredentialsSection),
  { ssr: true },
);
const HomeInsightsStrip = dynamic(
  () => import("@/components/sections/home-insights-strip").then(m => m.HomeInsightsStrip),
  { ssr: true },
);
const VisitUs = dynamic(
  () => import("@/components/sections/visit-us").then(m => m.VisitUs),
  { ssr: true },
);

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

/**
 * Home-only scroll-sequence frame preloads. Lives here (not in root
 * layout.tsx) so other routes don't pay bandwidth for an animation
 * they never render. Desktop gets 8 frames; mobile gets 4 of the
 * smaller bundle — both warm the HTTP cache before the JS bundle
 * arms the canvas loader.
 */
function HomeScrollSequencePreloads() {
  return (
    <>
      {Array.from({ length: 8 }, (_, i) => {
        const name = `frame-${String(i).padStart(3, "0")}.webp`;
        return (
          <link
            key={`d-${name}`}
            rel="preload"
            as="image"
            href={`/animation/desktop/${name}`}
            type="image/webp"
            media="(min-width: 768px)"
          />
        );
      })}
      {Array.from({ length: 4 }, (_, i) => {
        const name = `frame-${String(i).padStart(3, "0")}.webp`;
        return (
          <link
            key={`m-${name}`}
            rel="preload"
            as="image"
            href={`/animation/mobile/${name}`}
            type="image/webp"
            media="(max-width: 767px)"
          />
        );
      })}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeScrollSequencePreloads />
      <Hero />
      <ScrollSequence />
      <HomeEnquiry />
      <HomeFeaturedDisciplines />
      <HomeFeaturedCaseStudies />
      <CredentialsSection showAboutLink />
      <HomeInsightsStrip />
      <VisitUs />
    </>
  );
}
