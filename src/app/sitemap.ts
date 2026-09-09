import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/content/site";

const legalPaths = ["/privacy-policy", "/terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const navEntries = navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: link.href === "/" ? 1 : 0.7,
  }));

  const legalEntries = legalPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...navEntries, ...legalEntries];
}
