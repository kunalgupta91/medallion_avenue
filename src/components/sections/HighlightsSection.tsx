import { projectHighlights } from "@/content/highlights";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";

export function HighlightsSection() {
  return (
    <section className="bg-ivory py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Project Highlights"
          title="An Address Engineered for Both Life and Business"
          description="Every detail of Medallion Avenue is designed around two ideas: space to live well, and a destination built to draw footfall."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((item) => (
            <Reveal
              key={item.title}
              className="group rounded-2xl border border-sand/70 bg-white p-7 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
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
  );
}
