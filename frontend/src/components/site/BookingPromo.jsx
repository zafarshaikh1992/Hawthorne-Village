import { Stethoscope, Sparkles, Siren, ArrowUpRight, Phone } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const actions = [
  { icon: Stethoscope, label: "Exam", desc: "New-patient & recall exams", tel: false },
  { icon: Sparkles, label: "Cleaning", desc: "Hygiene visits, 45 to 60 minutes", tel: false },
  { icon: Siren, label: "Emergency", desc: "Same-day slots held daily", tel: true },
];

// Online-booking moment presented like the CDCP and new-patient cards: one
// saturated gradient panel, ambient light, tilted photo frame.
export default function BookingPromo() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="booking-promo" className="reveal py-14 md:py-20 bg-gradient-to-b from-white via-[#E8F0FE]/60 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#4285F4] via-[#2A72E8] to-[#1967D2] text-white overflow-hidden shadow-[0_40px_90px_-30px_rgba(25,103,210,0.6)]">
          {/* Ambient light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-[#0A192F]/30 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-6 items-center p-8 md:p-12 lg:p-14">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-[11.5px] uppercase tracking-[0.16em] font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Online booking
              </div>

              <h2 className="mt-5 text-[30px] md:text-[42px] font-semibold tracking-tight leading-[1.08]">
                Book online in 60 seconds.
              </h2>

              <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-white/90 max-w-lg">
                Pick a time that suits you, evenings and Saturdays included, and we confirm the
                same day. Prefer to talk it through? Our front desk usually answers within a minute.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={clinic.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="promo-book-btn"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white text-[#1967D2] pl-7 pr-1.5 py-1.5 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all"
                >
                  Book Online
                  <span className="w-10 h-10 rounded-full bg-[#1967D2] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                </a>
                <a
                  href={clinic.phoneHref}
                  data-testid="promo-call-btn"
                  className="inline-flex items-center gap-2 h-13 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> {clinic.phone}
                </a>
              </div>

              {/* Photo peeks in on large screens. Stock placeholder in a swappable single <img> slot */}
              <div className="hidden lg:block mt-10 rounded-[24px] overflow-hidden ring-8 ring-white/20 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)] -rotate-1 max-w-sm">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stock/booking-phone.jpg`}
                  alt="Booking a dental appointment on a phone"
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </div>

            {/* App-style booking card */}
            <div className="relative max-w-md mx-auto w-full lg:pr-2">
              <div className="rounded-[28px] bg-white text-[#0A192F] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] p-5 rotate-1">
                <div className="px-2 pt-1 pb-4 flex items-center justify-between">
                  <div className="font-semibold text-[16px]">Hawthorne Village Dental</div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-wide rounded-full bg-[#E8F0FE] text-[#1A73E8] px-2.5 py-1">
                    Book now
                  </span>
                </div>
                <div className="space-y-3">
                  {actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.tel ? clinic.phoneHref : clinic.bookUrl}
                      target={a.tel ? undefined : "_blank"}
                      rel={a.tel ? undefined : "noopener noreferrer"}
                      data-testid={`promo-action-${a.label.toLowerCase()}`}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:border-slate-200 hover:shadow-md px-5 py-4 transition-all"
                    >
                      <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${a.tel ? "bg-[#FCE8E6] text-[#DB4437]" : "bg-[#E8F0FE] text-[#1A73E8]"}`}>
                        <a.icon className="w-5 h-5" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-[16px] uppercase tracking-wide">{a.label}</span>
                        <span className="block text-[13px] text-[#64748B]">{a.desc}</span>
                      </span>
                      <span className="ml-auto w-9 h-9 rounded-full bg-white border border-slate-200 text-[#0A192F] flex items-center justify-center group-hover:bg-[#1A73E8] group-hover:border-[#1A73E8] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white text-[#0A192F] px-4 py-2.5 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.4)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58]" />
                <span className="text-[13px] font-semibold whitespace-nowrap">We confirm the same day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
