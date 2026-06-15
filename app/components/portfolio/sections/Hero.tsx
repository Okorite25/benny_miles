"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Bokeh from "../../../components/portfolio/Bokeh";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 50%, color-mix(in oklab, var(--gold) 28%, transparent), transparent 60%), radial-gradient(40% 40% at 10% 20%, color-mix(in oklab, var(--amber) 18%, transparent), transparent 60%)",
        }}
      />
      <Bokeh />

      <div className="relative mx-auto grid max-w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Left text */}
        <div className="relative z-10 px-5 py-12 md:px-12 lg:py-20">
          <div
            className="font-display leading-[0.85] tracking-tight text-foreground"
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              animation: "bounceName 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
            }}
          >
            BENNY
          </div>
          <div
            className="font-display leading-[0.85] tracking-tight text-foreground"
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              animation: "bounceName 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
              animationDelay: ".15s",
            }}
          >
            MILES
          </div>

          <div
            className="font-display text-3xl tracking-[0.5em] md:text-5xl"
            style={{
              color: "var(--gold)",
              animation: "slideUp 0.8s ease both",
              animationDelay: "0.8s",
            }}
          >
            CREATIVES
          </div>

          <p
            className="mt-6 max-w-md text-base md:text-lg"
            style={{
              color: "color-mix(in oklab, var(--gold) 45%, #ffffff)",
              animation: "slideUp 0.8s ease both",
              animationDelay: "1.1s",
            }}
          >
            Graphic designer turning ideas into visuals that connect, convert and leave a lasting impression.
          </p>

          <a
            href="#projects"
            className="group relative mt-8 inline-flex items-center gap-3 border-2 px-7 py-4 font-display text-lg tracking-[0.3em]"
            style={{
              borderColor: "var(--gold)",
              color: "#ffffff",
              animation: "slideUp 0.8s ease both",
              animationDelay: "1.5s",
            }}
          >
            SEE MY WORK
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right image */}
        <div className="relative h-[500px] w-full md:h-[650px] lg:h-screen">
          {/* Bloom */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 55%, transparent) 0%, color-mix(in oklab, var(--amber) 25%, transparent) 35%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Animated wrapper */}
          <div
            className="absolute inset-0"
            style={{
              animation: "bounceRight 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
              animationDelay: "0.3s",
            }}
          >
            <Image
              src="/images/pic.png"
              alt="Benny Miles, graphic designer"
              fill
              loading="eager"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              style={{
                filter: "drop-shadow(0 0 40px color-mix(in oklab, var(--gold) 50%, transparent))",
                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>

          {/* Floating script badge
          <div
            className="absolute top-8 right-4 z-20 rotate-[-8deg] rounded-full px-5 py-3 font-script text-2xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(61, 26, 0, 0.85), rgba(42, 16, 0, 0.85))",
              border: "1px solid rgba(212, 144, 10, 0.3)",
              backdropFilter: "blur(8px)",
              color: "var(--amber)",
              animation: "slideUp 0.8s ease both",
              animationDelay: "1.4s",
            }}
          >
            ...originality is certain
          </div> */}
        </div>
      </div>

      {/* Gold divider line */}
      <div className="relative mx-auto mt-12 max-w-7xl px-5 md:px-8">
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}