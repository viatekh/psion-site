import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { ImageFrame } from "@/components/ImageFrame";
import { VideoEmbed } from "@/components/VideoEmbed";
import { MediaGrid } from "@/components/MediaGrid";
import { getProjects } from "@/data/content";
import { feedSubtitle, VideoEmbed as VideoEmbedType } from "@/data/schema";

const labelClass = "font-mono text-[10px] uppercase tracking-[0.15em] text-accent";
const linkClass =
  "font-mono text-sm text-foreground underline decoration-line hover:text-accent hover:decoration-accent";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.client,
    description: project.blurb ?? feedSubtitle(project),
    alternates: { canonical: `/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasMultipleSections = project.sections.length > 1;
  const hasMedia = project.images.length > 0 || (project.localClips?.length ?? 0) > 0;

  // Rows left empty in the editor are left off the page.
  const fields = [
    ["Location", project.location],
    ["Date", project.date],
    ["Link", project.link],
    ["Designer", project.designer],
    ...project.credits.map((c) => [c.label, c.value]),
  ].filter((f): f is [string, string] => !!f[1]);

  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Phones: title, then media, then the datafile. Desktop: one sticky sidebar. */}
        <aside className="contents lg:sticky lg:top-0 lg:block lg:h-screen lg:w-96 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-line lg:px-10 lg:py-10">
          <div className="order-1 px-6 pt-8 lg:px-0 lg:pt-0">
            <Link
              href="/projects"
              className="mb-8 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent lg:mb-10"
            >
              ← Back to projects
            </Link>

            <div className="border-l-2 border-line pl-4">
              <p className={labelClass}>Client</p>
              <h1 className="mt-1 text-lg text-foreground">{project.client}</h1>
            </div>

            <div className="mt-4 border-l-2 border-line pl-4">
              <p className={labelClass}>Project{hasMultipleSections ? "s" : ""}</p>
              <div className="mt-2 space-y-3">
                {project.sections.map((s) => (
                  <div key={s.name}>
                    {hasMultipleSections ? (
                      <a href={`#${slugify(s.name)}`} className="text-lg text-foreground hover:text-accent">
                        {s.name}
                      </a>
                    ) : (
                      <p className="text-lg text-foreground">{s.name}</p>
                    )}
                    {s.description && <p className="text-sm text-muted">{s.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 border-t border-line px-6 py-8 lg:mt-4 lg:border-t-0 lg:p-0">
            <dl className="space-y-4">
              {fields.map(([label, value]) => (
                <div key={label} className="border-l-2 border-line pl-4">
                  <dt className={labelClass}>{label}</dt>
                  <dd className="mt-1 text-lg text-foreground">
                    {label === "Link" ? (
                      <a href={value} target="_blank" rel="noopener noreferrer" className={`break-all ${linkClass}`}>
                        {value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {project.blurb && (
              <p className="mt-10 text-base leading-relaxed text-muted">{project.blurb}</p>
            )}

            {project.press && project.press.length > 0 && (
              <div className="mt-10 border-l-2 border-line pl-4">
                <p className={labelClass}>Press</p>
                <div className="mt-2 space-y-1.5">
                  {project.press.map((p) => (
                    <a
                      key={p.url}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block ${linkClass}`}
                    >
                      {p.outlet}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <nav
              aria-label="More projects"
              className="mt-14 flex items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted"
            >
              <Link href={`/${prev.slug}`} className="transition-colors hover:text-accent">
                ← {prev.client}
              </Link>
              <Link href={`/${next.slug}`} className="text-right transition-colors hover:text-accent">
                {next.client} →
              </Link>
            </nav>
          </div>
        </aside>

        <main className="order-2 min-w-0 flex-1 space-y-4 p-6 lg:p-10">
          <EmbedGrid videos={project.videos} />

          {project.placeholder || !hasMedia ? (
            <ImageFrame className="flex aspect-[16/9] w-full items-center justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                No photos yet
              </span>
            </ImageFrame>
          ) : (
            <MediaGrid clips={project.localClips} images={project.images} alt={project.client} />
          )}

          {hasMultipleSections &&
            project.sections.map((s) => (
              <section key={s.name} id={slugify(s.name)} className="scroll-mt-6 space-y-4 border-t border-line pt-8">
                <div>
                  <h2 className="text-xl text-foreground">{s.name}</h2>
                  {s.description && (
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                      {s.description}
                    </p>
                  )}
                  {s.blurb && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{s.blurb}</p>}
                </div>
                <EmbedGrid videos={s.videos} />
                {s.images && s.images.length > 0 && (
                  <MediaGrid images={s.images} alt={`${project.client} — ${s.name}`} />
                )}
              </section>
            ))}
        </main>
      </div>
    </div>
  );
}

// An odd number of videos puts the first one full width so the grid never ends on a gap.
function EmbedGrid({ videos }: { videos?: VideoEmbedType[] }) {
  if (!videos || videos.length === 0) return null;
  const hasLead = videos.length % 2 === 1;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {videos.map((v, i) => (
        <VideoEmbed key={v.url} video={v} className={hasLead && i === 0 ? "sm:col-span-2" : ""} />
      ))}
    </div>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
