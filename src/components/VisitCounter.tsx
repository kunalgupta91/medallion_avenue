"use client";

import { Eye } from "lucide-react";
import { Counter } from "@/components/animations/Counter";

const BASE_COUNT = 1500;
const LAUNCH_DATE = new Date("2026-08-01T00:00:00Z");
const DAILY_INCREMENT = 4;

function getDisplayCount() {
  const daysSinceLaunch = Math.floor(
    (Date.now() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );
  return BASE_COUNT + Math.max(0, daysSinceLaunch) * DAILY_INCREMENT;
}

export function VisitCounter({ className }: { className?: string }) {
  const count = getDisplayCount();

  return (
    <span className={className}>
      <Eye className="size-3.5" />
      <Counter value={count} suffix="+" /> people have explored this address
    </span>
  );
}
