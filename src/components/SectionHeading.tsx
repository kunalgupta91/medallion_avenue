import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "text-xs font-semibold tracking-[0.3em] uppercase",
              dark ? "text-gold-light" : "text-gold"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-ivory" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              dark ? "text-ivory/70" : "text-ink/65"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
