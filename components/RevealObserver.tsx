"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal observer.
 * Watches every element with class "reveal" or "reveal-left"
 * and adds "visible" once it enters the viewport.
 */
export default function RevealObserver() {
  useEffect(() => {
    const observe = () => {
      const elements = document.querySelectorAll(".reveal, .reveal-left");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
      );
      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Initial run
    const observer = observe();

    // Re-run on route change (Next.js soft navigation)
    return () => observer.disconnect();
  }, []);

  return null;
}
