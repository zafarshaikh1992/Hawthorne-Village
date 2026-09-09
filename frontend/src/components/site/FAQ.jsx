import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { clinic, faqs } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const INITIAL_COUNT = 8;

export default function FAQ() {
  const ref = useReveal();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);

  return (
    <section id="faq" ref={ref} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Smiling patient photo. Stock placeholder in a swappable single <img> slot */}
          <div className="relative lg:sticky lg:top-28 max-w-md mx-auto lg:mx-0 w-full">
            <div className="rounded-[32px] overflow-hidden shadow-[0_35px_80px_-25px_rgba(10,25,47,0.35)] -rotate-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/stock/faq-smile.jpg`}
                alt="A patient smiling after her dental visit"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-[0_20px_45px_-15px_rgba(10,25,47,0.35)] border border-slate-100">
              <span className="w-9 h-9 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="text-left">
                <span className="block text-[11.5px] text-[#64748B]">Still have a question?</span>
                <a href={clinic.phoneHref} className="block text-[14px] font-semibold text-[#0A192F] hover:text-[#1A73E8] transition-colors">
                  {clinic.phone}
                </a>
              </span>
            </div>
          </div>

          {/* Questions: first 8, expandable to the full list */}
          <div>
            <div className="mb-8 md:mb-10">
              <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-semibold mb-3">FAQ</div>
              <h2 className="text-[30px] md:text-[42px] text-[#0A192F] tracking-tight leading-[1.08] font-semibold">
                Common questions, <span className="font-light text-[#64748B]">honestly answered.</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {visible.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-[16px] md:text-[17px] font-semibold text-[#0A192F] hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-[#475569] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center lg:text-left">
              <button
                type="button"
                data-testid="faq-view-all"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-7 py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
              >
                {showAll ? "Show fewer questions" : "View all"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
