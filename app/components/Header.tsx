import Link from "next/link";
import Image from "next/image";

type ActivePage = "home" | "about" | "projects" | "blog" | "contact";

interface HeaderProps {
  darkMode: boolean;
  activePage?: ActivePage;
}

const navLinks = [
  { href: "/",         label: "Home",     icon: "/assets/home.svg", page: "home"},
  { href: "/about",    label: "About",    icon: "/assets/user.svg", page: "about"    },
  { href: "/projects", label: "Projects", icon: "/assets/project.svg", page: "projects" },
  { href: "/blog",     label: "Blog",     icon: "/assets/Blogr.svg",  page: "blog"     },
  { href: "/contact",  label: "Contact",  icon: "/assets/mail.svg",  page: "contact"  },
] as const;

export default function Header({ darkMode, activePage }: HeaderProps) {
  const muted = darkMode ? "text-zinc-400" : "text-zinc-500";

  return (
    <header className="flex items-start justify-between py-6 mb-2 font-extrabold">
      <Image
        src="/assets/my-ai.jpeg"
        alt="Sharon Ibanga"
        width={56}
        height={56}
        className="w-14 h-14 rounded-md object-cover "
        priority
      />

      <nav className="flex items-center md:gap-3 gap-1 mt-1">
        {navLinks.map(({ href, label, icon: icon, page }) => {
          const isActive = activePage === page;
          return isActive ? (
            <div
              key={page}
                data-dark={darkMode}
              className={`nav-item p-1.5 rounded-md ${darkMode ? "bg-zinc-700" : "hover:bg-[#D9D9D9] "}`}
              aria-label={label}
            >
        <Image
          src={icon}        
          alt={label}
          width={30}
          height={30}
          className={`w-[14px] h-[14px] md:w-[30px] md:h-[30px]  darkMode ? "invert" : "" `}
        />
            </div>
          ) : (
            <Link key={page} href={href} aria-label={label} className="nav-item">
                     <Image
          src={icon}        
          alt={label}
          width={30}
          height={30}

                className={` w-[14px] h-[14px] md:w-[30px] md:h-[30px] ${muted} opacity-50 hover:opacity-100 transition-opacity duration-300`}
              />
                  <span className="tooltip">{label}</span>

            </Link>
          );
        })}
      </nav>
    </header>
  );
}