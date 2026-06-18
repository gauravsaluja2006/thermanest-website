import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | ThermaNest Premium Modular Spaces",
  description:
    "Learn how THERMANEST combines Dubai-engineered quality, modern innovation, and 20+ years of expertise to deliver premium modular spaces across North India.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <CTABanner />
    </main>
  );
}
