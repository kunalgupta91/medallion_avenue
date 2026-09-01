import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import { trustSignals } from "@/content/trust-signals";
import { projectHighlights } from "@/content/highlights";

const path = "/about";

export const metadata: Metadata = pageMetadata({
  title: "About the Project",
  description:
    "Medallion Avenue is an ultra-luxury residential and commercial development on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza — built with MIVAN construction across 70% green, 30% built land.",
  path,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow="About the Project"
        breadcrumbLabel="About"
        title="An Address Built on a Genuine Gap in the Market"
        description="Medallion Avenue brings ultra-luxury residential and commercial development to the Kalka-Shimla Highway — a corridor that has never had a high-end address of its own."
      />

      <section className="bg-ivory py-24">
        <div className="section-container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="The Vision"
              title="Presenting Ultra-Luxury Commercial &amp; Residential, With MIVAN Construction"
              description="Medallion Avenue is positioned as the only high-end market between Zirakpur and Shimla — a mixed-use address combining Stilt+14 residences with a Ground+4 commercial precinct, set within 70% landscaped green area."
            />
          </div>
          <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/site/site-garden-02.jpg"
              alt="Medallion Avenue landscaped grounds"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/30 py-24">
        <div className="section-container">
          <SectionHeading eyebrow="At a Glance" title="Project Highlights" align="center" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectHighlights.map((item) => (
              <Reveal
                key={item.title}
                className="rounded-2xl border border-sand/70 bg-white p-7"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-gradient text-ivory">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-ivory">
        <div className="section-container">
          <SectionHeading eyebrow="Why Trust Us" title="Built on Fundamentals, Not Just Promises" dark align="center" />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <Reveal key={signal.label} className="text-center">
                <signal.icon className="mx-auto size-6 text-gold-light" />
                <p className="mt-3 font-display text-3xl text-ivory">{signal.stat}</p>
                <p className="mt-1 text-sm font-semibold text-ivory/85">{signal.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/60">{signal.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
