"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Building production-ready ML systems — from model training to real-time inference pipelines.",
    tags: ["PyTorch", "TensorFlow", "FAISS", "LangChain", "OpenCV"],
    wide: true,
    bg: "#131E2E",
  },
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern React, Next.js, and scalable backends.",
    tags: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "TypeScript"],
    wide: false,
    bg: "#1A2535",
  },
  {
    icon: "🔬",
    title: "Research & Prototyping",
    description: "Rapid prototyping and research-backed development for novel AI applications.",
    tags: ["Jupyter", "HuggingFace", "Scikit-learn"],
    wide: false,
    bg: "#1A2535",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Containerized deployments, CI/CD pipelines, and cloud-native architecture for production systems.",
    tags: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
    wide: true,
    bg: "#131E2E",
  },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            W H A T &nbsp; I &nbsp; D O
          </p>
          <h2
            className="serif-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff" }}
          >
            My Expertise
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className={`rounded-3xl p-8 lg:p-10 flex flex-col gap-6 border border-white/7 ${
                s.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
              style={{
                background: s.bg,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: "1.4rem", color: "#4ADE80" }}>✦</span>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.25rem", margin: 0 }}>{s.title}</h3>
              </div>
              <p style={{ color: "#8B9CB8", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>
                {s.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                {s.tags.map((t) => (
                  <span key={t} style={{
                    padding: "6px 14px",
                    borderRadius: 9999,
                    background: "rgba(74,222,128,0.08)",
                    border: "1px solid rgba(74,222,128,0.15)",
                    color: "#4ADE80",
                    fontSize: "0.80rem",
                    fontFamily: "monospace",
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
