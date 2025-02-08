import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

function generateSitemapEntries(
  baseUrl: string,
  navigation: typeof siteConfig.navigation,
  parentPath = ""
): MetadataRoute.Sitemap {
  let entries: MetadataRoute.Sitemap = [];

  for (const item of navigation) {
    if (item.href) {
      const fullPath = `${parentPath}${item.href}`;
      entries.push({
        url: `${baseUrl}${fullPath}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: parentPath === "" ? 1 : 0.8,
      });
    }

    if (item.children) {
      entries = entries.concat(
        generateSitemapEntries(
          baseUrl,
          item.children,
          `${parentPath}${item.href || ""}`
        )
      );
    }
  }

  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapEntries(siteConfig.url, siteConfig.navigation);
}
