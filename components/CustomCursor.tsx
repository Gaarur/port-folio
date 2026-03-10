"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animateRing);
    };

    const handleHover = () => {
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(2.5)`;
      ring.style.opacity = "0.4";
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(1.5)`;
    };

    const handleLeave = () => {
      ring.style.opacity = "0.6";
    };

    window.addEventListener("mousemove", moveCursor);
    animateRing();

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-cyan z-[9999] pointer-events-none transition-transform duration-75"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-neon-cyan/60 z-[9998] pointer-events-none opacity-60"
        style={{ willChange: "transform", transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
