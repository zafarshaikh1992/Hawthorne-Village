import { CheckCircle2, CreditCard, Landmark } from "lucide-react";
import { insurers } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Insurance() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#E6F4EA] to-[#D8EEE1] shadow-[0_30px_70px_-35px_rgba(15,157,88,0.35)] p-10 md:p-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0F9D58] font-semibold mb-3">Insurance & payment</div>
            <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
              Direct billing, CDCP <span className="font-light text-[#0A192F]/70">and flexible payment plans.</span>
            </h2>
            <p className="mt-6 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#334155]">
              We handle the paperwork so you don't have to. As a direct billing dentist in Milton, we bill
              your provider directly, participate in the Canadian Dental Care Plan (CDCP), and offer
              financing so cost never has to delay care.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                { icon: CheckCircle2, text: "Direct billing to nearly every Canadian insurer" },
                { icon: Landmark, text: "CDCP-participating dentist" },
                { icon: CreditCard, text: "0% financing for 6, 12 or 24 months" },
              ].map((f, i) => (
                <li key={i} data-testid={`insurance-feature-${i}`} className="flex items-start gap-3 text-[15px] text-[#0A192F]">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-white text-[#0F9D58] flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4" />
                  </span>
                  <span className="pt-0.5">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {insurers.map((ins) => (
                <div
                  key={ins}
                  className="rounded-2xl bg-white/80 backdrop-blur border border-white px-4 py-4 text-[14px] font-medium text-[#0A192F] text-center shadow-sm"
                >
                  {ins}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] text-[#334155]/70 text-center">
              Don&apos;t see your provider? Call us, chances are we still bill directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
