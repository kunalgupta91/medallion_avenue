import type { LucideIcon } from "lucide-react";
import { HardHat, Trees, MapPin, ShieldCheck } from "lucide-react";

export type TrustSignal = {
  icon: LucideIcon;
  stat: string;
  label: string;
  description: string;
};

export const trustSignals: TrustSignal[] = [
  {
    icon: HardHat,
    stat: "MIVAN",
    label: "Construction Technology",
    description:
      "Built with MIVAN aluminium formwork for monolithic, precision-engineered structures — the same technology used across leading mass-housing and luxury developments in India.",
  },
  {
    icon: Trees,
    stat: "70%",
    label: "Green & Open Area",
    description:
      "Only 30% of the land is under construction. Visit the site and see the landscaping already in place today.",
  },
  {
    icon: MapPin,
    stat: "1st",
    label: "On the Corridor",
    description:
      "The only high-end residential and commercial address between Zirakpur and Shimla, directly on the highway adjoining Chandimandir Toll Plaza.",
  },
  {
    icon: ShieldCheck,
    stat: "Gated",
    label: "Secured Community",
    description:
      "Round-the-clock gated access, dedicated power backup, and 24-hour water supply from day one of possession.",
  },
];
