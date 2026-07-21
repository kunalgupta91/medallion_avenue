import { investmentBenefits } from "@/content/highlights";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";

export function WhyInvestSection() {
  return (
    <section className="relative overflow-hidden bg-emerald-gradient py-24 text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, #D9B45C 0%, transparent 35%)",
        }}
      />
      <div className="section-container relative">
        <SectionHeading
          eyebrow="Why Invest"
          title="A Category-First Address on a Growth Corridor"
          description="Medallion Avenue combines a genuine market gap with highway-level visibility — the fundamentals that drive long-term value."
          dark
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ivory/15 sm:grid-cols-2">
          {investmentBenefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.05}
              className="glass-panel-dark p-8"
            >
              <span className="font-display text-3xl text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ivory">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{benefit.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
