"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      let currentActive = "hero"; // Default to hero

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element crosses the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = id;
          }
        }
      });

      // Special case: if we are at the very bottom, highlight the last section
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        currentActive = sections[sections.length - 1];
      }

      setActiveSection(currentActive);
    };

    // Run once on mount to set initial section
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-[rgb(0,1,10)] border-b border-white/10"
      >
        <div className="flex w-full items-center justify-center px-4 py-4 md:px-6">
          {/* Nav links */}
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-[0.7rem] sm:text-[0.8rem] md:text-sm font-light tracking-wide transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
