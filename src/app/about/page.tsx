import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Who Sixty Newton is, why we exist, and the people delivering the work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Sixty Newton" title="About" subtitle="The team, the trade license, the story." />
      <StubBody>Company background, leadership and credentials coming online.</StubBody>
    </>
  );
}
