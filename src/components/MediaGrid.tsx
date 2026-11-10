"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImageFrame } from "./ImageFrame";
import { LoopVideo } from "./LoopVideo";

const tileSizes = "(min-width: 1024px) calc(50vw - 14rem), (min-width: 640px) 50vw, 100vw";
const leadSizes = "(min-width: 1024px) calc(100vw - 28rem), 100vw";

// Looping clips first, then photos (click to zoom). With an odd number of tiles the
// first one runs full width so the grid never ends on a gap.
export function MediaGrid({
  clips = [],
  images,
  alt,
}: {
  clips?: string[];
  images: string[];
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = openIndex !== null;
  const hasLead = (clips.length + images.length) % 2 === 1;

  useEffect(() => {
    if (!isOpen) return;

    const step = (delta: number) =>
      setOpenIndex((i) => (i === null ? null : (i + delta + images.length) % images.length));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, images.length]);

  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? null : (i + delta + images.length) % images.length));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {clips.map((src, i) => {
          const lead = hasLead && i === 0;
          return (
            <ImageFrame key={src} className={lead ? "aspect-[4/3] sm:col-span-2 sm:aspect-video" : "aspect-[4/3]"}>
              <LoopVideo src={src} />
            </ImageFrame>
          );
        })}
        {images.map((src, i) => {
          const lead = hasLead && clips.length === 0 && i === 0;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`cursor-zoom-in text-left ${lead ? "sm:col-span-2" : ""}`}
              aria-label={`View ${alt} photo ${i + 1} full size`}
            >
              <ImageFrame className={lead ? "aspect-[4/3] sm:aspect-video" : "aspect-[4/3]"}>
                <Image src={src} alt={alt} fill sizes={lead ? leadSizes : tileSizes} className="object-cover" />
              </ImageFrame>
            </button>
          );
        })}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photos`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setOpenIndex(null)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const startX = touchStartX.current;
            touchStartX.current = null;
            if (startX === null) return;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          }}
        >
          <p className="absolute left-4 top-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {String(openIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-3 z-10 px-2 font-mono text-2xl text-foreground/70 hover:text-accent"
          >
            ×
          </button>
          <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
            <Image src={images[openIndex]} alt={alt} fill sizes="100vw" className="object-contain" />
          </div>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous"
                className="absolute left-0 p-3 font-mono text-3xl text-foreground/70 hover:text-accent sm:left-4"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next"
                className="absolute right-0 p-3 font-mono text-3xl text-foreground/70 hover:text-accent sm:right-4"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
