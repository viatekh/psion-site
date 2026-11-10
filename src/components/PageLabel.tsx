import { Crosshair } from "./Decoration";

export function PageLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <Crosshair className="h-5 w-5 text-accent" />
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{children}</p>
    </div>
  );
}
