'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function PageHero({ eyebrow, title, body, ctaLabel, ctaHref, image, imageAlt }: PageHeroProps) {
  const reduced = useReducedMotion();
  const mp = (delay: number) => (reduced ? {} : fadeUp(delay));

  return (
    <section
      aria-label={title}
      className="relative w-full overflow-hidden md:min-h-[572px]"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Full-bleed background image — anchored right on desktop */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-[70%_center] md:object-[82%_center]"
          sizes="100vw"
        />
      </div>

      {/* Horizontal blend — solid navy left, photo emerges on the right */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            var(--color-secondary) 0%,
            var(--color-secondary) 36%,
            color-mix(in srgb, var(--color-secondary) 96%, transparent) 46%,
            color-mix(in srgb, var(--color-secondary) 78%, transparent) 56%,
            color-mix(in srgb, var(--color-secondary) 52%, transparent) 66%,
            color-mix(in srgb, var(--color-secondary) 28%, transparent) 78%,
            color-mix(in srgb, var(--color-secondary) 12%, transparent) 90%,
            transparent 100%
          )`,
        }}
      />

      {/* Uniform tint — ties photo tone to the dark hero palette */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-hero-overlay)" }}
        aria-hidden="true"
      />

      {/* Mobile — extra vertical scrim for text legibility */}
      <div
        className="absolute inset-0 md:hidden"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            color-mix(in srgb, var(--color-secondary) 55%, transparent) 0%,
            transparent 42%,
            transparent 58%,
            color-mix(in srgb, var(--color-secondary) 65%, transparent) 100%
          )`,
        }}
      />

      {/* Soft edge vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          boxShadow:
            "inset -100px 0 100px -50px color-mix(in srgb, var(--color-secondary) 45%, transparent)",
        }}
      />

      <div className="relative z-10 flex min-h-[420px] flex-col md:min-h-[572px] md:justify-center">
        <div className="flex flex-col gap-[29px] px-4 pb-14 pt-10 md:max-w-[55%] md:pl-[50px] md:pr-10 md:py-[80px]">
          {/* Eyebrow badge */}
          <motion.div
            className="flex items-center gap-[5.7px] w-fit rounded-[7px] px-[8.5px] h-[34px]"
            style={{ backgroundColor: "var(--color-eyebrow-bg)" }}
            {...mp(0)}
          >
            <Sparkles size={15} className="text-white shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span
              className="text-white font-medium whitespace-nowrap"
              style={{ fontSize: "var(--text-body-4)" }}
            >
              {eyebrow}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-white"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.625rem, 10vw, var(--text-hero))",
              lineHeight: "clamp(3rem, 12vw, var(--leading-hero))",
              maxWidth: "760px",
              fontWeight: 400,
            }}
            {...mp(0.1)}
          >
            {title}
          </motion.h1>

          {/* Body */}
          <motion.p
            className="font-normal text-white/85"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              maxWidth: "520px",
            }}
            {...mp(0.2)}
          >
            {body}
          </motion.p>

          {/* CTA */}
          <motion.div {...mp(0.3)}>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              style={{
                backgroundColor: "var(--color-primary)",
                height: "var(--height-btn-lg)",
                borderRadius: "var(--radius-md)",
                padding: "0 20px",
                fontSize: "var(--text-body-3)",
              }}
            >
              {ctaLabel}
              <ArrowRight size={20} aria-hidden="true" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>

      <span className="sr-only">{imageAlt}</span>
    </section>
  );
}
