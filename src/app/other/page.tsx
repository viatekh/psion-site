import Link from "next/link";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { ImageFrame } from "@/components/ImageFrame";
import { otherWork, otherImages } from "@/data/projects";

export default function OtherPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="border-b border-line px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:w-96 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-10">
          <Link
            href="/projects"
            className="mb-10 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <div className="border-l-2 border-line pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Project</p>
            <p className="mt-1 text-lg text-foreground">Other / Misc</p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">
            Smaller jobs, one-off installs and subcontracted work that don&apos;t warrant a full
            page of their own — still real, still ours.
          </p>

          <dl className="mt-8 space-y-4">
            {otherWork.map((c) => (
              <div key={c.label} className="border-l-2 border-line pl-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  {c.label}
                </dt>
                <dd className="mt-1 text-lg text-foreground">{c.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <main className="flex-1 p-6 lg:p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherImages.map((src) => (
              <ImageFrame key={src} className="aspect-[4/3]">
                <Image src={src} alt="Other work" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </ImageFrame>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
