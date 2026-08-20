"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageFrame } from "./ImageFrame";

export function Carousel({
  images,
  slug,
  alt,
  placeholder,
}: {
  images: string[];
  slug: string;
  alt: string;
  placeholder?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  if (placeholder || images.length === 0) {
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

  return (
    <div className="group relative">
      <Link href={`/${slug}`} className="block">
        <ImageFrame className="aspect-[16/10] w-full">
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-opacity duration-300"
            priority={index === 0}
          />
        </ImageFrame>
      </Link>
      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-0 top-0 flex h-full w-12 items-center justify-center font-mono text-2xl text-foreground/70 opacity-0 transition-opacity hover:text-accent group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            className="absolute right-0 top-0 flex h-full w-12 items-center justify-center font-mono text-2xl text-foreground/70 opacity-0 transition-opacity hover:text-accent group-hover:opacity-100"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
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
