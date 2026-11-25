"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, GraduationCap, Award, Briefcase, Calendar, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import { Sunburst, SparkleIcon, SpiralDoodle, NutritionLeafIcon } from "./Decorations";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const statIcons = [GraduationCap, Award, Briefcase, Calendar];

  return (
    <section
      id="home"
      className="relative w-full bg-[#080908] bg-grid-dots pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 px-2.5 sm:px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8CF12E]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8CF12E]/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Main White Hero Panel with Large Rounded Corners */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-6xl bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden flex flex-col"
      >
        {/* Navbar inside White Panel Header */}
        <Navbar />

        {/* Hero Content Area */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 px-5 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-14 md:pb-16 flex flex-col items-center">
          
          {/* Decorative Elements around Headline */}
          <div className="absolute top-8 left-6 sm:left-10 lg:left-14 pointer-events-none">
            <Sunburst className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-90 text-[#8CF12E]" />
          </div>

          <div className="absolute top-10 right-8 sm:right-12 lg:right-16 pointer-events-none hidden sm:block">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SparkleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#8CF12E]" />
            </motion.div>
          </div>

          {/* Subtitle Badge */}
          <motion.div variants={fadeUpVariants} className="mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#8CF12E] animate-pulse shadow-[0_0_8px_#8CF12E]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-zinc-700 uppercase">
                {t.hero.subtitleBadge}
              </span>
            </div>
          </motion.div>

          {/* Dominant Headline */}
          <motion.div
            variants={fadeUpVariants}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] text-[#111111]">
              <span>{t.hero.headlinePart1}</span>
              <br />
              <span>{t.hero.headlinePart2} </span>
              <span className="inline-block text-[#5bb417] sm:text-[#67c71d] bg-clip-text text-transparent bg-gradient-to-r from-[#59b015] via-[#75d424] to-[#8CF12E] drop-shadow-[0_2px_12px_rgba(140,241,46,0.25)]">
                {t.hero.headlinePart3}.
              </span>
            </h1>
          </motion.div>

          {/* 3-Column Composition: Left Description, Center Photo, Right Academic Card */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center relative z-10">
            
            {/* Left Column: Short Description & Discover Button */}
            <motion.div
              variants={slideLeftVariants}
              className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-1.5 mb-2.5 text-[#8CF12E]">
                <NutritionLeafIcon className="w-5 h-5 text-[#6ec920]" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                  {t.hero.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm lg:text-[14px] text-zinc-600 leading-relaxed max-w-xs md:max-w-[270px] lg:max-w-xs font-normal">
                {t.hero.description}
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-black bg-transparent text-xs sm:text-sm font-bold text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xs"
                >
                  <span>{t.hero.btnExplore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>

            {/* Center Column: Portrait Photo with Abstract Aura, Doodle & Overlapping Buttons */}
            <motion.div
              variants={photoVariants}
              className="md:col-span-4 flex flex-col items-center justify-center relative order-1 md:order-2"
            >
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center">
                
                {/* Circular Abstract Aura Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-b from-[#8CF12E]/25 via-zinc-100/60 to-transparent -z-10 pointer-events-none ring-1 ring-[#8CF12E]/30" />
                
                {/* Hand-drawn spiral doodle on the left shoulder */}
                <div className="absolute top-10 -left-4 sm:-left-6 pointer-events-none hidden sm:block">
                  <SpiralDoodle className="w-10 h-14 lg:w-12 lg:h-16 text-black opacity-75" />
                </div>

                {/* Profile Image of Lahana Deling (Original Pose & Photo) */}
                <div className="relative w-52 sm:w-60 md:w-68 lg:w-76 aspect-[800/1024] flex items-end justify-center">
                  <Image
                    src="/deling1.png"
                    alt="Lahana Deling — Nutrition Graduate"
                    width={800}
                    height={1024}
                    priority
                    className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] select-none pointer-events-none"
                  />
                </div>

                {/* Center Bottom Overlapping Action Buttons */}
                <div className="w-full flex items-center justify-center gap-2 sm:gap-3 mt-[-18px] sm:mt-[-22px] z-20 relative px-2">
                  {/* Button 1: Primary Action (Let's Connect) */}
                  <a
                    href="#contact"
                    className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#8CF12E] hover:bg-[#7ddc26] text-black font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-[0_6px_20px_rgba(140,241,46,0.35)] hover:shadow-[0_8px_25px_rgba(140,241,46,0.5)] hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
                  >
                    <span>{t.hero.btnConnect}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>

                  {/* Button 2: Secondary Action (View Experience) */}
                  <a
                    href="#works"
                    className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#111111] hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-tight border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap shadow-md"
                  >
                    <span>{t.hero.btnExperience}</span>
                  </a>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Academic Credentials Card */}
            <motion.div
              variants={slideRightVariants}
              className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right order-3"
            >
              <div className="bg-zinc-50/80 border border-zinc-200/90 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center md:items-end max-w-xs md:max-w-[260px] lg:max-w-xs">
                
                {/* 5-Star Nutrition Excellence Rating */}
                <div className="flex items-center gap-1 mb-2.5 text-[#8CF12E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#8CF12E] text-[#8CF12E]"
                    />
                  ))}
                </div>

                {/* Degree Title */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-wider mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#8CF12E]" />
                  <span>{t.hero.academicBadge}</span>
                </div>

                {/* Big Cumulative GPA Number */}
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight">
                    {t.hero.gpaValue}
                  </span>
                  <span className="text-xs font-bold text-[#59b015] bg-[#8CF12E]/20 px-1.5 py-0.5 rounded-md">
                    {t.hero.gpaScale}
                  </span>
                </div>

                {/* Label */}
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  {t.hero.gpaLabel}
                </p>

                {/* University Name */}
                <p className="text-xs sm:text-[13px] font-semibold text-zinc-700 leading-snug">
                  {t.hero.university}
                </p>

                <div className="mt-3 pt-3 border-t border-zinc-200/80 w-full flex items-center justify-center md:justify-end gap-1.5 text-[11px] text-zinc-500 font-medium">
                  <Sparkles className="w-3 h-3 text-[#6ec920]" />
                  <span>{t.hero.graduateLabel}</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </motion.div>

      {/* Horizontal Statistics Card (Matching Reference Design) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-5xl mt-6 sm:mt-8 bg-[#151715]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-md shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {t.hero.stats.map((stat, i) => {
            const Icon = statIcons[i] || GraduationCap;
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center ${
                  i > 0 && i % 2 !== 0 ? "pt-4 md:pt-0" : ""
                } ${i >= 2 ? "pt-4 md:pt-0" : ""} px-2`}
              >
                <div className="flex items-center gap-1.5 text-[#8CF12E] mb-1">
                  <Icon className="w-4 h-4 text-[#8CF12E]" />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#B8B8B8]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
