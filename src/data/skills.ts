export const skillGroups = [
  {
    track: "Java Full Stack Development",
    tone: "cyan",
    categories: [
      { name: "Programming", items: ["Java", "JavaScript"] },
      { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
      { name: "Database", items: ["SQL"] },
      { name: "Version Control", items: ["Git"] },
      { name: "Additional", items: ["Excel"] },
    ],
  },
] as const;

export const salesforceSkills = [
  { name: "Salesforce CRM", description: "Understanding of Salesforce CRM and core platform concepts." },
  { name: "Flow Builder", description: "Understanding of building and managing Salesforce flows using Flow Builder." },
  { name: "Reports and Dashboards", description: "Understanding of creating reports and dashboards for organizing and visualizing business data." },
  { name: "Role-Based Access", description: "Understanding of Salesforce roles and access-control concepts." },
] as const;
