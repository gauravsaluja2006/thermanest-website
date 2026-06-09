'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const PHONE = "+9215666885";

function PhoneCTA() {
  return (
    <a
      href="tel:+9215666885"
      className="flex items-center gap-[9px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      aria-label={`Call us at ${PHONE}`}
    >
      <span
        className="flex items-center justify-center shrink-0 rounded-full transition-transform duration-150 group-hover:scale-105"
        style={{ width: 44, height: 44, backgroundColor: "var(--color-primary)" }}
      >
        <Phone size={18} color="white" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="flex flex-col gap-1">
        <span className="font-semibold leading-none" style={{ fontSize: "var(--text-body-2)", color: "var(--color-text-primary)" }}>
          {PHONE}
        </span>
        <span className="font-medium leading-none" style={{ fontSize: "var(--text-cta-label)", color: "var(--color-primary)" }}>
          Call for Consultation
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Escape key closes menu */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  /* close on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]); // eslint-disable-line

  const linkStyle = (href: string) => ({
    fontSize: "var(--text-body-3)",
    color: isActive(href) ? "var(--color-text-primary)" : "var(--color-text-secondary)",
    fontWeight: isActive(href) ? 600 : 400,
  });

  return (
    <>
      {/* Invisible backdrop — closes menu on outside click */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        className={[
          "sticky top-0 z-50 bg-white transition-all duration-200 relative",
          scrolled ? "shadow-md border-b border-border" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between py-4 px-4 md:px-[61px]">

          {/* Logo */}
          <Link href="/" className="shrink-0 -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
            <Image
              src="/images/logo.png"
              alt="ThermaNest — Modular Prefab Solutions"
              width={146}
              height={72}
              className="object-contain h-[72px]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center" style={{ gap: "51px" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                style={linkStyle(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone CTA */}
          <div className="hidden md:block">
            <PhoneCTA />
          </div>

          {/* Mobile hamburger — toggles menu */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} style={{ color: "var(--color-text-primary)" }} aria-hidden="true" />
          </button>
        </div>

        {/* ── Mobile dropdown — expands down from navbar ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="absolute top-full left-0 right-0 md:hidden flex flex-col overflow-hidden"
              style={{ boxShadow: "0px 4px 16px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="flex flex-col bg-white px-4 py-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[10px] px-[18px] py-[12px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={
                      isActive(link.href)
                        ? { backgroundColor: "rgba(238,249,215,0.85)", color: "var(--color-primary)", fontWeight: 600, fontSize: "var(--text-body-3)" }
                        : { color: "rgba(1,24,47,0.85)", fontWeight: 400, fontSize: "var(--text-body-3)" }
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom CTA section */}
              <div
                className="flex flex-col gap-4 px-6 py-8"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.5rem, 7vw, 1.75rem)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  Ready To Build Your Dream Space?
                </h2>
                <p
                  className="text-white/80 font-normal"
                  style={{ fontSize: "var(--text-body-4)", lineHeight: "1.5" }}
                >
                  Whether you&apos;re planning a home, office, resort or custom modular build,
                  our team is here to help you design, customize and deliver a space that
                  truly reflects your vision
                </p>
                <a
                  href="tel:+9215666885"
                  className="flex w-full items-center justify-center gap-[10px] font-semibold text-white rounded-[10px] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    height: "52px",
                    fontSize: "var(--text-body-3)",
                  }}
                  aria-label="Call ThermaNest at +9215666885"
                >
                  <Phone size={16} strokeWidth={2} aria-hidden="true" />
                  Call Us&nbsp;|&nbsp;+9215666885
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
