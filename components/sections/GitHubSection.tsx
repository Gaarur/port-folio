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

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/Garrur/repos?sort=updated&per_page=6");
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#030712]">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            Open Source Activity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="serif-heading text-4xl md:text-5xl text-white mb-6"
          >
            Live from <span className="text-emerald-400">GitHub</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-emerald-500/50 rounded-full"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-white/5 animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: EASE }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {repo.language || "Markdown"}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                    {repo.description || "No description provided."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-1">
                      <span>⭐</span> {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📅</span> {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 Transition-all translate-x-[-10px] group-hover:translate-x-0">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/Garrur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium border border-white/10 rounded-full px-8 py-3 bg-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20"
          >
            See full engineering journal on GitHub
            <span className="text-lg">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
