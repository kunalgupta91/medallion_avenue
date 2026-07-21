"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const primaryLinks = navLinks.filter((link) =>
  ["/residential", "/commercial", "/amenities", "/gallery", "/location", "/contact"].includes(
    link.href
  )
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-panel border-b border-sand/60 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide text-ink/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.callNumber}`}
            className="flex items-center gap-2 text-sm text-ink/80 hover:text-gold"
          >
            <Phone className="size-4" />
            {siteConfig.contact.callDisplay}
          </a>
          <Button
            nativeButton={false}
            render={
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hi, I'd like to book a site visit to Medallion Avenue."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="bg-gold-gradient text-ivory hover:opacity-90"
          >
            Book Site Visit
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className="flex items-center justify-center rounded-full border border-sand/70 p-2 lg:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-ivory">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-md px-2 py-3 font-sans text-base text-ink/85 hover:bg-sand/50 hover:text-gold"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 px-4">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="bg-gold-gradient text-ivory"
              >
                Book Site Visit
              </Button>
              <Button
                nativeButton={false}
                render={<a href={`tel:${siteConfig.contact.callNumber}`} />}
                variant="outline"
              >
                Call {siteConfig.contact.callDisplay}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
