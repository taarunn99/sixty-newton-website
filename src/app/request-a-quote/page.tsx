import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteForm } from "@/components/sections/quote-form";
import { SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Tell us about your project — scope, location, timeline. We&rsquo;ll be back to you with a quote within one business day.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
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
                <p className="eyebrow text-fg-subtle">Phone</p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200"
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
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200"
                >
                  {SITE.whatsapp}
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
              </div>

              <div>
                <p className="eyebrow text-fg-subtle">Direct sales</p>
                <a
                  href={`mailto:${SITE.emailSalim}`}
                  className="mt-2 inline-block font-serif font-light text-2xl text-fg hover:text-gold transition-colors duration-200 break-words"
                >
                  {SITE.emailSalim}
                </a>
              </div>
            </div>

            <p className="mt-12 text-sm text-fg-muted leading-relaxed border-t border-border pt-8">
              We&rsquo;re based in the United Arab Emirates and reply within one business day,
              Sunday–Thursday.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
