import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import { LeadDialog } from "@/components/LeadDialog";
import { Button } from "@/components/ui/button";
import { floorPlans } from "@/content/downloads";

export const metadata: Metadata = {
  title: "Floor Plans",
  description:
    "Floor plans for 3+1 BHK, 4+1 BHK residences and commercial units at Medallion Avenue — request the latest layouts on WhatsApp.",
};

export default function FloorPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Floor Plans"
        breadcrumbLabel="Floor Plans"
        title="Layouts for Every Way of Living &amp; Doing Business"
        description="Detailed floor plans are being finalized. Request the latest layouts for your preferred configuration and our team will share them directly on WhatsApp."
      />
      <section className="bg-ivory py-24">
        <div className="section-container">
          <SectionHeading eyebrow="Configurations" title="Residential &amp; Commercial Layouts" align="center" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {floorPlans.map((plan) => (
              <Reveal
                key={plan.id}
                className="flex flex-col items-center rounded-2xl border border-sand/70 bg-white p-8 text-center"
              >
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-sand/40 text-xs tracking-wide text-ink/40 uppercase">
                  Layout coming soon
                </div>
                <p className="mt-5 font-display text-xl text-ink">{plan.type}</p>
                <p className="mt-1 text-sm text-ink/55">{plan.area}</p>
                <LeadDialog
                  formName={`Floor Plan — ${plan.type}`}
                  title={`Request the ${plan.type} Floor Plan`}
                  description="Share your details and our sales team will send the floor plan on WhatsApp as soon as it's ready."
                  submitLabel="Request Floor Plan"
                  defaultInterest={plan.type}
                  trigger={
                    <Button className="mt-6 bg-gold-gradient text-ivory hover:opacity-90">
                      Request on WhatsApp
                    </Button>
                  }
                />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
