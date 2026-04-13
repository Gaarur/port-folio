"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work",       href: "#projects" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(245,241,235,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid #D4CDBE" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          className="container-editorial"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo / Name */}
          <Link
            href="/"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
          >
            Utkarsh<span style={{ color: "#A44A3F" }}>.</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.825rem",
                  fontWeight: active === l.href.replace("#", "") ? 600 : 400,
                  color: active === l.href.replace("#", "") ? "#A44A3F" : "#3D3835",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  borderBottom: active === l.href.replace("#", "") ? "1px solid #A44A3F" : "1px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A44A3F"; }}
                onMouseLeave={(e) => {
                  if (active !== l.href.replace("#", ""))
                    (e.currentTarget as HTMLAnchorElement).style.color = "#3D3835";
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Utkarsh_Raj_2408_Resume.pdf"
              download
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.80rem" }}
            >
              Resume ↓
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#1A1A1A",
                  transition: "transform 0.2s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : menuOpen && i === 1
                      ? "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "#F5F1EB",
              borderTop: "1px solid #D4CDBE",
              padding: "24px 20px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "#1A1A1A",
                  padding: "14px 0",
                  borderBottom: "1px solid #D4CDBE",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Utkarsh_Raj_2408_Resume.pdf"
              download
              className="btn-primary"
              style={{ marginTop: 20, alignSelf: "flex-start" }}
            >
              Download Resume ↓
            </a>
          </div>
        )}
      </header>
    </>
  );
}
