"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ImageFrame } from "./ImageFrame";

type MediaItem = { type: "video" | "image"; src: string };

export function Carousel({
  images,
  localClips,
  slug,
  alt,
  placeholder,
}: {
  images: string[];
  localClips?: string[];
  slug: string;
  alt: string;
  placeholder?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Videos come first — motion content is the priority in the feed.
  const media: MediaItem[] = [
    ...(localClips ?? []).map((src): MediaItem => ({ type: "video", src })),
    ...images.map((src): MediaItem => ({ type: "image", src })),
  ];
  const hasMultiple = media.length > 1;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (placeholder || media.length === 0) {
    return (
      <Link href={`/${slug}`} className="block">
        <ImageFrame className="flex aspect-[16/10] w-full items-center justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Photos coming soon
          </span>
        </ImageFrame>
      </Link>
    );
  }

  const active = media[index];

  return (
    <div ref={containerRef} className="group relative">
      <Link href={`/${slug}`} className="block">
        <ImageFrame className="aspect-[16/10] w-full">
          {active.type === "video" ? (
            inView && (
              <video
                key={active.src}
                src={active.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            )
          ) : (
            <Image
              src={active.src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-opacity duration-300"
              priority={index === 0}
            />
          )}
        </ImageFrame>
      </Link>
      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setIndex((i) => (i - 1 + media.length) % media.length)}
            className="absolute left-0 top-0 flex h-full w-12 items-center justify-center font-mono text-2xl text-foreground/70 opacity-0 transition-opacity hover:text-accent group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setIndex((i) => (i + 1) % media.length)}
            className="absolute right-0 top-0 flex h-full w-12 items-center justify-center font-mono text-2xl text-foreground/70 opacity-0 transition-opacity hover:text-accent group-hover:opacity-100"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {media.map((m, i) => (
              <button
                key={i}
                aria-label={`Go to ${m.type} ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
