"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] relative overflow-hidden pt-32 pb-20 px-6 font-sans">
      <Navbar />
      
      {/* Background Glows */}
      <div className="hero-glow" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#FF5C35]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1080px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-3 text-[#6B6762] hover:text-[#E8FF4D] transition-all mb-12 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> 
              <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold font-mono">Back to Base</span>
            </Link>

            <p className="section-label mb-6">Inquiry & Collaboration</p>
            <h1 className="editorial-heading text-6xl md:text-8xl text-[#F0EDE8] mb-10 leading-[1.05]">
              Let&apos;s build <br /> <span className="text-[#E8FF4D]">something real.</span>
            </h1>
            
            <p className="text-[#9C9890] text-lg max-w-md mb-16 leading-relaxed letter-spacing-[-0.01em]">
              I&apos;m currently open to full-time AI roles, research collaborations, and selective freelance engineering projects.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-[#E8FF4D] border-[#E8FF4D]/20 text-xl shadow-[0_0_20px_rgba(232,255,77,0.05)]">✉</div>
                <div>
                  <p className="section-label !mb-1 !text-xs opacity-60">Reach out via email</p>
                  <p className="text-[#F0EDE8] text-xl font-bold font-display">uraj33175@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-[#FF5C35] border-[#FF5C35]/20 text-xl shadow-[0_0_20px_rgba(255,140,106,0.05)]">📍</div>
                <div>
                  <p className="section-label !mb-1 !text-xs opacity-60">Physical context</p>
                  <p className="text-[#F0EDE8] text-xl font-bold font-display">Patna, Bihar, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <div className="glass-warm rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Form subtle grid background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#E8FF4D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="section-label !text-[0.6rem] !mb-0 ml-1 opacity-50">Your Designation / Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[#F0EDE8] placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#E8FF4D]/40 transition-all font-display text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="section-label !text-[0.6rem] !mb-0 ml-1 opacity-50">Email Frequency / Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@world.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[#F0EDE8] placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#E8FF4D]/40 transition-all font-display text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="section-label !text-[0.6rem] !mb-0 ml-1 opacity-50">Subject Header</label>
                  <input 
                    required
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief objective of contact"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[#F0EDE8] placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#E8FF4D]/40 transition-all font-display text-sm"
                  />
                </div>

                <div className="space-y-3">
                  <label className="section-label !text-[0.6rem] !mb-0 ml-1 opacity-50">Message Body</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Structure your thoughts here..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[#F0EDE8] placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#E8FF4D]/40 transition-all font-display text-sm resize-none"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="btn-neu w-full py-5 text-sm font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-3 transition-all disabled:opacity-40"
                >
                  {status === "sending" ? "Transmitting..." : "Initialize Message"}
                  <span className="text-lg">↗</span>
                </button>
              </form>

              {/* Status Overlays */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-12 z-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#E8FF4D]/10 text-[#E8FF4D] flex items-center justify-center text-4xl mb-8 border border-[#E8FF4D]/20 shadow-[0_0_30px_rgba(232,255,77,0.1)]">✦</div>
                    <h3 className="editorial-heading text-4xl text-[#F0EDE8] mb-4">Transmission complete.</h3>
                    <p className="text-[#9C9890] max-w-xs leading-relaxed">I have received your data. Expect a response within one solar day.</p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-12 z-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#FF5C35]/10 text-[#FF5C35] flex items-center justify-center text-4xl mb-8 border border-[#FF5C35]/20 shadow-[0_0_30px_rgba(255,92,53,0.1)]">✕</div>
                    <h3 className="editorial-heading text-4xl text-[#F0EDE8] mb-4">Transmission error.</h3>
                    <p className="text-[#9C9890] max-w-xs leading-relaxed">System failure prevented delivery. Please email manually or retry.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-10 btn-neu-outline !px-8 !py-3 !text-xs"
                    >
                      Retry System
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
