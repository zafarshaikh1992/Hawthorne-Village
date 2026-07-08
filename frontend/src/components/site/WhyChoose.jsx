import {
  Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award,
} from "lucide-react";
import { whyChoose } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const iconMap = { Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award };

export default function WhyChoose() {
  const ref = useReveal();

  return (
    <section id="why" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Why families choose us
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Everything a Milton family needs,{" "}
              <span className="italic font-light text-[#64748B]">under one roof.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#475569] leading-relaxed max-w-md">
            Convenient hours, gentle care, transparent pricing and modern technology —
            we built the practice we would want to bring our own kids to.
          </p>
        </div>

        {/* Simple 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100">
          {whyChoose.map((item, i) => {
            const Icon = iconMap[item.icon];
            const isAccent = i === 1; // Highlight the "Evenings & Saturdays" card in mint
            return (
              <article
                key={item.title}
                data-testid={`why-card-${i}`}
                className={`group relative p-8 md:p-10 transition-colors duration-300 ${
                  isAccent ? "bg-[#E6F8F3] hover:bg-[#D8F1E9]" : "bg-white hover:bg-slate-50"
                }`}
              >
                <span
                  className={`inline-flex w-11 h-11 rounded-2xl items-center justify-center mb-6 transition-colors ${
                    isAccent
                      ? "bg-white text-[#0284C7]"
                      : "bg-slate-50 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#0A192F] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#64748B]">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
