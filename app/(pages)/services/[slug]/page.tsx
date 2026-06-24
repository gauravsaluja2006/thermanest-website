import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceDetails } from "@/data/services";
import { ServiceDetailHero } from "@/components/sections/ServiceDetailHero";
import { ServiceBenefits } from "@/components/sections/ServiceBenefits";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceGallery } from "@/components/sections/ServiceGallery";
import { ServiceStandards } from "@/components/sections/ServiceStandards";
// import { ServiceProcessCallout } from "@/components/sections/ServiceProcessCallout";
import { CTABanner } from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  return {
    title: `${detail.title} | ThermaNest Premium Modular Spaces`,
    description: detail.heroSubtitle,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = serviceDetails[slug];

  if (!detail) notFound();

  return (
    <main>
      <ServiceDetailHero
        serviceName={detail.title}
        title={detail.heroTitle}
        subtitle={detail.heroSubtitle}
        image={detail.image}
        imageAlt={`${detail.title} by ThermaNest`}
        statCount={detail.statCount}
        statLabel={detail.statLabel}
      />
      <ServiceBenefits
        sectionTitle={detail.benefitsSectionTitle}
        sectionSubtitle={detail.benefitsSectionSubtitle}
        benefits={detail.benefits}
      />
      <ServiceIncludes
        sectionTitle={detail.includesSectionTitle}
        sectionSubtitle={detail.includesSectionSubtitle}
        ctaLabel={detail.includesCtaLabel}
        items={detail.includesItems}
      />
      <ServiceGallery
        sectionTitle={detail.gallerySectionTitle}
        sectionSubtitle={detail.gallerySectionSubtitle}
        items={detail.gallery}
      />
      <ServiceStandards />
      {/* <ServiceProcessCallout /> */}
      <CTABanner />
    </main>
  );
}
