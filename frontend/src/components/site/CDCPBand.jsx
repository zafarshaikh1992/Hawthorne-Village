import { useState } from "react";
import { ArrowUpRight, Landmark, Phone, ShieldCheck } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";
import LeadDialog from "@/components/site/LeadDialog";

const eligibilityUrl = "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html";

const coverageOptions = [
  "I have a CDCP welcome letter / card",
  "I've applied and I'm waiting to hear back",
  "I'm not sure if I qualify",
  "I'm asking for a family member",
];

// The federal plan gets its own moment in the page: a saturated gradient
// card with a family photo, styled after the reference site's CDCP panel.
export default function CDCPBand() {
  const ref = useReveal();
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section ref={ref} data-testid="cdcp-band" className="reveal py-14 md:py-20 bg-gradient-to-b from-white via-[#FCE8E6]/50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#E94235] via-[#DB4437] to-[#B31412] text-white overflow-hidden shadow-[0_40px_90px_-30px_rgba(179,20,18,0.55)]">
          {/* Ambient light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-[#7F0F0C]/40 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-4 items-center p-8 md:p-12 lg:p-14">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-[11.5px] uppercase tracking-[0.16em] font-semibold">
                <Landmark className="w-3.5 h-3.5" /> We accept
              </div>

              <h2 className="mt-5 font-semibold tracking-tight leading-[1.08] text-[30px] md:text-[42px]">
                Canadian Dental<br className="hidden md:block" /> Care Plan
              </h2>

              <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-white/90 max-w-lg mx-auto lg:mx-0">
                Hawthorne Village Dental Care is a participating CDCP provider. Bring your welcome
                letter and benefits card to your visit. We handle the billing and explain what your
                plan covers before any treatment starts.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => setDialogOpen(true)}
                  data-testid="cdcp-eligibility-btn"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white text-[#B31412] pl-7 pr-1.5 py-1.5 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all"
                >
                  Check your CDCP eligibility
                  <span className="w-10 h-10 rounded-full bg-[#B31412] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                </button>
                <a
                  href={clinic.phoneHref}
                  data-testid="cdcp-call-btn"
                  className="inline-flex items-center gap-2 h-13 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Ask us about coverage
                </a>
              </div>
            </div>

            {/* Family photo. Stock placeholder in a swappable single <img> slot */}
            <div className="relative max-w-md mx-auto w-full lg:pr-2">
              <div className="rounded-[28px] overflow-hidden ring-8 ring-white/20 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] rotate-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stock/cdcp-family.jpg`}
                  alt="A happy family who visit the dentist together"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 inline-flex items-center gap-2 rounded-full bg-white text-[#0A192F] px-4 py-2.5 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.4)]">
                <ShieldCheck className="w-4 h-4 text-[#0F9D58]" />
                <span className="text-[13px] font-semibold whitespace-nowrap">Coverage for the whole family</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        icon={Landmark}
        accent={{ chipBg: "bg-[#FCE8E6]", chipText: "text-[#DB4437]", button: "bg-[#DB4437]", buttonHover: "hover:bg-[#B31412]" }}
        title="Check your CDCP eligibility"
        description="Tell us where you're at with the Canadian Dental Care Plan and our front desk will confirm your coverage and book you in."
        selectLabel="Where are you at with the CDCP?"
        selectOptions={coverageOptions}
        footnote={
          <p className="mt-3 text-[12.5px] text-[#94A3B8]">
            You can also review the official criteria on{" "}
            <a href={eligibilityUrl} target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] underline">
              canada.ca
            </a>
            .
          </p>
        }
        testId="cdcp-lead"
      />
    </section>
  );
}
