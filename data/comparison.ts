export interface ComparisonRow {
  feature: string;
  traditional: string;
  thermanest: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Delivery Timeline",
    traditional: "6-12 months",
    thermanest: "20-40 days",
  },
  {
    feature: "Furnishing & Utilities",
    traditional: "Separate furnishing & utility setup",
    thermanest: "Fully furnished with built-in utilities",
  },
  {
    feature: "Interior Quality",
    traditional: "Standard requirement-based finishes",
    thermanest: "Luxury interiors with 7-star finishes",
  },
  {
    feature: "Cost Efficiency",
    traditional: "Higher labor, material & on-site costs",
    thermanest: "Lower costs with precision manufacturing",
  },
  {
    feature: "Energy Consumption",
    traditional: "Higher electricity consumption",
    thermanest: "Uses up to 15% of conventional energy usage",
  },
  {
    feature: "Climate Control",
    traditional: "Standard insulation performance",
    thermanest: "Cool in summer, warm in winter technology",
  },
  {
    feature: "Structural Safety",
    traditional: "Varies by build quality & methods",
    thermanest: "Weather, earthquake & calamity resistant",
  },
  {
    feature: "Relocation",
    traditional: "Permanent fixed structures",
    thermanest: "Portable, relocatable & expandable solutions",
  },
  {
    feature: "Permissions",
    traditional: "Multiple vendors & complex coordination",
    thermanest: "No permissions required",
  },
  {
    feature: "Customization",
    traditional: "Limited design flexibility",
    thermanest: "Fully customizable solutions",
  },
  {
    feature: "Site Disruption",
    traditional: "Long on-site construction & disruption",
    thermanest: "Fast installation with minimal site disturbance",
  },
];
