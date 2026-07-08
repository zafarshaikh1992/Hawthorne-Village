import { useState } from "react";
import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function Tile({ item, index }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <a
      href="#contact"
      data-testid={`gallery-tile-${item.id}`}
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onFocus={() => setShowAfter(true)}
      onBlur={() => setShowAfter(false)}
      className="group block"
    >
      {/* Image with crossfade */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_10px_30px_-15px_rgba(10,25,47,0.2)] group-hover:shadow-[0_20px_45px_-15px_rgba(10,25,47,0.3)] transition-shadow duration-500">
        <img
          src={item.before}
          alt={`Before ${item.label}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={item.after}
          alt={`After ${item.label}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Tiny status pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0A192F]">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              showAfter ? "bg-[#10B981]" : "bg-slate-400"
            }`}
          />
          {showAfter ? "After" : "Before"}
        </div>

        {/* Case index */}
        <div className="absolute top-3 right-3 font-mono text-[11px] tabular-nums text-white/90 bg-[#0A192F]/60 backdrop-blur rounded-full px-2 py-0.5">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Text below */}
      <div className="pt-4 pb-1">
        <h3 className="font-display text-[16px] font-semibold text-[#0A192F] leading-tight group-hover:text-[#0284C7] transition-colors">
          {item.label}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-[12.5px] text-[#94A3B8]">
          <span>{item.treatment}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>{item.duration}</span>
        </div>
      </div>
    </a>
  );
}

export default function SmileGallery() {
  const ref = useReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="smile-gallery"
      className="reveal py-24 md:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Smile gallery
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Real Milton patients,{" "}
              <span className="italic font-light text-[#64748B]">real transformations.</span>
            </h2>
          </div>
          <p className="text-[14px] text-[#94A3B8] max-w-xs">
            Hover any case to reveal the after. Every result from our Derry Road clinic.
          </p>
        </div>

        {/* Compact 4-up grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {gallery.map((g, i) => (
            <Tile key={g.id} item={g} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            data-testid="gallery-cta"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:gap-2.5 transition-all"
          >
            Book a smile consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
