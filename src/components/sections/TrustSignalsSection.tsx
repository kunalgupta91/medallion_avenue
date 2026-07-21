import { trustSignals } from "@/content/trust-signals";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";

export function TrustSignalsSection() {
  return (
    <section className="border-b border-sand/60 bg-ivory py-16">
      <div className="section-container">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-ink/40 uppercase">
            Why Buyers Trust Medallion Avenue
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {trustSignals.map((signal) => (
            <Reveal key={signal.label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <signal.icon className="size-6 text-gold" />
              <p className="mt-3 font-display text-3xl text-ink">{signal.stat}</p>
              <p className="mt-1 text-sm font-semibold text-ink/80">{signal.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{signal.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
