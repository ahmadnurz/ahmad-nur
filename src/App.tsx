/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio_dark_mode");
    if (saved !== null) {
      return saved === "true";
    }
    // Default to clean, modern, high-contrast light theme, as specified in guidelines.
    return false;
  });

  // Keep html class in sync with the state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio_dark_mode", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden flex flex-col">
      {/* Dynamic Navigation */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Intro Hero Section */}
        <Hero />

        {/* Biography Block */}
        <About />

        {/* Skill Card Grid */}
        <Skills />

        {/* Projects & Simulators Grid */}
        <Projects />

        {/* Messaging Composer */}
        <Contact />
      </main>
    </div>
  );
}
