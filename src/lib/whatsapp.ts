import { siteConfig } from "@/content/site";

export type LeadFormValues = {
  name: string;
  phone: string;
  email?: string;
  interest?: string;
  message?: string;
};

export function buildWhatsappLeadUrl(
  values: LeadFormValues,
  formName: string
) {
  const lines = [
    `New Enquiry — ${formName}`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    values.interest ? `Interested in: ${values.interest}` : null,
    values.message ? `Message: ${values.message}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}

export function buildWhatsappQuickUrl(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
