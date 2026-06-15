"use client";
import { useInView } from "./hooks/useinview";
import CustomCursor from "./components/portfolio/CustomCursor";
import Navbar from "./components/portfolio/NavBar";
import Hero from "./components/portfolio/sections/Hero";
import About from "./components/portfolio/sections/About";
import WhyMe from "./components/portfolio/sections/WhyMe";
import Skills from "./components/portfolio/sections/Skills";
import Projects from "./components/portfolio/sections/Projects";
import Reviews from "./components/portfolio/sections/Reviews";
import Contact from "./components/portfolio/sections/Contact";
import Footer from "./components/portfolio/sections/Footer";

export default function Page() {
  useInView();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full anim-pulse-bloom"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent), transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full anim-pulse-bloom"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--amber) 25%, transparent), transparent 70%)", filter: "blur(100px)", animationDelay: "1.5s" }}
        />
      </div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <WhyMe />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}