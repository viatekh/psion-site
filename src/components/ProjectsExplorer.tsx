"use client";

import Link from "next/link";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Project, projectTypes, projectDisciplines, feedSubtitle } from "@/data/schema";
import { Carousel } from "./Carousel";

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
        active ? "border-accent bg-accent-dim text-accent" : "border-line text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [scrolledSlug, setScrolledSlug] = useState(projects[0]?.slug ?? "");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [disciplineFilter, setDisciplineFilter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const matching = useMemo(
    () =>
      projects.filter(
        (p) =>
          (!typeFilter || p.type === typeFilter) &&
          (!disciplineFilter || p.disciplines.some((d) => d === disciplineFilter))
      ),
    [projects, typeFilter, disciplineFilter]
  );
  // Projects without photos yet stay out of the feed and get a line in "More work" instead.
  const visible = useMemo(() => matching.filter((p) => !p.placeholder), [matching]);
  const pending = matching.filter((p) => p.placeholder);
  const activeSlug = visible.some((p) => p.slug === scrolledSlug) ? scrolledSlug : visible[0]?.slug;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const slug = visibleEntry?.target.getAttribute("data-slug");
        if (slug) setScrolledSlug(slug);
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

  const clearFilters = () => {
    setTypeFilter(null);
    setDisciplineFilter(null);
  };

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <h1 className="sr-only">Projects</h1>

      {/* On phones this is just a sticky filter bar; the full project index shows from lg up. */}
      <aside className="sticky top-0 z-20 flex flex-col border-b border-line bg-background lg:h-screen lg:w-72 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <div className="flex gap-2 overflow-x-auto px-6 py-3 lg:block lg:space-y-2 lg:overflow-visible lg:border-b lg:border-line lg:p-4">
          <div className="flex shrink-0 gap-2 lg:flex-wrap">
            <FilterChip active={!typeFilter && !disciplineFilter} onClick={clearFilters}>
              All
            </FilterChip>
            {projectTypes.map((type) => (
              <FilterChip
                key={type}
                active={typeFilter === type}
                onClick={() => setTypeFilter(typeFilter === type ? null : type)}
              >
                {type}
              </FilterChip>
            ))}
          </div>
          <span className="w-px shrink-0 self-stretch bg-line lg:hidden" aria-hidden />
          <div className="flex shrink-0 gap-2 lg:flex-wrap">
            {projectDisciplines.map((d) => (
              <FilterChip
                key={d}
                active={disciplineFilter === d}
                onClick={() => setDisciplineFilter(disciplineFilter === d ? null : d)}
              >
                {d}
              </FilterChip>
            ))}
          </div>
        </div>

        <nav aria-label="Projects" className="hidden flex-col p-2 lg:flex">
          {visible.map((p) => (
            <button
              key={p.slug}
              type="button"
              aria-current={activeSlug === p.slug}
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
      </aside>

      <main className="min-w-0 flex-1">
        {matching.length === 0 && (
          <div className="px-6 py-14 lg:px-12">
            <p className="text-lg text-muted">Nothing filed under that combination.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-accent hover:underline"
            >
              Show everything →
            </button>
          </div>
        )}

        {visible.map((p, i) => (
          <section
            key={p.slug}
            id={p.slug}
            data-slug={p.slug}
            ref={(el) => {
              sectionRefs.current[p.slug] = el;
            }}
            className="scroll-mt-12 border-b border-line px-6 py-10 lg:scroll-mt-0 lg:px-12 lg:py-14"
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
            <Carousel
              images={p.images}
              localClips={p.localClips}
              slug={p.slug}
              alt={p.client}
              preload={i === 0}
            />
          </section>
        ))}

        <section className="px-6 py-10 lg:px-12 lg:py-14">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">More work</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {pending.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-lg text-foreground transition-colors group-hover:text-accent">
                    {p.client}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted sm:text-right">
                    {feedSubtitle(p)}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/other"
                className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-lg text-foreground transition-colors group-hover:text-accent">
                  Other / Misc
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted sm:text-right">
                  Smaller jobs and one-offs →
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
