import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `${SITE.name} — a specialist contracting company powering some of the UAE's most demanding projects. Part of the ${SITE.parentGroup}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sixty Newton"
        title="About"
        subtitle="A specialist contracting company powering some of the UAE&rsquo;s most demanding projects."
      />

      <section className="mx-auto max-w-3xl px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="space-y-8 text-fg-muted">
          <p className="font-serif font-light text-2xl md:text-3xl text-fg leading-snug">
            We focus on complex, design-driven and heavy-duty works where precision,
            programme and performance really matter.
          </p>
          <p className="text-lg leading-relaxed font-light">
            From microtopping and epoxy to cementitious polyurethane and ESD floors, we
            turn drawings into durable, seamless finishes that look sharp and work hard
            on site. Backed by approved applicator status with leading brands and a
            portfolio that includes <span className="text-fg">Atlantis The Royal</span>,{" "}
            <span className="text-fg">Al Wathba Desert Resort &amp; Spa</span> and key{" "}
            <span className="text-fg">St. Regis developments</span>, we don&rsquo;t just
            hand over projects — we build long-term trust with every client.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-8 border-y border-border py-12">
          <div>
            <p className="eyebrow text-gold">The Mission</p>
            <p className="font-serif font-light text-xl text-fg mt-4 leading-relaxed">
              Deliver standout technical services and contracting that make every
              construction project a success — combining excellence, innovation and
              collaboration to turn client visions into durable, precision-built
              realities and long-term partnerships.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">The Vision</p>
            <p className="font-serif font-light text-xl text-fg mt-4 leading-relaxed">
              Be the region&rsquo;s most trusted name in technical services and
              contracting — known for flawless execution and future-ready solutions,
              setting the benchmark for quality, reliability and innovation.
            </p>
          </div>
        </div>

        {/* Approved applicators — moved to a dedicated certifications page.
            Block left here as a wayfinder, with a CTA to the full credentials surface. */}
        <div className="mt-16">
          <p className="eyebrow text-gold">Approved Applicators</p>
          <p className="font-serif font-light text-xl text-fg mt-4 leading-relaxed">
            Certified to install and warrant systems from{" "}
            <span className="text-fg">Mapei</span>,{" "}
            <span className="text-fg">Laticrete</span>,{" "}
            <span className="text-fg">AkzoNobel</span> and{" "}
            <span className="text-fg">X-Calibur</span>. Certificates and trade
            licence sit on a dedicated page.
          </p>
          <div className="mt-6">
            <Button asChild variant="outlineFill" size="md" className="group">
              <Link href="/applicator-certifications">
                View certifications
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>

        {/* Parent group */}
        <div className="mt-16">
          <p className="eyebrow text-fg-subtle">Part of</p>
          <p className="font-serif font-light text-2xl text-fg mt-3">{SITE.parentGroup}</p>
          <p className="mt-3 text-fg-muted text-sm leading-relaxed">
            Sister company to Lapiz Blue General Trading, Montolite Building Material,
            Dream Box General Trading GCC, Global Classic Building Material and Al Sama
            Metal Coating &amp; Industries.
          </p>
        </div>
      </section>
    </>
  );
}
