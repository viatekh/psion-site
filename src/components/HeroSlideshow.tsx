"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type HeroImage = { src: string; slug: string };

// TODO: placeholder selection — swap for the best hero shots once picked.
export function HeroSlideshow({ images }: { images: HeroImage[] }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 6000);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setOffset({ x, y });
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background">
      <div
        className="absolute inset-[-3%] transition-transform duration-300 ease-out"
        style={{ transform: `translate(${offset.x * -10}px, ${offset.y * -10}px) scale(1.03)` }}
      >
        {images.map((img, i) => (
          <Link
            key={img.src}
            href={`/${img.slug}`}
            className="absolute inset-0 block transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
            tabIndex={i === index ? 0 : -1}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </Link>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(5,6,5,0.6) 100%)",
        }}
      />
    </div>
  );
}
