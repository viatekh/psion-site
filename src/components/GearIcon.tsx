import type { ReactNode } from "react";

type GearType = "deck" | "mixer" | "speaker" | "light" | "rigging";

const icons: Record<GearType, ReactNode> = {
  deck: (
    <>
      <rect x="10" y="8" width="80" height="84" rx="4" />
      <circle cx="50" cy="46" r="28" />
      <circle cx="50" cy="46" r="7" />
      <rect x="18" y="16" width="26" height="10" rx="1" />
      <circle cx="20" cy="82" r="3" />
      <circle cx="32" cy="82" r="3" />
      <circle cx="68" cy="82" r="3" />
      <circle cx="80" cy="82" r="3" />
    </>
  ),
  mixer: (
    <>
      <rect x="8" y="10" width="84" height="80" rx="4" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="50" cy="24" r="6" />
      <circle cx="76" cy="24" r="6" />
      <line x1="24" y1="40" x2="24" y2="82" />
      <rect x="18" y="52" width="12" height="8" />
      <line x1="50" y1="40" x2="50" y2="82" />
      <rect x="44" y="34" width="12" height="8" />
      <line x1="76" y1="40" x2="76" y2="82" />
      <rect x="70" y="64" width="12" height="8" />
    </>
  ),
  speaker: (
    <>
      <path d="M28 10 H72 L80 90 H20 Z" />
      <circle cx="50" cy="40" r="16" />
      <circle cx="50" cy="40" r="5" />
      <circle cx="50" cy="72" r="7" />
    </>
  ),
  light: (
    <>
      <rect x="30" y="82" width="40" height="10" rx="2" />
      <line x1="38" y1="82" x2="38" y2="60" />
      <line x1="62" y1="82" x2="62" y2="60" />
      <ellipse cx="50" cy="45" rx="22" ry="16" />
      <line x1="50" y1="20" x2="50" y2="6" />
      <line x1="34" y1="24" x2="24" y2="12" />
      <line x1="66" y1="24" x2="76" y2="12" />
    </>
  ),
  rigging: (
    <>
      <line x1="10" y1="20" x2="90" y2="20" />
      <line x1="10" y1="80" x2="90" y2="80" />
      <line x1="10" y1="20" x2="10" y2="80" />
      <line x1="90" y1="20" x2="90" y2="80" />
      <line x1="10" y1="20" x2="30" y2="80" />
      <line x1="30" y1="20" x2="10" y2="80" />
      <line x1="30" y1="20" x2="50" y2="80" />
      <line x1="50" y1="20" x2="30" y2="80" />
      <line x1="50" y1="20" x2="70" y2="80" />
      <line x1="70" y1="20" x2="50" y2="80" />
      <line x1="70" y1="20" x2="90" y2="80" />
      <line x1="90" y1="20" x2="70" y2="80" />
    </>
  ),
};

export function GearIcon({ type, className = "" }: { type: GearType; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
}

export type { GearType };
