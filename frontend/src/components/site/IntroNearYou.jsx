import { ArrowRight } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const rows = [
  {
    img: "/images/stock/hero-patient.jpg",
    alt: "A smiling patient in a bright, modern dental clinic",
    title: "Looking for a dentist in Milton?",
    body: "You've found a team that takes the time to know you. We look after the whole family, stay open until 7 PM on weeknights, see patients on Saturdays, and keep slots free every day for dental emergencies.",
  },
  {
    img: "/images/stock/clinic-modern.jpg",
    alt: "A bright, modern dental operatory",
    title: "Comprehensive dental services for the whole family",
    body: "We welcome new patients of every age, from a toddler's very first check-up to implants, Invisalign and full smile makeovers. Everything happens under one roof, so you're not driving across town for referrals.",
  },
  {
    img: "/images/dr-sarna-portrait.jpg",
    alt: "Dr. Raju Sarna, lead dentist at Hawthorne Village Dental Care",
    imgPos: "object-[center_18%]", // portrait source in a landscape slot: keep the face in frame
    title: "Your trusted Milton family dentist near you",
    body: "Led by Dr. Raju Sarna, ICOI Fellow, our team believes in educating patients on proper oral hygiene and personalized dental care routines that promote lasting health. Whether you're a first-time visitor or a returning patient, you can trust us to deliver compassionate, skilled, modern dentistry.",
  },
];

// "Dentist near you" intro — three stacked image + copy rows under a centred
// heading, mirroring the reference flow.
export default function IntroNearYou() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} data-testid="intro-section" className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#4285F4] tracking-tight leading-[1.08]">
            Milton Dentist
          </h2>
          <div className="mt-3 font-display text-[17px] md:text-[20px] font-medium text-[#0A192F]">
            Family Dental Office Near You
          </div>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#4285F4]/30" />
        </div>

        <div className="space-y-10 md:space-y-12">
          {rows.map((r, i) => (
            <div key={i} data-testid={`intro-row-${i}`} className="flex flex-col sm:flex-row items-start gap-5 md:gap-8">
              <div className="w-full sm:w-44 md:w-52 shrink-0 aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_16px_40px_-16px_rgba(10,25,47,0.3)] ring-4 ring-white">
                <img src={`${process.env.PUBLIC_URL}${r.img}`} alt={r.alt} loading="lazy" className={`w-full h-full object-cover ${r.imgPos || ""}`} />
              </div>
              <div>
                <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-[#0A192F] tracking-tight leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] md:text-[16px] leading-relaxed text-[#475569]">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={clinic.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="intro-book-btn"
            className="inline-flex items-center gap-2 h-13 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
          >
            Book Online <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
