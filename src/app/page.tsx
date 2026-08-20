import Link from "next/link";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { ImageFrame } from "@/components/ImageFrame";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-center border-b border-line px-6 py-14 lg:border-b-0 lg:border-r lg:px-16 lg:py-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Home</p>

          <h1 className="mt-6 font-mono text-2xl font-medium uppercase tracking-[0.1em] text-accent sm:text-3xl">
            2026 booking open
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
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
        </div>

        <div className="h-[50vh] flex-1 lg:h-screen">
          <ImageFrame className="h-full w-full">
            <Image
              src="/projects/modem/modem1.jpg"
              alt="MO:DEM Festival LED installation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </ImageFrame>
        </div>
      </main>
    </div>
  );
}
