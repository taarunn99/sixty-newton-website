import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Approach",
  description:
    "How Sixty Newton operates — the atelier discipline and tier-one builder throughput that defines our delivery.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Approach"
        subtitle="The discipline of an atelier. The throughput of a tier-one builder."
      />
      <StubBody>
        Methodology, process diagrams and capability statement coming online.
      </StubBody>
    </>
  );
}
