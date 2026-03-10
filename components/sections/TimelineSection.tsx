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
          {/* Vertical line - hidden on mobile, left on md, center on lg? Let's just do left-ish on mobile/tablet */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/7 -translate-x-1/2" />

          <div className="flex flex-col gap-8 md:gap-12 pl-10 md:pl-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
                  className={`relative flex w-full md:justify-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div 
                    className="absolute -left-[30px] md:left-1/2 top-7 w-3 h-3 rounded-full -translate-x-1/2 z-10"
                    style={{
                      background: m.accent,
                      boxShadow: `0 0 12px ${m.accent}80`,
                    }}
                  />

                  {/* Card */}
                  <div 
                    className={`w-full md:w-[calc(50%-36px)] bg-white/3 border border-${m.accent}/30 rounded-2xl p-6 text-left ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                    style={{
                      borderColor: `${m.accent}30`
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-[0.7rem] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                        style={{
                          color: m.accent,
                          background: `${m.accent}15`,
                          borderColor: `${m.accent}30`,
                        }}
                      >
                        {m.type}
                      </span>
                      <span className="text-slate-400 text-xs">{m.year}</span>
                    </div>
                    <h4 className="text-white font-semibold text-base mb-2">{m.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed m-0">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
