import { VideoEmbed as VideoEmbedType } from "@/data/projects";

const srcFor = (v: VideoEmbedType) =>
  v.provider === "vimeo"
    ? `https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0`
    : `https://www.youtube.com/embed/${v.id}`;

export function VideoEmbed({ video }: { video: VideoEmbedType }) {
  return (
    <div className="border border-line bg-surface">
      <div className="relative aspect-video">
        <iframe
          src={srcFor(video)}
          title={video.label ?? "Project video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {video.label && (
        <p className="border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {video.label}
        </p>
      )}
    </div>
  );
}
