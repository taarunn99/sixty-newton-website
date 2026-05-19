import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { DocButton } from "@/components/ui/doc-button";
import {
  APPLICATOR_CERTIFICATES,
  COMPANY_DOCUMENTS,
  SITE,
} from "@/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Approach — Sixty Newton",
  description:
    "How Sixty Newton works. Brand-approved applicator status with Mapei, Laticrete, AkzoNobel and X-Calibur. Trade licence and VAT registration on file. Disciplined execution, signed-off finish.",
  path: "/approach",
  keywords: [
    "Mapei approved applicator UAE",
    "Laticrete certified contractor Dubai",
    "AkzoNobel Dulux applicator UAE",
    "X-Calibur applicator Dubai",
    "Sixty Newton approach",
    "Sixty Newton certifications",
  ],
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Approach"
        subtitle="Brand-certified discipline, signed-off execution. Below — the manufacturer certificates and credentials that anchor every project."
      />

      {/* ── Section 1a — Licensed & compliant (Trade Licence + VAT) ── */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-20 border-b border-border">
        <p className="eyebrow text-fg-subtle">Licensed &amp; compliant</p>
        <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
          Registered, licensed, audit-ready.
        </h2>
        <p className="mt-4 max-w-2xl font-serif font-light text-fg-muted text-lg leading-relaxed">
          Click any document to open the PDF. Current as of this trading year.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
          {COMPANY_DOCUMENTS.map(doc => (
            <DocButton
              key={doc.slug}
              href={doc.href}
              title={doc.title}
              subtitle={doc.subtitle}
              hideLogo
              className="min-h-[84px]"
            />
          ))}
        </div>
        {SITE.tradeLicense && !SITE.tradeLicense.startsWith("TODO") && (
          <p className="mt-6 eyebrow text-fg-subtle">
            Trade licence no. <span className="text-fg-muted">{SITE.tradeLicense}</span>
          </p>
        )}
      </section>

      {/* ── Section 1b — Approved applicator certificates (bento puzzle) ──
          IDs match APPLICATOR_CERTIFICATES.slug — anchor links from
          /disciplines/* brand strips and the hamburger drawer land here. */}
      <section
        id="applicators"
        className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24 scroll-mt-28"
      >
        <p className="eyebrow text-fg-subtle">Approved applicator</p>
        <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
          Four manufacturers. Four current certificates.
        </h2>
        <p className="mt-4 max-w-2xl font-serif font-light text-fg-muted text-lg leading-relaxed">
          Active approved-applicator status with Mapei, Laticrete, AkzoNobel and
          X-Calibur — which is what qualifies our work for joint
          manufacturer-applicator warranties on tier-1 projects. Click any logo
          to open the certificate.
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-12 md:gap-4">
          {APPLICATOR_CERTIFICATES.map(cert => (
            <div
              key={cert.slug}
              id={cert.slug}
              className={cn(
                "scroll-mt-28 min-h-[120px]",
                cert.puzzleSpan === 7 ? "md:col-span-7" : "md:col-span-5",
                cert.puzzleSpan === 7 ? "md:min-h-[160px]" : "md:min-h-[140px]",
              )}
            >
              <DocButton
                href={cert.href}
                title={cert.brand}
                subtitle={cert.scope}
                logoSrc={cert.logoSrc}
                logoAlt={`${cert.brand} logo`}
                logoAspect={cert.logoAspect}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2 — Methodology placeholder (more pillar content to land) ── */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24 border-t border-border">
        <p className="eyebrow text-fg-subtle">Methodology</p>
        <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
          Surveyed, primed, applied, signed-off.
        </h2>
        <p className="mt-4 max-w-2xl font-serif font-light text-fg-muted text-lg leading-relaxed">
          Process diagrams, programme discipline and quality-control workflow
          are coming online here. In the meantime, each discipline page carries
          its own 7-to-8 step process timeline — start there.
        </p>
      </section>
    </>
  );
}
