'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GalleryHorizontal, MapPin, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

function ProjectCard({ project, index, reduced }: { project: typeof projects[0]; index: number; reduced: boolean | null }) {
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group flex flex-col rounded-[10px] overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[308px] overflow-hidden rounded-t-[10px] shrink-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute bottom-[14px] left-6 flex items-center gap-[6px] rounded-[7px] px-[8px] py-[7px] h-[34px]"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <GalleryHorizontal size={14} color="white" strokeWidth={2} aria-hidden="true" />
          <span className="text-white font-medium" style={{ fontSize: "var(--text-body-4)" }}>
            View Gallery
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex flex-col flex-1 px-[30px] py-[40px] gap-5 rounded-b-[10px]"
        style={{ backgroundColor: "var(--color-white)" }}
      >
        <div className="flex flex-col gap-3">
          <span
            className="font-medium uppercase"
            style={{ fontSize: "var(--text-body-4)", color: "var(--color-primary)" }}
          >
            {project.type}
          </span>
          <h3
            className="font-semibold leading-snug"
            style={{ fontSize: "var(--text-h3)", color: "var(--color-text-secondary)" }}
          >
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-secondary)", flexShrink: 0 }} />
          <span className="font-normal" style={{ fontSize: "var(--text-body-3)", color: "var(--color-text-secondary)" }}>
            {project.location}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Star size={16} strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-secondary)", flexShrink: 0 }} />
          <span className="font-normal" style={{ fontSize: "var(--text-body-3)", color: "var(--color-text-secondary)" }}>
            {project.feature}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-5 mt-auto" style={{ borderTop: "1px solid var(--color-border)" }}>
          {[
            { label: "Size", value: project.size },
            { label: "Configuration", value: project.configuration },
            { label: "Timeline", value: project.timeline },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-normal" style={{ fontSize: "var(--text-body-5)", color: "var(--color-text-secondary)" }}>
                {label}
              </span>
              <span className="font-semibold leading-tight" style={{ fontSize: "var(--text-body-5)", color: "var(--color-text-primary)" }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsGallery() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActiveIndex((i) => (i + 1) % projects.length);

  return (
    <section aria-labelledby="projects-heading" className="section-padding bg-white overflow-hidden">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-[65px]">
          <div className="flex flex-col gap-4" style={{ maxWidth: "640px" }}>
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
              Spaces We&apos;ve Brought To Life
            </h2>
            <p
              className="font-normal"
              style={{
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

        {/* ── Mobile carousel (hidden on md+) ── */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={reduced ? false : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ProjectCard project={projects[activeIndex]} index={activeIndex} reduced={reduced} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full border transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
              style={{ width: 40, height: 40, borderColor: "var(--color-border)" }}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} strokeWidth={2} style={{ color: "var(--color-text-primary)" }} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Project slides">
              {projects.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to project ${i + 1}`}
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
              onClick={next}
              className="flex items-center justify-center rounded-full border transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
              style={{ width: 40, height: 40, borderColor: "var(--color-border)" }}
              aria-label="Next project"
            >
              <ArrowRight size={18} strokeWidth={2} style={{ color: "var(--color-text-primary)" }} />
            </button>
          </div>
        </div>

        {/* ── Desktop grid (hidden below md) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} reduced={reduced} />
          ))}
        </div>

      </div>
    </section>
  );
}
