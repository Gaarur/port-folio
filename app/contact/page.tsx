"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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
      // Use environment variables for EmailJS credentials
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
    <main className="min-h-screen bg-[#030712] relative overflow-hidden pt-32 pb-20 px-6">
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-400 Transition-all mb-12 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> 
              <span className="text-xs uppercase tracking-[0.1em] font-medium">Back to Portfolio</span>
            </Link>

            <p className="text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Contact Me</p>
            <h1 className="serif-heading text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
              Got a project <br /> <span className="text-emerald-400">on your mind?</span>
            </h1>
            
            <p className="text-[#8B9CB8] text-lg max-w-md mb-12 leading-relaxed">
              I&apos;m currently available for freelance projects and full-time opportunities in AI Engineering and Full Stack Development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">✉️</div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-[#4ADE80] mb-1 font-bold">Email</p>
                  <p className="text-white text-lg font-medium">uraj33175@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">📍</div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-[#4ADE80] mb-1 font-bold">Location</p>
                  <p className="text-white text-lg font-medium">Patna, Bihar, India</p>
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
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden time field for EmailJS template */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="General Inquiry"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full btn-primary py-5 text-base font-bold tracking-widest uppercase flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </button>
              </form>

              {/* Status Overlay */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#030712]/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-10 z-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl mb-6">✓</div>
                    <h3 className="serif-heading text-3xl text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400 max-w-xs">I&apos;ve received your message and will get back to you within 24 hours.</p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#030712]/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-10 z-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-4xl mb-6">✕</div>
                    <h3 className="serif-heading text-3xl text-white mb-4">Oops!</h3>
                    <p className="text-slate-400 max-w-xs">Something went wrong. Please try again or email me directly at uraj33175@gmail.com.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-white/60 hover:text-white underline text-sm"
                    >
                      Try again
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
