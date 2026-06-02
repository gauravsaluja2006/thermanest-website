export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  projectCount: string;
}

export const services: Service[] = [
  {
    slug: "luxury-homes",
    title: "Luxury Homes",
    description: "Premium modular homes with hotel-like interiors and world-class finishes",
    image: "/images/services/luxury-homes.png",
    projectCount: "11+ Projects",
  },
  {
    slug: "offices",
    title: "Offices",
    description: "Premium modular offices designed for modern workspaces and productivity",
    image: "/images/services/offices.png",
    projectCount: "155+ Projects",
  },
  {
    slug: "resorts",
    title: "Resorts",
    description: "Premium modular resorts with luxury hospitality comfort and memorable stay",
    image: "/images/services/resorts.png",
    projectCount: "3+ Projects",
  },
  {
    slug: "villas",
    title: "Villas",
    description: "Luxury modular villas with premium interiors and modern design",
    image: "/images/services/villas.png",
    projectCount: "22+ Projects",
  },
  {
    slug: "farmhouses",
    title: "Farmhouses",
    description: "Premium farmhouses designed for comfort, nature and elegant living",
    image: "/images/services/farmhouses.png",
    projectCount: "127+ Projects",
  },
  {
    slug: "relocatable-spaces",
    title: "Relocatable Spaces",
    description: "Flexible portable modular spaces built for mobility, speed and adaptable use",
    image: "/images/services/relocatable.png",
    projectCount: "45+ Projects",
  },
];
