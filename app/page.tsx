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
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { useDarkMode } from "@/app/components/hooks/useDarkMode";


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
  { title: "AI in Front-End Development: What’s Changing in 2026", date: "Apr 4, 2026" },
  { title: "Creating a High-Performance LMS", date: "Mar 28, 2026" },
  { title: "From Static to Smart: How AI is Transforming Websites", date: "Nov 4, 2025" },
  { title: "Keeping Up as a Mid-Level Front-End Dev in a Rapidly Changing Tech World", date: "Sep 27, 2025" },
];

export default function HomePage() {
const { darkMode, toggleDarkMode } = useDarkMode();
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
            Read More  <Image
                    src="/assets/leftarrow.svg"
                    alt="left-arrow"
                    width={16}
                    height={16}
                    className="w-2 h-3 rounded-md object-cover"
                    
                  />
          </Link>
        </section>

        <hr className={`mb-6 border-2 ${border}`} />

        <section className="mb-8 ">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-4">
            Selected Project
          </h2>

          <div className="space-y-0 ">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 border-b${border} ${rowHover} cursor-pointer transition-colors -mx-2 px-2 rounded-sm`}
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
            View All  <Image
        src="/assets/leftarrow.svg"
        alt="left-arrow"
        width={16}
        height={16}
        className="w-2 h-3 rounded-md object-cover"
        priority
      />
          </Link>
        </section>

        <hr className={`mb-6 border-2 ${border}`} />

        <section className="mb-10">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-4">
            Latest Articles
          </h2>

          <div className="space-y-0">
            {articles.map((a, i) => (
              <div
                key={i}
                className={`flex items-start justify-between py-2.5 border-b bg-[#ECECEC ${
                  darkMode
                  ? "bg-zinc-700"
                  :"bg-[#ECECEC]"
                } ${border} ${rowHover} cursor-pointer transition-colors -mx-2 px-2 rounded-sm gap-4`}
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
            Read all  <Image
        src="/assets/leftarrow.svg"
        alt="left-arrow"
        width={16}
        height={16}
        className="w-2 h-3 rounded-md object-cover"
        priority
      />
          </Link>
        </section>
                <hr className={`mb-6 border-2 ${border}`} />

        <Newsletter darkMode={darkMode}  />
                 <hr className={`mb-6 border-2 ${border}`} />


<Footer darkMode={darkMode}
  onToggle={toggleDarkMode}
 />

      </div>
    </div>
  );
}