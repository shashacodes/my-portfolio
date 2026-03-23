import Link from "next/link";
import Image from "next/image";
import { Home, User, Bookmark, PenLine, Mail } from "lucide-react";

type ActivePage = "home" | "about" | "projects" | "blog" | "contact";

interface HeaderProps {
  darkMode: boolean;
  activePage?: ActivePage;
}

const navLinks = [
  { href: "/",         label: "Home",     icon: Home,     page: "home"     },
  { href: "/about",    label: "About",    icon: User,     page: "about"    },
  { href: "/projects", label: "Projects", icon: Bookmark, page: "projects" },
  { href: "/blog",     label: "Blog",     icon: PenLine,  page: "blog"     },
  { href: "/contact",  label: "Contact",  icon: Mail,     page: "contact"  },
] as const;

export default function Header({ darkMode, activePage }: HeaderProps) {
  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";

  return (
    <header className="flex items-start justify-between mb-8 p-6">
      <Image
        src="/assets/my-ai.jpeg"
        alt="Sharon Ibanga"
        width={56}
        height={56}
        className="w-14 h-14 rounded-md object-cover"
        priority
      />

      <nav className="flex items-center gap-3 mt-1">
        {navLinks.map(({ href, label, icon: Icon, page }) => {
          const isActive = activePage === page;
          return isActive ? (
            <div
              key={page}
              className={`p-1.5 rounded-md ${darkMode ? "bg-zinc-700" : "bg-zinc-300"}`}
              aria-label={label}
            >
              <Icon size={14} />
            </div>
          ) : (
            <Link key={page} href={href} aria-label={label}>
              <Icon
                size={18}
                className={`${muted} hover:text-current transition-colors`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}