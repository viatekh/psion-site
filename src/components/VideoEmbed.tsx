"use client";

import { VideoEmbed as VideoEmbedType, parseVideoUrl } from "@/data/schema";
import { useInView } from "@/lib/useInView";

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

export function VideoEmbed({ video, className = "" }: { video: VideoEmbedType; className?: string }) {
  const src = srcFor(video);
  // Players only exist while on screen, so a page of embeds never runs them all at once.
  const [ref, inView] = useInView<HTMLDivElement>();

  if (!src) return null;

  return (
    <div ref={ref} className={`border border-line bg-surface ${className}`}>
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
