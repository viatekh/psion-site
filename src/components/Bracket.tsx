import { ReactNode } from "react";

export function Bracket({
  children,
  active = false,
  as: As = "div",
  className = "",
}: {
  children: ReactNode;
  active?: boolean;
  as?: "div" | "span";
  className?: string;
}) {
  return (
    <As
      className={`border-l border-r border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
        active ? "bg-accent-dim text-accent border-accent" : "text-muted"
      } ${className}`}
    >
      {children}
    </As>
  );
}
