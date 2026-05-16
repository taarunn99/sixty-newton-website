"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Unify wheel / trackpad / touch scrolling so the scrub feels consistent across
// devices. Safe to call multiple times.
if (typeof window !== "undefined") {
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

const FRAME_COUNT = 140;
const FRAME_BASE = "/animation/frame-";
const frameSrc = (i: number) => `${FRAME_BASE}${String(i).padStart(3, "0")}.webp`;

/**
 * Pinned canvas-based scroll sequence — pure visual.
 * 140 frames preloaded before pinning is armed (no pop-in during scrub).
 * Honours prefers-reduced-motion → static final frame, no scroll-jacking.
 */
export function ScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [loadedCount, setLoadedCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Detect reduced-motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Preload every frame eagerly
  useEffect(() => {
    if (reduced) {
      const img = new window.Image();
      img.src = frameSrc(FRAME_COUNT - 1);
      img.onload = () => {
        imagesRef.current[FRAME_COUNT - 1] = img;
        setLoadedCount(FRAME_COUNT);
      };
      return;
    }
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      const tick = () => {
        loaded += 1;
        setLoadedCount(loaded);
      };
      img.onload = tick;
      img.onerror = tick;
      images[i] = img;
    }
    imagesRef.current = images;
  }, [reduced]);

  // Arm GSAP + canvas only after all frames are decoded
  useGSAP(
    () => {
      if (loadedCount < FRAME_COUNT) return;
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const sizeCanvas = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      };

      const drawFrame = (i: number) => {
        const img = imagesRef.current[i];
        if (!img || !img.complete) return;
        const cw = canvas.clientWidth;
        const ch = canvas.clientHeight;
        if (cw === 0 || ch === 0) return;
        ctx.clearRect(0, 0, cw, ch);
        const imgRatio = img.naturalWidth / img.naturalHeight;
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
        ctx.drawImage(img, dx, dy, dw, dh);
      };

      sizeCanvas();

      if (reduced) {
        drawFrame(FRAME_COUNT - 1);
        return;
      }

      drawFrame(0);

      const state = { frame: 0 };
      let lastDrawn = -1;

      gsap.to(state, {
        frame: FRAME_COUNT - 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=420%",
          scrub: 1.4,
          pin: stickyRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
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
    { scope: sectionRef, dependencies: [loadedCount, reduced] },
  );

  const pct = Math.round((loadedCount / FRAME_COUNT) * 100);

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
        />

        {/* Loading state */}
        {loadedCount < FRAME_COUNT && !reduced && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-bg/95">
            <div className="flex flex-col items-center gap-4">
              <span className="eyebrow text-fg-subtle">Loading sequence · {pct}%</span>
              <div className="h-px w-48 overflow-hidden bg-border">
                <div
                  className="h-full bg-gold origin-left transition-transform duration-200"
                  style={{ transform: `scaleX(${loadedCount / FRAME_COUNT})` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Scroll-progress hairline at top of pinned panel */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-border/60">
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
