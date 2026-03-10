"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for first visit only (or always, per your preference)
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0D1929",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}>
              Utkarsh <span style={{ color: "#4ADE80" }}>Raj</span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ color: "#8B9CB8", fontSize: "0.9rem", marginTop: 8, letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              AI Engineer · Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ width: 200, height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden" }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              style={{ height: "100%", background: "linear-gradient(90deg, #4ADE80, #60A5FA)", borderRadius: 999 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
