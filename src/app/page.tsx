import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ScrollSequence } from "@/components/sections/scroll-sequence";
import { HomeFeaturedDisciplines } from "@/components/sections/home-featured-disciplines";
import { HomeFeaturedCaseStudies } from "@/components/sections/home-featured-case-studies";
import { CredentialsSection } from "@/components/sections/credentials";
import { HomeInsightsStrip } from "@/components/sections/home-insights-strip";
import { HomeEnquiry } from "@/components/sections/home-enquiry";
import { VisitUs } from "@/components/sections/visit-us";
import { SITE } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
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
