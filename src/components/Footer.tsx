import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/content/site";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="section-container grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo dark />
          <p className="max-w-sm text-sm leading-relaxed text-ivory/65">
            {siteConfig.description}
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsappIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-wide text-gold-light">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.slice(0, 7).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ivory/65 hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-wide text-gold-light">More</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.slice(7).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ivory/65 hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-wide text-gold-light">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/65">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{siteConfig.location.line2}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.contact.callNumber}`} className="hover:text-ivory">
                {siteConfig.contact.callDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ivory">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="section-container flex flex-col gap-3 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Medallion Avenue. All rights reserved. {siteConfig.rera.text}.
          </p>
          <p className="max-w-2xl">
            This is not an offer, it is an invitation to offer. All images, renders, specifications,
            and layouts are indicative and subject to change without prior notice. Amenities and
            timelines are subject to approvals from competent authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}
