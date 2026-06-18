'use client';

import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function AboutHero() {
  const reduced = useReducedMotion();
  const mp = (delay: number) => (reduced ? {} : fadeUp(delay));

  return (
    <section
      aria-labelledby="about-hero-heading"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Breadcrumb */}
      <div className="content-wrapper pt-4 pb-0 md:pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                style={{
                  fontSize: "var(--text-body-5)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight
                size={12}
                style={{ color: "rgba(255,255,255,0.4)" }}
                strokeWidth={2}
              />
            </li>
            <li>
              <span
                className="font-medium"
                style={{
                  fontSize: "var(--text-body-5)",
                  color: "rgba(255,255,255,0.85)",
                }}
                aria-current="page"
              >
                About Us
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <div
        className="content-wrapper flex flex-col gap-[29px] py-12 md:py-[80px]"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-2 w-fit h-[34px] px-2.5 rounded-[10px]"
          style={{ backgroundColor: "var(--color-eyebrow-bg)" }}
          {...mp(0)}
        >
          <Sparkles size={15} className="text-white shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span
            className="text-white font-medium whitespace-nowrap"
            style={{ fontSize: "var(--text-body-4)" }}
          >
            20+ Years of Excellence
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          id="about-hero-heading"
          className="text-white"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.25rem, 6vw, var(--text-h2))",
            lineHeight: 1.1,
            fontWeight: 400,
            maxWidth: "760px",
          }}
          {...mp(0.1)}
        >
          Building Smarter Spaces For The Future
        </motion.h1>

        {/* Body */}
        <motion.p
          className="font-normal"
          style={{
            fontSize: "var(--text-body-2)",
            lineHeight: "1.75rem",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "880px",
          }}
          {...mp(0.2)}
        >
          At THERMANEST, we believe construction should be faster, smarter and more
          efficient without compromising on quality. We specialize in modular building
          solutions that combine modern design, precision manufacturing and durable
          construction to create spaces that are built to perform and made to last.
        </motion.p>
      </div>
    </section>
  );
}
