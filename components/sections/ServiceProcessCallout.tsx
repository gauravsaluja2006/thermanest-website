'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ServiceProcessCallout() {
  const reduced = useReducedMotion();

  return (
    <section aria-labelledby="process-callout-heading" className="section-padding bg-white">
      <div
        className="mx-auto px-4 md:px-[50px] flex flex-col items-center text-center gap-5"
        style={{ maxWidth: "1340px" }}
      >
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          style={{ maxWidth: "971px" }}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="process-callout-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
            }}
          >
            Built Around A Seamless Process
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "760px",
            }}
          >
            From the first conversation to final handover, every stage is carefully managed to
            deliver a seamless experience. Explore our featured projects below or connect with our
            team to start planning yours.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-[10px] font-semibold text-white transition-all duration-150 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 mt-5"
            style={{
              backgroundColor: "var(--color-primary)",
              height: "var(--height-btn-lg)",
              borderRadius: "var(--radius-md)",
              padding: "0 20px",
              fontSize: "var(--text-body-3)",
            }}
          >
            Talk To Our Expert
            <ArrowRight size={20} aria-hidden="true" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
