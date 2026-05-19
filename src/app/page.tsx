import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ScrollSequence } from "@/components/sections/scroll-sequence";
import { CredentialsSection } from "@/components/sections/credentials";
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
      <CredentialsSection />
      {/*
        More scroll-driven sections to come below:
        Disciplines reveal · Approach beats · Selected work · Clients · Closing CTA.
      */}
    </>
  );
}
