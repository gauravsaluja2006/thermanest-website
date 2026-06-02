import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, Star, Users, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Modern Innovation",
    subtitle: "Future-ready modular design",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    subtitle: "Built around your vision",
  },
  {
    icon: Wrench,
    title: "Professional Team",
    subtitle: "6 sites • 16 experts each",
  },
  {
    icon: Star,
    title: "Quality Craftsmanship",
    subtitle: "Precision in every detail",
  },
];

export function Excellence() {
  return (
    <section aria-labelledby="excellence-heading" className="section-padding bg-white">
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col lg:flex-row items-center justify-between gap-12"
        style={{ maxWidth: "1340px" }}
      >
        {/* Left — content */}
        <div className="flex flex-col gap-[50px] lg:w-[590px] shrink-0">
          <div className="flex flex-col gap-[50px]">
            {/* Title + body */}
            <div className="flex flex-col gap-5">
              <h2
                id="excellence-heading"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 5vw, var(--text-h2))",
                  color: "var(--color-text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  maxWidth: "483px",
                }}
              >
                Excellence in Every Structure Built
              </h2>
              <p
                className="font-normal"
                style={{
                  fontSize: "var(--text-body-2)",
                  lineHeight: "1.75rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                At Thermanest Prefab, we are committed to delivering modern modular spaces
                that combine quality craftsmanship, innovative engineering, and thoughtful
                design. With a strong focus on precision, durability, and client
                satisfaction, we create prefab solutions tailored to residential,
                commercial, and hospitality needs.
              </p>
            </div>

            {/* 4 pillars — 2×2 grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-[8.8px] shrink-0"
                      style={{
                        width: 44,
                        height: 44,
                        backgroundColor: "var(--color-secondary)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={22} color="white" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <span
                        className="font-medium leading-none"
                        style={{
                          fontSize: "var(--text-body-2)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {pillar.title}
                      </span>
                      <span
                        className="font-normal leading-none"
                        style={{
                          fontSize: "var(--text-body-4)",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold transition-opacity duration-150 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
            style={{ fontSize: "var(--text-body-3)", color: "var(--color-primary)" }}
          >
            Explore More About Us
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        {/* Right — photo */}
        <div className="relative rounded-[10px] overflow-hidden w-full lg:w-[656px] shrink-0" style={{ height: "560px" }}>
          <Image
            src="/images/excellence.png"
            alt="ThermaNest modular construction in progress"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 656px"
          />
        </div>
      </div>
    </section>
  );
}
