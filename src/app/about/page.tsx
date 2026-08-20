import { TopNav } from "@/components/TopNav";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto max-w-2xl px-6 py-16 lg:px-0">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">About</h1>
        <p className="mt-6 font-serif text-2xl italic leading-relaxed text-foreground">
          Psion Systems is a lighting design and production studio working across festivals,
          clubs and live shows — LED installation, show programming and on-site operation.
        </p>
      </main>
    </div>
  );
}
