"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

const LANG_COLOR: Record<string, string> = {
  TypeScript: "#E8FF4D",
  JavaScript: "#FF8C6A",
  Python:     "#C8FF8C",
  HTML:       "#FF5C35",
  CSS:        "#F0EDE8",
  Jupyter:    "#FF5C35",
};

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Garrur/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setRepos(data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 pointer-events-none" style={{
        width: 500, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(232,255,77,0.04) 0%, transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div className="absolute bottom-1/4 right-1/4 pointer-events-none" style={{
        width: 400, height: 250, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,92,53,0.04) 0%, transparent 70%)",
        filter: "blur(80px)",
      }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: 12 }}
          >
            Open Source Activity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="editorial-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#F0EDE8", marginBottom: 12 }}
          >
            Live from{" "}
            <span style={{ color: "#E8FF4D" }}>GitHub</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ height: 2, background: "rgba(232,255,77,0.4)", borderRadius: 9999 }}
          />
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{
                height: 180, borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                animation: "shimmer 1.5s linear infinite",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)",
                backgroundSize: "200% 100%",
              }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, idx) => {
              const langColor = LANG_COLOR[repo.language] || "#9C9890";
              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="group relative flex flex-col justify-between h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    padding: 22,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    minHeight: 170,
                  }}
                  whileHover={{
                    background: "rgba(232,255,77,0.04)",
                    borderColor: "rgba(232,255,77,0.18)",
                    y: -3,
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: `${langColor}12`,
                      border: `1px solid ${langColor}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: langColor, flexShrink: 0,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: langColor }} />
                      <span style={{ fontSize: "0.68rem", color: "#6B6762", fontFamily: "JetBrains Mono, monospace" }}>
                        {repo.language || "Markdown"}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ flex: 1 }}>
                    <h3 className="editorial-heading" style={{
                      fontSize: "0.95rem", color: "#F0EDE8", marginBottom: 6,
                      transition: "color 0.2s",
                    }}>
                      {repo.name}
                    </h3>
                    <p style={{ color: "#6B6762", fontSize: "0.80rem", lineHeight: 1.55, margin: 0 }}>
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: 12, marginTop: 14,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <div style={{ display: "flex", gap: 14 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.70rem", color: "#6B6762", fontFamily: "JetBrains Mono, monospace" }}>
                        ⭐ {repo.stargazers_count}
                      </span>
                      <span style={{ fontSize: "0.70rem", color: "#6B6762", fontFamily: "JetBrains Mono, monospace" }}>
                        {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <span style={{ color: "#E8FF4D", fontSize: "0.9rem", opacity: 0, transition: "opacity 0.2s" }}
                      className="group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/Garrur"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neu-outline"
            style={{ fontSize: "0.85rem", padding: "11px 28px" }}
          >
            See full engineering journal on GitHub  ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
