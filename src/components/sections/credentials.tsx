import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATOR_CERTIFICATES, COMPANY_DOCUMENTS } from "@/constants/site";
import { DocButton } from "@/components/ui/doc-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CredentialsSectionProps = {
  /** Adds a small bottom-right "About Us →" CTA — only used on the home page,
   *  hidden on the About page itself (would self-link). */
  showAboutLink?: boolean;
};

/**
 * Credentials & Approved-Applicator section.
 *
 * Row 1 — Licensed & Compliant (Trade License + VAT): simple 2-col, no logos.
 * Row 2 — Approved Applicators: bento puzzle layout (4 cards on a 12-col grid,
 *         alternating 7/5 + 5/7 col-spans for zigzag interlock). On <md the
 *         puzzle collapses to a single column so each card stays readable.
 */
export function CredentialsSection({ showAboutLink = false }: CredentialsSectionProps) {
  return (
    <section
      aria-label="Credentials and approved applicators"
      className="relative w-full bg-bg"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">

        {/* Heading */}
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

        {/* ── Row 1 — Legal credentials (no logos, simple 2-col) ── */}
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
                className="min-h-[84px]"
              />
            ))}
          </div>
        </div>

        <div aria-hidden className="my-14 h-px w-full bg-border" />

        {/* ── Row 2 — Approved Applicator (bento puzzle on md+) ──
            12-col grid, 2 rows. Row 1: 7+5. Row 2: 5+7. Zigzag.
            On <md it collapses to 1 column where everything stacks naturally. */}
        <div>
          <p className="eyebrow text-fg-subtle">Approved Applicator</p>
          <div className="mt-6 grid gap-3 md:grid-cols-12 md:gap-4">
            {APPLICATOR_CERTIFICATES.map(cert => (
              <div
                key={cert.slug}
                className={cn(
                  "min-h-[120px]",
                  cert.puzzleSpan === 7 ? "md:col-span-7" : "md:col-span-5",
                  // Vary row height for the bento feel: bigger spans get the
                  // taller cells, smaller spans get the shorter cells.
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
        </div>

        {/* Bottom-right About Us CTA — home page only.
            outlineFill variant: outline at rest, fills solid gold on hover.
            Text + icon flip to bg colour automatically (currentColor inherit). */}
        {showAboutLink && (
          <div className="mt-12 flex justify-end">
            <Button asChild variant="outlineFill" size="md" className="group">
              <Link href="/about">
                About Us
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
