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
  ArrowRight,
} from "lucide-react";
import DarkModeToggle from "@/app/components/button";
import Header from "./components/Header";

const projects = [
  {
    year: "2025",
    name: "Blanksheet",
    stack: "Next.js, Tailwind ,Frontend",
  },
  {
    year: "2024",
    name: "Atmosphere.ng",
    stack: "Next.js, Tailwind, Frontend",
  },
  {
    year: "2023",
    name: "MyNaijaMarket",
    stack: "TypeScript, Frontend, Frontend"
  },
];

const articles = [
  { title: "Building in the Age of AI", date: "Apr 4, 2026" },
  { title: "Girlie in Tech, What's Next", date: "Mar 28, 2026" },
  { title: "2026 Dev Trends to watchout", date: "Nov 4, 2025" },
  { title: "Starting and Growing a career in Web Development", date: "Sep 27, 2025" },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const bg = darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900";
  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const card = darkMode ? "bg-zinc-800" : "bg-white";
  const border = darkMode ? "border-zinc-700" : "border-zinc-200";
  const rowHover = darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-100";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
       <Header darkMode={darkMode} activePage="home" />


        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">SHARON IBANGA</h1>
          <p className={`text-xs ${muted}`}>
            Frontend Engineer · React · Next.js · TypeScript
          </p>
        </div>

        <section className="mb-6">
          <p className={`text-sm leading-relaxed ${muted}`}>
            I’m Sharon Ibanga, a frontend engineer focused on building fast, scalable, and user-centered web applications. With 3+ years of experience, I works primarily with React, Next.js, and TypeScript to deliver production-ready interfaces that balance performance, usability, and clean architecture. She has owned features end-to-end—translating requirements into robust UI systems, optimizing load times, and ensuring stability through testing.
          </p>
          <Link
            href="/about"
            className={`inline-flex items-center gap-1 text-xs mt-3 font-medium ${muted} hover:text-current transition-colors`}
          >
            Read More <ArrowRight size={12} />
          </Link>
        </section>

        <hr className={`mb-6 ${border}`} />

        <section className="mb-8">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-4">
            Selected Project
          </h2>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 border-b ${border} ${rowHover} cursor-pointer transition-colors -mx-2 px-2 rounded-sm`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs tabular-nums ${muted}`}>{p.year}</span>
                  <span className="text-sm font-medium">{p.name}</span>
                </div>
                <div className="text-right">
                  <p className={`text-xs ${muted}`}>{p.stack}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className={`inline-flex items-center gap-1 text-xs mt-3 font-medium ${muted} hover:text-current transition-colors`}
          >
            View All <ArrowRight size={12} />
          </Link>
        </section>

        <hr className={`mb-6 ${border}`} />

        <section className="mb-10">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-4">
            Latest Articles
          </h2>

          <div className="space-y-0">
            {articles.map((a, i) => (
              <div
                key={i}
                className={`flex items-start justify-between py-2.5 border-b ${border} ${rowHover} cursor-pointer transition-colors -mx-2 px-2 rounded-sm gap-4`}
              >
                <span className="text-sm font-medium leading-snug">{a.title}</span>
                <span className={`text-xs whitespace-nowrap pt-0.5 ${muted}`}>{a.date}</span>
              </div>
            ))}
          </div>

          <Link
            href="/blog"
            className={`inline-flex items-center gap-1 text-xs mt-3 font-medium ${muted} hover:text-current transition-colors`}
          >
            View All <ArrowRight size={12} />
          </Link>
        </section>

        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${muted} hover:text-current transition-colors`}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
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
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${muted} hover:text-current transition-colors`}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </a>
            <a href="mailto:sharon@gmail.com" aria-label="Email">
              <Mail size={16} className={`${muted} hover:text-current transition-colors`} />
            </a>
          </div>

          <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </footer>

      </div>
    </div>
  );
}