import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { clinic } from "@/lib/site-data";

const features = [
  "Same-day emergency appointments",
  "Evening and Saturday hours",
  "Direct billing to your insurer",
  "CDCP-participating dentist",
  "Sedation options for nervous patients",
  "3D CBCT scans and same-day crowns",
  "A gentle first visit from age one",
  "An ICOI Fellow leading your care",
];

// Curved "15+ YEARS IN MILTON" text badge — pure SVG, no external asset.
function ExperienceBadge() {
  return (
    <div
      data-testid="experience-badge"
      className="absolute -top-4 right-6 md:right-10 w-28 h-28 md:w-36 md:h-36 z-20 pointer-events-none"
    >
      <div className="absolute inset-0 rounded-full bg-[#4285F4] shadow-[0_20px_50px_-15px_rgba(66,133,244,0.6)]" />
      <div className="absolute inset-[10px] rounded-full border-2 border-dashed border-white/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 flex items-center justify-center">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#4285F4]" />
        </div>
      </div>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full [animation:spin_18s_linear_infinite]">
        <defs>
          <path
            id="exp-circle"
            d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          />
        </defs>
        <text fill="#FFFFFF" style={{ fontFamily: "Outfit, sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "3px" }}>
          <textPath href="#exp-circle" startOffset="0">
            15+ YEARS IN MILTON · 15+ YEARS IN MILTON ·&nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
}

// Decorative sparkle SVG.
function Sparkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </svg>
  );
}

export default function WhyChoose() {
  const ref = useReveal();

  return (
    <section
      id="why"
      ref={ref}
      data-testid="why-section"
      className="reveal relative py-14 md:py-20 bg-[#E8F0FE] overflow-hidden"
    >
      {/* Ambient decorations */}
      <Sparkle className="absolute top-24 right-[10%] w-6 h-6 text-[#4285F4]/25 hidden md:block" />
      <Sparkle className="absolute bottom-32 left-[45%] w-4 h-4 text-[#4285F4]/30 hidden md:block" />
      <Sparkle className="absolute bottom-16 left-8 w-5 h-5 text-[#4285F4]/25" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        {/* LEFT: photo composition + rotating badge */}
        <div className="relative order-2 lg:order-1 min-h-[420px] md:min-h-[560px]">
          {/* Big top photo (sits behind the front card). Premium stock placeholder — same shoot as the front card for a consistent look */}
          <div className="absolute top-0 left-0 w-[70%] aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(10,25,47,0.35)] ring-8 ring-white">
            <img
              src={`${process.env.PUBLIC_URL}/images/stock/clinic-lounge.jpg`}
              alt="A bright, welcoming dental treatment room"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-right front photo. Premium stock placeholder — replace with clinic photography (see public/images/stock/PLACEHOLDERS.md) */}
          <div className="absolute bottom-0 right-0 w-[58%] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(10,25,47,0.35)] ring-8 ring-white">
            <img
              src={`${process.env.PUBLIC_URL}/images/stock/clinic-modern.jpg`}
              alt="A bright, modern dental operatory"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rotating experience badge */}
          <ExperienceBadge />

          {/* Little sparkle accents on photo composition */}
          <Sparkle className="absolute top-1/3 -right-2 w-5 h-5 text-[#4285F4]/60 hidden md:block" />
          <Sparkle className="absolute bottom-8 left-4 w-6 h-6 text-[#4285F4]/50" />
        </div>

        {/* RIGHT: copy */}
        <div className="order-1 lg:order-2">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-4">
            Why Milton chooses us
          </div>

          <h2 className="text-[30px] md:text-[42px] font-semibold tracking-tight leading-[1.08]">
            <span className="text-[#0A192F]">One dental clinic in Milton, </span>
            <span className="text-[#4285F4]">every stage of your smile.</span>
          </h2>

          <p className="mt-6 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#475569] max-w-xl">
            Hawthorne Village Dental Care is one of the top-rated dental clinics in Milton, Ontario,
            bringing together{" "}
            <a href={`${process.env.PUBLIC_URL}/services/childrens-dentistry-in-milton`} className="text-[#4285F4] font-medium underline decoration-[#4285F4]/30 underline-offset-4 hover:decoration-[#4285F4]">
              children&apos;s dentistry
            </a>
            ,{" "}
            <a href={`${process.env.PUBLIC_URL}/services/dental-implants-in-milton`} className="text-[#4285F4] font-medium underline decoration-[#4285F4]/30 underline-offset-4 hover:decoration-[#4285F4]">
              dental implants
            </a>
            ,{" "}
            <a href={`${process.env.PUBLIC_URL}/services/cosmetic-dentistry-in-milton`} className="text-[#4285F4] font-medium underline decoration-[#4285F4]/30 underline-offset-4 hover:decoration-[#4285F4]">
              cosmetic dentistry
            </a>{" "}
            and{" "}
            <a href={`${process.env.PUBLIC_URL}/contact`} className="text-[#4285F4] font-medium underline decoration-[#4285F4]/30 underline-offset-4 hover:decoration-[#4285F4]">
              emergency care
            </a>
            . Led by Dr. Raju Sarna, ICOI Fellow, our team is built around:
          </p>

          {/* Two-column checkmark list */}
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {features.map((f, i) => (
              <li
                key={f}
                data-testid={`why-feature-${i}`}
                className="flex items-start gap-3 text-[15px] text-[#0A192F]"
              >
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0F9D58] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="pt-0.5 leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <a
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="why-book-btn"
              className="inline-flex items-center gap-2 h-12 md:h-13 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-7 text-[15px] font-medium shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
            >
              Book Appointment
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
