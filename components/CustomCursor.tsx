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
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animateRing);
    };

    const handleHover = () => {
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px) scale(2)`;
      dot.style.backgroundColor = "#FF5C35"; // Turn orange on hover
      ring.style.opacity = "0.15";
      ring.style.scale = "1.5";
      ring.style.borderColor = "#FF5C35";
    };

    const handleLeave = () => {
      dot.style.backgroundColor = "#E8FF4D";
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px) scale(1)`;
      ring.style.opacity = "0.3";
      ring.style.scale = "1";
      ring.style.borderColor = "rgba(232,255,77,0.5)";
    };

    window.addEventListener("mousemove", moveCursor);
    animateRing();

    const interactives = document.querySelectorAll("a, button, [data-cursor], .clickable");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {/* Central Dot - Acid Yellow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#E8FF4D] z-[10000] pointer-events-none transition-transform duration-75 mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      {/* Follower Ring - Subtle Acid Yellow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#E8FF4D]/50 z-[9999] pointer-events-none opacity-30 transition-[opacity,scale,border-color] duration-300"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
