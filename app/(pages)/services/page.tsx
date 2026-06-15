import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services | ThermaNest Premium Modular Spaces",
  description:
    "Explore our range of modular construction solutions — luxury homes, offices, resorts, villas, farmhouses and relocatable spaces.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="98% Client Satisfaction Rate"
        title={
          <>
            Solutions Designed For{" "}
            <br className="hidden md:block" />
            Every Requirement
          </>
        }
        body="Explore our range of modular construction solutions, each tailored to meet different residential, commercial and hospitality needs."
        ctaLabel="Start A Project"
        ctaHref="/contact"
        image="/images/hero/services-hero.png"
        imageAlt="ThermaNest modular construction blueprint"
      />
      <ServicesGrid showFeatures />
      <ComparisonTable />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
