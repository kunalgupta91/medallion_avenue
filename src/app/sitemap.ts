import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
