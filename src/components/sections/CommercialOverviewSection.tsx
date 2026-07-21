import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { commercialBrandCategories } from "@/content/commercial";

export function CommercialOverviewSection() {
  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="section-container grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-light uppercase">
              Commercial
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">
              The Only High-End Market Between Zirakpur &amp; Shimla
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              A Ground+4 high-street precinct leasing to Grade-A hospitality, dining, and retail
              brands — anchored by highway visibility and a built-in residential catchment.
            </p>
          </Reveal>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {commercialBrandCategories.map((brand, i) => (
              <Reveal key={brand.label} delay={0.1 + i * 0.03} as="span">
                <span className="inline-block rounded-full border border-ivory/15 bg-ivory/5 px-3.5 py-1.5 text-xs text-ivory/75">
                  {brand.label}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <Link
              href="/commercial"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold-light pb-1 font-medium text-ivory transition-colors hover:text-gold-light"
            >
              Explore Commercial Spaces
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal direction="left" className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/site/site-garden-03.jpg"
              alt="Site frontage at Medallion Avenue along the highway"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
