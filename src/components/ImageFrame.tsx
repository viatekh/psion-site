import { ReactNode } from "react";

export function ImageFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 60px 10px rgba(5, 6, 5, 0.55)",
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(5,6,5,0.35) 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 border border-white/[0.04]" aria-hidden />
    </div>
  );
}
