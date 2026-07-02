"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";

export default function Contact() {
  const { contact } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="contact">
      <h2 className="section-heading">Get In Touch</h2>

      <motion.p
        ref={ref}
        className="mb-10 max-w-xl text-base font-light leading-relaxed text-text-secondary md:text-[1.0625rem]"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contact.message}
      </motion.p>

      <motion.a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.35 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={18} />
        Say Hello
      </motion.a>
    </SectionWrapper>
  );
}
