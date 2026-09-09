import { useState } from "react";
import { Phone, ArrowUpRight, CreditCard, CalendarClock, FileCheck2 } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";
import LeadDialog from "@/components/site/LeadDialog";

const financingTreatments = [
  "Dental implants",
  "Invisalign",
  "Smile makeover / veneers",
  "Crowns or bridges",
  "Wisdom teeth / oral surgery",
  "Something else",
];

const points = [
  { icon: CreditCard, text: "0% interest through Dentalcard, PayBright and iFinance" },
  { icon: CalendarClock, text: "Spread treatments over 6, 12 or 24 months" },
  { icon: FileCheck2, text: "A written estimate before any treatment begins" },
];

// Bold financing band — a conversion moment between insurance and FAQ,
// so cost never becomes the reason a treatment plan stalls.
export default function Financing() {
  const ref = useReveal();
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section id="financing" ref={ref} data-testid="financing-section" className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#3B66B5] via-[#325AA2] to-[#27498A] text-white overflow-hidden shadow-[0_40px_90px_-30px_rgba(39,73,138,0.6)]">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-24 w-[480px] h-[480px] rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full bg-[#0A192F]/35 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[auto_1fr_300px] gap-8 lg:gap-12 items-center p-10 md:p-14 lg:py-14 lg:pl-16 lg:pr-14">
            {/* Giant 0% display */}
            <div className="flex items-baseline lg:block">
              <div className="font-semibold leading-none tracking-tight text-[96px] md:text-[150px] lg:text-[170px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8AB4F8]">
                0%
              </div>
              <div className="ml-4 lg:ml-1 lg:mt-2 text-[15px] md:text-[17px] uppercase tracking-[0.18em] text-[#8AB4F8] font-medium">
                Financing
              </div>
            </div>

            {/* Copy + CTAs */}
            <div>
              <div className="text-[13px] uppercase tracking-[0.14em] text-white/75 font-semibold mb-3">
                Flexible payment plans
              </div>
              <h2 className="text-[30px] md:text-[42px] tracking-tight leading-[1.08] font-semibold">
                Smile now, <span className="font-light text-white/70">pay over time.</span>
              </h2>
              <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-white/85 max-w-xl">
                Interest-free plans are available on treatments over $500. That means implants,
                Invisalign or a smile makeover can start when you feel ready, without a lump sum
                up front.
              </p>

              <ul className="mt-6 space-y-2.5">
                {points.map((p, i) => (
                  <li key={i} data-testid={`financing-point-${i}`} className="flex items-start gap-3 text-[15px] text-white/90">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-white/10 text-[#8AB4F8] flex items-center justify-center shrink-0">
                      <p.icon className="w-3.5 h-3.5" strokeWidth={2.25} />
                    </span>
                    <span className="pt-0.5">{p.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => setDialogOpen(true)}
                  data-testid="financing-book-btn"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white text-[#0A192F] pl-6 pr-1.5 py-1.5 text-[14.5px] font-medium hover:bg-[#E8F0FE] transition-colors"
                >
                  Ask about financing
                  <span className="w-10 h-10 rounded-full bg-[#4285F4] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                </button>
                <a
                  href={clinic.phoneHref}
                  data-testid="financing-call-btn"
                  className="inline-flex items-center gap-2 h-12 rounded-full border border-white/20 px-6 text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> {clinic.phone}
                </a>
              </div>
            </div>

            {/* Photo. Stock placeholder in a swappable single <img> slot */}
            <div className="hidden lg:block relative">
              <div className="rounded-[24px] overflow-hidden ring-8 ring-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] rotate-2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stock/financing-smile.jpg`}
                  alt="A patient laughing with confidence in her smile"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        icon={CreditCard}
        accent={{ chipBg: "bg-[#E8F0FE]", chipText: "text-[#1A73E8]", button: "bg-[#1A73E8]", buttonHover: "hover:bg-[#185ABC]" }}
        title="Ask about 0% financing"
        description="Tell us which treatment you're considering and we'll walk you through the payment plans, with a written estimate before anything begins."
        selectLabel="Treatment you're considering"
        selectOptions={financingTreatments}
        testId="financing-lead"
      />
    </section>
  );
}
