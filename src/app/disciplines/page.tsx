import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { DisciplineReel } from "@/components/sections/discipline-reel";
import { ProjectCardGrid } from "@/components/services/project-card";
import { FAQAccordion } from "@/components/services/faq-accordion";
import { DualCTA } from "@/components/services/dual-cta";
import { buttonVariants } from "@/components/ui/button";
import { DISCIPLINES, REFERENCE_PROJECTS, getDisciplinesByBucket } from "@/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Disciplines — Sixty Newton UAE",
  description:
    "14 specialist contracting disciplines under one contract — waterproofing, flooring, tile & stone, decorative concrete, coatings, building repair & insulation. Brand-certified across Mapei, Laticrete, AkzoNobel and X-Calibur. Delivered across the UAE.",
  path: "/disciplines",
  keywords: [
    "specialist contractor UAE",
    "construction disciplines Dubai",
    "Mapei applicator UAE",
    "Laticrete applicator Dubai",
    "AkzoNobel applicator UAE",
    "X-Calibur applicator Dubai",
  ],
});

const HUB_FAQ = [
  {
    q: "Are you a contractor or just an applicator?",
    a: "Both. Sixty Newton holds an active UAE trade licence and operates as a specialist contractor — but the work we deliver is brand-certified applicator scope: Mapei, Laticrete, AkzoNobel and X-Calibur systems applied to manufacturer protocols and TDS.",
  },
  {
    q: "What does 'approved applicator' actually mean?",
    a: "It means each manufacturer has trained our crews on their specific systems and audited our work, and that our installations qualify for joint manufacturer-applicator warranties where the system supports them. Generic contractors don't hold this status; their warranties are workmanship-only.",
  },
  {
    q: "Do you supply the materials too, or just install?",
    a: "Both. Sixty Newton is part of the Lapiz Group — which includes Lapiz Blue General Trading, Montolite, Dream Box, Al Sama Metal Coating and Global Classic Building Material. Material supply, technical support and stock security come from the same network that backs our applicator work.",
  },
  {
    q: "Which Emirates do you cover?",
    a: "All seven — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain. Our office is registered in Al Quoz Industrial Area, Dubai. Site mobilisation across the UAE typically within 5–7 working days of award.",
  },
  {
    q: "Can you work on a live, occupied site?",
    a: "Yes — hospitality refurb, occupied villa repaint and retail tenant fit-out are all part of our scope. We sequence works to keep parts of the space operational, brief on access points and noise windows before mobilisation, and offer night programmes where the brief calls for it.",
  },
  {
    q: "What's your typical mobilisation time?",
    a: "Standard: 5–7 working days from award (procurement + crew allocation + Method Statement / PAR submission). Fast-track: 48–72 hours where stock is available and the consultant pack is ready. Emergency response (live leak, structural concern): same-day or next-day in Dubai, Sharjah, Abu Dhabi.",
  },
  {
    q: "Do you give a workmanship warranty?",
    a: "Yes — 5 years on cementitious systems, 10 years on liquid PU and bituminous, up to 20 years on GRP. Joint manufacturer-applicator warranties available on Mapei and X-Calibur systems where the site is inspected by the manufacturer at handover.",
  },
  {
    q: "Are you part of the Lapiz Group?",
    a: "Yes. Sixty Newton Technical Services is a sister company to Lapiz Blue General Trading, Montolite Building Material, Dream Box General Trading GCC, Global Classic Building Material and Al Sama Metal Coating & Industries. Same management discipline, same supply network.",
  },
];

const FEATURED_PROJECTS = REFERENCE_PROJECTS.slice(0, 6).map(p => ({
  name: p.name,
  location: p.location,
  year: "—",
  scope: "Specialist applicator scope across multiple disciplines.",
}));

export default function DisciplinesPage() {
  const buckets = getDisciplinesByBucket();
  const publishedCount = DISCIPLINES.filter(d => d.published).length;

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Fourteen disciplines. One specialist contractor."
        subtitle="From the membrane under your podium to the polish on your hotel lobby floor — we apply, install, and finish to spec. Brand-certified. Programme-disciplined. Hospitality-proven."
        className="border-b-0 pb-6 md:pb-10"
      />

      <DisciplineReel />

      {/* ── Section 1 — 6 bucket cards ── */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Six families · {publishedCount} disciplines · one applicator</span>
          </p>
          <p className="eyebrow text-fg-subtle">Tap any discipline to explore</p>
        </div>

        <ul className="grid gap-px bg-border md:grid-cols-2 border border-border-hairline">
          {buckets.map(bucket => (
            <li
              key={bucket.slug}
              id={bucket.slug}
              className="scroll-mt-28 bg-bg p-8 md:p-10"
            >
              <p className="eyebrow text-gold">{bucket.eyebrow}</p>
              <h2 className="font-serif font-extralight text-fg mt-4 text-3xl md:text-4xl leading-tight tracking-[-0.01em]">
                {bucket.name}
              </h2>
              <p className="mt-4 text-fg-muted text-base leading-relaxed">{bucket.blurb}</p>

              <ul className="mt-6 space-y-2">
                {bucket.disciplines.map(d => (
                  <li key={d.slug}>
                    {d.published ? (
                      <Link
                        href={`/disciplines/${d.slug}`}
                        className="group inline-flex items-center gap-2 text-fg hover:text-gold transition-colors duration-200"
                      >
                        <ArrowRight
                          size={14}
                          aria-hidden
                          className="text-gold transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                        <span className="font-serif text-lg leading-tight">{d.title}</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-fg-subtle">
                        <span aria-hidden className="inline-block h-px w-3 bg-fg-subtle" />
                        <span className="font-serif text-lg leading-tight">{d.title}</span>
                        <span className="eyebrow text-fg-subtle">· in build</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Section 2 — Why an applicator, not a generalist (3-column proof) ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold flex items-center gap-3">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>Why an applicator</span>
            </p>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
              Specialist over generalist. Always.
            </h2>
            <p className="font-serif font-light text-fg-muted mt-4 text-lg md:text-xl leading-relaxed">
              Three reasons consultants and developers specify us instead of a multi-trade generalist.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-3 md:gap-4">
            <div className="rounded-md border border-border bg-bg p-6 md:p-8">
              <p className="font-mono text-xs text-gold uppercase tracking-widest">01</p>
              <h3 className="font-serif font-light text-2xl text-fg mt-4 leading-tight">
                Brand-certified across four manufacturers.
              </h3>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                Mapei · Laticrete · AkzoNobel · X-Calibur. Our crews are trained, audited and current on each manufacturer's protocols — which is what qualifies our work for joint manufacturer-applicator warranties.
              </p>
              <Link
                href="/approach#applicators"
                className="mt-6 inline-flex items-center gap-2 eyebrow text-gold hover:text-gold-hover transition-colors"
              >
                View certificates <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>

            <div className="rounded-md border border-border bg-bg p-6 md:p-8">
              <p className="font-mono text-xs text-gold uppercase tracking-widest">02</p>
              <h3 className="font-serif font-light text-2xl text-fg mt-4 leading-tight">
                Lapiz Group material backing.
              </h3>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                Sister to Lapiz Blue, Montolite, Dream Box, Global Classic and Al Sama — the UAE's most established construction-chemicals network. Stock security, technical support and supply continuity sit behind every project.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 eyebrow text-gold hover:text-gold-hover transition-colors"
              >
                About the group <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>

            <div className="rounded-md border border-border bg-bg p-6 md:p-8">
              <p className="font-mono text-xs text-gold uppercase tracking-widest">03</p>
              <h3 className="font-serif font-light text-2xl text-fg mt-4 leading-tight">
                Tier-1 hospitality references.
              </h3>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                Atlantis The Royal · Al Wathba Desert Resort · St. Regis · The Address · Jumeirah Golf Villas · Le Méridien · Ahlatci Gold Refinery. Hotel-grade discipline applied to villa, commercial and industrial scope alike.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 eyebrow text-gold hover:text-gold-hover transition-colors"
              >
                View portfolio <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3 — Reference project strip ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold flex items-center gap-3">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>Reference projects</span>
            </p>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
              Where the discipline has been stood behind.
            </h2>
          </div>

          <ProjectCardGrid projects={FEATURED_PROJECTS.slice(0, 3)} className="mt-12" />
          <ProjectCardGrid projects={FEATURED_PROJECTS.slice(3, 6)} className="mt-4" />

          <div className="mt-12 flex justify-end">
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ variant: "outlineFill", size: "md" }), "group")}
            >
              View all projects
              <ArrowRight size={14} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4 — Hub FAQ ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold flex items-center gap-3">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>Frequently asked</span>
            </p>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
              Eight questions every consultant asks.
            </h2>
          </div>

          <FAQAccordion items={HUB_FAQ} className="mt-12" />
        </div>
      </section>

      {/* ── Section 5 — Closing CTA ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
          <h2 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Got a drawing? Got a defect? Got a tender?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            Send it over. Free site survey across the UAE. Written quotation back within 48 working hours.
          </p>
          <DualCTA className="mt-10" align="center" />
        </div>
      </section>
    </>
  );
}
