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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Mobile: image as faint full-bg (hidden on md+) */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
          style={{ opacity: 0.29 }}
        />
      </div>

      <div
        className="mx-auto flex flex-col md:flex-row md:min-h-[572px]"
        style={{ maxWidth: "var(--width-max)" }}
      >
        {/* Text column */}
        <div className="relative z-10 flex flex-col md:justify-center gap-[29px] px-4 md:pl-[53px] md:pr-10 pt-10 pb-14 md:py-0 w-full md:w-[55%]">
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
              fontSize: "clamp(2.25rem, 5vw, var(--text-h2))",
              lineHeight: 1.1,
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

        {/* Image column — desktop only */}
        <div className="hidden md:block relative md:w-[45%] shrink-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          {/* Subtle left fade to blend with dark bg on desktop */}
          <div
            className="absolute inset-y-0 left-0 w-24 hidden md:block"
            style={{
              background: "linear-gradient(to right, var(--color-secondary), transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
