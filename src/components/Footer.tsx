/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf8ff] dark:bg-slate-950 block py-12 transition-colors border-t border-slate-100 dark:border-slate-800 select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Brand Information */}
        <div className="text-center sm:text-left">
          <h2 className="font-display text-xl font-extrabold text-blue-600 dark:text-blue-400">
            Ahmad Nur
          </h2>
          <p className="font-sans text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">
            © {currentYear} Ahmad Nur. Built with precision.
          </p>
        </div>

        {/* Dynamic Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/ahmadnurz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ahmad Nur GitHub profile"
            className="flex items-center gap-1.5 text-xs font-semibold font-sans text-slate-500 dark:text-slate-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="https://instagram.com/ahmdnrz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ahmad Nur Instagram profile"
            className="flex items-center gap-1.5 text-xs font-semibold font-sans text-slate-500 dark:text-slate-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Instagram size={14} /> Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
