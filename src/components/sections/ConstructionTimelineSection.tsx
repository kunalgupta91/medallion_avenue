import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { constructionTimeline } from "@/content/highlights";
import { cn } from "@/lib/utils";

const statusStyles = {
  complete: "bg-emerald text-ivory",
  "in-progress": "bg-gold text-ivory",
  upcoming: "border border-sand text-ink/50",
};

const statusLabels = {
  complete: "Complete",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
};

export function ConstructionTimelineSection() {
  return (
    <section className="bg-ivory py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Construction Progress"
          title="Building Medallion Avenue, Stage by Stage"
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-sand sm:left-1/2" />
          {constructionTimeline.map((stage, i) => (
            <Reveal key={stage.phase} delay={i * 0.08} className="relative mb-10 pl-10 last:mb-0 sm:pl-0">
              <div
                className={cn(
                  "absolute top-1 left-0 flex size-8 items-center justify-center rounded-full text-[10px] font-bold sm:left-1/2 sm:-translate-x-1/2",
                  statusStyles[stage.status]
                )}
              >
                {i + 1}
              </div>
              <div
                className={cn(
                  "sm:w-[calc(50%-2.5rem)]",
                  i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                )}
              >
                <span className="text-xs font-semibold tracking-wide text-ink/40 uppercase">
                  {statusLabels[stage.status]}
                </span>
                <h3 className="mt-1 font-display text-lg text-ink">{stage.phase}</h3>
                <p className="mt-1 text-sm text-ink/60">{stage.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
