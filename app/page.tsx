import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProjectsSection />
      <GitHubSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
