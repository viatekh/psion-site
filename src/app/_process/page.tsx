import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { PageLabel } from "@/components/PageLabel";
import { getProcess } from "@/data/content";

export const metadata: Metadata = {
  title: "Process",
  description: "How a job with Psion Systems runs, start to finish.",
  alternates: { canonical: "/process" },
};


export default async function ProcessPage() {
  const { headline, intro, steps } = await getProcess();
  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <main className="mx-auto max-w-2xl px-6 py-16 lg:px-0">
        <PageLabel>Process</PageLabel>
        <h1 className="mt-6 text-2xl text-foreground sm:text-3xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {intro}
        </p>

        <ol className="mt-14 border-l border-line pl-8">
          {steps.map((s, i) => (
            <li key={s.name} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border border-accent bg-background"
                aria-hidden
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-lg text-foreground">{s.name}</h2>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          <Link href="/contact" className="text-accent hover:underline">
            Say hello →
          </Link>
        </p>
      </main>
    </div>
  );
}
