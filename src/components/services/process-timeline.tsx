import { cn } from "@/lib/utils";

export interface ProcessStepData {
  index: number;
  title: string;
  body: string;
  duration: string;
}

/**
 * Process timeline — horizontal scroll-snap track on md+, vertical
 * connected stepper on mobile. Pure CSS, no JS.
 */
export function ProcessTimeline({
  steps,
  className,
}: {
  steps: ProcessStepData[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        // Mobile: vertical stepper with connector line through the gutter.
        "relative space-y-10 md:space-y-0",
        // md+: horizontal flex track with scroll-snap.
        "md:flex md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory md:pb-3 md:scrollbar-hide",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li
          key={step.index}
          className={cn(
            "relative md:snap-start md:shrink-0",
            "md:w-[280px] lg:w-[320px]",
            "pl-12 md:pl-0",
          )}
        >
          {/* Mobile: connector line down the left gutter */}
          <span
            aria-hidden
            className={cn(
              "absolute left-[15px] top-8 bottom-[-2.5rem] w-px bg-border md:hidden",
              i === steps.length - 1 && "hidden",
            )}
          />

          {/* Numbered bullet — gold ring on dark elevated fill */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-gold/60 bg-bg-elevated font-mono text-[11px] text-gold",
              "md:relative md:left-auto md:mb-4 md:h-7 md:w-7",
            )}
          >
            {String(step.index).padStart(2, "0")}
          </span>

          <div className="md:pr-2">
            <h3 className="font-serif text-xl md:text-2xl text-fg leading-tight tracking-[-0.01em]">
              {step.title}
            </h3>
            <p className="mt-3 text-fg-muted text-sm leading-relaxed">
              {step.body}
            </p>
            <p className="mt-4 eyebrow text-fg-subtle">{step.duration}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
