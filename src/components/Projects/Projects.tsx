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
            className="glass-card group relative flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Project image */}
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                preload={index < 3}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Hover glow effect removed */}
              <div className="absolute inset-0 bg-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              {/* Project name */}
              <h3 className="mb-3 text-[1.35rem] font-medium tracking-wide text-white drop-shadow-sm">
                {project.name}
              </h3>

              {/* Tech stack chips */}
              <div className="mb-4 flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-light text-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mb-5 flex-1 text-[0.95rem] font-light leading-relaxed text-white/50">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-auto flex items-center justify-center gap-5 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Live Demo
                </a>
                <span className="h-4 w-px bg-white/10" />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <GithubIcon size={16} className="transition-transform duration-300 group-hover:scale-110" />
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
