// Type definitions and helper functions for the projects data.
// You shouldn't need to touch this file — see projects.ts for the actual content.

export type Credit = { label: string; value: string };
export type Press = { outlet: string; url: string };

export type VideoEmbed = {
  // Paste the full YouTube or Vimeo URL — it's figured out automatically.
  url: string;
  label?: string;
  // Optional start time, e.g. "1:26" or "1:02:05" — leave out to start from the beginning.
  start?: string;
};

export type ProjectSection = {
  name: string;
  description?: string;
  blurb?: string;
  videos?: VideoEmbed[];
  images?: string[];
};

export type Project = {
  slug: string;
  client: string;
  sections: ProjectSection[];
  type: "Festival" | "Club" | "Concert" | "Private Client";
  location: string;
  date: string;
  link?: string;
  designer?: string;
  credits: Credit[];
  press?: Press[];
  blurb?: string;
  images: string[];
  videos?: VideoEmbed[];
  localClips?: string[];
  placeholder?: boolean;
};

// Each clip has a still frame saved next to it, e.g. clip.mp4 → clip-poster.jpg.
export const posterFor = (clip: string) => clip.replace(/\.mp4$/, "-poster.jpg");

export const projectTypes = ["Festival", "Club", "Concert", "Private Client"] as const;

export const feedSubtitle = (p: Project) =>
  p.sections.length === 1
    ? p.sections[0].description
      ? `${p.sections[0].name} — ${p.sections[0].description}`
      : p.sections[0].name
    : p.sections.map((s) => s.name).join(" · ");

const startToSeconds = (start?: string): number | undefined => {
  if (!start) return undefined;
  const parts = start.split(":").map((n) => parseInt(n, 10));
  if (parts.some(Number.isNaN)) return undefined;
  return parts.reduce((total, part) => total * 60 + part, 0);
};

export type ParsedVideo = {
  provider: "vimeo" | "youtube";
  id: string;
  label?: string;
  startSeconds?: number;
};

export const parseVideoUrl = (video: VideoEmbed): ParsedVideo | null => {
  const { url, label, start } = video;
  const startSeconds = startToSeconds(start);

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return { provider: "vimeo", id: vimeoMatch[1], label, startSeconds };
  }

  const youtubeMatch =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
  if (youtubeMatch) {
    return { provider: "youtube", id: youtubeMatch[1], label, startSeconds };
  }

  return null;
};
