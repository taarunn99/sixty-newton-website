import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans uppercase tracking-[0.18em] text-[11px] md:text-xs font-medium transition-[background-color,color,border-color,opacity] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 select-none",
  {
    variants: {
      variant: {
        // Solid filled — "gold button" in conversation
        primary:
          "bg-gold text-bg hover:bg-gold-hover",
        // Outline at rest, stays outline (text just brightens)
        outline:
          "bg-transparent text-fg border border-gold/70 hover:border-gold hover:text-gold",
        // Outline → fills on hover. Text + icons flip to bg colour automatically
        // (lucide icons inherit currentColor) so contrast stays correct.
        outlineFill:
          "bg-transparent text-gold border border-gold hover:bg-gold hover:text-bg",
        ghost:
          "bg-transparent text-fg/80 hover:text-fg",
        link:
          "bg-transparent text-gold underline-offset-4 hover:underline px-0 py-0",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
