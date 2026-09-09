import { Star, Phone, Calendar, MapPin } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

// Award medallions shown inside the hero, mirroring the badge row of the
// reference layout. Full award history still lives on /our-team.
const heroAwards = [
  { src: "cert-01.png", alt: "Three Best Rated, Best Business of 2019 Excellence award" },
  { src: "cert-06.png", alt: "Readers' Choice Awards 2019, Diamond winner" },
  { src: "cert-07.png", alt: "Readers' Choice Awards 2020, Diamond winner" },
  { src: "cert-09.png", alt: "Canadian Champion Readers' Choice Awards 2021, Platinum winner" },
  { src: "cert-11.png", alt: "Hamilton Spectator Readers' Choice Awards 2022, Platinum winner" },
];

// Bold colour-block hero: location band, oversized statement, award
// medallions and a single dominant BOOK ONLINE action.
export default function HeroAwesome() {
  const ref = useReveal();

  return (
    <section data-testid="hero-section" id="top" className="relative">
      {/* Location band */}
      <div data-testid="hero-location-band" className="bg-[#4285F4] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-2.5 flex items-center justify-center gap-2 text-[13px] md:text-[14px] font-medium tracking-wide">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          Family Dentist in Milton, ON
        </div>
      </div>

      {/* Colour-block statement over the clinic film */}
      <div ref={ref} className="reveal relative overflow-hidden bg-[#245583] text-white">
        {/* Background video with a blue wash so the type stays readable */}
        <video
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          src={`${process.env.PUBLIC_URL}/videos/hero-bg.mp4`}
        />
        <div className="absolute inset-0 bg-[#245583]/85" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#1A3F63]/60 via-[#1A3F63]/20 to-[#1A3F63]/70" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24 text-center">
          {/* Review chip */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 pl-1.5 pr-4 py-1.5 backdrop-blur mb-8">
            <span className="flex items-center gap-1 rounded-full bg-white text-[#0A192F] text-[11px] font-semibold px-2 py-0.5">
              <Star className="w-3 h-3 fill-[#F4B400] text-[#F4B400]" /> {clinic.googleRating}
            </span>
            <span className="text-[13px] text-white/85">
              Rated by <strong className="font-semibold text-white">{clinic.reviewCount}+</strong> Milton families on Google
            </span>
          </div>

          <h1 className="font-display font-semibold tracking-tight leading-[0.98] text-[52px] md:text-[84px] lg:text-[96px]">
            A <span className="text-[#F7A822]">5-star</span> dental
            <br className="hidden sm:block" /> experience.
          </h1>

          <p className="mt-6 text-[16px] md:text-[19px] leading-relaxed text-white/75 max-w-2xl mx-auto">
            Gentle, modern dentistry for the whole family. Evening hours, same-day
            emergency care, direct billing and CDCP coverage, right here on Derry Road.
          </p>

          {/* Award medallions */}
          <div data-testid="hero-awards" className="mt-10 flex items-center justify-center gap-4 md:gap-7 flex-wrap">
            {heroAwards.map((a) => (
              <div key={a.src} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(2,8,23,0.6)] flex items-center justify-center overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/images/certifications/${a.src}`}
                  alt={a.alt}
                  loading="eager"
                  className="w-[82%] h-[82%] object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              data-testid="hero-book-btn"
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 md:h-16 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-10 md:px-12 text-[16px] md:text-[17px] font-semibold tracking-wide uppercase shadow-[0_16px_40px_-10px_rgba(26,115,232,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5 mr-2.5" /> Book Online
            </a>
            <a
              data-testid="hero-call-btn"
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-14 md:h-16 rounded-full bg-white/10 border border-white/20 px-8 text-[15px] md:text-[16px] font-medium text-white hover:bg-white/15 transition-all"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { k: "10,000+", v: "Happy patients" },
              { k: "15+ Years", v: "In Milton" },
              { k: "Direct", v: "Insurance billing" },
              { k: "CDCP", v: "Accepted here" },
            ].map((t) => (
              <div key={t.v} data-testid={`hero-trust-${t.v.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="font-display text-xl md:text-2xl font-semibold text-white">{t.k}</div>
                <div className="text-xs md:text-[13px] text-white/60 mt-0.5">{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
