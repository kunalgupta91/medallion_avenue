import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/content/site";

const path = "/terms-and-conditions";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the Medallion Avenue website and the information published on it.",
  path,
});

const lastUpdated = "9 September 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="Legal"
        breadcrumbLabel="Terms & Conditions"
        title="Terms &amp; Conditions"
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="bg-ivory py-24">
        <div className="section-container max-w-3xl">
          <Reveal className="space-y-10">
            <p className="text-sm leading-relaxed text-ink/65">
              These Terms &amp; Conditions govern your use of the {siteConfig.name} website (
              {siteConfig.url.replace("https://", "")}). By accessing or using this website, you
              agree to be bound by these terms. If you do not agree, please do not use this
              website.
            </p>

            <div>
              <h2 className="font-display text-2xl text-ink">Not an Offer</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                This website is for general informational purposes only and does not constitute an
                offer, invitation, or contract of any kind. All content on this website is an
                invitation to offer, and no booking, sale, or agreement is created merely by
                browsing this website or submitting an enquiry. Any transaction shall be governed
                solely by the terms of the definitive application form, agreement for sale, or
                other formal documentation executed between the parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Indicative Information</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                All images, renders, floor plans, specifications, layouts, amenities, pricing, and
                timelines shown on this website are indicative, conceptual, and subject to change
                without prior notice. Amenities, layouts, and timelines remain subject to approvals
                from competent authorities. Actual dimensions, specifications, and deliverables may
                vary and shall be as per the final approved plans and agreement documents.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">RERA</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                {siteConfig.rera.text}. Prospective buyers are advised to independently verify the
                RERA registration status, approvals, and other project details before making any
                purchase decision.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Use of This Website</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65">
                <li>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party.</li>
                <li>You agree to provide accurate and current information when submitting any enquiry form on this website.</li>
                <li>You shall not attempt to gain unauthorised access to any part of this website, its servers, or any systems connected to it.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Intellectual Property</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                All content on this website, including text, graphics, logos, images, renders, and
                layouts, is the property of {siteConfig.name} or its licensors and is protected by
                applicable intellectual property laws. No content may be reproduced, distributed,
                or used commercially without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Third-Party Links</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                This website may contain links to third-party websites, including maps, social
                media, and payment or communication platforms. We are not responsible for the
                content, accuracy, or privacy practices of any third-party website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Limitation of Liability</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                To the maximum extent permitted by law, {siteConfig.name} shall not be liable for
                any direct, indirect, incidental, or consequential loss or damage arising from your
                use of this website or reliance on any information contained on it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Governing Law</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                These Terms &amp; Conditions shall be governed by and construed in accordance with
                the laws of India, and any disputes arising out of or in connection with this
                website shall be subject to the exclusive jurisdiction of the competent courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Changes to These Terms</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We may revise these Terms &amp; Conditions at any time by updating this page. Your
                continued use of the website after any such changes constitutes your acceptance of
                the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Contact Us</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                For any questions about these Terms &amp; Conditions, reach out to us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-2">
                  {siteConfig.contact.email}
                </a>{" "}
                or {siteConfig.location.line2}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
