"use client";

import { useState } from "react";

interface NewsletterProps {
  darkMode: boolean;
  mounted?: boolean;
}

export default function Newsletter({ darkMode, mounted = true }: NewsletterProps) {
  const [newsletter, setNewsletter] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";
  const inputBg = darkMode
    ? "bg-zinc-800 border-zinc-700 placeholder-zinc-600 text-zinc-100 focus:border-zinc-500"
    : "bg-[#D9D9D9] border-zinc-200 placeholder-zinc-400 text-zinc-900 focus:border-zinc-400";

  const handleSubscribe = () => {
    if (!newsletter) return;
    setSubscribed(true);
    setNewsletter("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section
      className={`mb-10 py-8 transition-all duration-500 delay-500 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h3 className="md:text-[30px] font-semibold mb-0.5">Subscribe to my newsletter</h3>
      <p className={`text-xs mb-3 leading-[1.65] ${muted}`}>
        Read first when I publish new content. No spam, I promise!
      </p>
      <div className="flex gap-2 ">
        <input
          type="email"
          placeholder="name@example.com"
          value={newsletter}
          onChange={(e) => setNewsletter(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          className={`flex-1 px-3 py-2 text-sm rounded-lg border outline-none transition-colors  ${inputBg}`}
        />
        <button
          onClick={handleSubscribe}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
            subscribed
              ? "bg-[#838386] text-white"
              : darkMode
              ? " bg-zinc-700 hover:bg-zinc-500 text-white"
              : " bg-[#838386] hover:bg-zinc-800 text-white"
          }`}
        >
          {subscribed ? "Subscribed ✓" : "Subscribe"}
        </button>
      </div>
    </section>
  );
}