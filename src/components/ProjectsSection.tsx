"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowUpRight, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  // Dynamic projects with localized titles and descriptions
  const projects = [
    {
      id: "work-klk",
      categoryIndex: 1, // Work Experience
      title: language === "id" ? "Pelayanan & Operasional Ruang Makan" : "Food Service & Dining Hall Operations",
      description:
        language === "id"
          ? "Pelayanan makanan cepat saji, sanitasi ruang makan, dan komunikasi langsung dengan karyawan di Kantin PT. KLK Dumai."
          : "Operational food serving, dining hall hygiene maintenance, and direct customer communication at Kantin PT. KLK Dumai.",
      year: "2022 – 2023",
      image: "/images/projects/food-service.jpg",
      tag: language === "id" ? "Pengalaman Kerja" : "Work Experience",
    },
    {
      id: "work-syauqi",
      categoryIndex: 1, // Work Experience
      title: language === "id" ? "Lini Produksi Roti & Kue" : "Bakery & Pastry Production Line",
      description:
        language === "id"
          ? "Penyiapan adonan kue dan roti, pengecekan mutu bahan baku, dan alur pengemasan produk higienis di Rumah Kue Syauqi Dumai."
          : "Hands-on baking preparation, raw ingredient quality inspection, and food packaging workflow at Rumah Kue Syauqi Dumai.",
      year: "2021 – 2022",
      image: "/images/projects/food-production.jpg",
      tag: language === "id" ? "Pengalaman Kerja" : "Work Experience",
    },
    {
      id: "acad-food-quality",
      categoryIndex: 2, // Academic Projects
      title: language === "id" ? "Praktikum Mutu & Keamanan Pangan" : "Food Safety & Quality Assessment Lab",
      description:
        language === "id"
          ? "Analisis laboratorium mengenai parameter sanitasi makanan, pencegahan kontaminasi silang, dan kontrol kebersihan penanganan pangan."
          : "Laboratory coursework analyzing food sanitation parameters, cross-contamination prevention, and hygiene controls in food handling.",
      year: "2023 – 2024",
      image: "/images/projects/food-lab.jpg",
      tag: language === "id" ? "Praktikum Akademik" : "Academic Coursework",
    },
    {
      id: "acad-nutrition-principles",
      categoryIndex: 3, // Food & Nutrition
      title: language === "id" ? "Prinsip Ilmu Gizi & Penyusunan Menu" : "Nutritional Science & Meal Planning Study",
      description:
        language === "id"
          ? "Studi komprehensif mengenai keseimbangan zat gizi makro, kontrol porsi, dan pedoman diet gizi seimbang untuk pola hidup sehat."
          : "Comprehensive academic study on macronutrient balancing, portion control, and dietary guidelines for healthy lifestyle maintenance.",
      year: "2023 – 2024",
      image: "/images/projects/nutrition-study.jpg",
      tag: language === "id" ? "Pangan & Gizi" : "Nutrition Principles",
    },
    {
      id: "learning-sanitation",
      categoryIndex: 4, // Learning Activities / Produksi
      title: language === "id" ? "Workshop Sanitasi & Higiene Tempat Kerja" : "Workplace Sanitation & Hygiene Practices",
      description:
        language === "id"
          ? "Pelatihan praktis SOP higiene dapur, sterilisasi peralatan saji, serta pengaturan suhu penyimpanan bahan pangan."
          : "Practical workshops on standard operating procedures for kitchen hygiene, equipment sterilization, and food storage temperature.",
      year: "2024",
      image: "/images/projects/sanitation-workshop.jpg",
      tag: language === "id" ? "Pengembangan Diri" : "Skill Development",
    },
    {
      id: "acad-community-health",
      categoryIndex: 3, // Food & Nutrition
      title: language === "id" ? "Studi Observasi Pola Konsumsi Pangan" : "Public Health Nutrition Exploration",
      description:
        language === "id"
          ? "Observasi lapangan dan latihan analisis kebiasaan makan masyarakat, kesadaran gizi seimbang, dan pemilihan pangan sehat."
          : "Field observation and learning exercises exploring community eating habits, nutritional awareness, and food choices.",
      year: "2024",
      image: "/images/projects/community-nutrition.jpg",
      tag: language === "id" ? "Studi Lapangan" : "Field Study",
    },
  ];

  const filteredProjects =
    activeCategoryIndex === 0
      ? projects
      : projects.filter((p) => p.categoryIndex === activeCategoryIndex);

  return (
    <section id="works" className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-[#080908] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#8CF12E]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8CF12E]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#8CF12E] uppercase">
              {t.works.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl">
            {t.works.headlinePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CF12E] to-[#b3f774]">
              {t.works.headlineHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#B8B8B8] max-w-2xl mt-3 font-normal">
            {t.works.description}
          </p>
        </div>

        {/* Work Experience Spotlight (Timeline / Card Highlight) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-4 h-4 text-[#8CF12E]" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t.works.experienceTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.works.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#151715]/90 border border-white/10 hover:border-[#8CF12E]/35 rounded-3xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Period Badge & Location */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#8CF12E] bg-[#8CF12E]/10 border border-[#8CF12E]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h4 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-[#8CF12E] mb-3">
                    {exp.company}
                  </p>

                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-5">
                    {exp.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8CF12E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          {t.works.categories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#8CF12E] text-black shadow-[0_0_15px_rgba(140,241,46,0.3)]"
                    : "bg-[#151715] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-[#151715]/80 border border-white/10 hover:border-[#8CF12E]/40 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(140,241,46,0.15)]"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-48 bg-zinc-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1152px) 368px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#8CF12E]">
                    {item.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[11px] font-medium text-zinc-300">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#8CF12E] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                      {t.works.btnViewDetails}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#8CF12E] group-hover:text-black text-zinc-400 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
