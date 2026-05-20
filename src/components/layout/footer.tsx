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

        {/* ── Phone numbers strip ── */}
        <div className="mt-14 grid gap-3 border-t border-border pt-8 md:grid-cols-3 md:gap-6">
          <div>
            <p className="eyebrow text-fg-subtle">Landline</p>
            <a
              href={`tel:${SITE.landlineHref}`}
              className="mt-2 inline-block font-serif font-light text-xl text-fg hover:text-gold transition-colors"
            >
              {SITE.landline}
            </a>
          </div>
          <div>
            <p className="eyebrow text-fg-subtle">Mobile</p>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="mt-2 inline-block font-serif font-light text-xl text-fg hover:text-gold transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow text-fg-subtle">WhatsApp</p>
            <a
              href={`https://wa.me/${SITE.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-serif font-light text-xl text-fg hover:text-gold transition-colors"
            >
              {SITE.whatsapp}
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
            Sister to Lapiz Blue, Montolite, Dream Box, Global Classic &amp; Al Sama.
          </p>
        </div>

        {/* ── Copyright + trade license ── */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Trade license: {SITE.tradeLicense}</p>
        </div>
      </div>
    </footer>
  );
}
