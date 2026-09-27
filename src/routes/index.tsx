import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "[YOUR NAME] | Computer Science Student & Developer" },
      { name: "description", content: "Portfolio of [YOUR NAME], a Computer Science Engineering student and aspiring software developer." },
      { property: "og:title", content: "[YOUR NAME] | Computer Science Student & Developer" },
      { property: "og:description", content: "Explore software projects, technical skills, articles, coding profiles, and contact information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
