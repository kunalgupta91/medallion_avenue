import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { locationAdvantages } from "@/content/location";
import { siteConfig } from "@/content/site";

export function LocationAdvantagesSection() {
  return (
    <section className="bg-sand/30 py-24">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Location"
            title="Positioned Where the Highway Meets the Hills"
            description="Medallion Avenue sits directly on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza — visible to every vehicle on one of North India's busiest hill corridors."
          />
          <ul className="mt-8 space-y-3">
            {locationAdvantages.map((item, i) => (
              <Reveal key={item} delay={i * 0.05} className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-emerald" />
                <span className="text-sm text-ink/75">{item}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <Link
              href="/location"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink hover:text-gold"
            >
              View Location Details
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal direction="left" className="overflow-hidden rounded-3xl border border-sand/70">
          <iframe
            title="Medallion Avenue Location Map"
            src={siteConfig.location.mapsEmbedSrc}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
