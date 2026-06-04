import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import { Layers, Truck, MapPin } from "lucide-react";

interface InfoItem {
  icon: LucideIcon;
  label: string;
  labelFull?: string;
}

const items: InfoItem[] = [
  { icon: Layers, label: "Custom Modular Solutions" },
  { icon: Truck, label: "20–40 Day Delivery" },
  { icon: MapPin, label: "North India Delivery", labelFull: "North India Delivery (Delhi, Punjab, Haryana, Himachal)" },
];

export function InfoBar() {
  return (
    <div className="bg-secondary flex items-center justify-center flex-wrap gap-x-6 gap-y-2 px-4 py-[14px] md:gap-x-0 md:px-[61px] md:py-5">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Fragment key={item.label}>
            {index > 0 && (
              <div
                className="hidden md:block w-px h-[26px] mx-[34px] bg-white/30 shrink-0"
                aria-hidden="true"
              />
            )}
            <div className="flex items-center gap-[9px]">
              <Icon
                size={16}
                strokeWidth={1.75}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />
              <span
                className="text-white font-medium leading-none tracking-[0.01em]"
                style={{ fontSize: "var(--text-body-5)" }}
              >
                {item.label}
                {item.labelFull && (
                  <span className="hidden md:inline"> (Delhi, Punjab, Haryana, Himachal)</span>
                )}
              </span>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
