'use client';

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const ALL_LABEL = "All";

export function ProjectsGrid() {
  const reduced = useReducedMotion();

  const filterTypes = useMemo(() => {
    const seen = new Set<string>();
    const types: string[] = [];
    for (const project of projects) {
      if (!seen.has(project.type)) {
        seen.add(project.type);
        types.push(project.type);
      }
    }
    return [ALL_LABEL, ...types];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL_LABEL);

  const filtered = useMemo(
    () =>
      activeFilter === ALL_LABEL
        ? projects
        : projects.filter((p) => p.type === activeFilter),
    [activeFilter]
  );

  return (
    <section aria-labelledby="projects-grid-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <h2
            id="projects-grid-heading"
            className="self-stretch text-left md:self-auto md:text-center"
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
            className="font-normal self-stretch text-left md:self-auto md:text-center"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
            }}
          >
            Explore a diverse collection of modular projects delivered over the years,
            thoughtfully designed around unique client needs, lifestyles and project requirements
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-[50px] md:justify-center"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {filterTypes.map((type) => {
            const isActive = type === activeFilter;
            return (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(type)}
                className="rounded-full border px-4 py-2 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  fontSize: "var(--text-body-4)",
                  backgroundColor: isActive ? "var(--color-primary)" : "transparent",
                  borderColor: isActive ? "var(--color-primary)" : "var(--color-border)",
                  color: isActive ? "var(--color-white)" : "var(--color-text-secondary)",
                }}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
