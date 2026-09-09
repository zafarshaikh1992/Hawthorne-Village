import { Check, ArrowRight } from "lucide-react";
import { clinic, technology } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

// Technology overview presented like the services checklist: same soft green
// band, centred heading, white cards with green checks.
export default function Technology() {
  const ref = useReveal();
  return (
    <section id="technology" ref={ref} className="reveal bg-gradient-to-b from-[#F3FAF5] via-[#E6F4EA] to-[#F3FAF5]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20 text-center">
        <div className="text-[13px] uppercase tracking-[0.14em] text-[#0F9D58] font-semibold mb-3">
          A gentler visit
        </div>
        <h2 className="text-[30px] md:text-[42px] text-[#0A192F] tracking-tight leading-[1.08] font-semibold">
          Advanced dental technology
        </h2>
        <p className="mt-4 text-[15.5px] md:text-[16.5px] text-[#334155] max-w-2xl mx-auto">
          We invest in state-of-the-art equipment so every visit is more precise and less
          stressful. From 3D imaging to laser cavity detection, our tools reduce radiation,
          protect your comfort and often turn two-visit treatments into one.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {technology.map((t, i) => (
            <li
              key={t.name}
              data-testid={`tech-item-${i}`}
              className="rounded-2xl bg-white/80 hover:bg-white px-5 py-4 shadow-[0_2px_10px_rgba(15,157,88,0.08)] hover:shadow-[0_8px_20px_rgba(15,157,88,0.15)] transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0F9D58] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-semibold text-[15.5px] text-[#0A192F] leading-tight">{t.name}</div>
                  <div className="mt-1.5 text-[13.5px] text-[#475569] leading-relaxed">{t.benefit}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a
          href={clinic.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="technology-book-btn"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
        >
          Book Online <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
