import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbLabel: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-36 pb-20 text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D9B45C 0%, transparent 45%), radial-gradient(circle at 80% 60%, #3C6E4F 0%, transparent 50%)",
        }}
      />
      <div className="section-container relative">
        <Reveal>
          <div className="flex items-center gap-1.5 text-xs text-ivory/50">
            <Link href="/" className="hover:text-ivory">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-ivory/70">{breadcrumbLabel}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <span className="mt-6 block text-xs font-semibold tracking-[0.3em] text-gold-light uppercase">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base text-ivory/70 sm:text-lg">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
