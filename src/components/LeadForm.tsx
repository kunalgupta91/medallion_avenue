"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadFormSchema, type LeadFormSchema } from "@/lib/validation";
import { buildWhatsappLeadUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";

const interestOptions = [
  "Residential — 3+1 BHK",
  "Residential — 4+1 BHK",
  "Commercial Space",
  "Site Visit",
  "General Enquiry",
];

export function LeadForm({
  formName,
  submitLabel = "Send on WhatsApp",
  showInterest = true,
  showMessage = true,
  defaultInterest,
  downloadUrl,
  onSubmitted,
}: {
  formName: string;
  submitLabel?: string;
  showInterest?: boolean;
  showMessage?: boolean;
  defaultInterest?: string;
  downloadUrl?: string;
  onSubmitted?: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { interest: defaultInterest ?? "" },
  });

  const interest = watch("interest");

  function onSubmit(values: LeadFormSchema) {
    const url = buildWhatsappLeadUrl(values, formName);
    window.open(url, "_blank", "noopener,noreferrer");

    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

    setSubmitted(true);
    onSubmitted?.();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald/20 bg-emerald/5 px-6 py-10 text-center">
        <CheckCircle2 className="size-10 text-emerald" />
        <p className="font-display text-lg text-ink">Thank you!</p>
        <p className="max-w-sm text-sm text-ink/65">
          We&apos;ve opened WhatsApp with your details prefilled — just hit send and our sales
          team at Medallion Avenue will get back to you shortly.
        </p>
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold underline underline-offset-4"
        >
          Message us directly on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor={`${formName}-name`}>Full Name</Label>
        <Input id={`${formName}-name`} placeholder="Your name" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${formName}-phone`}>Phone Number</Label>
        <Input
          id={`${formName}-phone`}
          placeholder="98XXXXXXXX"
          inputMode="tel"
          {...register("phone")}
        />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${formName}-email`}>Email (optional)</Label>
        <Input id={`${formName}-email`} placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      {showInterest && (
        <div className="space-y-1.5">
          <Label htmlFor={`${formName}-interest`}>I&apos;m interested in</Label>
          <Select
            value={interest}
            onValueChange={(v) => setValue("interest", v ?? "", { shouldValidate: true })}
          >
            <SelectTrigger id={`${formName}-interest`} className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {showMessage && (
        <div className="space-y-1.5">
          <Label htmlFor={`${formName}-message`}>Message (optional)</Label>
          <Textarea
            id={`${formName}-message`}
            placeholder="Tell us a bit more..."
            rows={3}
            {...register("message")}
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-gradient text-ivory hover:opacity-90"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : submitLabel}
      </Button>

      <p className="text-center text-xs text-ink/45">
        By submitting, you&apos;ll be redirected to WhatsApp to send your enquiry to our sales team.
      </p>
    </form>
  );
}
