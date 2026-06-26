"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/Icons";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
};

export default function Contact() {
  const { contact, hero } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-heading">Get In Touch</h2>

        <motion.div
          ref={ref}
          className="glass-card mx-auto max-w-2xl px-8 py-7 md:px-11 md:py-7"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.p
            className="mb-10 text-base font-light leading-relaxed text-text-secondary md:text-[1.0625rem]"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {contact.message}
          </motion.p>

          <motion.a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} />
            Say Hello
          </motion.a>

          {/* Spacer */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          />

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {hero.socials.map((social, i) => {
              const Icon = socialIcons[social.platform];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative rounded-full p-3 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.7 + i * 0.07 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 rounded-full border border-white/0 bg-white/0 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/8" />
                  <Icon
                    size={22}
                    className="relative text-text-muted transition-colors duration-300 group-hover:text-white"
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
