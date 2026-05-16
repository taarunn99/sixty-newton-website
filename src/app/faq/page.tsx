import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Common questions about scope, pricing, timelines and warranties at Sixty Newton.",
  path: "/faq",
});

// Placeholder Q&A — replace with real questions before launch
const FAQ_ITEMS = [
  {
    q: "What scopes do you self-deliver vs sub-contract?",
    a: "Placeholder — to be filled in once positioning is locked.",
  },
  {
    q: "Where do you work?",
    a: "Sharjah, Dubai and the wider UAE.",
  },
];

export default function FAQPage() {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <PageHero eyebrow="Common questions" title="FAQ" />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <StubBody>FAQ content being finalised.</StubBody>
    </>
  );
}
