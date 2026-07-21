import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Clubhouse, gazebo, indoor & outdoor sports, water features, and 24x7 security — explore the amenities at Medallion Avenue.",
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        breadcrumbLabel="Amenities"
        title="Everyday Luxury, Built Into the Grounds"
        description="A spacious clubhouse, landscaped gazebo, sports facilities, and water features — set within 70% green area."
      />
      <section className="bg-ivory py-24">
        <div className="section-container">
          <AmenitiesGrid />
        </div>
      </section>
    </>
  );
}
