/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  Code,
  Layers,
  Terminal,
  Braces,
  Cpu,
  GitBranch,
} from "lucide-react";

export default function Skills() {
  const languagesData = [
    { name: "Python", icon: <Braces size={24} />, desc: "Used in KANTIN_DIGITAL dashboard backend engine.", category: "Languages" },
    { name: "C++", icon: <Cpu size={24} />, desc: "Used in algorithm tasks like KADO-SELAMAT-ULANG-TAHUN.", category: "Languages" },
    { name: "HTML", icon: <Code size={24} />, desc: "Core structuring element of web repositories.", category: "Languages" },
    { name: "JavaScript", icon: <Code size={24} />, desc: "Dynamic rendering & interactivity staple.", category: "Languages" },
    { name: "CSS", icon: <Layers size={24} />, desc: "Responsive layout formatting & Tailwind utility styling.", category: "Languages" },
    { name: "Git & GitHub", icon: <GitBranch size={24} />, desc: "Version control & central deployment platform.", category: "Tooling" },
  ];

  return (
    <section
      id="skills"
      className="relative h-screen max-h-screen w-full flex flex-col justify-center items-center overflow-hidden snap-start snap-always bg-[#faf8ff] dark:bg-slate-950 transition-colors select-none px-6 py-4 md:py-16"
    >
      <div className="max-w-5xl w-full mx-auto max-h-full overflow-y-auto md:overflow-visible">
        
        {/* Section Header */}
        <div className="text-center mb-5 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-2"
          >
            Programming Languages &amp; Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            Verified programming languages and core developer ecosystems found directly in my active workspace. Heuristic profiles without any arbitrary percentage metrics.
          </motion.p>
        </div>

        {/* Minimal Grid - 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {languagesData.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-default group"
            >
              {/* Icon & Category Badge */}
              <div className="flex justify-between items-start mb-3 sm:mb-5">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  {React.cloneElement(tech.icon as React.ReactElement, { size: 18 })}
                </div>
                <span className="font-sans text-[7px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-full border border-slate-200/40 dark:border-slate-800/40">
                  {tech.category}
                </span>
              </div>

              {/* Title & Static Desc */}
              <h3 className="font-display font-bold sm:font-extrabold text-sm sm:text-base text-slate-950 dark:text-white mb-0.5 sm:mb-2 tracking-tight">
                {tech.name}
              </h3>
              
              <p className="font-sans text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
