"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

export function FloatingBar() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3 sm:right-8 sm:bottom-8">
      <motion.a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.08 }}
        className="flex size-11 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg shadow-black/20"
      >
        <InstagramIcon className="size-5" />
      </motion.a>
      <motion.a
        href={siteConfig.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        className="flex size-11 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg shadow-black/20"
      >
        <FacebookIcon className="size-5" />
      </motion.a>
      <motion.a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
          "Hi, I'm interested in Medallion Avenue. Please share more details."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25"
      >
        <WhatsappIcon className="size-7" />
      </motion.a>
    </div>
  );
}
