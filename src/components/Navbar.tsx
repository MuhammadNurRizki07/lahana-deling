"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.skills, href: "#skills", id: "skills" },
    { name: t.nav.works, href: "#works", id: "works" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "works", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full pt-4 md:pt-6 px-4 sm:px-6 relative z-50 flex justify-center"
    >
      <nav className="w-full max-w-5xl bg-[#0c0c0c] border border-white/10 rounded-full py-2 px-3.5 sm:px-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Left: Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-semibold tracking-tight text-sm sm:text-base group"
        >
          <span className="w-2 h-2 rounded-full bg-[#8CF12E] group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_#8CF12E]" />
          <span className="tracking-tight font-bold">
            Lahana<span className="text-[#8CF12E]">.dev</span>
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white font-semibold bg-white/10"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8CF12E] shadow-[0_0_8px_#8CF12E]" />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right: Language Switcher & Branding Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Button */}
          <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden sm:flex group items-center gap-1.5 pl-3 pr-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-zinc-200 hover:text-white transition-all duration-200"
          >
            <span>{t.nav.profile}</span>
            <span className="w-5 h-5 rounded-full bg-[#8CF12E] text-black flex items-center justify-center text-[10px] font-bold group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-[#0d0d0d] border border-white/15 rounded-3xl p-5 shadow-2xl flex flex-col gap-2 z-50"
          >
            <div className="pb-2 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8CF12E]" /> {t.nav.menu}
              </span>
              <span className="text-xs font-bold text-[#8CF12E]">Lahana Deling</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#8CF12E]" />
                    )}
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-[#8CF12E] hover:bg-[#7ddc26] text-black font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <span>{t.nav.letsConnect}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
