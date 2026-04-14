"use client";

import { useEffect, useRef } from "react";

const pillars = [
  { title: "Intelligence", desc: "Training and fine-tuning robust models for real-time inference and analysis." },
  { title: "Architecture", desc: "Designing scalable, event-driven backends that can handle production loads." },
  { title: "Experience", desc: "Crafting tactile, human-centric interfaces that people actually want to use." },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    const targets = sectionRef.current?.querySelectorAll(".reveal, .reveal-left");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: "120px 0", background: "#F5F1EB" }}
    >
      <div className="container-editorial">
        {/* Section label */}
        <p className="label-section reveal" style={{ marginBottom: 48 }}>
          About Me
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — narrative */}
          <div className="reveal-left">
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#1A1A1A",
                marginBottom: 28,
              }}
            >
              Crafting intelligent<br />
              <em style={{ color: "#A44A3F" }}>experiences</em> with code.
            </h2>

            <div
              style={{
                width: 40,
                height: 2,
                background: "#A44A3F",
                marginBottom: 28,
              }}
            />

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#3D3835",
                marginBottom: 20,
              }}
            >
              I&apos;m <strong style={{ color: "#1A1A1A" }}>Utkarsh Raj</strong>, pursuing M.Tech in AI &amp; Data Science
              at <strong style={{ color: "#1A1A1A" }}>IIT Patna</strong>. My work lives at the intersection
              of deep learning research and production engineering.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#3D3835",
                marginBottom: 20,
              }}
            >
              I&apos;ve built multimodal surveillance systems, ML-driven career platforms,
              and full-stack products used by hundreds. I believe in clean systems,
              rigorous thinking, and products that actually ship.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#3D3835",
                marginBottom: 40,
              }}
            >
              Currently focused on real-time inference optimisation, multimodal AI, and
              building tools that reduce friction between humans and intelligent systems.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Get in touch →
              </a>
              <a href="#projects" className="btn-secondary w-full sm:w-auto justify-center">
                See my work
              </a>
            </div>
          </div>

          {/* Right — stats + info */}
          <div className="reveal" style={{ paddingTop: 8 }}>
            {/* Core Philosophy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
              {pillars.map(pillar => (
                <div key={pillar.title} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 16 }}>
                  <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontStyle: "italic", fontSize: "1.05rem", color: "#A44A3F" }}>
                    {pillar.title}
                  </span>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.85rem", color: "#6B705C", lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>


            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  label: "PG Education",
                  value: "M.Tech AI & Data Science",
                  sub: "IIT Patna · 2024 – 2026",
                },
                {
                  label: "UG Education",
                  value: "B.Tech Computer Engineering",
                  sub: "I.K Gujral Punjab Technical University · 2020 – 2024",
                },
                {
                  label: "Location",
                  value: "Bihar, India",
                  sub: "Open to remote & relocation",
                },
                {
                  label: "Focus",
                  value: "AI Systems & Full-Stack Engineering",
                  sub: "Multimodal · LLMs · Web Architecture",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 16,
                    padding: "18px 0",
                    borderTop: i === 0 ? "1px solid #D4CDBE" : "none",
                    borderBottom: "1px solid #D4CDBE",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#A89F9B",
                      paddingTop: 2,
                    }}
                  >
                    {item.label}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 600,
                        fontSize: "0.90rem",
                        color: "#1A1A1A",
                        marginBottom: 2,
                      }}
                    >
                      {item.value}
                    </p>
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "0.78rem",
                        color: "#7A6E6A",
                      }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
