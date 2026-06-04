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
    description: "Modern workspaces designed for growing businesses and professional environments",
    image: "/images/services/offices.png",
    projectCount: "155+ Projects",
  },
  {
    slug: "resorts",
    title: "Resorts",
    description: "Luxury resort units that deliver exceptional guest experiences and memorable stay",
    image: "/images/services/resorts.png",
    projectCount: "3+ Projects",
  },
  {
    slug: "villas",
    title: "Villas",
    description: "Luxury modular villas for spacious living and a sophisticated lifestyle experience",
    image: "/images/services/villas.png",
    projectCount: "22+ Projects",
  },
  {
    slug: "farmhouses",
    title: "Farmhouses",
    description: "Nature inspired retreats designed for privacy, comfort and peaceful living",
    image: "/images/services/farmhouses.png",
    projectCount: "127+ Projects",
  },
  {
    slug: "relocatable-spaces",
    title: "Relocatable Spaces",
    description: "Modular structures that offer ready-to-use functionality wherever needed",
    image: "/images/services/relocatable.png",
    projectCount: "45+ Projects",
  },
];
