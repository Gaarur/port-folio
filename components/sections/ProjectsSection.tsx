"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    accentColor: "#E8FF4D",
    icon: "📹",
    colSpan: 7,
  },
  {
    tag: "FULL STACK AI",
    year: "2024",
    title: "AI Career Coaching Platform",
    headline: "ML-driven resume &\ninterview prep",
    bullets: [
      "Scalable event-driven backend using NeonDB & Inngest",
      "Dynamic skill gap analysis via NLP algorithms",
      "Secure authentication with Clerk & session management",
    ],
    tech: ["Next.js", "NeonDB", "Prisma", "Inngest", "OpenAI"],
    github: "https://github.com/Garrur/AI-Career",
    live: "https://ai-career-pearl.vercel.app/",
    accentColor: "#FF5C35",
    icon: "💼",
    colSpan: 5,
  },
  {
    tag: "FULL STACK",
    year: "2023",
    title: "StudyNotion Ed-Tech",
    headline: "Comprehensive MERN\nEd-Tech ecosystem",
    bullets: [
      "RESTful Node.js backend with JWT & Razorpay integration",
      "Optimised React client with Cloudinary media streaming",
      "Real-time student analytics & enrollment dashboard",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Garrur/Study",
    live: "https://study-rouge-three.vercel.app/",
    accentColor: "#FF8C6A",
    icon: "📚",
    colSpan: 5,
  },
  {
    tag: "DEEP LEARNING",
    year: "2021",
    title: "Brain Tumor AI Classifier",
    headline: "CNN-based MRI scanner\nwith 97.3% accuracy",
    bullets: [
      "High-precision diagnostic model utilising Sequential CNN",
      "Optimised generalisation via data augmentation & Dropout",
      "Used by 200+ medical students as an open-source model",
    ],
    tech: ["TensorFlow", "Keras", "CNN", "Python"],
    github: "https://github.com/Garrur/Brain-Tumor",
    live: "https://brain-tumor-sepia.vercel.app/",
    accentColor: "#C8FF8C",
    icon: "🧠",
    colSpan: 7,
  },
];

const otherProjects = [
  { title: "JobPilot",             desc: "Job portal platform",                   live: "https://jobpilot-sable.vercel.app",      github: "" },
  { title: "Invoicess",            desc: "Invoice management system",             live: "https://invoicess-two.vercel.app",        github: "" },
  { title: "Study Classes",        desc: "LMS and classes platform",              live: "https://classes-ecru-ten.vercel.app/",   github: "" },
  { title: "Floor Plan",           desc: "Interactive floor planning tool",       live: "https://floor-plan-mu.vercel.app/",      github: "" },
  { title: "Hospi",                desc: "Hospital management system",            live: "https://hospi-tan.vercel.app/",          github: "" },
  { title: "Multi-Tenant Platform",desc: "Scalable multi-tenant architecture",    live: "",                                        github: "https://github.com/Garrur/Multi-Tenant-Platform" },
  { title: "AccessWorld",          desc: "Accessibility focused tool",            live: "",                                        github: "https://github.com/Garrur/AcessWorld" },
  { title: "SEnseAI",              desc: "AI-powered sensor data analysis",       live: "",                                        github: "https://github.com/Garrur/SEnseAI" },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function ProjectCard({ project: p, index: i }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width  / 2) / rect.width)  *  8;
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      animate={{ rotateX: rotation.x, rotateY: rotation.y, scale: rotation.x !== 0 ? 1.01 : 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, opacity: { duration: 0.7, delay: i * 0.1 } }}
      className="relative lg:grid lg:grid-cols-2 lg:gap-10 lg:sticky"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 20,
        padding: "clamp(24px, 5vw, 44px)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        border: `1px solid ${p.accentColor}18`,
        overflow: "hidden",
        minHeight: 280,
        transformOrigin: "center",
        zIndex: i,
        boxShadow: `0 0 60px 0 ${p.accentColor}10, 0 20px 40px rgba(0,0,0,0.4)`,
        transformStyle: "preserve-3d",
        // @ts-ignore
        "--index": i,
        top: `calc(88px + ${i * 24}px)`,
      } as React.CSSProperties}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "-30%", right: "-10%",
        width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${p.accentColor}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ transform: "translateZ(30px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{
            padding: "3px 10px", borderRadius: 4, fontSize: "0.68rem",
            fontWeight: 700, fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.12em", textTransform: "uppercase",
            background: `${p.accentColor}18`, border: `1px solid ${p.accentColor}30`,
            color: p.accentColor,
          }}>
            {p.tag}
          </span>
          <span style={{ fontSize: "0.68rem", color: "#6B6762", fontFamily: "JetBrains Mono, monospace" }}>
            {p.year}
          </span>
        </div>

        <h3
          className="editorial-heading"
          style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", color: "#F0EDE8", marginBottom: 20, whiteSpace: "pre-line" }}
        >
          {p.headline}
        </h3>

        <div style={{ width: 32, height: 2, background: `${p.accentColor}40`, marginBottom: 18 }} />

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          {p.bullets.map((b) => (
            <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#9C9890", fontSize: "0.875rem", lineHeight: 1.5 }}>
              <span style={{ color: p.accentColor, marginTop: 2, fontWeight: 700 }}>✓</span>
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {p.tech.map((t) => (
            <span key={t} style={{
              padding: "4px 10px", borderRadius: 4,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              color: "#9C9890", fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace",
            }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href={p.live} target="_blank" rel="noopener noreferrer"
            className="btn-neu" style={{ fontSize: "0.82rem", padding: "9px 18px" }}>
            Live ↗
          </Link>
          <Link href={p.github} target="_blank" rel="noopener noreferrer"
            className="btn-neu-outline" style={{ fontSize: "0.82rem", padding: "9px 18px" }}>
            GitHub ↗
          </Link>
        </div>
      </div>

      {/* Mockup */}
      <div
        className="w-full lg:w-auto"
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 14,
          aspectRatio: "16/10",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "3.5rem",
          transform: "translateZ(40px) rotateY(-4deg)",
        }}
      >
        {p.icon}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showAll) return;
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) setShowAll(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAll]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "100px 0", position: "relative", background: "#0A0A0A" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(232,255,77,0.04) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(60px)",
      }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>CURATED&nbsp;WORK</p>
          <h2 className="editorial-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#F0EDE8", marginBottom: 14 }}>
            Featured Case Studies
          </h2>
          <p style={{ color: "#6B6762", fontSize: "0.95rem", maxWidth: 440, letterSpacing: "-0.01em" }}>
            Compilation of projects that reflect my engineering & AI expertise
          </p>
        </div>

        {/* Project panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, perspective: 1000 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}

          {/* View More overlay */}
          {!showAll && (
            <div style={{
              marginTop: 80, padding: "100px 0 60px",
              display: "flex", justifyContent: "center",
              position: "relative", zIndex: projects.length + 1,
              background: "linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 40%, #0A0A0A 100%)",
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
              margin: "0 -24px",
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button onClick={() => setShowAll(true)} className="btn-neu"
                  style={{ fontSize: "1rem", padding: "14px 36px" }}>
                  View More Projects ↗
                </button>
              </motion.div>
            </div>
          )}

          {/* Expanded grid */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative px-0 py-16 mt-16"
                style={{ zIndex: projects.length + 5 }}
              >
                {otherProjects.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14,
                      padding: 22,
                      display: "flex", flexDirection: "column", gap: 14,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(232,255,77,0.04)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,255,77,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div>
                      <h4 className="editorial-heading" style={{ color: "#F0EDE8", fontSize: "1.1rem", marginBottom: 6 }}>{p.title}</h4>
                      <p style={{ color: "#6B6762", fontSize: "0.875rem", margin: 0 }}>{p.desc}</p>
                    </div>
                    <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                      {p.live   && <Link href={p.live}   target="_blank" className="btn-neu"         style={{ padding: "7px 14px", fontSize: "0.78rem" }}>Live ↗</Link>}
                      {p.github && <Link href={p.github} target="_blank" className="btn-neu-outline" style={{ padding: "7px 14px", fontSize: "0.78rem" }}>Code</Link>}
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
