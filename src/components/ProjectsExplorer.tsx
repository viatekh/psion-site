"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Project, projectTypes, feedSubtitle } from "@/data/schema";
import { Carousel } from "./Carousel";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const visible = useMemo(
    () => (typeFilter ? projects.filter((p) => p.type === typeFilter) : projects),
    [projects, typeFilter]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          const slug = visibleEntry.target.getAttribute("data-slug");
          if (slug) setActiveSlug(slug);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    visible.forEach((p) => {
      const el = sectionRefs.current[p.slug];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visible]);

  const scrollToProject = (slug: string) => {
    sectionRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <aside className="flex flex-col border-b border-line lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <div className="flex flex-wrap gap-2 border-b border-line p-4">
          <button
            onClick={() => setTypeFilter(null)}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border transition-colors ${
              typeFilter === null
                ? "border-accent bg-accent-dim text-accent"
                : "border-line text-muted hover:text-foreground"
            }`}
          >
            All
          </button>
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border transition-colors ${
                typeFilter === type
                  ? "border-accent bg-accent-dim text-accent"
                  : "border-line text-muted hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <nav className="flex flex-col p-2">
          {visible.map((p) => (
            <button
              key={p.slug}
              onClick={() => scrollToProject(p.slug)}
              className={`flex items-center gap-3 border-l-2 px-3 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                activeSlug === p.slug
                  ? "border-accent bg-accent-dim text-accent"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  activeSlug === p.slug ? "bg-accent" : "bg-line"
                }`}
              />
              {p.client}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-line p-2">
          <Link
            href="/other"
            className="flex items-center gap-3 border-l-2 border-transparent px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
            Other / Misc
          </Link>
        </div>
      </aside>

      <main className="flex-1">
        {visible.map((p) => (
          <section
            key={p.slug}
            id={p.slug}
            data-slug={p.slug}
            ref={(el) => {
              sectionRefs.current[p.slug] = el;
            }}
            className="border-b border-line px-6 py-14 lg:px-12"
          >
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <Link href={`/${p.slug}`} className="group">
                <h2 className="text-2xl font-normal text-foreground transition-colors group-hover:text-accent lg:text-3xl">
                  {p.client}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {feedSubtitle(p)}
                </p>
              </Link>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                {p.type}
              </span>
            </div>
            <Carousel images={p.images} slug={p.slug} alt={p.client} placeholder={p.placeholder} />
          </section>
        ))}
      </main>
    </div>
  );
}
