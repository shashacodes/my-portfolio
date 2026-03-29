"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projects } from "@/app/components/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", String(!prev));
      return !prev;
    });
  };

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-500">
        Project not found.
      </div>
    );
  }

  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const cardBg = darkMode ? "bg-zinc-800" : "bg-[#E8E8E8]";
  const borderColor = darkMode ? "border-zinc-700" : "border-zinc-200";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">

        <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
          <Header darkMode={darkMode} activePage="projects" />
        </div>

        <div className={`mb-8 transition-all duration-500 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">SHARON IBANGA</h1>
          <p className={`text-xs ${muted}`}>Frontend Engineer · React · Next.js · TypeScript</p>
        </div>

        <div className={`mb-6 transition-all duration-500 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-xl font-bold mb-4">{project.title}</h2>

          <div className={`rounded-xl p-4 mb-4 ${cardBg}`}>
            <p className={`text-xs mb-3 ${muted}`}>
              <span className="font-semibold text-current">My Role:</span>{" "}
              {project.role}
            </p>
            <div className="flex items-center justify-between">
              <p className={`text-xs ${muted}`}>
                Live Project:{" "}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-current hover:underline underline-offset-2"
                >
                  {project.liveLinkLabel}
                </a>
              </p>
              <p className={`text-xs ${muted}`}>
                Year: <span className="font-semibold text-current">{project.year}</span>
              </p>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-500 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex flex-col lg:flex-row gap-8 mb-10">

            <div className="flex-1 space-y-6">

              <div>
                <h3 className="text-sm font-bold mb-2">Overview</h3>
                <p className={`text-sm leading-[1.75] ${muted}`}>{project.overview}</p>
              </div>
        <div className="relative w-full max-h-[576px] aspect-[3/4] bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover "
        />
      </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Project Goal</h3>
                <p className={`text-sm leading-[1.75] ${muted}`}>{project.projectGoal}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Role & Services</h3>
                <ul className="space-y-2">
                  {project.roleAndServices.map((item, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm leading-[1.65] ${muted}`}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={`text-sm leading-[1.75] ${muted}`}>{project.closing}</p>
            </div>



          </div>
        </div>

        <hr className={`mb-6 ${borderColor}`} />

    


<div className={`flex items-center py-2 justify-between mb-6 transition-all duration-500 delay-500 ${
  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
}`}>
  {project.prev ? (
    <Link
      href={`/projects/${project.prev.slug}`}
      className={`flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60 ${muted}`}
    >
        <Image
                          src="/assets/prev.svg"
                          alt="left-arrow"
                          width={16}
                          height={16}
                          className="w-2 h-3 rounded-md object-cover"
                          
                        />
      {project.prev.label}
    </Link>
  ) : <div />}

  {project.next ? (
    <Link
      href={`/projects/${project.next.slug}`}
      className={`flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60 ${muted}`}
    >
      {project.next.label}
       <Image
                         src="/assets/rightarrow.svg"
                         alt="left-arrow"
                         width={16}
                         height={16}
                         className="w-4 h-2 rounded-md object-cover"
                         
                       />
    </Link>
  ) : <div />}
</div>

<div className={`mb-8 transition-all py-4 duration-500 delay-600 ${
  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
}`}>
  <Link
    href="/projects"
    className={`flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60 ${muted}`}
  >
     <Image
                       src="/assets/leftarrow.svg"
                       alt="left-arrow"
                       width={16}
                       height={16}
                       className="w-4 h-2 rounded-md object-cover"
                       
                     />
    Back to {project.title}
  </Link>

</div>
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