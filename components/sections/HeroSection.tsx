"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import TechAura from "@/components/TechAura";

const TYPEWRITER_WORDS = [
  "AI Systems",
  "Full Stack Apps",
  "ML Research",
  "Scalable Platforms",
  "Neural Networks",
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setIsDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setIsDeleting(false); setWordIndex((i) => i + 1); }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

const SPARKLES = [
  { top: "14%", left: "8%",  size: 18, delay: 0 },
  { top: "25%", left: "88%", size: 12, delay: 0.6 },
  { top: "65%", left: "92%", size: 8,  delay: 1.1 },
  { top: "75%", left: "6%",  size: 14, delay: 0.9 },
  { top: "12%", left: "52%", size: 6,  delay: 1.5 },
  { top: "48%", left: "94%", size: 20, delay: 0.2 },
  { top: "88%", left: "22%", size: 10, delay: 0.7 },
];

function Sparkle({ style, delay, size }: { style?: React.CSSProperties; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ ...style, color: "#E8FF4D", fontSize: size, opacity: 0.6 }}
      animate={{ opacity: [0.6, 0.2, 0.6], rotate: [0, 25, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      ✦
    </motion.div>
  );
}

function TypewriterLine() {
  const word = useTypewriter(TYPEWRITER_WORDS);
  return (
    <span>
      <span style={{ color: "#E8FF4D" }}>{word}</span>
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "0.85em",
          background: "#E8FF4D",
          marginLeft: 3,
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const TECH_BADGES = [
  { label: "React",      color: "#C8FF8C", top: "10%",  left: "62%" },
  { label: "Python",     color: "#E8FF4D", top: "24%",  left: "14%" },
  { label: "Next.js",    color: "#F0EDE8", top: "70%",  left: "16%" },
  { label: "TensorFlow", color: "#FF5C35", top: "74%",  left: "66%" },
  { label: "PyTorch",    color: "#FF8C6A", top: "42%",  left: "9%"  },
  { label: "FastAPI",    color: "#C8FF8C", top: "57%",  left: "84%" },
  { label: "TypeScript", color: "#E8FF4D", top: "15%",  left: "80%" },
  { label: "Docker",     color: "#F0EDE8", top: "82%",  left: "12%" },
  { label: "LangChain",  color: "#FF5C35", top: "33%",  left: "88%" },
];

function FloatingBadge({ badge, delay, active }: { badge: typeof TECH_BADGES[0]; delay: number; active?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.65, 1, 0.65],
        y: [0, -10, 0],
        scale: active ? [1, 1.2, 1] : [1, 1.04, 1],
        boxShadow: active ? [`0 0 16px ${badge.color}25`, `0 0 32px ${badge.color}50`, `0 0 16px ${badge.color}25`] : `0 0 12px ${badge.color}12`,
      }}
      transition={{ duration: active ? 0.5 : 4, repeat: active ? 0 : Infinity, delay: active ? 0 : delay, ease: "easeInOut" }}
      className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        top: badge.top, left: badge.left,
        backgroundColor: active ? `${badge.color}22` : `${badge.color}0D`,
        border: `1px solid ${active ? badge.color + "60" : badge.color + "25"}`,
        color: badge.color,
        fontSize: "0.70rem", fontWeight: 600, fontFamily: "JetBrains Mono, monospace",
        backdropFilter: "blur(8px)", zIndex: active ? 30 : 5,
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: badge.color }} />
      {badge.label}
    </motion.div>
  );
}

function OrbitSystem() {
  const [target, setTarget] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setTarget(Math.floor(Math.random() * TECH_BADGES.length));
      setTimeout(() => setTarget(null), 1200);
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {TECH_BADGES.map((badge, i) => (
        <FloatingBadge key={badge.label} badge={badge} delay={i * 0.2} active={target === i} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: 80, background: "#0A0A0A" }}
    >
      {/* Background glows */}
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      {/* Subtle bottom-left orange glow */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(255,92,53,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} style={{ top: s.top, left: s.left }} delay={s.delay} size={s.size} />
      ))}

      {/* Floating tech badges */}
      <OrbitSystem />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="mb-8 relative flex items-center justify-center w-full max-w-[400px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] -z-10 opacity-60">
            <Suspense fallback={null}>
              <TechAura />
            </Suspense>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(232,255,77,0.25)",
                boxShadow: "0 0 0 4px rgba(232,255,77,0.07), 0 20px 40px rgba(0,0,0,0.5)",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <img src="/avatar.png" alt="Utkarsh Raj" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 9999,
            background: "rgba(232,255,77,0.06)",
            border: "1px solid rgba(232,255,77,0.15)",
            marginBottom: 28,
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8FF4D", display: "inline-block" }}
          />
          <span style={{ color: "#C8FF8C", fontSize: "0.78rem", fontWeight: 600, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editorial-heading"
          style={{ fontSize: "clamp(2.2rem, 8vw, 3.8rem)", marginBottom: 20, color: "#F0EDE8", lineHeight: 1.08 }}
        >
          Building intelligent
          <br />
          <TypewriterLine />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            color: "#9C9890", fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
            lineHeight: 1.65, maxWidth: 480, marginBottom: 40,
            letterSpacing: "-0.01em",
          }}
        >
          I&apos;m <strong style={{ color: "#F0EDE8", fontWeight: 600 }}>Utkarsh Raj</strong>, M.Tech AI @ IIT Patna.
          <br className="hidden sm:block" />
          I build AI systems, full-stack platforms &amp; do ML research.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 md:gap-4 justify-center"
        >
          {[
            {
              label: "GitHub", href: "https://github.com/Garrur",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/", icon: "in" },
            { label: "LeetCode", href: "https://leetcode.com/u/Utkarsh_Raj32/", icon: "</>" },
          ].map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                width: 52, height: 52, borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#9C9890",
                fontSize: s.label === "LeetCode" ? "0.68rem" : "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: s.label === "LeetCode" ? "JetBrains Mono, monospace" : "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,255,77,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#E8FF4D";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,255,77,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#9C9890";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {s.icon}
            </Link>
          ))}
        </motion.div>

        {/* Resume button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ marginTop: 20 }}
        >
          <a
            href="/Utkarsh_Raj_2408_Resume.pdf"
            download="Utkarsh_Raj_Resume.pdf"
            className="btn-neu"
            style={{ padding: "11px 28px", fontSize: "0.9rem" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
