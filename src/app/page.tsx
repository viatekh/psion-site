import Link from "next/link";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { ImageFrame } from "@/components/ImageFrame";
import { projects, projectTypes } from "@/data/projects";

const groups = projectTypes.map((type) => ({
  type,
  names: projects.filter((p) => p.type === type).map((p) => p.title),
}));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex flex-1 flex-col lg:flex-row">
        <div className="flex-1 border-b border-line px-6 py-14 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Home</p>

          <h1 className="mt-6 font-mono text-2xl font-medium uppercase tracking-[0.1em] text-accent sm:text-3xl">
            2026 booking open
          </h1>

          <p className="mt-8 max-w-lg font-serif text-2xl italic leading-relaxed text-foreground">
            Psion Systems designs and operates lighting, LED and show systems for festivals,
            clubs and live events — and handles the simple stuff too, from a single DJ deck
            to a full audio rig.
          </p>

          <dl className="mt-12 space-y-6">
            {groups.map((g) => (
              <div key={g.type} className="border-l-2 border-line pl-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  {g.type}
                </dt>
                <dd className="mt-1 font-serif text-base italic text-muted">
                  {g.names.join(" · ")}
                </dd>
              </div>
            ))}
            <div className="border-l-2 border-line pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                Also available
              </dt>
              <dd className="mt-1 font-serif text-base italic text-muted">
                Straightforward DJ &amp; audio equipment hire
              </dd>
            </div>
          </dl>

          <nav className="mt-14 flex flex-wrap gap-3">
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
