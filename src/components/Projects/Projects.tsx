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
        className="grid w-full max-w-[920px] grid-cols-1 gap-6 mx-auto justify-center sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="glass-card glass-card-hover group relative flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 300px"
                preload={index < 3}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-3">
              <h3 className="mb-2 text-[1rem] font-medium tracking-wide text-white drop-shadow-sm">
                {project.name}
              </h3>

              {/* Tech Stack */}
              <div className="mb-3 flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[0.63rem] font-light text-white/50 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mb-3 flex-1 text-[0.78rem] font-light leading-relaxed text-white/70">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-auto flex items-center justify-center gap-4 pt-1">
                {/* Live Demo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/live inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <span>Live Demo</span>

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                  />
                </a>

                <span className="h-3.5 w-px bg-white/10" />

                {/* Source */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/source inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <span>Source</span>

                  <GithubIcon
                    size={14}
                    className="transition-transform duration-300 group-hover/source:scale-110"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}