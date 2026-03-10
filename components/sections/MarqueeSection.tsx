"use client";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js 15", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Django", "WebSockets", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "NeonDB", "MongoDB", "Firebase", "FAISS (VectorDB)", "Redis"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "Hugging Face", "TensorFlow", "Keras", "OpenCV", "Sentence-Transformers", "LangChain"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Docker", "Vercel", "Prisma", "AWS S3", "Cloudinary", "Git/GitHub", "PyTorch Geometric", "Postman", "Linux"],
  },
];

export default function MarqueeSection() {
  return (
    <section className="py-20 px-6 relative max-w-6xl mx-auto z-10">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p className="section-label" style={{ marginBottom: 12 }}>
          E X P E R T I S E
        </p>
        <h2
          className="serif-heading"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff" }}
        >
          Skills
        </h2>
      </div>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="glass"
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <h3 
              style={{ 
                color: "#4ADE80", 
                fontSize: "1.2rem", 
                fontWeight: 600, 
                marginBottom: "16px",
                letterSpacing: "0.02em"
              }}
            >
              {category.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#E2E8F0",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
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
