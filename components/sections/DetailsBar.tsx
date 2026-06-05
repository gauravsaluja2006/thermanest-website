import { Clock, Thermometer, Lightbulb, CloudRain } from "lucide-react";
import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";

interface DetailItem {
  icon: LucideIcon;
  heading: string;
  subtext: string;
}

const items: DetailItem[] = [
  {
    icon: Clock,
    heading: "50+ Years Life",
    subtext: "No-Fade Exterior",
  },
  {
    icon: Thermometer,
    heading: "Thermal Insulation",
    subtext: "Cool summers, warm winters",
  },
  {
    icon: Lightbulb,
    heading: "Energy Efficient",
    subtext: "Uses only 15% Energy",
  },
  {
    icon: CloudRain,
    heading: "Built For All Conditions",
    subtext: "All weather & earthquake resistant",
  },
];

export function DetailsBar() {
  return (
    <section aria-label="Key features" className="bg-surface">
      <div
        className="
          flex flex-wrap items-center
          gap-[29px]
          px-5 py-[29px]
          md:justify-center md:gap-x-0 md:px-[88px]
        "
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.heading}>
              {index > 0 && (
                <div
                  className="hidden md:block w-px h-[48px] mx-[50px] bg-border shrink-0"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-[15px] shrink-0">
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{ width: 43, height: 43 }}
                  aria-hidden="true"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.75}
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span
                    className="font-medium leading-none"
                    style={{
                      fontSize: "var(--text-body-2)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.heading}
                  </span>
                  <span
                    className="font-normal leading-none"
                    style={{
                      fontSize: "var(--text-body-4)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item.subtext}
                  </span>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
