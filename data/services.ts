export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  projectCount: string;
  features: [string, string, string];
}

export const services: Service[] = [
  {
    slug: "luxury-homes",
    title: "Luxury Homes",
    description: "Premium modular homes with hotel-like interiors and world-class finishes",
    image: "/images/services/luxury-homes.png",
    projectCount: "11+ Projects",
    features: [
      "Fully Furnished & Move-In Ready",
      "Custom Home Layouts & Finishes",
      "Premium Interiors With Built In Utilities",
    ],
  },
  {
    slug: "offices",
    title: "Offices",
    description: "Modern workspaces designed for growing businesses and professional environments",
    image: "/images/services/offices.png",
    projectCount: "155+ Projects",
    features: [
      "Workspaces & Meeting Rooms",
      "Pantry & Washrooms Included",
      "Fully Furnished Office Setup",
    ],
  },
  {
    slug: "resorts",
    title: "Resorts",
    description: "Luxury resort units that deliver exceptional guest experiences and memorable stay",
    image: "/images/services/resorts.png",
    projectCount: "3+ Projects",
    features: [
      "Custom Guest Accommodation Units",
      "Dining & Lounge Spaces",
      "Furnished Hospitality Interiors",
    ],
  },
  {
    slug: "villas",
    title: "Villas",
    description: "Luxury modular villas for spacious living and a sophisticated lifestyle experience",
    image: "/images/services/villas.png",
    projectCount: "22+ Projects",
    features: [
      "Fully Furnished & Move-In Ready",
      "2 BHK, 3 BHK & Custom Layouts",
      "Premium Interiors With Built In Utilities",
    ],
  },
  {
    slug: "farmhouses",
    title: "Farmhouses",
    description: "Nature inspired retreats designed for privacy, comfort and peaceful living",
    image: "/images/services/farmhouses.png",
    projectCount: "127+ Projects",
    features: [
      "1 BHK, 2 BHK & Custom Homes",
      "Outdoor Sit-Outs & Leisure Spaces",
      "Ready-To-Use Farmhouse Interiors",
    ],
  },
  {
    slug: "relocatable-spaces",
    title: "Relocatable Spaces",
    description: "Modular structures that offer ready-to-use functionality wherever needed",
    image: "/images/services/relocatable.png",
    projectCount: "45+ Projects",
    features: [
      "Portable Cabins & Site Offices",
      "Pantry, Washroom & Storage Options",
      "Easy To Transport & Quick To Install",
    ],
  },
];
