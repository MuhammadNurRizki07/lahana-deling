"use client";

import { motion } from "framer-motion";

/**
 * Neon Sunburst / Starburst icon as seen in top-left of reference design
 */
export function Sunburst({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="6"
            stroke="#8CF12E"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle cx="50" cy="50" r="10" fill="#8CF12E" />
    </motion.svg>
  );
}

/**
 * Four-point neon sparkle icon
 */
export function SparkleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#8CF12E"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
}

/**
 * Hand-drawn spiral doodle SVG beside the profile photo
 */
export function SpiralDoodle({ className = "w-12 h-16" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.8 }}
      transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
    >
      <path
        d="M 45 10 C 25 15, 12 30, 22 48 C 30 62, 50 58, 46 72 C 44 79, 36 78, 30 75"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 1"
        fill="none"
      />
      <circle cx="45" cy="10" r="2.5" fill="#111111" />
    </motion.svg>
  );
}

/**
 * Nutrition sprout / leaf accent SVG
 */
export function NutritionLeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8CF12E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="#8CF12E" fillOpacity="0.2" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
