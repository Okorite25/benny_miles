import { WHY } from "../../../data/portfolio";

export default function WhyMe() {
  return (
    <section id="why" data-inview="false" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>Why Me</div>
          <h2 className="section-heading overflow-hidden font-display text-4xl md:text-6xl">
            <span data-anim="reveal">Five reasons to work together.</span>
          </h2>
        </div>

        <ul className="space-y-4">
          {WHY.map((w, i) => (
            <li
              key={w.t}
              style={{ transitionDelay: `${i * 0.12}s`, borderLeft: "4px solid var(--gold)", background: "color-mix(in oklab, var(--background) 60%, #3d1a00)" }}
              className="relative flex items-start gap-5 rounded-r-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:brightness-125 cursor-pointer"
            >
              <div className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wide text-foreground md:text-2xl">{w.t}</h3>
                <p className="mt-1 text-sm md:text-base" style={{ color: "color-mix(in oklab, var(--gold) 55%, #ffffff)" }}>{w.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}