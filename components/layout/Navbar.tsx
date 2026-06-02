'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const PHONE = "+9215666885";

function PhoneCTA({ compact = false }: { compact?: boolean }) {
  const circleSize = compact ? 40 : 44;
  const iconSize = compact ? 16 : 18;
  return (
    <a
      href="tel:+9215666885"
      className="flex items-center gap-[9px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      aria-label={`Call us at ${PHONE}`}
    >
      <span
        className="flex items-center justify-center shrink-0 rounded-full transition-transform duration-150 group-hover:scale-105"
        style={{ width: circleSize, height: circleSize, backgroundColor: "var(--color-primary)" }}
      >
        <Phone size={iconSize} color="white" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="flex flex-col gap-1">
        <span
          className="font-semibold leading-none"
          style={{ fontSize: "var(--text-body-2)", color: "var(--color-text-primary)" }}
        >
          {PHONE}
        </span>
        <span
          className="font-medium leading-none"
          style={{ fontSize: "var(--text-cta-label)", color: "var(--color-primary)" }}
        >
          Call for Consultation
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  /* tracks whether drawer has ever been opened — prevents focus steal on mount */
  const hasOpenedRef = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body scroll lock + focus management */
  useEffect(() => {
    if (drawerOpen) {
      hasOpenedRef.current = true;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      if (hasOpenedRef.current) {
        hamburgerRef.current?.focus();
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  /* Escape key + focus trap */
  useEffect(() => {
    if (!drawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const drawer = document.getElementById("mobile-drawer");
      if (!drawer) return;

      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  /* close drawer on route change */
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  const linkStyle = (href: string) => ({
    fontSize: "var(--text-body-3)",
    color: isActive(href) ? "var(--color-text-primary)" : "var(--color-text-secondary)",
    fontWeight: isActive(href) ? 600 : 400,
  });

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 bg-white transition-all duration-200",
          scrolled ? "shadow-md border-b border-border" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between py-4 px-4 md:px-[61px]">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            <Image
              src="/images/logo.png"
              alt="ThermaNest — Modular Prefab Solutions"
              width={130}
              height={64}
              className="object-contain h-14 w-auto"
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

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <Menu size={24} style={{ color: "var(--color-text-primary)" }} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-white flex flex-col py-8 px-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setDrawerOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="ThermaNest"
                    width={110}
                    height={54}
                    className="object-contain h-12 w-auto"
                  />
                </Link>
                <button
                  ref={closeButtonRef}
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close menu"
                >
                  <X size={22} style={{ color: "var(--color-text-primary)" }} aria-hidden="true" />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav aria-label="Mobile navigation" className="flex flex-col gap-6 flex-1">
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

              {/* Drawer phone CTA */}
              <div className="pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
                <PhoneCTA compact />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
