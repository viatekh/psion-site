"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  // "/deploy" is intentionally hidden from nav for now — page stays live, just unlinked.
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const otherPages = ["/", "/deploy", ...links.map((l) => l.href)];

export function TopNav() {
  const pathname = usePathname();
  // Individual project pages live at the top level (/modem etc.), so they count as "Projects".
  const current = otherPages.includes(pathname) ? pathname : "/projects";

  return (
    <header className="flex flex-wrap items-center border-b border-line">
      <Link
        href="/"
        className="flex items-center gap-3 border-r border-b border-line px-4 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:border-b-0 sm:px-5"
      >
        <Image
          src="/brand/icon-bold-white.png"
          alt=""
          width={41}
          height={14}
          className="h-3.5 w-auto shrink-0"
          preload
        />
        Psion Systems
      </Link>
      <nav className="flex flex-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={current === l.href ? "page" : undefined}
            className={`flex-1 border-r border-line px-4 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-accent sm:flex-none sm:px-5 sm:text-left ${
              current === l.href ? "text-accent" : "text-muted"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
