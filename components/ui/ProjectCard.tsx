import { Fragment } from "react";
import Image from "next/image";
import { GalleryHorizontal, MapPin, Star } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
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

        <div
          className="mt-auto flex flex-col items-center rounded-[10px] px-3 py-[10px] lg:px-[25px]"
          style={{ backgroundColor: "var(--color-primary-light-85)" }}
        >
          <div className="flex w-full items-start gap-3 lg:gap-[29px]">
            {[
              { label: "Size", value: project.size },
              { label: "Configuration", value: project.configuration },
              { label: "Timeline", value: project.timeline },
            ].map(({ label, value }, index) => (
              <Fragment key={label}>
                {index > 0 && (
                  <div
                    className="shrink-0 w-px h-10"
                    style={{ backgroundColor: "var(--color-border)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="flex min-w-0 flex-1 flex-col justify-start gap-2">
                  <span
                    className="font-normal leading-none"
                    style={{ fontSize: "var(--text-body-4)", color: "var(--color-text-secondary)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-medium leading-tight text-body-3 lg:text-body-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
