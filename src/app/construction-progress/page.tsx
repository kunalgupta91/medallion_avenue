import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ConstructionTimelineSection } from "@/components/sections/ConstructionTimelineSection";

const path = "/construction-progress";

export const metadata: Metadata = pageMetadata({
  title: "Construction Progress",
  description:
    "Track construction progress at Medallion Avenue — from land development and MIVAN structural work to amenities and handover.",
  path,
});

export default function ConstructionProgressPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="Construction Progress"
        breadcrumbLabel="Construction Progress"
        title="Building Medallion Avenue, Stage by Stage"
        description="Follow real progress on the ground as Medallion Avenue's residential towers and commercial precinct take shape."
      />

      <section className="bg-ivory py-16">
        <div className="section-container">
          <SectionHeading eyebrow="Latest Update" title="A Walkthrough of the Site" align="center" />
          <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl">
            <video controls poster="/images/site/site-garden-01.jpg" className="w-full">
              <source src="/videos/site-progress.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </section>

      <ConstructionTimelineSection />
    </>
  );
}
