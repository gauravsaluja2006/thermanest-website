import { Hero } from "@/components/sections/Hero";
import { DetailsBar } from "@/components/sections/DetailsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailsBar />
      <ServicesGrid />
      <ComparisonTable />
      <ProjectsGallery />
      <Process />
    </main>
  );
}
