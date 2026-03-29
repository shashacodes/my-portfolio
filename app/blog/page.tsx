"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useDarkMode } from "@/app/components/hooks/useDarkMode";


interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime?: string;
  featured?: boolean;
  image?: string;
  link: string;
  tag?: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "AI in Front-End Development: What's Changing in 2026",
    date: "Apr 8, 2026",
    link: "#",
    tag: "Latest",
  },
  {
    id: 2,
    title: "Creating a High-Performance LMS",
    date: "Apr 8, 2025",
    readTime: "5 mins Read",
    featured: true,
    image: "/assets/lms.svg",
  link: "/blog/building-high-performance-lms",  
  },
  {
    id: 3,
    title: "From Static to Smart: How AI is Transforming Websites",
    date: "Apr 8, 2025",
    link: "#",
  },
  {
    id: 4,
    title: "Keeping Up as a Mid-Level Front-End Dev in a Rapidly Changing Tech World",
    date: "Apr 8, 2025",
    link: "#",
  },
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();


  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubscribe = () => {
    if (!newsletter) return;
    setSubscribed(true);
    setNewsletter("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const muted = darkMode ? "text-[#6F6F6F]" : "text-zinc-500";
  const cardBg = darkMode ? "bg-zinc-800" : "bg-[#E2E2E2]";
  const borderColor = darkMode ? "border-zinc-700" : "border-zinc-200";
  const inputBg = darkMode
    ? "bg-zinc-800 border-zinc-700 placeholder-zinc-600 text-zinc-100 focus:border-zinc-500"
    : "border-zinc-200 placeholder-zinc-400 text-zinc-900 focus:border-zinc-400";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8">

        <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
          <Header darkMode={darkMode} activePage="blog" />
        </div>
        <div className={`mb-8 transition-all duration-500 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">SHARON IBANGA</h1>
          <p className={`text-xs ${muted}`}>Frontend Engineer · React · Next.js · TypeScript</p>
        </div>

        <div className={`mb-6 transition-all duration-500 delay-150  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-lg font-semibold mb-1">Blog</h2>
          <p className={`text-sm leading-relaxed ${muted}`}>
            I share my thoughts and insights on all things web design, along with occasional fun stories from my coding journey.
          </p>
        </div>

        <div className={`relative mb-6 transition-all duration-500 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className={` absolute right-0 flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border  max-w-[335px] w-[200px] ${
  darkMode ? "bg-zinc-800 border-zinc-700" : "border-4 border-zinc-200"
}`}>
                               <Image
                      src="/assets/search.svg"
                      alt="search-icon"
                      width={"30"}
                      height={"30"}
                        className="w-4 h-4 md:w-6 md:h-6"

                    />
            <input
              type="text"
              placeholder="Search Article"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`flex-1 text-sm bg-transparent outline-none  ${
                darkMode ? "placeholder-zinc-600 text-zinc-100" : "placeholder-zinc-400 text-zinc-900 max-w-[335px] "
              }`}
            />
          </div>
        </div>

        <div className={`mt-20 transition-all duration-500 delay-300${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {filtered.length === 0 && (
            <p className={`text-sm text-center py-8${muted}`}>No articles found.</p>
          )}

          {filtered.map((post, index) =>
            post.featured ? (
              <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${300 + index * 60}ms` }}
              className={`flex items-center  justify-between gap-4 rounded-xl p-4 mb-2 group transition-all duration-300 ${cardBg} hover:shadow-md`}
              >

                  <hr className={`mt-6 ${darkMode ? "border-zinc-700 border-4" : "border-zinc-300"}`} />
                <div className="flex-1 min-w-0">
                  {post.readTime && (
                    <p className={`text-[10px] mb-1 ${muted}`}>{post.readTime}</p>
                  )}
                  
                  <h3 className="text-sm font-semibold leading-snug mb-2">{post.title}</h3>
                  
                  <div className="flex items-center gap-3">
                    <span className={`text-xs ${muted}`}>{post.date}</span>
                    <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
                      darkMode ? "bg-zinc-700 text-zinc-300 group-hover:bg-zinc-600" : "bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200"
                      }`}>
                      Read Full Article
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                      </svg>
                      
                    </span>

                  </div>
                  
                </div>  

                      <hr className={` mb-4 ${darkMode ? "border-zinc-700" : "border-zinc-300"}`} />
{post.image && (
  <div className="relative py-6 overflow-visible ">
    <div className="absolute z-50 sm:right-6 right-0 top-1/2 -translate-y-1/2 w-20 sm:w-40 h-20 sm:h-24 overflow-visible shrink-0 ">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover z- rounded-xl rotate-[-18deg] shadow-lg group-hover:scale-105 transition-transform "
      />
    </div>

    <hr className={`mt-4 ${darkMode ? "border-black" : "border-zinc-300"}`} />
  </div>
)}
              </a>
            ) : (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transitionDelay: `${300 + index * 60}ms` }}
                className={`flex items-start justify-between gap-4 py-4 border-b group transition-all duration-300 ${borderColor} last:border-0`}
              >

                <div className="flex-1 min-w-0 p-2 text-[#6F6F6F]">
                  {post.tag && (
                    <p className={`text-[10px] font-medium mb-1 ${muted}`}>{post.tag}</p>
                  )}
                  <h3 className="text-sm font-medium leading-snug group-hover:underline underline-offset-2">
                    {post.title}
                  </h3>
                </div>
                        <hr className={`mt-6 ${darkMode ? "border-zinc-700" : "border-zinc-300"}`} />

                <div className="flex items-center gap-2 shrink-0 mt-0.5 py-6 ">
                  
                  <span className={`text-xs whitespace-nowrap ${muted}`}>{post.date}</span>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                    darkMode ? "bg-zinc-700 text-zinc-300 group-hover:bg-zinc-600" : "bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200"
                  }`}>
                    Read Full Article
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </span>
                </div>
              </a>
            )
          )}
        </div>

        <hr className={`mb-6 ${darkMode ? "border-zinc-700" : "border-zinc-300"}`} />

         <Newsletter darkMode={darkMode}  />
                  <hr className={`mb-6  ${borderColor}`} />


        <Footer
          darkMode={darkMode}
          onToggle={toggleDarkMode}
          mounted={mounted}
        />

      </div>
    </div>
  );
}