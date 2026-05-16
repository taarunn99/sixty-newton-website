import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";
import { SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Speak to Sixty Newton — Sharjah, UAE. Call ${SITE.phone} or email ${SITE.email}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Tell us about the project. We&rsquo;ll be back with a site visit or a quote within one business day."
      />
      <section className="mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
          <div>
            <p className="eyebrow text-fg-subtle">Phone</p>
            <a href={`tel:${SITE.phoneHref}`} className="mt-3 inline-block font-serif text-2xl text-fg hover:text-gold transition-colors">
              {SITE.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow text-fg-subtle">Email</p>
            <a href={`mailto:${SITE.email}`} className="mt-3 inline-block font-serif text-2xl text-fg hover:text-gold transition-colors break-words">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-fg-subtle">WhatsApp</p>
            <a
              href={`https://wa.me/${SITE.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-serif text-2xl text-fg hover:text-gold transition-colors"
            >
              {SITE.whatsapp}
            </a>
          </div>
        </div>
        <StubBody>Contact form (nodemailer-backed) wiring next.</StubBody>
      </section>
    </>
  );
}
