import Link from "next/link";
import { FOOTER_SECTIONS, SITE } from "@/constants/site";
import { Logo } from "./logo";
import { LapizBlueLink } from "@/components/ui/lapiz-blue-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-0 border-t border-border bg-bg-inset">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12 lg:px-16 py-10 md:py-20">
        {/* ── Brand block + 4 link columns ── */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 max-w-md">
            <Logo size={72} className="md:hidden" />
            <Logo size={96} className="hidden md:inline-flex" />
            <p className="mt-4 md:mt-6 text-sm leading-relaxed text-fg-muted">
              {SITE.shortDescription}
            </p>
            <p className="mt-4 md:mt-6 eyebrow text-gold">
              {SITE.serviceAreaTagline}
            </p>
            <p className="mt-2 md:mt-3 text-sm text-fg-muted">
              {SITE.address.streetAddress} · {SITE.address.locality}, {SITE.address.country}
            </p>
          </div>

          {/* 4 link sections — 2-col grid on mobile (halves the vertical
              footprint vs. the old single-column stack), 4-col on md+ */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:col-span-8 md:grid-cols-4 md:gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.heading}>
                <p className="eyebrow text-fg-subtle">{section.heading}</p>
                <ul className="mt-4 space-y-0.5 text-sm">
                  {section.links.map((link) =>
                    link.external ? (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center text-fg/90 hover:text-gold transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex min-h-11 items-center text-fg/90 hover:text-gold transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact strip — three matching icon buttons, slim section ── */}
        <div className="mt-8 md:mt-10 border-t border-border pt-5">
          <div className="flex items-center gap-5 md:gap-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-fg-subtle font-medium">Call us</p>

            <div className="flex items-center gap-2.5">
              {/* Landline — desk-phone icon */}
              <a
                href={`tel:${SITE.landlineHref}`}
                aria-label={`Call landline ${SITE.landline}`}
                title={`Landline · ${SITE.landline}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-fg-muted transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-bg active:bg-gold active:text-bg"
              >
                <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1.5l-1 2h-9l-1-2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="M8 15h8" />
                  <path d="M8 19h8" />
                  <path d="M7 7h.01" />
                  <path d="M11 7h.01" />
                  <path d="M15 7h.01" />
                </svg>
              </a>

              {/* Mobile — handset icon */}
              <a
                href={`tel:${SITE.phoneHref}`}
                aria-label={`Call mobile ${SITE.phone}`}
                title={`Mobile · ${SITE.phone}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-fg-muted transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-bg active:bg-gold active:text-bg"
              >
                <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </a>

              {/* WhatsApp — brand glyph */}
              <a
                href={`https://wa.me/${SITE.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${SITE.whatsapp}`}
                title={`WhatsApp · ${SITE.whatsapp}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-fg-muted transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-bg active:bg-gold active:text-bg"
              >
                <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-4 w-4" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Parent group attribution ── */}
        <div className="mt-6 md:mt-10 flex flex-col items-start gap-3 border-t border-border pt-5 md:pt-8 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-fg-subtle">A Lapiz Blue Group company</p>
            <LapizBlueLink />
          </div>

          {/* Sister-company line — hidden on mobile to save vertical room.
              The "A Lapiz Blue Group company" eyebrow + button already
              communicates parent-group attribution; the full sister
              list is desktop-only context. */}
          <p className="hidden md:block text-xs text-fg-subtle md:text-right">
            Sister to Lapiz Blue, Montolite, Global Classic Building Material &amp; Al Sama Metal Coating.
          </p>
        </div>

        {/* ── Copyright + trade license + TRN ── */}
        <div className="mt-5 md:mt-8 flex flex-col gap-2 md:gap-3 border-t border-border pt-4 md:pt-6 text-xs text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>
            Trade licence: {SITE.tradeLicense} · TRN: {SITE.trn}
          </p>
        </div>
      </div>
    </footer>
  );
}
