import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { PageLabel } from "@/components/PageLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Psion Systems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto max-w-2xl px-6 py-16 lg:px-0">
        <h1 className="sr-only">Contact Psion Systems</h1>
        <PageLabel>Contact</PageLabel>
        <div className="mt-6 space-y-4">
          <a
            href="mailto:tekh@psion.systems"
            className="block text-2xl text-foreground transition-colors hover:text-accent"
          >
            tekh@psion.systems
          </a>
          <a
            href="https://www.instagram.com/psion.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
          >
            @psion.systems on Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/tekh-balance-98526a251/"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
