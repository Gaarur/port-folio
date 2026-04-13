"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const stats = [
  { val: "2+",  label: "Years experience" },
  { val: "10+", label: "Projects built" },
  { val: "97%", label: "Model accuracy" },
];

const infoCards = [
  { icon: "🎓", label: "M.Tech AI & Data Science", sub: "IIT Patna · 2024–2026" },
  { icon: "📍", label: "Bihar, India",              sub: "Open to remote · relocation" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 0", background: "#0A0A0A", position: "relative" }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "5%", transform: "translateY(-50%)",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,255,77,0.04) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ flex: "1 1 0" }}
          >
            <p className="section-label" style={{ marginBottom: 12 }}>ABOUT&nbsp;ME</p>
            <h2 className="editorial-heading" style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F0EDE8", marginBottom: 24,
            }}>
              My journey in<br />
              <span style={{ color: "#E8FF4D" }}>a few words</span>
            </h2>

            <p style={{ color: "#9C9890", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 16, letterSpacing: "-0.01em" }}>
              I&apos;m <strong style={{ color: "#F0EDE8" }}>Utkarsh Raj</strong>, M.Tech student in AI & Data Science at{" "}
              <strong style={{ color: "#E8FF4D" }}>IIT Patna</strong> with a passion for building intelligent systems
              that push the boundaries of technology.
            </p>
            <p style={{ color: "#9C9890", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 16, letterSpacing: "-0.01em" }}>
              My work spans <strong style={{ color: "#F0EDE8" }}>multimodal AI systems</strong>,{" "}
              <strong style={{ color: "#F0EDE8" }}>full-stack web platforms</strong>, and machine learning research.
              I believe in merging engineering rigour with creative problem-solving.
            </p>
            <p style={{ color: "#9C9890", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 36, letterSpacing: "-0.01em" }}>
              Previously built production-grade AI surveillance systems, multi-model chat platforms, and competitive
              programming infrastructure. Currently focused on real-time inference optimisation and multimodal research at IIT Patna.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 36 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="editorial-heading" style={{ fontSize: "2.2rem", color: "#E8FF4D", marginBottom: 4 }}>
                    {s.val}
                  </div>
                  <div style={{ color: "#6B6762", fontSize: "0.82rem", letterSpacing: "-0.01em" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-neu-outline" style={{ fontSize: "0.9rem", padding: "10px 22px" }}>
              Know more →
            </a>
          </motion.div>

          {/* Right: polaroid + info */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col items-center gap-7 w-full lg:max-w-[350px]"
          >
            {/* Polaroid */}
            <div style={{
              background: "#F0EDE8",
              padding: "14px 14px 52px 14px",
              borderRadius: 4,
              boxShadow: "0 20px 60px rgba(0,0,0,0.7), 3px 3px 0 rgba(0,0,0,0.5)",
              transform: "rotate(2deg)",
              width: "100%", maxWidth: 260,
              border: "1px solid rgba(0,0,0,0.3)",
            }}>
              <div style={{
                width: "100%", aspectRatio: "1",
                background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)",
                borderRadius: 2,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "5rem", position: "relative", overflow: "hidden",
              }}>
                {/* Yellow shimmer on polaroid photo placeholder */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 30% 30%, rgba(232,255,77,0.08) 0%, transparent 60%)",
                }} />
                👨‍💻
              </div>
              <p style={{
                textAlign: "center", marginTop: 10,
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1A1A1A", fontSize: "0.95rem", fontWeight: 700,
                letterSpacing: "-0.02em",
              }}>
                Utkarsh Raj
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3 w-full">
              {infoCards.map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(232,255,77,0.1)",
                    borderRadius: 12, padding: "14px 16px",
                    display: "flex", alignItems: "center", gap: 14,
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ color: "#F0EDE8", fontWeight: 600, fontSize: "0.85rem", margin: 0, letterSpacing: "-0.01em" }}>
                      {c.label}
                    </p>
                    <p style={{ color: "#6B6762", fontSize: "0.75rem", margin: "2px 0 0", fontFamily: "JetBrains Mono, monospace" }}>
                      {c.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
