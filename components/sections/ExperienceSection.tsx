"use client";

import { useEffect, useRef } from "react";

const experience = [
  {
    period: "2024 – 2026",
    org: "IIT Patna",
    role: "M.Tech — AI & Data Science",
    type: "Education",
    description:
      "Pursuing advanced research in multimodal AI systems, real-time inference optimisation, and large language models. Active contributor to the academic AI community.",
    highlights: ["Multimodal AI research", "Real-time inference", "LLM fine-tuning"],
  },
  {
    period: "2025",
    org: "Self-Directed",
    role: "Multimodal Surveillance AI System",
    type: "Project",
    description:
      "Designed and deployed a production-grade AI surveillance platform with <50ms end-to-end latency. Combined DETR, ViT, CLIP, and FAISS in a unified real-time pipeline.",
    highlights: ["DETR + FAISS pipeline", "<50ms latency", "Production deployment"],
  },
  {
    period: "2024",
    org: "Research",
    role: "Brain Tumor CNN Classifier",
    type: "Research",
    description:
      "Developed a Sequential CNN model for clinical-grade brain tumour classification from MRI images. Achieved 97.3% accuracy. Adopted by 200+ medical students.",
    highlights: ["97.3% accuracy", "Data augmentation", "200+ adopters"],
  },
  {
    period: "2023",
    org: "Open Source",
    role: "AI Career Coaching Platform",
    type: "Product",
    description:
      "Built a full-stack ML-driven career platform with NLP-based skill gap analysis, Clerk auth, NeonDB, and Inngest event queues. Deployed and maintained on Vercel.",
    highlights: ["Skill gap NLP", "Event-driven arch", "Vercel production"],
  },
  {
    period: "2023",
    org: "Open Source",
    role: "StudyNotion — LMS Platform",
    type: "Product",
    description:
      "Architected a full MERN stack ed-tech platform with JWT authentication, Razorpay payment integration, Cloudinary media, and a real-time analytics dashboard.",
    highlights: ["MERN stack", "Razorpay integration", "Analytics dashboard"],
  },
  {
    period: "2020 – 2024",
    org: "I.K Gujral Punjab Technical University",
    role: "B.Tech — Computer Engineering",
    type: "Education",
    description:
      "Completed undergraduate studies with a strong foundation in computer engineering, data structures, and algorithms.",
    highlights: ["Core Computing", "Software Engineering", "Algorithms"],
  },
];

const typeColors: Record<string, { bg: string; color: string }> = {
  Education: { bg: "#F5DCD9", color: "#A44A3F" },
  Project:   { bg: "#E0E5CC", color: "#6B705C" },
  Product:   { bg: "#F7EDDE", color: "#5D4A2E" },
  Research:  { bg: "#F5DCD9", color: "#A44A3F" },
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ padding: "120px 0", background: "#F1EDE7" }}
    >
      <div className="container-editorial">
        <p className="label-section reveal" style={{ marginBottom: 20 }}>Experience & Achievements</p>
        <h2
          className="reveal"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.025em",
            color: "#1A1A1A",
            lineHeight: 1.1,
            marginBottom: 64,
          }}
        >
          A timeline of<br />
          <em style={{ color: "#A44A3F" }}>meaningful work.</em>
        </h2>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => {
            const tc = typeColors[item.type] || typeColors["Project"];
            return (
              <div
                key={i}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "40px",
                  padding: "40px 0",
                  borderTop: "1px solid #D4CDBE",
                  ...(i === experience.length - 1 ? { borderBottom: "1px solid #D4CDBE" } : {}),
                }}
              >
                {/* Left: period + type */}
                <div style={{ paddingTop: 4 }}>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.80rem",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.period}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 9px",
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.63rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: tc.bg,
                      color: tc.color,
                      borderRadius: 2,
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Right: content */}
                <div>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#A89F9B",
                      marginBottom: 6,
                    }}
                  >
                    {item.org}
                  </p>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#1A1A1A",
                      letterSpacing: "-0.015em",
                      marginBottom: 14,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.875rem",
                      color: "#3D3835",
                      lineHeight: 1.75,
                      marginBottom: 18,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          color: "#6B705C",
                          background: "#E0E5CC",
                          borderRadius: 2,
                          padding: "3px 10px",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .reveal[style*="grid-template-columns: 160px"] {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
