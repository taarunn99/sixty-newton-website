import { AREAS } from "@/content/areas/_data";
import type { Area } from "@/content/areas/types";

export function getArea(slug: string): Area | null {
  return AREAS.find(a => a.slug === slug) ?? null;
}

export function getAreasInEmirate(emirate: string): readonly Area[] {
  return AREAS.filter(a => a.emirate === emirate);
}

export const AREA_SLUGS: readonly string[] = AREAS.map(a => a.slug);

/** Group AREAS by emirate — used by cross-link blocks on area pages. */
export function getAreasGroupedByEmirate(): {
  emirate: string;
  areas: readonly Area[];
}[] {
  const map = new Map<string, Area[]>();
  for (const a of AREAS) {
    if (!map.has(a.emirate)) map.set(a.emirate, []);
    map.get(a.emirate)!.push(a);
  }
  return Array.from(map.entries()).map(([emirate, areas]) => ({ emirate, areas }));
}

/** Generate the unique hero-sub text for a discipline-area pair. */
export function areaHeroSub(area: Area, disciplineTitle: string): string {
  const lm = area.landmarks.slice(0, 2).join(" and ");
  return `${disciplineTitle} in ${area.searchName} sits at the intersection of brand-certified applicator discipline and ${area.vibe}. From ${lm} to the back-of-house surfaces nobody photographs — same Mapei, Laticrete, AkzoNobel and X-Calibur systems, same TDS coverage rates, same signed-off Inspection Request documentation. We mobilise to ${area.searchName} from our Al Quoz office on the same programme as anywhere else in the UAE.`;
}

/** Generate the unique meta description for a discipline-area pair. */
export function areaMetaDescription(area: Area, disciplineTitle: string, parentMeta: string): string {
  const trimmedParent = parentMeta.split(/[.•—]/)[0].trim();
  return `${disciplineTitle} contractor in ${area.searchName} — Sixty Newton applies brand-certified Mapei, Laticrete, AkzoNobel and X-Calibur systems across ${area.name} addresses. ${trimmedParent}. Free site survey, 48-hour quotation.`.slice(0, 320);
}
