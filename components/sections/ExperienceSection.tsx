"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2024 — 2026",
    title: "M.Tech in AI & Data Science",
    org: "IIT Patna",
    location: "Patna, Bihar",
    description:
      "Advanced studies in artificial intelligence, machine learning, and data science. Research focus on multimodal AI systems and real-time inference optimisation.",
    tags: ["Deep Learning", "NLP", "Computer Vision", "Research"],
    type: "education",
    accent: "#E8FF4D",
  },
  {
    period: "Jan 2024 — May 2024",
    title: "Web Developer",
    org: "Infowiz",
    location: "Remote",
    description:
      "Engineered responsive web applications within an agile team. Designed and consumed robust REST APIs. Achieved timely delivery of enterprise features by continuously integrating backend services with frontend architectures.",
    tags: ["React.js", "Node.js", "Next.js", "Tailwind CSS"],
    type: "work",
    accent: "#FF5C35",
  },
  {
    period: "2020 — 2024",
    title: "B.Tech in Computer Engineering",
    org: "I.K. Gujral Punjab Technical University",
    location: "Punjab, India",
    description:
      "Graduated with 7.5 CGPA. Built foundational knowledge in software engineering, data structures, algorithms, and full-stack development.",
    tags: ["DSA", "DBMS", "Software Engineering", "Web Dev"],
    type: "education",
    accent: "#C8FF8C",
  },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "100px 0", background: "#0A0A0A", position: "relative" }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "30%", right: "5%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,92,53,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>MY&nbsp;JOURNEY</p>
          <h2 className="editorial-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#F0EDE8" }}>
            Experience &amp; Milestones
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute", left: 14, top: 0, bottom: 0,
              width: 1, transformOrigin: "top",
              background: "linear-gradient(to bottom, #E8FF4D60, transparent)",
            }}
            className="left-3.5 md:left-5"
          />

          <div className="flex flex-col gap-8 pl-10 md:pl-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div
                  className="-left-[31px] md:-left-[46px]"
                  style={{
                    position: "absolute", top: 18,
                    width: 12, height: 12, borderRadius: "50%",
                    background: item.accent,
                    border: "2px solid #0A0A0A",
                    boxShadow: `0 0 0 3px ${item.accent}30, 0 0 12px ${item.accent}50`,
                  }}
                />

                {/* Card */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${item.accent}15`,
                  borderRadius: 16, padding: "22px 24px",
                  transition: "border-color 0.3s ease",
                }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}30`}
                  onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}15`}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                    <div>
                      <h3 className="editorial-heading" style={{ color: "#F0EDE8", fontSize: "1rem", margin: "0 0 4px" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: item.accent, fontSize: "0.80rem", margin: 0, fontWeight: 600, letterSpacing: "-0.01em" }}>
                        {item.org} · {item.location}
                      </p>
                    </div>
                    <span style={{
                      color: "#6B6762", fontSize: "0.68rem",
                      fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap",
                      padding: "3px 10px", borderRadius: 4,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <p style={{ color: "#6B6762", fontSize: "0.85rem", lineHeight: 1.65, margin: "10px 0 14px", letterSpacing: "-0.01em" }}>
                    {item.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.tags.map((t) => (
                      <span key={t} style={{
                        padding: "3px 10px", borderRadius: 4,
                        background: `${item.accent}0D`, border: `1px solid ${item.accent}20`,
                        color: item.accent, fontSize: "0.68rem",
                        fontFamily: "JetBrains Mono, monospace",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
