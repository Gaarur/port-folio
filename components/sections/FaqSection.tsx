"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Are you available for full-time roles?",
    a: "Yes! I'm actively looking for full-time AI Engineering or Full Stack Developer roles after completing my M.Tech at IIT Patna in 2026. I'm also open to internships and research collaborations.",
  },
  {
    q: "What tech stack do you specialise in?",
    a: "On the AI/ML side: PyTorch, TensorFlow, LangChain, OpenCV, and HuggingFace. On the web side: Next.js, React, Node.js, FastAPI, and PostgreSQL/NeonDB for backends. Cloud: Docker, AWS, and Vercel.",
  },
  {
    q: "Can you work on freelance or contract projects?",
    a: "Absolutely. I take on select freelance projects that align with my expertise — particularly AI system integrations, full-stack web applications, and ML model deployment.",
  },
  {
    q: "What kind of AI projects have you worked on?",
    a: "I've built a real-time multimodal driver surveillance system (<50ms latency), a multi-model AI chat platform with RAG pipelines, and a CNN-based brain tumor classifier with 97.3% accuracy published as open-source.",
  },
  {
    q: "Where are you based and can you work remotely?",
    a: "I'm based in Bihar, India (currently at IIT Patna campus). I'm fully comfortable with remote work and open to relocation for the right opportunity.",
  },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "100px 0", background: "#0A0A0A", position: "relative" }}>
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,92,53,0.04) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>SOME&nbsp;DOUBTS</p>
          <h2 className="editorial-heading" style={{
            fontSize: "clamp(1.75rem, 6vw, 3rem)", color: "#F0EDE8",
            marginBottom: 10, lineHeight: 1.1,
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: "#6B6762", fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
            Your answers await right here
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                style={{
                  background: isOpen ? "rgba(232,255,77,0.04)" : "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: isOpen ? "1px solid rgba(232,255,77,0.2)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: "100%", padding: "20px 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
                  }}
                >
                  <span className="editorial-heading" style={{
                    color: isOpen ? "#E8FF4D" : "#F0EDE8",
                    fontWeight: 600, fontSize: "0.95rem",
                    transition: "color 0.2s ease",
                  }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      color: isOpen ? "#E8FF4D" : "#6B6762",
                      fontSize: "1.3rem", flexShrink: 0, lineHeight: 1,
                      fontWeight: 300, display: "inline-block",
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        padding: "0 24px 20px",
                        color: "#9C9890", fontSize: "0.875rem",
                        lineHeight: 1.72, margin: 0,
                        letterSpacing: "-0.01em",
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
