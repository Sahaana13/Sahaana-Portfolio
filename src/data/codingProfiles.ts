import { isProvided } from "./portfolio";

// Profiles appear on the site only after a real username and URL are filled in.
const allProfiles = [
  { platform: "GitHub", username: "[GITHUB USERNAME]", url: "[GITHUB URL]" },
  { platform: "LeetCode", username: "[LEETCODE USERNAME]", url: "[LEETCODE URL]" },
  { platform: "HackerRank", username: "[HACKERRANK USERNAME]", url: "[HACKERRANK URL]" },
  { platform: "CodeChef", username: "[CODECHEF USERNAME]", url: "[CODECHEF URL]" },
  { platform: "GeeksforGeeks", username: "[GFG USERNAME]", url: "[GEEKSFORGEEKS URL]" },
];

export const codingProfiles = allProfiles.filter((p) => isProvided(p.url) && isProvided(p.username));
