"use client";

import type { ReactElement } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";

export function LeadDialog({
  trigger,
  title,
  description,
  formName,
  submitLabel,
  defaultInterest,
  downloadUrl,
}: {
  trigger: ReactElement;
  title: string;
  description: string;
  formName: string;
  submitLabel?: string;
  defaultInterest?: string;
  downloadUrl?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="bg-ivory sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-ink">{title}</DialogTitle>
          <DialogDescription className="text-ink/60">{description}</DialogDescription>
        </DialogHeader>
        <LeadForm
          formName={formName}
          submitLabel={submitLabel}
          defaultInterest={defaultInterest}
          downloadUrl={downloadUrl}
        />
      </DialogContent>
    </Dialog>
  );
}
