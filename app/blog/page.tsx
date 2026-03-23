"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import DarkModeToggle from "../components/button";
import { PenLine, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const cardBg = darkMode ? "bg-zinc-800" : "bg-white";
  const borderColor = darkMode ? "border-zinc-700" : "border-zinc-200";
  const inputBg = darkMode
    ? "bg-zinc-800 border-zinc-700 placeholder-zinc-600 text-zinc-100"
    : "bg-white border-zinc-200 placeholder-zinc-400 text-zinc-900";

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const skeletonPosts = [
    { label: "Coming soon", width: "w-2/3" },
    { label: "Coming soon", width: "w-1/2" },
    { label: "Coming soon", width: "w-3/4" },
    { label: "Coming soon", width: "w-2/5" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
      <div className="w-full max-w-xl mx-auto px-6 py-8">
        <Header darkMode={darkMode} activePage="blog" />

        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">
            SHARON IBANGA
          </h1>
          <p className={`text-xs ${muted}`}>
            Frontend Engineer · React · Next.js · TypeScript
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-1">Blog</h2>
          <p className={`text-sm leading-relaxed ${muted}`}>
            Thoughts on frontend engineering, design systems, and building
            things for the web. Articles are on their way.
          </p>
        </div>

        <div
          className={`rounded-xl border px-5 py-6 mb-8 flex items-start gap-4 ${cardBg} ${borderColor}`}
        >
          <div
            className={`p-2.5 rounded-lg shrink-0 ${
              darkMode ? "bg-zinc-700" : "bg-zinc-100"
            }`}
          >
            <PenLine size={18} className={muted} />
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Articles incoming</p>
            <p className={`text-xs leading-relaxed ${muted}`}>
              I&apos;m currently writing my first set of posts. Topics will
              include React patterns, Next.js performance, TypeScript tips, and
              career insights for frontend engineers.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className={`text-xs font-medium uppercase tracking-widest mb-4 ${muted}`}>
            What&apos;s coming
          </p>
          <div className="space-y-3">
            {skeletonPosts.map((post, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 border-b last:border-0 ${borderColor}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      darkMode ? "bg-zinc-600" : "bg-zinc-300"
                    }`}
                  />
                  <div
                    className={`h-3 rounded-full animate-pulse ${post.width} ${
                      darkMode ? "bg-zinc-700" : "bg-zinc-200"
                    }`}
                  />
                </div>
                <div
                  className={`h-2.5 w-16 rounded-full animate-pulse ml-4 shrink-0 ${
                    darkMode ? "bg-zinc-700" : "bg-zinc-200"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <hr className={`mb-6 ${borderColor}`} />

        <section className="mb-10">
          <h3 className="text-sm font-semibold mb-0.5">
            Get notified when I publish
          </h3>
          <p className={`text-xs mb-3 ${muted}`}>
            No spam. Just an email when a new post drops.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              className={`flex-1 px-3 py-2 text-sm rounded-md border outline-none transition-colors ${inputBg} focus:border-zinc-400`}
            />
            <button
              onClick={handleSubscribe}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                subscribed
                  ? "bg-green-600 text-white"
                  : darkMode
                  ? "bg-zinc-600 hover:bg-zinc-500 text-white"
                  : "bg-zinc-600 hover:bg-zinc-700 text-white"
              }`}
            >
              {subscribed ? (
                "Subscribed ✓"
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={13} />
                </>
              )}
            </button>
          </div>
        </section>

        <footer className="flex items-center justify-end">
          <DarkModeToggle
            darkMode={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
        </footer>
      </div>
    </div>
  );
}