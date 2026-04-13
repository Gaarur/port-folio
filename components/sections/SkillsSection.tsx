"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "AI / ML",
    color: "#A44A3F",
    bg: "#F5DCD9",
    skills: ["Python", "PyTorch", "TensorFlow", "Keras", "FAISS", "LangChain", "OpenAI API", "CLIP", "DETR", "ViT", "SentenceTransformers", "Flan-T5"],
  },
  {
    category: "Web Engineering",
    color: "#6B705C",
    bg: "#E0E5CC",
    skills: ["Next.js", "React.js", "TypeScript", "Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "Tailwind CSS"],
  },
  {
    category: "Data & Databases",
    color: "#5D4A2E",
    bg: "#F7EDDE",
    skills: ["PostgreSQL", "MongoDB", "NeonDB", "Prisma", "Redis", "Vector DBs"],
  },
  {
    category: "Tools & Infrastructure",
    color: "#6B705C",
    bg: "#E0E5CC",
    skills: ["Docker", "Git", "GitHub Actions", "Vercel", "Cloudinary", "Inngest", "Clerk", "Razorpay"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ padding: "120px 0", background: "#F5F1EB" }}
    >
      <div className="container-editorial">
        <p className="label-section reveal" style={{ marginBottom: 20 }}>Technical Skills</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <h2
            className="reveal"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.025em",
              color: "#1A1A1A",
              lineHeight: 1.1,
            }}
          >
            The tools I work<br />
            <em style={{ color: "#A44A3F" }}>with every day.</em>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.90rem",
              color: "#7A6E6A",
              maxWidth: 280,
              lineHeight: 1.7,
            }}
          >
            Spanning research to production — grouped by domain.
          </p>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px 80px",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal">
              {/* Category heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                  paddingBottom: 14,
                  borderBottom: "1px solid #D4CDBE",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: group.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.70rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: group.color,
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 14px",
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.80rem",
                      fontWeight: 500,
                      color: "#3D3835",
                      background: "#F1EDE7",
                      border: "1px solid #D4CDBE",
                      borderRadius: 2,
                      transition: "background 0.15s, border-color 0.15s, color 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = group.bg;
                      el.style.borderColor = group.color;
                      el.style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "#F1EDE7";
                      el.style.borderColor = "#D4CDBE";
                      el.style.color = "#3D3835";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: "1px solid #D4CDBE",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
          className="reveal"
        >
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.78rem",
              color: "#A89F9B",
              letterSpacing: "0.05em",
            }}
          >
            Always learning ·
          </span>
          {["Rust", "Kubernetes", "MLOps", "Triton Inference Server"].map((s) => (
            <span
              key={s}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.78rem",
                color: "#6B705C",
                fontStyle: "italic",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
