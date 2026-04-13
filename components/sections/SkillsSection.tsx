"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "◈",
    title: "AI & Machine Learning",
    description: "Building production-ready ML systems — from model training to real-time inference pipelines.",
    tags: ["PyTorch", "TensorFlow", "FAISS", "LangChain", "OpenCV"],
    accent: "#E8FF4D",
    wide: true,
  },
  {
    icon: "◎",
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern React, Next.js, and scalable backends.",
    tags: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "TypeScript"],
    accent: "#FF5C35",
    wide: false,
  },
  {
    icon: "◉",
    title: "Research & Prototyping",
    description: "Rapid prototyping and research-backed development for novel AI applications.",
    tags: ["Jupyter", "HuggingFace", "Scikit-learn"],
    accent: "#FF8C6A",
    wide: false,
  },
  {
    icon: "◐",
    title: "Cloud & DevOps",
    description: "Containerised deployments, CI/CD pipelines, and cloud-native architecture for production systems.",
    tags: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
    accent: "#C8FF8C",
    wide: true,
  },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px 0", background: "#0A0A0A", position: "relative" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: 500, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,92,53,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>WHAT&nbsp;I&nbsp;DO</p>
          <h2 className="editorial-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#F0EDE8" }}>
            My Expertise
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className={`rounded-2xl p-7 lg:p-9 flex flex-col gap-5 ${s.wide ? "md:col-span-2" : "md:col-span-1"}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${s.accent}18`,
                boxShadow: `0 0 40px ${s.accent}08`,
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              whileHover={{
                borderColor: `${s.accent}30`,
                boxShadow: `0 0 60px ${s.accent}12`,
              }}
            >
              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  fontSize: "1.4rem", color: s.accent, lineHeight: 1,
                  fontWeight: 400, letterSpacing: "-0.05em",
                }}>
                  {s.icon}
                </span>
                <h3 className="editorial-heading" style={{ color: "#F0EDE8", fontSize: "1.15rem", margin: 0 }}>
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ color: "#6B6762", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, letterSpacing: "-0.01em" }}>
                {s.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {s.tags.map((t) => (
                  <span key={t} style={{
                    padding: "4px 10px", borderRadius: 4,
                    background: `${s.accent}0D`, border: `1px solid ${s.accent}20`,
                    color: s.accent, fontSize: "0.68rem",
                    fontFamily: "JetBrains Mono, monospace", fontWeight: 500,
                    letterSpacing: "0.04em",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
