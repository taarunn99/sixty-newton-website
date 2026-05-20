import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/sections/about-hero";
import { LeadershipTeam } from "@/components/sections/leadership-team";
import { SustainabilityBand } from "@/components/sections/sustainability-band";
import { CompanyProfileDownload } from "@/components/sections/company-profile-download";
import { Button } from "@/components/ui/button";
import { LapizBlueLink } from "@/components/ui/lapiz-blue-link";
import { SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "About — Sixty Newton",
  description: `${SITE.name} — a specialist contracting and applicator company powering tier-1 UAE projects. Part of the ${SITE.parentGroup}. Led by Mrs. Ashrat Razi, Mr. Shariful Haque and Mr. Salim Zafar.`,
  path: "/about",
  keywords: [
    "Sixty Newton about",
    "Sixty Newton Technical Services LLC",
    "Lapiz Blue Group UAE",
    "Sixty Newton management",
    "Salim Zafar Sixty Newton",
    "Ashrat Razi Lapiz Blue",
    "Shariful Haque Lapiz Blue",
  ],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero — "About" wordmark + big Sixty Newton logo, no eyebrow */}
      <AboutHero />

      {/* ── Body intro + Mission / Vision + Applicator pointer + Group attribution ── */}
      <section className="relative mx-auto max-w-3xl px-5 md:px-12 lg:px-16 py-16 md:py-24">
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

        {/* Approved applicators pointer */}
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
              <Link href="/approach#applicators">
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
            Sister company to{" "}
            <span className="text-fg">Lapiz Blue General Trading LLC</span>,{" "}
            <span className="text-fg">Montolite Building Material LLC</span>,{" "}
            <span className="text-fg">Global Classic Building Material LLC</span> and{" "}
            <span className="text-fg">Al Sama Metal Coating &amp; Industries LLC</span>.
            One operational network, one supply chain, one set of quality standards.
          </p>
          <div className="mt-6">
            <LapizBlueLink label="Visit Lapiz Blue" />
          </div>
        </div>
      </section>

      {/* ── Leadership team ── */}
      <LeadershipTeam />

      {/* ── Sustainability — "60 Newton · 0 Carbon Emission" ── */}
      <SustainabilityBand />

      {/* ── Company profile download ── */}
      <CompanyProfileDownload />
    </>
  );
}
