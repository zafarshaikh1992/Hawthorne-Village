import { useState } from "react";
import { Check, ArrowUpRight, Sparkles, Play, Phone } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const perks = [
  "A full new-patient exam with digital X-rays",
  "One-on-one time with Dr. Sarna to map out your care",
  "Direct billing to your insurer, no paperwork",
  "A same-week appointment, guaranteed, or we call you first",
];

const VIDEO_ID = "22qqpeVLgBI";

// Lightweight click-to-play embed: the YouTube iframe only loads once the
// poster is clicked, keeping the homepage free of third-party requests.
function WelcomeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-[24px] overflow-hidden aspect-video bg-[#0A192F]/20">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="A tour of Hawthorne Village Dental Care with Dr. Raju Sarna"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          data-testid="welcome-video-play"
          onClick={() => setPlaying(true)}
          aria-label="Play video: a tour of Hawthorne Village Dental Care"
          className="group absolute inset-0 w-full h-full"
        >
          {/* Stock placeholder poster; the tour video itself is unchanged */}
          <img
            src={`${process.env.PUBLIC_URL}/images/stock/welcome-tour-poster.jpg`}
            alt="Take a video tour of Hawthorne Village Dental Care"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          <span className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-[#0A192F]/10 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white/95 text-[#0A192F] shadow-[0_12px_32px_rgba(2,8,23,0.45)] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-6 h-6 md:w-7 md:h-7 ml-1 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

// New-patient moment styled like the CDCP "We accept" card, in the palette's
// yellow: saturated gradient card, ambient light, tilted media frame.
export default function NewPatientWelcome() {
  const ref = useReveal();

  return (
    <section
      id="new-patients"
      ref={ref}
      data-testid="new-patient-section"
      className="reveal py-14 md:py-20 bg-gradient-to-b from-white via-[#FEF7E0]/60 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#FDD663] via-[#F4C20D] to-[#E8A800] text-[#0A192F] overflow-hidden shadow-[0_40px_90px_-30px_rgba(232,168,0,0.6)]">
          {/* Ambient light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-[#B06000]/25 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-6 items-center p-8 md:p-12 lg:p-14">
            {/* Copy + perks */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/40 border border-white/50 px-4 py-1.5 text-[11.5px] uppercase tracking-[0.16em] font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> New patient welcome
              </div>

              <h2 className="mt-5 text-[30px] md:text-[42px] font-semibold tracking-tight leading-[1.08]">
                Your first visit, without the guesswork.
              </h2>

              <p className="mt-4 text-[15px] md:text-[16.5px] leading-relaxed text-[#0A192F]/80 max-w-lg">
                Choosing a new dentist is a big decision. Book a new-patient visit and get an
                honest conversation about your smile and what it actually needs. No pressure,
                no surprise bills.
              </p>

              <ul className="mt-7 space-y-3">
                {perks.map((p, i) => (
                  <li
                    key={i}
                    data-testid={`welcome-perk-${i}`}
                    className="flex items-start gap-3 text-[15px] font-medium"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-white text-[#0F9D58] shadow-sm flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row items-center sm:justify-start gap-3">
                <a
                  href={clinic.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="welcome-book-btn"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A192F] text-white pl-7 pr-1.5 py-1.5 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(10,25,47,0.5)] hover:-translate-y-0.5 transition-all"
                >
                  Book Appointment
                  <span className="w-10 h-10 rounded-full bg-white text-[#0A192F] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                </a>
                <a
                  href={clinic.phoneHref}
                  data-testid="welcome-phone-btn"
                  className="inline-flex items-center gap-2 h-13 rounded-full border border-[#0A192F]/25 px-6 py-3.5 text-[15px] font-semibold text-[#0A192F] hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-4 h-4" /> {clinic.phone}
                </a>
              </div>

              <div className="mt-6 text-[13px] text-[#0A192F]/70 font-medium">
                Direct billing to most insurers · Evening &amp; Saturday appointments · New patients always welcome
              </div>
            </div>

            {/* Video tour in a tilted frame, mirroring the CDCP photo card */}
            <div className="relative max-w-md mx-auto w-full lg:pr-2">
              <div className="rounded-[28px] overflow-hidden ring-8 ring-white/40 shadow-[0_30px_70px_-20px_rgba(122,80,0,0.55)] -rotate-1">
                <WelcomeVideo />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 inline-flex items-center gap-2 rounded-full bg-white text-[#0A192F] px-4 py-2.5 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.35)]">
                <Play className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
                <span className="text-[13px] font-semibold whitespace-nowrap">Take the 60-second clinic tour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
