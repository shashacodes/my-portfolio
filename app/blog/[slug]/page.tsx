"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { blogPosts } from "@/app/components/data/blogPosts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-500">
        Post not found.
      </div>
    );
  }

  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const codeBg = darkMode ? "bg-zinc-800" : "bg-[#1e1e1e]";
  const borderColor = darkMode ? "border-zinc-700" : "border-zinc-200";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 md:text-lg text-xs ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">

        <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
          <Header darkMode={darkMode} activePage="blog" />
        </div>

        <div className={`mb-8 transition-all duration-500 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">SHARON IBANGA</h1>
          <p className={` ${muted}`}>Frontend Engineer · React · Next.js · TypeScript</p>
        </div>

        <article className={`transition-all duration-500 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

          <div className="mb-6 p-4 bg-[#3F3F3F] rounded-lg text-white ">
              <span className="flex justify-end mr-10">{post.date}</span>
            <h2 className="text-xl font-bold leading-snug ">{post.title}</h2>
            <p className="mb-3">{post.subtitle}</p>
            <div className={`flex items-center gap-3  ${muted}`}>
            </div>
          </div>

         

          <div className="space-y-5 ">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h3 key={i} className="font-bold pt-2  text-[#6F6F6F]  ">
                      {block.content}
                      <p className="font-medium">{block.text}</p>
                      <p className="font-normal">{block.paragraph}</p>
                    </h3>
                  );
                  
                  case "subheading":
                      return (
                    <h4 key={i} className={` font-semibold ${muted}`}>
                      {block.content}
                    </h4>
                  );

                case "paragraph":
                  return (
                    <p key={i} className={` leading-[1.75] ${muted}`}>
                      {block.content}
                    </p>
                  );
                  
                  case "list":
                      return (
                          <ul key={i} className="space-y-1.5">
<p>{block.topic}</p>  
                    {block.items?.map((item, j) => (
    <li key={j} className={`flex items-start gap-2 text-sm leading-[1.65] ${muted}`}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                  
                  

      case "image":
        return block.src ? (
          <div key={i} className="relative w-full h-44 md:h-56 rounded-xl overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
        ) : null;


                default:
                  return null;
              }
            })}
          </div>
        </article>

        <hr className={`my-10 ${borderColor}`} />

        <div className="mb-8">
          <Link
            href="/blog"
            className={`flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60 ${muted}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Blog
          </Link>
        </div>
        <Link href={"https://www.blanksheet.co/"}>Check out the live project here: BlankSheet LMS</Link>

        <Newsletter darkMode={darkMode} mounted={mounted} />

        <hr className={`my-10 ${borderColor}`} />

        <Footer
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
          mounted={mounted}
        />

      </div>
    </div>
  );
}