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
    title: "Homes",
    description: "Premium modular homes with hotel-like interiors and world-class finishes",
    image: "/images/new/image2.png",
    projectCount: "11+ Projects",
    features: [
      "Flexible Living Layouts",
      "Fully Finished Interiors",
      "Integrated Utility Systems",
    ],
  },
  {
    slug: "offices",
    title: "Offices",
    description: "Modern workspaces designed for growing businesses and professional environments",
    image: "/images/new/image30.png",
    projectCount: "155+ Projects",
    features: [
      "Complete Office Spaces",
      "Integrated Utility Systems",
      "Smart Office Technology",
    ],
  },
  {
    slug: "resorts",
    title: "Resorts",
    description: "Luxury resort units that deliver exceptional guest experiences and memorable stay",
    image: "/images/new/image4.png",
    projectCount: "3+ Projects",
    features: [
      "Flexible Guest Accommodations",
      "Hospitality-Ready Interiors",
      "Customizable Resort Facilities",
    ],
  },
  {
    slug: "villas",
    title: "Villas",
    description: "Luxury modular villas for spacious living and a sophisticated lifestyle experience",
    image: "/images/new/image27.png",
    projectCount: "22+ Projects",
    features: [
      "Expansive Living Spaces",
      "Luxury-Finished Interiors",
      "Personalized Lifestyle Features",
    ],
  },
  {
    slug: "farmhouses",
    title: "Farmhouses",
    description: "Nature inspired retreats designed for privacy, comfort and peaceful living",
    image: "/images/new/image12.png",
    projectCount: "127+ Projects",
    features: [
      "Nature-Inspired Living Spaces",
      "Fully Finished Interiors",
      "Custom Outdoor Experiences",
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

// ─── Service Detail Types ────────────────────────────────────────────────────

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceIncludeItem {
  title: string;
  description: string;
}

export interface ServiceGalleryItem {
  image: string;
  label: string;
}

export interface ServiceDetail extends Service {
  heroTitle: string;
  heroSubtitle: string;
  statCount: string;
  statLabel: string;
  benefitsSectionTitle: string;
  benefitsSectionSubtitle: string;
  benefits: ServiceBenefit[];
  includesSectionTitle: string;
  includesSectionSubtitle: string;
  includesSectionIcon: string;
  includesCtaLabel: string;
  includesItems: ServiceIncludeItem[];
  gallerySectionTitle: string;
  gallerySectionSubtitle: string;
  // 5 items ordered: left-top, left-bottom, center-tall, right-top, right-bottom
  gallery: ServiceGalleryItem[];
}

// ─── Service Detail Data ─────────────────────────────────────────────────────

export const serviceDetails: Record<string, ServiceDetail> = {
  "luxury-homes": {
    slug: "luxury-homes",
    title: "Luxury Homes",
    description: "Premium modular homes with hotel-like interiors and world-class finishes",
    image: "/images/new/image5.png",
    projectCount: "11+ Projects",
    features: [
      "Fully Furnished & Move-In Ready",
      "Custom Home Layouts & Finishes",
      "Premium Interiors With Built In Utilities",
    ],
    heroTitle: "Luxury Modular Homes For A New Way Of Living",
    heroSubtitle: "Created for those who appreciate quality living, timeless design and spaces that feel truly exceptional",
    statCount: "11+",
    statLabel: "Homes Built",
    benefitsSectionTitle: "Why Choose Modular Homes?",
    benefitsSectionSubtitle: "Discover the advantages that make modular homes a smart and practical choice for modern homeowners",
    benefits: [
      { icon: "Clock", title: "Faster Home Ownership", description: "Move into your home sooner with significantly reduced construction timelines" },
      { icon: "Sparkles", title: "Luxury Living Experience", description: "Enjoy thoughtfully designed interiors, premium finishes, and modern comforts that enhance everyday living." },
      { icon: "Sliders", title: "Design Flexibility", description: "Choose from a range of layouts and personalize your home with features, finishes, and spaces that suit your lifestyle." },
      { icon: "LayoutGrid", title: "Smarter Use Of Space", description: "Efficient floor plans maximize functionality, natural light, and storage, ensuring every square foot is utilized effectively." },
      { icon: "VolumeX", title: "Enhanced Privacy & Comfort", description: "Quality insulation and carefully planned layouts help create a quieter, more comfortable living environment for you and your family." },
      { icon: "MapPin", title: "Suitable For Remote Locations", description: "Perfect for remote, countryside, and hard-to-reach locations, making homeownership possible across a wide range of settings." },
    ],
    includesSectionTitle: "What's Included In Your Modular Home?",
    includesSectionSubtitle: "Everything You Need, Built In! Every THERMANEST modular home is delivered as a complete living solution with integrated systems, premium finishes and customizable options.",
    includesSectionIcon: "Home",
    includesCtaLabel: "Build Your Dream Home",
    includesItems: [
      { title: "Complete Living Spaces", description: "Choose from studio, 1-bedroom, 2-bedroom, 3-bedroom and custom layouts with options to add front porch, outdoor seating area and parking space" },
      { title: "Fully Finished Interiors", description: "Move into thoughtfully designed interiors, premium materials, and carefully selected finishes throughout the home for a refined living experience" },
      { title: "Integrated Utility Systems", description: "Built-in electrical, lighting, plumbing, sewage and essential utility systems designed for a seamless living experience" },
    ],
    gallerySectionTitle: "Experience The Modular Home",
    gallerySectionSubtitle: "Step inside and discover how each space comes together to create a seamless and enjoyable living experience",
    gallery: [
      { image: "/images/new/image24.png", label: "Bedroom" },
      { image: "/images/new/image14.png", label: "Outdoor Deck" },
      { image: "/images/new/image6.png", label: "Living Room" },
      { image: "/images/new/image23.png", label: "Kitchen & Dining" },
      { image: "/images/new/image25.png", label: "Bathroom" },
    ],
  },

  "offices": {
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
    heroTitle: "Modular Offices Designed For Smarter Business Growth",
    heroSubtitle: "Designed to bring together smart planning, professional aesthetics and spaces that support business success.",
    statCount: "155+",
    statLabel: "Offices Built",
    benefitsSectionTitle: "Why Choose Modular Offices?",
    benefitsSectionSubtitle: "Discover the advantages that make modular offices an ideal solution for modern businesses and growing organizations.",
    benefits: [
      { icon: "Zap", title: "Faster Operational Setup", description: "Get your office up and running in a fraction of the time compared to traditional construction, helping your business start sooner" },
      { icon: "Sliders", title: "Flexible & Scalable Design", description: "Office spaces can be expanded, modified or reconfigured as your team and business requirements evolve." },
      { icon: "Briefcase", title: "Professional Working Environment", description: "Thoughtfully designed spaces that support productivity, collaboration and everyday business operations." },
      { icon: "LayoutGrid", title: "Multi-Storey Expansion", description: "Maximize available land with multi-floor office solutions designed to support future growth." },
      { icon: "Star", title: "Consistent Brand Experience", description: "Maintain the same office design, finishes and branding across multiple locations for a professional and uniform presence." },
      { icon: "RefreshCcw", title: "Resale & Re-Leasing Value", description: "Modular office spaces retain strong value and can be easily resold or re-leased as relocatable assets if business needs change." },
    ],
    includesSectionTitle: "What's Included in your modular office?",
    includesSectionSubtitle: "Every THERMANEST modular office is thoughtfully designed to combine functionality, comfort and flexibility, creating workspaces that support modern business operations.",
    includesSectionIcon: "Briefcase",
    includesCtaLabel: "Set Up Your Office Space",
    includesItems: [
      { title: "Complete Office Space", description: "From single-cabin offices to larger workstation-based layouts, spaces can be configured to include reception areas, client lounge, meeting rooms, pantry facilities, washrooms and employee amenities." },
      { title: "Integrated Utility Systems", description: "Built-in electrical, lighting, plumbing and essential utility systems designed to support smooth day-to-day business operations." },
      { title: "Smart Office Technology", description: "Built to support modern technology, seamless connectivity and efficient business operations" },
    ],
    gallerySectionTitle: "Experience The Modular Office",
    gallerySectionSubtitle: "Step inside a workspace designed for the way modern teams work.",
    gallery: [
      { image: "/images/new/image26.png", label: "OFFICE EXTERIOR" },
      { image: "/images/new/image16.png", label: "RECEPTION" },
      { image: "/images/new/image19.png", label: "OPEN WORKSPACE" },
      { image: "/images/new/image7.png", label: "PANTRY & BREAKOUT" },
      { image: "/images/new/image13.png", label: "CLIENT LOUNGE" },
    ],
  },

  "resorts": {
    slug: "resorts",
    title: "Resorts",
    description: "Luxury resort units that deliver exceptional guest experiences and memorable stay",
    image: "/images/new/image1.png",
    projectCount: "3+ Projects",
    features: [
      "Custom Guest Accommodation Units",
      "Dining & Lounge Spaces",
      "Furnished Hospitality Interiors",
    ],
    heroTitle: "Modular Resorts Designed For Memorable Escapes",
    heroSubtitle: "Designed to combine comfort, natural surroundings, and thoughtfully crafted spaces that create exceptional guest experiences.",
    statCount: "3+",
    statLabel: "Resorts Built",
    benefitsSectionTitle: "Why Choose Modular Resorts?",
    benefitsSectionSubtitle: "Discover why modular resorts are becoming a preferred choice for faster, more efficient hospitality development.",
    benefits: [
      { icon: "Star", title: "Memorable Guest Experiences", description: "Premium resort spaces designed to provide comfort, relaxation and memorable experiences that encourage guests to return." },
      { icon: "Plus", title: "Guest-Friendly Expansion", description: "Add new villas and accommodation units with minimal on-site construction, helping maintain guest comfort, reviews and daily resort operations." },
      { icon: "TrendingUp", title: "Scalable Growth", description: "Launch with fewer units, start generating revenue sooner and expand gradually as demand grows, reducing investment risk." },
      { icon: "MapPin", title: "Unique Destinations", description: "Create premium resort spaces on hillsides, beaches, forests and remote destinations where traditional construction may be difficult or costly." },
      { icon: "VolumeX", title: "Greater Privacy", description: "Independent modular units help reduce noise transfer between rooms, creating a quieter and more relaxing stay experience." },
      { icon: "RefreshCcw", title: "Asset Recovery", description: "Unlike conventional structures, modular resort units offer greater investment flexibility, helping preserve long-term asset value as business needs evolve." },
    ],
    includesSectionTitle: "What's Included in your modular resort?",
    includesSectionSubtitle: "Every THERMANEST modular resort is thoughtfully designed to combine guest comfort, operational efficiency and hospitality flexibility, creating exceptional experiences for guests and resort owners alike.",
    includesSectionIcon: "Star",
    includesCtaLabel: "Plan Your Resort Project",
    includesItems: [
      { title: "Resort Configurations & Facilities", description: "Available as cottages, villas, suites, with optional additions such as restaurants, wellness spaces, reception areas, swimming pool, bonfire area, kids play area and staff accommodation." },
      { title: "Fully Furnished Hospitality Interiors", description: "Fully furnished guest spaces with thoughtfully designed interiors, premium materials and carefully selected finishes throughout the resort." },
      { title: "Integrated Utility Systems", description: "Pre-installed electrical, plumbing, water, drainage, parking and internet connectivity designed for seamless resort operations." },
    ],
    gallerySectionTitle: "Experience The Modular Resort",
    gallerySectionSubtitle: "Discover the thoughtfully planned spaces that come together to bring your resort vision to life.",
    gallery: [
      { image: "/images/new/image11.png", label: "DELUXE  BEDROOM" },
      { image: "/images/new/image18.png", label: "SWIMMING POOL AREA" },
      { image: "/images/new/image15.png", label: "RESTAURANT" },
      { image: "/images/new/image29.png", label: "Private Villa Deck" },
      { image: "/images/new/image28.png", label: "WELLNESS AREA" },
    ],
  },

  "villas": {
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
    heroTitle: "Modular Villas Designed For Luxury Living",
    heroSubtitle: "Designed for those who value luxury living, spacious homes and comfort that goes beyond the ordinary.",
    statCount: "22+",
    statLabel: "Villas Built",
    benefitsSectionTitle: "Why Choose Modular Villas?",
    benefitsSectionSubtitle: "Discover what makes modular villas an increasingly popular choice for modern living and personalized homeownership.",
    benefits: [
      { icon: "Sparkles", title: "Luxury Resort-Style Living", description: "Experience premium living with elegant interiors, refined finishes and beautifully designed spaces for relaxation and entertainment." },
      { icon: "Sliders", title: "Bespoke Villa Design", description: "Custom-designed villas crafted around your lifestyle, with flexible layouts and personalized features." },
      { icon: "LayoutGrid", title: "Spacious & Comfortable Layouts", description: "Larger living areas, multiple bedrooms and dedicated leisure spaces provide comfort for families and guests alike." },
      { icon: "VolumeX", title: "Enhanced Privacy & Comfort", description: "Thoughtfully planned layouts and quality insulation help create a quieter and more relaxing living environment." },
      { icon: "MapPin", title: "Ideal For Premium Locations", description: "Perfect for hill stations, waterfront properties and other luxury residential destinations." },
      { icon: "TrendingUp", title: "Smart Investment Potential", description: "Ideal for personal use, holiday homes or premium rental properties with the advantage of faster project completion." },
    ],
    includesSectionTitle: "What's Included in your modular villa?",
    includesSectionSubtitle: "Every THERMANEST modular villa is delivered as a complete living environment, thoughtfully planned to suit a variety of lifestyles and requirements.",
    includesSectionIcon: "Sparkles",
    includesCtaLabel: "Design Your Modular Villa",
    includesItems: [
      { title: "Complete Living Spaces", description: "Includes bedrooms, kitchen, family lounge, dining area, bathrooms, and balconies across 2 BHK, 3 BHK, and larger villas, with optional additions such as outdoor spaces, swimming pool, wellness areas, home office, barbecue area, entertainment room and parking." },
      { title: "Fully Finished Interiors", description: "Move into a beautifully furnished villa with thoughtfully designed interiors, premium materials and carefully selected finishes throughout the home." },
      { title: "Integrated Utility Systems", description: "Built-in electrical, lighting, plumbing, sewage and essential utility systems designed for seamless day-to-day living from day one." },
    ],
    gallerySectionTitle: "Experience The Modular Villa",
    gallerySectionSubtitle: "Discover the thoughtfully designed spaces that come together to create a seamless villa living experience.",
    gallery: [
      { image: "/images/new/image9.png", label: "KITCHEN & DINING" },
      { image: "/images/new/image3.png", label: "SWIMMING POOL AREA" },
      { image: "/images/new/image22.png", label: "LIVING ROOM" },
      { image: "/images/new/image17.png", label: "BEDROOM" },
      { image: "/images/new/image21.png", label: "OUTDOOR SITTING SPACE" },
    ],
  },

  "farmhouses": {
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
    heroTitle: "Farmhouses Designed For Peaceful Luxury Living",
    heroSubtitle: "Created for those who seek open landscapes, spacious living, and the comfort of a refined countryside lifestyle.",
    statCount: "127+",
    statLabel: "Farmhouses Built",
    benefitsSectionTitle: "Why Choose Modular Farmhouses?",
    benefitsSectionSubtitle: "Discover a modern approach to farmhouse living, thoughtfully designed for today's lifestyle.",
    benefits: [
      { icon: "Sun", title: "Perfect Weekend Getaway", description: "Escape the city and enjoy a peaceful retreat surrounded by nature. Perfect for family gatherings, relaxation, and memorable weekends." },
      { icon: "Leaf", title: "Seamless Connection With Nature", description: "Large windows, open layouts, and outdoor decks maximize natural light, ventilation, and scenic views." },
      { icon: "Sliders", title: "Ideal For Multiple Uses", description: "Perfect as a farmhouse, vacation home, agricultural retreat, or rental property. Flexible spaces adapt to your lifestyle needs." },
      { icon: "Shield", title: "Dust & Bug Isolation", description: "Sealed prefab panels help keep dust, insects, and outdoor pollutants out, keeping interiors cleaner and more comfortable even when left unoccupied for extended periods." },
      { icon: "MapPin", title: "Suitable For Remote Locations", description: "Perfect for remote, countryside, and hard-to-reach locations where traditional construction can be more challenging." },
      { icon: "Plus", title: "Easy Future Expansion", description: "Add extra rooms, decks, or living spaces as your needs evolve. Modular design makes future expansion simple and efficient." },
    ],
    includesSectionTitle: "What's Included in your modular farmhouse?",
    includesSectionSubtitle: "Every THERMANEST modular farmhouse is delivered as a complete living environment, thoughtfully planned to suit a variety of lifestyles and requirements.",
    includesSectionIcon: "Leaf",
    includesCtaLabel: "Build Your Farmhouse Retreat",
    includesItems: [
      { title: "Complete Living Spaces", description: "Choose from 1BHK, 2BHK, 3BHK, and custom layouts, with options to add decks, verandas, swimming pools, bonfire areas and landscaped gardens" },
      { title: "Fully Finished Interiors", description: "Move into thoughtfully designed interiors, premium materials, and carefully selected finishes throughout the home for a refined living experience" },
      { title: "Integrated Utility Systems", description: "Built-in electrical, lighting, plumbing, sewage and essential utility systems designed for a seamless living experience." },
    ],
    gallerySectionTitle: "Experience The Modular Farmhouse",
    gallerySectionSubtitle: "Explore the spaces that come together to create a comfortable and memorable countryside retreat.",
    gallery: [
      { image: "/images/new/image17.png", label: "MASTER SUITE" },
      { image: "/images/new/image31.png", label: "KITCHEN & DINING" },
      { image: "/images/new/image35.png", label: "BONFIRE AREA" },
      { image: "/images/new/image32.png", label: "FAMILY LOUNGE" },
      { image: "/images/new/image36.png", label: "VERANDA" },
    ],
  },

  "relocatable-spaces": {
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
    heroTitle: "Relocatable Modular Spaces Ready Anywhere You Need",
    heroSubtitle: "Functional, portable modular structures that can be deployed, used and relocated as your needs change",
    statCount: "45+",
    statLabel: "Spaces Deployed",
    benefitsSectionTitle: "Why Choose Relocatable Spaces?",
    benefitsSectionSubtitle: "Discover how relocatable modular structures offer unmatched flexibility for businesses and projects",
    benefits: [
      { icon: "Truck", title: "Fully Portable", description: "Structures are built to be transported and reinstalled at new locations with minimal effort" },
      { icon: "Zap", title: "Rapid Deployment", description: "Set up a fully functional space on-site within days, ready to use immediately on arrival" },
      { icon: "Sliders", title: "Configurable For Any Use", description: "Site offices, guard rooms, portable homes, washroom units — customized to your requirement" },
      { icon: "RefreshCcw", title: "Reusable Asset", description: "Unlike permanent construction, your investment can be redeployed to new sites as projects evolve" },
      { icon: "Shield", title: "Durable & Weatherproof", description: "Built to withstand harsh site conditions, extreme temperatures and heavy monsoon rain" },
      { icon: "TrendingDown", title: "Lower Total Cost", description: "No foundation work, no demolition costs — just deploy, use and relocate as needed" },
    ],
    includesSectionTitle: "What's Included In Your Relocatable Space?",
    includesSectionSubtitle: "Everything You Need On-Site! Each THERMANEST relocatable unit is delivered ready to use with all fittings and utilities included.",
    includesSectionIcon: "Truck",
    includesCtaLabel: "Deploy Your Modular Space",
    includesItems: [
      { title: "Functional Space Configuration", description: "Office cabins, accommodation units, security posts, washroom blocks and storage spaces available" },
      { title: "Pantry & Washroom Facilities", description: "Self-contained units with pantry areas, toilet blocks and water storage provisions" },
      { title: "Utility-Ready Infrastructure", description: "Pre-wired for power, fitted with lighting, ventilation and connection points for quick site hookup" },
    ],
    gallerySectionTitle: "Experience The Relocatable Space",
    gallerySectionSubtitle: "See how each unit is purpose-built for functionality, comfort and easy deployment anywhere",
    gallery: [
      { image: "/images/services/relocatable.png", label: "Site Office" },
      { image: "/images/projects/vertex-business-hub.png", label: "Interior" },
      { image: "/images/services/relocatable.png", label: "Exterior View" },
      { image: "/images/projects/vertex-business-hub.png", label: "Workstation" },
      { image: "/images/services/relocatable.png", label: "Washroom Block" },
    ],
  },
};
