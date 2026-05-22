/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Watch scroll positions to highlight active nav and toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hides navbar on initial landing block, emerges on scroll
      if (scrollY > 60) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      const scrollPosition = scrollY + (window.innerHeight / 3); // Dynamic offset based on screen height

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height offset
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
    <header className={`fixed top-0 left-0 right-0 w-full z-50 glass-nav shadow-sm bg-white/75 dark:bg-slate-900/75 backdrop-blur-md select-none border-b border-slate-100/45 dark:border-slate-800/45 transition-all duration-500 ease-in-out transform ${
      showNavbar ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
    }`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="font-display text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white"
        >
          Ahmad Nur
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-sans font-medium text-sm transition-all duration-300 py-1 border-b-2 ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border-transparent hover:border-blue-600/35"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Switcher Button */}
          <button
            onClick={toggleDarkMode}
            id="theme-toggler"
            aria-label="Toggle theme mode"
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400 animate-pulse" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle mobile theme mode"
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drop-down Menu with standard transitions */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-sans font-semibold text-base py-2 transition-colors ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400 pl-2 border-l-2 border-blue-600"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
