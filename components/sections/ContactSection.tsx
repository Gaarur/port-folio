"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Garrur", icon: "⌥" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/", icon: "in" },
  { label: "LeetCode", href: "https://leetcode.com/u/Utkarsh_Raj32/", icon: "</>" },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function ContactItem({ label, value, copyValue }: { label: string, value: string, copyValue?: string }) {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(copyValue === "none"); // Availability is always revealed

  const handleClick = () => {
    if (copyValue === "none") return;
    
    if (!revealed) {
      setRevealed(true);
      return;
    }

    // If already revealed, copy
    navigator.clipboard.writeText(copyValue || value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={{ position: "relative", cursor: copyValue === "none" ? "default" : "pointer", textAlign: "center" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTimeout(() => setCopied(false), 200);
      }}
      onClick={handleClick}
    >
      <p style={{ color: "#4ADE80", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>
        {label}
      </p>

      <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.p
              key="hidden"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              style={{ color: "#8B9CB8", fontSize: "1rem", margin: 0 }}
            >
              Click to reveal
            </motion.p>
          ) : (
            <motion.p
              key="revealed"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: hover && copyValue !== "none" ? "#4ADE80" : "#fff", fontSize: "1rem", margin: 0, transition: "color 0.2s" }}
            >
              {value}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {hover && revealed && copyValue !== "none" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: "8px",
              background: "#131E2E",
              border: "1px solid rgba(74, 222, 128, 0.2)",
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              color: copied ? "#4ADE80" : "#fff",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            {copied ? "Copied!" : "Click to copy"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(74,222,128,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="section-label" style={{ marginBottom: 24 }}>L E T ' S &nbsp; C O N N E C T</p>

          <h2
            className="serif-heading"
            style={{
              fontSize: "clamp(2rem, 8vw, 6rem)",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Have a project in mind?
            <br />
            <span style={{ color: "#4ADE80" }}>Let&apos;s work together.</span>
          </h2>

          <p style={{ color: "#8B9CB8", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 48px" }}>
            I&apos;m actively looking for opportunities in AI engineering and full-stack development.
            Whether you have a project idea, a role to discuss, or just want to say hi — my inbox is always open.
          </p>

          {/* CTA links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "1.05rem", padding: "16px 36px" }}
            >
              Say Hello ✉️
            </Link>
            <a
              href="https://github.com/Garrur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "1.05rem", padding: "15px 36px" }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center mb-16">
            <ContactItem label="Email" value="uraj33175@gmail.com" />
            <ContactItem label="Location" value="Patna, Bihar, India" />
            <ContactItem label="Availability" value="Open to opportunities" copyValue="none" />
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#111F33",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8B9CB8",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,222,128,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#4ADE80";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8B9CB8";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1080px] mx-auto px-6 pb-12">
        <p className="text-[#4A5A72] text-sm m-0 text-center md:text-left">
          © 2025 Utkarsh Raj · Crafted with Next.js &amp; Framer Motion
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["About", "Projects", "Experience", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-[#4A5A72] text-sm no-underline hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a href="#top" className="text-[#4A5A72] text-sm no-underline hover:text-white transition-colors">
          ↑ Back to top
        </a>
      </div>
    </section>
  );
}
