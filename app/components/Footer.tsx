import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./button";

interface FooterProps {
  darkMode: boolean;
  onToggle: () => void;
  mounted?: boolean;
}

export default function Footer({ darkMode, onToggle, mounted = true }: FooterProps) {
  return (
    <footer
      className={`flex items-center justify-between pb-8 transition-all duration-500 delay-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className={`text-xs ${darkMode ? "text-white" : "text-black"}`}>
        © 2026 Sharon Ibanga 
      </p>
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image
            src="/assets/link.svg"
            alt="LinkedIn"
            width={16}
            height={16}
            className={`opacity-60 hover:opacity-100 transition-opacity ${darkMode ? "invert " : ""}`}
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Image
            src="/assets/git.svg"
            alt="GitHub"
            width={16}
            height={16}
            className={`opacity-60 hover:opacity-100 transition-opacity ${darkMode ? "invert" : ""}`}
          />
        </a>
        <Link href="/contact" aria-label="Email">
          <Image
            src="/assets/mail.svg"
            alt="Mail"
            width={16}
            height={16}
            className={`opacity-60 hover:opacity-100 transition-opacity ${darkMode ? "invert" : ""}`}
          />
        </Link>
      </div>


      <DarkModeToggle darkMode={darkMode} onToggle={onToggle} />
    </footer>
  );
}