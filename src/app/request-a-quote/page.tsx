import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteForm } from "@/components/sections/quote-form";
import { SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote — Free UAE Site Survey · 48-hour Quotation",
  description:
    "Tell us about your project — scope, location, timeline. We&rsquo;ll be back to you with a quote within one business day.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  const whatsappHref = `https://wa.me/${SITE.whatsappHref}`;

  return (
    <>
      <PageHero
        eyebrow="Start the conversation"
        title="Request a Quote"
        subtitle="Project brief, drawings, site location — share what you have and we&rsquo;ll respond inside one business day."
      />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <QuoteForm />
          </div>

          {/* Contact rail */}
          <aside className="md:col-span-5">
            <p className="eyebrow text-gold">Prefer to talk?</p>
            <h2 className="font-serif font-extralight text-fg mt-4 text-3xl md:text-4xl leading-tight tracking-[-0.01em]">
              Reach us directly.
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <p className="eyebrow text-fg-subtle">Landline</p>
                <a
                  href={`tel:${SITE.landlineHref}`}
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200"
                >
                  {SITE.landline}
                </a>
              </div>

              <div>
                <p className="eyebrow text-fg-subtle">Mobile</p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200"
                >
                  {SITE.phone}
                </a>
              </div>

              {/* WhatsApp — gold transparent icon (replaces the number text). */}
              <div>
                <p className="eyebrow text-fg-subtle">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with ${SITE.name} on WhatsApp`}
                  className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-transparent text-gold transition-colors duration-200 hover:bg-gold hover:text-bg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>

              <div>
                <p className="eyebrow text-fg-subtle">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200 break-words"
                >
                  {SITE.email}
                </a>
                <p className="mt-2 text-xs text-fg-subtle leading-relaxed">
                  Drawings, BOQs and tenders land in the right hands within one
                  business day.
                </p>
              </div>
            </div>

            <p className="mt-12 text-sm text-fg-muted leading-relaxed border-t border-border pt-8">
              We&rsquo;re based in the United Arab Emirates and reply within one business day,
              Monday–Saturday.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
