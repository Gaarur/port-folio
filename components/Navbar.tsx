"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",       href: "#top" },
  { label: "Works",      href: "#projects" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ",        href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["top", "projects", "skills", "about", "experience", "faq", "contact"];
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
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{ paddingTop: "16px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "6px 8px",
            borderRadius: "9999px",
            border: `1px solid ${scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
            background: scrolled
              ? "rgba(13,25,41,0.95)"
              : "rgba(13,25,41,0.80)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
            transition: "all 0.4s ease",
          }}
        >
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "9999px",
                    fontSize: "0.80rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                    color: isActive ? "#FFFFFF" : "#8B9CB8",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: isOpen ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {isOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <Link
            href="/contact"
            className="hidden sm:flex"
            style={{
              marginLeft: "6px",
              padding: "7px 22px",
              borderRadius: "9999px",
              background: "#fff",
              color: "#0D1929",
              fontSize: "0.80rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            Let&apos;s talk
          </Link>
          
          {/* Small mobile "Let's talk" (icon only or smaller) */}
          <Link
            href="/contact"
            className="flex sm:hidden items-center justify-center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              color: "#0D1929",
              textDecoration: "none",
              marginLeft: 4
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 76,
              left: 24,
              right: 24,
              zIndex: 49,
              background: "rgba(13,25,41,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: "14px 20px",
                  borderRadius: 12,
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: active === link.href.replace("#", "") ? "#fff" : "#8B9CB8",
                  background: active === link.href.replace("#", "") ? "rgba(255,255,255,0.05)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {link.label}
                {active === link.href.replace("#", "") && (
                  <motion.span layoutId="active-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: 8,
                padding: "16px",
                borderRadius: 12,
                background: "#fff",
                color: "#0D1929",
                fontSize: "1rem",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none"
              }}
            >
              Let&apos;s talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
