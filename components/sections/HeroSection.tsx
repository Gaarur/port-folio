"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#F5F1EB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle paper texture line decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "38%",
          height: "100%",
          background: "#F1EDE7",
          zIndex: 0,
        }}
      />

      {/* Vertical text stamp */}
      <div
        style={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center",
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#A89F9B",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        M.Tech AI · IIT Patna · 2024–2026
      </div>

      <div className="container-editorial" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              marginBottom: 40,
              background: "#E0E5CC",
              border: "1px solid #C4C9B1",
              borderRadius: 2,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#6B705C",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6B705C",
              }}
            >
              Open to Opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1
            ref={headRef}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 800,
              fontSize: "clamp(3rem, 7.5vw, 6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
              marginBottom: 32,
            }}
          >
            Building for{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                color: "#1A1A1A",
              }}
            >
              the Future
              <span
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  right: 0,
                  height: 10,
                  background: "rgba(164,74,63,0.22)",
                  zIndex: -1,
                  borderRadius: 1,
                }}
              />
            </span>
            {" "}
            <span
              style={{
                display: "block",
                color: "#A44A3F",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              — One System at a Time.
            </span>
          </h1>

          {/* Divider rule */}
          <div style={{ width: 56, height: 2, background: "#A44A3F", marginBottom: 28 }} />

          {/* Descriptor */}
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              color: "#3D3835",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            I&apos;m <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Utkarsh Raj</strong> — AI researcher &amp; full-stack engineer.
            I design and build intelligent systems, multimodal AI platforms, and scalable web products.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
            <Link href="#projects" className="btn-primary">
              View My Work →
            </Link>
            <a
              href="/Utkarsh_Raj_2408_Resume.pdf"
              download
              className="btn-secondary"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Social icons row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A89F9B",
              }}
            >
              Find me on
            </span>
            <div style={{ width: 32, height: 1, background: "#D4CDBE" }} />
            {[
              {
                label: "GitHub",
                href: "https://github.com/Garrur",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "LeetCode",
                href: "https://leetcode.com/u/Utkarsh_Raj32/",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #D4CDBE",
                  borderRadius: 2,
                  color: "#7A6E6A",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#A44A3F";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A44A3F";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#F5DCD9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4CDBE";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#7A6E6A";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "#D4CDBE",
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
