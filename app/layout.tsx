import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Utkarsh Raj — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Utkarsh Raj, M.Tech AI student at IIT Patna. Building intelligent systems, multimodal AI platforms, and scalable web products.",
  keywords: [
    "Utkarsh Raj",
    "AI Engineer",
    "Full Stack Developer",
    "IIT Patna",
    "Machine Learning",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Utkarsh Raj" }],
  openGraph: {
    title: "Utkarsh Raj — AI Engineer & Full-Stack Developer",
    description: "Portfolio of Utkarsh Raj, M.Tech AI @ IIT Patna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: "#F5F1EB" }}>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
