"use client";

import { useEffect } from "react";
import { posterFor } from "@/data/schema";
import { useInView } from "@/lib/useInView";

export function LoopVideo({ src }: { src: string }) {
  const [ref, inView] = useInView<HTMLVideoElement>();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [ref, inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={posterFor(src)}
      muted
      loop
      playsInline
      preload="none"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
