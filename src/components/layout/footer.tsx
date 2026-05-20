import Link from "next/link";
import { FOOTER_SECTIONS, SITE } from "@/constants/site";
import { Logo } from "./logo";
import { LapizBlueLink } from "@/components/ui/lapiz-blue-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-inset">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12 lg:px-16 py-16 md:py-20">
        {/* ── Brand block + 4 link columns ── */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 max-w-md">
            <Logo size={96} />
            <p className="mt-6 text-sm leading-relaxed text-fg-muted">
              {SITE.shortDescription}
            </p>
            <p className="mt-6 eyebrow text-gold">
              {SITE.serviceAreaTagline}
            </p>
            <p className="mt-3 text-sm text-fg-muted">
              {SITE.address.streetAddress} · {SITE.address.locality}, {SITE.address.country}
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.heading} className="md:col-span-2">
              <p className="eyebrow text-fg-subtle">{section.heading}</p>
              <ul className="mt-5 space-y-1 text-sm">
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

        {/* ── Contact strip — landline text + mobile call-button + WhatsApp icon ── */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle font-medium">Call us</p>
          <div className="mt-5 flex flex-wrap items-center gap-4 md:gap-6">
            {/* Landline — primary office number, visible as serif call link */}
            <a
              href={`tel:${SITE.landlineHref}`}
              className="group inline-flex items-baseline gap-2 transition-colors duration-200 hover:text-gold"
              aria-label={`Call landline ${SITE.landline}`}
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-fg-subtle">Landline</span>
              <span className="font-serif font-light text-xl text-fg group-hover:text-gold transition-colors">
                {SITE.landline}
              </span>
            </a>

            <span aria-hidden className="hidden md:inline-block h-6 w-px bg-border" />

            {/* Mobile — call button (gold outline pill with the number) */}
            <a
              href={`tel:${SITE.phoneHref}`}
              className="group inline-flex items-center gap-2 rounded-full border border-gold/60 bg-transparent px-4 py-2 text-fg transition-colors duration-200 hover:bg-gold hover:text-bg hover:border-gold"
              aria-label={`Call mobile ${SITE.phone}`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="text-sm md:text-base font-light tabular-nums">
                {SITE.phone}
              </span>
            </a>

            {/* WhatsApp — small icon-only minimal button */}
            <a
              href={`https://wa.me/${SITE.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${SITE.whatsapp}`}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-transparent text-gold transition-colors duration-200 hover:bg-gold hover:text-bg"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-4 w-4" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Parent group attribution ── */}
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-fg-subtle">A Lapiz Blue Group company</p>
            <LapizBlueLink />
          </div>

          <p className="text-xs text-fg-subtle md:text-right">
            Sister to Lapiz Blue, Montolite, Global Classic Building Material &amp; Al Sama Metal Coating.
          </p>
        </div>

        {/* ── Copyright + trade license + TRN ── */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-subtle md:flex-row md:items-center md:justify-between">
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
