import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/6 px-6 py-8 text-center">
        <p className="text-xs font-light tracking-wide text-text-muted">
          © {new Date().getFullYear()} {portfolioData.hero.name}. Crafted with precision.
        </p>
      </footer>
    </>
  );
}
