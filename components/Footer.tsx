"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Zap } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Garrur", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:uraj33175@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0A] pt-24 pb-12 overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8FF4D]/20 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand - Span 5 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 glass flex items-center justify-center rounded-lg border-[#E8FF4D]/20 text-[#E8FF4D]">
                <Zap size={20} fill="#E8FF4D" className="opacity-80" />
              </div>
              <h3 className="editorial-heading text-3xl text-[#F0EDE8]">
                Utkarsh Raj
              </h3>
            </div>
            
            <p className="text-[#9C9890] text-base max-w-sm leading-relaxed font-sans">
              AI Engineer & Research Developer dedicated to building efficient, multimodal intelligence and robust full-stack architectures.
            </p>
            
            <div className="pt-4">
              <p className="section-label !text-[0.6rem] !mb-2 opacity-40">Primary Identifier</p>
              <p className="text-[#F0EDE8] font-mono text-sm font-medium tracking-tight">
                uraj33175@gmail.com
              </p>
            </div>
          </div>

          {/* Navigation - Span 3 */}
          <div className="lg:col-span-3">
            <p className="section-label mb-8">Navigation</p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9C9890] hover:text-[#E8FF4D] transition-all text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#E8FF4D] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Availability - Span 4 */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <p className="section-label mb-8">Digital Presence</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#9C9890] hover:text-[#E8FF4D] hover:border-[#E8FF4D]/30 transition-all duration-300 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-warm p-6 rounded-2xl border-white/5 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E8FF4D] animate-pulse" />
                <p className="text-[0.7rem] font-bold text-[#E8FF4D] uppercase tracking-widest font-mono">
                  Current Status: Open to Full-time AI Roles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[#3A3A3A] font-mono text-[0.65rem] uppercase tracking-widest">
              © {currentYear} Utkarsh Raj · Patna, India
            </p>
            <p className="text-[#3A3A3A] font-mono text-[0.65rem] uppercase tracking-widest">
              Synthetic Curator Edition v2.0
            </p>
          </div>

          <a
            href="#top"
            className="flex items-center gap-3 text-[#3A3A3A] hover:text-[#E8FF4D] text-[0.7rem] font-bold uppercase tracking-widest transition-colors group px-4 py-2 rounded-lg border border-transparent hover:border-[#E8FF4D]/10"
          >
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            Back to Zero
          </a>
        </div>
      </div>
    </footer>
  );
}
