'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section
      aria-labelledby="faq-heading"
      className="section-padding"
      style={{ backgroundColor: "rgba(248,248,248,0.5)" }}
    >
      <div className="mx-auto px-4 md:px-[52px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-[65px]">
          <h2
            id="faq-heading"
            className="self-stretch text-left md:self-auto md:text-center"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="font-normal self-stretch text-left md:self-auto md:text-center"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "800px",
            }}
          >
            Have questions? Explore answers to some of the most commonly asked questions
            about working with THERMANEST
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-[10px] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span
                    className={isOpen ? "font-semibold" : "font-normal"}
                    style={{
                      fontSize: "var(--text-body-2)",
                      color: "var(--color-text-primary)",
                      lineHeight: "1.75rem",
                    }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    strokeWidth={2}
                    className={`shrink-0 ml-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6">
                        <p
                          className="font-normal"
                          style={{
                            fontSize: "var(--text-body-2)",
                            lineHeight: "1.75rem",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
