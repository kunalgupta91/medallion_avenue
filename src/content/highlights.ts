import type { LucideIcon } from "lucide-react";
import { Trees, Building2, ShieldCheck, Layers, Car, Sparkles } from "lucide-react";

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const projectHighlights: Highlight[] = [
  {
    icon: Trees,
    title: "70% Green, 30% Built",
    description:
      "Only 30% of the land is under construction — the remaining 70% is landscaped green area, gardens, and open lawns.",
  },
  {
    icon: Layers,
    title: "MIVAN Construction",
    description:
      "Built using MIVAN aluminium formwork technology for monolithic, precision-engineered structures with faster, stronger construction.",
  },
  {
    icon: Building2,
    title: "Stilt + 14 Residences",
    description:
      "3+1 & 4+1 BHK homes across 2,500–3,500 sq. ft. super area, both-side open and green-park facing.",
  },
  {
    icon: Sparkles,
    title: "Ground+4 Commercial",
    description:
      "A dedicated high-street commercial precinct leasing to Grade-A hotel, dining, entertainment, and retail brands.",
  },
  {
    icon: Car,
    title: "Basement + Stilt Parking",
    description:
      "Generous covered and open parking across basement and stilt levels for residents, visitors, and commercial footfall.",
  },
  {
    icon: ShieldCheck,
    title: "Gated & Vastu-Friendly",
    description:
      "A secure, gated community with Vastu-friendly, semi-furnished homes and 24-hour water supply and power backup.",
  },
];

export const investmentBenefits = [
  {
    title: "Only High-End Address on the Corridor",
    description:
      "Positioned as the only high-end commercial and residential market between Zirakpur and Shimla — a category-first advantage.",
  },
  {
    title: "Highway-Adjacent Visibility",
    description:
      "Directly on the Kalka-Shimla Highway, adjoining Chandimandir Toll Plaza, with a natural catchment of 10+ lakh people.",
  },
  {
    title: "Mixed-Use Demand Engine",
    description:
      "Residential towers and a Grade-A commercial precinct sit side by side — retail and hospitality footfall is built into the address from day one.",
  },
  {
    title: "Future Growth Corridor",
    description:
      "The Kalka-Shimla highway belt is a fast-developing tricity-adjacent corridor, positioning early investors ahead of the growth curve.",
  },
];

export const constructionTimeline = [
  {
    phase: "Land Development & Landscaping",
    status: "complete" as const,
    detail: "Boundary walls, internal roads, and 70% green-area landscaping underway on ground.",
  },
  {
    phase: "MIVAN Structural Work",
    status: "in-progress" as const,
    detail: "Stilt+14 residential towers progressing with MIVAN aluminium formwork construction.",
  },
  {
    phase: "Commercial Shell (G+4)",
    status: "in-progress" as const,
    detail: "Ground+4 commercial precinct shell and core progressing alongside residential towers.",
  },
  {
    phase: "Amenities & Clubhouse",
    status: "upcoming" as const,
    detail: "Clubhouse, gazebo, sports courts, and water features to follow structural completion.",
  },
  {
    phase: "Interiors, Handover & Leasing",
    status: "upcoming" as const,
    detail: "Fit-outs, modular kitchen installation, and Grade-A brand leasing for the commercial precinct.",
  },
];
