import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";
import { getServicePage, PUBLISHED_SERVICE_SLUGS } from "@/lib/services";
import {
  getArea,
  AREA_SLUGS,
  getAreasGroupedByEmirate,
  areaHeroSub,
  areaMetaDescription,
} from "@/lib/areas";
import { AREAS } from "@/content/areas/_data";
import { SITE, DISCIPLINES } from "@/constants/site";

import { ServiceHero } from "@/components/services/service-hero";
import { BrandStrip } from "@/components/services/brand-strip";
import { SectionRenderer, collectSystemVariants } from "@/components/services/section-renderer";

/** All slug × area combinations — 14 × 13 = 182 prerendered routes. */
export function generateStaticParams() {
  const params: Array<{ slug: string; area: string }> = [];
  for (const slug of PUBLISHED_SERVICE_SLUGS) {
    for (const areaSlug of AREA_SLUGS) {
      params.push({ slug, area: areaSlug });
    }
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string; area: string }> },
): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const page = await getServicePage(slug);
  const area = getArea(areaSlug);
  if (!page || !area) return { title: "Not found" };

  const discipline = DISCIPLINES.find(d => d.slug === page.slug);
  const disciplineName = discipline?.title ?? page.hero.h1;

  return buildMetadata({
    title: `${disciplineName} Contractor in ${area.searchName} | Sixty Newton`,
    description: areaMetaDescription(area, disciplineName, page.meta.description),
    keywords: [
      ...(page.meta.keywords ?? []),
      `${disciplineName.toLowerCase()} ${area.name.toLowerCase()}`,
      `${disciplineName.toLowerCase()} contractor ${area.searchName.toLowerCase()}`,
      `${disciplineName.toLowerCase()} ${area.searchName.toLowerCase()}`,
    ],
    path: `/disciplines/${page.slug}/${area.slug}`,
  });
}

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const page = await getServicePage(slug);
  const area = getArea(areaSlug);
  if (!page || !area) notFound();

  const discipline = DISCIPLINES.find(d => d.slug === page.slug);
  const disciplineName = discipline?.title ?? page.hero.h1;
  const url = `${SITE.url}/disciplines/${page.slug}/${area.slug}`;

  const heroSub = areaHeroSub(area, disciplineName);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home",              href: "/" },
    { name: "Disciplines",       href: "/disciplines" },
    { name: disciplineName,       href: `/disciplines/${page.slug}` },
    { name: area.searchName,      href: `/disciplines/${page.slug}/${area.slug}` },
  ]);

  const service = serviceJsonLd({
    serviceType: `${disciplineName} in ${area.searchName}`,
    name: `${disciplineName} Contractor in ${area.searchName}`,
    description: areaMetaDescription(area, disciplineName, page.meta.description),
    url,
    systemVariants: collectSystemVariants(page.sections),
  });

  // Sibling areas — same discipline, other areas. Grouped by Emirate.
  const siblingAreaGroups = getAreasGroupedByEmirate().map(g => ({
    emirate: g.emirate,
    areas: g.areas.filter(a => a.slug !== area.slug),
  })).filter(g => g.areas.length > 0);

  // Sibling disciplines — same area, other disciplines.
  const siblingDisciplines = DISCIPLINES.filter(d => d.published && d.slug !== page.slug);

  // Service context for CTA pre-fill — include area for richer pre-fill text
  const serviceContext = { title: `${disciplineName} (${area.name})` };

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
          <li><Link href="/disciplines" className="hover:text-gold transition-colors">Disciplines</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li>
            <Link href={`/disciplines/${page.slug}`} className="hover:text-gold transition-colors">
              {disciplineName}
            </Link>
          </li>
          <ChevronRight size={12} aria-hidden />
          <li aria-current="page" className="text-gold">{area.searchName}</li>
        </ol>
      </nav>

      <ServiceHero
        eyebrow={`${page.bucket} · ${area.searchName}`}
        h1={`${disciplineName} in ${area.searchName}`}
        sub={heroSub}
        className="pt-12 md:pt-16"
        serviceContext={serviceContext}
      />

      {/* ── Area context callout ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-14 md:py-20">
          <div className="rounded-md border border-border bg-bg p-6 md:p-10">
            <div className="flex items-center gap-3">
              <MapPin size={16} aria-hidden className="text-gold" />
              <p className="eyebrow text-gold">{area.searchName} · in focus</p>
            </div>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
              Why {disciplineName.toLowerCase()} in {area.searchName} is its own brief.
            </h2>
            <p className="mt-5 max-w-3xl font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
              {area.context}
            </p>

            {area.landmarks.length > 0 && (
              <div className="mt-8 border-t border-border-hairline pt-6">
                <p className="eyebrow text-fg-subtle">Local context</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {area.landmarks.map(lm => (
                    <li
                      key={lm}
                      className="font-mono text-xs text-fg-muted px-3 py-1.5 rounded-full border border-border-hairline"
                    >
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Parent discipline body (inherited) ── */}
      {page.sections.map((section, idx) => (
        <SectionRenderer
          key={idx}
          section={section}
          serviceContext={serviceContext}
        />
      ))}

      {/* ── Cross-link block A — same discipline, other areas ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>{disciplineName} elsewhere in the UAE</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            Same discipline. Different address.
          </h2>
          <p className="mt-4 max-w-2xl font-serif font-light text-fg-muted text-lg leading-relaxed">
            We deliver the same {disciplineName.toLowerCase()} programme — same brands, same warranty terms, same handover discipline — across {AREAS.length - 1} other Tier-1 areas in the UAE.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {siblingAreaGroups.map(group => (
              <div key={group.emirate}>
                <p className="eyebrow text-fg-subtle">{group.emirate}</p>
                <ul className="mt-4 space-y-2">
                  {group.areas.map(a => (
                    <li key={a.slug}>
                      <Link
                        href={`/disciplines/${page.slug}/${a.slug}`}
                        className="group inline-flex items-center gap-2 text-fg hover:text-gold transition-colors duration-200"
                      >
                        <ArrowRight
                          size={12}
                          aria-hidden
                          className="text-gold transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                        />
                        <span className="font-serif text-base md:text-lg leading-tight">
                          {disciplineName} in {a.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-link block B — other disciplines, same area ── */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Other disciplines in {area.searchName}</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
            What else we deliver here.
          </h2>
          <p className="mt-4 max-w-2xl font-serif font-light text-fg-muted text-lg leading-relaxed">
            {siblingDisciplines.length} other specialist disciplines we apply across {area.searchName} — every one a brand-certified applicator scope.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {siblingDisciplines.map(d => (
              <li key={d.slug}>
                <Link
                  href={`/disciplines/${d.slug}/${area.slug}`}
                  className="group block h-full rounded-md border border-border bg-bg p-5 transition-colors duration-200 hover:border-gold/60"
                >
                  <p className="eyebrow text-gold">{d.bucket}</p>
                  <h3 className="font-serif text-xl text-fg mt-3 leading-tight tracking-[-0.01em]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs text-fg-subtle">
                    in {area.name}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 eyebrow text-gold group-hover:text-gold-hover transition-colors">
                    Explore <ArrowRight size={12} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Closing brand strip ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-20 text-center">
          <p className="eyebrow text-fg-subtle">Brand-certified applicator across the UAE</p>
          <BrandStrip className="mt-8 mx-auto" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(service)} />
    </>
  );
}
