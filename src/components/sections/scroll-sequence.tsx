"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Bundle counts must match what scripts/optimize-frames-fast.ts + the
// mobile-v2 script emit. Apple-class production tuning.
// Mobile bumped 45 → 90 frames (and q55 → q62) — the previous 45-frame
// bundle was visibly choppy on phone. 90 frames matches desktop count
// for fluid playback; smaller dimension (900 w q62) keeps payload at
// ~1.8 MB which is acceptable on 4G.
const FRAME_COUNT_DESKTOP = 90;
const FRAME_COUNT_MOBILE  = 90;
const FRAME_BASE_DESKTOP  = "/animation/desktop/frame-";
const FRAME_BASE_MOBILE   = "/animation/mobile/frame-";

// Start playing the animation as soon as 6 % of frames are decoded
// (≈ 5-6 frames). The remaining 84 frames stream in behind the scenes
// while the canvas already shows the opening few frames. The previous
// 30 % threshold cost us ~25 frames of payload (~1.4 MB on mobile)
// before LCP could fire — a Lighthouse-blocking number on simulated
// throttling.
const PLAYBACK_THRESHOLD = 0.06;

const frameSrc = (base: string, i: number) =>
  `${base}${String(i).padStart(3, "0")}.webp`;

type Frame = ImageBitmap | HTMLImageElement;

const frameWidth = (f: Frame) =>
  "width" in f ? f.width : (f as HTMLImageElement).naturalWidth;
const frameHeight = (f: Frame) =>
  "height" in f ? f.height : (f as HTMLImageElement).naturalHeight;

/**
 * Detect very low bandwidth or explicit data-saver — same heuristic Apple
 * uses on iPhone product pages. On those connections we skip the animation
 * entirely and render only the final frame.
 */
function shouldSkipAnimation(): boolean {
  if (typeof window === "undefined") return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const slow = conn.effectiveType;
  return slow === "slow-2g" || slow === "2g";
}

/**
 * Pinned canvas-based scroll sequence.
 *
 *   - Desktop: 90 frames @ 1800w, q55 WebP — ~4.3 MB total
 *   - Mobile:  45 frames @ 900w,  q55 WebP — ~0.9 MB total
 *
 * Parallel fetch + ImageBitmap decode. Animation arms at 30% decoded
 * (not 100%) so users see the effect inside ~1 s on 4G.
 * Honours prefers-reduced-motion AND Save-Data — both fall back to a
 * static final frame, no scroll-jacking.
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
  const [staticFallback, setStaticFallback] = useState(false);
  // IntersectionObserver gate — only kick off the 4-MB frame fetch
  // once the section is within 2 viewport heights of the viewport.
  // Lets the hero LCP fire on its own bandwidth, then the scroll
  // sequence streams in as the user scrolls toward it.
  const [shouldLoad, setShouldLoad] = useState(false);

  // Reduced-motion + Save-Data preferences (once on mount)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReduced);
    setStaticFallback(prefersReduced || shouldSkipAnimation());
  }, []);

  // Intersection-gate the frame fetch
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;
    // Pre-fetch when within 2 viewport heights so the animation is ready
    // by the time the user actually scrolls into the section.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200% 0px 200% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Preload + decode frames in PARALLEL (browser HTTP/2 multiplexes;
  // Vercel CDN serves all in one wave).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!shouldLoad) return;
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
      if (staticFallback) {
        const last = await loadOne(frameCount - 1);
        if (cancelled) return;
        if (last) framesRef.current[frameCount - 1] = last;
        setLoadedCount(frameCount);
        return;
      }

      // Parallel-fetch ALL frames. Each settle increments the counter so
      // the playback threshold (30%) trips as soon as enough are ready.
      let loaded = 0;
      await Promise.all(
        Array.from({ length: frameCount }, (_, i) => i).map(async i => {
          const frame = await loadOne(i);
          if (cancelled) return;
          if (frame) framesRef.current[i] = frame;
          loaded += 1;
          setLoadedCount(loaded);
        }),
      );
    })();

    return () => { cancelled = true; };
  }, [shouldLoad, staticFallback, frameCount, frameBase]);

  const armed = staticFallback
    ? loadedCount === frameCount
    : loadedCount >= Math.ceil(frameCount * PLAYBACK_THRESHOLD);

  // Arm GSAP + canvas once the threshold is met (30% for animated, 100% for fallback)
  useGSAP(
    () => {
      if (!armed) return;
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
        // Background loading may not have completed for this index yet —
        // fall back to the last decoded frame.
        let frame = framesRef.current[i];
        if (!frame) {
          for (let j = i - 1; j >= 0; j--) {
            if (framesRef.current[j]) { frame = framesRef.current[j]; break; }
          }
        }
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

      if (staticFallback) {
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
          // 240 % scroll distance — half the prior `+=420%`. Animation
          // completes inside two viewport heights of scroll.
          end: "+=240%",
          // Tight scrub — animation responds immediately. Apple-grade
          // tuning sits in 0.3–0.8s; 0.6 is the sweet spot for cinematic.
          scrub: 0.6,
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
    { scope: sectionRef, dependencies: [armed, staticFallback, frameCount] },
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

        {/* Loading state — only blocks until the 30 % threshold is met.
            Once armed, the rest of the frames stream in behind the scenes. */}
        {!armed && !staticFallback && (
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
