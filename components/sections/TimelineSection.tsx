"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const milestones = [
  {
    year: "2020",
    type: "Education",
    title: "B.Tech @ IKGPTU",
    desc: "B.Tech in Computer Engineering at I.K Gujral Punjab Technical University (2020–2024). Graduated with CGPA: 7.5.",
    accent: "#4ADE80",
  },
  {
    year: "2021",
    type: "Project",
    title: "Brain Tumor AI Classifier",
    desc: "Built a CNN-based MRI classifier with 97.3% accuracy using TensorFlow & Keras. Adopted by 200+ medical students.",
    accent: "#A78BFA",
  },
  {
    year: "2022",
    type: "Project",
    title: "StudyNotion Ed-Tech Platform",
    desc: "Full MERN stack Ed-Tech platform with Razorpay payments, Cloudinary streaming, and real-time analytics.",
    accent: "#FBBF24",
  },
  {
    year: "2023",
    type: "Internship",
    title: "SDE Intern — MedGenix",
    desc: "Built REST APIs and React dashboards for a healthcare startup. Improved API response time by 40%.",
    accent: "#60A5FA",
  },
  {
    year: "2024",
    type: "Project",
    title: "Multimodal Surveillance AI",
    desc: "Real-time AI surveillance system with <50ms latency using DETR, ViT/FAISS, Zero-Shot CLIP, and FastAPI.",
    accent: "#4ADE80",
  },
  {
    year: "2024",
    type: "Project",
    title: "AI Career Coach",
    desc: "Event-driven ML platform with NLP-based skill gap analysis, Clerk auth, and NeonDB on Next.js 15.",
    accent: "#60A5FA",
  },
  {
    year: "2024",
    type: "Education",
    title: "M.Tech AI @ IIT Patna",
    desc: "M.Tech in Artificial Intelligence and Data Science at IIT Patna (Expected August 2026). CPI: 9.26.",
    accent: "#4ADE80",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            T H E &nbsp; J O U R N E Y
          </p>
          <h2
            className="serif-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", marginBottom: 14 }}
          >
            My Story
          </h2>
          <p style={{ color: "#8B9CB8", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
            From writing my first line of code to shipping real AI systems
          </p>
        </div>

        {/* Timeline Items */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(255,255,255,0.07)",
            transform: "translateX(-50%)",
          }} />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: 48,
                  position: "relative",
                }}
              >
                {/* Dot in center */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: 20,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: m.accent,
                  transform: "translateX(-50%)",
                  boxShadow: `0 0 12px ${m.accent}80`,
                  zIndex: 1,
                }} />

                {/* Card */}
                <div style={{
                  width: "calc(50% - 36px)",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${m.accent}30`,
                  borderRadius: 16,
                  padding: "20px 24px",
                  textAlign: isLeft ? "right" : "left",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: isLeft ? "flex-end" : "flex-start", marginBottom: 8 }}>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: m.accent,
                      background: `${m.accent}15`,
                      border: `1px solid ${m.accent}30`,
                      padding: "2px 10px",
                      borderRadius: 999,
                    }}>
                      {m.type}
                    </span>
                    <span style={{ color: "#8B9CB8", fontSize: "0.8rem" }}>{m.year}</span>
                  </div>
                  <h4 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{m.title}</h4>
                  <p style={{ color: "#8B9CB8", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
