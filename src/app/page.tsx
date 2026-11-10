import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { HeroReel } from "@/components/HeroReel";
import { CornerBrackets, Crosshair, RingCircle } from "@/components/Decoration";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <main className="relative flex flex-1 flex-col justify-center overflow-hidden px-6 py-20 lg:px-16">
        <HeroReel />
        <CornerBrackets className="pointer-events-none" />
        <RingCircle className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-line/60 lg:right-8" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <Crosshair className="h-5 w-5 text-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Home</p>
          </div>

          <h1 className="mt-6 max-w-xl font-mono text-2xl font-medium uppercase tracking-[0.1em] text-accent sm:text-3xl">
            Sound — Light — Experience Design
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/90">
            Light, LED and sound for festivals, clubs, churches and fields. Big rigs, small rigs,
            or just a pair of decks.
          </p>

          <nav className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="border border-accent bg-accent-dim px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-[#0a0a0a]"
            >
              View Projects →
            </Link>
            <Link
              href="/about"
              className="border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
