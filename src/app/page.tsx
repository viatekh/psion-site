import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { HeroSlideshow } from "@/components/HeroSlideshow";

// TODO: placeholder selection — remind Tekh to pick the best hero images later.
const heroImages = [
  "/projects/modem/modem1.jpg",
  "/projects/glastonbury/glastonbury1.jpg",
  "/projects/two-shell/3.jpeg",
  "/projects/boom-festival/boom6.jpg",
  "/projects/fkatwigs/fkatwigs1.jpg",
  "/projects/glastonbury/glastonbury2.jpg",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="relative flex flex-1 flex-col justify-center px-6 py-20 lg:px-16">
        <HeroSlideshow images={heroImages} />

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Home</p>

        <h1 className="mt-6 max-w-xl font-mono text-2xl font-medium uppercase tracking-[0.1em] text-accent sm:text-3xl">
          Sound — Light — Experience Design
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/90">
          Lighting, LED and show systems for festivals, clubs and live events — and the simple
          stuff too, from a single DJ deck to a full audio rig.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="border border-accent bg-accent-dim px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-[#05100a]"
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
      </main>
    </div>
  );
}
