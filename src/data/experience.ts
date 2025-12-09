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
    role: "Senior AI/ML Engineer",
    company: "Stealth Health AI",
    timeframe: "2023 — Present",
    summary:
      "Leading ML platform work across detection, observability, and privacy-safe data pipelines for clinical deployments.",
    highlights: [
      "Productionized foundation-model fine-tuning with safety guardrails and eval coverage",
      "Cut model feedback latency from hours to minutes with streaming inference",
      "Partnered with clinicians to design reviewer workflows and dashboards",
    ],
    tech: ["PyTorch", "Next.js", "TypeScript", "Airflow", "PostgreSQL"],
  },
  {
    role: "Software Engineer, ML Platform",
    company: "Cloudscale",
    timeframe: "2021 — 2023",
    summary:
      "Built infra that balanced experimentation speed with reliability for product teams shipping ML features.",
    highlights: [
      "Shipped feature store with drift monitoring and alerting",
      "Introduced golden datasets + replay to prevent regressions",
      "Mentored engineers on production ML best practices",
    ],
    tech: ["Go", "Kubernetes", "Kafka", "gRPC", "React"],
  },
  {
    role: "ML Engineer",
    company: "Open Analytics Lab",
    timeframe: "2019 — 2021",
    summary:
      "Prototyped and delivered CV + NLP features for enterprise customers.",
    highlights: [
      "Delivered vision pipeline that improved defect detection by 18%",
      "Owned data labeling pipeline and vendor QA",
      "Collaborated with PMs to translate research into shipped features",
    ],
    tech: ["Python", "TensorFlow", "Docker", "Redis", "FastAPI"],
  },
];
