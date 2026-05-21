import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { PhotoSlideshow } from "@/components/ui/photo-slideshow";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { getProjectPage, PUBLISHED_PROJECT_SLUGS } from "@/lib/projects";
import { SITE } from "@/constants/site";

import { PageHero } from "@/components/sections/page-hero";
import { SpecCard } from "@/components/services/spec-card";
import { RelatedServices } from "@/components/services/related-services";
import { DualCTA } from "@/components/services/dual-cta";
import { SectionEyebrow } from "@/components/services/section-eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return PUBLISHED_PROJECT_SLUGS.map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const page = await getProjectPage(slug);
  if (!page) return { title: "Not found" };
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords ? [...page.meta.keywords] : undefined,
    path: `/portfolio/${page.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getProjectPage(slug);
  if (!page) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home",      href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: page.hero.h1, href: `/portfolio/${page.slug}` },
  ]);

  // Project schema (CreativeWork) — used per case study
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: `${page.hero.h1} — ${page.programme.scope}`,
    description: page.meta.description,
    agent: { "@id": `${SITE.url}#localbusiness` },
    contentLocation: { "@type": "Place", name: page.programme.location },
    dateCreated: page.programme.year,
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 pt-28 md:pt-32 pb-2 text-xs"
      >
        <ol className="flex flex-wrap items-center gap-2 text-fg-subtle">
          <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li aria-current="page" className="text-gold">{page.hero.h1}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.h1}
        subtitle={page.hero.sub}
        className="pt-10 md:pt-14"
      />

      {/* ── Section 1 — Programme metadata ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-12 md:py-16">
          <p className="eyebrow text-fg-subtle">Programme at a glance</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-4">
            <SpecCard
              title="Location & year"
              rows={[
                { label: "Location", value: page.programme.location },
                { label: "Year",     value: page.programme.year },
                { label: "Scope",    value: page.programme.scope },
              ]}
            />
            <SpecCard title="Project facts" rows={[...page.programme.facts]} />
          </div>
        </div>
      </section>

      {/* ── Section 2 — Photography ── */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-12">
        {page.images?.hero ? (
          <PhotoSlideshow
            images={[
              {
                src: page.images.hero,
                alt: page.images.heroAlt ?? `${page.hero.h1} — Sixty Newton`,
              },
              ...(page.images.gallery ?? []).map((src, i) => ({
                src,
                alt: `${page.hero.h1} — site photography ${i + 1} of ${page.images!.gallery!.length}`,
              })),
            ]}
          />
        ) : (
          // Placeholder for projects without photography yet
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-dashed border-border-dashed bg-bg-inset">
            <div className="absolute inset-0 grid place-items-center">
              <p className="eyebrow text-fg-subtle">Project photography to follow</p>
            </div>
          </div>
        )}
      </section>

      {/* ── Section 3 — The story ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <SectionEyebrow>The story</SectionEyebrow>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            How the project was delivered.
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            <div>
              <p className="eyebrow text-gold">The challenge</p>
              <p className="mt-4 text-fg-muted text-base leading-relaxed font-serif font-light">
                {page.story.challenge}
              </p>
            </div>
            <div>
              <p className="eyebrow text-gold">Our approach</p>
              <p className="mt-4 text-fg-muted text-base leading-relaxed font-serif font-light">
                {page.story.approach}
              </p>
            </div>
            <div>
              <p className="eyebrow text-gold">The outcome</p>
              <p className="mt-4 text-fg-muted text-base leading-relaxed font-serif font-light">
                {page.story.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4 — Systems applied ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <SectionEyebrow>Systems applied</SectionEyebrow>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            What we specified and applied.
          </h2>

          <ul className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4">
            {page.systemsApplied.map((sys, i) => (
              <li key={i} className="rounded-md border border-border bg-bg p-6 md:p-8">
                <p className="eyebrow text-gold">{sys.brand}</p>
                <h3 className="font-serif font-light text-2xl text-fg mt-3 leading-tight">
                  {sys.discipline}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {sys.products.map(prod => (
                    <li key={prod} className="flex gap-2 font-mono text-xs text-fg-muted">
                      <span className="text-gold">·</span>
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
                {sys.disciplineSlug && (
                  <Link
                    href={`/disciplines/${sys.disciplineSlug}`}
                    className="mt-5 inline-flex items-center gap-1 eyebrow text-gold hover:text-gold-hover transition-colors"
                  >
                    Discipline page <ArrowRight size={12} aria-hidden />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 5 — Related disciplines ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <SectionEyebrow>Related disciplines</SectionEyebrow>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            The full discipline set on this project.
          </h2>
          <RelatedServices items={[...page.relatedDisciplines]} className="mt-10" />
        </div>
      </section>

      {/* ── Section 6 — Related projects ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <SectionEyebrow>Other case studies</SectionEyebrow>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            Same discipline. Different project.
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4">
            {page.relatedProjects.map(rel => (
              <li key={rel.slug}>
                <Link
                  href={`/portfolio/${rel.slug}`}
                  className="group block rounded-md border border-border bg-bg p-6 md:p-8 transition-colors duration-200 hover:border-gold/60"
                >
                  <p className="eyebrow text-gold">Reference project</p>
                  <h3 className="font-serif font-light text-2xl text-fg mt-3 leading-tight">
                    {rel.name}
                  </h3>
                  <p className="mt-2 text-fg-muted text-sm">{rel.location}</p>
                  <p className="mt-4 inline-flex items-center gap-1 eyebrow text-gold group-hover:text-gold-hover transition-colors">
                    Read case study
                    <ArrowRight
                      size={12}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </p>
                </Link>
              </li>
            ))}
          </ul>

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

      {/* ── Section 7 — Closing CTA ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
          <h2 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Working on a comparable project?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            Send us the consultant pack and the programme. Free site survey across the UAE, written quotation back within 48 working hours.
          </p>
          <DualCTA className="mt-10" align="center" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(projectJsonLd)} />
    </>
  );
}
