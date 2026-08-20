import { TopNav } from "@/components/TopNav";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto max-w-2xl px-6 py-16 lg:px-0">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Contact</h1>
        <div className="mt-6 space-y-4">
          <a
            href="mailto:info@psion.systems"
            className="block font-serif text-2xl italic text-foreground transition-colors hover:text-accent"
          >
            info@psion.systems
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
          >
            @psionsystems on Instagram
          </a>
        </div>
      </main>
    </div>
  );
}
