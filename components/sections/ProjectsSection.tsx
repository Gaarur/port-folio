"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    tag: "AI / ML",
    year: "2024",
    title: "Multimodal Surveillance AI",
    headline: "Real-time AI surveillance\nwith <50ms latency",
    bullets: [
      "Object detection with DETR & vector ReID with ViT/FAISS",
      "Dynamic attribute recognition using Zero-Shot CLIP",
      "Event logging via SentenceTransformers, RoBERTa & Flan-T5",
    ],
    tech: ["FastAPI", "PyTorch", "FAISS", "Next.js", "Docker"],
    github: "https://github.com/Garrur/MULTI_MODEL",
    live: "https://multi-model-nu.vercel.app/",
    bg: "#1A3A2E",
    accentColor: "#4ADE80",
    mockupBg: "#0F2A1E",
    icon: "📹"
  },
  {
    tag: "FULL STACK AI",
    year: "2024",
    title: "AI Career Coaching Platform",
    headline: "ML-driven resume &\ninterview prep",
    bullets: [
      "Scalable event-driven backend using NeonDB & Inngest",
      "Dynamic skill gap analysis via NLP algorithms",
      "Secure authentication & session management with Clerk",
    ],
    tech: ["Next.js", "NeonDB", "Prisma", "Inngest", "OpenAI"],
    github: "https://github.com/Garrur/AI-Career",
    live: "https://ai-career-pearl.vercel.app/",
    bg: "#1A2B3A",
    accentColor: "#60A5FA",
    mockupBg: "#0F1A2E",
    icon: "💼"
  },
  {
    tag: "FULL STACK",
    year: "2023",
    title: "StudyNotion Ed-Tech",
    headline: "Comprehensive MERN\nEd-Tech ecosystem",
    bullets: [
      "RESTful Node.js backend with JWT & Razorpay integration",
      "Optimized React client with Cloudinary media streaming",
      "Real-time student analytics & enrollment dashboard",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Garrur/Study",
    live: "https://study-rouge-three.vercel.app/",
    bg: "#3A2A1E",
    accentColor: "#FBBF24",
    mockupBg: "#2E1A0F",
    icon: "📚"
  },
  {
    tag: "DEEP LEARNING",
    year: "2021",
    title: "Brain Tumor AI Classifier",
    headline: "CNN-based MRI scanner\nwith 97.3% accuracy",
    bullets: [
      "High-precision diagnostic model utilizing Sequential CNN",
      "Optimized generalization via data augmentation & Dropout",
      "Used by 200+ medical students as an open-source model",
    ],
    tech: ["TensorFlow", "Keras", "CNN", "Python"],
    github: "https://github.com/Garrur/Brain-Tumor",
    live: "https://brain-tumor-sepia.vercel.app/",
    bg: "#2A1E3A",
    accentColor: "#A78BFA",
    mockupBg: "#1E102E",
    icon: "🧠"
  }
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const otherProjects = [
  {
    title: "JobPilot",
    desc: "Job portal platform",
    live: "https://jobpilot-sable.vercel.app",
    github: ""
  },
  {
    title: "Invoicess",
    desc: "Invoice management system",
    live: "https://invoicess-two.vercel.app",
    github: ""
  },
  {
    title: "Study Classes",
    desc: "LMS and classes platform",
    live: "https://classes-ecru-ten.vercel.app/",
    github: ""
  },
  {
    title: "Floor Plan",
    desc: "Interactive floor planning tool",
    live: "https://floor-plan-mu.vercel.app/",
    github: ""
  },
  {
    title: "Hospi",
    desc: "Hospital management system",
    live: "https://hospi-tan.vercel.app/",
    github: ""
  },
  {
    title: "Multi-Tenant Platform",
    desc: "Scalable multi-tenant architecture",
    live: "",
    github: "https://github.com/Garrur/Multi-Tenant-Platform"
  },
  {
    title: "AccessWorld",
    desc: "Accessibility focused tool",
    live: "",
    github: "https://github.com/Garrur/AcessWorld"
  },
  {
    title: "SEnseAI",
    desc: "AI-powered sensor data analysis",
    live: "",
    github: "https://github.com/Garrur/SEnseAI"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const resetTriggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Reset when the entire Projects section leaves the viewport
  useEffect(() => {
    if (!showAll) return;
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
      if (isOutOfView) {
        setShowAll(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAll]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "100px 0", position: "relative" }}>
      {/* Invisible trigger div at the very top */}
      <div ref={resetTriggerRef} style={{ position: "absolute", top: 0, height: 10, width: "100%" }} />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            C U R A T E D &nbsp; W O R K
          </p>
          <h2
            className="serif-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", marginBottom: 14 }}
          >
            Featured Case Studies
          </h2>
          <p style={{ color: "#8B9CB8", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
            Compilation of projects that reflect my engineering & AI expertise
          </p>
        </div>

        {/* Project panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              style={{
                position: "sticky",
                top: `calc(100px + ${i * 24}px)`,
                background: p.bg,
                borderRadius: 24,
                padding: "48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                minHeight: 280,
                transformOrigin: "top",
                zIndex: i,
                boxShadow: `0 0 60px 0 ${p.accentColor}18`,
              }}
            >
              {/* Background glow blob */}
              <div style={{
                position: "absolute",
                top: "-30%",
                right: "-10%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${p.accentColor}22 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute",
                bottom: "-20%",
                left: "10%",
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${p.accentColor}12 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              {/* Content */}
              <div>
                <p style={{
                  color: p.accentColor,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  {p.tag} · {p.year}
                </p>
                <h3
                  className="serif-heading"
                  style={{ fontSize: "1.85rem", color: "#fff", marginBottom: 20, whiteSpace: "pre-line" }}
                >
                  {p.headline}
                </h3>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 20 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#8B9CB8", fontSize: "0.9rem" }}>
                      <span style={{ color: p.accentColor, marginTop: 2 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding: "4px 12px",
                      borderRadius: 9999,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ccc",
                      fontSize: "0.75rem",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Link href={p.live} target="_blank" className="btn-card">
                    View Live ↗
                  </Link>
                  <Link href={p.github} target="_blank" className="btn-outline" style={{ padding: "8px 20px", fontSize: "0.85rem" }}>
                    Code
                  </Link>
                </div>
              </div>

              {/* Mockup panel */}
              <div style={{
                background: p.mockupBg,
                borderRadius: 16,
                height: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                position: "relative",
              }}>
                <div style={{ textAlign: "center", padding: 24 }}>
                  <div style={{
                    fontSize: "3rem",
                    marginBottom: 12,
                  }}>
                    {p.icon}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", fontFamily: "monospace" }}>
                    {p.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View More Overlay at the end of scroll */}
          {!showAll && (
            <div style={{
              marginTop: 120, // push it down so the user can see the last card before it covers it
              padding: "100px 0 60px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: projects.length + 1,
              background: "linear-gradient(to bottom, rgba(13,25,41,0) 0%, rgba(13,25,41,0.8) 40%, #0D1929 100%)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              margin: "0 -24px", // extend past padding if needed
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button 
                  onClick={() => setShowAll(true)}
                  className="btn-primary"
                  style={{
                    fontSize: "1.1rem",
                    padding: "16px 40px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  View More Projects ↗
                </button>
              </motion.div>
            </div>
          )}

          {/* Expanded Projects Grid */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  marginTop: 80,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 24,
                  position: "relative",
                  zIndex: projects.length + 5,
                  background: "#0D1929", // the dark app background
                  padding: "40px 0 80px 0",
                  margin: "0 -24px", // to expand past container bounds for full bleed background
                  paddingLeft: 24,
                  paddingRight: 24,
                  boxShadow: "0 -40px 40px #0D1929", // blend into the top
                }}
              >
                {otherProjects.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 16,
                      padding: 24,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74, 222, 128, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255, 255, 255, 0.03)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                    }}
                  >
                    <div>
                      <h4 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: 8, fontWeight: 600 }}>{p.title}</h4>
                      <p style={{ color: "#8B9CB8", fontSize: "0.95rem", margin: 0 }}>{p.desc}</p>
                    </div>
                    <div style={{ marginTop: "auto", display: "flex", gap: 12 }}>
                      {p.live && (
                        <Link href={p.live} target="_blank" className="btn-card" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                          View Live ↗
                        </Link>
                      )}
                      {p.github && (
                        <Link href={p.github} target="_blank" className="btn-outline" style={{ padding: "7px 16px", fontSize: "0.85rem" }}>
                          Code
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
