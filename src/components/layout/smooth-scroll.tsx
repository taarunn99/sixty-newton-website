"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide smooth scrolling.
 *
 * Lenis interpolates the user's native scroll input (wheel / trackpad / arrow keys)
 * into a smoothly-tweened scroll position. This is what turns "click-by-click" scrolling
 * into the buttery, momentum-driven feel of high-end editorial sites.
 *
 * Critical: Lenis must drive GSAP's ScrollTrigger update loop, OR ScrollTrigger gets out
 * of phase with the actual scroll position (animations stutter / lag).
 *
 * Touch devices keep their native momentum (smoothTouch: false) — overriding that on
 * mobile fights iOS / Android natively and feels worse.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // 2.4s gives a much longer momentum tail after the user stops scrolling —
      // when paired with the scroll-sequence canvas's scrub:3, the visible
      // animation keeps settling for ~5s after wheel input stops.
      duration: 2.4,
      // quintic.out — slower, more luxurious decay than the standard expo.out.
      // Visually: the page glides to a stop instead of braking.
      easing: (t: number) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 2,
    });

    // Drive ScrollTrigger from Lenis's interpolated position
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis's RAF loop from GSAP's ticker so the two stay in lock-step
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
