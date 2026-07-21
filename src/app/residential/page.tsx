import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGroups } from "@/components/FeatureGroups";
import { LeadForm } from "@/components/LeadForm";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import {
  apartmentTypes,
  residentialFeatureGroups,
  residentialLifestylePillars,
} from "@/content/residential";
import { amenities } from "@/content/amenities";

export const metadata: Metadata = {
  title: "Residential",
  description:
    "3+1 & 4+1 BHK luxury residences at Medallion Avenue — Stilt+14 towers built with MIVAN construction, set within 70% green landscaped area on the Kalka-Shimla Highway.",
};

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        breadcrumbLabel="Residential"
        title="Homes Designed Around Space, Light & Green"
        description="Stilt+14 residential towers with 3+1 & 4+1 BHK layouts, both-side open and facing the green park, built with MIVAN construction."
      />

      {/* Lifestyle pillars */}
      <section className="bg-ivory py-24">
        <div className="section-container grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right" className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/site/site-garden-01.jpg"
              alt="Landscaped grounds at Medallion Avenue residential towers"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Lifestyle"
              title="A Home That Breathes"
              description="70% of Medallion Avenue is landscaped green area — every residence is designed to feel connected to it."
            />
            <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2">
              {residentialLifestylePillars.map((pillar) => (
                <Reveal key={pillar.title} className="rounded-2xl border border-sand/70 bg-white p-6">
                  <h3 className="font-display text-lg text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{pillar.description}</p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Apartment types */}
      <section className="bg-charcoal py-24 text-ivory">
        <div className="section-container">
          <SectionHeading eyebrow="Configurations" title="3+1 & 4+1 BHK Residences" dark align="center" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            {apartmentTypes.map((apt) => (
              <Reveal key={apt.type} className="glass-panel-dark rounded-2xl p-8 text-center">
                <p className="font-display text-3xl text-gold-light">{apt.type}</p>
                <p className="mt-2 text-sm font-medium text-ivory/80">{apt.area}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{apt.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Feature groups */}
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Specifications"
            title="Every Detail, Considered"
            description="From MIVAN construction to modular kitchens — Medallion Avenue residences are finished for luxury living from day one."
          />
          <div className="mt-12">
            <FeatureGroups groups={residentialFeatureGroups} />
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section className="bg-sand/30 py-24">
        <div className="section-container">
          <SectionHeading eyebrow="Amenities" title="Clubhouse, Green Spaces & More" align="center" />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {amenities.map((amenity) => (
              <Reveal
                key={amenity.title}
                className="rounded-2xl border border-sand/70 bg-white p-6 text-center"
              >
                <amenity.icon className="mx-auto size-6 text-gold" />
                <p className="mt-3 text-sm font-semibold text-ink">{amenity.title}</p>
                <p className="mt-1 text-xs text-ink/55">{amenity.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading eyebrow="Gallery" title="On-Site at Medallion Avenue" align="center" />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {["site-garden-01", "site-garden-02", "site-garden-03"].map((img) => (
              <Reveal key={img} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/site/${img}.jpg`}
                  alt="Medallion Avenue residential site view"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-charcoal py-24 text-ivory">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Enquire"
            title="Find Your 3+1 or 4+1 BHK Home"
            description="Tell us which configuration interests you — our sales team will follow up on WhatsApp with availability and pricing."
            dark
          />
          <Reveal direction="left" className="rounded-3xl bg-ivory p-8 text-ink">
            <LeadForm
              formName="Residential — Enquiry"
              submitLabel="Send Enquiry"
              defaultInterest="Residential — 3+1 BHK"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
