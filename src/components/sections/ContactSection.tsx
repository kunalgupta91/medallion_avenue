import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="section-container grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Plan Your Visit to Medallion Avenue"
            description="Share your details below, and our sales team will connect with you on WhatsApp to arrange a site visit or answer your questions."
            dark
          />

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10">
                <MapPin className="size-4 text-gold-light" />
              </span>
              <span className="text-sm text-ivory/75">{siteConfig.location.line2}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10">
                <Phone className="size-4 text-gold-light" />
              </span>
              <a href={`tel:${siteConfig.contact.callNumber}`} className="text-sm text-ivory/75 hover:text-ivory">
                {siteConfig.contact.callDisplay}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10">
                <Mail className="size-4 text-gold-light" />
              </span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-ivory/75 hover:text-ivory">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        <Reveal direction="left" className="rounded-3xl bg-ivory p-8 text-ink">
          <LeadForm formName="Home — Contact Section" submitLabel="Send Enquiry" />
        </Reveal>
      </div>
    </section>
  );
}
