"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start text-center lg:text-left">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="section-label" style={{ marginBottom: 12 }}>
              A B O U T &nbsp; M E
            </p>
            <h2
              className="serif-heading"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#fff", marginBottom: 10 }}
            >
              My journey in few words
            </h2>

            <p style={{ color: "#8B9CB8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m <strong style={{ color: "#fff" }}>Utkarsh Raj</strong>, an M.Tech student in AI & Data Science at{" "}
              <strong style={{ color: "#4ADE80" }}>IIT Patna</strong> with a passion for building intelligent systems
              that push the boundaries of technology.
            </p>
            <p style={{ color: "#8B9CB8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 20 }}>
              My work spans <strong style={{ color: "#fff" }}>multimodal AI systems</strong>,{" "}
              <strong style={{ color: "#fff" }}>full-stack web platforms</strong>, and machine learning research.
              I believe in merging engineering rigor with creative problem-solving.
            </p>
            <p style={{ color: "#8B9CB8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
              Previously built production-grade AI surveillance systems, multi-model chat platforms, and competitive
              programming infrastructure. Currently focused on real-time inference optimization and multimodal research
              at IIT Patna.
            </p>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10 mt-8">
              {[
                { val: "2+", label: "Years experience" },
                { val: "10+", label: "Projects built" },
                { val: "97%", label: "Model accuracy" },
              ].map((s) => (
                <div key={s.label} className="min-w-[100px]">
                  <div style={{ font: "700 2rem 'Playfair Display', serif", color: "#4ADE80", marginBottom: 4 }}>
                    {s.val}
                  </div>
                  <div style={{ color: "#8B9CB8", fontSize: "0.85rem" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-outline inline-block">
              Know more →
            </a>
          </motion.div>

          {/* Right: polaroid photo & info */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col items-center gap-8 w-full lg:max-w-[380px]"
          >
            {/* Polaroid */}
            <div
              style={{
                background: "#fff",
                padding: "14px 14px 50px 14px",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                transform: "rotate(3deg)",
                width: "100%",
                maxWidth: 280,
              }}
            >
              <div style={{
                width: "100%",
                aspectRatio: "1",
                background: "linear-gradient(135deg, #1A3A2E, #0D1929)",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
              }}>
                👨‍💻
              </div>
              <p style={{
                textAlign: "center",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
                color: "#333",
                fontSize: "1rem",
                fontWeight: 600,
              }}>
                Utkarsh Raj
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3 w-full">
              {[
                { icon: "🎓", label: "M.Tech AI & Data Science", sub: "IIT Patna · 2024–2026" },
                { icon: "📍", label: "Bihar, India", sub: "Open to remote · relocation" },
              ].map((c) => (
                <div key={c.label} className="bg-[#131E2E] border border-white/7 rounded-2xl p-4 flex items-center gap-4 text-left">
                  <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 500, fontSize: "0.9rem", margin: 0 }}>{c.label}</p>
                    <p style={{ color: "#8B9CB8", fontSize: "0.8rem", margin: "2px 0 0" }}>{c.sub}</p>
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
