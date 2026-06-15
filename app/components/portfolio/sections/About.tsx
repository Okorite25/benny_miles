"use client";
import { useState, useEffect, useRef } from "react";

const TYPED_TEXT = "I'm a creative and detail-driven graphic designer with a passion for visual storytelling and brand identity. I help individuals, startups and businesses communicate clearly - across digital and print, brand systems, and the small details that make work feel premium.";

export default function About() {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      i++;
      setDisplayed(TYPED_TEXT.slice(0, i));
      if (i >= TYPED_TEXT.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={sectionRef} id="about" data-inview="false" className="relative px-5 py-28 md:px-8">
      <div
        className="mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-14"
        style={{
          border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
          background: "color-mix(in oklab, var(--background) 60%, #3d1a00)",
          boxShadow: "0 30px 80px -40px rgba(212,144,10,0.35)",
        }}
      >
        <div className="mb-4 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>About Me</div>
        <h2 className="font-display text-3xl leading-tight md:text-5xl">
          {"I turn ideas into visuals that connect, convert and leave a lasting impression."
            .split(" ")
            .map((w, i) => (
              <span key={i} data-anim="word" style={{ transitionDelay: `${i * 0.07}s` }} className="inline-block mr-[0.25em]">
                {w}
              </span>
            ))}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl md:text-lg" style={{ color: "color-mix(in oklab, var(--gold) 60%, #ffffff)", minHeight: "6rem" }}>
          {displayed}
          {displayed.length < TYPED_TEXT.length && started && (
            <span className="inline-block w-[2px] h-[1em] ml-[1px] align-middle animate-pulse" style={{ background: "var(--gold)" }} />
          )}
        </p>
      </div>
    </section>
  );
}