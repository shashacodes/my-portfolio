"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  User,
  Bookmark,
  PenLine,
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import Header from "../components/Header";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Atmosphere For Business",
    description:
      "A full-featured SaaS dashboard for business analytics with real-time data visualization and team collaboration tools.",
    image: "/assets/atmosphere.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2025",
    link: "https://www.atmosphere.ng/",
  },
  {
    id: 2,
    title: "Blanksheet",
    description:
      "A minimal writing and note-taking app built for distraction-free long-form content creation.",
    image: "/assets/bla.svg",
    tags: ["React", "Figma", "WCAG"],
    year: "2025",
    link: "https://www.blanksheet.co/",
  },
  {
    id: 3,
    title: "Techbleat Website",
    description:
      "Marketing website and blog platform for a tech media brand, focused on performance and editorial clarity.",
    image: "/assets/bleat.svg",
    tags: ["Next.js", "Vue.js", "Jest"],
    year: "2024",
    link: "https://techbleat.co.uk/",
  },
  {
    id: 4,
    title: "MyNaijaMarket",
    description:
      "An e-commerce platform connecting local farmers directly to consumers with real-time inventory and order tracking.",
    image: "/assets/markt.svg",
    tags: ["React", "TypeScript", "Cypress"],
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Blogr",
    description:"A blog page",
    image: "/assets/Blogr.svg",
    tags: ["React", "TypeScript", "css"],
    year: "2023",
    link: "https://shashacodes.github.io/tailwind-6b2/index.html",
  },
];

export default function ProjectPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8"><Header darkMode={darkMode} activePage="projects" />


        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">
            SHARON IBANGA
          </h1>
          <p
            className={`text-xs ${
              darkMode ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            Frontend Engineer · React · Next.js · TypeScript
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-1">Project</h2>
          <p
            className={`text-sm leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            A selection of things I&apos;ve built — from SaaS products to
            marketing sites. Each project reflects my focus on performance,
            usability, and clean architecture.
          </p>
        </section>

        <div className="space-y-4 mb-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`block rounded-xl overflow-hidden transition-all duration-200 group ${
                darkMode
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : " hover:bg-zinc-50"
              } ${hovered === project.id ? "shadow-md" : "shadow-sm"}`}
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold leading-snug">
                    {project.title}
                  </h3>

                </div>

              </div>
            </a>
          ))}
        </div>

        <hr
          className={`mb-6 ${darkMode ? "border-zinc-700" : "border-zinc-300"}`}
        />

        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://yoursite.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <Link href="/contact" aria-label="Email">
              <Mail
                size={16}
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              />
            </Link>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-colors ${
              darkMode
                ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300"
            }`}
          >
            {darkMode ? <Sun size={12} /> : <Moon size={12} />}
            <div
              className={`w-6 h-3.5 rounded-full relative transition-colors ${
                darkMode ? "bg-zinc-500" : "bg-zinc-400"
              }`}
            >
              <div
                className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white transition-all ${
                  darkMode ? "left-[13px]" : "left-0.5"
                }`}
              />
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
}