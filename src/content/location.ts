import type { LucideIcon } from "lucide-react";
import { GraduationCap, HeartPulse, Train, Plane, ShoppingBag, Hotel, Building } from "lucide-react";

export type LandmarkCategory =
  | "schools"
  | "hospitals"
  | "metro"
  | "airport"
  | "mall"
  | "hotels"
  | "it-parks";

export type Landmark = {
  category: LandmarkCategory;
  icon: LucideIcon;
  label: string;
  name: string;
  distance: string;
  time: string;
};

// Placeholder distances — to be replaced with confirmed figures once the exact plot address is finalized.
export const landmarks: Landmark[] = [
  {
    category: "schools",
    icon: GraduationCap,
    label: "Schools",
    name: "Reputed schools in the Panchkula / Kalka belt",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "hospitals",
    icon: HeartPulse,
    label: "Hospitals",
    name: "Leading multi-specialty hospitals in Panchkula / Chandigarh",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "metro",
    icon: Train,
    label: "Rail / Transit",
    name: "Kalka Railway Station",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "airport",
    icon: Plane,
    label: "Airport",
    name: "Chandigarh International Airport",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "mall",
    icon: ShoppingBag,
    label: "Retail & Malls",
    name: "Tricity retail hubs (Panchkula / Chandigarh)",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "hotels",
    icon: Hotel,
    label: "Hotels",
    name: "Business & leisure hotels along the corridor",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
  {
    category: "it-parks",
    icon: Building,
    label: "IT / Business Parks",
    name: "Panchkula & Chandigarh IT/business hubs",
    distance: "[Distance TBC]",
    time: "[Drive time TBC]",
  },
];

export const locationAdvantages = [
  "Directly on the Kalka-Shimla Highway (NH-5)",
  "Adjoining Chandimandir Toll Plaza",
  "Natural catchment of 10+ lakh people on the corridor",
  "The only high-end address between Zirakpur and Shimla",
  "Well-connected to the Panchkula–Chandigarh tricity belt",
];
