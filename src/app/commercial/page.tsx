import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGroups } from "@/components/FeatureGroups";
import { LeadForm } from "@/components/LeadForm";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import {
  commercialBrandCategories,
  commercialFeatureGroups,
  commercialInvestmentReasons,
  commercialUnitSizes,
} from "@/content/commercial";

export const metadata: Metadata = {
  title: "Commercial Spaces",
  description:
    "Medallion Avenue's Ground+4 commercial precinct on the Kalka-Shimla Highway — the only high-end commercial address between Zirakpur and Shimla, leasing to Grade-A hotel, dining, and retail brands.",
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        breadcrumbLabel="Commercial"
        title="The Only High-End Commercial Address on the Corridor"
        description="A Ground+4 high-street precinct on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza — built for Grade-A hospitality, dining, and retail brands."
      />

      {/* Brand categories */}
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Tenant Mix"
            title="A Destination, Not Just a Plaza"
            description="Medallion Avenue's commercial precinct is designed to anchor a genuine catchment — not a single-use retail strip."
          />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {commercialBrandCategories.map((brand) => (
              <Reveal
                key={brand.label}
                className="rounded-2xl border border-sand/70 bg-white px-5 py-6 text-center"
              >
                <p className="text-sm font-semibold text-ink">{brand.label}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Feature groups */}
      <section className="bg-charcoal py-24 text-ivory">
        <div className="section-container">
          <SectionHeading
            eyebrow="Format & Positioning"
            title="Built for High-Street Retail, Backed by Highway Visibility"
            dark
          />
          <div className="mt-12">
            <FeatureGroups groups={commercialFeatureGroups} dark />
          </div>
        </div>
      </section>

      {/* Unit sizes */}
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading eyebrow="Unit Sizes" title="Formats to Suit Every Business" align="center" />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {commercialUnitSizes.map((unit) => (
              <Reveal
                key={unit.size}
                className="rounded-2xl border border-sand/70 bg-white py-8 text-center"
              >
                <p className="font-display text-xl text-ink">{unit.size}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Investment reasons */}
      <section className="bg-sand/30 py-24">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="ROI"
              title="Why Businesses Should Invest Here"
              description="A first-mover advantage in an underserved high-end corridor, with residential footfall built in from day one."
            />
            <Reveal delay={0.15} className="mt-8 flex items-center gap-3 rounded-2xl bg-emerald-gradient p-6 text-ivory">
              <TrendingUp className="size-8 shrink-0" />
              <p className="text-sm leading-relaxed">
                Great ROI potential — driven by category-first positioning, highway visibility, and a
                built-in residential customer base.
              </p>
            </Reveal>
          </div>
          <RevealGroup className="grid gap-5">
            {commercialInvestmentReasons.map((reason, i) => (
              <Reveal
                key={reason.title}
                delay={i * 0.05}
                className="rounded-2xl border border-sand/70 bg-white p-6"
              >
                <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{reason.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading eyebrow="Commercial Gallery" title="On the Ground Today" align="center" />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {["site-garden-01", "site-garden-02", "site-garden-03"].map((img) => (
              <Reveal key={img} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/site/${img}.jpg`}
                  alt="Medallion Avenue commercial precinct site view"
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
            title="Lease or Invest in the Commercial Precinct"
            description="Share your business requirement and unit-size preference — our leasing team will reach out on WhatsApp."
            dark
          />
          <Reveal direction="left" className="rounded-3xl bg-ivory p-8 text-ink">
            <LeadForm
              formName="Commercial — Enquiry"
              submitLabel="Send Enquiry"
              defaultInterest="Commercial Space"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
