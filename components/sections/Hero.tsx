'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function Hero() {
  const reduced = useReducedMotion();
  const mp = (delay: number) => (reduced ? {} : fadeUp(delay));

  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "647px" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero/hero-bg.png"
        alt="Luxury modular prefab home at sunset"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-hero-overlay)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[30px] pt-[125px] pb-[80px] px-4 md:px-[61px]">

        {/* Eyebrow badge */}
        <motion.div
          className="flex items-center gap-2 w-fit rounded-[10px] px-[10px] h-[34px]"
          style={{
            backgroundColor: "var(--color-eyebrow-bg)",
            backdropFilter: "blur(4px)",
          }}
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
          className="text-white"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, var(--text-hero))",
            lineHeight: "clamp(2.6rem, 6vw, var(--leading-hero))",
            maxWidth: "760px",
            fontWeight: 400,
          }}
          {...mp(0.1)}
        >
          Premium Modular Prefab Solutions For Modern Living
        </motion.h1>

        {/* Body */}
        <motion.p
          className="font-normal text-white/90"
          style={{
            fontSize: "var(--text-body-1)",
            lineHeight: "var(--leading-body-1)",
            maxWidth: "680px",
          }}
          {...mp(0.2)}
        >
          Fully furnished turnkey prefab spaces built for luxury living,
          portable flexibility, cost-efficient comfort and Dubai-backed expertise
        </motion.p>

        {/* CTA */}
        <motion.div {...mp(0.3)}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            style={{
              backgroundColor: "var(--color-primary)",
              height: "var(--height-btn-lg)",
              borderRadius: "var(--radius-md)",
              padding: "0 20px",
              fontSize: "var(--text-body-3)",
            }}
          >
            Explore Projects
            <ArrowRight size={20} aria-hidden="true" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
