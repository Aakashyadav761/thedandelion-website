import type { MetadataRoute } from "next";

const BASE_URL = "https://www.thedandelion.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified },
    { url: `${BASE_URL}/accommodation`, lastModified },
    { url: `${BASE_URL}/activities`, lastModified },
    { url: `${BASE_URL}/around-us`, lastModified },
    { url: `${BASE_URL}/galleries`, lastModified },
    { url: `${BASE_URL}/contact`, lastModified },
    { url: `${BASE_URL}/groups`, lastModified },
    { url: `${BASE_URL}/corporate`, lastModified },
  ];
}
