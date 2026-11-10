const linkClass = "transition-colors hover:text-accent";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:px-5">
      <span>Psion Systems / London</span>
      <span className="flex gap-5">
        <a href="mailto:tekh@psion.systems" className={linkClass}>
          tekh@psion.systems
        </a>
        <a
          href="https://www.instagram.com/psion.systems"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Instagram
        </a>
      </span>
    </footer>
  );
}
