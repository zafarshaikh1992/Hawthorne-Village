import { useState } from "react";
import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function FeaturedCase({ item }) {
  return (
    <div data-testid={`gallery-featured-${item.id}`} className="grid md:grid-cols-2 gap-3 md:gap-4">
      <figure className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100">
        <img
          src={item.before}
          alt={`Before ${item.label}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="absolute top-5 left-5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A192F]">
          Before
        </figcaption>
      </figure>
      <figure className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100">
        <img
          src={item.after}
          alt={`After ${item.label}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="absolute top-5 left-5 rounded-full bg-[#0A192F] text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
          After
        </figcaption>
      </figure>
    </div>
  );
}

export default function SmileGallery() {
  const ref = useReveal();
  const [activeId, setActiveId] = useState(gallery[0].id);
  const active = gallery.find((g) => g.id === activeId) || gallery[0];

  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="smile-gallery"
      className="reveal py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Smile gallery
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Real Milton patients,{" "}
              <span className="italic font-light text-[#64748B]">real transformations.</span>
            </h2>
          </div>
          {/* Case counter */}
          <div className="flex items-center gap-3 text-[13px] text-[#64748B]">
            <span className="font-display text-3xl font-semibold text-[#0A192F] tabular-nums">
              {String(gallery.findIndex((g) => g.id === activeId) + 1).padStart(2, "0")}
            </span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="tabular-nums">{String(gallery.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Editorial spread */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
          {/* Featured pair */}
          <div>
            <FeaturedCase item={active} key={active.id} />

            {/* Caption strip beneath */}
            <div className="mt-6 md:mt-8 flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] mb-2">Case</div>
                <h3 className="font-display text-2xl md:text-3xl text-[#0A192F] leading-tight">
                  {active.label}
                </h3>
                <p className="mt-2 text-[15px] text-[#64748B]">{active.treatment}</p>
              </div>
              <dl className="grid grid-cols-2 gap-x-10 gap-y-3">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#94A3B8]">Duration</dt>
                  <dd className="mt-0.5 font-display text-[15px] text-[#0A192F]">{active.duration}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#94A3B8]">Patient</dt>
                  <dd className="mt-0.5 font-display text-[15px] text-[#0A192F]">Age {active.age}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Case picker sidebar */}
          <aside>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] mb-4">
              More cases
            </div>
            <ul className="space-y-1">
              {gallery.map((g, i) => {
                const on = g.id === activeId;
                return (
                  <li key={g.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(g.id)}
                      data-testid={`gallery-thumb-${g.id}`}
                      className={`group w-full text-left flex items-center gap-4 py-3 border-b transition-colors ${
                        on ? "border-[#0A192F]" : "border-slate-100 hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={`font-mono text-[12px] tabular-nums w-6 shrink-0 ${
                          on ? "text-[#0284C7]" : "text-[#CBD5E1]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 font-display text-[15px] leading-tight transition-colors ${
                          on ? "text-[#0A192F] font-semibold" : "text-[#475569] group-hover:text-[#0A192F]"
                        }`}
                      >
                        {g.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-[14px] transition-transform ${
                          on ? "text-[#0A192F] translate-x-0" : "text-[#CBD5E1] group-hover:translate-x-0.5"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              data-testid="gallery-cta"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:gap-2.5 transition-all"
            >
              Book a smile consultation
              <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
