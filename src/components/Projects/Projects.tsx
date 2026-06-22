"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";

export default function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="projects">
      <h2 className="section-heading">Featured Projects</h2>

      <div
        ref={ref}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="glass-card group relative flex flex-col overflow-hidden transition-all duration-500 hover:border-white/15"
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            {/* Project image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                preload={index < 3}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/[0.03]" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              {/* Project name */}
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {project.name}
              </h3>

              {/* Tech stack chips */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-light text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-text-muted">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light text-text-secondary transition-all duration-300 hover:text-white"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <span className="h-3 w-px bg-white/10" />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light text-text-secondary transition-all duration-300 hover:text-white"
                >
                  <GithubIcon size={15} />
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
