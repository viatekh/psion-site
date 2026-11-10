"use client";

import { useEffect, useRef } from "react";

const interactive = "a, button, [role='button'], input, textarea";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ref.current;
    if (!ring) return;
    const root = document.documentElement;

    // Moved straight on the element — no React re-render per mouse move.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      root.classList.add("custom-cursor");
      ring.style.translate = `${e.clientX}px ${e.clientY}px`;
      ring.style.opacity = "1";
      ring.dataset.hover = String(e.target instanceof Element && !!e.target.closest(interactive));
    };
    // Hide when the mouse leaves the window or goes into an embedded video player.
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget || (e.relatedTarget instanceof Element && e.relatedTarget.tagName === "IFRAME")) {
        ring.style.opacity = "0";
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerout", onOut);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return <div ref={ref} aria-hidden data-hover="false" className="cursor-ring" />;
}
