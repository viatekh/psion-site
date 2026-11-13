import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // The editor's GitHub sign-in runs on 127.0.0.1 rather than localhost; let dev assets load there.
  allowedDevOrigins: ["127.0.0.1"],
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        // Photos and clips in /public/projects/<project>/<file> — let browsers keep them for a day.
        source: "/projects/:dir/:file",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/projects/:dir/images/:file",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/reel/:file",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
