import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/content/site";

const path = "/privacy-policy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Medallion Avenue collects, uses, and protects the personal information you share with us.",
  path,
});

const lastUpdated = "9 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="Legal"
        breadcrumbLabel="Privacy Policy"
        title="Privacy Policy"
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="bg-ivory py-24">
        <div className="section-container max-w-3xl">
          <Reveal className="space-y-10">
            <p className="text-sm leading-relaxed text-ink/65">
              This Privacy Policy explains how {siteConfig.name} ("we", "us", "our") collects,
              uses, discloses, and safeguards your information when you visit{" "}
              {siteConfig.url.replace("https://", "")} or share your details with us through this
              website, enquiry forms, WhatsApp, phone, or email. By using this website, you
              consent to the practices described below.
            </p>

            <div>
              <h2 className="font-display text-2xl text-ink">Information We Collect</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65">
                <li>
                  <span className="font-semibold text-ink">Information you provide:</span> name,
                  phone number, email address, and any message details submitted through our
                  enquiry forms, brochure downloads, or WhatsApp/call/email correspondence.
                </li>
                <li>
                  <span className="font-semibold text-ink">Automatically collected data:</span>{" "}
                  IP address, browser type, device information, pages visited, and referral source,
                  collected via cookies and similar technologies.
                </li>
                <li>
                  <span className="font-semibold text-ink">Analytics and advertising data:</span>{" "}
                  we use Google Analytics, Google Tag Manager, Google Ads, and the Meta (Facebook)
                  Pixel to understand site usage and measure the performance of our marketing
                  campaigns.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">How We Use Your Information</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65">
                <li>To respond to your enquiries and share project information, pricing, and brochures.</li>
                <li>To schedule and coordinate site visits and follow-up communication.</li>
                <li>To send updates about Medallion Avenue via call, SMS, WhatsApp, or email.</li>
                <li>To measure and improve the performance of our website and marketing campaigns.</li>
                <li>To comply with applicable legal and regulatory requirements, including RERA.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Cookies &amp; Tracking Technologies</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We use cookies and pixels (including Google Tag Manager, Google Analytics, Google
                Ads, and the Meta Pixel) to remember your preferences, understand how visitors use
                this website, and show you relevant advertising on other platforms. You can
                disable cookies through your browser settings, though some parts of the website
                may not function as intended if you do so.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Sharing of Information</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We do not sell your personal information. We may share your details with our
                sales, marketing, and channel partner teams involved in Medallion Avenue, and with
                service providers (such as analytics, advertising, and CRM platforms) who process
                data on our behalf, solely to assist with the purposes listed above. We may also
                disclose information where required by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Data Retention &amp; Security</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We retain your information for as long as necessary to fulfil the purposes
                outlined in this policy or as required by law, and we take reasonable
                administrative and technical measures to protect it against unauthorised access,
                alteration, or disclosure. No method of transmission over the internet is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Your Choices</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                You may ask us to update, correct, or delete your personal information, or opt out
                of promotional communication, at any time by writing to{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-2">
                  {siteConfig.contact.email}
                </a>{" "}
                or calling{" "}
                <a href={`tel:${siteConfig.contact.callNumber}`} className="text-ink underline underline-offset-2">
                  {siteConfig.contact.callDisplay}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Changes to This Policy</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or applicable law. Any changes will be posted on this page with a
                revised "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Contact Us</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                For any questions about this Privacy Policy or how your data is handled, reach out
                to us at{" "}
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
