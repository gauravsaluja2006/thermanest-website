'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const CAROUSEL_GAP_PX = 40;

function useVisibleSlideCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setCount(md.matches ? 2 : 1);
    };

    update();
    md.addEventListener("change", update);
    return () => md.removeEventListener("change", update);
  }, []);

  return count;
}

export function ProjectsGallery() {
  const reduced = useReducedMotion();
  const visibleCount = useVisibleSlideCount();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const width = container.clientWidth;
      const gapTotal = CAROUSEL_GAP_PX * (visibleCount - 1);
      setSlideWidth((width - gapTotal) / visibleCount);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [visibleCount]);

  const offset = activeIndex * (slideWidth + CAROUSEL_GAP_PX);
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < maxIndex;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section aria-labelledby="projects-heading" className="section-padding bg-white overflow-hidden">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-[65px]">
          <div className="flex flex-col gap-4 min-w-0">
            <h2
              id="projects-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, var(--text-h2))",
                color: "var(--color-text-primary)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Spaces We&apos;ve Brought{" "}
              <span className="block md:inline">To Life</span>
            </h2>
            <p
              className="font-normal"
              style={{
                maxWidth: "640px",
                fontSize: "var(--text-body-2)",
                lineHeight: "1.75rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Explore a diverse collection of modular projects delivered over the years,
              thoughtfully designed around unique client needs, lifestyles and project requirements
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold shrink-0 transition-opacity duration-150 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm md:mt-2"
            style={{ fontSize: "var(--text-body-3)", color: "var(--color-primary)" }}
          >
            View All Projects
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        {/* Carousel — 1 card mobile, 2 cards tablet+ */}
        <div
          className="w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{ x: -offset }}
              transition={reduced ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
            >
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="shrink-0"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              disabled={!canPrev}
              className="flex items-center justify-center rounded-full border transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 disabled:opacity-40 disabled:pointer-events-none"
              style={{ width: 40, height: 40, borderColor: "var(--color-border)" }}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} strokeWidth={2} style={{ color: "var(--color-text-primary)" }} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Project slides">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show projects ${i + 1} to ${Math.min(i + visibleCount, projects.length)}`}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{
                    width: i === activeIndex ? 20 : 8,
                    height: 8,
                    backgroundColor: i === activeIndex ? "var(--color-primary)" : "var(--color-border)",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="flex items-center justify-center rounded-full border transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 disabled:opacity-40 disabled:pointer-events-none"
              style={{ width: 40, height: 40, borderColor: "var(--color-border)" }}
              aria-label="Next project"
            >
              <ArrowRight size={18} strokeWidth={2} style={{ color: "var(--color-text-primary)" }} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
