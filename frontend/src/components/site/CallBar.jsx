import { Phone, ArrowUpRight } from "lucide-react";
import { clinic } from "@/lib/site-data";

export default function CallBar() {
  return (
    <section
      data-testid="call-bar"
      aria-label="Contact strip"
      className="relative bg-[#0A192F] text-white overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 w-[480px] h-[480px] rounded-full bg-[#4285F4]/12 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
        <div data-testid="call-bar-item-milton" className="flex items-center gap-4 md:gap-5">
          {/* Ringing phone icon */}
          <div className="relative shrink-0">
            <span className="absolute inset-0 rounded-full bg-[#F4B400]/25 animate-ping" />
            <span className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.75} />
            </span>
          </div>

          <div className="min-w-0">
            <div className="font-display text-[17px] md:text-[19px] font-semibold leading-tight text-white">
              Toothache? Broken tooth? <span className="text-[#FDD663]">We hold same-day emergency slots.</span>
            </div>
            <a
              href={clinic.phoneHref}
              data-testid="call-bar-phone-milton"
              className="mt-1 inline-block text-[14px] md:text-[15px] leading-relaxed text-[#CBD5E1] hover:text-[#8AB4F8] transition-colors"
            >
              Call <span className="font-medium text-white whitespace-nowrap">{clinic.phone}</span> and we&apos;ll usually see you the same day.
            </a>
          </div>
        </div>

        {/* Book appointment CTA */}
        <a
          href={clinic.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="call-bar-book-btn"
          className="self-center md:self-auto group inline-flex items-center gap-2.5 rounded-full bg-white text-[#0A192F] pl-6 pr-1.5 py-1.5 text-[14.5px] font-medium hover:bg-[#E8F0FE] transition-colors"
        >
          Book Appointment
          <span className="w-10 h-10 rounded-full bg-[#4285F4] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
          </span>
        </a>
      </div>
    </section>
  );
}
