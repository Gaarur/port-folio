"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/Garrur",                              icon: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/",    icon: "in" },
  { label: "LeetCode", href: "https://leetcode.com/u/Utkarsh_Raj32/",                 icon: "</>" },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function ContactItem({ label, value, copyValue }: { label: string; value: string; copyValue?: string }) {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(copyValue === "none");

  const handleClick = () => {
    if (copyValue === "none") return;
    if (!revealed) { setRevealed(true); return; }
    navigator.clipboard.writeText(copyValue || value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative cursor-pointer text-center group"
      style={{ cursor: copyValue === "none" ? "default" : "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTimeout(() => setCopied(false), 200); }}
      onClick={handleClick}
    >
      <p className="section-label mb-2 opacity-50 text-[0.6rem]">{label}</p>
      <div className="h-7 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.p 
              key="hidden" 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -5 }}
              className="text-[#3A3A3A] text-xs uppercase tracking-widest font-mono"
            >
              Click to reveal
            </motion.p>
          ) : (
            <motion.p 
              key="revealed" 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-bold font-display tracking-tight transition-colors duration-300 ${
                hover && copyValue !== "none" ? "text-[#E8FF4D]" : "text-[#F0EDE8]"
              }`}
            >
              {value}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hover && revealed && copyValue !== "none" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 glass-warm px-3 py-1.5 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider z-20 pointer-events-none ${
              copied ? "text-[#E8FF4D] border-[#E8FF4D]/30" : "text-[#F0EDE8] border-white/10"
            }`}
          >
            {copied ? "Copied" : "Click to copy"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative pt-32 pb-0 overflow-hidden bg-[#0A0A0A]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8FF4D]/05 blur-[100px] pointer-events-none opacity-40 rounded-full" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center"
        >
          <p className="section-label mb-8">Synchronize</p>

          <h2 className="editorial-heading text-5xl md:text-8xl text-[#F0EDE8] mb-10 leading-[1.05]">
            Have a project<br />
            in mind? {" "}
            <span className="text-[#E8FF4D]">Let&apos;s build.</span>
          </h2>

          <p className="text-[#6B6762] text-lg max-w-lg mx-auto mb-16 leading-relaxed letter-spacing-[-0.01em]">
            I&apos;m looking for opportunities to deploy high-impact AI systems. 
            Connect if you want to collaborate on something sophisticated.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <Link href="/contact" className="btn-neu !px-10 !py-5 !text-base">
              Say Hello ✉
            </Link>
            <a
              href="https://github.com/Garrur"
              target="_blank" rel="noopener noreferrer"
              className="btn-neu-outline !px-10 !py-4.5 !text-base"
            >
              Review Source ↗
            </a>
          </div>

          {/* Quick Context Grid */}
          <div className="glass rounded-[32px] p-8 md:p-12 mb-20 border-white/[0.03] shadow-2xl relative overflow-hidden group">
            {/* Context line decorative */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8FF4D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 items-center">
              <ContactItem label="Identification" value="uraj33175@gmail.com"   copyValue="uraj33175@gmail.com" />
              <div className="hidden sm:block w-[1px] h-10 bg-white/5 mx-auto" />
              <ContactItem label="Positioning"    value="Patna, Bihar, IN"      copyValue="none" />
              <div className="hidden sm:block w-[1px] h-10 bg-white/5 mx-auto" />
              <ContactItem label="Availability"   value="Active / Open"         copyValue="none" />
            </div>
          </div>

          {/* Discrete Social Links */}
          <div className="flex gap-4 justify-center opacity-60 hover:opacity-100 transition-opacity">
            {SOCIALS.map((s) => (
              <a
                key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#6B6762] hover:text-[#E8FF4D] hover:border-[#E8FF4D]/30 transition-all font-mono text-[0.65rem] font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
}
