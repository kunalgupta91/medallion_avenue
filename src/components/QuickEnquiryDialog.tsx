"use client";

import { PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuickEnquiryCard } from "@/components/QuickEnquiryCard";

export function QuickEnquiryDialog({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger
        className={`flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-semibold text-ivory shadow-lg shadow-black/20 ${className ?? ""}`}
      >
        <PhoneCall className="size-3.5" />
        Get a Callback
      </DialogTrigger>
      <DialogContent className="bg-ivory sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-ink">Get a Callback</DialogTitle>
          <DialogDescription className="text-ink/60">
            Share your details and our sales team will call you back.
          </DialogDescription>
        </DialogHeader>
        <QuickEnquiryCard variant="plain" />
      </DialogContent>
    </Dialog>
  );
}
