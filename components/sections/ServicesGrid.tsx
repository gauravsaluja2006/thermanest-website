'use client';

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Building2,
  Home,
  Layers,
  Package2,
  TreePine,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  "luxury-homes": Home,
  "offices": Building2,
  "resorts": Waves,
  "villas": Building,
  "farmhouses": TreePine,
  "relocatable-spaces": Package2,
};

export function ServicesGrid() {
  const reduced = useReducedMotion();

  return (
    <section aria-labelledby="services-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-[65px]">
          <h2
            id="services-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Luxury Modular Spaces We Create
          </h2>
          <p
            className="font-normal self-stretch text-left md:self-auto md:text-center"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "888px",
            }}
          >
            From luxury residential spaces to smart commercial environments, we design
            and deliver fully furnished modular builds crafted for comfort, durability
            and modern living
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[39px]">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? Home;
            return (
              <motion.article
                key={service.slug}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                className="group flex flex-col rounded-[10px] overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: "1px solid var(--color-border)" }}
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden rounded-t-[10px] shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Project badge */}
                  <div
                    className="absolute bottom-4 left-7 flex items-center gap-[6px] rounded-[7px] px-[8px] py-[6px]"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <Layers
                      size={13}
                      strokeWidth={2}
                      aria-hidden="true"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span
                      className="font-medium whitespace-nowrap"
                      style={{
                        fontSize: "var(--text-body-5)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {service.projectCount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex flex-col flex-1 gap-5 pt-[21px] px-[28px] pb-[24px] rounded-b-[10px]"
                  style={{ backgroundColor: "rgba(248,248,248,0.5)" }}
                >
                  {/* Title row */}
                  <div className="flex items-center gap-[10px]">
                    <Icon
                      size={24}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      style={{ color: "var(--color-text-primary)", flexShrink: 0 }}
                    />
                    <h3
                      className="font-semibold leading-none"
                      style={{
                        fontSize: "22px",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="font-normal flex-1"
                    style={{
                      fontSize: "var(--text-body-3)",
                      lineHeight: "var(--leading-body-3)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-[8px] font-semibold transition-colors duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
                    style={{
                      fontSize: "var(--text-body-3)",
                      color: "var(--color-primary)",
                    }}
                  >
                    Explore More
                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
