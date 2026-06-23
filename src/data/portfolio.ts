import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hey there, I am",
    name: "Joash Zachariah Sojan",
    title: " ",
    intro:
      "Hey, I'm a full-stack developer in the making who loves building websites and experimenting.",
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
    ],
  },

  about: {
    description: [
      "I'm an aspiring full-stack developer with a strong foundation in frontend development and a passion for building modern web applications. Currently, I'm expanding my skills through the MERN stack, focusing on creating scalable, user-friendly experiences while continuously learning and improving as a developer.",
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
      category: "Database & DevOps",
      tools: ["PostgreSQL", "MongoDB", "Vercel", "Git", "GitHub"],
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
