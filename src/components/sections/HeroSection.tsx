"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadDialog } from "@/components/LeadDialog";
import { siteConfig } from "@/content/site";
import { Counter } from "@/components/animations/Counter";

const heroStats = [
  { value: 70, suffix: "%", label: "Green & Open Area" },
  { value: 14, prefix: "Stilt+", label: "Residential Floors" },
  { value: 4, prefix: "G+", label: "Commercial Concept" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal text-ivory">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/site/site-garden-01.jpg"
          alt="Landscaped grounds at Medallion Avenue"
          fill
          priority
          className="object-cover opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, #D9B45C 0%, transparent 40%), radial-gradient(circle at 85% 75%, #3C6E4F 0%, transparent 45%)",
        }}
      />

      <div className="section-container relative w-full pt-32 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold-light uppercase"
        >
          Kalka–Shimla Highway · Adjoining Chandimandir Toll Plaza
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Medallion Avenue
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg text-ivory/75 sm:text-xl"
        >
          An ultra-luxury residential &amp; commercial address, built with MIVAN
          construction across 30% built form and 70% lush green area.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <LeadDialog
            formName="Hero — Book Site Visit"
            title="Book a Site Visit"
            description="Share your details and we'll arrange a visit to Medallion Avenue at a time that works for you."
            submitLabel="Book Site Visit"
            trigger={
              <Button size="lg" className="bg-gold-gradient text-ivory hover:opacity-90">
                Book Site Visit
              </Button>
            }
          />
          <LeadDialog
            formName="Hero — Download Brochure"
            title="Download the Brochure"
            description="Leave your details and the brochure will download automatically — our team may also follow up on WhatsApp."
            submitLabel="Download Brochure"
            downloadUrl={siteConfig.brochureUrl}
            trigger={
              <Button
                size="lg"
                variant="outline"
                className="border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <Download className="size-4" />
                Download Brochure
              </Button>
            }
          />
          <a
            href={`tel:${siteConfig.contact.callNumber}`}
            className="flex items-center gap-2 text-sm font-medium text-ivory/80 hover:text-gold-light"
          >
            <Phone className="size-4" />
            Call Now — {siteConfig.contact.callDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-ivory/15 pt-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-gold-light sm:text-4xl">
                {stat.prefix}
                <Counter value={stat.value} suffix={stat.suffix ?? ""} />
              </p>
              <p className="mt-1 text-xs tracking-wide text-ivory/60 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
