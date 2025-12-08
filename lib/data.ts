export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  techStack: string[]
  challengesSolved: string[]
  whatYouBuilt: string
  problemStatement: string
  architectureDescription: string
  screenshots: string[]
  lessonsLearned: string[]
  futureGoals: string[]
  links: {
    github?: string
    live?: string
    devpost?: string
    paper?: string
    youtube?: string
  }
  featured: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  companyUrl?: string
  location: string
  startDate: string
  endDate: string
  description: string
  techStack: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export const personalInfo = {
  name: "Arjayn Piratheeparatnam",
  title: "AI/ML Software Engineer",
  tagline: "Building intelligent systems that solve real-world problems",
  bio: "I'm a passionate AI/ML engineer focused on creating innovative solutions at the intersection of machine learning, software development, and user experience. I care deeply about building technology that makes a meaningful impact.",
  email: "apirath@uwo.ca",
  github: "https://github.com/ArjaynP",
  linkedin: "https://linkedin.com/in/arjayn-piratheeparatnam-390a721ab",
  instagram: "https://instagram.com/arjaynpratheep",
  resumeUrl: "arjayn-piratheeparatnam-resume/resume.pdf",
  headshot: "/professional-headshot.png",
}

export const projects: Project[] = [
  {
    id: "neural-vision",
    title: "Neural Vision",
    shortDescription: "Real-time object detection system using deep learning for autonomous navigation",
    fullDescription:
      "A comprehensive computer vision system that enables real-time object detection and tracking for autonomous vehicles and robotics applications.",
    thumbnail: "/computer-vision-ai-neural-network-visualization.jpg",
    techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "TensorRT", "ROS"],
    challengesSolved: [
      "Achieved 60 FPS inference on edge devices through model optimization",
      "Reduced false positive rate by 40% using custom loss functions",
      "Implemented multi-object tracking with 95% accuracy",
    ],
    whatYouBuilt:
      "Designed and implemented the core detection pipeline, including data augmentation strategies, model architecture modifications, and deployment optimization for real-time inference.",
    problemStatement:
      "Autonomous systems require fast, accurate object detection that works reliably in varying lighting and weather conditions while running on resource-constrained hardware.",
    architectureDescription:
      "The system uses a modified YOLOv8 backbone with custom attention modules, deployed on NVIDIA Jetson for edge inference. Data flows from camera input through preprocessing, inference, and post-processing stages.",
    screenshots: ["/object-detection-bounding-boxes-cars.jpg", "/neural-network-architecture.png"],
    lessonsLearned: [
      "Model optimization is crucial for real-world deployment",
      "Edge cases in data often reveal system weaknesses",
      "Collaborative iteration with domain experts improves results",
    ],
    futureGoals: [
      "Implement 3D object detection using LiDAR fusion",
      "Add semantic segmentation for scene understanding",
      "Deploy on newer edge hardware for improved performance",
    ],
    links: {
      github: "https://github.com/yourusername/neural-vision",
      youtube: "https://youtube.com/watch?v=demo",
      paper: "https://arxiv.org/abs/example",
    },
    featured: true,
  },
  {
    id: "llm-assistant",
    title: "LLM Research Assistant",
    shortDescription: "AI-powered research assistant using RAG architecture for academic paper analysis",
    fullDescription:
      "An intelligent research assistant that helps academics and researchers quickly find, analyze, and synthesize information from large collections of research papers.",
    thumbnail: "/ai-chatbot-research-assistant-interface.jpg",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
    challengesSolved: [
      "Built semantic search over 100k+ papers with sub-second latency",
      "Implemented citation-aware summarization for accurate sourcing",
      "Designed conversation memory for multi-turn research sessions",
    ],
    whatYouBuilt:
      "Full-stack development including the RAG pipeline, vector database optimization, API design, and conversational UI with streaming responses.",
    problemStatement:
      "Researchers spend significant time manually searching and reading papers. An AI assistant can accelerate literature review while maintaining academic rigor.",
    architectureDescription:
      "Documents are processed through a chunking pipeline, embedded using OpenAI models, and stored in Pinecone. Queries trigger semantic search, context retrieval, and LLM generation with source attribution.",
    screenshots: ["/chat-interface-ai-assistant.jpg", "/document-search-results-interface.jpg"],
    lessonsLearned: [
      "Chunking strategy significantly impacts retrieval quality",
      "Prompt engineering is iterative and domain-specific",
      "User feedback loops improve system relevance over time",
    ],
    futureGoals: [
      "Add support for multi-modal papers with figures",
      "Implement collaborative features for research teams",
      "Build citation graph visualization",
    ],
    links: {
      github: "https://github.com/yourusername/llm-assistant",
      live: "https://research-assistant.demo.com",
    },
    featured: true,
  },
  {
    id: "ml-pipeline",
    title: "AutoML Pipeline",
    shortDescription: "End-to-end automated machine learning platform for non-experts",
    fullDescription:
      "A user-friendly platform that automates the entire machine learning workflow from data ingestion to model deployment, making ML accessible to domain experts without coding experience.",
    thumbnail: "/machine-learning-pipeline-workflow-dashboard.jpg",
    techStack: ["Python", "Scikit-learn", "MLflow", "Docker", "Kubernetes", "React"],
    challengesSolved: [
      "Automated feature engineering for tabular data",
      "Implemented hyperparameter optimization with early stopping",
      "Built model versioning and A/B testing infrastructure",
    ],
    whatYouBuilt:
      "Core AutoML engine including automated preprocessing, model selection, hyperparameter tuning, and the deployment pipeline with monitoring dashboards.",
    problemStatement:
      "Many organizations have valuable data but lack ML expertise. AutoML platforms can democratize machine learning by handling technical complexity automatically.",
    architectureDescription:
      "The platform uses a microservices architecture with separate services for data processing, training, evaluation, and serving. Kubernetes handles orchestration and scaling.",
    screenshots: ["/automl-dashboard-data-visualization.jpg", "/model-training-progress-charts.jpg"],
    lessonsLearned: [
      "User experience is critical for ML tool adoption",
      "Reproducibility requires careful environment management",
      "Monitoring deployed models prevents silent failures",
    ],
    futureGoals: [
      "Add support for deep learning models",
      "Implement federated learning for privacy-sensitive data",
      "Build natural language interface for model queries",
    ],
    links: {
      github: "https://github.com/yourusername/automl-pipeline",
      devpost: "https://devpost.com/software/automl-pipeline",
    },
    featured: true,
  },
  {
    id: "speech-recognition",
    title: "Multilingual Speech Recognition",
    shortDescription: "Custom ASR system supporting 10+ languages with real-time transcription",
    fullDescription:
      "A speech recognition system designed for multilingual environments, capable of automatically detecting and transcribing speech in multiple languages simultaneously.",
    thumbnail: "/speech-recognition-waveform-visualization.jpg",
    techStack: ["Python", "Whisper", "PyTorch", "WebSocket", "FFmpeg", "Docker"],
    challengesSolved: [
      "Achieved 95% accuracy across 10 languages",
      "Implemented code-switching detection for multilingual speakers",
      "Optimized for real-time streaming with <500ms latency",
    ],
    whatYouBuilt:
      "Fine-tuned Whisper models for low-resource languages, built the streaming inference pipeline, and developed the WebSocket API for real-time applications.",
    problemStatement:
      "Existing ASR systems struggle with multilingual speakers and code-switching. A robust system should handle linguistic diversity seamlessly.",
    architectureDescription:
      "Audio streams through WebSocket connections, processed in chunks by the ASR model with language detection. Results stream back with word-level timestamps.",
    screenshots: ["/transcription-interface-with-timestamps.jpg", "/audio-waveform-spectrogram.jpg"],
    lessonsLearned: [
      "Data quality trumps data quantity for fine-tuning",
      "Streaming requires careful buffer management",
      "Evaluation metrics should reflect real-world usage",
    ],
    futureGoals: [
      "Add speaker diarization for meeting transcription",
      "Implement on-device inference for privacy",
      "Support additional low-resource languages",
    ],
    links: {
      github: "https://github.com/yourusername/multilingual-asr",
      live: "https://speech-demo.example.com",
    },
    featured: true,
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    shortDescription: "Hybrid recommendation system combining collaborative filtering and content-based approaches",
    fullDescription:
      "A sophisticated recommendation engine that personalizes content discovery using multiple algorithmic approaches, improving user engagement and satisfaction.",
    thumbnail: "/recommendation-system-network-graph.jpg",
    techStack: ["Python", "TensorFlow", "Redis", "PostgreSQL", "FastAPI", "Next.js"],
    challengesSolved: [
      "Cold-start problem solved with content-based fallbacks",
      "Real-time recommendations with <50ms response time",
      "A/B testing framework for algorithm comparison",
    ],
    whatYouBuilt:
      "Designed the hybrid architecture, implemented matrix factorization models, built the feature store, and created the serving infrastructure.",
    problemStatement:
      "Users struggle with content discovery in large catalogs. Personalized recommendations improve engagement while reducing decision fatigue.",
    architectureDescription:
      "User interactions feed into both collaborative filtering and content-based models. A ranking layer combines signals with business rules for final recommendations.",
    screenshots: ["/recommendation-interface-product-cards.jpg", "/analytics-dashboard-user-engagement.jpg"],
    lessonsLearned: [
      "Diversity in recommendations prevents filter bubbles",
      "Offline metrics don't always correlate with online performance",
      "Explainability builds user trust",
    ],
    futureGoals: [
      "Implement reinforcement learning for long-term optimization",
      "Add multi-objective optimization for business goals",
      "Build graph neural network models",
    ],
    links: {
      github: "https://github.com/yourusername/rec-engine",
    },
    featured: true,
  },
  {
    id: "anomaly-detection",
    title: "IoT Anomaly Detection",
    shortDescription: "Real-time anomaly detection for industrial IoT sensor networks",
    fullDescription:
      "An anomaly detection system designed for industrial applications, monitoring thousands of sensors in real-time to predict equipment failures before they occur.",
    thumbnail: "/iot-sensor-data-anomaly-detection-dashboard.jpg",
    techStack: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "PyTorch", "Docker"],
    challengesSolved: [
      "Processing 100k+ events per second with consistent latency",
      "Reduced false alarms by 60% using adaptive thresholds",
      "Predicted failures 24+ hours in advance",
    ],
    whatYouBuilt:
      "Stream processing pipeline, LSTM-based anomaly detection models, and real-time alerting system with automated escalation.",
    problemStatement:
      "Industrial equipment failures cause costly downtime. Predictive maintenance using ML can detect issues early and schedule repairs proactively.",
    architectureDescription:
      "Sensors publish to Kafka topics. Stream processors compute features in windows. ML models score anomalies. Alerts route through notification services.",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    lessonsLearned: [
      "Domain expertise is essential for feature engineering",
      "Labeled anomaly data is scarce; semi-supervised approaches help",
      "Explainable anomalies enable faster diagnosis",
    ],
    futureGoals: [
      "Implement root cause analysis automation",
      "Add support for multivariate correlation detection",
      "Build mobile app for on-site alerts",
    ],
    links: {
      github: "https://github.com/yourusername/iot-anomaly",
      paper: "https://arxiv.org/abs/example-iot",
    },
    featured: true,
  },
]

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Machine Learning Engineer",
    company: "Tech Company",
    companyUrl: "https://example.com",
    location: "San Francisco, CA",
    startDate: "2023",
    endDate: "Present",
    description:
      "Leading the development of production ML systems for computer vision and NLP applications. Architecting scalable training pipelines and deployment infrastructure.",
    techStack: ["Python", "PyTorch", "Kubernetes", "AWS", "MLflow"],
  },
  {
    id: "2",
    title: "Machine Learning Engineer",
    company: "AI Startup",
    companyUrl: "https://example.com",
    location: "Remote",
    startDate: "2021",
    endDate: "2023",
    description:
      "Built recommendation systems and search infrastructure serving millions of users. Implemented A/B testing frameworks and model monitoring solutions.",
    techStack: ["Python", "TensorFlow", "Redis", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Software Company",
    companyUrl: "https://example.com",
    location: "New York, NY",
    startDate: "2019",
    endDate: "2021",
    description:
      "Full-stack development with focus on data-intensive applications. Built APIs, data pipelines, and interactive dashboards for analytics products.",
    techStack: ["JavaScript", "React", "Node.js", "Python", "PostgreSQL"],
  },
]

export const skills: Skill[] = [
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "MLflow", "Weights & Biases"],
  },
  {
    category: "AI/NLP",
    items: ["LangChain", "OpenAI API", "RAG Systems", "Transformers", "Prompt Engineering", "Vector Databases"],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "YOLO", "Object Detection", "Image Segmentation", "TensorRT", "CUDA"],
  },
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Rust", "Go"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Terraform"],
  },
  {
    category: "Data Engineering",
    items: ["Apache Kafka", "Spark", "Airflow", "dbt", "PostgreSQL", "Redis"],
  },
]
