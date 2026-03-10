"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2024 — 2026",
    title: "M.Tech in AI & Data Science",
    org: "IIT Patna",
    location: "Patna, Bihar",
    description:
      "Advanced studies in artificial intelligence, machine learning, and data science. Research focus on multimodal AI systems and real-time inference optimization.",
    tags: ["Deep Learning", "NLP", "Computer Vision", "Research"],
    type: "education",
    icon: "🎓",
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
    icon: "💼",
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
    icon: "🎓",
  },
];

const typeColor: Record<string, string> = {
  education: "#60A5FA",
  work: "#4ADE80",
  achievement: "#FBBF24",
};

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            M Y &nbsp; J O U R N E Y
          </p>
          <h2
            className="serif-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff" }}
          >
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
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: 14,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, #4ADE80, transparent)",
              transformOrigin: "top",
            }}
            className="left-3.5 md:left-5"
          />

          <div className="flex flex-col gap-9 pl-10 md:pl-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                style={{ position: "relative" }}
              >
                {/* dot */}
                <div 
                  className="-left-[31px] md:-left-[46px]"
                  style={{
                    position: "absolute",
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: typeColor[item.type] || "#4ADE80",
                    border: "2px solid #0D1929",
                    boxShadow: `0 0 0 3px ${typeColor[item.type]}33`,
                  }} 
                />

                <div className="bg-[#111F33] border border-white/7 rounded-2xl p-6 md:p-7">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 4px" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: typeColor[item.type], fontSize: "0.85rem", margin: 0, fontWeight: 500 }}>
                        {item.org} · {item.location}
                      </p>
                    </div>
                    <span style={{
                      color: "#4A5A72",
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                    }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ color: "#8B9CB8", fontSize: "0.875rem", lineHeight: 1.65, margin: "10px 0 14px" }}>
                    {item.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.tags.map((t) => (
                      <span key={t} style={{
                        padding: "3px 10px",
                        borderRadius: 9999,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#6B7A8F",
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
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
