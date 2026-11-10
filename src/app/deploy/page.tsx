import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { PageLabel } from "@/components/PageLabel";
import { EquipmentGrid } from "@/components/EquipmentGrid";
import { equipment } from "@/data/equipment";

export const metadata: Metadata = {
  title: "Deploy",
  description: "DJ and audio equipment hire from Psion Systems.",
};

export default function DeployPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <main className="flex-1">
        <div className="px-6 py-14 lg:px-12">
          <PageLabel>Deploy</PageLabel>
          <h1 className="mt-4 max-w-lg text-2xl text-foreground sm:text-3xl">
            Decks, mixers, speakers. For hire.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            One pair of decks or a whole rig. If it&apos;s not on the list, ask.
          </p>
          <a
            href="mailto:tekh@psion.systems?subject=Kit%20hire"
            className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-accent hover:underline"
          >
            Ask about hire →
          </a>
        </div>
        <EquipmentGrid items={equipment} />
      </main>
    </div>
  );
}
