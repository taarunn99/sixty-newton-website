import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Sixty Newton collects, uses and protects personal data under UAE PDPL.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <StubBody>
        UAE PDPL-compliant policy in legal review. Will cover: data collected, purpose, retention,
        third parties, user rights, and contact for data requests.
      </StubBody>
    </>
  );
}
