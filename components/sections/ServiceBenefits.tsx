'use client';

import {
  Briefcase,
  Clock,
  Home,
  LayoutGrid,
  Leaf,
  MapPin,
  Plus,
  RefreshCcw,
  Shield,
  Sliders,
  Sparkles,
  Star,
  Sun,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Volume2,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceBenefit } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Clock,
  Home,
  LayoutGrid,
  Leaf,
  MapPin,
  Plus,
  RefreshCcw,
  Shield,
  Sliders,
  Sparkles,
  Star,
  Sun,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Volume2,
  Wifi,
  Zap,
};

interface ServiceBenefitsProps {
  sectionTitle: string;
  sectionSubtitle: string;
  benefits: ServiceBenefit[];
}

export function ServiceBenefits({ sectionTitle, sectionSubtitle, benefits }: ServiceBenefitsProps) {
  const reduced = useReducedMotion();

  return (
    <section aria-labelledby="benefits-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>
        {/* Section header */}
        <motion.div
          className="flex flex-col items-start text-left gap-5 mb-[65px]"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="benefits-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
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
              maxWidth: "680px",
            }}
          >
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Benefit cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Sparkles;
            return (
              <motion.div
                key={index}
                className="flex flex-col gap-[5px] rounded-[10px] px-[30px] py-[29px]"
                style={{ backgroundColor: "var(--color-surface)" }}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center shrink-0 mb-1"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--color-secondary)",
                    borderRadius: "8.8px",
                  }}
                >
                  <Icon size={23} strokeWidth={1.75} aria-hidden="true" className="text-white" />
                </div>

                {/* Title */}
                <div className="flex items-center min-h-[48px]">
                  <h3
                    className="font-semibold leading-none"
                    style={{
                      fontSize: "22px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="font-normal"
                  style={{
                    fontSize: "var(--text-body-3)",
                    lineHeight: "var(--leading-body-3)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
