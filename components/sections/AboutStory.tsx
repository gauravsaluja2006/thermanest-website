'use client';

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const checkpoints = [
  "16+ Professional Team Members",
  "6 Active Project Sites",
  "100% End-To-End Project Management",
];

export function AboutStory() {
  return (
    <section aria-labelledby="about-story-heading" className="section-padding bg-white">
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[108px] justify-between"
        style={{ maxWidth: "1340px" }}
      >
        {/* Left — content */}
        <div className="flex flex-col gap-[30px] lg:w-[590px] shrink-0">
          <Reveal className="flex flex-col gap-5">
            <h2
              id="about-story-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, var(--text-h2))",
                color: "var(--color-text-primary)",
                fontWeight: 400,
                lineHeight: 1.1,
                maxWidth: "483px",
              }}
            >
              About Thermanest
            </h2>
            <p
              className="font-normal"
              style={{
                fontSize: "var(--text-body-2)",
                lineHeight: "1.75rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Traditional construction often comes with delays, uncertainty and
              unnecessary complexity. THERMANEST was founded with a vision to offer a
              better way to build, one that combines quality, reliability and a smoother
              overall experience. Our goal is to help individuals and businesses bring
              their ideas to life by creating spaces that are functional, thoughtfully
              designed and built around their unique needs.
            </p>
          </Reveal>

          {/* Checkpoints */}
          <Reveal delay={0.1} className="flex flex-col gap-[14px]">
            {checkpoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{ color: "var(--color-primary)", flexShrink: 0 }}
                />
                <span
                  className="font-medium"
                  style={{
                    fontSize: "var(--text-body-3)",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.625rem",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right — image */}
        <Reveal
          delay={0.15}
          className="relative rounded-[10px] overflow-hidden w-full lg:w-[656px] shrink-0 h-[320px] sm:h-[420px] lg:h-[504px]"
        >
          <Image
            src="/images/about-story.png"
            alt="THERMANEST construction team on site"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 656px"
          />
        </Reveal>
      </div>
    </section>
  );
}
