"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const TYPEWRITER_WORDS = [
  "AI Systems",
  "Full Stack Apps",
  "ML Research",
  "Scalable Platforms",
  "Software Development",
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
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

const SPARKLES = [
  { top: "18%", left: "12%", size: 20, delay: 0 },
  { top: "30%", left: "82%", size: 14, delay: 0.5 },
  { top: "62%", left: "88%", size: 10, delay: 1 },
  { top: "72%", left: "8%",  size: 16, delay: 0.8 },
  { top: "15%", left: "55%", size: 8,  delay: 1.4 },
  { top: "50%", left: "92%", size: 22, delay: 0.3 },
  { top: "85%", left: "20%", size: 12, delay: 0.6 },
];

function Sparkle({ style, delay, size }: { style?: React.CSSProperties; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ ...style, color: "#4ADE80", fontSize: size }}
      animate={{ opacity: [1, 0.4, 1], rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
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
      <span style={{ color: "#4ADE80" }}>{word}</span>
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "0.85em",
          background: "#4ADE80",
          marginLeft: 3,
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const TECH_BADGES = [
  { label: "React",       color: "#61DAFB", top: "8%",  left: "62%" },
  { label: "Python",      color: "#FFD34E", top: "22%", left: "15%" },
  { label: "Next.js",     color: "#FFFFFF", top: "68%", left: "18%" },
  { label: "TensorFlow",  color: "#FF8A65", top: "72%", left: "65%" },
  { label: "TypeScript",  color: "#3B82F6", top: "12%", left: "78%" },
  { label: "FastAPI",     color: "#4ADE80", top: "55%", left: "82%" },
];

function FloatingBadge({ badge, delay }: { badge: typeof TECH_BADGES[0], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.7, 1, 0.7],
        y: [0, -10, 0],
        x: [0, 5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border"
      style={{ 
        top: badge.top, 
        left: badge.left,
        backgroundColor: `${badge.color}10`,
        borderColor: `${badge.color}30`,
        color: badge.color,
        fontSize: "0.75rem",
        fontWeight: 600,
        zIndex: 5,
        backdropFilter: "blur(4px)",
        boxShadow: `0 0 20px ${badge.color}15`,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: badge.color }} />
      {badge.label}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background rings */}
      <div className="hero-ring" />
      <div className="hero-ring-border" />
      <div className="hero-ring-border-2" />

      {/* Scattered sparkles */}
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} style={{ top: s.top, left: s.left }} delay={s.delay} size={s.size} />
      ))}

      {/* Floating Tech Badges */}
      {TECH_BADGES.map((badge, i) => (
        <FloatingBadge key={badge.label} badge={badge} delay={i * 0.2} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="/avatar.png"
              alt="Utkarsh Raj"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 9999,
            background: "#0A1711",
            border: "1px solid rgba(74,222,128,0.1)",
            marginBottom: 28,
          }}
        >
          <motion.span
            animate={{ boxShadow: ["0 0 0px 0px rgba(74,222,128,0)", "0 0 10px 3px rgba(74,222,128,0.6)", "0 0 0px 0px rgba(74,222,128,0)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }}
          />
          <span style={{ color: "#E2E8F0", fontSize: "0.80rem", fontWeight: 500 }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="serif-heading"
          style={{ 
            fontSize: "clamp(2rem, 8vw, 3.2rem)", 
            marginBottom: 20, 
            color: "#fff", 
            lineHeight: 1.15,
            letterSpacing: "-0.01em"
          }}
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
            color: "#8B9CB8",
            fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
            lineHeight: 1.6,
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          I&apos;m Utkarsh Raj, an M.Tech AI student at IIT Patna.
          <br className="hidden sm:block" />
          My interest lies in AI systems, software development,
          <br className="hidden sm:block" />
          full-stack web apps, and research.
        </motion.p>

        {/* Social icon circles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center"
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/Garrur",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
              className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-250 border border-white/12 bg-white/3 hover:border-green-400/50 hover:text-green-400 hover:-translate-y-0.5"
              style={{
                color: "#8B9CB8",
                fontSize: s.label === "LeetCode" ? "0.75rem" : "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {s.icon}
            </Link>
          ))}
        </motion.div>

        {/* Resume download button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ marginTop: 20 }}
        >
          <a
            href="/Utkarsh_Raj_2408_Resume.pdf"
            download="Utkarsh_Raj_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 24px",
              borderRadius: 9999,
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.25)",
              color: "#4ADE80",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(74,222,128,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,222,128,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(74,222,128,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,222,128,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
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
