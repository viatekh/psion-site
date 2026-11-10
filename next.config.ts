import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
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
    ];
  },
};

export default nextConfig;
