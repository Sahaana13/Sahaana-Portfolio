import { isProvided, profile } from "./portfolio";

// Links appear only after real URLs are filled in.
const allLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sahaana13" },
  { label: "GitHub", url: "https://github.com/Sahaana13/Salesforce-Project/upload/main" },
  { label: "LeetCode", url: "[LEETCODE URL]" },
  { label: "HackerRank", url: "[HACKERRANK URL]" },
  { label: "Email", url: isProvided(profile.email) ? `mailto:${profile.email}` : "" },
];

export const socialLinks = allLinks.filter((l) => isProvided(l.url));
