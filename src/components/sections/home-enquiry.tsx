import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/sections/quote-form";
import { SITE } from "@/constants/site";

/**
 * Home-page enquiry section — same QuoteForm as /request-a-quote, mounted
 * directly under the credentials section so visitors can convert without
 * navigating away.
 */
export function HomeEnquiry() {
  const whatsappHref = `https://wa.me/${SITE.whatsappHref}`;

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

              {/* WhatsApp — icon-only, gold transparent ring; replaces the number text */}
              <div>
                <p className="eyebrow text-fg-subtle">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with ${SITE.name} on WhatsApp`}
                  className="mt-3 group inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-transparent text-gold transition-colors duration-200 hover:bg-gold hover:text-bg"
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
              </div>
            </div>

            {/* Bottom CTA — outline-to-fill on hover (matches About Us button) */}
            <div className="mt-10 border-t border-border pt-8">
              <Link
                href="/request-a-quote"
                className="group inline-flex items-center gap-2 rounded-md border border-gold bg-transparent px-5 py-3 transition-colors duration-200 hover:bg-gold"
              >
                <span className="eyebrow text-gold transition-colors group-hover:text-bg">
                  Open Full Contact Page
                </span>
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="text-gold transition-all duration-200 group-hover:text-bg group-hover:translate-x-1"
                />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
