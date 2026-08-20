"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Carousel({
  images,
  slug,
  alt,
}: {
  images: string[];
  slug: string;
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden bg-surface">
      <Link href={`/${slug}`} className="block h-full w-full">
        <Image
          src={images[index]}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-opacity duration-300"
          priority={index === 0}
        />
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
