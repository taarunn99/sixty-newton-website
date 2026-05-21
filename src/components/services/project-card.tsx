import Image from "next/image";
import { cn } from "@/lib/utils";
import { REFERENCE_PROJECTS } from "@/constants/site";

export interface ProjectCardData {
  name: string;
  location: string;
  year: string;
  scope: string;
  imageUrl?: string;
  href?: string;
}

/**
 * Resolve a hero image for a reference-project card.
 *
 * Discipline content files don't carry imageUrl on each project entry —
 * they were authored before the portfolio photography landed. Rather
 * than back-fill every entry by hand, we resolve the slug at render
 * time:
 *   1. If imageUrl is set explicitly, use it.
 *   2. If href looks like /portfolio/{slug}, take {slug}.
 *   3. Otherwise fuzzy-match the project name against
 *      REFERENCE_PROJECTS — lowercased, punctuation stripped — so
 *      "Le Méridien" matches the "Le Méridien Hotels" slug.
 * Once we have a slug, point at the standard hero path emitted by the
 * intern-image pipeline: /images/projects/{slug}/hero.webp.
 */
function normalise(s: string) {
  return s
    .toLowerCase()
    .replace(/[.,'&]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function resolveProjectImage(p: ProjectCardData): string | undefined {
  if (p.imageUrl) return p.imageUrl;

  const hrefSlug = p.href?.match(/\/portfolio\/([a-z0-9-]+)/i)?.[1];
  if (hrefSlug) return `/images/projects/${hrefSlug}/hero.webp`;

  const target = normalise(p.name);
  const match = REFERENCE_PROJECTS.find(rp => {
    const candidate = normalise(rp.name);
    return candidate === target || candidate.startsWith(target) || target.startsWith(candidate);
  });
  if (match?.published) return `/images/projects/${match.slug}/hero.webp`;

  return undefined;
}

/**
 * Reference-project card — 16:9 image on top, atelier metadata below.
 * If no image is provided, renders a placeholder pattern (hairline dashed
 * box with a centred mark) so the layout doesn't collapse pre-launch.
 */
export function ProjectCard({ project, className }: { project: ProjectCardData; className?: string }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-md border border-border bg-bg-elevated",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-inset">
        {(() => {
          const src = resolveProjectImage(project);
          return src ? (
            <Image
              src={src}
              alt={`${project.name} — ${project.scope}`}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center border border-dashed border-border-dashed">
              <span className="eyebrow text-fg-subtle">Photo to follow</span>
            </div>
          );
        })()}
      </div>

      <div className="p-5 md:p-6">
        <p className="eyebrow text-gold">{project.name}</p>
        <p className="mt-2 text-fg-muted text-sm">
          {project.location} · {project.year}
        </p>
        <div aria-hidden className="mt-4 h-px w-10 bg-border-strong" />
        <p className="mt-4 font-serif text-lg text-fg leading-snug">
          {project.scope}
        </p>
      </div>
    </article>
  );
}

export function ProjectCardGrid({
  projects,
  className,
}: {
  projects: ProjectCardData[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-4 md:grid-cols-3", className)}>
      {projects.map(p => (
        <li key={p.name}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}
