import { Hero } from "@/components/sections/Hero";
import { DetailsBar } from "@/components/sections/DetailsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Process } from "@/components/sections/Process";
import { Excellence } from "@/components/sections/Excellence";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailsBar />
      <ServicesGrid />
      <ComparisonTable />
      <ProjectsGallery />
      <Process />
      <Excellence />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
