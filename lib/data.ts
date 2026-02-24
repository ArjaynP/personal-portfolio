export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  pitchStatement: string;
  techStack: string[];
  thumbnail: string;
  screenshots: string[];
  challenges: { challenge: string; solution: string }[];
  whatYouLearned: string[];
  futureGoals: string[];
  links: {
    github?: string;
    live?: string;
    devpost?: string;
    paper?: string;
    youtube?: string;
  };
  featured: boolean;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  companyEmoji?: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "ml";
}

export const projects: Project[] = [
  {
    id: "detective-ai",
    title: "Detective AI",
    shortDescription: "Real-time computer vision API for object detection and image classification using custom-trained models.",
    fullDescription: "A production-ready REST API that provides real-time computer vision capabilities including object detection, image classification, and scene understanding. Built to handle high throughput with sub-100ms latency.",
    pitchStatement: "Many businesses need computer vision capabilities but lack the ML infrastructure and expertise to build and deploy models at scale.",
    techStack: ["Python", "PyTorch", "FastAPI", "Docker", "AWS", "Redis"],
    thumbnail: "/detective-ai.png",
    screenshots: ["/projects/detective-ai-1.jpg", "/projects/detective-ai-2.jpg"],
    challenges: [
      { challenge: "Achieving sub-100ms inference latency", solution: "Implemented model quantization and TensorRT optimization, reducing inference time by 60%" },
      { challenge: "Handling concurrent requests at scale", solution: "Designed async processing pipeline with Redis queue and horizontal scaling" }
    ],
    whatYouLearned: ["Model optimization techniques for production", "Building scalable ML infrastructure", "API design patterns for ML services"],
    futureGoals: ["Add video stream processing", "Implement custom model training pipeline", "Add edge deployment support"],
    links: { github: "https://github.com/ArjaynP/detective-ai", live: "#", youtube: "#" },
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "project-pit-crew",
    title: "Project Pit Crew",
    shortDescription: "RAG-powered AI assistant for enterprise document search and question answering with fine-tuned embeddings.",
    fullDescription: "An intelligent document assistant that uses Retrieval Augmented Generation to provide accurate answers from large document repositories. Features custom embedding models and hybrid search.",
    pitchStatement: "Enterprises struggle to extract insights from vast document repositories, with employees spending hours searching for information.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "Next.js", "PostgreSQL"],
    thumbnail: "/project-pit-crew.png",
    screenshots: ["/projects/llm-assistant-1.jpg"],
    challenges: [
      { challenge: "Improving retrieval accuracy for domain-specific content", solution: "Fine-tuned embedding model on domain data, achieving 40% improvement in retrieval accuracy" },
      { challenge: "Handling multi-document reasoning", solution: "Implemented iterative retrieval with chain-of-thought prompting" }
    ],
    whatYouLearned: ["RAG system design and optimization", "Embedding model fine-tuning", "Building production LLM applications"],
    futureGoals: ["Add multi-modal document support", "Implement streaming responses", "Add conversation memory"],
    links: { github: "https://github.com/ArjaynP/project-pit-crew", live: "#", devpost: "#" },
    featured: true,
    category: "AI/NLP"
  },
  {
    id: "gov-ai",
    title: "Gov AI: Decentralized Polling System",
    shortDescription: "Trustless on-chain polling where every ballot is wallet-signed, publicly auditable, and tamper-proof on Solana.",
    fullDescription: "Gov AI is a decentralized polling system built on Solana that records every vote on-chain, verifies signatures from connected wallets, and publishes transparent, tamper-proof tallies. The frontend uses Next.js for the voting flow, a FastAPI service orchestrates submissions, and a Rust Solana program enforces the rules on-chain so results can be independently verified by anyone.",
    pitchStatement: "Polling that you never need to trust—because you can verify it yourself. Every vote is wallet-signed, recorded on-chain, and publicly auditable with no central admin to tamper with results.",
    techStack: ["TypeScript", "Next.js", "Python FastAPI", "Solana", "Rust", "Anchor"],
    thumbnail: "/govai.png",
    screenshots: ["https://www.youtube.com/watch?v=DJBun_o0wPo&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=Mjg2NjY"],
    challenges: [
      { challenge: "Guaranteeing vote integrity without a central administrator", solution: "Required wallet signatures and verified them in a Solana program so only authenticated ballots are accepted." },
      { challenge: "Preventing duplicate or replayed votes", solution: "Stored vote state on-chain with unique nonces to reject duplicate submissions and enforce one-vote-per-wallet." }
    ],
    whatYouLearned: [
      "Building Solana programs with Anchor and verifying wallet signatures",
      "Designing client flows that keep on-chain and off-chain state consistent",
      "Creating transparent audit trails that users can independently verify"
    ],
    futureGoals: [
      "Add zero-knowledge proofs for private ballot contents while keeping public tallies",
      "Ship mobile-first wallet support and QR-based voting flows",
      "Publish reusable governance and referendum templates on Solana"
    ],
    links: {
      github: "https://github.com/satvikgarimella/GovAI",
      youtube: "https://www.youtube.com/watch?v=DJBun_o0wPo&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=Mjg2NjY",
      devpost: "https://devpost.com/software/gov-ai-decentralized-polling-system"
    },
    featured: true,
    category: "FinTech"
  },
  {
    id: "argainz-gym-app",
    title: "Argainz Gym App",
    shortDescription: "Mobile-friendly app that builds personalized workout routines in a few steps with clean, fast UI.",
    fullDescription: "Built an intuitive fitness companion that guides users through creating customized workout plans, pairing a lightweight AI helper with a streamlined React front-end.",
    pitchStatement: "Beginners struggle to assemble effective routines without guidance, leading to inconsistent training and drop-off.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    thumbnail: "/argainz-gym-app.png",
    screenshots: ["/argainz-gym-app.png"],
    challenges: [
      { challenge: "Keeping the flow to three clear steps", solution: "Iterated on UI copy and progressive disclosure to reduce friction." },
      { challenge: "Responsive design for mobile-first users", solution: "Used Tailwind utility patterns and device testing to ensure consistent layouts." }
    ],
    whatYouLearned: ["Designing concise onboarding flows", "Building responsive UIs with Tailwind", "Balancing simplicity with flexibility in form design"],
    futureGoals: ["Add workout history and streak tracking", "Integrate wearable data for auto-adjusted plans", "Ship offline mode for gym connectivity dead zones"],
    links: {
      github: "https://github.com/ArjaynP/react-workout-app",
      youtube: "https://youtube.com/watch?v=llmops"
    },
    featured: false,
    category: "Sports Tech"
  },
  {
    id: "western-baja-inventory-manager",
    title: "WBR Inventory Manager",
    shortDescription: "Deep reinforcement learning system for autonomous drone navigation in complex environments.",
    fullDescription: "A research project implementing deep RL algorithms for autonomous drone navigation, including obstacle avoidance and path planning in dynamic environments.",
    pitchStatement: "Autonomous navigation in unknown and dynamic environments remains a key challenge for robotics and drone applications.",
    techStack: ["Python", "PyTorch", "ROS", "OpenAI Gym", "Unity ML-Agents", "C++"],
    thumbnail: "/wbr-logo.jpeg",
    screenshots: ["/projects/western-baja-inventory-manager-1.jpg"],
    challenges: [
      { challenge: "Sim-to-real transfer gap", solution: "Implemented domain randomization and progressive training curriculum" },
      { challenge: "Sample efficiency in complex environments", solution: "Combined model-based planning with model-free RL" }
    ],
    whatYouLearned: ["Deep reinforcement learning algorithms", "Robotics simulation and control", "Sim-to-real transfer techniques"],
    futureGoals: ["Deploy on physical drone hardware", "Add multi-agent coordination", "Implement vision-based navigation"],
    links: { github: "https://github.com/WesternBajaRacing/Baja-InventoryManager"},
    featured: false,
    category: "Web App"
  },
  {
    id: "uwo-chatbot",
    title: "Western University Chatbot",
    shortDescription: "Hybrid recommendation system combining collaborative filtering with content-based approaches.",
    fullDescription: "A scalable recommendation engine that provides personalized content suggestions using a hybrid approach of collaborative filtering, content-based methods, and contextual bandits.",
    pitchStatement: "Generic recommendations fail to capture individual preferences, leading to poor user engagement and missed opportunities.",
    techStack: ["Python", "Spark", "TensorFlow Recommenders", "Redis", "PostgreSQL", "GraphQL"],
    thumbnail: "/uwo-chatbot-icon.png",
    screenshots: ["/projects/uwo-chatbot-1.jpg"],
    challenges: [
      { challenge: "Cold start problem for new users", solution: "Implemented hybrid approach with content-based fallback and active learning" },
      { challenge: "Real-time recommendation serving", solution: "Built two-stage retrieval and ranking system with caching" }
    ],
    whatYouLearned: ["Recommendation system architectures", "A/B testing for ML systems", "Balancing exploration vs exploitation"],
    futureGoals: ["Add reinforcement learning for long-term optimization", "Implement cross-domain recommendations", "Add causal inference for debiasing"],
    links: { github: "https://github.com/ArjaynP/uwo-chatbot", live: "#" },
    featured: false,
    category: "Machine Learning"
  },
  {
    id: "the Athlete Insider",
    title: "The Athlete Insider",
    shortDescription: "Hybrid recommendation system combining collaborative filtering with content-based approaches.",
    fullDescription: "A scalable recommendation engine that provides personalized content suggestions using a hybrid approach of collaborative filtering, content-based methods, and contextual bandits.",
    pitchStatement: "Generic recommendations fail to capture individual preferences, leading to poor user engagement and missed opportunities.",
    techStack: ["Python", "Spark", "TensorFlow Recommenders", "Redis", "PostgreSQL", "GraphQL"],
    thumbnail: "/athlete-insider-banner.png",
    screenshots: ["/athlete-insider-banner.png"],
    challenges: [
      { challenge: "Cold start problem for new users", solution: "Implemented hybrid approach with content-based fallback and active learning" },
      { challenge: "Real-time recommendation serving", solution: "Built two-stage retrieval and ranking system with caching" }
    ],
    whatYouLearned: ["Recommendation system architectures", "A/B testing for ML systems", "Balancing exploration vs exploitation"],
    futureGoals: ["Add reinforcement learning for long-term optimization", "Implement cross-domain recommendations", "Add causal inference for debiasing"],
    links: { github: "https://github.com/ArjaynP/theAthleteInsider", live: "#" },
    featured: false,
    category: "Sports Tech"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "EMRC Labs",
    companyEmoji: "🔬",
    role: "AI/ML & Computer Vision Researcher | Full-Stack Developer",
    duration: "Nov. 2025 — Present",
    description: "Built and maintained a full-stack internal web platform using React, Node.js, Express, and SQL/NoSQL to centralize equipment booking, tracking, and administrative workflows for research staff and students",
    achievements: [
      "Developed an admin dashboard to monitor 50+ equipment assets, user activity, and equipment status, enabling faster operational decisions and improved accountability",
      "Conducted applied AI/ML research in computer vision and image processing, working with SLAM, ROS, and Gazebo for robotics and mobility modeling"
    ],
    techStack: ["React", "Node.js", "Express", "SQL", "NoSQL", "SLAM", "ROS", "Gazebo"]
  },
  {
    id: "exp-2",
    company: "Western Baja Racing",
    companyLogo: "/western_baja_racing_logo.jpeg",
    role: "Full Stack Developer - Electronics & Telemetry",
    duration: "Sept. 2025 - Present",
    description: "Developed a full-stack inventory management web application using React, Node.js, and MySQL to track $20,000+ worth of parts, suppliers, and purchase history",
    achievements: [
      "Built reusable UI components with React and Tailwind CSS to streamline request and approval workflows",
      "Developed backend APIs in Node.js with a MySQL database to track inventory levels, suppliers, and purchase history, using Docker to ensure consistent development and deployment environments"
    ],
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS", "Docker"]
  },
  {
    id: "exp-3",
    company: "Western Formula Racing",
    companyLogo: "/western_formula_racing_logo.jpeg",
    role: "Embedded Software Developer",
    duration: "Sept. 2025 - Present",
    description: "Reviewed and tested C++ firmware for the driver dashboard to identify bugs and refactor fragile logic, improving system reliability and long-term maintainability",
    achievements: [
      "Developed front-end interfaces for the team's car data logger to visualize run and sensor data, improving engineer access to performance insights and post-run analysis",
      "Collaborated with hardware teams to integrate dashboard and data-logging features with existing vehicle systems, ensuring reliable real-time data flow and system compatibility"
    ],
    techStack: ["C++", "React", "Embedded Systems"]
  },

  {
    id: "exp-4",
    company: "Western AI",
    companyLogo: "/westernuai_logo.jpeg",
    role: "Technical Project Lead",
    duration: "Sept. 2022 - Apr. 2023",
    description: "Led a cross-functional team to deliver a prototype 24/7 university FAQ chatbot, defining scope, milestones, and task ownership while contributing to implementation",
    achievements: [
      "Contributed to the chatbot's NLP model implementation in PyTorch with BRNN-based intent classification and supported evaluation/testing to improve response accuracy to 80%",
      "Deployed the embedded chatbot UI on Vercel and validated demo readiness with 200+ test queries"
    ],
    techStack: ["Python", "PyTorch", "NLP", "React", "Vercel"]
  },

  {
    id: "exp-5",
    company: "Western University",
    companyLogo: "/westernuniversity_logo.jpeg",
    role: "Computer Vision Developer",
    duration: "Jan. 2022 - Apr. 2022",
    description: "Conducted research in deep learning and computer vision, publishing papers at top venues.",
    achievements: [
      "Published 2 papers at top-tier ML conferences",
      "Developed novel architecture improving SOTA by 15%",
      "Contributed to open-source ML frameworks"
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"]
  }
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "PostgreSQL", category: "languages" },
  { name: "NoSQL", category: "languages" },
  { name: "R", category: "languages" },
  // ML Libraries
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "Scikit-learn", category: "ml" },
  { name: "Hugging Face", category: "ml" },
  { name: "LangChain", category: "ml" },
  { name: "OpenAI API", category: "ml" },
  // Frameworks
  { name: "Next.js", category: "frameworks" },
  { name: "React", category: "frameworks" },
  { name: "FastAPI", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Django", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  // Developer Tools
  { name: "Docker", category: "tools" },
  { name: "GitLab", category: "tools" },
  { name: "VSCode", category: "tools" },
  { name: "PyCharm", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Eclipse", category: "tools" },
  { name: "Linux", category: "tools" },
];

export const socialLinks = {
  email: "apirath@uwo.ca",
  github: "https://github.com/ArjaynP",
  linkedin: "https://www.linkedin.com/in/arjayn-piratheeparatnam-390a721ab/",
  instagram: "https://instagram.com/arjaynpratheep",
  devpost: "#",
};

export const personalInfo = {
  name: "Arjayn Piratheeparatnam",
  title: "AI/ML Software Engineer",
  tagline: "Building intelligent systems that solve real-world problems",
  bio: "I'm a passionate AI/ML engineer focused on building production-ready machine learning systems. I love tackling complex problems at the intersection of software engineering and artificial intelligence, from computer vision to natural language processing.",
  resumeUrl: "/arjayn-piratheeparatnam.pdf",
};
