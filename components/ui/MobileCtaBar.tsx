import Image from "next/image";
import { Phone } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-3 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]"
      style={{ backgroundColor: "var(--color-primary-light)" }}
    >
      <div
        className="flex items-center justify-between gap-3 rounded-[10px] bg-white px-2.5 py-2"
        style={{ boxShadow: "0px 4px 8.4px rgba(0, 0, 0, 0.12)" }}
      >
        {/* Left: compact branding */}
        <div className="flex min-w-0 items-center gap-2">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/hero/hero-bg.png"
              alt="ThermaNest modular building"
              fill
              className="object-cover object-center"
              sizes="32px"
            />
          </div>
          <span
            className="truncate font-semibold leading-none"
            style={{
              fontSize: "var(--text-body-4)",
              color: "var(--color-text-primary)",
            }}
          >
            ThermaNest
          </span>
        </div>

        {/* Right: Call Us button */}
        <a
          href="tel:+9215666885"
          className="flex shrink-0 items-center justify-center gap-1.5 rounded-[10px] px-3 py-2 font-semibold text-white transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
          style={{
            backgroundColor: "var(--color-primary)",
            fontSize: "var(--text-cta-label)",
          }}
          aria-label="Call ThermaNest at +9215666885"
        >
          <Phone size={14} strokeWidth={2} aria-hidden="true" />
          Call Us
        </a>
      </div>
    </div>
  );
}
