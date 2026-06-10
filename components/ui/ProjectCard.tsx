import Image from "next/image";
import { GalleryHorizontal, MapPin, Star } from "lucide-react";
import type { Project } from "@/data/projects";

const projectStats = (project: Project) =>
  [
    { label: "Size", value: project.size },
    { label: "Configuration", value: project.configuration },
    { label: "Timeline", value: project.timeline },
  ] as const;

export function ProjectCard({ project }: { project: Project }) {
  const stats = projectStats(project);
  return (
    <article className="group flex w-full flex-col rounded-[10px] overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[308px] overflow-hidden rounded-t-[10px] shrink-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
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
        className="flex flex-col flex-1 px-5 py-8 lg:px-[30px] lg:py-[40px] gap-5 rounded-b-[10px]"
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

        <div className="flex gap-2">
          <span
            className="inline-flex shrink-0 items-center"
            style={{ height: "var(--leading-body-3)" }}
          >
            <MapPin size={16} strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-secondary)" }} />
          </span>
          <span
            className="font-normal"
            style={{
              fontSize: "var(--text-body-3)",
              lineHeight: "var(--leading-body-3)",
              color: "var(--color-text-secondary)",
            }}
          >
            {project.location}
          </span>
        </div>

        <div className="flex gap-2">
          <span
            className="inline-flex shrink-0 items-center"
            style={{ height: "var(--leading-body-3)" }}
          >
            <Star size={16} strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-secondary)" }} />
          </span>
          <span
            className="font-normal"
            style={{
              fontSize: "var(--text-body-3)",
              lineHeight: "var(--leading-body-3)",
              color: "var(--color-text-secondary)",
            }}
          >
            {project.feature}
          </span>
        </div>

        <ul
          role="list"
          className="mt-auto grid grid-cols-1 gap-0 overflow-hidden rounded-[10px] p-0 m-0 list-none md:grid-cols-3"
          style={{
            backgroundColor: "var(--color-primary-light-85)",
            border: "1px solid color-mix(in srgb, var(--color-primary) 14%, transparent)",
          }}
        >
          {stats.map(({ label, value }, index) => (
            <li
              key={label}
              className={`flex min-w-0 flex-col gap-1.5 px-5 py-4 md:items-center md:justify-center md:text-center md:px-4 md:py-5 lg:px-6${
                index > 0 ? " border-t md:border-t-0 md:border-l" : ""
              }`}
              style={{
                borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)",
              }}
            >
              <span
                className="font-medium"
                style={{
                  fontSize: "var(--text-body-4)",
                  lineHeight: "var(--leading-body-3)",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </span>
              <span
                className="font-medium"
                style={{
                  fontSize: "var(--text-body-2)",
                  lineHeight: "var(--leading-body-3)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
