import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { amenities } from "@/content/amenities";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";

export function AmenitiesTeaserSection() {
  return (
    <section className="bg-ivory py-24">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Amenities"
            title="Everyday Luxury, Built Into the Grounds"
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink hover:text-gold"
            >
              View All Amenities
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {amenities.slice(0, 8).map((amenity) => (
            <Reveal
              key={amenity.title}
              className="rounded-2xl border border-sand/70 bg-white p-6 text-center transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
            >
              <amenity.icon className="mx-auto size-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-ink">{amenity.title}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
