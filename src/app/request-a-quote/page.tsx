import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description: "Tell us about your project. We&rsquo;ll be back with a quote within one business day.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Start the conversation"
        title="Request a Quote"
        subtitle="Project brief, drawings, site location — share what you have and we&rsquo;ll respond inside one business day."
      />
      <StubBody>Quote form (nodemailer-backed) wiring with the contact form.</StubBody>
    </>
  );
}
