import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { residentialLifestylePillars } from "@/content/residential";

export function ResidentialOverviewSection() {
  return (
    <section className="bg-ivory py-24">
      <div className="section-container grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/site/site-garden-02.jpg"
              alt="Landscaped grounds at Medallion Avenue residences"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="glass-panel absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl p-5 sm:block">
            <p className="font-display text-2xl text-ink">2,500–3,500</p>
            <p className="text-xs tracking-wide text-ink/60 uppercase">Sq. Ft. Super Area</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Residential
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              3+1 &amp; 4+1 BHK Homes, Both-Side Open to Green Parks
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Stilt+14 residential towers built with MIVAN construction, set within 70% green
              landscaped area — designed as a gated, Vastu-friendly community for family living.
            </p>
          </Reveal>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {residentialLifestylePillars.map((pillar, i) => (
              <Reveal key={pillar.title} as="li" delay={0.12 + i * 0.05} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald" />
                <span className="text-sm text-ink/75">{pillar.title}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <Link
              href="/residential"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink transition-colors hover:text-gold"
            >
              Explore Residences
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
