import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { PageLabel } from "@/components/PageLabel";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <main className="flex flex-1 flex-col items-start justify-center px-6 lg:px-16">
        <PageLabel>404</PageLabel>
        <h1 className="mt-6 text-2xl text-foreground sm:text-3xl">
          Nothing on file at this address.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          It moved, or it was never here.
        </p>
        <Link
          href="/"
          className="mt-8 border border-accent bg-accent-dim px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-[#0a0a0a]"
        >
          Home →
        </Link>
      </main>
    </div>
  );
}
