"use client";

import { useEffect, useState } from "react";
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
import DarkModeToggle from "../components/button";
import Footer from "../components/Footer";
import { useDarkMode } from "@/app/components/hooks/useDarkMode";


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
  slug?: string
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
        slug: "atmosphere",       

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
        slug: "blanksheet-lms",   

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
        slug: "techbleat",     

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
        slug: "mynaijamarket",   

  },
  {
    id: 5,
    title: "Blogr",
    description:"A blog page",
    image: "/assets/Blog.svg",
    tags: ["React", "TypeScript", "css"],
    year: "2023",
    link: "https://shashacodes.github.io/tailwind-6b2/index.html",
        slug: "blogr",            

  },
];

export default function ProjectPage() {
const { darkMode, toggleDarkMode } = useDarkMode();
  const [hovered, setHovered] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8"><Header darkMode={darkMode} activePage="projects" />


        <div className="mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight mb-0.5">
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

        <section className="mb-8 ">
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
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
                            style={{ transitionDelay: `${200 + index * 80}ms` }}
 
             className={`block rounded-xl overflow-hidden transition-all duration-500 group
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                ${darkMode ? "bg-zinc-800 hover:bg-zinc-700" : "hover:bg-zinc-50"}
                ${hovered === project.id ? "shadow-md scale-[1.01]" : "shadow-sm scale-100"}
              `}
            >
<Link href={`/projects/${project.slug}`}>
              <div className="relative max-w-[966px] h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
              </div>
                  </Link>

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

<Footer darkMode={darkMode}
  onToggle={toggleDarkMode}
  mounted={mounted}
 />
      </div>
    </div>
  );
}