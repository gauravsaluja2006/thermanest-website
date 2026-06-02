import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-[65px]">
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Hear From Our Valued Clients
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "800px",
            }}
          >
            Real experiences from clients who partnered with THERMANEST for thoughtfully
            executed, high-quality modular construction projects
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-[23px] rounded-[10px] px-[23px] py-[20px]"
              style={{ backgroundColor: "rgba(238,249,215,0.85)" }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="var(--color-primary)"
                    strokeWidth={0}
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-normal flex-1"
                style={{
                  fontSize: "var(--text-body-3)",
                  lineHeight: "var(--leading-body-3)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex flex-col gap-[4px]">
                <span
                  className="font-medium"
                  style={{
                    fontSize: "var(--text-body-3)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {t.name}
                </span>
                <span
                  className="font-normal"
                  style={{
                    fontSize: "var(--text-body-4)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
