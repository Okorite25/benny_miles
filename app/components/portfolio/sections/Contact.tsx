import React from "react";
import { ArrowRight, Phone, MessageCircle, Mail, type LucideIcon } from "lucide-react";

// function InstagramIcon({ className }: { className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//     </svg>
//   );
// }

type ContactItem =
  | { type: "lucide"; Icon: LucideIcon; label: string; value: string; href: string }
  | { type: "svg"; Icon: ({ className }: { className?: string }) => React.ReactElement; label: string; value: string; href: string };

const CONTACTS: ContactItem[] = [
  { type: "lucide", Icon: MessageCircle, label: "WhatsApp", value: "+234 813 3377 928", href: "https://wa.me/2348133377928" },
  // { type: "svg", Icon: InstagramIcon, label: "Instagram", value: "bennymiles.creative", href: "https://instagram.com/bennymiles.creative" },
  { type: "lucide", Icon: Mail, label: "Email", value: "Bennymilescreative@gmail.com", href: "mailto:Bennymilescreative@gmail.com" },
  { type: "lucide", Icon: Phone, label: "Pinterest", value: "BennyMilesCreative", href: "https://pinterest.com/BennyMilesCreative" },
];

export default function Contact() {
  return (
    <section id="contact" data-inview="false" className="relative px-5 py-28 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>Reach Me</div>
        <h2 className="overflow-hidden font-display text-4xl md:text-6xl">
          <span data-anim="reveal">Let&apos;s make something original.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl" style={{ color: "color-mix(in oklab, var(--gold) 60%, #ffffff)" }}>
          You can reach me on any of the platforms below - I usually reply within a few hours.
        </p>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4">
          {CONTACTS.map((c, i) => (
            <li key={c.label} data-anim="rise" style={{ transitionDelay: `${i * 0.1}s` }}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl p-3 md:p-6 transition-all hover:-translate-y-1"
                style={{ border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)", background: "color-mix(in oklab, var(--background) 60%, #3d1a00)" }}
              >
                <c.Icon className="h-7 w-7" style={{ color: "var(--gold)" }} />
                <div className="font-display text-xs md:text-sm uppercase tracking-[0.25em] text-foreground">{c.label}</div>
                <div className="text-xs break-all w-full text-center" style={{ color: "color-mix(in oklab, var(--gold) 60%, #ffffff)" }}>{c.value}</div>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/2348133377928"
          target="_blank"
          rel="noreferrer"
          data-anim="rise"
          style={{ transitionDelay: "0.5s", borderColor: "var(--gold)", color: "#ffffff" }}
          className="group relative mt-14 inline-flex items-center gap-3 rounded-full border-2 px-10 py-5 font-display text-lg tracking-[0.3em]"
        >
          LET&apos;S CREATE SOMETHING
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}