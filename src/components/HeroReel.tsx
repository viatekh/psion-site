"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroReel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    // People who ask their device for less motion get the still frame instead.
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <Link href="/projects" aria-label="View projects" className="absolute inset-0 block">
        <video
          ref={ref}
          src="/reel/psion-reel.mp4"
          poster="/reel/psion-reel-poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Link>
      <div
        className="pointer-events-none absolute inset-0 bg-background/60 lg:bg-transparent lg:[background-image:linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.6)_40%,rgba(10,10,10,0.2)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,6,5,0.5) 100%)" }}
        aria-hidden
      />
    </div>
  );
}
