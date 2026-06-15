export default function Skills() {
  const SKILLS = [
    { name: "Corel Draw", src: "/images/coreldraw.png" },
    { name: "Photoshop", src: "/images/photoshop.png" },
    { name: "Adobe Illustrator", src: "/images/adobeillustrator.png" },
    { name: "Canva", src: "/images/canva.png" },
  ];

  return (
    <section id="skills" data-inview="false" className="relative px-5 py-28 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>
          Tools & Skills
        </div>
        <h2 className="font-display text-4xl md:text-6xl mb-12">
          What I Work With.
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "color-mix(in oklab, var(--background) 60%, #3d1a00)",
                border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
              }}
            >
              <img
                src={s.src}
                alt={s.name}
                className="h-16 w-16 object-contain"
              />
              <div
                className="font-display text-lg tracking-wide"
                style={{ color: "var(--gold)" }}
              >
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}