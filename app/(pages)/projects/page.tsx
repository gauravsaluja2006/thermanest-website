import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Projects | ThermaNest Premium Modular Spaces",
  description:
    "Browse completed ThermaNest modular projects — luxury homes, resorts, offices and farmhouses delivered across North India in 20–45 days.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="6+ Completed Projects"
        title="Spaces We've Brought To Life"
        body="From luxury residences to commercial hubs and resort suites, explore modular builds delivered on time with Dubai-engineered quality."
        ctaLabel="Start Your Project"
        ctaHref="/contact"
        image="/images/projects/urban-modular-residence.png"
        imageAlt="The Urban Modular Residence by ThermaNest"
      />
      <ProjectsGrid />
      <Process />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
