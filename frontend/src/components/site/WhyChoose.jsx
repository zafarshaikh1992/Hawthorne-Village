import {
  Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award, ArrowRight, Star,
} from "lucide-react";
import { whyChoose } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const iconMap = { Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award };

/* --- Card variants ------------------------------------------------------- */

// Large editorial hero card (image on left, copy on right, spans full width top row)
function FeatureCard({ item, index }) {
  const Icon = iconMap[item.icon];
  return (
    <article
      data-testid={`why-card-${index}`}
      className="group md:col-span-4 md:row-span-2 relative overflow-hidden rounded-[28px] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(10,25,47,0.15)] hover:shadow-[0_20px_60px_-20px_rgba(10,25,47,0.25)] transition-all duration-500 hover:-translate-y-0.5"
    >
      <div className="grid md:grid-rows-[1fr_auto] h-full">
        <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[280px]">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/55 via-[#0A192F]/10 to-transparent" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#0A192F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
            Available today
          </div>
        </div>
        <div className="p-7 md:p-9">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-2xl bg-[#0A192F] text-white flex items-center justify-center">
              {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
            </span>
            <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium">Featured</div>
          </div>
          <h3 className="font-display text-2xl md:text-[28px] font-semibold text-[#0A192F] leading-[1.15]">
            {item.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#64748B]">{item.desc}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:gap-2.5 transition-all"
          >
            Book urgent care <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

// Mint stat card
function MintStatCard({ item, index }) {
  const Icon = iconMap[item.icon];
  return (
    <article
      data-testid={`why-card-${index}`}
      className="md:col-span-2 rounded-[28px] bg-[#E6F8F3] p-7 md:p-8 border border-[#D1F1E7] flex flex-col justify-between overflow-hidden relative hover:-translate-y-0.5 transition-transform duration-300"
    >
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/40 blur-2xl pointer-events-none" />
      <div className="relative">
        <span className="w-10 h-10 rounded-2xl bg-white text-[#0284C7] flex items-center justify-center">
          {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
        </span>
        <h3 className="mt-6 font-display text-[22px] md:text-2xl font-semibold text-[#0A192F] leading-tight">{item.title}</h3>
        <p className="mt-2 text-[14.5px] text-[#334155] leading-relaxed">{item.desc}</p>
      </div>
      <div className="relative mt-6 flex items-end justify-between">
        <div>
          <div className="font-display text-4xl md:text-5xl font-semibold text-[#0A192F] leading-none">{item.stat}</div>
          <div className="mt-1.5 text-[12px] uppercase tracking-wider text-[#334155]/70">{item.statLabel}</div>
        </div>
      </div>
    </article>
  );
}

// Compact icon-only card
function IconCard({ item, index }) {
  const Icon = iconMap[item.icon];
  return (
    <article
      data-testid={`why-card-${index}`}
      className="md:col-span-2 group rounded-[28px] bg-white p-7 md:p-8 border border-slate-100 hover:border-slate-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-15px_rgba(10,25,47,0.15)] transition-all duration-300"
    >
      <span className="w-11 h-11 rounded-2xl bg-slate-50 text-[#0A192F] flex items-center justify-center group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
        {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
      </span>
      <h3 className="mt-5 font-display text-lg md:text-xl font-semibold text-[#0A192F] leading-snug">{item.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">{item.desc}</p>
    </article>
  );
}

// Image-forward mid-size card
function ImageCard({ item, index }) {
  const Icon = iconMap[item.icon];
  return (
    <article
      data-testid={`why-card-${index}`}
      className="md:col-span-3 group relative overflow-hidden rounded-[28px] border border-slate-100 hover:-translate-y-0.5 transition-all duration-500 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.15)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.25)]"
    >
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/40 to-transparent" />
      </div>
      <div className="relative p-7 md:p-8 min-h-[300px] flex flex-col justify-end text-white">
        <span className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center mb-4">
          {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
        </span>
        <h3 className="font-display text-2xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/85 max-w-md">{item.desc}</p>
      </div>
    </article>
  );
}

// Quote / testimonial ribbon card
function QuoteCard({ item, index }) {
  const Icon = iconMap[item.icon];
  return (
    <article
      data-testid={`why-card-${index}`}
      className="md:col-span-3 relative overflow-hidden rounded-[28px] bg-[#0A192F] text-white p-7 md:p-9 flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-300"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#0284C7]/25 blur-3xl pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>
        <p className="font-display text-xl md:text-[22px] leading-[1.35] text-white/95">
          &ldquo;The best dental clinic I&apos;ve ever been to. So kind, considerate and genuinely care about your health.&rdquo;
        </p>
        <div className="mt-5 text-[13px] text-white/60">— Verdah A., Milton · Verified Google review</div>
      </div>
      <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
            {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
          </span>
          <div>
            <div className="text-[13px] font-medium">{item.title}</div>
            <div className="text-[12px] text-white/60">{item.desc}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* --- Section wrapper ----------------------------------------------------- */

const variantMap = {
  feature: FeatureCard,
  mint: MintStatCard,
  icon: IconCard,
  image: ImageCard,
  quote: QuoteCard,
};

export default function WhyChoose() {
  const ref = useReveal();
  return (
    <section id="why" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Why families choose us
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Everything a Milton family needs,{" "}
              <span className="italic font-light text-[#64748B]">under one roof.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#475569] leading-relaxed max-w-md">
            Convenient hours, gentle care, transparent pricing and modern technology —
            we built the practice we would want to bring our own kids to.
          </p>
        </div>

        {/* Editorial bento grid: 6 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-auto gap-5 md:gap-6">
          {whyChoose.map((item, i) => {
            const Component = variantMap[item.variant] || IconCard;
            return <Component key={item.title} item={item} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
