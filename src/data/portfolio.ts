// Central personal info. Replace any value in [BRACKETS] with your real details.
export const profile = {
  name: "Sahaana M",
  initials: "SM",
  email: "[YOUR EMAIL]",
  title: "Computer Science Engineering Student",
  roles: "Java Full Stack Developer | Salesforce Developer",
  headline: "Computer Science Engineering Student | Java Full Stack Developer | Salesforce Developer",
  tagline: "Building practical applications with Java, modern frontend technologies, SQL, and Salesforce CRM concepts.",
  about:
    "I am a Computer Science Engineering student focused on Java Full Stack Development and Salesforce Development. I have knowledge of Java, HTML, CSS, JavaScript, React.js, SQL, Excel, Git, and Salesforce CRM concepts.",
  focus: "I enjoy building practical applications, exploring new technologies, and continuously improving my development skills.",
  location: "[YOUR LOCATION]",
  resume: "/assets/resume.pdf",
};

/** A value counts as "provided" once its [PLACEHOLDER] brackets are replaced. */
export const isProvided = (value?: string) => Boolean(value && !value.includes("[") && value !== "mailto:");

export const careerFocus = [
  { title: "Java Full Stack Developer", tone: "cyan", summary: "Building end-to-end web applications with Java, modern frontend tools, and relational databases.", items: ["Java", "HTML", "CSS", "JavaScript", "React.js", "SQL", "Git"] },
  { title: "Salesforce Developer", tone: "violet", summary: "Working with Salesforce CRM concepts, automation, reporting, and access control.", items: ["Salesforce CRM", "Flow Builder", "Reports and Dashboards", "Role-Based Access"] },
] as const;

export const aboutCards = [
  { title: "Education", text: "Computer Science Engineering student building strong programming and problem-solving foundations." },
  { title: "Java Full Stack", text: "Java programming, SQL databases, Git, and practical full stack project development." },
  { title: "Salesforce", text: "Salesforce CRM, Flow Builder, reports, dashboards, and role-based access concepts." },
  { title: "Frontend Development", text: "HTML, CSS, JavaScript, and React.js for clean, responsive interfaces." },
] as const;

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Articles", id: "articles" },
  { label: "Coding Profiles", id: "coding" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
] as const;
