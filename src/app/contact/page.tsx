import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { WhatsappIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Medallion Avenue — book a site visit, request the brochure, or ask a question on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumbLabel="Contact"
        title="Let's Plan Your Visit"
        description="Reach out on WhatsApp, call our sales team directly, or send an enquiry below."
      />

      <section className="bg-ivory py-24">
        <div className="section-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Reach Us" title="Talk to the Sales Team" className="max-w-none" />

            <div className="mt-8 space-y-4">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsappIcon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <p className="text-sm text-ink/60">{siteConfig.contact.whatsappDisplay}</p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.callNumber}`}
                className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-gold-gradient text-ivory">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Call</p>
                  <p className="text-sm text-ink/60">{siteConfig.contact.callDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-emerald-gradient text-ivory">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-ink/60">{siteConfig.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-sand/60 text-ink">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Site Address</p>
                  <p className="text-sm text-ink/60">{siteConfig.location.line2}</p>
                </div>
              </div>
            </div>

            <Reveal className="mt-8 overflow-hidden rounded-3xl border border-sand/70">
              <iframe
                title="Medallion Avenue Location Map"
                src={siteConfig.location.mapsEmbedSrc}
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal direction="left" className="rounded-3xl border border-sand/70 bg-white p-8">
            <SectionHeading eyebrow="Send an Enquiry" title="We'll Reply on WhatsApp" className="max-w-none" />
            <div className="mt-8">
              <LeadForm formName="Contact Page" submitLabel="Send Enquiry" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
