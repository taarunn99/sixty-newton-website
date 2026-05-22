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
        <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4 [&>*]:min-w-0">
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
                // `min-w-0` — prevents the grid item from auto-sizing to
                // its content (which made the applicator cards bleed
                // past the right edge on mobile).
                "min-w-0 scroll-mt-28 min-h-[120px]",
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

      {/* ── Section 2 — Methodology ── */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Methodology</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Surveyed, primed, applied, signed-off.
          </h2>
          <p className="mt-5 font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            Five disciplines run across every project we take. They&rsquo;re what keep our work auditable, our handover packs defensible, and our joint manufacturer-applicator warranties valid.
          </p>
        </div>

        {/* Five pillars */}
        <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-5 md:gap-4">
          {[
            {
              n: "01",
              title: "Pre-mobilisation",
              body:
                "Site survey, drawing cross-check, moisture readings, substrate condition assessment. Method statement and PAR drafted before crews mobilise — never after.",
            },
            {
              n: "02",
              title: "Material approval",
              body:
                "Mapei, Laticrete, AkzoNobel or X-Calibur TDS / SDS pack submitted to the consultant. Substitutions only with written approval — never to save a half-day on procurement.",
            },
            {
              n: "03",
              title: "Application discipline",
              body:
                "Manufacturer protocol applied to spec — at the WFT, the coverage rate, the trowel notch, the lap dimension. Photo-documented zone by zone for the handover pack.",
            },
            {
              n: "04",
              title: "Inspection requests",
              body:
                "Substrate, primer, first coat, final coat — IR signed off at every milestone. No release for the next trade until cure is verified and the consultant has signed.",
            },
            {
              n: "05",
              title: "Joint manufacturer warranty",
              body:
                "Where the system supports it (Mapei, X-Calibur), the manufacturer&rsquo;s technical rep inspects at handover and co-issues the warranty. Available when registered before mobilisation.",
            },
          ].map(p => (
            <li
              key={p.n}
              className="rounded-md border border-border bg-bg-elevated p-6 md:p-7"
            >
              <p className="font-mono text-xs text-gold uppercase tracking-widest">{p.n}</p>
              <h3 className="font-serif font-light text-2xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                {p.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Programme commitments */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-10 border-t border-border-hairline pt-12">
          <div>
            <p className="eyebrow text-fg-subtle">The 48-hour pledge</p>
            <p className="mt-4 font-serif font-light text-fg text-xl md:text-2xl leading-relaxed">
              Free site survey across the UAE. Written quotation back inside 48 working hours of the visit.
            </p>
          </div>
          <div>
            <p className="eyebrow text-fg-subtle">Mobilisation</p>
            <p className="mt-4 font-serif font-light text-fg text-xl md:text-2xl leading-relaxed">
              5–7 working days from award on standard scopes. 48–72 hours on fast-track when stock is available and the consultant pack is ready. Emergency response same-day across Dubai, Sharjah and Abu Dhabi.
            </p>
          </div>
        </div>

        {/* Documentation discipline */}
        <div className="mt-12 border-t border-border-hairline pt-12">
          <p className="eyebrow text-fg-subtle">What we hand over with the work</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
            {[
              "Material approval pack (TDS / SDS per system)",
              "Method statement + Prior Approval Request (PAR)",
              "Photo log — lap dimensions, mesh embed, WFT, IR sign-off per zone",
              "Cure-schedule release for the following trade",
              "Joint manufacturer-applicator warranty (where registered)",
              "Care + maintenance guide for the operator team",
            ].map(item => (
              <li
                key={item}
                className="rounded-md border border-border bg-bg p-5 text-sm font-serif text-fg leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
