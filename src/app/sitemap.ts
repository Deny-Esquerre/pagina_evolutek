import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evolutek.pe";
  const date = new Date();

  return [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preguntas-frecuentes`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}