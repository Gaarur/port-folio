"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    index: "01",
    tag: "AI / ML",
    year: "2025",
    title: "Multimodal Surveillance AI",
    tagline: "Real-time AI surveillance with <50ms latency",
    description:
      "A production-grade multimodal surveillance system combining object detection, vector-based re-identification, and natural-language event logging. Built for scale with a Next.js frontend and FastAPI backend.",
    bullets: [
      "Object detection with DETR & vector ReID using ViT/FAISS",
      "Dynamic attribute recognition via Zero-Shot CLIP",
      "Event logging with SentenceTransformers, RoBERTa & Flan-T5",
    ],
    tech: ["FastAPI", "PyTorch", "FAISS", "CLIP", "Next.js", "Docker"],
    github: "https://github.com/Garrur/MULTI_MODEL",
    live: "https://multi-model-nu.vercel.app/",
    emoji: "📹",
    tag_color: "rust",
  },
  {
    index: "02",
    tag: "Full Stack AI",
    year: "2023",
    title: "AI Career Coaching Platform",
    tagline: "ML-driven resume analysis & interview preparation",
    description:
      "A scalable career intelligence platform with dynamic skill-gap analysis, AI-powered resume feedback, and personalised interview prep. Built on an event-driven architecture for reliability at scale.",
    bullets: [
      "Scalable event-driven backend with NeonDB & Inngest",
      "Dynamic skill gap analysis via NLP algorithms",
      "Secure auth with Clerk & session management",
    ],
    tech: ["Next.js", "NeonDB", "Prisma", "Inngest", "OpenAI"],
    github: "https://github.com/Garrur/AI-Career",
    live: "https://ai-career-pearl.vercel.app/",
    emoji: "💼",
    tag_color: "olive",
  },
  {
    index: "03",
    tag: "Full Stack",
    year: "2023",
    title: "StudyNotion — Ed-Tech Platform",
    tagline: "Comprehensive MERN Ed-Tech ecosystem",
    description:
      "End-to-end education platform with JWT auth, Razorpay payments, Cloudinary media streaming, and real-time analytics. Used as a production reference for LMS architecture.",
    bullets: [
      "RESTful Node.js backend with JWT & Razorpay integration",
      "Optimised React client with Cloudinary media streaming",
      "Real-time student analytics & enrollment dashboard",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
    github: "https://github.com/Garrur/Study",
    live: "https://study-rouge-three.vercel.app/",
    emoji: "📚",
    tag_color: "sand",
  },
  {
    index: "04",
    tag: "Deep Learning",
    year: "2024",
    title: "Brain Tumor AI Classifier",
    tagline: "CNN-based MRI scanner with 97.3% accuracy",
    description:
      "High-precision diagnostic model for brain tumour classification from MRI scans. Deployed as an open-source resource used by medical students and researchers.",
    bullets: [
      "Sequential CNN architecture with data augmentation & Dropout",
      "97.3% diagnostic accuracy on held-out test set",
      "Adopted by 200+ medical students as open-source tool",
    ],
    tech: ["TensorFlow", "Keras", "CNN", "Python", "NumPy"],
    github: "https://github.com/Garrur/Brain-Tumor",
    live: "https://brain-tumor-sepia.vercel.app/",
    emoji: "🧠",
    tag_color: "olive",
  },
];

const others = [
  { title: "JobPilot", desc: "Job portal platform", live: "https://jobpilot-sable.vercel.app" },
  { title: "Invoicess", desc: "Invoice management system", live: "https://invoicess-two.vercel.app" },
  { title: "Study Classes", desc: "LMS and classes platform", live: "https://classes-ecru-ten.vercel.app/" },
  { title: "Floor Plan", desc: "Interactive floor planning tool", live: "https://floor-plan-mu.vercel.app/" },
  { title: "Hospi", desc: "Hospital management system", live: "https://hospi-tan.vercel.app/" },
  { title: "MockPay", desc: "Payment gateway SDK & dashboard", live: "", github: "https://github.com/Garrur/Multi-Tenant-Platform" },
];

function tagStyle(color: string) {
  if (color === "rust") return { background: "#F5DCD9", color: "#A44A3F" };
  if (color === "olive") return { background: "#E0E5CC", color: "#6B705C" };
  return { background: "#F7EDDE", color: "#5D4A2E" };
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "120px 0", background: "#F1EDE7" }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p className="label-section reveal" style={{ marginBottom: 20 }}>Selected Work</p>
            <h2
              className="reveal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                letterSpacing: "-0.025em",
                color: "#1A1A1A",
                lineHeight: 1.08,
              }}
            >
              Featured<br />
              <em style={{ color: "#A44A3F" }}>Case Studies</em>
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.925rem",
              color: "#7A6E6A",
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            A curated selection of projects spanning AI research, full-stack engineering, and deep learning.
          </p>
        </div>

        {/* Project Rows — Case Study Style */}
        <div>
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={p.index}
                className="reveal project-case-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "72px",
                  alignItems: "center",
                  padding: "72px 0",
                  borderTop: "1px solid #D4CDBE",
                  ...(i === projects.length - 1 ? { borderBottom: "1px solid #D4CDBE" } : {}),
                }}
              >
                {/* Image block */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div
                    style={{
                      aspectRatio: "4/3",
                      background: "#EBE8E2",
                      border: "1px solid #D4CDBE",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "5rem",
                      position: "relative",
                      overflow: "hidden",
                      transition: "transform 0.4s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1.015)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                    }}
                  >
                    {/* Index watermark */}
                    <span
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 20,
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 800,
                        fontSize: "4rem",
                        color: "rgba(164,74,63,0.08)",
                        lineHeight: 1,
                      }}
                    >
                      {p.index}
                    </span>
                    {p.emoji}
                  </div>
                </div>

                {/* Content block */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  {/* Tag + year */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span
                      className="tag-category"
                      style={{ ...tagStyle(p.tag_color), fontSize: "0.65rem" }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "0.72rem",
                        color: "#A89F9B",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      letterSpacing: "-0.02em",
                      color: "#1A1A1A",
                      lineHeight: 1.15,
                      marginBottom: 12,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#A44A3F",
                      marginBottom: 18,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {p.tagline}
                  </p>

                  {/* Divider */}
                  <div style={{ width: 32, height: 1, background: "#D4CDBE", marginBottom: 18 }} />

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.90rem",
                      color: "#3D3835",
                      lineHeight: 1.75,
                      marginBottom: 20,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Bullets */}
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "0.83rem",
                          color: "#7A6E6A",
                          lineHeight: 1.6,
                          marginBottom: 8,
                        }}
                      >
                        <span style={{ color: "#A44A3F", marginTop: 3, fontSize: "0.6rem" }}>▪</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
                    {p.tech.map((t) => (
                      <span key={t} className="skill-chip" style={{ fontSize: "0.72rem", padding: "4px 10px" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.82rem", padding: "10px 20px" }}>
                      View Live ↗
                    </Link>
                    <Link href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.82rem", padding: "10px 20px" }}>
                      GitHub ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other projects */}
        <div style={{ marginTop: 80 }}>
          <p className="label-section reveal" style={{ marginBottom: 32 }}>More Projects</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#D4CDBE",
              border: "1px solid #D4CDBE",
            }}
            className="other-grid"
          >
            {others.map((p, i) => (
              <div
                key={i}
                className="reveal"
                style={{ background: "#F1EDE7", padding: "28px 24px", transition: "background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#EBE8E2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#F1EDE7"; }}
              >
                <h4
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#1A1A1A",
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#7A6E6A", marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 10 }}>
                  {p.live && (
                    <Link href={p.live} target="_blank" className="btn-ghost" style={{ fontSize: "0.78rem" }}>
                      Live ↗
                    </Link>
                  )}
                  {p.github && (
                    <Link href={p.github} target="_blank" className="btn-ghost" style={{ fontSize: "0.78rem" }}>
                      Code ↗
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-case-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .project-case-row > div { order: unset !important; }
          .other-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .other-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
