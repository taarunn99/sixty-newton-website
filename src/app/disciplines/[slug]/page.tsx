import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";
import { getServicePage, PUBLISHED_SERVICE_SLUGS } from "@/lib/services";
import { SITE, DISCIPLINES } from "@/constants/site";

import { ServiceHero } from "@/components/services/service-hero";
import { SectionEyebrow } from "@/components/services/section-eyebrow";
import { SystemSelector } from "@/components/services/system-selector";
import { CrossSectionDiagram } from "@/components/services/cross-section-diagram";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ApplicationFitGrid } from "@/components/services/application-fit-grid";
import { ProjectCardGrid } from "@/components/services/project-card";
import { SpecCard } from "@/components/services/spec-card";
import { FAQAccordion } from "@/components/services/faq-accordion";
import { RelatedServices } from "@/components/services/related-services";
import { BrandStrip } from "@/components/services/brand-strip";
import { DualCTA } from "@/components/services/dual-cta";
import { BeforeAfterSlider } from "@/components/services/before-after-slider";
import { ColourSwatchPicker } from "@/components/services/colour-swatch-picker";
import { ComparisonTable } from "@/components/services/comparison-table";

import type { ServiceSection } from "@/content/services/types";

export function generateStaticParams() {
  return PUBLISHED_SERVICE_SLUGS.map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const page = await getServicePage(slug);
  if (!page) return { title: "Not found" };
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords ? [...page.meta.keywords] : undefined,
    path: `/disciplines/${page.slug}`,
    ogImage: page.meta.ogImage,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getServicePage(slug);
  if (!page) notFound();

  const url = `${SITE.url}/disciplines/${page.slug}`;
  const disciplineEntry = DISCIPLINES.find(d => d.slug === page.slug);
  const serviceName = disciplineEntry?.title ?? page.hero.h1;
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Disciplines", href: "/disciplines" },
    { name: serviceName, href: `/disciplines/${page.slug}` },
  ]);
  const service = serviceJsonLd({
    serviceType: page.meta.title,
    name: page.hero.h1,
    description: page.meta.description,
    url,
    systemVariants: collectSystemVariants(page.sections),
  });

  return (
    <>
      {/* Breadcrumb (visible) */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 pt-28 md:pt-32 pb-2 text-xs"
      >
        <ol className="flex flex-wrap items-center gap-2 text-fg-subtle">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight size={12} aria-hidden />
          <li>
            <Link href="/disciplines" className="hover:text-gold transition-colors">
              Disciplines
            </Link>
          </li>
          <ChevronRight size={12} aria-hidden />
          <li className="text-fg-muted">{page.bucket}</li>
          <ChevronRight size={12} aria-hidden />
          <li aria-current="page" className="text-gold">{serviceName}</li>
        </ol>
      </nav>

      <ServiceHero eyebrow={page.hero.eyebrow} h1={page.hero.h1} sub={page.hero.sub} className="pt-12 md:pt-16" />

      {page.sections.map((section, idx) => (
        <SectionRenderer key={idx} section={section} />
      ))}

      {/* Closing brand strip + 48-hour pledge band */}
      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-20 text-center">
          <p className="eyebrow text-fg-subtle">Brand-certified applicator</p>
          <BrandStrip className="mt-8 mx-auto" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(service)} />
    </>
  );
}

function collectSystemVariants(sections: ServiceSection[]): string[] {
  for (const s of sections) {
    if (s.type === "system-matrix") {
      return s.matrix.options.map(o => o.system.name);
    }
  }
  return [];
}

function SectionRenderer({ section }: { section: ServiceSection }) {
  switch (section.type) {
    case "intro":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-8 max-w-3xl text-fg-muted text-lg leading-relaxed font-serif font-light space-y-6">
            {section.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>
      );

    case "system-matrix":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          {section.matrix.intro && (
            <p className="mt-6 max-w-2xl text-fg-muted text-lg font-serif font-light leading-relaxed">
              {section.matrix.intro}
            </p>
          )}
          <SystemSelector options={[...section.matrix.options]} className="mt-10" />
          {section.matrix.closingNote && (
            <p className="mt-6 text-fg-muted text-sm leading-relaxed">
              <em className="font-serif text-base">{section.matrix.closingNote}</em>
            </p>
          )}
        </Section>
      );

    case "cross-section":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <CrossSectionDiagram
            layers={[...section.crossSection.layers]}
            notes={section.crossSection.notes ? [...section.crossSection.notes] : undefined}
            className="mt-10"
          />
        </Section>
      );

    case "process":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <ProcessTimeline steps={[...section.steps]} className="mt-10" />
        </Section>
      );

    case "applications":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <ApplicationFitGrid items={[...section.items]} className="mt-10" />
        </Section>
      );

    case "brands":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {section.lines.map(line => (
              <li
                key={line.brand}
                className="rounded-md border border-border bg-bg-elevated p-5 md:p-6"
              >
                <p className="eyebrow text-gold">{line.brand}</p>
                <p className="mt-3 font-serif text-base text-fg leading-snug">
                  {line.systems}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      );

    case "projects":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <ProjectCardGrid projects={[...section.projects]} className="mt-10" />
        </Section>
      );

    case "warranty":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10">
            <div className="font-serif text-fg-muted text-lg leading-relaxed font-light">
              {section.body.split("\n\n").map((p, i) => (
                <p key={i} className={i > 0 ? "mt-4" : undefined}>{p}</p>
              ))}
            </div>
            <div className="space-y-3">
              {section.specs.map(s => (
                <SpecCard key={s.title} title={s.title} rows={[...s.rows]} />
              ))}
            </div>
          </div>
        </Section>
      );

    case "before-after":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 space-y-12">
            {section.pairs.map((pair, i) => (
              <BeforeAfterSlider
                key={i}
                beforeImageUrl={pair.beforeImageUrl}
                afterImageUrl={pair.afterImageUrl}
                caption={pair.caption}
              />
            ))}
          </div>
        </Section>
      );

    case "swatch-picker":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <ColourSwatchPicker
            swatches={[...section.swatches]}
            body={section.body}
            className="mt-10"
          />
        </Section>
      );

    case "comparison":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          {section.body && (
            <p className="mt-6 max-w-2xl text-fg-muted text-lg font-serif font-light leading-relaxed">
              {section.body}
            </p>
          )}
          <ComparisonTable table={section.table} className="mt-10" />
        </Section>
      );

    case "faq":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <FAQAccordion items={[...section.items]} className="mt-10" />
        </Section>
      );

    case "related":
      return (
        <Section>
          <Header eyebrow={section.eyebrow} heading={section.heading} />
          <RelatedServices items={[...section.items]} className="mt-10" />
        </Section>
      );

    case "cta":
      return (
        <section className="relative w-full bg-bg-inset border-t border-border">
          <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
              {section.heading}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
              {section.body}
            </p>
            <DualCTA className="mt-10" align="center" />
          </div>
        </section>
      );
  }
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
        {children}
      </div>
    </section>
  );
}

function Header({ eyebrow, heading }: { eyebrow: string; heading: string }) {
  return (
    <div className="max-w-3xl">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em]">
        {heading}
      </h2>
    </div>
  );
}
