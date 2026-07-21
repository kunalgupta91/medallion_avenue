"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";
import { galleryFilters, galleryItems, type GalleryItem } from "@/content/gallery";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    active === "all" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActive(filter.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === filter.key
                ? "border-gold bg-gold-gradient text-ivory"
                : "border-sand text-ink/70 hover:border-gold hover:text-gold"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-ink/50">
          More {galleryFilters.find((f) => f.key === active)?.label.toLowerCase()} media coming soon.
        </p>
      ) : (
        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {filtered.map((item) => (
            <Reveal key={item.id}>
              <button
                onClick={() => setLightboxItem(item)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
              >
                {item.type === "video" ? (
                  <>
                    <Image
                      src="/images/site/site-garden-01.jpg"
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                      <PlayCircle className="size-10 text-ivory transition-transform group-hover:scale-110" />
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                )}
              </button>
            </Reveal>
          ))}
        </RevealGroup>
      )}

      <Dialog open={!!lightboxItem} onOpenChange={(open) => !open && setLightboxItem(null)}>
        <DialogContent showCloseButton={false} className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          {lightboxItem && (
            <div className="relative overflow-hidden rounded-2xl bg-charcoal">
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-ivory/90 text-ink"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              {lightboxItem.type === "video" ? (
                <video controls autoPlay className="max-h-[80vh] w-full" poster="/images/site/site-garden-01.jpg">
                  <source src={lightboxItem.src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative aspect-[4/3] w-full">
                  <Image src={lightboxItem.src} alt={lightboxItem.alt} fill className="object-contain" sizes="90vw" />
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
