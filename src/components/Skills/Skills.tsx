"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";

export default function Skills() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills">
      <h2 className="section-heading">Skills</h2>

      <div
        ref={ref}
        className="grid w-full gap-5 grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto"
      >
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            className="glass-card glass-card-hover flex flex-col text-left w-full"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + groupIndex * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Card Header */}
            <div className="px-6 pt-6 pb-4 border-b border-white/[0.06] flex items-center gap-3">
              <div className="h-4 w-px bg-white/25 rounded-full" />
              <h3 className="text-[0.95rem] font-medium tracking-wide text-white/90">
                {skillGroup.category}
              </h3>
            </div>

            {/* Pills */}
            <div className="p-6 flex flex-wrap gap-2">
              {skillGroup.tools.map((tool, toolIndex) => (
                <motion.span
                  key={tool}
                  className="rounded-full border border-white/8 bg-white/[0.04] px-3.5 py-1.5 text-xs font-light text-white/65 backdrop-blur-sm cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + groupIndex * 0.12 + toolIndex * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
