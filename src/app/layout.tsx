import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const label = IBM_Plex_Mono({
  variable: "--font-label",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psion.systems"),
  title: {
    default: "Psion Systems",
    template: "%s — Psion Systems",
  },
  description: "Sound, light and experience design studio. London.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${label.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteChrome>
          <CustomCursor />
        </SiteChrome>
        {children}
        <SiteChrome>
          <Footer />
        </SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
