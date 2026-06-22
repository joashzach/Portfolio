export interface Social {
  platform: "github" | "linkedin" | "twitter" | "instagram";
  url: string;
  label: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  intro: string;
  profileImage: string;
  socials: Social[];
}

export interface AboutData {
  description: string[];
}

export interface Skill {
  category: string;
  tools: string[];
}

export interface Project {
  name: string;
  image: string;
  techStack: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
}

export interface ContactData {
  email: string;
  message: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: Skill[];
  projects: Project[];
  contact: ContactData;
}

export interface SiteConfig {
  backgroundImage: string;
  siteTitle: string;
  siteDescription: string;
}
