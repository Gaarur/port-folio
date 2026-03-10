"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: "driver",
    title: "Driver Assistant AI",
    emoji: "🚗",
    stages: [
      {
        label: "Problem",
        color: "text-neon-pink",
        border: "border-neon-pink/40",
        bg: "bg-neon-pink/10",
        content:
          "Road accidents caused by drowsy or distracted drivers cost thousands of lives annually. Existing solutions relied on expensive hardware sensors or were too slow for real-time intervention.",
      },
      {
        label: "Solution",
        color: "text-neon-cyan",
        border: "border-neon-cyan/40",
        bg: "bg-neon-cyan/10",
        content:
          "Built a lightweight multi-model pipeline using MobileNet + MediaPipe for face landmark detection. Combined eye aspect ratio analysis, head pose estimation, and attention heatmaps into a unified risk engine.",
      },
      {
        label: "Results",
        color: "text-neon-green",
        border: "border-neon-green/40",
        bg: "bg-neon-green/10",
        content:
          "Achieved 94.2% detection accuracy at 30 FPS on CPU-only hardware. Sub-50ms response latency. Deployable on edge devices with 2GB RAM. WebRTC integration enables live dashboard monitoring.",
      },
    ],
  },
  {
    id: "chat",
    title: "AI Chat Platform",
    emoji: "💬",
    stages: [
      {
        label: "Problem",
        color: "text-neon-pink",
        border: "border-neon-pink/40",
        bg: "bg-neon-pink/10",
        content:
          "Developers and teams needed a unified interface to access multiple AI models (GPT-4, Claude, local LLMs) with persistent context, RAG support, and custom agent definitions.",
      },
      {
        label: "Solution",
        color: "text-neon-cyan",
        border: "border-neon-cyan/40",
        bg: "bg-neon-cyan/10",
        content:
          "Architected a multi-tenant platform using LangChain for model orchestration, NeonDB for vector storage, and a streaming Next.js API. Implemented FAISS-backed RAG with custom document ingestion pipelines.",
      },
      {
        label: "Results",
        color: "text-neon-green",
        border: "border-neon-green/40",
        bg: "bg-neon-green/10",
        content:
          "4.8/5 user satisfaction score in beta testing. 200ms average streaming response latency. Supports 8 different AI providers. 100+ conversations with context persistence across sessions.",
      },
    ],
  },
  {
    id: "coding",
    title: "Coding Platform",
    emoji: "⌨️",
    stages: [
      {
        label: "Problem",
        color: "text-neon-pink",
        border: "border-neon-pink/40",
        bg: "bg-neon-pink/10",
        content:
          "Existing competitive programming platforms lacked adaptive learning paths, instant feedback loops, and AI-guided hints that could scale with a student's skill level over time.",
      },
      {
        label: "Solution",
        color: "text-neon-cyan",
        border: "border-neon-cyan/40",
        bg: "bg-neon-cyan/10",
        content:
          "Built a sandboxed code execution engine using Docker containers with resource limits. Added an LLM-powered hint system that contextually analyzes student code and provides Socratic guidance.",
      },
      {
        label: "Results",
        color: "text-neon-green",
        border: "border-neon-green/40",
        bg: "bg-neon-green/10",
        content:
          "Safe multi-language execution in <2s. AI hints reduce stuck time by 40%. Adaptive difficulty increases problem completion rate by 3× versus static platforms.",
      },
    ],
  },
];

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(caseStudies[0].id);
  const [activeStage, setActiveStage] = useState(0);

  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <section id="case-study" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm">04.</span>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary">
            Case Studies
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-8 border border-glass-border"
        >
          {/* Project tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => { setActive(cs.id); setActiveStage(0); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cs.id
                    ? "bg-neon-cyan/15 border border-neon-cyan/40 text-neon-cyan"
                    : "glass border border-glass-border text-text-secondary hover:text-text-primary"
                }`}
              >
                <span>{cs.emoji}</span>
                {cs.title}
              </button>
            ))}
          </div>

          {/* Timeline stages */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {current.stages.map((stage, idx) => (
              <button
                key={stage.label}
                onClick={() => setActiveStage(idx)}
                className={`flex-1 flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-300 ${
                  activeStage === idx
                    ? `${stage.bg} ${stage.border}`
                    : "glass border-glass-border hover:border-glass-border"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                    activeStage === idx ? `${stage.bg} ${stage.border} ${stage.color}` : "glass border-glass-border text-text-tertiary"
                  }`}
                >
                  {idx + 1}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${activeStage === idx ? stage.color : "text-text-secondary"}`}>
                    {stage.label}
                  </p>
                </div>
                {idx < current.stages.length - 1 && (
                  <ChevronRight size={14} className="text-text-tertiary ml-auto hidden md:block" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${activeStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-2xl border ${current.stages[activeStage].bg} ${current.stages[activeStage].border}`}
            >
              <p className="text-text-secondary leading-relaxed">
                {current.stages[activeStage].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
