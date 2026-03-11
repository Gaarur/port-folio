"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000; // 2 seconds minimum for a premium feel

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const nextProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500); // Wait for the "100" to be seen
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Main Content */}
          <div className="relative flex flex-col items-center">
            {/* Logo/Name placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="serif-heading text-2xl md:text-3xl text-white tracking-[0.2em] uppercase">
                U T K A R S H <span className="text-emerald-400">R A J</span>
              </h2>
            </motion.div>

            {/* Percentage */}
            <div className="relative h-[80px] overflow-hidden flex items-center justify-center">
              <motion.span 
                className="text-7xl md:text-8xl font-black text-white/10 absolute select-none"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {progress}
              </motion.span>
              <span 
                className="text-7xl md:text-8xl font-black text-white relative z-10"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {progress}
              </span>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-emerald-400/60 text-[0.65rem] uppercase tracking-[0.5em] font-medium"
            >
              Initializing Experience
            </motion.p>
          </div>

          {/* Progress Bar (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
            <motion.div 
              className="h-full bg-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-emerald-400/20" />
          <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-emerald-400/20" />
          <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-emerald-400/20" />
          <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-emerald-400/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
