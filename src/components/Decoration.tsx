export function CornerBrackets({ className = "" }: { className?: string }) {
  const arm = 24;
  const corners = [
    { top: 16, left: 16, d: `M0 ${arm} V0 H${arm}` },
    { top: 16, right: 16, d: `M0 0 H${arm} V${arm}` },
    { bottom: 16, left: 16, d: `M0 0 V${arm} H${arm}` },
    { bottom: 16, right: 16, d: `M${arm} 0 V${arm} H0` },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {corners.map((c, i) => (
        <svg
          key={i}
          viewBox={`0 0 ${arm} ${arm}`}
          width={arm}
          height={arm}
          className="absolute text-line"
          style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom }}
        >
          <path d={c.d} fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </div>
  );
}

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="0" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="30" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function RingCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <circle cx="100" cy="100" r="99" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="1.5" fill="currentColor" />
    </svg>
  );
}
