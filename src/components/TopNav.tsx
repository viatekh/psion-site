import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/deploy", label: "Deploy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  return (
    <header className="flex flex-wrap items-center border-b border-line">
      <Link
        href="/"
        className="flex items-center gap-3 border-r border-b border-line px-4 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:border-b-0 sm:px-5"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        Psion Systems
      </Link>
      <nav className="flex flex-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex-1 border-r border-line px-4 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:flex-none sm:px-5 sm:text-left"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
