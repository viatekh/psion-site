import Link from "next/link";
import { TopNav } from "@/components/TopNav";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex flex-1 flex-col items-start justify-center px-6 lg:px-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-6 text-2xl text-foreground sm:text-3xl">
          Nothing on file at this address.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 border border-accent bg-accent-dim px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-[#0a0a0a]"
        >
          Back to Home →
        </Link>
      </main>
    </div>
  );
}
