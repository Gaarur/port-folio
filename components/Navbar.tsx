"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home",       href: "#top" },
  { label: "Works",      href: "#projects" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ",        href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["top", "projects", "skills", "about", "experience", "faq", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ paddingTop: "16px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px 8px",
          borderRadius: "9999px",
          border: `1px solid ${scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
          background: scrolled
            ? "rgba(13,25,41,0.95)"
            : "rgba(13,25,41,0.80)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {navLinks.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = active === id;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "7px 18px",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
                background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                color: isActive ? "#FFFFFF" : "#8B9CB8",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="#contact"
          style={{
            marginLeft: "6px",
            padding: "7px 22px",
            borderRadius: "9999px",
            background: "#fff",
            color: "#0D1929",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}
