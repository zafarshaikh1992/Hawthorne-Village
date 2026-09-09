import { useEffect } from "react";
import { Calendar, Phone, ChevronRight, ShieldCheck, ScanLine } from "lucide-react";
import { useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Awards from "@/components/site/Awards";
import BookingPromo from "@/components/site/BookingPromo";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/technology/";
const U = (pid) => `https://images.unsplash.com/photo-${pid}?w=800&q=80&auto=format&fit=crop`;
const P = (pid) => `https://images.pexels.com/photos/${pid}/pexels-photo-${pid}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// One page covers the whole technology roster. Row ids keep the old
// per-technology URLs working as /technology#<slug> anchors.
const diagnostics = [
  {
    id: "3d-cone-beam-ct-scan",
    name: "3D Cone Beam CT Scan",
    image: { src: U("1600170311833-c2cf5280ce49"), alt: "A 3D dental scan reviewed on a tablet" },
    body: "A complete 3D picture of your teeth, jawbone and airway in a single low-radiation scan. It is how every implant at our clinic is planned before a single instrument touches your mouth, and it helps with wisdom-teeth and sleep-apnea assessments too.",
  },
  {
    id: "digital-radiography",
    name: "Digital Radiography",
    image: { src: U("1588776814546-1ffcf47267a5"), alt: "Reviewing dental X-rays on a light board" },
    body: "Digital X-rays use up to 90% less radiation than traditional film and appear on screen instantly. That means safer checkups for children and adults, and a dentist who can show you exactly what they see.",
  },
  {
    id: "velscope",
    name: "VELscope Oral Cancer Screening",
    image: { src: U("1606811971618-4486d14f3f99"), alt: "A close-up dental examination" },
    body: "A hand-held fluorescence light that makes early tissue changes visible long before the naked eye could catch them. The screening takes less than two minutes and is part of a routine checkup here.",
  },
  {
    id: "early-laser-cavity-detection",
    name: "Early Laser Cavity Detection",
    image: { src: P("6529111"), alt: "A dental laser at work" },
    body: "A DIAGNOdent laser finds cavities at their earliest stage, when they are smallest and simplest to fix. Catching decay early means less drilling and more of your natural tooth preserved.",
  },
  {
    id: "seiler-microscope",
    name: "Seiler Microscope",
    image: { src: P("4269694"), alt: "Precise treatment with modern instruments" },
    body: "Up to 40 times magnification for root canals and precision restorations. When your dentist can see more, treatment is more accurate and more conservative.",
  },
  {
    id: "same-day-crowns",
    name: "Same-Day CEREC Crowns",
    image: { src: U("1662837775146-871f817c7887"), alt: "A dentist finishing a custom restoration" },
    href: "/services/same-day-crowns-in-milton",
    body: "Your crown is designed, milled and fitted in one visit of about 90 minutes. No gooey impressions, no temporary crown, no second appointment to book time off for.",
  },
];

const comfort = [
  {
    id: "the-wand",
    name: "The Wand, Painless Anaesthesia",
    image: { src: P("3779705"), alt: "A dentist working carefully with a patient" },
    body: "Computer-controlled freezing delivered so gradually you can barely feel it. It is a favourite with nervous patients and children, and a big part of why first fillings go so smoothly here.",
  },
  {
    id: "soft-tissue-laser",
    name: "Soft Tissue Laser",
    image: { src: U("1660732205495-f65510d8180e"), alt: "A close-up of healthy gums and teeth" },
    body: "Many gum procedures can be done with light instead of a blade: less bleeding, faster healing, and often no sutures at all.",
  },
  {
    id: "laser-dentistry",
    name: "Laser Dentistry",
    image: { src: P("3881449"), alt: "A patient having her mouth examined" },
    body: "From gum contouring to easing cold sores, dental lasers make a long list of treatments gentler and quicker to recover from.",
  },
  {
    id: "isolite-dental-isolation-system",
    name: "Isolite Isolation System",
    image: { src: P("5355839"), alt: "A gentle dental treatment in progress" },
    body: "Individualized suction and lighting keep your mouth dry, comfortable and well-lit during treatment, so restorations bond better and last longer.",
  },
  {
    id: "air-purification-system",
    name: "Medical-Grade Air Purification",
    image: { src: U("1629909615184-74f495363b67"), alt: "A bright, modern dental operatory" },
    body: "Every operatory is filtered continuously with hospital-grade purification, one of the quiet ways the clinic looks after your overall health, not just your teeth.",
  },
  {
    id: "water-purification-system",
    name: "Water Purification System",
    image: { src: U("1445527815219-ecbfec67492e"), alt: "A bright dental operatory with modern equipment" },
    body: "Every treatment unit runs on high-quality, distilled, bacteria-free water. You will never think about it, and that is exactly the point.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Advanced Dental Technology in Milton, ON - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "From 3D imaging and laser cavity detection to painless anaesthesia and same-day crowns, explore the technology behind gentler visits at Hawthorne Village Dental Care."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
    };
  }, []);

  return null;
}

function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section data-testid="tech-hero" className="relative overflow-hidden bg-[#245583] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pt-12 md:pb-24">
        <nav data-testid="tech-breadcrumb" aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[13px] text-white/60">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">Technology</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-white/75 font-semibold mb-4">
              Advanced dental technology
            </div>

            <h1 className="font-semibold text-[38px] leading-[1.06] md:text-[54px] md:leading-[1.04] tracking-tight">
              The technology behind <span className="text-[#F7A822]">a gentler visit.</span>
            </h1>

            <p className="mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-white/80 max-w-xl">
              We invest in state-of-the-art equipment so every visit is more precise and less
              stressful. From 3D imaging to laser cavity detection, our tools reduce radiation,
              protect your comfort and often turn two-visit treatments into one.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                data-testid="tech-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-13 md:h-14 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_16px_40px_-10px_rgba(10,25,47,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Online
              </a>
              <a
                data-testid="tech-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-13 md:h-14 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "12", v: "Technologies in-house" },
                { k: "90%", v: "Less radiation, digital X-rays" },
                { k: "<2 min", v: "Oral cancer screening" },
                { k: "1 visit", v: "Same-day crowns" },
              ].map((t) => (
                <div key={t.v} className="text-left">
                  <div className="text-xl md:text-2xl font-semibold text-white">{t.k}</div>
                  <div className="text-xs md:text-[13px] text-white/60 mt-0.5">{t.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal relative max-w-lg w-full mx-auto lg:mx-0">
            <div className="relative rounded-[28px] overflow-hidden ring-8 ring-white/15 shadow-[0_35px_80px_-20px_rgba(0,0,0,0.5)] rotate-1 aspect-[4/5] max-h-[540px]">
              {/* Premium stock placeholder in a swappable single <img> slot */}
              <img
                src={`${process.env.PUBLIC_URL}/images/stock/technology-cbct.jpg`}
                alt="A 3D dental scan reviewed on a tablet at Hawthorne Village Dental Care"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                <ScanLine className="w-5 h-5 text-[#1A73E8]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">3D CBCT imaging</div>
                <div className="font-semibold text-[#0A192F]">Every implant planned in 3D</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] max-w-[230px]">
              <ShieldCheck className="w-5 h-5 text-[#0F9D58] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Safer by design</div>
                <div className="text-[#64748B]">purified air and water</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stacked rows in the homepage's "Milton Dentist" format; each row carries the
// old per-technology slug as its anchor id.
function TechRows({ idPrefix, heading, subheading, rows }) {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid={`tech-${idPrefix}`} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#4285F4] tracking-tight leading-[1.08]">
            {heading}
          </h2>
          <div className="mt-3 text-[17px] md:text-[20px] font-medium text-[#0A192F]">{subheading}</div>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#4285F4]/30" />
        </div>

        <div className="space-y-10 md:space-y-12">
          {rows.map((r) => (
            <div key={r.id} id={r.id} data-testid={`tech-row-${r.id}`} className="flex flex-col sm:flex-row items-start gap-5 md:gap-8 scroll-mt-28">
              <div className="w-full sm:w-44 md:w-52 shrink-0 aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_16px_40px_-16px_rgba(10,25,47,0.3)] ring-4 ring-white">
                <img src={r.image.src} alt={r.image.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#0A192F] tracking-tight leading-snug">
                  {r.name}
                </h3>
                <p className="mt-2.5 text-[15.5px] md:text-[16px] leading-relaxed text-[#475569]">{r.body}</p>
                {r.href && (
                  <a
                    href={`${process.env.PUBLIC_URL}${r.href}`}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#1A73E8] hover:text-[#0A192F] transition-colors"
                  >
                    Learn more about same-day crowns <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Technology() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the sections mount, then jump to the requested technology.
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div data-testid="technology-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <Awards
          eyebrow="Award-winning dentists in Milton"
          title={
            <>
              Modern tools, <span className="font-light text-[#64748B]">trusted hands.</span>
            </>
          }
          subtitle="Technology only matters in the right hands. Milton families have voted for this team 12 years running."
        />
        <TechRows
          idPrefix="diagnostics"
          heading="See more, sooner"
          subheading="Diagnostics and imaging"
          rows={diagnostics}
        />
        <BookingPromo />
        <TechRows
          idPrefix="comfort"
          heading="A gentler, safer visit"
          subheading="Comfort and safety"
          rows={comfort}
        />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
