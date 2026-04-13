import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Loader from "@/components/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utkarsh Raj — AI Engineer & Full Stack Developer",
  description:
    "M.Tech AI student at IIT Patna. Building intelligent systems — multimodal AI, full-stack web platforms, and machine learning research.",
  keywords: [
    "AI Engineer", "Full Stack Developer", "IIT Patna", "Machine Learning",
    "Next.js", "PyTorch", "TensorFlow", "Portfolio", "Utkarsh Raj",
    "React", "FastAPI", "Deep Learning", "NLP",
  ],
  authors: [{ name: "Utkarsh Raj", url: "https://utkarshraj.dev" }],
  creator: "Utkarsh Raj",
  metadataBase: new URL("https://utkarshraj.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Utkarsh Raj — AI Engineer & Full Stack Developer",
    description: "M.Tech AI student at IIT Patna building intelligent systems, multimodal AI, and full-stack web platforms.",
    url: "https://utkarshraj.dev",
    siteName: "Utkarsh Raj Portfolio",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Utkarsh Raj — AI Engineer & Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Raj — AI Engineer & Full Stack Developer",
    description: "M.Tech AI student at IIT Patna building intelligent systems and scalable web platforms.",
    images: ["/og-image.png"],
    creator: "@utkarshraj",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ fontFamily: "var(--font-space, 'Space Grotesk', sans-serif)" }}>
        <LenisProvider>
          <Loader />
          <div className="grain-overlay" aria-hidden="true" />
          <ScrollProgressBar />
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
