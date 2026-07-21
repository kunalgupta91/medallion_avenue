import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { faqs } from "@/content/faq";

export function FAQTeaserSection() {
  return (
    <section className="bg-sand/30 py-24">
      <div className="section-container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Common Questions, Answered" align="center" />

        <Reveal className="mt-12">
          <Accordion className="rounded-2xl border border-sand/70 bg-white px-2">
            {faqs.slice(0, 5).map((faq) => (
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

        <Reveal delay={0.1} className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink hover:text-gold"
          >
            View All FAQs
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
