import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const label = IBM_Plex_Mono({
  variable: "--font-label",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const editorial = Newsreader({
  variable: "--font-editorial",
  style: ["italic", "normal"],
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psion Systems",
  description: "Lighting design, LED installation and show operation — Psion Systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${label.variable} ${editorial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
