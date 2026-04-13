"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const nextProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(nextProgress);
      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: "fixed", inset: 0, zIndex: 100000,
            background: "#0A0A0A",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Warm center glow */}
          <div style={{
            position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
            width: 500, height: 300, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(232,255,77,0.06) 0%, transparent 70%)",
            filter: "blur(60px)", pointerEvents: "none",
          }} />

          {/* Corner marks — neubrutalist feel */}
          <div style={{ position: "absolute", top: 40, left: 40, width: 28, height: 28, borderTop: "2px solid rgba(232,255,77,0.2)", borderLeft: "2px solid rgba(232,255,77,0.2)" }} />
          <div style={{ position: "absolute", top: 40, right: 40, width: 28, height: 28, borderTop: "2px solid rgba(232,255,77,0.2)", borderRight: "2px solid rgba(232,255,77,0.2)" }} />
          <div style={{ position: "absolute", bottom: 40, left: 40, width: 28, height: 28, borderBottom: "2px solid rgba(232,255,77,0.2)", borderLeft: "2px solid rgba(232,255,77,0.2)" }} />
          <div style={{ position: "absolute", bottom: 40, right: 40, width: 28, height: 28, borderBottom: "2px solid rgba(232,255,77,0.2)", borderRight: "2px solid rgba(232,255,77,0.2)" }} />

          {/* Main content */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 32 }}
            >
              <h2 style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
                fontWeight: 700,
                color: "#F0EDE8",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                margin: 0,
              }}>
                U T K A R S H{" "}
                <span style={{ color: "#E8FF4D" }}>R A J</span>
              </h2>
            </motion.div>

            {/* Progress counter */}
            <div style={{ position: "relative", height: 80, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{
                fontSize: "clamp(4rem, 12vw, 6rem)",
                fontWeight: 900,
                color: "rgba(232,255,77,0.12)",
                fontVariantNumeric: "tabular-nums",
                position: "absolute",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.04em",
                userSelect: "none",
              }} aria-hidden>
                {progress}
              </span>
              <span style={{
                fontSize: "clamp(4rem, 12vw, 6rem)",
                fontWeight: 900,
                color: "#F0EDE8",
                fontVariantNumeric: "tabular-nums",
                position: "relative", zIndex: 1,
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.04em",
              }}>
                {progress}
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: 20,
                color: "rgba(232,255,77,0.45)",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.45em",
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 500,
              }}
            >
              Initializing Experience
            </motion.p>
          </div>

          {/* Progress bar — bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, width: "100%", height: 2,
            background: "rgba(255,255,255,0.04)",
          }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(90deg, #E8FF4D, #FF5C35)", borderRadius: 0 }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
