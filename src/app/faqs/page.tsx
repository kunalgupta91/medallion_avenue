import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/Reveal";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Medallion Avenue.",
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        breadcrumbLabel="FAQs"
        title="Common Questions, Answered"
        description="Everything you need to know about Medallion Avenue's residences, commercial spaces, and construction."
      />
      <section className="bg-ivory py-24">
        <div className="section-container max-w-3xl">
          <Reveal>
            <Accordion className="rounded-2xl border border-sand/70 bg-white px-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-sand/60 px-4">
                  <AccordionTrigger className="text-left font-display text-base text-ink">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-ink/65">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
