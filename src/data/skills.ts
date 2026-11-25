export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "food-production",
    number: "01",
    title: "FOOD PRODUCTION & HANDLING",
    description:
      "Experience in food production processes, food preparation, handling, and packaging with strict attention to quality standards.",
    iconName: "UtensilsCrossed",
    tags: ["Food Preparation", "Packaging", "Quality Control", "Standard Recipe"],
  },
  {
    id: "food-hygiene",
    number: "02",
    title: "FOOD HYGIENE & SANITATION",
    description:
      "Understanding the importance of maintaining cleanliness and sanitation in food preparation and production areas to ensure food safety.",
    iconName: "ShieldCheck",
    tags: ["Sanitation", "Hygiene Standards", "Cross-contamination Prevention", "Food Safety"],
  },
  {
    id: "communication-service",
    number: "03",
    title: "COMMUNICATION & CUSTOMER SERVICE",
    description:
      "Able to communicate effectively, understand customer needs, and provide polite, attentive service in fast-paced environments.",
    iconName: "MessageSquareHeart",
    tags: ["Customer Hospitality", "Clear Communication", "Order Accuracy", "Problem Solving"],
  },
  {
    id: "teamwork-collaboration",
    number: "04",
    title: "TEAMWORK & COLLABORATION",
    description:
      "Able to collaborate with team members, maintain high productivity, support kitchen workflows, and contribute to shared team goals.",
    iconName: "Users",
    tags: ["Collaborative Workflow", "Punctuality", "Team Coordination", "Adaptability"],
  },
];
