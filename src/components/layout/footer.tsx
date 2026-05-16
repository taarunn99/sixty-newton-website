import Link from "next/link";
import { FOOTER_SECONDARY, NAV_ITEMS, SITE } from "@/constants/site";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-inset">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand + blurb */}
          <div className="md:col-span-2 max-w-md">
            <Logo size={96} />
            <p className="mt-6 text-sm leading-relaxed text-fg-muted">
              {SITE.shortDescription}
            </p>
            <p className="mt-6 eyebrow text-fg-subtle">
              {SITE.address.locality}, {SITE.address.country}
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="eyebrow text-fg-subtle">Sitemap</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fg/90 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              {FOOTER_SECONDARY.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fg/90 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-fg-subtle">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="text-fg/90 hover:text-gold transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg/90 hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-fg/90 hover:text-gold transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <p className="mt-8 eyebrow text-fg-subtle">Follow</p>
            <ul className="mt-5 flex gap-5 text-sm">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg/90 hover:text-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg/90 hover:text-gold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Trade license: {SITE.tradeLicense}</p>
        </div>
      </div>
    </footer>
  );
}
