import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
];

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Main footer content */}
      <div
        className="w-full flex flex-col lg:flex-row gap-12 items-start justify-between px-4 md:px-[51px] pt-[112px] pb-[104px]"
        style={{ maxWidth: "1440px" }}
      >
        {/* Logo + tagline */}
        <div className="flex flex-col gap-6 lg:max-w-[580px]">
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit">
            <Image
              src="/images/logo.png"
              alt="ThermaNest"
              width={180}
              height={72}
              className="object-contain h-[72px] brightness-0 invert"
              style={{ width: "auto" }}
            />
          </Link>
          <p
            className="font-normal text-white/70"
            style={{
              fontSize: "var(--text-body-3)",
              lineHeight: "var(--leading-body-3)",
              maxWidth: "587px",
            }}
          >
            Dubai-engineered luxury modular construction. 20+ years of expertise in
            premium homes, offices, resorts and villas across North India
          </p>
        </div>

        {/* Links columns */}
        <div className="flex gap-[43px] flex-wrap">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white font-medium"
              style={{ fontSize: "var(--text-body-2)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-150 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    style={{ fontSize: "var(--text-body-3)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white font-medium"
              style={{ fontSize: "var(--text-body-2)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+9215666885"
                  className="flex items-center gap-[10px] text-white/70 hover:text-white transition-colors duration-150 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  style={{ fontSize: "var(--text-body-3)" }}
                >
                  <Phone size={18} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
                  +9215666885
                </a>
              </li>
              <li>
                <div
                  className="flex items-center gap-[10px] text-white/70 font-normal"
                  style={{ fontSize: "var(--text-body-3)" }}
                >
                  <MapPin size={18} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
                  Delhi NCR, India
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-between px-[51px] py-[14px] gap-2"
        style={{ borderTop: "0.8px solid rgba(255,255,255,0.1)" }}
      >
        <p
          className="text-white/60 font-normal"
          style={{ fontSize: "var(--text-body-4)" }}
        >
          © 2026 THERMANEST. PREFAB All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-white/60 hover:text-white transition-colors duration-150 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            style={{ fontSize: "var(--text-body-4)" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-white/60 hover:text-white transition-colors duration-150 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            style={{ fontSize: "var(--text-body-4)" }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
