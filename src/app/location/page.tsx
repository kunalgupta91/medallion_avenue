import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import { landmarks, locationAdvantages } from "@/content/location";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Medallion Avenue is located on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza — with strong connectivity across the Panchkula-Chandigarh tricity belt.",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        breadcrumbLabel="Location"
        title="Where the Highway Meets the Hills"
        description={siteConfig.location.line2}
      />

      <section className="bg-ivory py-24">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Advantages" title="Why This Location Works" className="max-w-none" />
            <ul className="mt-8 space-y-3">
              {locationAdvantages.map((item) => (
                <Reveal
                  key={item}
                  as="li"
                  className="rounded-xl border border-sand/70 bg-white p-4 text-sm text-ink/75"
                >
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal direction="left" className="overflow-hidden rounded-3xl border border-sand/70">
            <iframe
              title="Medallion Avenue Location Map"
              src={siteConfig.location.mapsEmbedSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/30 py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Connectivity"
            title="Nearby Landmarks &amp; Travel Times"
            description="Distances below are placeholders pending the confirmed plot address — they will be updated with exact figures shortly."
            align="center"
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landmarks.map((landmark) => (
              <Reveal key={landmark.name} className="rounded-2xl border border-sand/70 bg-white p-6">
                <landmark.icon className="size-6 text-gold" />
                <p className="mt-3 text-xs font-semibold tracking-wide text-ink/40 uppercase">
                  {landmark.label}
                </p>
                <p className="mt-1 font-display text-lg text-ink">{landmark.name}</p>
                <div className="mt-3 flex items-center gap-4 text-sm text-ink/55">
                  <span>{landmark.distance}</span>
                  <span>{landmark.time}</span>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
