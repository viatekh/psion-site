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
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-1">
        <div className="px-6 py-14 lg:px-12">
          <PageLabel>Deploy</PageLabel>
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
