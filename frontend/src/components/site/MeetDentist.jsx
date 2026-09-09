import { Award, GraduationCap, Users, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const credentials = [
  { icon: GraduationCap, label: "DDS, University of California, San Francisco (UCSF)" },
  { icon: Award, label: "ICOI Fellowship in Implantology, Orthodontics & General Dentistry" },
  { icon: Sparkles, label: "UCLA, Advanced Education in General Dentistry (AEGD)" },
  { icon: Users, label: "25+ years restoring smiles for Milton families" },
];

export default function MeetDentist() {
  const ref = useReveal();
  return (
    <section id="dentist" ref={ref} className="reveal py-14 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,25,47,0.3)] aspect-[4/5] max-w-[520px]">
            {/* Retouched portrait (tighter crop, corrected colour) — replace with a professional headshot when available */}
            <img
              src={`${process.env.PUBLIC_URL}/images/dr-sarna-portrait.jpg`}
              alt="Dr. Raju Sarna, lead dentist at Hawthorne Village Dental Care in Milton"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Signature-style badge */}
          <div className="absolute -bottom-5 -right-4 md:-right-8 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
            <div className="text-[11px] uppercase tracking-wider text-[#64748B] mb-0.5">Award-winning dentist</div>
            <div className="font-display text-[#0A192F] text-lg">Dr. Raju Sarna</div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-3">Meet Dr. Sarna</div>
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
            Skilled hands, <span className="font-light text-[#64748B]">an even kinder chairside manner.</span>
          </h2>
          <p className="mt-6 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#475569]">
            Dr. Sarna holds an ICOI Fellowship in Implantology, Orthodontics and General Dentistry, and is
            recognized as a leader in cosmetic, restorative and implant dentistry with a focus on natural,
            lasting results. It's a big reason patients across the GTA call him one of the best dentists in
            Milton, though you'll find him just as happy explaining a first filling to a nervous seven-year-old.
          </p>
          <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#475569]">
            Every treatment plan starts with an honest conversation about what you want, what you can afford
            and what will actually make you smile more often. No pressure, ever.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((c, i) => (
              <li
                key={i}
                data-testid={`credential-${i}`}
                className="flex items-start gap-3 text-[15px] text-[#334155]"
              >
                <span className="mt-0.5 w-8 h-8 rounded-full bg-[#E8F0FE] text-[#4285F4] flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="leading-tight pt-1.5">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
