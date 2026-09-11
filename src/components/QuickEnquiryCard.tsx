"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quickEnquiryFormSchema, type QuickEnquiryFormSchema } from "@/lib/validation";
import { buildWhatsappLeadUrl } from "@/lib/whatsapp";

const budgetOptions = [
  "Under ₹1.5 Cr",
  "₹1.5 Cr – ₹2.5 Cr",
  "₹2.5 Cr – ₹4 Cr",
  "₹4 Cr+",
];

const callTimeOptions = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
  "Anytime",
];

export function QuickEnquiryCard({
  className,
  variant = "card",
}: {
  className?: string;
  variant?: "card" | "plain";
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuickEnquiryFormSchema>({
    resolver: zodResolver(quickEnquiryFormSchema),
    defaultValues: { budget: "", callTime: "" },
  });

  const budget = watch("budget");
  const callTime = watch("callTime");

  function onSubmit(values: QuickEnquiryFormSchema) {
    const url = buildWhatsappLeadUrl(values, "Hero — Quick Enquiry");
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center gap-2 rounded-2xl border border-emerald/20 bg-emerald/5 px-5 py-8 text-center ${className ?? ""}`}
      >
        <CheckCircle2 className="size-8 text-emerald" />
        <p className="font-display text-base text-ink">Thank you!</p>
        <p className="max-w-xs text-xs text-ink/65">
          We&apos;ve opened WhatsApp with your details prefilled — just hit send and our team will
          call you back.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`space-y-3 text-ink ${
        variant === "card"
          ? "rounded-2xl border border-sand/70 bg-white/95 p-5 shadow-xl shadow-black/10 backdrop-blur"
          : ""
      } ${className ?? ""}`}
    >
      {variant === "card" && <p className="font-display text-base text-ink">Get a Callback</p>}

      <div className="space-y-1">
        <Label htmlFor="quick-enquiry-name" className="text-xs">
          Name
        </Label>
        <Input id="quick-enquiry-name" placeholder="Your name" className="h-9" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="quick-enquiry-phone" className="text-xs">
          Number
        </Label>
        <Input
          id="quick-enquiry-phone"
          placeholder="98XXXXXXXX"
          inputMode="tel"
          className="h-9"
          {...register("phone")}
        />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="quick-enquiry-budget" className="text-xs">
          Budget
        </Label>
        <Select
          value={budget}
          onValueChange={(v) => setValue("budget", v ?? "", { shouldValidate: true })}
        >
          <SelectTrigger id="quick-enquiry-budget" className="h-9 w-full">
            <SelectValue placeholder="Select budget" />
          </SelectTrigger>
          <SelectContent>
            {budgetOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.budget && <p className="text-xs text-destructive">{errors.budget.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="quick-enquiry-call-time" className="text-xs">
          Time to Call
        </Label>
        <Select
          value={callTime}
          onValueChange={(v) => setValue("callTime", v ?? "", { shouldValidate: true })}
        >
          <SelectTrigger id="quick-enquiry-call-time" className="h-9 w-full">
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            {callTimeOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.callTime && <p className="text-xs text-destructive">{errors.callTime.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-gradient text-ivory hover:opacity-90"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : "Send on WhatsApp"}
      </Button>
    </form>
  );
}
