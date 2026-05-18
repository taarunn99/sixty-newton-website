import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { PRIVACY_BODY, PRIVACY_LAST_UPDATED } from "@/content/legal/privacy";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Sixty Newton Technical Services LLC collects, uses, shares and protects personal data — covering quote requests, site surveys, project documents and Website usage.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated ${PRIVACY_LAST_UPDATED}`}
      />
      <article
        className="
          prose prose-invert mx-auto max-w-3xl px-5 md:px-12 lg:px-16 py-16 md:py-24
          prose-headings:font-serif prose-headings:font-light prose-headings:tracking-[-0.01em]
          prose-h2:mt-14 prose-h2:text-3xl md:prose-h2:text-4xl
          prose-h3:mt-10 prose-h3:text-2xl
          prose-p:text-fg-muted prose-p:font-light prose-p:leading-relaxed
          prose-li:text-fg-muted prose-li:font-light
          prose-strong:text-fg prose-strong:font-medium
          prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-2
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{PRIVACY_BODY}</ReactMarkdown>
      </article>
    </>
  );
}
