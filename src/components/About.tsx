/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Rocket, FolderOpen, Terminal } from "lucide-react";

export default function About() {
  const portraitUrl = "https://lh3.googleusercontent.com/d/1mIl7ilvdZRk9WetjkXC_PV7cYazbMcjX";

  const stats = [
    {
      id: "stat-projects",
      icon: <Rocket className="text-blue-600 dark:text-blue-400" size={24} />,
      value: "3+",
      label: "Active Projects",
      description: "Functional educational systems and prototypes",
    },
    {
      id: "stat-repos",
      icon: <FolderOpen className="text-blue-600 dark:text-blue-400" size={24} />,
      value: "3",
      label: "GitHub Repos",
      description: "Self-driven educational repositories",
    },
    {
      id: "stat-linux",
      icon: <Terminal className="text-blue-600 dark:text-blue-400" size={24} />,
      value: "Linux",
      label: "Daily Driver",
      description: "Arch and Debian-based automation systems",
    },
  ];

  return (
    <section
      id="about"
      className="relative h-screen max-h-screen w-full flex flex-col justify-center items-center overflow-hidden snap-start snap-always bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors select-none px-6 py-4 md:py-16"
    >
      <div className="max-w-6xl w-full mx-auto max-h-full overflow-y-auto md:overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-center">

          {/* Portrait Column */}
          <div className="md:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[340px] aspect-square rounded-3xl overflow-visible shadow-sm glass-card p-2 md:p-3 border-blue-500/10"
            >
              <img
                src={portraitUrl}
                alt="Ahmad Nur Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl shadow-inner select-none pointer-events-none"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-500/15 shadow-md flex flex-col items-center justify-center text-center select-none"
              >
                <span className="font-display text-xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">
                  2+
                </span>
                <span className="font-sans text-[8px] sm:text-[10px] font-extrabold tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                  Years Learning
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Biography Column */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-3 md:mb-6">
                Building the Future Through Code
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600/95 dark:text-slate-300 leading-relaxed mb-4 md:mb-8">
                I am an IT student interested in Frontend Development, Cyber Security,
                IoT, and AI. I love building modern web apps, exploring Linux systems,
                and solving intricate technical problems. My journey is fueled by a
                constant desire to bridge the gap between complex backend logic and
                intuitive frontend interfaces.
              </p>
            </motion.div>

            {/* Stats Grid - 3 Columns on mobile and desktop */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card p-3 sm:p-5.5 rounded-2xl hover:scale-[1.03] hover:shadow-md transition-all duration-300 transform-gpu cursor-default"
                >
                  <div className="mb-2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 dark:bg-blue-950/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-inner">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <h3 className="font-display text-sm sm:text-xl font-extrabold text-slate-950 dark:text-white mb-0.5">
                    {stat.value}
                  </h3>
                  <p className="font-sans text-[8px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider leading-none">
                    {stat.label}
                  </p>
                  <p className="font-sans text-[9px] sm:text-[11px] text-slate-400 dark:text-slate-505 leading-snug hidden sm:block">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
