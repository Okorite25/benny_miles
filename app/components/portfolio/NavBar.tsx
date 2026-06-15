"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../../data/portfolio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className="anim-nav fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: "color-mix(in oklab, var(--background) 78%, transparent)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center">
            <Image 
              src="/images/newlogo.png" 
              alt="Benny Miles Creatives" 
              width={150} 
              height={150} 
              className="object-contain"
              style={{ width: "auto" }}
            />
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.18em]">
              {NAV.map((n) => {
                const isActive = activeSection === n.id;
                const isHovered = hoveredId === n.id;
                return (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      onMouseEnter={() => setHoveredId(n.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="relative inline-block py-2 transition-[letter-spacing] duration-300 hover:tracking-[0.28em]"
                    >
                      {n.label}
                      <span
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left transition-all duration-300"
                        style={{
                          background: "var(--gold)",
                          transform: isActive || isHovered ? "scaleX(1)" : "scaleX(0)",
                          opacity: isActive ? 1 : isHovered ? 0.8 : 0,
                        }}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background/70" onClick={() => setMobileOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm px-7 py-8 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "color-mix(in oklab, var(--background) 90%, #3d1a00)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl tracking-widest" style={{ color: "var(--gold)" }}>MENU</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-10 space-y-5 text-lg uppercase tracking-[0.2em]">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-3 transition-all"
                  style={{
                    borderLeft: `2px solid ${activeSection === n.id ? "var(--gold)" : "transparent"}`,
                    color: activeSection === n.id ? "var(--gold)" : "inherit",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== n.id) {
                      (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "inherit";
                    }
                  }}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
            ...originality is certain
          </div>
        </aside>
      </div>
    </>
  );
}