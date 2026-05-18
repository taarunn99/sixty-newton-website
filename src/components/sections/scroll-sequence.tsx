"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Two bundles — counts must match what scripts/build-frames.ts emits.
const FRAME_COUNT_DESKTOP = 169;
const FRAME_COUNT_MOBILE  = 85;
const FRAME_BASE_DESKTOP  = "/animation/desktop/frame-";
const FRAME_BASE_MOBILE   = "/animation/mobile/frame-";
const frameSrc = (base: string, i: number) =>
  `${base}${String(i).padStart(3, "0")}.webp`;

/** Drawable source — either a fast pre-decoded bitmap, or fallback HTMLImageElement */
type Frame = ImageBitmap | HTMLImageElement;

const frameWidth = (f: Frame) => ("width" in f ? f.width : (f as HTMLImageElement).naturalWidth);
const frameHeight = (f: Frame) => ("height" in f ? f.height : (f as HTMLImageElement).naturalHeight);

/**
 * Pinned canvas-based scroll sequence — pure visual.
 *
 * Picks the right bundle per viewport:
 *   - md+   → 169 frames @ 2400w (~27 MB, premium fidelity)
 *   - <md   → 85 frames @ 1200w (~3.6 MB, cellular-friendly)
 *
 * Frames decoded to ImageBitmap before pinning is armed (no decode stutter during scrub).
 * Honours prefers-reduced-motion → static final frame, no scroll-jacking.
 */
export function ScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<Frame[]>([]);

  const isMobile = useIsMobile();
  const frameCount = isMobile ? FRAME_COUNT_MOBILE : FRAME_COUNT_DESKTOP;
  const frameBase  = isMobile ? FRAME_BASE_MOBILE  : FRAME_BASE_DESKTOP;

  const [loadedCount, setLoadedCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Reduced-motion preference (once on mount)
  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Preload + decode frames for the active bundle.
  // Re-runs if viewport crosses the mobile/desktop boundary.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    const supportsBitmap = typeof window.createImageBitmap === "function";

    const loadOne = async (i: number): Promise<Frame | null> => {
      try {
        if (supportsBitmap) {
          const res = await fetch(frameSrc(frameBase, i));
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const blob = await res.blob();
          return await createImageBitmap(blob);
        }
        return await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new window.Image();
          img.decoding = "async";
          img.src = frameSrc(frameBase, i);
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error("img fail"));
        });
      } catch {
        return null;
      }
    };

    setLoadedCount(0);
    framesRef.current = new Array(frameCount);

    (async () => {
      if (reduced) {
        const last = await loadOne(frameCount - 1);
        if (cancelled) return;
        if (last) framesRef.current[frameCount - 1] = last;
        setLoadedCount(frameCount);
        return;
      }
      let loaded = 0;
      for (let i = 0; i < frameCount; i++) {
        const frame = await loadOne(i);
        if (cancelled) return;
        if (frame) framesRef.current[i] = frame;
        loaded += 1;
        setLoadedCount(loaded);
      }
    })();

    return () => { cancelled = true; };
  }, [reduced, frameCount, frameBase]);

  // Arm GSAP + canvas only after all frames are decoded
  useGSAP(
    () => {
      if (loadedCount < frameCount) return;
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const sizeCanvas = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      };

      const drawFrame = (i: number) => {
        const frame = framesRef.current[i];
        if (!frame) return;
        const cw = canvas.clientWidth;
        const ch = canvas.clientHeight;
        if (cw === 0 || ch === 0) return;
        ctx.fillStyle = "#0a0807";
        ctx.fillRect(0, 0, cw, ch);
        const fw = frameWidth(frame);
        const fh = frameHeight(frame);
        const imgRatio = fw / fh;
        const canvasRatio = cw / ch;
        let dw: number, dh: number, dx: number, dy: number;
        if (imgRatio > canvasRatio) {
          dh = ch;
          dw = ch * imgRatio;
          dx = (cw - dw) / 2;
          dy = 0;
        } else {
          dw = cw;
          dh = cw / imgRatio;
          dx = 0;
          dy = (ch - dh) / 2;
        }
        ctx.drawImage(frame as CanvasImageSource, dx, dy, dw, dh);
      };

      sizeCanvas();

      if (reduced) {
        drawFrame(frameCount - 1);
        return;
      }

      drawFrame(0);

      const state = { frame: 0 };
      let lastDrawn = -1;

      gsap.to(state, {
        frame: frameCount - 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=420%",
          // scrub: 3 gives a long, luxurious tail on the canvas after the
          // underlying scroll position settles.
          scrub: 3,
          pin: stickyRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
          onUpdate: self => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
        onUpdate: () => {
          const i = Math.round(state.frame);
          if (i !== lastDrawn) {
            drawFrame(i);
            lastDrawn = i;
          }
        },
      });

      const onResize = () => {
        sizeCanvas();
        drawFrame(Math.round(state.frame));
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: sectionRef, dependencies: [loadedCount, reduced, frameCount] },
  );

  const pct = Math.round((loadedCount / frameCount) * 100);

  return (
    <section
      ref={sectionRef}
      aria-label="Building sequence"
      className="relative w-full bg-bg"
    >
      <div ref={stickyRef} className="relative h-dvh w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "transform" }}
        />

        {/* Blend overlays — top fades into hero, bottom into next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 md:h-56 bg-gradient-to-b from-bg via-bg/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 md:h-56 bg-gradient-to-t from-bg via-bg/70 to-transparent"
        />

        {/* Loading state */}
        {loadedCount < frameCount && !reduced && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-bg/95">
            <div className="flex flex-col items-center gap-4">
              <span className="eyebrow text-fg-subtle">Loading sequence · {pct}%</span>
              <div className="h-px w-48 overflow-hidden bg-border">
                <div
                  className="h-full bg-gold origin-left transition-transform duration-200"
                  style={{ transform: `scaleX(${loadedCount / frameCount})` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Scroll-progress hairline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-border/40">
          <div
            ref={progressRef}
            className="h-full bg-gold origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </section>
  );
}
