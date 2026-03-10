import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080C10",
        surface: "#0D1117",
        "surface-2": "#131920",
        "neon-cyan": "#00FFF0",
        "neon-purple": "#BF5AF2",
        "neon-pink": "#FF375F",
        "neon-green": "#30D158",
        "neon-mint": "#B5FFD9",
        "neon-blue": "#0A84FF",
        "text-primary": "#F5F5F7",
        "text-secondary": "#98989F",
        "text-tertiary": "#6E6E73",
        "glass-white": "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,255,240,0.12), transparent)",
        "purple-glow": "radial-gradient(ellipse 60% 50% at 70% 60%, rgba(191,90,242,0.15), transparent)",
        "cyan-glow": "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(0,255,240,0.10), transparent)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
