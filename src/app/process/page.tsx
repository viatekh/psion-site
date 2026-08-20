import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Process",
  description: "How a project with Psion Systems actually runs, start to finish.",
};

const steps = [
  {
    name: "Enquiry",
    body: "Tell us what you need — even a rough idea. Email or Instagram, either works.",
  },
  {
    name: "Consultation",
    body: "A call to talk through the brief, the space, the budget, and what's actually possible in the time you've got.",
  },
  {
    name: "Proposal & Quote",
    body: "We send a written proposal with a clear scope, timeline and price. No surprises later.",
  },
  {
    name: "Booking & Deposit",
    body: "Confirm the date with a deposit. Your slot, gear and crew are locked in.",
  },
  {
    name: "Production",
    body: "Design, fabrication, programming — whatever the job needs, built and tested before it ever leaves the workshop.",
  },
  {
    name: "Show Day",
    body: "Install, operate, strike. We run it live so you don't have to think about it.",
  },
  {
    name: "Wrap-up",
    body: "Final invoice, and — if you want it — a debrief on what worked and what we'd change next time.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto max-w-2xl px-6 py-16 lg:px-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Process</p>
        <h1 className="mt-6 text-2xl text-foreground sm:text-3xl">
          How a project with us actually runs.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Same steps whether it&apos;s a custom LED build or a pair of decks for the weekend.
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
            Start an enquiry →
          </Link>
        </p>
      </main>
    </div>
  );
}
