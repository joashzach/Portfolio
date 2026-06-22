"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  const { about } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about">
      <h2 className="section-heading">About Me</h2>

      <motion.div
        ref={ref}
        className="glass-card p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="space-y-6">
          {about.description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-base font-light leading-[1.8] text-text-secondary md:text-[1.0625rem]"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
