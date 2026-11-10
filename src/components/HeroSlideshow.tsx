"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type HeroImage = { src: string; slug: string };

// TODO: placeholder selection — swap for the best hero shots once picked.
export function HeroSlideshow({ images }: { images: HeroImage[] }) {
  const [slide, setSlide] = useState<{ index: number; prev: number | null }>({ index: 0, prev: null });
  const layerRef = useRef<HTMLDivElement>(null);
  const count = images.length;
  const next = (slide.index + 1) % count;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setSlide((s) => ({ index: (s.index + 1) % count, prev: s.index })),
      6000
    );

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        if (layerRef.current) layerRef.current.style.translate = `${x * -10}px ${y * -10}px`;
      });
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <div ref={layerRef} className="absolute inset-[-3%] scale-[1.03] transition-[translate] duration-300 ease-out">
        {images.map((img, i) => {
          const isActive = i === slide.index;
          // Only the current slide, the one fading out and the one up next are ever downloaded.
          const mounted = isActive || i === slide.prev || i === next;
          return (
            <Link
              key={img.src}
              href={`/${img.slug}`}
              className="absolute inset-0 block transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
              tabIndex={isActive ? 0 : -1}
              aria-hidden={!isActive}
            >
              {mounted && (
                <Image src={img.src} alt="" fill preload={i === 0} sizes="100vw" className="object-cover" />
              )}
            </Link>
          );
        })}
      </div>
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
