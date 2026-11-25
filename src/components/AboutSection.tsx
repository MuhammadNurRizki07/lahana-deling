"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import { SparkleIcon } from "./Decorations";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const detailIcons = [GraduationCap, BookOpen, Compass, Award];

  return (
    <section id="about" className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-[#080908] overflow-hidden">
      {/* Subtle green aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8CF12E]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8CF12E]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#8CF12E] uppercase">
            {t.about.sectionLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story & Education Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {t.about.headlinePart1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CF12E] to-[#b3f774]">
                {t.about.headlineHighlight}
              </span>{" "}
              {t.about.headlinePart2}
            </h2>

            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Academic Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {t.about.educationDetails.map((item, idx) => {
                const Icon = detailIcons[idx] || GraduationCap;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#151715]/80 border border-white/10 hover:border-[#8CF12E]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-[#8CF12E] mb-1.5">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Personal Character Traits */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                {t.about.strengthsTitle}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.about.personalTraits.map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8CF12E] shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Portrait Card with Authentic Photo of Lahana Deling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              
              {/* Outer Glow & Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8CF12E]/20 via-white/5 to-transparent rounded-[2.5rem] blur-xl -z-10" />

              {/* White/Light Gray Rounded Portrait Container */}
              <div className="relative w-full bg-gradient-to-b from-zinc-100 to-zinc-200 border border-white/30 rounded-[2.5rem] overflow-hidden shadow-2xl pt-8 px-6 flex flex-col items-center">
                
                {/* Decorative Neon Stars */}
                <div className="absolute top-6 left-6 pointer-events-none">
                  <SparkleIcon className="w-6 h-6 text-[#8CF12E]" />
                </div>
                <div className="absolute top-10 right-6 pointer-events-none">
                  <SparkleIcon className="w-4 h-4 text-[#8CF12E] opacity-70" />
                </div>

                {/* Profile Photo: Authentic Portrait of Lahana Deling */}
                <div className="relative w-56 sm:w-64 md:w-72 aspect-[712/1024] flex items-end justify-center">
                  <Image
                    src="/deling3.png"
                    alt="Lahana Deling — Nutrition Graduate Portrait"
                    width={712}
                    height={1024}
                    className="w-full h-auto object-contain object-bottom drop-shadow-md select-none pointer-events-none"
                  />
                </div>

                {/* Floating Badge 1: Nutrition Graduate */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-14 -left-3 sm:-left-5 bg-[#0c0c0c]/90 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#8CF12E] animate-pulse" />
                  <span className="text-xs font-bold text-white">
                    {t.about.badgeNutritionStudent}
                  </span>
                </motion.div>

                {/* Floating Badge 2: Always Learning */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 -right-3 sm:-right-4 bg-[#8CF12E] text-black px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5"
                >
                  <span className="text-xs font-black tracking-wide">
                    {t.about.badgeAlwaysLearning}
                  </span>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
