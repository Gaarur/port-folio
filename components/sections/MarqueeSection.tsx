"use client";

const MARQUEE_ITEMS = [
  "Multimodal AI",
  "Neural Networks",
  "Full-Stack Engineering",
  "Real-Time Inference",
  "LangChain & LLMs",
  "Vector Databases",
  "Production Systems",
  "ML Research",
  "Next.js & React",
  "PyTorch & TensorFlow",
];

export default function MarqueeSection() {
  return (
    <section
      style={{
        background: "#1A1A1A",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Two tracks for seamless loop */}
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marqueeScroll 35s linear infinite",
        }}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              paddingRight: 48,
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: i % 3 === 0 ? "#A44A3F" : i % 3 === 1 ? "#DDB892" : "#7A6E6A",
            }}
          >
            {item}
            <span style={{ color: "#3D3835", fontSize: "0.5rem" }}>◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
