import type { GearType } from "@/components/GearIcon";

export type GearItem = {
  name: string;
  category: "Decks" | "Mixers" | "Speakers & PA" | "Effects" | "Rigging & Cabling";
  spec: string;
};

export const categoryIcon: Record<GearItem["category"], GearType> = {
  Decks: "deck",
  Mixers: "mixer",
  "Speakers & PA": "speaker",
  Effects: "light",
  "Rigging & Cabling": "rigging",
};

// ============================================================================
// HOW TO EDIT THIS FILE
// ============================================================================
// Pulled from the "PSION INVENTORY MASTER" spreadsheet — category and item
// names only, no pricing shown on the public site.
//
// Each item is one { ... } block. To edit, just change the text between the
// quotes " " — don't touch the commas, brackets or colons.
//   name     — the item name
//   category — must be exactly one of: "Decks", "Mixers", "Speakers & PA",
//              "Effects", "Rigging & Cabling"
//   spec     — a short line of detail (optional, use "" if none)
//
// To add a new item, copy an entire { ... } block and change the text.
// ============================================================================

export const equipment: GearItem[] = [
  // ─── Decks ─────────────────────────────────────────────────────────────
  { name: "Pioneer CDJ-3000", category: "Decks", spec: "Professional multi-player" },
  { name: "Pioneer CDJ-2000NXS2", category: "Decks", spec: "Professional multi-player" },
  { name: "Technics SL-1210 MK2", category: "Decks", spec: "Direct-drive turntable" },

  // ─── Mixers ────────────────────────────────────────────────────────────
  { name: "Pioneer DJM-900NXS", category: "Mixers", spec: "4-channel club mixer" },
  { name: "Allen & Heath Xone:92", category: "Mixers", spec: "6-channel analogue mixer" },
  { name: "Allen & Heath Xone:96", category: "Mixers", spec: "6-channel analogue mixer" },
  { name: "Pioneer V10", category: "Mixers", spec: "6-channel club mixer" },
  { name: "Yamaha DM3", category: "Mixers", spec: "Digital mixing desk" },
  { name: "Allen & Heath QU16", category: "Mixers", spec: "Digital mixing desk, 16-channel" },

  // ─── Speakers & PA ─────────────────────────────────────────────────────
  { name: "Martin Audio XP12", category: "Speakers & PA", spec: "Stage monitor" },
  { name: "Lambda Labs CX2A", category: "Speakers & PA", spec: "Stage monitor" },
  { name: "EV ZLX15", category: "Speakers & PA", spec: "Active monitor" },
  { name: "Funktion-One F101", category: "Speakers & PA", spec: "Point-source top" },
  { name: "Funktion-One F81", category: "Speakers & PA", spec: "Point-source top" },
  { name: "Martin Audio F15", category: "Speakers & PA", spec: "Mid-high top" },
  { name: "Martin Audio EM56", category: "Speakers & PA", spec: "Mid-high top" },
  { name: "Martin Audio EM26", category: "Speakers & PA", spec: "Mid-high top" },
  { name: "Void Myrco 8C", category: "Speakers & PA", spec: "Compact point-source" },
  { name: "218 Subwoofer", category: "Speakers & PA", spec: "Dual 18\" subwoofer" },
  { name: "Funktion-One Resolution 4 System", category: "Speakers & PA", spec: "Full system — Res 4 / 218 / amp rack" },
  { name: "Martin Audio System", category: "Speakers & PA", spec: "Full system — F15 tops / 218 subs" },
  { name: "Active PA System", category: "Speakers & PA", spec: "Self-powered tops and subs" },
  { name: "Tannoy IQ10 System", category: "Speakers & PA", spec: "Compact installed-style system" },

  // ─── Effects ───────────────────────────────────────────────────────────
  { name: "Look Unique 2.1 Hazer", category: "Effects", spec: "Atmospheric haze" },
  { name: "Martin JEM ZR44 Fog Machine", category: "Effects", spec: "Fog effect" },

  // ─── Rigging & Cabling ─────────────────────────────────────────────────
  { name: "Aluminium Truss Poles", category: "Rigging & Cabling", spec: "10ft, various configurations" },
  { name: "8m Geodesic Dome", category: "Rigging & Cabling", spec: "Custom installation structure" },
  { name: "Cable Ramp", category: "Rigging & Cabling", spec: "" },
  { name: "Speakon Cabling", category: "Rigging & Cabling", spec: "NL8 / NL4 / NL2 / EP6, various lengths" },
  { name: "Signal Cabling", category: "Rigging & Cabling", spec: "XLR / TRS / TS / RCA" },
  { name: "DMX Cabling", category: "Rigging & Cabling", spec: "" },
  { name: "Power Distribution", category: "Rigging & Cabling", spec: "IEC / 13A / 16A, plugboards" },
];
