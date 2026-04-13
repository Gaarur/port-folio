"use client";

const SKILL_CATEGORIES = [
  { title: "Languages",           accent: "#E8FF4D", skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"] },
  { title: "Frontend",            accent: "#C8FF8C", skills: ["React.js", "Next.js 15", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Redux"] },
  { title: "Backend",             accent: "#FF8C6A", skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Django", "WebSockets", "REST APIs"] },
  { title: "Databases",           accent: "#FF5C35", skills: ["PostgreSQL", "NeonDB", "MongoDB", "Firebase", "FAISS (VectorDB)", "Redis"] },
  { title: "AI & Machine Learning", accent: "#E8FF4D", skills: ["PyTorch", "Hugging Face", "TensorFlow", "Keras", "OpenCV", "Sentence-Transformers", "LangChain"] },
  { title: "Tools & Cloud",       accent: "#C8FF8C", skills: ["Docker", "Vercel", "Prisma", "AWS S3", "Cloudinary", "Git/GitHub", "Postman", "Linux"] },
];

export default function MarqueeSection() {
  return (
    <section className="py-20 px-6 relative" style={{ background: "#0A0A0A" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 1200, margin: "0 auto 48px" }}>
        <p className="section-label" style={{ marginBottom: 12 }}>EXPERTISE</p>
        <h2 className="editorial-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#F0EDE8" }}>
          Tech Stack
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            style={{
              padding: 22,
              borderRadius: 14,
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: `1px solid ${category.accent}18`,
              transition: "border-color 0.25s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = `${category.accent}35`)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = `${category.accent}18`)}
          >
            <h3 style={{
              color: category.accent,
              fontSize: "0.72rem",
              fontWeight: 700,
              marginBottom: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "JetBrains Mono, monospace",
            }}>
              {category.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} style={{
                  background: `${category.accent}0D`,
                  border: `1px solid ${category.accent}20`,
                  color: "#9C9890",
                  padding: "5px 12px",
                  borderRadius: 4,
                  fontSize: "0.78rem",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
