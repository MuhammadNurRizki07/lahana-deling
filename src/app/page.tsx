"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#080908] flex flex-col text-white selection:bg-[#8CF12E] selection:text-black">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
