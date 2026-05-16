import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms governing your use of the Sixty Newton website.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <StubBody>Terms drafting in progress.</StubBody>
    </>
  );
}
