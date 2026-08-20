"use client";

import { useMemo, useState } from "react";
import { GearItem, categoryIcon } from "@/data/equipment";
import { GearIcon } from "./GearIcon";

const categories: GearItem["category"][] = ["Decks", "Mixers", "Sound", "Lighting", "Cabling & Rigging"];

export function EquipmentGrid({ items }: { items: GearItem[] }) {
  const [filter, setFilter] = useState<GearItem["category"] | null>(null);

  const visible = useMemo(
    () => (filter ? items.filter((i) => i.category === filter) : items),
    [items, filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line px-6 pb-6 pt-2 lg:px-12">
        <button
          onClick={() => setFilter(null)}
          className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border transition-colors ${
            filter === null ? "border-accent bg-accent-dim text-accent" : "border-line text-muted hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border transition-colors ${
              filter === c ? "border-accent bg-accent-dim text-accent" : "border-line text-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-12">
        {visible.map((item) => (
          <div key={item.name} className="border border-line p-6">
            <GearIcon type={categoryIcon[item.category]} className="h-20 w-20 text-accent" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
              {item.category}
            </p>
            <p className="mt-1 text-lg text-foreground">{item.name}</p>
            {item.spec && <p className="mt-0.5 text-sm text-muted">{item.spec}</p>}
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              {item.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
