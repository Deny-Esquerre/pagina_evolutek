import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacidad", "/iniciar-sesion", "/registro"],
      },
    ],
    sitemap: "https://evolutek.pe/sitemap.xml",
    host: "https://evolutek.pe",
  };
}