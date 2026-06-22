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

      <div ref={ref} className="space-y-10">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + groupIndex * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-text-muted">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.tools.map((tool, toolIndex) => (
                <motion.span
                  key={tool}
                  className="glass-pill cursor-default"
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
