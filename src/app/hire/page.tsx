import { TopNav } from "@/components/TopNav";
import { EquipmentGrid } from "@/components/EquipmentGrid";
import { equipment } from "@/data/equipment";

export default function HirePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-1">
        <div className="px-6 py-14 lg:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Hire</p>
          <h1 className="mt-4 max-w-lg text-2xl text-foreground sm:text-3xl">
            Straightforward DJ &amp; audio equipment hire.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            No job too small — from a single pair of decks to a full rig. Browse what&apos;s
            available below, or get in touch for anything not listed.
          </p>
        </div>
        <EquipmentGrid items={equipment} />
      </main>
    </div>
  );
}
