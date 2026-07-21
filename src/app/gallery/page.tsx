import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Medallion Avenue — on-site landscaping, construction progress, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
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
