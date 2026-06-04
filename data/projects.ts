export interface Project {
  slug: string;
  type: string;
  name: string;
  location: string;
  feature: string;
  size: string;
  configuration: string;
  timeline: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "urban-modular-residence",
    type: "Luxury Modular Home",
    name: "The Urban Modular Residence",
    location: "Model Town, Rohtak",
    feature: "Custom Home Office Integration",
    size: "3,200 sq ft",
    configuration: "4 BHK + Outdoor Lawn",
    timeline: "45 days",
    image: "/images/projects/urban-modular-residence.png",
  },
  {
    slug: "karma-kove-suites",
    type: "Luxury Modular Resort",
    name: "Karma Kove Suites / Cottages",
    location: "Gurugram, Haryana",
    feature: "Custom Wedding Venue Integration",
    size: "640 sq ft",
    configuration: "2BHK (Fully Furnished)",
    timeline: "28 days",
    image: "/images/projects/karma-kove-suites.png",
  },
  {
    slug: "vertex-business-hub",
    type: "Modular Office",
    name: "Vertex Business Hub",
    location: "Gurugram, Haryana",
    feature: "Custom Visitor Lounge & Meeting Suite",
    size: "3,500 sq ft",
    configuration: "5 Offices + Meeting Room",
    timeline: "25 days",
    image: "/images/projects/vertex-business-hub.png",
  },
  {
    slug: "serenity-green-farmhouse",
    type: "Luxury Modular Farmhouse",
    name: "Serenity Green Farmhouse",
    location: "Karnal, Haryana",
    feature: "Tailor-Made Garden & Courtyard Design",
    size: "4,000 sq ft",
    configuration: "4 BHK + Swimming Pool",
    timeline: "35 days",
    image: "/images/projects/serenity-green-farmhouse.png",
  },
  {
    slug: "urban-modular-residence-chandigarh",
    type: "Luxury Modular Home",
    name: "The Urban Modular Residence",
    location: "Chandigarh, India",
    feature: "Custom Home Office Integration",
    size: "2,400 sq ft",
    configuration: "3 BHK + Rooftop Lounge",
    timeline: "20 days",
    image: "/images/projects/urban-modular-residence-chandigarh.png",
  },
  {
    slug: "haven-luxury-resort",
    type: "Luxury Modular Resort",
    name: "The Haven Luxury Resort",
    location: "Gurugram, Haryana",
    feature: "Custom Wedding Venue Integration",
    size: "5,000 sq ft",
    configuration: "8 Guest Suites + Banquet",
    timeline: "28 days",
    image: "/images/projects/haven-luxury-resort.png",
  },
];
