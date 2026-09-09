import { Check, ArrowRight } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const ROOT = process.env.PUBLIC_URL;

// Ten everyday services in a scannable two-column checklist; the full visual
// showcase follows in the services rail right below.
const checklist = [
  { label: "Dental Exams & Cleanings", href: `${ROOT}/#services` },
  { label: "Dental Implants", href: `${ROOT}/services/dental-implants-in-milton` },
  { label: "Root Canals", href: `${ROOT}/services/root-canal-therapy-in-milton` },
  { label: "Gum Grafts", href: `${ROOT}/services/connective-tissue-graft-in-milton` },
  { label: "Dental Crowns", href: `${ROOT}/services/same-day-crowns-in-milton` },
  { label: "Tooth Extractions", href: `${ROOT}/services/wisdom-teeth-in-milton` },
  { label: "Dental Fillings", href: `${ROOT}/#services` },
  { label: "Invisalign", href: `${ROOT}/services/invisalign-in-milton` },
  { label: "Children's Dentistry", href: `${ROOT}/services/childrens-dentistry-in-milton` },
  { label: "Teeth Whitening", href: `${ROOT}/services/cosmetic-dentistry-in-milton` },
];

export default function ServicesChecklist() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="services-checklist" className="reveal bg-gradient-to-b from-[#F3FAF5] via-[#E6F4EA] to-[#F3FAF5]">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-14 md:py-20 text-center">
        <div className="text-[13px] uppercase tracking-[0.14em] text-[#0F9D58] font-semibold mb-3">
          Complete dental care
        </div>
        <h2 className="text-[30px] md:text-[42px] text-[#0A192F] tracking-tight leading-[1.08] font-semibold">
          Dental clinic services
        </h2>
        <p className="mt-4 text-[15.5px] md:text-[16.5px] text-[#334155] max-w-xl mx-auto">
          Everyday dentistry and advanced treatments in one Milton clinic, so your
          family never needs a referral across town.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-left max-w-2xl mx-auto">
          {checklist.map((s, i) => (
            <li key={s.label}>
              <a
                href={s.href}
                data-testid={`checklist-item-${i}`}
                className="group flex items-center gap-3 rounded-2xl bg-white/80 hover:bg-white px-4 py-3 text-[15.5px] font-medium text-[#0A192F] shadow-[0_2px_10px_rgba(15,157,88,0.08)] hover:shadow-[0_8px_20px_rgba(15,157,88,0.15)] transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-[#0F9D58] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                {s.label}
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#0F9D58] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={clinic.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="checklist-book-btn"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
        >
          Book Online <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
