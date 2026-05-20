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
import { BrandStrip } from "@/components/services/brand-strip";
import { SectionRenderer, collectSystemVariants } from "@/components/services/section-renderer";

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

      <ServiceHero
        eyebrow={page.hero.eyebrow}
        h1={page.hero.h1}
        sub={page.hero.sub}
        className="pt-12 md:pt-16"
        serviceContext={{ title: serviceName }}
      />

      {page.sections.map((section, idx) => (
        <SectionRenderer
          key={idx}
          section={section}
          serviceContext={{ title: serviceName }}
        />
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
