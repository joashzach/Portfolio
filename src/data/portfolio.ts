import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hey there!  I am",
    name: "Joash Zachariah Sojan",
    intro:
      "I'm a full-stack developer who loves building, learning and experimenting with technologies.",
    profileImage: "/images/profile.png",
    socials: [
      {
        platform: "github",
        url: "https://github.com/joashzach",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/joash-zachariah-sojan-349518380/",
        label: "LinkedIn",
      },
      {
        platform: "twitter",
        url: "https://x.com/joashzach",
        label: "Twitter / X",
      },
      {
        platform: "instagram",
        url: "https://instagram.com/joashzach",
        label: "Instagram",
      },
      {
        platform: "leetcode",
        url: "https://leetcode.com/joashzach",
        label: "LeetCode",
      },
    ],
  },
  about: {
    description: [
      "I build full-stack web applications with a focus on backend engineering. Using technologies like Node.js, Express, MongoDB etc. I enjoy developing scalable APIs, designing efficient data models, and creating applications that are clean, maintainable, and user-focused.",
      "Beyond building features, I'm passionate about understanding the principles behind great software—from system design and application architecture to performance optimization and writing code that's easy to extend. I enjoy breaking down complex problems into simple, reliable solutions and building software that's designed to evolve as it grows.",
    ],
  },

  skills: [
    {
      category: "Languages",
      tools: [
        "Python",
        "C++",
        "Javascript",
      ],
    },
    {
      category: "Frontend",
      tools: [
        "HTML",
        "CSS",
        "React.js"
      ],
    },
    {
      category: "Backend",
      tools: ["Node.js", "Express.js", "Mongoose", "REST APIs"],
    },
    {
      category: "Database & Deployment",
      tools: ["PostgreSQL", "MongoDB", "Vercel", "Render", "Git", "GitHub"],
    },
  ],

  projects: [
    {
      name: "Subora",
      image: "/images/project-subora.png",
      techStack: ["CSS", "TypeScript", "Javascript", "PLpgSQL"],
      description:
        "A modern subscription tracking web app that helps users monitor, analyze, and optimize recurring expenses. Designed with a clean, intuitive interface that emphasizes simplicity, clarity, and actionable financial insights.",
      liveUrl: "https://subora.vercel.app",
      githubUrl: "https://github.com/joashzach/Subora",
    },
    {
      name: "TypeSprint",
      image: "/images/project-typesprint.png",
      techStack: ["TypeScript", "CSS"],
      description:
        "A fast, modern typing speed test platform built to help users develop speed and accuracy through real-time performance tracking. Featuring a clean, distraction-free interface, detailed results, and mistake analysis that make it easy to identify weaknesses and improve over time.",
      liveUrl: "https://type-sprint-one.vercel.app",
      githubUrl: "https://github.com/joashzach/TypeSprint",
    },

  ],

  contact: {
    email: "joashzachh7@gmail.com",
    message:
      "I'm always open to discussing new projects and good opportunities. Let's build something great together.",
  },
};
