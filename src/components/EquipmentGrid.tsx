"use client";

import { useMemo, useState } from "react";
import { GearItem, categoryIcon } from "@/data/equipment";
import { GearIcon } from "./GearIcon";

const categories: GearItem["category"][] = [
  "Decks",
  "Mixers",
  "Speakers & PA",
  "Effects",
  "Rigging & Cabling",
];

export function EquipmentGrid({ items }: { items: GearItem[] }) {
  const [filter, setFilter] = useState<GearItem["category"] | null>(null);

  const visibleCategories = useMemo(
    () => (filter ? categories.filter((c) => c === filter) : categories),
    [filter]
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

      <div className="px-6 py-6 lg:px-12 lg:py-10">
        {visibleCategories.map((category) => {
          const categoryItems = items.filter((i) => i.category === category);
          if (categoryItems.length === 0) return null;
          return (
            <div key={category} className="mb-14 last:mb-0">
              <div className="flex items-center gap-4">
                <GearIcon type={categoryIcon[category]} className="h-12 w-12 shrink-0 text-accent" />
                <h2 className="text-xl text-foreground sm:text-2xl">{category}</h2>
              </div>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {categoryItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="text-base text-foreground">{item.name}</span>
                    {item.spec && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted sm:text-right">
                        {item.spec}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
