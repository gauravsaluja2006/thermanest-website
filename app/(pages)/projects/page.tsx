import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Projects | ThermaNest Premium Modular Spaces",
  description:
    "Browse completed modular construction projects by ThermaNest — luxury homes, resorts, offices and farmhouses delivered across North India in 20–45 days.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="6+ Completed Projects"
        title="Spaces We've Brought To Life"
        body="From luxury residences to hospitality suites and commercial hubs, every ThermaNest project is precision-engineered, fully furnished, and delivered in 20–45 days."
        ctaLabel="Start Your Project"
        ctaHref="/contact"
        image="/images/projects/urban-modular-residence.png"
        imageAlt="ThermaNest Urban Modular Residence exterior"
      />
      <ProjectsGrid />
      <Process />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
