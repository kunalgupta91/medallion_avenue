import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { LeadDialog } from "@/components/LeadDialog";
import { Button } from "@/components/ui/button";
import { priceListNote, priceListDownloadUrl } from "@/content/downloads";
import { apartmentTypes } from "@/content/residential";
import { commercialUnitSizes } from "@/content/commercial";

const path = "/price-list";

export const metadata: Metadata = pageMetadata({
  title: "Price List",
  description:
    "Request the latest residential and commercial price list for Medallion Avenue on WhatsApp.",
  path,
});

export default function PriceListPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="Price List"
        breadcrumbLabel="Price List"
        title="Get the Latest Pricing on WhatsApp"
        description={priceListNote}
      />

      <section className="bg-ivory py-24">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-sand/70 bg-white p-8">
            <SectionHeading eyebrow="Residential" title="3+1 &amp; 4+1 BHK" className="max-w-none" />
            <ul className="mt-6 space-y-4">
              {apartmentTypes.map((apt) => (
                <li key={apt.type} className="flex items-center justify-between border-b border-sand/60 pb-4">
                  <div>
                    <p className="font-display text-lg text-ink">{apt.type}</p>
                    <p className="text-sm text-ink/55">{apt.area}</p>
                  </div>
                  <span className="text-sm font-medium text-gold">Price on Request</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="rounded-2xl border border-sand/70 bg-white p-8">
            <SectionHeading eyebrow="Commercial" title="High-Street Units" className="max-w-none" />
            <ul className="mt-6 space-y-3">
              {commercialUnitSizes.map((unit) => (
                <li key={unit.size} className="flex items-center justify-between border-b border-sand/60 pb-3">
                  <span className="text-sm text-ink/75">{unit.size}</span>
                  <span className="text-sm font-medium text-gold">Price on Request</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="section-container mt-14 flex justify-center">
          <LeadDialog
            formName="Price List — Request"
            title="Request the Price List"
            description="Share your details and the latest price list will download automatically — our team may also follow up on WhatsApp."
            submitLabel="Download Price List"
            downloadUrl={priceListDownloadUrl}
            trigger={
              <Button size="lg" className="bg-gold-gradient text-ivory hover:opacity-90">
                Request Full Price List
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
}
