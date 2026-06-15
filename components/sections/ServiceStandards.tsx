'use client';

import { Clock, CloudLightning, Coins, Thermometer, Lightbulb, Truck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Standard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const standards: Standard[] = [
  {
    icon: Clock,
    title: "50+ Year Structural Lifespan",
    description:
      "Built with durable materials and high-quality construction to provide long-lasting performance with less maintenance over time",
  },
  {
    icon: CloudLightning,
    title: "Weather & Earthquake Resistant",
    description:
      "Designed to handle changing weather conditions and provide added strength and stability during earthquakes",
  },
  {
    icon: Coins,
    title: "Time & Cost Efficient",
    description:
      "Factory-built construction helps reduce project timelines, avoid delays and save on overall building costs",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description:
      "Designed to keep interiors cooler in summer and warmer in winter, creating a comfortable living environment throughout the year",
  },
  {
    icon: Lightbulb,
    title: "Energy Efficient Design",
    description:
      "Designed for exceptional efficiency, with energy usage as low as 15% of a conventional household",
  },
  {
    icon: Truck,
    title: "Relocatable & Future Ready",
    description:
      "Built with flexibility in mind, making it easier to expand, reconfigure or relocate as requirements evolve",
  },
];

export function ServiceStandards() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="standards-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col items-center gap-[65px]"
        style={{ maxWidth: "1340px" }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-5 w-full"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="standards-heading"
            className="text-white self-stretch text-left md:self-auto md:text-center lg:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Standard Across Every THERMANEST Build
          </h2>
          <p
            className="text-white/80 font-normal self-stretch text-left md:self-auto md:text-center"
            style={{ fontSize: "var(--text-body-2)", lineHeight: "1.75rem", maxWidth: "760px" }}
          >
            Built on a foundation of innovation, quality and craftsmanship, these are the standards
            that shape every THERMANEST project
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] w-full">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <motion.div
                key={standard.title}
                className="flex flex-col gap-[5px] rounded-[10px] px-[30px] py-[29px] transition-colors duration-150 md:hover:bg-white/8"
                style={{ backgroundColor: "rgba(248,248,248,0.06)" }}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center shrink-0 mb-3"
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.75} className="text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-white font-semibold"
                  style={{ fontSize: "var(--text-body-1)", lineHeight: 1.2 }}
                >
                  {standard.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/75 font-normal mt-1"
                  style={{
                    fontSize: "var(--text-body-3)",
                    lineHeight: "var(--leading-body-3)",
                  }}
                >
                  {standard.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
