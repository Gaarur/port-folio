"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
            position: "fixed", inset: 0,
            background: "#0A0A0A",
            zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 28,
          }}
        >
          {/* Warm glow */}
          <div style={{
            position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
            width: 400, height: 260, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(232,255,77,0.06) 0%, transparent 70%)",
            filter: "blur(50px)", pointerEvents: "none",
          }} />

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: "center", position: "relative" }}
          >
            <div style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              fontWeight: 700, color: "#F0EDE8",
              letterSpacing: "-0.03em", lineHeight: 1.1,
            }}>
              Utkarsh <span style={{ color: "#E8FF4D" }}>Raj</span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                color: "#6B6762", fontSize: "0.72rem", marginTop: 10,
                letterSpacing: "0.2em", textTransform: "uppercase",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              AI Engineer · Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Progress track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              width: 200, height: 2,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 999, overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #E8FF4D, #FF5C35)",
                borderRadius: 999,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
