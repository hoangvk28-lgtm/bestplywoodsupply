import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Best Plywood Supply",
    short_name: "Best Plywood",
    start_url: "/",
    display: "browser",
    background_color: "#f7f6f2",
    theme_color: "#153a32",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/kosmex-icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
