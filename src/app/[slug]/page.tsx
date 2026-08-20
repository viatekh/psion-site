import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const fields: [string, string | undefined][] = [
    ["Client", project.client],
    ["Project", project.title],
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
            href="/"
            className="mb-10 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <dl className="space-y-4">
            {fields.map(
              ([label, value]) =>
                value && (
                  <div key={label} className="border-l-2 border-line pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {label}
                    </dt>
                    <dd className="mt-1 font-serif text-lg italic text-foreground">
                      {label === "Link" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="not-italic font-mono text-sm text-foreground underline decoration-line hover:text-accent hover:decoration-accent"
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
            <p className="mt-10 font-serif text-base italic leading-relaxed text-muted">
              {project.blurb}
            </p>
          )}
        </aside>

        <main className="flex-1 p-6 lg:p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
