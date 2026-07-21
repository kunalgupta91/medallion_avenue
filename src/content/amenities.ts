import type { LucideIcon } from "lucide-react";
import {
  Waves,
  Dumbbell,
  Trees,
  ShieldCheck,
  Users,
  Gamepad2,
  Zap,
  Car,
} from "lucide-react";

export type Amenity = {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "clubhouse" | "outdoor" | "security" | "utility";
};

export const amenities: Amenity[] = [
  {
    icon: Users,
    title: "Spacious Clubhouse",
    description: "A full-amenity clubhouse at the heart of the community for residents to gather and unwind.",
    category: "clubhouse",
  },
  {
    icon: Trees,
    title: "Landscaped Gazebo",
    description: "Shaded gazebo seating framed by the project's signature landscaped greens.",
    category: "outdoor",
  },
  {
    icon: Dumbbell,
    title: "Indoor & Outdoor Sports",
    description: "Dedicated indoor and outdoor sports activity zones for every age group.",
    category: "outdoor",
  },
  {
    icon: Waves,
    title: "Water Features",
    description: "Curated water features integrated across the landscaped green areas.",
    category: "outdoor",
  },
  {
    icon: Gamepad2,
    title: "Kids Play & Gaming Zone",
    description: "Play zones for children within the green areas, alongside the commercial gaming zone.",
    category: "outdoor",
  },
  {
    icon: ShieldCheck,
    title: "Gated Security",
    description: "Fully gated community with round-the-clock access control and surveillance.",
    category: "security",
  },
  {
    icon: Zap,
    title: "24x7 Power Backup",
    description: "Uninterrupted power backup, including dedicated backup for lifts.",
    category: "utility",
  },
  {
    icon: Car,
    title: "Basement & Stilt Parking",
    description: "Generous covered parking across basement and stilt levels for every home.",
    category: "utility",
  },
];

export const amenityCategories = [
  { key: "clubhouse", label: "Clubhouse" },
  { key: "outdoor", label: "Outdoor & Green" },
  { key: "security", label: "Security" },
  { key: "utility", label: "Utilities" },
] as const;
