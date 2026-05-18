import Link from "next/link";
import Image from "next/image";
import { FOOTER_SECTIONS, SITE } from "@/constants/site";
import { Logo } from "./logo";

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
            <p className="mt-6 eyebrow text-fg-subtle">
              {SITE.address.country}
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

        {/* ── Parent group attribution ── */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href="https://www.lapizblue.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group"
            aria-label="Lapiz Blue — parent group"
          >
            <Image
              src="/brand/lapizblue-logo.svg"
              alt="Lapiz Blue"
              width={120}
              height={32}
              className="h-6 w-auto opacity-70 transition-opacity duration-200 group-hover:opacity-100"
            />
            <span className="eyebrow text-fg-subtle">
              Part of the <span className="text-fg-muted">{SITE.parentGroup}</span>
            </span>
          </a>

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
