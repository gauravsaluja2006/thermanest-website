'use client';

import { Cpu, Award, Leaf, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: Cpu,
    title: "Modern Innovation",
    description:
      "We use advanced technology and manufacturing to push the boundaries of what's possible in modular construction",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We pay close attention to every detail to ensure each space is built with care, quality and long-lasting durability",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We focus on reducing waste, using resources responsibly and creating spaces that have a lower impact on the environment",
  },
];

export function AboutValues() {
  return (
    <section aria-labelledby="about-values-heading" className="section-padding bg-white">
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col gap-[65px] items-center"
        style={{ maxWidth: "1340px" }}
      >
        {/* Title block */}
        <Reveal className="flex flex-col gap-5 items-center text-center">
          <h2
            id="about-values-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Building With Purpose
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "888px",
            }}
          >
            Every project we undertake is shaped by the principles that define how we
            design, build and deliver spaces
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
          {values.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={index * 0.1}
                className="flex flex-col gap-[5px] rounded-[10px] px-[30px] py-[29px]"
                style={{
                  backgroundColor: "var(--color-surface)",
                  minHeight: "255px",
                }}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center rounded-[8.8px] shrink-0 mb-1"
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "var(--color-secondary)",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={23} color="white" strokeWidth={1.75} />
                </div>

                {/* Heading */}
                <div className="flex items-center min-h-[48px]">
                  <h3
                    className="font-semibold leading-snug"
                    style={{
                      fontSize: "var(--text-h5)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="font-normal"
                  style={{
                    fontSize: "var(--text-body-3)",
                    lineHeight: "1.625rem",
                    color: "var(--color-text-secondary)",
                    maxWidth: "343px",
                  }}
                >
                  {card.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
