export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiencesData: WorkExperience[] = [
  {
    id: "klk-dumai",
    role: "Waitress",
    company: "Kantin PT. KLK Dumai",
    location: "Dumai, Riau",
    period: "2022 – 2023",
    description:
      "Provided prompt, attentive food service to employees and staff, managed dining hall hygiene, and maintained accurate meal order distribution.",
    highlights: [
      "Customer hospitality and food serving",
      "Dining hall sanitation and cleanliness",
      "Order accuracy and fast-paced coordination",
    ],
  },
  {
    id: "syauqi-dumai",
    role: "Team Produksi",
    company: "Rumah Kue Syauqi Dumai",
    location: "Dumai, Riau",
    period: "2021 – 2022",
    description:
      "Participated actively in bakery and pastry preparation, ingredient measurement, baking workflow, and product packaging according to hygiene standards.",
    highlights: [
      "Bakery & food production processes",
      "Safe ingredient handling & measurement",
      "Product packaging and shelf readiness",
    ],
  },
];
