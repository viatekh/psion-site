import type { MetadataRoute } from "next";
import { getProjects } from "@/data/content";

const base = "https://psion.systems";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const pages = ["", "/projects", "/about", "/contact", "/other"];
  return [...pages, ...projects.map((p) => `/${p.slug}`)].map((path) => ({ url: `${base}${path}` }));
}
