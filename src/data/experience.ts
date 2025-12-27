export type Experience = {
  role: string;
  company: string;
  timeframe: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI/ML & Computer Vision Researcher | Full-Stack Developer",
    company: "EMRC Lab",
    timeframe: "Nov 2025 — Present",
    summary:
      "Developing a full-stack application that details the lab, as well as a private portal for lab employees to book equipment",
    highlights: [
      "Built a full-stack internal platform (React, Node.js, Express, SQL/NoSQL) for equipment booking, tracking, and administration",
      "Developed features such as real-time availability, metadata storage, booking history, and tutorial video integration",
      "Created an admin dashboard to monitor equipment location, status, and user activity",
      "Conducting AI/ML research in computer vision and image processing; working with SLAM, ROS, and Gazebo for robotics and mobility modeling"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "ROS"],
  },
  {
    role: "Software Engineer",
    company: "Western Baja Racing",
    timeframe: "Sept 2025 — Present",
    summary:
      "Built infra that balanced experimentation speed with reliability for product teams shipping ML features.",
    highlights: [
      "Shipped feature store with drift monitoring and alerting",
      "Introduced golden datasets + replay to prevent regressions",
      "Mentored engineers on production ML best practices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "SQL"],
  },
  {
    role: "Software Engineer",
    company: "Western Formula Racing",
    timeframe: "Sept 2025 — Present",
    summary:
      "Prototyped and delivered CV + NLP features for enterprise customers.",
    highlights: [
      "Delivered vision pipeline that improved defect detection by 18%",
      "Owned data labeling pipeline and vendor QA",
      "Collaborated with PMs to translate research into shipped features",
    ],
    tech: ["C++", "Python", "MongoDB"],
  },
];
