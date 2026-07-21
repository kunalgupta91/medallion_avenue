import { Check } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/Reveal";

export function FeatureGroups({
  groups,
  dark = false,
}: {
  groups: { title: string; items: string[] }[];
  dark?: boolean;
}) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <Reveal
          key={group.title}
          className={
            dark
              ? "glass-panel-dark rounded-2xl p-7"
              : "rounded-2xl border border-sand/70 bg-white p-7"
          }
        >
          <h3 className={dark ? "font-display text-lg text-gold-light" : "font-display text-lg text-ink"}>
            {group.title}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className={dark ? "mt-0.5 size-4 shrink-0 text-gold-light" : "mt-0.5 size-4 shrink-0 text-emerald"} />
                <span className={dark ? "text-sm text-ivory/75" : "text-sm text-ink/70"}>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </RevealGroup>
  );
}
