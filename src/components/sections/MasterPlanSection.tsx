import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function MasterPlanSection() {
  return (
    <section className="bg-sand/30 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Master Plan"
          title="30% Built, 70% Green — By Design"
          description="The master plan reserves the majority of the land for landscaped green area, with residential towers and the commercial precinct occupying a deliberately small footprint."
          align="center"
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-[0_30px_80px_-40px_rgba(20,20,15,0.35)] sm:aspect-[16/9] sm:rounded-3xl">
            <div className="absolute inset-0 bg-emerald-gradient" />
            <div
              className="absolute inset-y-0 right-0 bg-gold-gradient"
              style={{ width: "30%" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center text-ivory sm:flex-row sm:gap-16">
              <div>
                <p className="font-display text-4xl sm:text-5xl">70%</p>
                <p className="text-xs tracking-[0.2em] uppercase">Green &amp; Open Area</p>
              </div>
              <div>
                <p className="font-display text-4xl sm:text-5xl">30%</p>
                <p className="text-xs tracking-[0.2em] uppercase">Built Footprint</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-ink/45">
            Indicative representation of land-use split. A detailed master plan diagram will be
            published here once finalized.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
