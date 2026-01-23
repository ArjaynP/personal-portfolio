export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
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
    problemStatement: "Many businesses need computer vision capabilities but lack the ML infrastructure and expertise to build and deploy models at scale.",
    techStack: ["Python", "PyTorch", "FastAPI", "Docker", "AWS", "Redis"],
    thumbnail: "/detective-ai.png",
    screenshots: ["/projects/detective-ai-1.jpg", "/projects/detective-ai-2.jpg"],
    challenges: [
      { challenge: "Achieving sub-100ms inference latency", solution: "Implemented model quantization and TensorRT optimization, reducing inference time by 60%" },
      { challenge: "Handling concurrent requests at scale", solution: "Designed async processing pipeline with Redis queue and horizontal scaling" }
    ],
    whatYouLearned: ["Model optimization techniques for production", "Building scalable ML infrastructure", "API design patterns for ML services"],
    futureGoals: ["Add video stream processing", "Implement custom model training pipeline", "Add edge deployment support"],
    links: { github: "#", live: "#", youtube: "#" },
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "project-pit-crew",
    title: "Project Pit Crew",
    shortDescription: "RAG-powered AI assistant for enterprise document search and question answering with fine-tuned embeddings.",
    fullDescription: "An intelligent document assistant that uses Retrieval Augmented Generation to provide accurate answers from large document repositories. Features custom embedding models and hybrid search.",
    problemStatement: "Enterprises struggle to extract insights from vast document repositories, with employees spending hours searching for information.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "Next.js", "PostgreSQL"],
    thumbnail: "/projects/llm-assistant.jpg",
    screenshots: ["/projects/llm-assistant-1.jpg"],
    challenges: [
      { challenge: "Improving retrieval accuracy for domain-specific content", solution: "Fine-tuned embedding model on domain data, achieving 40% improvement in retrieval accuracy" },
      { challenge: "Handling multi-document reasoning", solution: "Implemented iterative retrieval with chain-of-thought prompting" }
    ],
    whatYouLearned: ["RAG system design and optimization", "Embedding model fine-tuning", "Building production LLM applications"],
    futureGoals: ["Add multi-modal document support", "Implement streaming responses", "Add conversation memory"],
    links: { github: "#", live: "#", devpost: "#" },
    featured: true,
    category: "AI/NLP"
  },
  {
    id: "gov-ai",
    title: "Gov Ai: Decentralized Polling System",
    shortDescription: "End-to-end ML platform for time series forecasting and anomaly detection in IoT sensor data.",
    fullDescription: "A comprehensive analytics platform that ingests IoT sensor data, detects anomalies in real-time, and provides accurate forecasts for predictive maintenance.",
    problemStatement: "Manufacturing companies lose millions annually due to unplanned equipment failures and inefficient maintenance schedules.",
    techStack: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Grafana", "Kubernetes"],
    thumbnail: "/govai.png",
    screenshots: ["/projects/predictive-analytics-1.jpg"],
    challenges: [
      { challenge: "Processing high-velocity sensor data streams", solution: "Built streaming pipeline with Kafka and optimized batch processing" },
      { challenge: "Handling concept drift in sensor data", solution: "Implemented online learning with automatic model retraining" }
    ],
    whatYouLearned: ["Stream processing architecture", "Time series forecasting techniques", "MLOps best practices"],
    futureGoals: ["Add federated learning support", "Implement AutoML for model selection", "Add natural language querying"],
    links: { github: "#", paper: "#" },
    featured: true,
    category: "Data Engineering"
  },
  {
    id: "argainz-gym-app",
    title: "Argainz Gym App",
    shortDescription: "Mobile-friendly app that builds personalized workout routines in a few steps with clean, fast UI.",
    fullDescription: "Built an intuitive fitness companion that guides users through creating customized workout plans, pairing a lightweight AI helper with a streamlined React front-end.",
    problemStatement: "Beginners struggle to assemble effective routines without guidance, leading to inconsistent training and drop-off.",
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
      github: "https://github.com/ArjaynP/llm-ops-platform",
      live: "https://demo.example.com/llm-ops",
      youtube: "https://youtube.com/watch?v=llmops"
    },
    featured: true,
    category: "Web App"
  },
  {
    id: "western-baja-inventory-manager",
    title: "Western Baja Inventory Manager",
    shortDescription: "Deep reinforcement learning system for autonomous drone navigation in complex environments.",
    fullDescription: "A research project implementing deep RL algorithms for autonomous drone navigation, including obstacle avoidance and path planning in dynamic environments.",
    problemStatement: "Autonomous navigation in unknown and dynamic environments remains a key challenge for robotics and drone applications.",
    techStack: ["Python", "PyTorch", "ROS", "OpenAI Gym", "Unity ML-Agents", "C++"],
    thumbnail: "/wbrlogo.png",
    screenshots: ["/projects/western-baja-inventory-manager-1.jpg"],
    challenges: [
      { challenge: "Sim-to-real transfer gap", solution: "Implemented domain randomization and progressive training curriculum" },
      { challenge: "Sample efficiency in complex environments", solution: "Combined model-based planning with model-free RL" }
    ],
    whatYouLearned: ["Deep reinforcement learning algorithms", "Robotics simulation and control", "Sim-to-real transfer techniques"],
    futureGoals: ["Deploy on physical drone hardware", "Add multi-agent coordination", "Implement vision-based navigation"],
    links: { github: "#", youtube: "#", paper: "#" },
    featured: true,
    category: "Robotics"
  },
  {
    id: "brescia-norton-hotels",
    title: "Brescia Norton Hotels",
    shortDescription: "CNN-based diagnostic tool for detecting abnormalities in chest X-rays with explainable AI.",
    fullDescription: "A deep learning system that assists radiologists by detecting potential abnormalities in chest X-rays and providing visual explanations for its predictions.",
    problemStatement: "Radiologist shortage and increasing imaging volumes create delays in diagnosis, particularly in underserved areas.",
    techStack: ["Python", "PyTorch", "MONAI", "FastAPI", "React", "DICOM"],
    thumbnail: "/projects/medical-imaging.jpg",
    screenshots: ["/projects/medical-imaging-1.jpg"],
    challenges: [
      { challenge: "Building trust with explainable predictions", solution: "Implemented Grad-CAM and attention visualization for model interpretability" },
      { challenge: "Handling class imbalance in medical data", solution: "Used focal loss and data augmentation strategies" }
    ],
    whatYouLearned: ["Medical image processing pipelines", "Explainable AI techniques", "Healthcare AI regulations and best practices"],
    futureGoals: ["Add multi-modal fusion with patient history", "Implement federated learning for privacy", "Expand to CT scan analysis"],
    links: { github: "#", devpost: "#" },
    featured: true,
    category: "Healthcare AI"
  },
  {
    id: "uwo-chatbot",
    title: "Western University Chatbot",
    shortDescription: "Hybrid recommendation system combining collaborative filtering with content-based approaches.",
    fullDescription: "A scalable recommendation engine that provides personalized content suggestions using a hybrid approach of collaborative filtering, content-based methods, and contextual bandits.",
    problemStatement: "Generic recommendations fail to capture individual preferences, leading to poor user engagement and missed opportunities.",
    techStack: ["Python", "Spark", "TensorFlow Recommenders", "Redis", "PostgreSQL", "GraphQL"],
    thumbnail: "/projects/uwo-chatbot.jpg",
    screenshots: ["/projects/uwo-chatbot-1.jpg"],
    challenges: [
      { challenge: "Cold start problem for new users", solution: "Implemented hybrid approach with content-based fallback and active learning" },
      { challenge: "Real-time recommendation serving", solution: "Built two-stage retrieval and ranking system with caching" }
    ],
    whatYouLearned: ["Recommendation system architectures", "A/B testing for ML systems", "Balancing exploration vs exploitation"],
    futureGoals: ["Add reinforcement learning for long-term optimization", "Implement cross-domain recommendations", "Add causal inference for debiasing"],
    links: { github: "#", live: "#" },
    featured: false,
    category: "Machine Learning"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "EMRC Labs",
    role: "AI/ML & Computer Vision Researcher | Full-Stack Developer",
    duration: "Nov. 2025 — Present",
    description: "Developing a full-stack application that details the lab, as well as a private portal for lab employees to book equipment",
    achievements: [
      "Improved equipment booking efficiency by 30% through a custom-built full-stack platform using React, Node.js, Express, and SQL/NoSQL databases",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "NextAuth.js"]
  },
  {
    id: "exp-2",
    company: "Western Baja Racing",
    role: "Full Stack Developer",
    duration: "Sept. 2025 - Present",
    description: "Full-stack ML development for an AI-powered analytics platform serving enterprise clients.",
    achievements: [
      "Designed and implemented RAG system achieving 95% retrieval accuracy",
      "Built real-time anomaly detection system reducing false positives by 40%",
      "Architected microservices infrastructure handling 100K+ concurrent users"
    ],
    techStack: ["Next.js", "TypeScript", "Docker", "NoSQL"]
  },
  {
    id: "exp-3",
    company: "Western Formula Racing",
    role: "Embedded Systems Developer",
    duration: "Sept. 2025 - Present",
    description: "Conducted research in deep learning and computer vision, publishing papers at top venues.",
    achievements: [
      "Published 2 papers at top-tier ML conferences",
      "Developed novel architecture improving SOTA by 15%",
      "Contributed to open-source ML frameworks"
    ],
    techStack: ["C++", "React.js", "MongoDB", "Tailwind CSS"]
  },

  {
    id: "exp-4",
    company: "Western AI",
    role: "Embedded Systems Developer",
    duration: "Sept. 2022 - Apr. 2023",
    description: "Conducted research in deep learning and computer vision, publishing papers at top venues.",
    achievements: [
      "Published 2 papers at top-tier ML conferences",
      "Developed novel architecture improving SOTA by 15%",
      "Contributed to open-source ML frameworks"
    ],
    techStack: ["C++", "React.js", "MongoDB", "Tailwind CSS"]
  },

  {
    id: "exp-5",
    company: "Western University",
    role: "Computer Vision Developer",
    duration: "Jan. 2022 - Apr. 2022",
    description: "Conducted research in deep learning and computer vision, publishing papers at top venues.",
    achievements: [
      "Published 2 papers at top-tier ML conferences",
      "Developed novel architecture improving SOTA by 15%",
      "Contributed to open-source ML frameworks"
    ],
    techStack: ["C++", "React.js", "MongoDB", "Tailwind CSS"]
  }
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "Rust", category: "languages" },
  // ML Frameworks
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
  // Tools
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "Redis", category: "tools" },
];

export const socialLinks = {
  email: "apirath@uwo.ca",
  github: "https://github.com/ArjaynP",
  linkedin: "https://www.linkedin.com/in/arjayn-piratheeparatnam-390a721ab/",
  instagram: "https://instagram.com/arjaynpratheep",

  
};

export const personalInfo = {
  name: "Arjayn Piratheeparatnam",
  title: "AI/ML Software Engineer",
  tagline: "Building intelligent systems that solve real-world problems",
  bio: "I'm a passionate AI/ML engineer focused on building production-ready machine learning systems. I love tackling complex problems at the intersection of software engineering and artificial intelligence, from computer vision to natural language processing.",
  resumeUrl: "#",
};
