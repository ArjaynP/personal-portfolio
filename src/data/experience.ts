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
      "Designed a material inventory management system to optimize resource allocation and reduce waste",
    highlights: [
      "Member of the Electronics and Telemetry Team, competing in Baja Racing competitions across North America",
      "Design and develop a material inventory management web app for all subsystems to request parts from in-stock items, local manufacturers, or online vendors",
      "Implement the front end in React and Tailwind CSS, including request forms, part search, and status views to streamline ordering and approval workflow",
      "Plan and build backend APIs in Node.js with a MySQL database to track inventory levels, suppliers, and purchase history, containerized with Docker for a consistent dev environment",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "SQL"],
  },
  {
    role: "Software Engineer",
    company: "Western Formula Racing",
    timeframe: "Sept 2025 — Present",
    summary:
      "Developed, reviewed, and tested the debug log console on the dashboard for real-time vehicle telemetry monitoring",
    highlights: [
      "Member of the Data Acquisition (DAQ) & Software Team, competing in Formula Racing competitions across North America",
      "Review and test C++ firmware for the driver dashboard, identifying bugs and improving code readability and maintainability",
      "Contribute to the front-end development of the team’s car data logger, building interfaces to display and organize run and sensor data for engineers",
      "Collaborate with other hardware teams to ensure dashboard and data-logging features integrate cleanly with the car’s existing systems",
    ],
    tech: ["C++", "Python", "MongoDB"],
  },
];
