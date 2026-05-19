import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  name: string;
  location: string;
  year: string;
  scope: string;
  imageUrl?: string;
  href?: string;
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
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.name} — ${project.scope}`}
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-border-dashed">
            <span className="eyebrow text-fg-subtle">Photo to follow</span>
          </div>
        )}
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
