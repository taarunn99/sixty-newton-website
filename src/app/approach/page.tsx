import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Approach",
  description:
    "How Sixty Newton works — disciplined execution, precision delivery and approved-applicator standards on every project.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Approach"
        subtitle="Disciplined execution. Precision delivery. Approved-applicator standards on every project."
      />
      <StubBody>
        Methodology, process diagrams and capability statement coming online.
      </StubBody>
    </>
  );
}
