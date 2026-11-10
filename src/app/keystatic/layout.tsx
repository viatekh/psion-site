import type { Metadata } from "next";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = { title: "Editor", robots: { index: false } };

const ready = process.env.NODE_ENV === "development" || !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

export default function KeystaticLayout() {
  if (!ready) {
    return (
      <main className="flex flex-1 items-center justify-center p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          The editor has not been set up yet.
        </p>
      </main>
    );
  }
  return <KeystaticApp />;
}
