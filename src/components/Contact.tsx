/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Mail, Instagram, Github, ArrowUpRight } from "lucide-react";
import Footer from "./Footer";

export default function Contact() {
  const contactLinks = [
    {
      id: "contact-email",
      label: "Email Channel",
      value: "ahmadnurr324@gmail.com",
      href: "mailto:ahmadnurr324@gmail.com",
      icon: <Mail size={22} />,
      color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-950/20",
      iconBg: "bg-blue-50/80 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400",
    },
    {
      id: "contact-instagram",
      label: "Instagram Handle",
      value: "@ahmdnrz",
      href: "https://instagram.com/ahmdnrz",
      icon: <Instagram size={22} />,
      color: "hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-50/30 dark:hover:bg-pink-950/20",
      iconBg: "bg-pink-50/80 dark:bg-pink-950/10 text-pink-600 dark:text-pink-400",
    },
    {
      id: "contact-github",
      label: "Developer Hub",
      value: "github.com/ahmadnurz",
      href: "https://github.com/ahmadnurz",
      icon: <Github size={22} />,
      color: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400/30 hover:bg-slate-50/40 dark:hover:bg-slate-800/20",
      iconBg: "bg-slate-100/80 dark:bg-slate-800/10 text-slate-700 dark:text-slate-350",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-[calc(100vh-80px)] scroll-mt-[80px] w-full flex flex-col justify-between snap-start snap-always bg-white dark:bg-slate-900 transition-colors select-none pt-8 pb-0"
    >
      <div className="max-w-4xl w-full mx-auto px-6 text-center my-auto">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-2"
          >
            Let's build something amazing together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-355 leading-relaxed"
          >
            Have an idea, project collaboration, or just want to say hi? Feel free to reach out. I am always open to brainstorming and build interesting technical products!
          </motion.p>
        </div>

        {/* Contact list centered card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border-blue-500/5 shadow-sm text-center transition-all duration-300 transform-gpu group cursor-pointer ${link.color}`}
            >
              {/* Icon container */}
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 shadow-inner transition-transform group-hover:scale-110 duration-300 ${link.iconBg}`}>
                {React.cloneElement(link.icon as React.ReactElement, { size: 18 })}
              </div>

              {/* Text metadata */}
              <p className="font-sans text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                {link.label}
              </p>
              
              <p className="font-display text-xs sm:text-[15px] font-extrabold text-slate-950 dark:text-white mb-2 sm:mb-4 tracking-tight">
                {link.value}
              </p>

              {/* Indicator Link icon */}
              <span className="inline-flex items-center gap-1 font-sans text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 duration-300 transition-transform">
                Connect <ArrowUpRight size={12} />
              </span>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Embedded footer at the bottom of contact screen */}
      <Footer />
    </section>
  );
}
