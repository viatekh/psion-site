import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { MediaGrid } from "@/components/MediaGrid";
import { getOther } from "@/data/content";

export const metadata: Metadata = {
  title: "Other / Misc",
  description: "Smaller jobs and subcontracted work from Psion Systems.",
  alternates: { canonical: "/other" },
};

export default async function OtherPage() {
  const other = await getOther();
  return (
    <div className="flex flex-1 flex-col">
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
            <h1 className="mt-1 text-lg text-foreground">Other / Misc</h1>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {other.intro}
          </p>

          <dl className="mt-8 space-y-4">
            {other.work.map((c) => (
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
          <MediaGrid clips={[...other.clips]} images={other.images} alt="Other work" />
        </main>
      </div>
    </div>
  );
}
