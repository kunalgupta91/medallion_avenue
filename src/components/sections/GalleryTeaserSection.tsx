import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { galleryItems } from "@/content/gallery";

export function GalleryTeaserSection() {
  const images = galleryItems.filter((item) => item.type === "image");

  return (
    <section className="bg-ivory py-24">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Gallery" title="Life at Medallion Avenue, As It Stands Today" className="max-w-xl" />
          <Reveal>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink hover:text-gold"
            >
              View Full Gallery
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 640px) 25vw, 50vw"
                />
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <Link
              href="/gallery"
              className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-charcoal text-ivory"
            >
              <PlayCircle className="size-8 transition-transform group-hover:scale-110" />
              <span className="absolute bottom-4 text-xs tracking-wide uppercase">Watch Progress</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
