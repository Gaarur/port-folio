"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("uraj33175@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    // Replace with your actual emailjs service id, template id, and public key
    emailjs.sendForm('service_g44ozm7', 'template_5qtzby2', formRef.current, 'm4V9rRk-l5yB5p6iY')
      .then(() => {
        setSubmitStatus("success");
        formRef.current?.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socials = [
    {
      label: "GitHub",
      handle: "@Garrur",
      href: "https://github.com/Garrur",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      handle: "Utkarsh Raj",
      href: "https://www.linkedin.com/in/utkarsh-raj-a41174220/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "LeetCode",
      handle: "Utkarsh_Raj32",
      href: "https://leetcode.com/u/Utkarsh_Raj32/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
  ];

  const inputStyle = {
    background: "transparent",
    border: "1px solid #D4CDBE",
    borderRadius: 2,
    padding: "14px 16px",
    fontFamily: '"Inter", sans-serif',
    fontSize: "0.9rem",
    color: "#1A1A1A",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };

  const labelStyle = {
    fontFamily: '"Inter", sans-serif',
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#6B705C",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "120px 0 80px", background: "#F5F1EB" }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Intro and Details */}
          <div className="reveal-left">
            <p className="label-section" style={{ marginBottom: 28 }}>Inquiry & Collaboration</p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.025em",
                color: "#1A1A1A",
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              Let&apos;s build<br />
              <em style={{ color: "#A44A3F" }}>something real.</em>
            </h2>

            <div style={{ width: 40, height: 2, background: "#A44A3F", marginBottom: 24 }} />

            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1rem",
                color: "#3D3835",
                lineHeight: 1.75,
                marginBottom: 40,
                maxWidth: 420,
              }}
            >
              I&apos;m currently open to full-time AI roles, research collaborations, and selective freelance engineering projects.
            </p>

            <a
              href="mailto:uraj33175@gmail.com"
              className="btn-primary"
              style={{ marginBottom: 48, display: "inline-flex" }}
            >
              Send me an email →
            </a>

            {/* Email display */}
            <div
              style={{
                padding: "24px",
                background: "#F1EDE7",
                border: "1px solid #D4CDBE",
                borderRadius: 2,
                marginBottom: 32,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <p style={{ ...labelStyle, marginBottom: 4 }}>Email</p>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#1A1A1A",
                  }}
                >
                  uraj33175@gmail.com
                </p>
              </div>
              <button
                onClick={copyEmail}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#A44A3F",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    border: "1px solid #D4CDBE",
                    borderRadius: 2,
                    color: "#7A6E6A",
                    textDecoration: "none",
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#A44A3F";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#A44A3F";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#F5DCD9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4CDBE";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#7A6E6A";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div
              style={{
                background: "#FDF9F3",
                border: "1px solid #D4CDBE",
                borderRadius: 2,
                padding: "40px",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
              }}
            >
              <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <div>
                    <label htmlFor="user_name" style={labelStyle}>Your Designation / Name</label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="e.g. Satoshi Nakamoto"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#A44A3F")}
                      onBlur={(e) => (e.target.style.borderColor = "#D4CDBE")}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" style={labelStyle}>Email Frequency / Address</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      id="user_email"
                      placeholder="hello@world.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#A44A3F")}
                      onBlur={(e) => (e.target.style.borderColor = "#D4CDBE")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={labelStyle}>Subject Header</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Brief objective of contact"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#A44A3F")}
                    onBlur={(e) => (e.target.style.borderColor = "#D4CDBE")}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message Body</label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Structure your thoughts here..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#A44A3F")}
                    onBlur={(e) => (e.target.style.borderColor = "#D4CDBE")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px",
                    marginTop: 8,
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? "Sending..." : "Initialize Message ↗"}
                </button>

                {submitStatus === "success" && (
                  <p style={{ color: "#6B705C", fontSize: "0.85rem", textAlign: "center", margin: 0 }}>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p style={{ color: "#A44A3F", fontSize: "0.85rem", textAlign: "center", margin: 0 }}>
                    Failed to send message. Please try emailing directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="reveal"
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: "1px solid #D4CDBE",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Utkarsh<span style={{ color: "#A44A3F" }}>.</span>
          </p>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.78rem",
              color: "#A89F9B",
            }}
          >
            © {new Date().getFullYear()} Utkarsh Raj · M.Tech AI @ IIT Patna
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
        @media (max-width: 560px) {
          .contact-grid form > div:first-child { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
