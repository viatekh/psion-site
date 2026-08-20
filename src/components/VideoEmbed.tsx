"use client";

import { useEffect, useRef, useState } from "react";
import { VideoEmbed as VideoEmbedType, parseVideoUrl } from "@/data/schema";

const srcFor = (v: VideoEmbedType) => {
  const parsed = parseVideoUrl(v);
  if (!parsed) return null;

  if (parsed.provider === "vimeo") {
    const start = parsed.startSeconds ? `#t=${parsed.startSeconds}s` : "";
    return `https://player.vimeo.com/video/${parsed.id}?title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1${start}`;
  }

  const startParam = parsed.startSeconds ? `&start=${parsed.startSeconds}` : "";
  return `https://www.youtube.com/embed/${parsed.id}?autoplay=1&mute=1&loop=1&playlist=${parsed.id}${startParam}`;
};

export function VideoEmbed({ video }: { video: VideoEmbedType }) {
  const src = srcFor(video);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!src) return null;

  return (
    <div ref={ref} className="border border-line bg-surface">
      <div className="relative aspect-video">
        {inView && (
          <iframe
            src={src}
            title={video.label ?? "Project video"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
      {video.label && (
        <p className="border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {video.label}
        </p>
      )}
    </div>
  );
}
