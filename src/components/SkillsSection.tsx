"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShieldCheck, MessageSquareHeart, Users, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [UtensilsCrossed, ShieldCheck, MessageSquareHeart, Users];

type ApplicationTool = {
  name: string;
  visual:
    | { type: "image"; src: string }
    | { type: "text"; value: string };
};

const applicationTools: ApplicationTool[] = [
  { name: "Microsoft Word", visual: { type: "image", src: "/images/tools/microsoft-word.svg" } },
  { name: "Microsoft Excel", visual: { type: "image", src: "/images/tools/microsoft-excel.svg" } },
  { name: "Microsoft PowerPoint", visual: { type: "image", src: "/images/tools/microsoft-powerpoint.svg" } },
  { name: "Canva", visual: { type: "image", src: "/images/tools/canva.png" } },
  { name: "IBM SPSS Statistics", visual: { type: "text", value: "IBM SPSS Statistics" } },
  { name: "NutriSurvey", visual: { type: "text", value: "NutriSurvey" } },
  { name: "WHO Anthro", visual: { type: "text", value: "WHO Anthro" } },
  { name: "Google Forms", visual: { type: "image", src: "/images/tools/google-forms.svg" } },
  { name: "Mendeley", visual: { type: "image", src: "/images/tools/mendeley.svg" } },
  { name: "jamovi", visual: { type: "image", src: "/images/tools/jamovi.svg" } },
];

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-[#080908] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#8CF12E]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8CF12E]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#8CF12E] uppercase">
              {t.skills.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl">
            {t.skills.headlinePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CF12E] to-[#b3f774]">
              {t.skills.headlineHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#B8B8B8] max-w-2xl mt-3 font-normal">
            {t.skills.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {t.skills.categories.map((skill, index) => {
            const Icon = icons[index] || UtensilsCrossed;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#151715]/90 border border-white/10 hover:border-[#8CF12E]/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(140,241,46,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black tracking-widest text-[#8CF12E] bg-[#8CF12E]/10 border border-[#8CF12E]/20 px-3 py-1 rounded-full">
                      {skill.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#8CF12E]/30 flex items-center justify-center text-[#8CF12E] group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#8CF12E] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-6 font-normal">
                    {skill.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#8CF12E] group-hover:text-black text-zinc-400 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-7 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Tools I Work With
            </h3>
            <p className="mx-auto md:mx-0 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-[#B8B8B8]">
              Software and applications I use to support productivity, nutrition assessment, data analysis, research, and creative work.
            </p>
          </div>

          <div
            className="tools-marquee py-3"
            role="region"
            aria-label="Tools I Work With applications"
            tabIndex={0}
          >
            <div className="tools-marquee-track">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "duplicate" : "original"}
                  className="tools-marquee-group"
                  role={isDuplicate ? undefined : "list"}
                  aria-label={isDuplicate ? undefined : "Applications used by Lahana"}
                  aria-hidden={isDuplicate || undefined}
                >
                  {applicationTools.map((tool) => (
                    <div
                      key={`${tool.name}-${isDuplicate ? "duplicate" : "original"}`}
                      className={`group flex h-36 w-32 shrink-0 flex-col items-center rounded-2xl border border-white/10 bg-[#151715]/90 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8CF12E]/50 hover:shadow-[0_12px_30px_-10px_rgba(140,241,46,0.2)] sm:w-36 ${
                        tool.visual.type === "text" ? "justify-center" : "justify-between"
                      }`}
                      role={isDuplicate ? undefined : "listitem"}
                    >
                      <div className="flex h-14 w-full items-center justify-center">
                        {tool.visual.type === "image" ? (
                          <Image
                            src={tool.visual.src}
                            alt=""
                            width={56}
                            height={56}
                            unoptimized
                            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <span className="max-w-full text-sm font-bold leading-tight text-zinc-100 sm:text-base">
                            {tool.visual.value}
                          </span>
                        )}
                      </div>
                      {tool.visual.type === "image" && (
                        <span className="flex min-h-9 items-center justify-center text-xs font-semibold leading-snug text-zinc-300 sm:text-sm">
                          {tool.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
