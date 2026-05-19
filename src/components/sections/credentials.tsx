import { APPLICATOR_CERTIFICATES, COMPANY_DOCUMENTS } from "@/constants/site";
import { DocButton } from "@/components/ui/doc-button";

/**
 * Credentials & Approved-Applicator section.
 *
 * Two distinct rows:
 *   1. Licensed & Compliant — Trade License + VAT (no brand logos; editorial)
 *   2. Approved Applicators — Mapei / Laticrete / AkzoNobel / X-Calibur (with logos)
 *
 * Used on home (after ScrollSequence) AND on the about page.
 */
export function CredentialsSection() {
  return (
    <section
      aria-label="Credentials and approved applicators"
      className="relative w-full bg-bg"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">

        {/* Section eyebrow + heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Credentials</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Licensed, registered &amp; approved.
          </h2>
          <p className="font-serif font-light text-fg-muted mt-4 text-lg md:text-xl leading-relaxed">
            Every certificate below is current and verifiable.
            Click any document to open the PDF.
          </p>
        </div>

        {/* ── Row 1 — Legal credentials (no logos) ── */}
        <div className="mt-14">
          <p className="eyebrow text-fg-subtle">Licensed &amp; Compliant</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-4">
            {COMPANY_DOCUMENTS.map(doc => (
              <DocButton
                key={doc.slug}
                href={doc.href}
                title={doc.title}
                subtitle={doc.subtitle}
                hideLogo
              />
            ))}
          </div>
        </div>

        {/* ── Hairline divider between the two rows ── */}
        <div aria-hidden className="my-14 h-px w-full bg-border" />

        {/* ── Row 2 — Approved applicator certificates (with brand logos) ── */}
        <div>
          <p className="eyebrow text-fg-subtle">Approved Applicator</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-4">
            {APPLICATOR_CERTIFICATES.map(cert => (
              <DocButton
                key={cert.slug}
                href={cert.href}
                title={cert.brand}
                subtitle={cert.scope}
                logoSrc={`/brand/applicators/${cert.slug}.png`}
                logoAlt={`${cert.brand} logo`}
                logoAspect={cert.logoAspect}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
