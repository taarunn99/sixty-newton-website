import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected fit-out, MEP and specialist projects delivered across the UAE.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Portfolio"
        subtitle="A growing catalogue of projects delivered across the UAE."
      />
      <StubBody>Project case studies coming online.</StubBody>
    </>
  );
}
