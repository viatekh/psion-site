// Reads the content saved by the editing screens (/keystatic) out of the /content folder.
import { cache } from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { Project, VideoEmbed } from "./schema";

const reader = createReader(process.cwd(), keystaticConfig);

const text = (value?: string | null) => value?.trim() || undefined;
const paths = (list: readonly (string | null)[]) => list.filter((p): p is string => !!p);
const embeds = (
  list: readonly { url: string | null; label: string; start: string }[]
): VideoEmbed[] =>
  list.flatMap((v) => (v.url ? [{ url: v.url, label: text(v.label), start: text(v.start) }] : []));

export const getProjects = cache(async (): Promise<Project[]> => {
  const [entries, ordering] = await Promise.all([
    reader.collections.projects.all(),
    reader.singletons.projectOrder.read(),
  ]);
  const order = ordering?.order ?? [];
  const rank = (slug: string) => {
    const i = order.indexOf(slug);
    return i === -1 ? order.length : i;
  };

  return entries
    .sort((a, b) => rank(a.slug) - rank(b.slug))
    .map(({ slug, entry }) => ({
      slug,
      client: entry.client,
      type: entry.type,
      disciplines: [...entry.disciplines],
      placeholder: entry.placeholder,
      sections: entry.sections.map((s) => ({
        name: s.name,
        description: text(s.description),
        blurb: text(s.blurb),
        videos: embeds(s.videos),
        images: paths(s.images),
      })),
      location: entry.location,
      date: entry.date,
      link: text(entry.link),
      designer: text(entry.designer),
      credits: [...entry.credits],
      press: entry.press.flatMap((p) => (p.url ? [{ outlet: p.outlet, url: p.url }] : [])),
      blurb: text(entry.blurb),
      videos: embeds(entry.videos),
      localClips: [...entry.localClips],
      images: paths(entry.images),
    }));
});

export const getHome = cache(() => reader.singletons.home.readOrThrow());
export const getAbout = cache(() => reader.singletons.about.readOrThrow());
export const getProcess = cache(() => reader.singletons.process.readOrThrow());
export const getOther = cache(async () => {
  const other = await reader.singletons.other.readOrThrow();
  return { ...other, images: paths(other.images) };
});
