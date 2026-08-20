import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Sound, light and experience design studio founded in 2015 by Tekh Balance.",
};

const clients = [
  "Glastonbury Festival",
  "MO:DEM Festival",
  "Above Below",
  "FOLD",
  "Freerotation",
  "Two Shell",
  "BOOM Festival",
  "FKA Twigs",
  "Field Maneuvers",
  "The Cause",
  "Otherworld VR",
  "Tate Modern",
  "Boiler Room",
  "Warehouse Project",
];

const badges = [
  "City & Guilds Electrical Installation (18th Edition)",
  "PASMA",
  "IPAF 1B / 3A",
  "CSCS",
  "BECTU",
  "£10M Public Liability Insured",
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-0">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">About</h1>

        <p className="mt-6 text-3xl leading-snug text-foreground">
          Sound, light, and everything in between.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            Psion Systems is a sound, light and experience design studio founded in 2015 by{" "}
            <strong className="font-medium text-foreground">Tekh Balance</strong> — engineer,
            producer and DJ (as Auratekh) — out of a simple idea:
            the best shows treat sound, light and space as one instrument, not three separate
            departments.
          </p>
          <p>
            Since then the studio has built LED installations, lighting rigs and full show
            systems for festivals, clubs and artists worldwide, alongside broadcast studios,
            gallery installs and private events — with a track record most people only find out
            about once they start asking around.
          </p>
          <p>
            Come to us for the ambitious stuff — custom LED builds, full show programming,
            multi-discipline production that needs one team who can actually deliver it. But we
            also do the simple stuff: a pair of DJ decks, a PA for the weekend, a couple of
            moving heads for a birthday party. Same team, same standards, no job too small.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-l-2 border-line pl-4 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Founded</dt>
            <dd className="mt-1 text-foreground">2015</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Director</dt>
            <dd className="mt-1 text-foreground">Tekh Balance</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Based</dt>
            <dd className="mt-1 text-foreground">London, UK</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Also known as</dt>
            <dd className="mt-1 text-foreground">Auratekh (DJ)</dd>
          </div>
        </dl>

        <div className="mt-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            Selected clients
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            {clients.map((name, i) => {
              const project = projects.find((p) => p.client === name);
              return (
                <span key={name}>
                  {i > 0 && " · "}
                  {project ? (
                    <Link href={`/${project.slug}`} className="text-foreground hover:text-accent hover:underline">
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </span>
              );
            })}
          </p>
        </div>

        <div className="mt-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            Certifications
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          <Link href="/contact" className="text-accent hover:underline">
            Get in touch →
          </Link>
        </p>
      </main>
    </div>
  );
}
