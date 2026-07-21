import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Medallion Avenue — Home"
    >
      <Image
        src="/images/logo/medallion-avenue-mark.png"
        alt=""
        width={40}
        height={34}
        className="h-[34px] w-auto shrink-0"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg tracking-[0.08em] transition-colors",
            dark ? "text-ivory" : "text-ink"
          )}
        >
          MEDALLION AVENUE
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] tracking-[0.25em] uppercase",
            dark ? "text-ivory/60" : "text-ink/50"
          )}
        >
          Kalka–Shimla Highway
        </span>
      </span>
    </Link>
  );
}
