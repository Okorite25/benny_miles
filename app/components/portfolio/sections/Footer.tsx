export default function Footer() {
  return (
    <footer className="px-5 py-10 md:px-8" style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 20%, transparent)" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="leading-tight text-center md:text-left">
          <div className="font-display tracking-widest">BENNY MILES CREATIVES</div>
          <div className="font-script text-sm" style={{ color: "var(--gold)" }}>...originality is certain</div>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-center md:text-left" style={{ color: "var(--gold)" }}>
          © {new Date().getFullYear()} Benny Miles Creatives. All rights reserved.
        </div>
      </div>
    </footer>
  );
}