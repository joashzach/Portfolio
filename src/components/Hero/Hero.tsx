"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, LeetcodeIcon } from "@/components/Icons";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  leetcode: LeetcodeIcon,
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
        className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-5 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image */}
        <motion.div variants={itemVariants} className="shrink-0">
          <div className="relative">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10 shadow-2xl md:h-36 md:w-36 lg:h-44 lg:w-44">
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 144px, 176px"
              />
            </div>
            {/* Subtle glow rings */}
            <div className="absolute -inset-2 rounded-full border border-white/5" />
            <div className="absolute -inset-4 rounded-full border border-white/2" />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col items-center">
          {/* Greeting + Name */}
          <motion.p
            variants={itemVariants}
            className="mb-2 text-xl font-semibold tracking-normal md:text-xl"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-4xl"
          >
            {hero.name}
          </motion.h1>


          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mb-6 max-w-2xl text-base md:text-xl font-light leading-relaxed text-text-muted"
          >
            {hero.intro}
          </motion.p>

          {/* CTA Buttons */}
          <div className="mb-4"></div>

          {/* Social Links under CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 w-full justify-center"
          >
            {hero.socials.map((social) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full p-3"
                >
                  <Icon
                    size={18}
                    className="text-text-muted"
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
