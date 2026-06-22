"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Hero() {
  const { hero } = portfolioData;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center px-6 md:px-8"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 py-32 text-center lg:flex-row lg:gap-20 lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image */}
        <motion.div variants={itemVariants} className="shrink-0">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/10 shadow-2xl lg:h-56 lg:w-56">
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                className="object-cover"
                preload
                sizes="(max-width: 1024px) 176px, 224px"
              />
            </div>
            {/* Subtle glow rings */}
            <div className="absolute -inset-2 rounded-full border border-white/5" />
            <div className="absolute -inset-4 rounded-full border border-white/2" />
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Greeting + Name */}
          <motion.p
            variants={itemVariants}
            className="mb-2 text-base font-light tracking-wide text-text-muted md:text-lg"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {hero.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg font-light tracking-wide text-text-secondary md:text-xl"
          >
            {hero.title}
          </motion.p>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-xl text-base font-light leading-relaxed text-text-muted"
          >
            {hero.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="btn-primary"
            >
              <ArrowDown size={16} />
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn-secondary"
            >
              <Send size={16} />
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            {hero.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative rounded-full p-2.5 transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full border border-white/0 bg-white/0 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/5" />
                  <Icon
                    size={20}
                    className="relative text-text-muted transition-colors duration-300 group-hover:text-white"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
