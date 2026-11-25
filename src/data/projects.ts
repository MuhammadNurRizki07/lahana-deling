export interface ShowcaseItem {
  id: string;
  title: string;
  category: "Work Experience" | "Academic Projects" | "Food & Nutrition" | "Learning Activities";
  description: string;
  year: string;
  image: string;
  tag: string;
}

export const projectsData: ShowcaseItem[] = [
  {
    id: "work-klk",
    title: "Food Service & Dining Hall Operations",
    category: "Work Experience",
    description:
      "Operational food serving, dining hall hygiene maintenance, and direct customer communication at Kantin PT. KLK Dumai.",
    year: "2022 – 2023",
    image: "/images/projects/food-service.jpg",
    tag: "Work Experience",
  },
  {
    id: "work-syauqi",
    title: "Bakery & Pastry Production Line",
    category: "Work Experience",
    description:
      "Hands-on baking preparation, raw ingredient quality inspection, and food packaging workflow at Rumah Kue Syauqi Dumai.",
    year: "2021 – 2022",
    image: "/images/projects/food-production.jpg",
    tag: "Work Experience",
  },
  {
    id: "acad-food-quality",
    title: "Food Safety & Quality Assessment Lab",
    category: "Academic Projects",
    description:
      "Laboratory coursework analyzing food sanitation parameters, cross-contamination prevention, and hygiene controls in food handling.",
    year: "2023 – 2024",
    image: "/images/projects/food-lab.jpg",
    tag: "Academic Coursework",
  },
  {
    id: "acad-nutrition-principles",
    title: "Nutritional Science & Meal Planning Study",
    category: "Food & Nutrition",
    description:
      "Comprehensive academic study on macronutrient balancing, portion control, and dietary guidelines for healthy lifestyle maintenance.",
    year: "2023 – 2024",
    image: "/images/projects/nutrition-study.jpg",
    tag: "Nutrition Principles",
  },
  {
    id: "learning-sanitation",
    title: "Workplace Sanitation & Hygiene Practices",
    category: "Learning Activities",
    description:
      "Practical workshops on standard operating procedures for kitchen hygiene, equipment sterilization, and food storage temperature.",
    year: "2024",
    image: "/images/projects/sanitation-workshop.jpg",
    tag: "Skill Development",
  },
  {
    id: "acad-community-health",
    title: "Public Health Nutrition Exploration",
    category: "Learning Activities",
    description:
      "Field observation and learning exercises exploring community eating habits, nutritional awareness, and food choices.",
    year: "2024",
    image: "/images/projects/community-nutrition.jpg",
    tag: "Field Study",
  },
];
