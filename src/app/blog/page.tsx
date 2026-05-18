import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Field notes on waterproofing, microtopping, epoxy and large-format finishes — written by the team delivering the work.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Blog"
        subtitle="Honest write-ups from the people on site."
      />
      <StubBody>First post drops with launch.</StubBody>
    </>
  );
}
