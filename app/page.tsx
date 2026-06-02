import { Hero } from "@/components/sections/Hero";
import { DetailsBar } from "@/components/sections/DetailsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailsBar />
      <ServicesGrid />
    </main>
  );
}
