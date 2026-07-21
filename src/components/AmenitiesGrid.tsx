"use client";

import { useState } from "react";
import { amenities, amenityCategories } from "@/content/amenities";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function AmenitiesGrid() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? amenities : amenities.filter((a) => a.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            active === "all"
              ? "border-gold bg-gold-gradient text-ivory"
              : "border-sand text-ink/70 hover:border-gold hover:text-gold"
          )}
        >
          All
        </button>
        {amenityCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === cat.key
                ? "border-gold bg-gold-gradient text-ivory"
                : "border-sand text-ink/70 hover:border-gold hover:text-gold"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((amenity) => (
          <Reveal
            key={amenity.title}
            className="rounded-2xl border border-sand/70 bg-white p-6 text-center transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(20,20,15,0.25)]"
          >
            <amenity.icon className="mx-auto size-7 text-gold" />
            <p className="mt-3 text-sm font-semibold text-ink">{amenity.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/55">{amenity.description}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </div>
  );
}
