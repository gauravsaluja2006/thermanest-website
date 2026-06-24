'use client';

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceIncludeItem } from "@/data/services";
import { getServiceIcon } from "@/components/ui/serviceIcons";

interface ServiceIncludesProps {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionIcon: string;
  ctaLabel: string;
  ctaHref?: string;
  items: ServiceIncludeItem[];
}

export function ServiceIncludes({
  sectionTitle,
  sectionSubtitle,
  sectionIcon,
  ctaLabel,
  ctaHref = "/contact",
  items,
}: ServiceIncludesProps) {
  const reduced = useReducedMotion();
  const Icon = getServiceIcon(sectionIcon);

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section
      aria-labelledby="includes-heading"
      className="w-full"
      style={{ backgroundColor: "rgba(248, 248, 248, 0.5)" }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[155px] px-4 md:px-[51px] py-[30px] md:py-12 lg:py-0 lg:min-h-[585px]"
        style={{ maxWidth: "1440px" }}
      >
        {/* Left: heading + description + CTA */}
        <motion.div
          className="flex flex-col gap-5 w-full lg:w-[514px] shrink-0 lg:py-12"
          {...fadeUp(0)}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: "59px", height: "59px" }}
            aria-hidden="true"
          >
            <Icon
              size={59}
              strokeWidth={1.25}
              style={{ color: "var(--color-text-primary)" }}
            />
          </div>

          <h2
            id="includes-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {sectionTitle}
          </h2>

          <p
            className="font-normal"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
            }}
          >
            {sectionSubtitle}
          </p>

          <Link
            href={ctaHref}
            className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit mt-2"
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

        {/* Right: include cards */}
        <motion.div
          className="flex flex-col gap-[22px] w-full lg:w-[666px] shrink-0"
          {...fadeUp(0.15)}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-[5px] justify-center px-4 md:px-[30px] py-[29px] rounded-[10px] bg-white"
              style={{ minHeight: "140px" }}
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Title row with checkmark */}
              <div className="flex items-center gap-3 min-h-[41px]">
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "var(--color-primary-light)",
                  }}
                  aria-hidden="true"
                >
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <h3
                  className="font-semibold text-body-1"
                  style={{
                    color: "var(--color-text-primary)",
                    lineHeight: "var(--leading-body-1)",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="font-normal pl-[44px]"
                style={{
                  fontSize: "var(--text-body-3)",
                  lineHeight: "var(--leading-body-3)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
