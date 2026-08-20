import type { GearType } from "@/components/GearIcon";

export type GearItem = {
  name: string;
  category: "Decks" | "Mixers" | "Sound" | "Lighting" | "Cabling & Rigging";
  spec: string;
  quantity: string;
};

export const categoryIcon: Record<GearItem["category"], GearType> = {
  Decks: "deck",
  Mixers: "mixer",
  Sound: "speaker",
  Lighting: "light",
  "Cabling & Rigging": "rigging",
};

// ============================================================================
// HOW TO EDIT THIS FILE
// ============================================================================
// PLACEHOLDER LIST — Tekh needs to confirm/replace this with the real hire
// inventory before this page goes live.
//
// Each item is one { ... } block. To edit, just change the text between the
// quotes " " — don't touch the commas, brackets or colons.
//   name     — the item name, e.g. "Pioneer CDJ-3000"
//   category — must be exactly one of: "Decks", "Mixers", "Sound", "Lighting",
//              "Cabling & Rigging"
//   spec     — a short line of detail (optional, use "" if none)
//   quantity — how many are available, e.g. "x4"
//
// To add a new item, copy an entire { ... } block and change the text.
// ============================================================================

export const equipment: GearItem[] = [
  { name: "Pioneer CDJ-3000", category: "Decks", spec: "Professional multi-player", quantity: "x4" },
  { name: "Pioneer DJM-900NXS2", category: "Mixers", spec: "4-channel club mixer", quantity: "x1" },
  { name: "Allen & Heath Xone:96", category: "Mixers", spec: "6-channel analogue mixer", quantity: "x1" },
  { name: "Funktion-One Res 2", category: "Sound", spec: "Point-source PA system", quantity: "x2" },
  { name: "Void Acoustics Nexus", category: "Sound", spec: "Full-range active PA", quantity: "x2" },
  { name: "Moving Head Wash", category: "Lighting", spec: "LED moving head fixture", quantity: "x8" },
  { name: "Hazer", category: "Lighting", spec: "Atmospheric effect", quantity: "x1" },
  { name: "DMX Controller", category: "Lighting", spec: "Show control desk", quantity: "x1" },
  { name: "Truss & Rigging", category: "Cabling & Rigging", spec: "Various lengths, clamps and motors", quantity: "Ask" },
  { name: "Multicore & Cabling", category: "Cabling & Rigging", spec: "XLR, DMX, power distribution", quantity: "Ask" },
];
