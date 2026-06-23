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
      "Fully Furnished & Move-In Ready",
      "Custom Home Layouts & Finishes",
      "Premium Interiors With Built In Utilities",
    ],
  },
  {
    slug: "offices",
    title: "Offices",
    description: "Modern workspaces designed for growing businesses and professional environments",
    image: "/images/new/image30.png",
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
    image: "/images/new/image4.png",
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
    image: "/images/new/image27.png",
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
    image: "/images/new/image12.png",
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
    image: "/images/services/luxury-homes.png",
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
      { icon: "Sparkles", title: "Luxury Living Experience", description: "Premium spaces designed with high-end finishes and modern aesthetic interior" },
      { icon: "Sliders", title: "Design Flexibility", description: "Choose layouts, room configurations and finishes that match your lifestyle and preferences" },
      { icon: "LayoutGrid", title: "Smarter Use Of Space", description: "Thoughtfully planned spaces that feel open, comfortable and easy to live in every day" },
      { icon: "VolumeX", title: "Better Acoustic Comfort", description: "Modular construction helps reduce noise transfer, creating peaceful living spaces" },
      { icon: "MapPin", title: "Suitable For Remote Locations", description: "Streamlined construction processes help reduce delays and unnecessary expenses" },
    ],
    includesSectionTitle: "What's Included In Your Modular Home?",
    includesSectionSubtitle: "Everything You Need, Built In! Every THERMANEST modular home is delivered as a complete living solution with integrated systems, premium finishes and customizable options.",
    includesCtaLabel: "Build Your Dream Home",
    includesItems: [
      { title: "Complete Living Spaces", description: "Includes bedrooms, living room, kitchen and bathroom layouts across 1 BHK, 2 BHK, 3 BHK and custom configurations" },
      { title: "Fully Furnished & Move-In Ready Interiors", description: "Premium interior finishes, fixtures and move-in ready living spaces designed for immediate occupancy" },
      { title: "Integrated Utility Systems", description: "Built-in electrical, plumbing and sewage systems planned for smooth day-to-day functionality" },
    ],
    gallerySectionTitle: "Experience The Modular Home",
    gallerySectionSubtitle: "Step inside and discover how each space comes together to create a seamless and enjoyable living experience",
    gallery: [
      { image: "/images/services/luxury-homes/bedroom.png", label: "Bedroom" },
      { image: "/images/services/luxury-homes/outdoor-deck.png", label: "Outdoor Deck" },
      { image: "/images/services/luxury-homes/living-room.png", label: "Living Room" },
      { image: "/images/services/luxury-homes/kitchen-dining.png", label: "Kitchen & Dining" },
      { image: "/images/services/luxury-homes/bathroom.png", label: "Bathroom" },
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
    heroTitle: "Modern Modular Offices Built For Growing Businesses",
    heroSubtitle: "Professional workspaces designed for productivity, collaboration and growth — delivered in weeks, not months",
    statCount: "155+",
    statLabel: "Offices Built",
    benefitsSectionTitle: "Why Choose A Modular Office?",
    benefitsSectionSubtitle: "Discover how modular offices give your business a professional, efficient and flexible workspace",
    benefits: [
      { icon: "Zap", title: "Rapid Space Availability", description: "Have your fully functional office ready within weeks with our streamlined build process" },
      { icon: "Briefcase", title: "Professional Work Environment", description: "Designed for productivity with ergonomic layouts and premium office finishes" },
      { icon: "Sliders", title: "Custom Office Layouts", description: "Tailored floor plans for open desks, cabins, meeting rooms and collaborative zones" },
      { icon: "Wifi", title: "Technology Ready", description: "Pre-wired for high-speed internet, power outlets and integrated communication systems" },
      { icon: "Users", title: "Team & Meeting Spaces", description: "Dedicated meeting rooms, lounge areas and collaborative workspaces for your team" },
      { icon: "TrendingDown", title: "Cost-Effective Expansion", description: "Scale your office footprint without the high costs and delays of traditional construction" },
    ],
    includesSectionTitle: "What's Included In Your Modular Office?",
    includesSectionSubtitle: "Everything You Need, Ready To Work! Every THERMANEST office is delivered fully equipped with professional-grade systems and finishes for immediate occupancy.",
    includesCtaLabel: "Set Up Your Office Space",
    includesItems: [
      { title: "Workspaces & Meeting Rooms", description: "Open desk areas, individual cabins, conference rooms and collaborative breakout zones planned to your requirement" },
      { title: "Pantry & Washroom Facilities", description: "Fully equipped pantry areas and modern washrooms included as standard in every office build" },
      { title: "Integrated Utility Systems", description: "Built-in electrical, data cabling, air conditioning and plumbing for a plug-and-play office experience" },
    ],
    gallerySectionTitle: "Experience The Modular Office",
    gallerySectionSubtitle: "Step inside and explore how each workspace is thoughtfully designed for productivity and comfort",
    gallery: [
      { image: "/images/services/offices.png", label: "Workstation" },
      { image: "/images/projects/vertex-business-hub.png", label: "Meeting Room" },
      { image: "/images/services/offices.png", label: "Open Office" },
      { image: "/images/projects/vertex-business-hub.png", label: "Reception" },
      { image: "/images/services/offices.png", label: "Breakout Zone" },
    ],
  },

  "resorts": {
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
    heroTitle: "Luxury Modular Resorts That Redefine Hospitality",
    heroSubtitle: "Unforgettable guest experiences built with world-class finishes and delivered faster than traditional construction",
    statCount: "3+",
    statLabel: "Resorts Built",
    benefitsSectionTitle: "Why Choose Modular Resorts?",
    benefitsSectionSubtitle: "Discover how modular construction can help you launch or expand a luxury hospitality property faster",
    benefits: [
      { icon: "TrendingUp", title: "Faster Revenue Generation", description: "Launch your resort sooner and start earning from your hospitality investment in weeks" },
      { icon: "Star", title: "Luxury Guest Experience", description: "Premium finishes, custom interiors and hotel-grade amenities that wow every guest" },
      { icon: "Plus", title: "Scalable Accommodation", description: "Add more units as demand grows without disrupting existing operations or guests" },
      { icon: "Leaf", title: "Eco-Friendly Construction", description: "Sustainable building methods that minimize site disruption and reduce environmental impact" },
      { icon: "Home", title: "Fully Furnished Units", description: "Every guest suite delivered move-in ready with furniture, fixtures and fittings included" },
      { icon: "MapPin", title: "Ideal For Remote Destinations", description: "Perfect for hillside retreats, forest escapes and waterfront properties where logistics matter" },
    ],
    includesSectionTitle: "What's Included In Your Modular Resort?",
    includesSectionSubtitle: "Everything Your Guests Deserve, Delivered! Each THERMANEST resort unit is a complete hospitality solution with premium interiors and integrated systems.",
    includesCtaLabel: "Plan Your Resort Project",
    includesItems: [
      { title: "Guest Accommodation Units", description: "Luxury suites, standard rooms and deluxe villas available across 1 BHK, 2 BHK and custom configurations" },
      { title: "Dining & Common Area Spaces", description: "Restaurant, lounge and communal spaces designed for exceptional hospitality and guest comfort" },
      { title: "Integrated Utility & Safety Systems", description: "Built-in electrical, plumbing, air conditioning and fire safety systems for hassle-free operations" },
    ],
    gallerySectionTitle: "Experience The Modular Resort",
    gallerySectionSubtitle: "Explore how each space comes together to deliver an unforgettable guest experience",
    gallery: [
      { image: "/images/projects/karma-kove-suites.png", label: "Guest Suite" },
      { image: "/images/projects/haven-luxury-resort.png", label: "Lounge" },
      { image: "/images/services/resorts.png", label: "Resort Exterior" },
      { image: "/images/projects/karma-kove-suites.png", label: "Dining Area" },
      { image: "/images/projects/haven-luxury-resort.png", label: "Outdoor Deck" },
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
    heroTitle: "Luxury Modular Villas For Sophisticated Living",
    heroSubtitle: "Spacious, beautifully designed modular villas that blend luxury finishes with the efficiency of modern construction",
    statCount: "22+",
    statLabel: "Villas Built",
    benefitsSectionTitle: "Why Choose A Modular Villa?",
    benefitsSectionSubtitle: "Discover the advantages of modular villas for those seeking luxury living with a faster, smarter approach",
    benefits: [
      { icon: "Clock", title: "Faster Move-In Timeline", description: "Enjoy your luxury villa sooner with construction timelines significantly shorter than traditional builds" },
      { icon: "Sparkles", title: "Premium Living Standards", description: "Hotel-grade finishes, designer interiors and high-quality materials in every villa space" },
      { icon: "Sliders", title: "Fully Customizable Design", description: "Choose your layout, number of bedrooms, exterior style and interior finishes to match your vision" },
      { icon: "LayoutGrid", title: "Spacious Living Areas", description: "Generous floor plans with open-concept living, dining and outdoor spaces designed for comfort" },
      { icon: "Shield", title: "Engineered For Durability", description: "Dubai-engineered structural standards ensure every villa is built to withstand decades of use" },
      { icon: "MapPin", title: "Build Anywhere", description: "Perfect for farmland, hill stations and urban plots where conventional construction is difficult" },
    ],
    includesSectionTitle: "What's Included In Your Modular Villa?",
    includesSectionSubtitle: "Everything You Need To Live Beautifully! Every THERMANEST villa comes fully equipped with premium systems, luxury finishes and move-in ready interiors.",
    includesCtaLabel: "Design Your Modular Villa",
    includesItems: [
      { title: "Spacious Living Configuration", description: "2 BHK, 3 BHK and custom layouts with bedrooms, living areas, dining, kitchen and outdoor spaces" },
      { title: "Luxury Interiors & Furnishing", description: "Designer furniture, premium flooring, high-end fixtures and finishes delivered move-in ready" },
      { title: "Complete Utility Integration", description: "Electrical, plumbing, air conditioning and solar-ready infrastructure built into every villa" },
    ],
    gallerySectionTitle: "Experience The Modular Villa",
    gallerySectionSubtitle: "Step inside and discover how each space is crafted for luxury, comfort and sophisticated living",
    gallery: [
      { image: "/images/projects/urban-modular-residence.png", label: "Master Suite" },
      { image: "/images/projects/urban-modular-residence-chandigarh.png", label: "Outdoor Terrace" },
      { image: "/images/services/villas.png", label: "Villa Exterior" },
      { image: "/images/projects/urban-modular-residence.png", label: "Living Room" },
      { image: "/images/projects/urban-modular-residence-chandigarh.png", label: "Kitchen" },
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
    heroTitle: "Modular Farmhouses Built For Nature And Comfort",
    heroSubtitle: "Peaceful retreats designed to blend with the landscape, offering privacy, warmth and a connection to nature",
    statCount: "127+",
    statLabel: "Farmhouses Built",
    benefitsSectionTitle: "Why Choose A Modular Farmhouse?",
    benefitsSectionSubtitle: "Discover how modular farmhouses make it easier to build your dream countryside retreat",
    benefits: [
      { icon: "Leaf", title: "Nature-Integrated Design", description: "Designed to complement the natural surroundings with earthy finishes and organic aesthetics" },
      { icon: "Clock", title: "Quick Construction", description: "Your farmhouse retreat is ready in weeks, letting you enjoy the countryside sooner" },
      { icon: "Sliders", title: "Flexible Layouts", description: "1 BHK, 2 BHK and custom configurations to suit your land size and lifestyle needs" },
      { icon: "Sun", title: "Outdoor Leisure Spaces", description: "Verandas, sit-outs and garden decks designed for relaxation and outdoor living" },
      { icon: "Shield", title: "Weather-Resistant Build", description: "Engineered to withstand diverse climates from hot plains to cold hill regions" },
      { icon: "MapPin", title: "Ideal For Rural Plots", description: "Perfect for agricultural land, hill properties and scenic countryside locations across North India" },
    ],
    includesSectionTitle: "What's Included In Your Modular Farmhouse?",
    includesSectionSubtitle: "Everything For Your Country Retreat! Each THERMANEST farmhouse is delivered fully equipped for comfortable countryside living.",
    includesCtaLabel: "Build Your Farmhouse Retreat",
    includesItems: [
      { title: "Complete Home Configuration", description: "1 BHK, 2 BHK and custom layouts with bedrooms, living room, kitchen and bathroom included" },
      { title: "Outdoor Sit-Outs & Leisure Areas", description: "Covered verandas, garden decks and outdoor sit-out spaces designed for countryside relaxation" },
      { title: "Ready-To-Use Utility Systems", description: "Electrical, plumbing, rainwater harvesting and solar provisions for off-grid or on-grid living" },
    ],
    gallerySectionTitle: "Experience The Modular Farmhouse",
    gallerySectionSubtitle: "Explore how each space is thoughtfully designed to bring the best of nature and comfort together",
    gallery: [
      { image: "/images/projects/serenity-green-farmhouse.png", label: "Bedroom" },
      { image: "/images/services/farmhouses.png", label: "Outdoor Sit-Out" },
      { image: "/images/projects/serenity-green-farmhouse.png", label: "Farmhouse Exterior" },
      { image: "/images/services/farmhouses.png", label: "Living Room" },
      { image: "/images/projects/serenity-green-farmhouse.png", label: "Kitchen" },
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
