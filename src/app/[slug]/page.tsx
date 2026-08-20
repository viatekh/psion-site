import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { ImageFrame } from "@/components/ImageFrame";
import { VideoEmbed } from "@/components/VideoEmbed";
import { LocalClip } from "@/components/LocalClip";
import { Lightbox } from "@/components/Lightbox";
import { projects } from "@/data/projects";
import { feedSubtitle } from "@/data/schema";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.client,
    description: project.blurb ?? feedSubtitle(project),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasMultipleSections = project.sections.length > 1;

  const fields: [string, string | undefined][] = [
    ["Location", project.location],
    ["Date", project.date],
    ["Link", project.link],
    ["Designer", project.designer],
    ...project.credits.map((c): [string, string] => [c.label, c.value]),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="border-b border-line px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:w-96 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-10">
          <Link
            href="/projects"
            className="mb-10 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <div className="border-l-2 border-line pl-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
              Client
            </dt>
            <dd className="mt-1 text-lg text-foreground">{project.client}</dd>
          </div>

          <div className="mt-4 border-l-2 border-line pl-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
              Project{hasMultipleSections ? "s" : ""}
            </dt>
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

          <dl className="mt-4 space-y-4">
            {fields.map(
              ([label, value]) =>
                value && (
                  <div key={label} className="border-l-2 border-line pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {label}
                    </dt>
                    <dd className="mt-1 text-lg text-foreground">
                      {label === "Link" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm text-foreground underline decoration-line hover:text-accent hover:decoration-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                )
            )}
          </dl>

          {project.blurb && (
            <p className="mt-10 text-base leading-relaxed text-muted">{project.blurb}</p>
          )}

          {project.press && project.press.length > 0 && (
            <div className="mt-10 border-l-2 border-line pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                Press
              </dt>
              <div className="mt-2 space-y-1.5">
                {project.press.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm text-foreground underline decoration-line hover:text-accent hover:decoration-accent"
                  >
                    {p.outlet}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 flex items-center justify-between border-t border-line pt-6">
            <Link
              href={`/${prev.slug}`}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              ← {prev.client}
            </Link>
            <Link
              href={`/${next.slug}`}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {next.client} →
            </Link>
          </div>
        </aside>

        <main className="flex-1 space-y-4 p-6 lg:p-10">
          {project.videos && project.videos.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.videos.map((v) => (
                <VideoEmbed key={v.url} video={v} />
              ))}
            </div>
          )}

          {project.localClips && project.localClips.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.localClips.map((src) => (
                <LocalClip key={src} src={src} />
              ))}
            </div>
          )}

          {project.placeholder || project.images.length === 0 ? (
            <ImageFrame className="flex aspect-[16/9] w-full items-center justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Photos coming soon
              </span>
            </ImageFrame>
          ) : (
            <Lightbox images={project.images} alt={project.client} />
          )}

          {hasMultipleSections &&
            project.sections.map((s) => (
              <div key={s.name} id={slugify(s.name)} className="scroll-mt-6 border-t border-line pt-8">
                <h3 className="text-xl text-foreground">{s.name}</h3>
                {s.description && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    {s.description}
                  </p>
                )}
                {s.blurb && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{s.blurb}</p>}
                {s.videos && s.videos.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {s.videos.map((v) => (
                      <VideoEmbed key={v.url} video={v} />
                    ))}
                  </div>
                )}
                {s.images && s.images.length > 0 && (
                  <div className="mt-4">
                    <Lightbox images={s.images} alt={`${project.client} — ${s.name}`} />
                  </div>
                )}
              </div>
            ))}
        </main>
      </div>
    </div>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
