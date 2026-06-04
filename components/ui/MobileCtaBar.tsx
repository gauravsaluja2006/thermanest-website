import Image from "next/image";
import { Phone } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{
        backgroundColor: "var(--color-primary-light)",
        padding: "10px 19px",
      }}
    >
      <div
        className="flex items-center justify-between rounded-[10px] bg-white px-[9px] py-[18px]"
        style={{
          height: "85px",
          gap: "32px",
          boxShadow: "0px 4px 8.4px rgba(0,0,0,0.12)",
        }}
      >
        {/* Left: image + branding */}
        <div className="flex items-end shrink-0" style={{ gap: "9px", width: "182px" }}>
          <div
            className="relative rounded-full overflow-hidden shrink-0"
            style={{ width: 46, height: 46 }}
          >
            <Image
              src="/images/hero/hero-bg.png"
              alt="ThermaNest modular building"
              fill
              className="object-cover object-center"
              sizes="46px"
            />
          </div>
          <div className="flex flex-col" style={{ gap: "4.725px" }}>
            <span
              className="font-semibold leading-none"
              style={{
                fontSize: "var(--text-body-2)",
                color: "var(--color-text-primary)",
              }}
            >
              ThermaNest
            </span>
            <span
              className="font-medium leading-none"
              style={{
                fontSize: "var(--text-body-4)",
                color: "var(--color-text-secondary)",
              }}
            >
              Prefab Solutions
            </span>
          </div>
        </div>

        {/* Right: Call Us button */}
        <a
          href="tel:+9215666885"
          className="flex items-center justify-center gap-[10px] font-semibold text-white rounded-[10px] shrink-0 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
          style={{
            backgroundColor: "var(--color-primary)",
            height: 49,
            width: 118,
            fontSize: "var(--text-body-3)",
          }}
          aria-label="Call ThermaNest at +9215666885"
        >
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          Call Us
        </a>
      </div>
    </div>
  );
}
