'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export interface ServiceDetailHeroProps {
  serviceName: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  imageAlt: string;
  statCount: string;
  statLabel: string;
}

export function ServiceDetailHero({
  serviceName,
  title,
  subtitle,
  ctaLabel = "Talk To Our Expert",
  ctaHref = "/contact",
  image,
  imageAlt,
  statCount,
  statLabel,
}: ServiceDetailHeroProps) {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section aria-label={title} className="w-full bg-white">
      <div
        className="mx-auto px-4 md:px-[50px] pt-5 pb-0"
        style={{ maxWidth: "1440px" }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href="/"
                className="transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:underline"
                style={{ fontSize: "var(--text-body-5)", color: "var(--color-text-muted)" }}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={12} style={{ color: "var(--color-text-muted)" }} />
            </li>
            <li>
              <Link
                href="/services"
                className="transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:underline"
                style={{ fontSize: "var(--text-body-5)", color: "var(--color-text-muted)" }}
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={12} style={{ color: "var(--color-text-muted)" }} />
            </li>
            <li>
              <span
                className="font-medium"
                style={{ fontSize: "var(--text-body-5)", color: "var(--color-text-primary)" }}
                aria-current="page"
              >
                {serviceName}
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8 pb-16 md:pb-24">
          {/* Left: text + CTA */}
          <div className="flex flex-col gap-8 md:gap-[50px] w-full md:w-[42%] shrink-0">
            <div className="flex flex-col gap-6 md:gap-[30px]">
              <motion.h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.625rem, 10vw, var(--text-hero))",
                  lineHeight: "clamp(3rem, 12vw, var(--leading-hero))",
                  maxWidth: "760px",
                  color: "var(--color-text-primary)",
                  fontWeight: 400,
                }}
                {...fadeUp(0)}
              >
                {title}
              </motion.h1>
              <motion.p
                className="font-normal"
                style={{
                  fontSize: "var(--text-body-1)",
                  lineHeight: "var(--leading-body-1)",
                  color: "var(--color-text-secondary)",
                }}
                {...fadeUp(0.1)}
              >
                {subtitle}
              </motion.p>
            </div>

            <motion.div {...fadeUp(0.2)}>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit"
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

          {/* Right: image with stat badge */}
          <motion.div
            className="relative w-full md:w-[55%] shrink-0"
            {...(reduced ? {} : {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7, delay: 0.15, ease: "easeOut" },
            })}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(280px, 45vw, 537px)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>

            {/* Stat badge */}
            <div
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-center justify-center gap-1 bg-white shadow-md"
              style={{
                borderRadius: "var(--radius-md)",
                padding: "10px 20px 20px",
                minWidth: "100px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 5vw, 52px)",
                  color: "var(--color-text-primary)",
                  lineHeight: 1,
                }}
              >
                {statCount}
              </span>
              <span
                className="font-medium text-center"
                style={{
                  fontSize: "var(--text-body-5)",
                  color: "var(--color-text-secondary)",
                  whiteSpace: "nowrap",
                }}
              >
                {statLabel}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
