'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GalleryHorizontal, MapPin, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectsGallery() {
  const reduced = useReducedMotion();

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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group flex flex-col rounded-[10px] overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* View Gallery badge */}
                <div
                  className="absolute bottom-3 left-4 flex items-center gap-[6px] rounded-[7px] px-[8px] py-[5px]"
                  style={{ backgroundColor: "rgba(1,24,47,0.75)" }}
                >
                  <GalleryHorizontal size={12} color="white" strokeWidth={2} aria-hidden="true" />
                  <span className="text-white font-medium" style={{ fontSize: "11px" }}>
                    View Gallery
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="flex flex-col flex-1 p-5 gap-3"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                {/* Type tag */}
                <span
                  className="font-semibold tracking-wider uppercase"
                  style={{
                    fontSize: "10px",
                    color: "var(--color-primary)",
                  }}
                >
                  {project.type}
                </span>

                {/* Project name */}
                <h3
                  className="font-semibold leading-snug"
                  style={{
                    fontSize: "var(--text-h3)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {project.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-[6px]">
                  <MapPin
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                    style={{ color: "var(--color-text-secondary)", flexShrink: 0 }}
                  />
                  <span
                    className="font-normal"
                    style={{
                      fontSize: "var(--text-body-4)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {project.location}
                  </span>
                </div>

                {/* Feature */}
                <div className="flex items-center gap-[6px]">
                  <Star
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                    style={{ color: "var(--color-text-secondary)", flexShrink: 0 }}
                  />
                  <span
                    className="font-normal"
                    style={{
                      fontSize: "var(--text-body-4)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {project.feature}
                  </span>
                </div>

                {/* Stats row */}
                <div
                  className="grid grid-cols-3 gap-2 pt-3 mt-auto"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  {[
                    { label: "Size", value: project.size },
                    { label: "Configuration", value: project.configuration },
                    { label: "Timeline", value: project.timeline },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-[3px]">
                      <span
                        className="font-normal"
                        style={{
                          fontSize: "10px",
                          color: "var(--color-text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-semibold leading-tight"
                        style={{
                          fontSize: "var(--text-body-5)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
