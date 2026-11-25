"use client";

import { Mail, Phone, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const email = "lahanadeling@gmail.com";
  const phone = "083185379183";
  const waLink = "https://wa.me/6283185379183";

  return (
    <footer id="contact" className="relative w-full pt-20 pb-12 px-4 sm:px-8 lg:px-16 bg-[#080908] border-t border-white/10 overflow-hidden">
      {/* Background Neon Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#8CF12E]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-b from-[#151715] to-[#0e100e] border border-white/15 rounded-[2.5rem] p-8 sm:p-12 md:p-16 mb-16 shadow-2xl flex flex-col items-center text-center overflow-hidden">
          
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#8CF12E]" />
            <span className="text-xs font-bold tracking-[0.18em] text-[#8CF12E] uppercase">
              {t.contact.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mb-5">
            {t.contact.headlinePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CF12E] to-[#b3f774]">
              {t.contact.headlineHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#B8B8B8] max-w-xl mb-10 font-normal leading-relaxed">
            {t.contact.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8CF12E] hover:bg-[#7ddc26] text-black font-extrabold text-sm tracking-tight transition-all duration-300 shadow-[0_6px_25px_rgba(140,241,46,0.4)] hover:shadow-[0_8px_30px_rgba(140,241,46,0.6)] hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-black stroke-[2.5]" />
              <span>{t.contact.btnSendEmail}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200 stroke-[2.5]" />
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm tracking-tight transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#8CF12E]" />
              <span>{t.contact.btnWhatsApp}</span>
            </a>
          </div>

          {/* Contact Direct Info Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-[#8CF12E]" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-300">
                {email}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-[#8CF12E]" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-300">
                {phone}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-[#B8B8B8]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Lahana Deling</span>
            <span>•</span>
            <span>{t.contact.copyright}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Designed with dedication</span>
            <Heart className="w-3.5 h-3.5 text-[#8CF12E] fill-[#8CF12E]" />
            <span>Universitas Muhammadiyah Cirebon</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
