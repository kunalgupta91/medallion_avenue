import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

const path = "/gallery";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos and videos from Medallion Avenue — on-site landscaping, construction progress, and more.",
  path,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="Gallery"
        breadcrumbLabel="Gallery"
        title="Medallion Avenue, As It Stands Today"
        description="Real photos and videos from the site — updated as construction progresses."
      />
      <section className="bg-ivory py-24">
        <div className="section-container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
