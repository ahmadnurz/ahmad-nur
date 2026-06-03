/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, AppWindow, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const textToType = "Ahmad Nur";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    if (charIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Loop or restart after idle time (optional, let's keep it steady, restart after 4s)
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen max-h-screen w-full flex items-center justify-center overflow-hidden snap-start snap-always bg-background-primary bg-grid-pattern bg-[#faf8ff] dark:bg-slate-950 transition-colors select-none"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-blue-600/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Badge Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/25 text-blue-700 dark:text-blue-300 border border-blue-100/80 dark:border-blue-900/50 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
          </span>
          <span className="font-sans font-semibold text-xs tracking-wide uppercase">
            I love vibe coding
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 dark:text-white leading-[1.1] mb-5 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400 typing-cursor">{typedText}</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frontend Developer &amp; Tech Enthusiast
        </motion.p>

        {/* Hero Description */}
        <motion.p
          className="max-w-2xl font-sans text-sm sm:text-base md:text-lg text-slate-600/90 dark:text-slate-350/90 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Passionate about Cyber Security, IoT, AI, and Modern Web Development.
          Creating seamless, lightning-fast digital experiences with technical precision.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-sans font-semibold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500/20 shadow-blue-500/10 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-800 dark:text-slate-200 rounded-full font-sans font-semibold text-sm hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Floating Glass Widget */}
      <motion.div
        className="hidden lg:block absolute right-16 bottom-16 z-10 hover:scale-[1.05] transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border-blue-500/10 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shadow-inner">
            <Terminal size={22} className="animate-pulse" />
          </div>
          <div className="text-left font-sans select-none">
            <p className="text-[11px] font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase">
              Current Project
            </p>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
              Portfolio
              <Sparkles size={13} className="text-blue-500 dark:text-blue-400" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* Another Small Floating Widget (Left Bottom) */}
      <motion.div
        className="hidden lg:block absolute left-16 bottom-16 z-10 hover:scale-[1.05] transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border-blue-500/10 shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
            <AppWindow size={22} />
          </div>
          <div className="text-left font-sans select-none">
            <p className="text-[11px] font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
              Status
            </p>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
              Building Apps
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
