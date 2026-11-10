"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ImageFrame } from "./ImageFrame";
import { LoopVideo } from "./LoopVideo";

type MediaItem = { type: "video" | "image"; src: string };

const arrowClass =
  "absolute top-0 flex h-full w-12 items-center justify-center font-mono text-2xl text-foreground/70 opacity-0 transition-opacity hover:text-accent focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100";

export function Carousel({
  images,
  localClips,
  slug,
  alt,
  placeholder,
  preload = false,
}: {
  images: string[];
  localClips?: string[];
  slug: string;
  alt: string;
  placeholder?: boolean;
  preload?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Videos come first — motion content is the priority in the feed.
  const media: MediaItem[] = [
    ...(localClips ?? []).map((src): MediaItem => ({ type: "video", src })),
    ...images.map((src): MediaItem => ({ type: "image", src })),
  ];

  if (placeholder || media.length === 0) {
    return (
      <Link href={`/${slug}`} className="block">
        <ImageFrame className="flex aspect-[16/10] w-full items-center justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            No photos yet
          </span>
        </ImageFrame>
      </Link>
    );
  }

  const step = (delta: number) => setIndex((i) => (i + delta + media.length) % media.length);
  const active = media[index];

  return (
    <div
      className="group relative"
      onTouchStart={(e) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start || media.length < 2) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
      }}
    >
      <Link href={`/${slug}`} className="block">
        <ImageFrame className="aspect-[16/10] w-full">
          {active.type === "video" ? (
            <LoopVideo key={active.src} src={active.src} />
          ) : (
            <Image
              src={active.src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) calc(100vw - 24rem), 100vw"
              className="object-cover"
              preload={preload && index === 0}
            />
          )}
        </ImageFrame>
      </Link>
      {media.length > 1 && (
        <>
          <button type="button" aria-label="Previous" onClick={() => step(-1)} className={`left-0 ${arrowClass}`}>
            ‹
          </button>
          <button type="button" aria-label="Next" onClick={() => step(1)} className={`right-0 ${arrowClass}`}>
            ›
          </button>
          <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2">
            {media.map((m, i) => (
              <button
                key={m.src}
                type="button"
                aria-label={`Go to ${m.type} ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className="p-1.5"
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? "bg-accent" : "bg-foreground/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
