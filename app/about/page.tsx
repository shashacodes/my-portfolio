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
  Download,
} from "lucide-react";
import DarkModeToggle from "../components/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const stack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Vue.js",
  "Figma",
  "Jest",
  "Cypress",
  "WCAG",
];

const experience = [
  {
    company: "Blanksheet",
    period: "January 2025 – Current",
    role: "Frontend Engineer",
  },
  {
    company: "Wave5Wireless",
    period: "January 2024 – December 2024",
    role: "Frontend Engineer",
  },
  {
    company: "Unitvelocity",
    period: "January 2024 – December 2024",
    role: "Frontend Engineer Intern",
  },
];
const testimonials = [
  {
    text: "She has a strong eye for clean, intuitive design and builds responsive, well-structured interfaces. She's collaborative, reliable, and focused on creating smooth user experiences. A great front-end developer and a valuable asset to any team.",
    author: "Nicholas, co-founder Blanksheet",
  },
  {
    text: "Working with Sharon was a pleasure. She delivered pixel-perfect components on time and communicated clearly throughout. Her attention to detail and TypeScript knowledge really stood out.",
    author: "John, CTO AtmosphereHQ",
  },
  {
    text: "Sharon brought both technical skill and design sensibility to the project. She took ownership of the frontend and shipped features we were proud to show clients.",
    author: "Amara, Product Lead Techbleat",
  },
];

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);

  const bg = darkMode ? "bg-zinc-900" : "bg-[#f0efed]";
  const text = darkMode ? "text-zinc-100" : "text-black";
  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const cardBg = darkMode ? "bg-zinc-800" : "bg-white";
  const border = darkMode ? "border-zinc-700" : "border-zinc-200";
  const tagBg = darkMode ? "text-zinc-200" : "bg-[#D9D9D9] text-zinc-700";

  return (
    <div className={`min-h-screen transition-colors duration-300 text-black md:text-lg text-xs ${bg} ${text}`}>
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8"><Header darkMode={darkMode} activePage="about" />

        <div className="mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight mb-0.5">SHARON IBANGA</h1>
          <p className={`text-xs ${muted}`}>
            Frontend Engineer · React · Next.js · TypeScript
          </p>
        </div>

        <section className="mb-8">
          <h2 className=" font-extrabold mb-3">About Me</h2>
          <div className={`leading-relaxed space-y-3 ${muted}`}>
            <p>
              I&apos;m Sharon Ibanga, a frontend engineer focused on building fast,
              scalable, and user-centered web applications. With 3+ years of
              experience, I work primarily with React, Next.js, and TypeScript to
              deliver production-ready interfaces that balance performance,
              usability, and clean architecture.
            </p>
            <p>
              I have owned features end-to-end — translating requirements into
              robust UI systems, optimizing load times, and ensuring stability
              through testing. My work includes improving page performance by over
              25%, building reusable component libraries, and collaborating closely
              with backend and product teams to ship reliable, high-quality features.
            </p>
            <p>
              Sharon brings a strong sense of structure, attention to detail, and
              product thinking to every project — building not just interfaces, but
              systems that scale and last.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${muted}`}>
            Primary Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-3 py-1.5  rounded-md font-medium ${tagBg}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${muted}`}>
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((job) => (
              <div
                key={job.company}
                className={`flex items-start justify-between  pb-4 last:border-0 last:pb-0 ${border}`}
              >
                <div>
                  <p className=" font-semibold">{job.company}</p>
                  <p className={`text-xs mt-0.5 ${muted}`}>{job.period}</p>
                </div>
                <span className={`text-xs mt-0.5 ${muted}`}>{job.role}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-end mb-10">
          <a
            href="/assets/Sharon_Ibanga_CV_2026 .pdf"
            download
            className={`inline-flex right-0 items-center gap-2  font-medium px-4 py-2.5 rounded-md transition-colors ${
              darkMode
                ? "bg-zinc-700 hover:bg-zinc-600 text-black"
                : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
            }`}
          >
            Download Full CV
          </a>
        </div>

        <hr className={`mb-10 border-2  ${border}`} />
<Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop
  className="mb-6"
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i}>
      <div className={`rounded-[21px] p-8 ${darkMode ? "bg-zinc-800" : "bg-[#E4E4E4]"}`}>
        <p className={` leading-[1.65] mb-4 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
          {t.text}
        </p>
        <p className="font-semibold px-4">___ {t.author}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


<hr className={`mb-18 border-2 ${border}`} />
<Footer darkMode={darkMode}
  onToggle={() => setDarkMode(!darkMode)}
 />

      </div>
    </div>
  );
}