'use client';

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const ALL_FILTER = "All";

export function ProjectsGrid() {
  const reduced = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filters = useMemo(
    () => [ALL_FILTER, ...Array.from(new Set(projects.map((project) => project.type)))],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === ALL_FILTER
        ? projects
        : projects.filter((project) => project.type === activeFilter),
    [activeFilter],
  );

  return (
    <section aria-labelledby="projects-grid-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>
        <div className="flex flex-col gap-4 mb-[65px]">
          <h2
            id="projects-grid-heading"
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

        <div
          className="flex flex-wrap gap-3 mb-10"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full px-4 py-2 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  fontSize: "var(--text-body-4)",
                  backgroundColor: isActive ? "var(--color-primary)" : "var(--color-surface)",
                  color: isActive ? "var(--color-white)" : "var(--color-text-secondary)",
                  border: isActive ? "none" : "1px solid var(--color-border)",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
