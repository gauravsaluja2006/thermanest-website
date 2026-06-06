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
    <div className="bg-secondary overflow-x-auto overscroll-x-contain md:overflow-visible">
      <div className="flex items-center flex-nowrap gap-x-6 px-4 py-[10px] md:justify-center md:gap-x-0 md:px-[61px] md:py-3">
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
            <div className="flex shrink-0 items-center gap-[9px]">
              <Icon
                size={16}
                strokeWidth={1.75}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />
              <span
                className="whitespace-nowrap text-white font-medium leading-none tracking-[0.01em]"
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
    </div>
  );
}
