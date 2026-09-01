export const siteConfig = {
  name: "Medallion Avenue",
  tagline: "An Address Above the Ordinary",
  description:
    "Medallion Avenue is an ultra-luxury residential and commercial address on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza — built with MIVAN construction across 30% built form and 70% lush green area.",
  url: "https://www.medallionavenue.in",
  // TODO: replace with a purpose-made 1200x630 branded social-share graphic — this is a real site
  // photo used as a stopgap because /images/og-image.jpg didn't exist (every share preview 404'd).
  ogImage: "/images/site/site-garden-01.jpg",

  location: {
    line1: "Medallion Avenue",
    line2: "Kalka-Shimla Highway, Adjoining Chandimandir Toll Plaza",
    isExactAddressPlaceholder: true,
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Chandimandir+Toll+Plaza,+Kalka-Shimla+Highway&output=embed",
    mapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Chandimandir+Toll+Plaza+Kalka+Shimla+Highway",
  },

  contact: {
    whatsappNumber: "917840081118",
    whatsappDisplay: "+91 78400 81118",
    callNumber: "+917840081118",
    callDisplay: "+91 78400 81118",
    email: "sales@medallionavenue.in",
    emailIsPlaceholder: true,
  },

  social: {
    whatsapp: "https://wa.me/917840081118",
    facebook: "https://facebook.com/medallionavenue",
    instagram: "https://instagram.com/medallionavenue",
    isPlaceholder: true,
  },

  rera: {
    status: "coming-soon" as const,
    text: "RERA Registration: Coming Soon",
  },

  brochureUrl: "/brochure/medallion-avenue-brochure.pdf",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Price List", href: "/price-list" },
  { label: "Location", href: "/location" },
  { label: "Construction Progress", href: "/construction-progress" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
