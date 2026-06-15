import { Quote } from "lucide-react";
import { REVIEWS } from "../../../data/portfolio";

export default function Reviews() {
  return (
    <section
      id="reviews"
      data-inview="false"
      className="relative px-5 py-28 md:px-8"
      style={{ background: "color-mix(in oklab, var(--background) 92%, black)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>Reviews</div>
          <h2 className="overflow-hidden font-display text-4xl md:text-6xl">
            <span data-anim="reveal">Kind words from clients.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.who}
              data-anim="rise"
              style={{
                transitionDelay: `${i * 0.15}s`,
                background: "color-mix(in oklab, var(--background) 60%, #3d1a00)",
                border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
              }}
              className="relative rounded-2xl p-7 shadow-[0_20px_60px_-30px_rgba(212,144,10,0.6)]"
            >
              <div
                className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: "var(--gold)" }}
              >
                <Quote className="h-4 w-4 rotate-180" style={{ color: "var(--background)" }} />
              </div>
              <blockquote className="text-base leading-relaxed text-foreground md:text-lg">
                &ldquo;{r.q}&rdquo;
              </blockquote>
              <figcaption
                className="mt-6 pt-4 text-sm uppercase tracking-[0.25em]"
                style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)", color: "var(--gold)" }}
              >
                {r.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}