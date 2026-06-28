import ezgo from "./assets/images/ezgo.png";
import clearslope from "./assets/images/clearslope.png";
import studyflow from "./assets/images/studyflow.png";
import datathon from "./assets/images/datathon.png";
import hospital from "./assets/images/hospital.png";
import deepreflect from "./assets/images/deepreflect.png";
import skillrank from "./assets/images/skillrank.png";
import waveform from "./assets/images/waveform.png";

export type Category = "uiux" | "data" | "dev";

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Project {
  category: Category;
  tag: string;
  title: string;
  contributions: string[];
  role: string;
  image: string;
  alt: string;
  links: ProjectLink[];
}

export interface Experience {
  role: string;
  org: string;
  date: string;
  points: string[];
}

export const skills = [
  { group: "Design", items: ["Figma", "User research", "Wireframing", "Prototyping"] },
  { group: "Data", items: ["Python", "R", "SQL", "Tableau", "QGIS"] },
  { group: "Development", items: ["JavaScript", "React", "HTML / CSS", "C++", "Java"] },
];

export interface CourseworkGroup {
  group: string;
  items: string[];
}

export const education = {
  date: "Sep 2023 – Jun 2027 (Expected)",
  degree: "B.S. Informatics & B.S. Applied Mathematics (Data Science)",
  school: "University of Washington, Seattle",
  gpa: "GPA 3.86 / 4.0",
  summary:
    "A double degree that trained me to approach problems at the intersection of human-centered design, data science, and engineering.",
  coursework: [
    {
      group: "Design & Systems",
      items: [
        "Human-Computer Interaction",
        "Web Development",
        "Data Visualization",
        "Database Systems",
      ],
    },
    {
      group: "Data & Modeling",
      items: [
        "Machine Learning",
        "Statistical Modeling",
        "Computational Finance Risk Management",
        "Data Science",
      ],
    },
  ] as CourseworkGroup[],
};

export const experiences: Experience[] = [
  {
    role: "Research Assistant — Social Media Algorithm Study",
    org: "University of Washington · Seattle, WA",
    date: "Sep 2025 – Present",
    points: [
      "Built Python + LLM workflows to classify 50k+ community notes and multilingual social data.",
      "Applied NLP, topic modeling, and clustering to surface engagement patterns at scale.",
    ],
  },
  {
    role: "Undergraduate TA — Data Science Foundations",
    org: "University of Washington iSchool · Seattle, WA",
    date: "Sep 2025 – Present",
    points: [
      "Led weekly labs and office hours for 150+ students on statistics, visualization, and reproducible R workflows.",
      "Coached students on interpreting and communicating analytical results.",
    ],
  },
  {
    role: "Design Mentor — Fearless Tech More",
    org: "WINFO, University of Washington · Seattle, WA",
    date: "Oct 2025",
    points: [
      "Mentored students through user-centered design and Figma prototyping.",
      "Helped non-technical learners turn ideas into structured, interactive prototypes.",
    ],
  },
  {
    role: "Design Assistant — WordPlay (Accessible Programming UI)",
    org: "University of Washington · Seattle, WA",
    date: "Jan 2025 – Mar 2025",
    points: [
      "Identified usability and accessibility issues in a visual character editor and designed a \"Path Editing Mode\" for precise point selection, modification, and navigation.",
      "Built accessible interaction flows supporting both pointer and keyboard users, improving overall usability.",
    ],
  },
  {
    role: "Marketing & Data Analyst Intern",
    org: "Ascendas Service Co., Ltd · Suzhou, China",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Built KPI dashboards (occupancy, turnover, tenant mix) in SQL, R, and Excel to guide leasing decisions.",
      "Cleaned and analyzed operational and tenant datasets, presenting findings through visual reports.",
    ],
  },
];

export const projects: Project[] = [
  {
    category: "uiux",
    tag: "UX/UI",
    title: "EZGo — Smart Travel Planner",
    contributions: [
      "Designed EZGo, a smart travel-planning app that helps first-time international travelers plan, prepare, and navigate their trips.",
      "Created end-to-end user flows and high-fidelity screens in Figma — onboarding, trip planning, a preparation checklist, and in-trip tools.",
    ],
    role: "Role: UX research & product design · Figma",
    image: ezgo,
    alt: "EZgo travel-planner app — onboarding, trip map, prep checklist, and in-trip tools shown across four phones",
    links: [
      {
        label: "Figma prototype →",
        href: "https://www.figma.com/design/TShqusJ9Y7PttQuH76YMWQ/Protothon",
        primary: true,
      },
    ],
  },
  {
    category: "uiux",
    tag: "UX/UI",
    title: "ClearSlope — Ski Navigation App",
    contributions: [
      "Designed a responsive web experience to support navigation and decision-making in complex environments.",
      "Structured user flows, visual hierarchy, and information architecture to improve usability and engagement.",
      "Created high-fidelity prototypes in Figma and implemented designs using HTML, CSS, and JavaScript.",
    ],
    role: "Role: Product & UX design · Figma, HTML, CSS, JavaScript",
    image: clearslope,
    alt: "ClearSlope ski navigation app — case study landing page",
    links: [
      { label: "Case study →", href: "https://yiqianna.github.io/ClearSlope/", primary: true },
      { label: "GitHub", href: "https://github.com/yiqianna/ClearSlope" },
    ],
  },
  {
    category: "uiux",
    tag: "UX/UI",
    title: "StudyFlow — Study Planning App",
    contributions: [
      "Built a planning tool to organize tasks and improve workflow efficiency.",
      "Designed responsive interfaces and intuitive layouts to support task prioritization and navigation.",
    ],
    role: "Role: UX & interaction design · Figma, HTML, CSS, JavaScript",
    image: studyflow,
    alt: "StudyFlow study-planning app — case study landing page",
    links: [
      { label: "Case study →", href: "https://yiqianna.github.io/StudyFlow/", primary: true },
      { label: "GitHub", href: "https://github.com/yiqianna/StudyFlow" },
    ],
  },
  {
    category: "data",
    tag: "Data",
    title: "Access to a Livable Planet",
    contributions: [
      "Integrated county-level air quality and public health datasets to analyze environmental risk patterns across the U.S.",
      "Built a data pipeline to integrate and standardize multi-source datasets for analysis.",
      "Developed Tableau dashboards visualizing spatial and temporal trends affecting vulnerable communities.",
    ],
    role: "Role: Data analysis & visualization · Python, Tableau, QGIS",
    image: datathon,
    alt: "Access to a Livable Planet — datathon project landing page",
    links: [
      { label: "Project website →", href: "https://runa-1117.github.io/datathon-2026/", primary: true },
      {
        label: "Tableau",
        href: "https://public.tableau.com/app/profile/anna.huang8759/viz/Datathon2026_17705177818560/Dashboard3",
      },
    ],
  },
  {
    category: "data",
    tag: "Data",
    title: "Hospital Cost Visualization",
    contributions: [
      "Cleaned and integrated hospital cost and geographic datasets using SQL to analyze regional healthcare charges and severity trends.",
      "Designed normalized database schemas and developed Tableau dashboards to visualize healthcare cost patterns across regions.",
    ],
    role: "Role: Data analyst · SQL, Tableau",
    image: hospital,
    alt: "Tableau dashboard mapping hospital locations and illness severity",
    links: [
      {
        label: "View dashboard →",
        href: "https://public.tableau.com/app/profile/anna.huang8759/viz/datathon2025/MappingOnSeverityDistribution",
        primary: true,
      },
    ],
  },
  {
    category: "dev",
    tag: "Development",
    title: "DeepReflect",
    contributions: [
      "Built a full-stack AI platform using Python, FastAPI, React, and SQLite to analyze AI conversation histories.",
      "Engineered an LLM-powered retrieval pipeline with resilient JSON parsing, multi-candidate retry, and persistent storage.",
      "Designed interactive knowledge graphs and AI-generated study materials from conversation data.",
    ],
    role: "Role: Builder · Python, FastAPI, React, LLMs",
    image: deepreflect,
    alt: "DeepReflect dashboard — learning-analytics overview",
    links: [{ label: "View on GitHub →", href: "https://github.com/Marc0Guo/DeepReflect", primary: true }],
  },
  {
    category: "dev",
    tag: "Development",
    title: "SkillRank",
    contributions: [
      "Built a hybrid retrieval system combining vector search and semantic embeddings to recommend AI tools.",
      "Developed LLM-assisted retrieval pipelines using query expansion and ranking algorithms.",
      "Improved recommendation accuracy by aligning AI outputs with user intent and search behavior.",
    ],
    role: "Role: Developer · Python, FastAPI, Next.js, Qdrant, Ollama",
    image: skillrank,
    alt: "SkillRank — natural-language AI skill search interface",
    links: [{ label: "View on GitHub →", href: "https://github.com/dominionism/Seeker", primary: true }],
  },
  {
    category: "dev",
    tag: "Development",
    title: "Waveform — Music Search App",
    contributions: [
      "Built a web application to retrieve and display external data using the iTunes Search API.",
      "Structured data handling and asynchronous workflows to improve application responsiveness.",
      "Designed data flow logic to ensure reliable and efficient data processing.",
    ],
    role: "Role: Developer · React, Firebase, JavaScript, HTML, CSS",
    image: waveform,
    alt: "Waveform music search app — landing page",
    links: [
      { label: "Live demo →", href: "https://musicsearch-1305b.web.app", primary: true },
      { label: "GitHub", href: "https://github.com/yiqianna/WaveForm" },
    ],
  },
];
