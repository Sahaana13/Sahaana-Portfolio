export const profile = {
  name: "[YOUR NAME]",
  initials: "YN",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  title: "Computer Science Engineering Student | Software Developer | Frontend Developer",
  intro:
    "I explore software through thoughtful interfaces, practical projects, and persistent problem solving—turning ideas into reliable digital experiences.",
  about:
    "I’m a Computer Science Engineering student building a strong foundation in programming, frontend development, databases, and analytical thinking. I enjoy learning by making useful products and improving them one detail at a time.",
  focus: "Currently learning scalable React patterns, data structures, and modern software engineering workflows.",
  location: "[YOUR LOCATION]",
  resume: "/assets/resume.pdf",
  stats: [
    { value: "[X]+", label: "Projects" },
    { value: "[X]+", label: "Technologies" },
    { value: "[X]+", label: "Problems solved" },
    { value: "[X.XX]", label: "CGPA" },
  ],
};

export const skills = [
  { category: "Programming", items: [["Java", "Object-oriented problem solving", "Comfortable"], ["Python", "Scripting and data workflows", "Intermediate"], ["JavaScript", "Modern web programming", "Comfortable"]] },
  { category: "Frontend", items: [["HTML", "Semantic, accessible structure", "Comfortable"], ["CSS", "Responsive interfaces and motion", "Comfortable"], ["React", "Reusable component systems", "Intermediate"]] },
  { category: "Database", items: [["SQL", "Queries and relational thinking", "Intermediate"], ["MySQL", "Schema and data management", "Familiar"]] },
  { category: "Data / Analytics", items: [["Python", "Data preparation and analysis", "Intermediate"], ["Excel", "Analysis and reporting", "Familiar"], ["Analytics tools", "Exploring data-driven insights", "Currently Learning"]] },
  { category: "Tools", items: [["Git", "Version control workflows", "Intermediate"], ["GitHub", "Collaboration and project hosting", "Comfortable"], ["VS Code", "Daily development environment", "Comfortable"]] },
] as const;

export const projects = [
  { title: "[PROJECT TITLE 01]", description: "Add a concise explanation of the problem, your approach, and the result.", technologies: ["React", "JavaScript", "CSS"], image: "01", github: "[GITHUB PROJECT URL]", demo: "[LIVE DEMO URL]", category: "Web Development" },
  { title: "[PROJECT TITLE 02]", description: "Describe the most important functionality and the technical decisions behind it.", technologies: ["Java", "SQL"], image: "02", github: "[GITHUB PROJECT URL]", demo: "[LIVE DEMO URL]", category: "Java" },
  { title: "[PROJECT TITLE 03]", description: "Explain the dataset, analytical workflow, and useful insight produced by this project.", technologies: ["Python", "Excel"], image: "03", github: "[GITHUB PROJECT URL]", demo: "[LIVE DEMO URL]", category: "Data Analytics" },
] as const;

export const articles = [
  { title: "[ARTICLE TITLE 01]", description: "A short summary of the article and the practical idea readers will take away.", date: "[DATE]", readingTime: "[X] min read", category: "Development", url: "[ARTICLE URL]" },
  { title: "[ARTICLE TITLE 02]", description: "Add a clear description of the problem, lesson, or technology explored here.", date: "[DATE]", readingTime: "[X] min read", category: "Computer Science", url: "[ARTICLE URL]" },
  { title: "[ARTICLE TITLE 03]", description: "Share an approachable overview of the concepts covered in this piece.", date: "[DATE]", readingTime: "[X] min read", category: "Learning", url: "[ARTICLE URL]" },
] as const;

export const codingProfiles = [
  { platform: "GitHub", username: "[GITHUB USERNAME]", description: "Projects, experiments, and open-source work.", url: "[GITHUB URL]" },
  { platform: "LeetCode", username: "[LEETCODE USERNAME]", description: "Data structures and algorithm practice.", url: "[LEETCODE URL]" },
  { platform: "HackerRank", username: "[HACKERRANK USERNAME]", description: "Programming challenges and verified skills.", url: "[HACKERRANK URL]" },
  { platform: "CodeChef", username: "[CODECHEF USERNAME]", description: "Competitive programming practice.", url: "[CODECHEF URL]" },
  { platform: "GeeksforGeeks", username: "[GFG USERNAME]", description: "Problem solving and technical learning.", url: "[GEEKSFORGEEKS URL]" },
].filter((item) => Boolean(item.url));

export const socialLinks = [
  { label: "LinkedIn", url: "[LINKEDIN URL]" },
  { label: "GitHub", url: "[GITHUB URL]" },
  { label: "LeetCode", url: "[LEETCODE URL]" },
  { label: "HackerRank", url: "[HACKERRANK URL]" },
  { label: "Email", url: "mailto:[YOUR EMAIL]" },
];

export const navItems = ["Home", "About", "Skills", "Projects", "Articles", "Coding", "Resume", "Contact"] as const;