"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";

interface DarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ darkMode, onToggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-colors ${
        darkMode
          ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
          : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300"
      }`}
    >
<Image
  src={darkMode ? "/assets/darkmode.svg" : "/assets/darkmode.svg"}
  alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  width={12}
  height={12}
  className={darkMode ? "invert" : ""}
/>      <div
        className={`w-6 h-3.5 rounded-full relative transition-colors ${
          darkMode ? "bg-zinc-500" : "bg-zinc-400"
        }`}
      >
        <div
          className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 ${
            darkMode ? "left-[13px]" : "left-0.5"
          }`}
        />
      </div>
    </button>
  );
}