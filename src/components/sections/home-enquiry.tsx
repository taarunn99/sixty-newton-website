import Link from "next/link";
import { QuoteForm } from "@/components/sections/quote-form";
import { SITE } from "@/constants/site";

/**
 * Home-page enquiry section — same QuoteForm as /request-a-quote, mounted
 * directly under the credentials section so visitors can convert without
 * navigating away. Mirrors the /request-a-quote layout: form on the left,
 * direct-contact rail on the right.
 */
export function HomeEnquiry() {
  return (
    <section
      aria-label="Send us an enquiry"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Intro */}
        <div className="max-w-2xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Get in touch</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Tell us about your project.
          </h2>
          <p className="font-serif font-light text-fg-muted mt-4 text-lg md:text-xl leading-relaxed">
            We respond inside one business day, Sunday – Thursday.
          </p>
        </div>

        {/* Form + contact rail */}
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <QuoteForm />
          </div>

          <aside className="md:col-span-5">
            <p className="eyebrow text-fg-subtle">Prefer to talk?</p>

            <div className="mt-6 space-y-6">
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
            </div>

            <p className="mt-10 text-sm text-fg-muted leading-relaxed border-t border-border pt-6">
              Need the full contact page?{" "}
              <Link href="/request-a-quote" className="text-gold hover:text-gold-hover transition-colors underline underline-offset-2">
                Open the quote form
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
