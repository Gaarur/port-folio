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
        /* ── Editorial Warmth Palette ── */
        bg:           "#F5F1EB",
        "bg-paper":   "#FDF9F3",
        "bg-warm":    "#F1EDE7",
        "bg-sand":    "#EBE8E2",
        text:         "#1A1A1A",
        "text-body":  "#3D3835",
        "text-muted": "#7A6E6A",
        rust:         "#A44A3F",
        "rust-dark":  "#85332A",
        "rust-pale":  "#F5DCD9",
        olive:        "#6B705C",
        "olive-pale": "#E0E5CC",
        sand:         "#DDB892",
        "sand-pale":  "#F7EDDE",
        divider:      "#D4CDBE",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", '"Times New Roman"', "serif"],
        sans:  ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
