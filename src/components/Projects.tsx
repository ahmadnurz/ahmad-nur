/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
// @ts-expect-error - external asset processed by vite in runtime
import projectCover from "../assets/images/project_cover_1779446104141.png";
import { Terminal, Loader2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  repo: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  gitUrl: string;
}

const fallbackProjects: Project[] = [
  {
    id: "birthday-gift",
    title: "KADO-SELAMAT-ULANG-TAHUN",
    repo: "KADO-SELAMAT-ULANG-TAHUN",
    category: "C++",
    tags: ["C++", "Algorithm", "Console Art"],
    description: "Interactive C++ script made as a special birthday card filled with sweet terminal animations.",
    longDescription: "A specialized repository written in C++ that renders custom console graphics.",
    image: projectCover,
    gitUrl: "https://github.com/ahmadnurz/KADO-SELAMAT-ULANG-TAHUN",
  },
  {
    id: "kantin-digital",
    title: "KANTIN_DIGITAL",
    repo: "KANTIN_DIGITAL",
    category: "Python",
    tags: ["Python", "Database", "UAS Project"],
    description: "UAS group project building a digital canteen ordering app with custom menu billing logic.",
    longDescription: "A database-driven application built with 5 contributors for a final university project.",
    image: projectCover,
    gitUrl: "https://github.com/ahmadnurz/KANTIN_DIGITAL",
  },
  {
    id: "tugas-uts",
    title: "TUGAS-UTS",
    repo: "TUGAS-UTS",
    category: "HTML",
    tags: ["HTML", "Algorithms", "Mathematics"],
    description: "UTS project for basic programming algorithms calculating the geometric dimensions of rectangular blocks.",
    longDescription: "Practical university assignment resolving 3D box calculations.",
    image: projectCover,
    gitUrl: "https://github.com/ahmadnurz/TUGAS-UTS",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        // Fetch repositories from GitHub API (sorted by updated)
        const response = await fetch("https://api.github.com/users/ahmadnurz/repos?sort=updated&per_page=6");
        if (!response.ok) throw new Error("Failed to fetch from GitHub API");

        const repos = await response.json();

        // Map GitHub API data to our Project format
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mappedProjects: Project[] = repos.filter((repo: any) => !repo.fork).map((repo: any) => ({
          id: repo.name,
          title: repo.name.toUpperCase().replace(/-/g, " "),
          repo: repo.name,
          category: repo.language || "Other",
          tags: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 3),
          description: repo.description || "No description provided for this repository.",
          longDescription: repo.description || "View repository to read more details.",
          image: projectCover, // using the unified minimalist cover image
          gitUrl: repo.html_url,
        }));

        if (mappedProjects.length > 0) {
          setProjects(mappedProjects);
        }
      } catch (error) {
        console.error("Error fetching GitHub projects, falling back to default.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden snap-start snap-always bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors select-none px-6 py-4 md:py-16"
    >
      <div className="max-w-6xl w-full mx-auto max-h-full overflow-y-auto md:overflow-visible">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-12 gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-1.5 flex items-center gap-2">
              GitHub Repositories
              {isLoading && <Loader2 size={20} className="animate-spin text-blue-500" />}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Showcasing my latest technical assignments and personal systems, automatically synced from GitHub.
            </p>
          </div>

          <a
            href="https://github.com/ahmadnurz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-slate-950 hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl sm:rounded-2xl font-sans font-bold text-xs flex items-center gap-2 transition-transform hover:-translate-y-0.5"
          >
            <Terminal size={14} /> See All My Repositories
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden group border-blue-500/5 flex flex-col h-full transform-gpu hover:shadow-lg transition-all duration-400"
            >
              {/* Card Image */}
              <div className="relative h-24 sm:h-36 md:h-48 overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-[1.05] transition-all duration-700 select-none pointer-events-none"
                />
                
                {/* Subtle Blue Overlay for Minimalist Theme */}
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>

                {/* Visual Glow Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
              </div>

              {/* Card Contents */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Languages Filter Info */}
                <div className="flex flex-wrap gap-1.5 mb-2.5 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-blue-50/80 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 rounded-full font-sans font-bold text-[8px] sm:text-[9px] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-sm sm:text-lg font-extrabold text-slate-950 dark:text-white mb-1.5 leading-tight">
                  {project.title}
                </h3>
                
                <p className="font-sans text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Card CTA Actions */}
                <div className="flex mt-auto">
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-sans font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-blue-500/10"
                  >
                    <Terminal size={12} /> View Repository
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
