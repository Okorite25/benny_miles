"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATS, PROJECTS, Cat } from "../../../data/portfolio";

function ProjectsInView({ dep }: { dep: string }) {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>(
      `#projects [data-inview="false"]`
    );

    if (grid) {
      requestAnimationFrame(() =>
        grid.setAttribute("data-inview", "true")
      );
    }
  }, [dep]);

  return null;
}

export default function Projects() {
  const [activeCat, setActiveCat] = useState<Cat>("brand");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const update = () =>
      setPageSize(window.innerWidth < 768 ? 1 : 3);

    update();

    window.addEventListener("resize", update);

    return () =>
      window.removeEventListener("resize", update);
  }, []);

  const allTiles = PROJECTS[activeCat];
  const totalPages = Math.ceil(allTiles.length / pageSize);

  const tiles = allTiles.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  useEffect(() => {
    setPage(0);
  }, [activeCat, pageSize]);

  return (
    <section
      id="projects"
      data-inview="false"
      className="relative px-5 py-28 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div
            className="mb-3 text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--gold)" }}
          >
            Projects
          </div>

          <h2 className="section-heading overflow-hidden font-display text-4xl md:text-6xl">
            <span data-anim="reveal">Selected work.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="relative mx-auto mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-3"
          style={{
            borderBottom:
              "1px solid color-mix(in oklab, var(--gold) 20%, transparent)",
          }}
        >
          {CATS.map((c) => {
            const active = c.id === activeCat;

            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className="relative pb-3 font-display text-base tracking-[0.2em] uppercase transition-colors md:text-lg"
                style={{
                  color: active ? "var(--gold)" : "inherit",
                }}
              >
                {c.label}

                <span
                  className="absolute -bottom-[2px] left-0 h-[3px] w-full origin-left transition-transform duration-500"
                  style={{
                    background: "var(--gold)",
                    transform: active
                      ? "scaleX(1)"
                      : "scaleX(0)",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={`${activeCat}-${page}`}
          data-inview="false"
          className="flex flex-wrap justify-center gap-5"
        >
          {tiles.map((t, i) => (
            <div
              key={t.title}
              data-anim="tile"
              style={{
                transitionDelay: `${i * 0.08}s`,
                border:
                  "1px solid color-mix(in oklab, var(--gold) 20%, transparent)",
                width:
                  pageSize === 1
                    ? "100%"
                    : "calc(33.333% - 14px)",
              }}
              className="group relative aspect-[3/4] min-w-[280px] overflow-hidden rounded-2xl bg-surface"
            >
              {/* Image */}
              <img
                src={t.url}
                alt={t.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() =>
                setPage((p) => Math.max(0, p - 1))
              }
              disabled={page === 0}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all disabled:opacity-30"
              style={{
                borderColor: "var(--gold)",
                color: "#ffffff",
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span
              className="text-sm"
              style={{ color: "#ffffff" }}
            >
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() =>
                setPage((p) =>
                  Math.min(totalPages - 1, p + 1)
                )
              }
              disabled={page === totalPages - 1}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all disabled:opacity-30"
              style={{
                borderColor: "var(--gold)",
                color: "#ffffff",
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <ProjectsInView dep={activeCat} />
    </section>
  );
}