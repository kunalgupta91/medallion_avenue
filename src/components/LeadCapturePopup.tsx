"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";

const STORAGE_KEY = "medallion-lead-popup-shown";
const DELAY_MS = 30_000;

/**
 * Auto-opens once, 30 seconds after the page mounts, and stays open until the
 * visitor either submits the form or explicitly closes it — never on
 * outside click or Escape, which would defeat the point of a timed prompt.
 * Base UI's Dialog fires onOpenChange for every close reason including
 * those two, so this filters to only the reasons that should actually close
 * it: the close button (close-press) and our own post-submit close
 * (imperative-action).
 *
 * sessionStorage prevents it firing again on a later page within the same
 * tab session (the timer itself only runs once per full page load anyway,
 * since this is mounted once in the root layout — this covers a reload).
 */
export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function markShown() {
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <Dialog
      open={open}
      disablePointerDismissal
      onOpenChange={(nextOpen, details) => {
        if (!nextOpen && (details.reason === "escape-key" || details.reason === "focus-out")) {
          return;
        }
        if (!nextOpen) markShown();
        setOpen(nextOpen);
      }}
    >
      <DialogContent className="bg-ivory sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-ink">
            Still deciding on Medallion Avenue?
          </DialogTitle>
          <DialogDescription className="text-ink/60">
            Leave your details and our sales team will call you back with pricing and availability.
          </DialogDescription>
        </DialogHeader>
        <LeadForm
          formName="30s-popup"
          submitLabel="Request a callback"
          onSubmitted={() => {
            markShown();
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
