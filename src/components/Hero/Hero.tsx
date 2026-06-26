"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";



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
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 py-39 text-center lg:flex-row lg:gap-20 lg:text-left"
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
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-white/10 shadow-2xl lg:h-64 lg:w-64">
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                className="object-cover"
                preload
                sizes="(max-width: 1024px) 208px, 256px"
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
            className="mb-3 text-2xl font-semibold tracking-normal md:text-2xl"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-5 text-3xl font-bold tracking-tight md:text-5xl lg:text-5xl"
          >
            {hero.name}
          </motion.h1>


          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-2xl text-2xl font-medium leading-relaxed text-text-muted"
          >
            {hero.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="btn-secondary flex-1 justify-center md:flex-none"
            >
              <ArrowDown size={18} />
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn-secondary flex-1 justify-center md:flex-none"
            >
              <Send size={18} />
              Get In Touch
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
