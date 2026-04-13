"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Zap } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/#top" },
  { label: "Works",      href: "/#projects" },
  { label: "About",      href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "FAQ",        href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("top");
  const [isOpen, setIsOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["top","projects","skills","about","experience","faq","contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) { 
          setActive(id); 
          break; 
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-5 sm:pt-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full backdrop-blur-3xl transition-all duration-500 ${
            scrolled 
              ? "bg-[#0A0A0A]/90 border border-[#E8FF4D]/20 shadow-[0_8px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(232,255,77,0.05)]" 
              : "bg-[#0A0A0A]/40 border border-white/5"
          }`}
        >
          {/* Logo / Home Toggle */}
          <Link href="/#top" className="flex items-center gap-2 pl-4 pr-3 py-2 group">
             <div className="w-6 h-6 rounded-md bg-[#E8FF4D]/10 flex items-center justify-center border border-[#E8FF4D]/20">
               <Zap size={12} fill="#E8FF4D" className={active === "top" ? "opacity-100" : "opacity-40"} />
             </div>
             <span className={`text-[0.65rem] font-bold tracking-[0.15em] uppercase font-mono transition-colors ${
               active === "top" ? "text-white" : "text-[#6B6762]"
             }`}>Base</span>
          </Link>

          <div className="h-4 w-[1px] bg-white/10 mx-1" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5 px-1">
            {navLinks.map((link) => {
              const id = link.href.split("#")[1];
              const isActive = active === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest font-mono transition-all duration-300 relative group ${
                    isActive ? "text-[#E8FF4D]" : "text-[#9C9890] hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#E8FF4D]/10 rounded-full border border-[#E8FF4D]/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-1 hidden md:block" />

          {/* CTA - Desktop */}
          <Link
            href="/contact"
            className="btn-neu !px-6 !py-2.5 !text-[0.65rem] !rounded-full !shadow-none hover:!shadow-[3px_3px_0_#000] transition-all ml-1 hidden sm:inline-flex"
          >
            Connect ↗
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-all ${
              isOpen ? "bg-[#E8FF4D]/10 text-[#E8FF4D]" : "text-[#9C9890]"
            }`}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Mobile CTA Icon */}
          <Link
            href="/contact"
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#E8FF4D] text-[#0A0A0A] border-2 border-black active:translate-y-0.5 active:translate-x-0.5 transition-transform"
          >
            <MessageSquare size={16} />
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-[#0A0A0A]/95 backdrop-blur-2xl md:hidden overflow-hidden flex items-center justify-center p-8"
          >
             {/* Subgrid background */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#E8FF4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
             
             <div className="w-full max-w-sm space-y-12 relative z-10">
                <p className="section-label text-center">Navigation Context</p>
                <div className="space-y-4">
                  {navLinks.map((link, idx) => {
                    const id = link.href.split("#")[1];
                    const isActive = active === id;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${
                            isActive 
                              ? "bg-[#E8FF4D]/10 border-[#E8FF4D]/30 text-[#E8FF4D]" 
                              : "bg-white/[0.02] border-white/5 text-[#9C9890] active:bg-white/[0.05]"
                          }`}
                        >
                          <span className="text-xl font-bold font-display tracking-tight">{link.label}</span>
                          {isActive && <div className="w-2 h-2 rounded-full bg-[#E8FF4D] shadow-[0_0_10px_#E8FF4D]" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-neu w-full py-6 text-base text-center justify-center rounded-2xl"
                  >
                    Initialize Contact ↗
                  </Link>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
