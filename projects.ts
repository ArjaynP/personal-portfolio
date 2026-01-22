export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  challenges: string[];
  contributions: string[];
  links: ProjectLink[];
  featured: boolean;
  problem: string;
  overview: string;
  architecture: string;
  screenshots: string[];
  learnings: string[];
  improvements: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "govai",
    title: "Gov AI",
    tagline: "Decentralized Polling System using Blockchain Technology Solana",
    description:
      "Developed a decentralized polling system leveraging Solana blockchain to ensure secure, transparent, and tamper-proof elections.",
    tech: ["Next.js", "TypeScript", "Python", "WARP", "Gemini API", "Solana"],
    challenges: [
      "Integrating Solana blockchain to our project architecture",
      "Structuring our logic for security using the wallet signatures",
      "Created a reproducible evaluation harness with shadow deployments",
    ],
    contributions: [
      "Constructed the polling logic using Python and Solana's framework to our frontend",
      "Designed a user-friendly interface with Next.js for seamless interaction with the blockchain",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/satvikgarimella/GovAI" },
      { label: "Live Demo", href: "https://www.youtube.com/watch?v=DJBun_o0wPo&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MzY4NDIsMjg2NjY" },
      { label: "Devpost", href: "https://devpost.com/software/gov-ai-decentralized-polling-system" },
      { label: "YouTube", href: "https://youtube.com/watch?v=neuratrail" },
    ],
    featured: true,
    problem:
      "Governments and organizations face challenges in conducting secure and transparent elections, often plagued by fraud and lack of trust.",
    overview:
      "Gov AI leverages Solana blockchain to create a decentralized polling system that ensures election integrity through immutability and transparency.",
    architecture:
      "The system consists of a Next.js frontend for user interaction, a Python backend for polling logic, and Solana blockchain for secure vote recording and verification.",
    screenshots: [
      "/projects/govai.png",
      "/architecture-template.svg",
    ],
    learnings: [
      "Feature freshness matters more than model complexity for on-call usefulness",
      "Human-in-the-loop UI needs frictionless keyboard shortcuts to keep reviewers fast",
    ],
    improvements: [
      "Add RLHF-style ranking of incidents to tighten reviewer priors",
      "Ship lightweight on-device detectors for edge-only deployments",
    ],
    year: "Nov 2025",
  },

  {
    slug: "detective-ai",
    title: "Detective AI",
    tagline: "Designed to detect silent quality degradation",
    description:
      "Productionized a vision transformer pipeline with active learning, on-the-fly augmentations, and GPU-aware batching across microservices.",
    tech: ["Next.js", "TypeScript", "DataDog"],
    challenges: [
      "Kept throughput >250 FPS with dynamic batching and GPU utilization >80%",
      "Reduced label noise via active learning and model disagreement scores",
      "Hardened CI/CD with golden datasets and visual regression diffs",
    ],
    contributions: [
      "Built data selection service that surfaces highest value frames per sprint",
      "Instrumented per-stage latency and GPU metrics with Grafana dashboards",
      "Created a reviewer UI for bounding boxes and class hints with auto-complete",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ArjaynP/visionedge" },
      { label: "Live Demo", href: "https://demo.example.com/visionedge" },
      { label: "Paper", href: "https://example.com/visionedge/paper" },
      { label: "YouTube", href: "https://youtube.com/watch?v=visionedge" },
    ],
    featured: true,
    problem:
      "Ops teams needed a reliable way to spot visual defects at scale but existing models struggled with domain shift and shaky labels.",
    overview:
      "VisionEdge stitches together ingest, selection, training, and serving. It uses disagreement-based active learning to request fresh labels and keeps deployment predictable with shadow evals.",
    architecture:
      "Frames land in S3; metadata in Redis. A PyTorch inference service exposes gRPC, fronted by a load balancer. Next.js renders dashboards for model health and labeling queues.",
    screenshots: ["/projects/detective-ai.jpg", "/architecture-template.svg"],
    learnings: [
      "GPU-aware batching beats naive autoscaling for latency/throughput targets",
      "Disagreement sampling surfaces edge cases faster than entropy alone",
    ],
    improvements: [
      "Add synthetic data generation for rare classes",
      "Introduce lightweight mobile inference for offline sites",
    ],
    year: "Dec 2025",
  },
  {
    slug: "project-pit-crew",
    title: "Project Pit Crew",
    tagline: "Evaluating issues with LLMs using Jira-integrated platform",
    description:
      "Built an evaluation harness, prompt registry, and guardrails for production LLM features with automatic regression detection.",
    tech: ["Jira", "Python", "Node.js", "Next.js", "Pinecone", "Prisma", "PostgreSQL"],
    challenges: [
      "Detect regressions caused by prompt drift and upstream schema changes",
      "Provide deterministic replay of conversations with feature flags",
      "Balance latency vs. grounding quality with retriever fallbacks",
    ],
    contributions: [
      "Implemented eval suites covering hallucinations, safety, and factuality",
      "Designed prompt versioning + approvals, tied to feature flags",
      "Built dashboards for latency, cost, and retrieval depth per feature",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ArjaynP/llm-ops-platform" },
      { label: "Live Demo", href: "https://demo.example.com/llm-ops" },
      { label: "Paper", href: "https://example.com/llmops/paper" },
      { label: "YouTube", href: "https://youtube.com/watch?v=llmops" },
    ],
    featured: true,
    problem:
      "Product teams needed confidence shipping LLM features but lacked evals tied to real user journeys and cost visibility.",
    overview:
      "The platform centralizes prompt versions, retrieval configs, and eval results. It triggers guardrails and fallbacks on policy violations and keeps product owners in the loop with dashboards.",
    architecture:
      "User inputs flow through a retriever backed by Pinecone, then prompts a hosted LLM with guardrail hooks. Results and costs are logged to PostgreSQL; dashboards live in Next.js.",
    screenshots: ["/projects/project-pit-crew.jpg", "/architecture-template.svg"],
    learnings: [
      "Eval coverage prevents silent regressions when prompts evolve",
      "Grounding depth and latency need per-feature SLAs with budgets",
    ],
    improvements: [
      "Add cost-aware routing between providers",
      "Introduce human eval sampling with weekly review",
    ],
    year: "Dec 2025",
  },

  {
    slug: "argainz-gym-app",
    title: "Argainz Gym App",
    tagline: "Creating a workout routine in just 3 steps",
    description:
      "This project involved creating an AI-powered chatbot to assist students and faculty with university-related inquiries and services.",
    tech: ["React.js", "Tailwind.css"],
    challenges: [
      "Detect regressions caused by prompt drift and upstream schema changes",
      "Provide deterministic replay of conversations with feature flags",
      "Balance latency vs. grounding quality with retriever fallbacks",
    ],
    contributions: [
      "Implemented eval suites covering hallucinations, safety, and factuality",
      "Designed prompt versioning + approvals, tied to feature flags",
      "Built dashboards for latency, cost, and retrieval depth per feature",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ArjaynP/llm-ops-platform" },
      { label: "Live Demo", href: "https://demo.example.com/llm-ops" },
      { label: "Paper", href: "https://example.com/llmops/paper" },
      { label: "YouTube", href: "https://youtube.com/watch?v=llmops" },
    ],
    featured: false,
    problem:
      "Product teams needed confidence shipping LLM features but lacked evals tied to real user journeys and cost visibility.",
    overview:
      "The platform centralizes prompt versions, retrieval configs, and eval results. It triggers guardrails and fallbacks on policy violations and keeps product owners in the loop with dashboards.",
    architecture:
      "User inputs flow through a retriever backed by Pinecone, then prompts a hosted LLM with guardrail hooks. Results and costs are logged to PostgreSQL; dashboards live in Next.js.",
    screenshots: ["/projects/argainz-gym-app.png", "/architecture-template.svg"],
    learnings: [
      "Eval coverage prevents silent regressions when prompts evolve",
      "Grounding depth and latency need per-feature SLAs with budgets",
    ],
    improvements: [
      "Add cost-aware routing between providers",
      "Introduce human eval sampling with weekly review",
    ],
    year: "Jan 2025", 
  },

  {
    slug: "uwo-chatbot",
    title: "Western University Chatbot",
    tagline: "An AI-powered assistant for university services",
    description:
      "This project involved creating an AI-powered chatbot to assist students and faculty with university-related inquiries and services.",
    tech: ["Python", "Flask", "Next.js", "TypeScript", "Node.js"],
    challenges: [
      "Detect regressions caused by prompt drift and upstream schema changes",
      "Provide deterministic replay of conversations with feature flags",
      "Balance latency vs. grounding quality with retriever fallbacks",
    ],
    contributions: [
      "Implemented eval suites covering hallucinations, safety, and factuality",
      "Designed prompt versioning + approvals, tied to feature flags",
      "Built dashboards for latency, cost, and retrieval depth per feature",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ArjaynP/llm-ops-platform" },
      { label: "Live Demo", href: "https://demo.example.com/llm-ops" },
      { label: "Paper", href: "https://example.com/llmops/paper" },
      { label: "YouTube", href: "https://youtube.com/watch?v=llmops" },
    ],
    featured: false,
    problem:
      "Product teams needed confidence shipping LLM features but lacked evals tied to real user journeys and cost visibility.",
    overview:
      "The platform centralizes prompt versions, retrieval configs, and eval results. It triggers guardrails and fallbacks on policy violations and keeps product owners in the loop with dashboards.",
    architecture:
      "User inputs flow through a retriever backed by Pinecone, then prompts a hosted LLM with guardrail hooks. Results and costs are logged to PostgreSQL; dashboards live in Next.js.",
    screenshots: ["/projects/uwo-chatbot.jpg", "/architecture-template.svg"],
    learnings: [
      "Eval coverage prevents silent regressions when prompts evolve",
      "Grounding depth and latency need per-feature SLAs with budgets",
    ],
    improvements: [
      "Add cost-aware routing between providers",
      "Introduce human eval sampling with weekly review",
    ],
    year: "March 2023",
  },

  {
    slug: "brescia-hotels",
    title: "Brescia Norton Hotels",
    tagline: "Predictive model for hotel booking cancellations",
    description:
      "This project involved creating an AI-powered chatbot to assist students and faculty with university-related inquiries and services.",
    tech: ["Python", "TensorFlow", "Keras"],
    challenges: [
      "Detect regressions caused by prompt drift and upstream schema changes",
      "Provide deterministic replay of conversations with feature flags",
      "Balance latency vs. grounding quality with retriever fallbacks",
    ],
    contributions: [
      "Implemented eval suites covering hallucinations, safety, and factuality",
      "Designed prompt versioning + approvals, tied to feature flags",
      "Built dashboards for latency, cost, and retrieval depth per feature",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ArjaynP/llm-ops-platform" },
      { label: "Live Demo", href: "https://demo.example.com/llm-ops" },
      { label: "Paper", href: "https://example.com/llmops/paper" },
      { label: "YouTube", href: "https://youtube.com/watch?v=llmops" },
    ],
    featured: false,
    problem:
      "Product teams needed confidence shipping LLM features but lacked evals tied to real user journeys and cost visibility.",
    overview:
      "The platform centralizes prompt versions, retrieval configs, and eval results. It triggers guardrails and fallbacks on policy violations and keeps product owners in the loop with dashboards.",
    architecture:
      "User inputs flow through a retriever backed by Pinecone, then prompts a hosted LLM with guardrail hooks. Results and costs are logged to PostgreSQL; dashboards live in Next.js.",
    screenshots: ["/projects/brescia-hotels.jpg", "/architecture-template.svg"],
    learnings: [
      "Eval coverage prevents silent regressions when prompts evolve",
      "Grounding depth and latency need per-feature SLAs with budgets",
    ],
    improvements: [
      "Add cost-aware routing between providers",
      "Introduce human eval sampling with weekly review",
    ],
    year: "March 2023",
  },
];
