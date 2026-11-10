import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = "https://psion.systems";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/process", "/about", "/contact", "/other"];
  return [...pages, ...projects.map((p) => `/${p.slug}`)].map((path) => ({ url: `${base}${path}` }));
}
