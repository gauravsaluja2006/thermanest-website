import { Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="flex flex-col items-center text-center gap-5 px-4 pt-[120px] pb-[80px]"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <h2
        id="cta-heading"
        className="text-white"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 5vw, var(--text-h2))",
          fontWeight: 400,
          lineHeight: 1.1,
        }}
      >
        Ready To Build Your Dream Space?
      </h2>
      <p
        className="font-normal text-white"
        style={{
          fontSize: "var(--text-body-2)",
          lineHeight: "1.75rem",
          maxWidth: "888px",
        }}
      >
        Whether you&apos;re planning a home, office, resort or custom modular build, our
        team is here to help you design, customize and deliver a space that truly
        reflects your vision
      </p>
      <div className="mt-[25px] w-full sm:w-auto px-4 sm:px-0">
        <a
          href="tel:+9215666885"
          className="flex w-full sm:inline-flex sm:w-auto items-center justify-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          style={{
            backgroundColor: "var(--color-primary)",
            height: "var(--height-btn-lg)",
            borderRadius: "var(--radius-md)",
            padding: "0 20px",
          }}
          aria-label="Call us today at +9215666885"
        >
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          <span style={{ fontSize: "var(--text-body-3)" }}>Call Us Today</span>
          <span className="opacity-60 mx-1">|</span>
          <span style={{ fontSize: "var(--text-body-2)" }}>+9215666885</span>
        </a>
      </div>
    </section>
  );
}
