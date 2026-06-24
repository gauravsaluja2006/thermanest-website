'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "1",
    title: "Consultation & Planning",
    description:
      "We begin by understanding your space requirements, project goals, budget, and functional needs to create a modular solution tailored to your vision and expectations",
  },
  {
    number: "2",
    title: "Design & Manufacturing",
    description:
      "Our team develops precision-engineered modular structures using advanced planning, modern technology, and high-quality manufacturing processes to ensure durability",
  },
  {
    number: "3",
    title: "Transport & Installation",
    description:
      "Once manufacturing is complete, the modules are carefully transported and installed on-site with accuracy, and minimal disruption to the surrounding environment",
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col items-center gap-[84px]"
        style={{ maxWidth: "1340px" }}
      >
        {/* Header + steps */}
        <div className="flex flex-col items-center gap-[65px] w-full">
          <Reveal className="flex flex-col items-center text-center gap-5" style={{ maxWidth: "971px" }}>
            <h2
              id="process-heading"
              className="text-white self-stretch text-left md:self-auto md:text-center"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, var(--text-h2))",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              A Process Designed Around You
            </h2>
            <p
              className="text-white/80 font-normal self-stretch text-left md:self-auto md:text-center"
              style={{ fontSize: "var(--text-body-2)", lineHeight: "1.75rem" }}
            >
              We take care of the entire modular journey so you can focus on your vision
              while we handle all the planning
            </p>
          </Reveal>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[29px] w-full">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.1}
                className="flex flex-col gap-[5px] rounded-[10px] px-[30px] py-[29px] transition-colors duration-150 md:hover:bg-white/8"
                style={{
                  backgroundColor: "rgba(248,248,248,0.06)",
                  minHeight: "272px",
                }}
              >
                {/* Number badge */}
                <div
                  className="flex items-center justify-center rounded-[8px] mb-3 shrink-0"
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-white font-semibold"
                    style={{ fontSize: "var(--text-h3)", lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-semibold"
                  style={{ fontSize: "22px", lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/75 font-normal mt-1"
                  style={{
                    fontSize: "var(--text-body-3)",
                    lineHeight: "var(--leading-body-3)",
                  }}
                >
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal
          className="flex flex-col items-start md:items-center gap-[30px] text-left md:text-center self-stretch md:self-auto w-full"
          style={{ maxWidth: "887px" }}
        >
          <p
            className="text-white/80 font-normal self-stretch"
            style={{ fontSize: "var(--text-body-2)", lineHeight: "1.75rem" }}
          >
            Now that you know how it works, let&apos;s create a modular space tailored to your
            lifestyle and requirements
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary self-start md:self-auto"
            style={{
              backgroundColor: "var(--color-primary)",
              height: "var(--height-btn-lg)",
              borderRadius: "var(--radius-md)",
              padding: "0 20px",
              fontSize: "var(--text-body-3)",
            }}
          >
            Start Your Project
            <ArrowRight size={20} aria-hidden="true" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
