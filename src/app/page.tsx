import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ScrollSequence } from "@/components/sections/scroll-sequence";
import { CredentialsSection } from "@/components/sections/credentials";
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
      <CredentialsSection showAboutLink />
      <HomeEnquiry />
      <VisitUs />
    </>
  );
}
