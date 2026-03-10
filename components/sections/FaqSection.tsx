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
    <section id="faq" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            S O M E &nbsp; D O U B T S
          </p>
          <h2
            className="serif-heading"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)", color: "#fff", marginBottom: 12, lineHeight: 1.25 }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: "#8B9CB8", fontSize: "1rem" }}>Your answers await right here</p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              style={{
                background: "#111F33",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "22px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span style={{ color: "#fff", fontWeight: 600, fontSize: "1rem" }}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "#4ADE80", fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{
                      padding: "0 24px 22px",
                      color: "#8B9CB8",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
