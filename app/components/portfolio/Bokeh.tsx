"use client";
import { useState, useEffect } from "react";

type Dot = {
  left: number;
  size: number;
  delay: number;
  dur: number;
};

export default function Bokeh() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        size: 4 + Math.random() * 6,
        delay: Math.random() * 10,
        dur: 12 + Math.random() * 10,
      }))
    );
  }, []);

  if (dots.length === 0) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background: "var(--gold)",
            boxShadow: "0 0 12px var(--gold)",
            animation: `floatBokeh ${d.dur}s linear ${d.delay}s infinite`,
          }}
          className="absolute bottom-0 rounded-full"
        />
      ))}
    </div>
  );
}