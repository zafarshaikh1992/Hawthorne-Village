import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  ScanLine,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  CreditCard,
  Award,
  Anchor,
  Crown,
  MoveDiagonal,
  Utensils,
  Frown,
  Bone,
  Smile,
  Sparkles,
  Timer,
  HeartPulse,
  Layers,
  Activity,
  Baby,
  BadgeCheck,
  Bed,
  Braces,
  Brain,
  CalendarCheck,
  CircleDot,
  Clock,
  Cpu,
  Droplets,
  Ear,
  Eye,
  Feather,
  Gauge,
  Gem,
  Hand,
  Heart,
  Hourglass,
  Leaf,
  Microscope,
  Moon,
  Puzzle,
  RefreshCw,
  Ruler,
  Scan,
  Shield,
  ShieldPlus,
  Slice,
  SmilePlus,
  Snowflake,
  Star,
  Stethoscope,
  Sun,
  Syringe,
  Target,
  Thermometer,
  Trophy,
  Wand2,
  Waves,
  Wind,
  Wrench,
  Zap,
  ZoomIn,
  Check,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import Awards from "@/components/site/Awards";
import SocialProof from "@/components/site/SocialProof";
import BookingPromo from "@/components/site/BookingPromo";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic, gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

// V2 template: the service page restyled to the approved homepage design
// system (Poppins, Google palette, gradient cards, unified type scale).
// Same config contract as ServicePageTemplate so pages can migrate 1:1.

const ICONS = {
  Activity, Anchor, Award, Baby, BadgeCheck, Bed, Bone, Braces, Brain, Calendar,
  CalendarCheck, CheckCircle2, CircleDot, Clock, Cpu, CreditCard, Crown, Droplets,
  Ear, Eye, Feather, Frown, Gauge, Gem, Hand, Heart, HeartPulse, Hourglass, Landmark,
  Layers, Leaf, Microscope, Moon, MoveDiagonal, Phone, Puzzle, RefreshCw, Ruler,
  Scan, ScanLine, Shield, ShieldCheck, ShieldPlus, Slice, Smile, SmilePlus,
  Snowflake, Sparkles, Star, Stethoscope, Sun, Syringe, Target, Thermometer, Timer,
  Trophy, Utensils, Wand2, Waves, Wind, Wrench, Zap, ZoomIn,
};

function Icon({ name, className, strokeWidth = 1.75 }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}

function TwoTone({ a, b, lightClass = "text-[#64748B]" }) {
  return (
    <>
      {a} <span className={`font-light ${lightClass}`}>{b}</span>
    </>
  );
}

function Eyebrow({ children, tone = "text-[#4285F4]", className = "" }) {
  return (
    <div className={`text-[13px] uppercase tracking-[0.14em] ${tone} font-semibold mb-3 ${className}`}>
      {children}
    </div>
  );
}

const H2 = "text-[30px] md:text-[42px] font-semibold tracking-tight leading-[1.08]";

function PageMeta({ config }) {
  useEffect(() => {
    const pageUrl = `https://hawthornevillagedental.ca${config.urlPath || `/services/${config.slug}-in-milton/`}`;
    const prevTitle = document.title;
    document.title = config.meta.title;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute("content", config.meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", pageUrl);

    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": config.meta.schemaType || "MedicalProcedure",
      name: config.name,
      ...(config.meta.procedure?.alternateName ? { alternateName: config.meta.procedure.alternateName } : {}),
      url: pageUrl,
      description: config.meta.procedure?.description || config.meta.description,
      ...(config.meta.procedure?.howPerformed ? { howPerformed: config.meta.procedure.howPerformed } : {}),
      provider: {
        "@type": "Dentist",
        name: clinic.name,
        telephone: clinic.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: clinic.address.street,
          addressLocality: clinic.address.city,
          addressRegion: clinic.address.region,
          postalCode: clinic.address.postal,
          addressCountry: clinic.address.country,
        },
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const parentCrumb = config.breadcrumb || { label: "Services", href: "/#services" };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: parentCrumb.label, item: `https://hawthornevillagedental.ca${parentCrumb.href}` },
        { "@type": "ListItem", position: 3, name: config.name, item: pageUrl },
      ],
    };

    const scripts = [procedureSchema, faqSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-${config.slug}-${i}`;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      scripts.forEach((s) => s.remove());
    };
  }, [config]);

  return null;
}

// Colour-block hero on the homepage's #245583 blue, image in a tilted frame.
function PageHero({ config }) {
  const leftRef = useReveal();
  const rightRef = useReveal();
  const { hero } = config;
  const tid = config.testIdPrefix;

  return (
    <section data-testid={`${tid}-hero`} className="relative overflow-hidden bg-[#245583] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pt-12 md:pb-24">
        {/* Breadcrumb */}
        <nav data-testid={`${tid}-breadcrumb`} aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[13px] text-white/60">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a
            href={`${process.env.PUBLIC_URL}${(config.breadcrumb || { href: "/#services" }).href}`}
            className="hover:text-white transition-colors"
          >
            {(config.breadcrumb || { label: "Services" }).label}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{config.name}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <Eyebrow tone="text-white/75">{hero.eyebrow}</Eyebrow>

            <h1 className="font-semibold text-[38px] leading-[1.06] md:text-[54px] md:leading-[1.04] tracking-tight">
              {hero.titleA} <span className="text-[#F7A822]">{hero.titleB}</span>
            </h1>

            <p className="mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-white/80 max-w-xl">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                data-testid={`${tid}-book-btn`}
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-13 md:h-14 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_16px_40px_-10px_rgba(10,25,47,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> {hero.bookLabel || "Book Appointment"}
              </a>
              <a
                data-testid={`${tid}-call-btn`}
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-13 md:h-14 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {hero.stats.map((t) => (
                <div key={t.v} className="text-left">
                  <div className="text-xl md:text-2xl font-semibold text-white">{t.k}</div>
                  <div className="text-xs md:text-[13px] text-white/60 mt-0.5">{t.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal relative max-w-lg w-full mx-auto lg:mx-0">
            <div className="relative rounded-[28px] overflow-hidden ring-8 ring-white/15 shadow-[0_35px_80px_-20px_rgba(0,0,0,0.5)] rotate-1 aspect-[4/5] max-h-[540px]">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                <Icon name={hero.floatBottomLeft.icon} className="w-5 h-5 text-[#1A73E8]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">{hero.floatBottomLeft.label}</div>
                <div className="font-semibold text-[#0A192F]">{hero.floatBottomLeft.value}</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] max-w-[230px]">
              <Icon name={hero.floatTopRight.icon} className="w-5 h-5 text-[#0F9D58] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">{hero.floatTopRight.title}</div>
                <div className="text-[#64748B]">{hero.floatTopRight.sub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Centred-heading section with stacked rows, mirroring the homepage's
// "Milton Dentist" format. Rows carry either a photo or an icon tile.
function StackedRows({ tid, idPrefix, heading, subheading, rows, closingNote }) {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid={`${tid}-${idPrefix}`} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#4285F4] tracking-tight leading-[1.08]">
            {heading}
          </h2>
          {subheading && (
            <div className="mt-3 text-[17px] md:text-[20px] font-medium text-[#0A192F]">{subheading}</div>
          )}
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#4285F4]/30" />
        </div>

        <div className="space-y-10 md:space-y-12">
          {rows.map((r, i) => (
            <div key={i} data-testid={`${tid}-${idPrefix}-row-${i}`} className="flex flex-col sm:flex-row items-start gap-5 md:gap-8">
              <div className="w-full sm:w-44 md:w-52 shrink-0 aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_16px_40px_-16px_rgba(10,25,47,0.3)] ring-4 ring-white">
                {r.image ? (
                  <img src={r.image.src} alt={r.image.alt} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E8F0FE] to-[#D6E5FC] flex items-center justify-center">
                    <Icon name={r.icon} className="w-10 h-10 text-[#1A73E8]" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div>
                {r.kicker && (
                  <div className="text-[12px] uppercase tracking-[0.12em] text-[#4285F4] font-semibold mb-1">{r.kicker}</div>
                )}
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#0A192F] tracking-tight leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] md:text-[16px] leading-relaxed text-[#475569]">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {closingNote && (
          <p className="mt-10 text-[14.5px] leading-relaxed text-[#64748B] text-center max-w-2xl mx-auto">{closingNote}</p>
        )}
      </div>
    </section>
  );
}

function IntroSection({ config }) {
  const { intro } = config;
  const rows = [
    {
      image: intro.image,
      title: `${intro.titleA} ${intro.titleB}`,
      body: intro.paragraph,
    },
    ...intro.parts.map((c) => ({
      image: c.image,
      icon: c.icon,
      kicker: c.kicker,
      title: c.title,
      body: c.desc,
    })),
  ];
  return (
    <StackedRows
      tid={config.testIdPrefix}
      idPrefix="intro"
      heading={intro.eyebrow}
      subheading={config.hero.eyebrow}
      rows={rows}
      closingNote={intro.closingNote}
    />
  );
}

function ContextSection({ config }) {
  const { context } = config;
  const rows = [
    {
      image: context.feature.image,
      title: context.feature.headline,
      body: context.feature.caption,
    },
    ...context.cards.map((s) => ({
      image: s.image,
      icon: s.icon,
      title: s.title,
      body: s.desc,
    })),
  ];
  return (
    <StackedRows
      tid={config.testIdPrefix}
      idPrefix="context"
      heading={context.eyebrow}
      subheading={`${context.titleA} ${context.titleB}`}
      rows={rows}
    />
  );
}

// Benefits presented like the homepage's "Why Milton chooses us": photo
// collage with a stat badge on the left, green-check list on the right.
function BenefitsSection({ config }) {
  const ref = useReveal();
  const { benefits } = config;
  const tid = config.testIdPrefix;
  const ROOT = process.env.PUBLIC_URL;

  return (
    <section ref={ref} data-testid={`${tid}-benefits`} className="reveal relative py-14 md:py-20 bg-[#E8F0FE] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        {/* LEFT: photo composition + stat badge */}
        <div className="relative order-2 lg:order-1 min-h-[420px] md:min-h-[560px]">
          <div className="absolute top-0 left-0 w-[70%] aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(10,25,47,0.35)] ring-8 ring-white">
            <img
              src={`${ROOT}/images/stock/clinic-lounge.jpg`}
              alt="A bright, welcoming dental treatment room"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[58%] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(10,25,47,0.35)] ring-8 ring-white">
            <img
              src={`${ROOT}/images/stock/clinic-modern.jpg`}
              alt="A bright, modern dental operatory"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stat badge */}
          <div
            data-testid={`${tid}-benefit-stat`}
            className="absolute -top-4 right-6 md:right-10 w-28 h-28 md:w-36 md:h-36 z-20 rounded-full bg-[#4285F4] shadow-[0_20px_50px_-15px_rgba(66,133,244,0.6)] flex flex-col items-center justify-center text-center text-white p-3"
          >
            <div className="text-[26px] md:text-[34px] font-semibold leading-none">{benefits.stat.value}</div>
            <div className="mt-1.5 text-[10px] md:text-[11.5px] font-medium leading-tight uppercase tracking-wide text-white/85">
              {benefits.stat.label}
            </div>
          </div>
        </div>

        {/* RIGHT: copy + checklist */}
        <div className="order-1 lg:order-2">
          <Eyebrow>{benefits.eyebrow}</Eyebrow>
          <h2 className={`${H2}`}>
            <span className="text-[#0A192F]">{benefits.titleA} </span>
            <span className="text-[#4285F4]">{benefits.titleB}</span>
          </h2>

          <p className="mt-6 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#475569] max-w-xl">
            {benefits.cta.title} {benefits.cta.sub}
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {benefits.cards.map((b, i) => (
              <li
                key={b.title}
                data-testid={`${tid}-benefit-${i}`}
                className="flex items-start gap-3 text-[15px] text-[#0A192F]"
              >
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0F9D58] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="pt-0.5 leading-snug">
                  <span className="font-semibold">{b.title}.</span>{" "}
                  <span className="text-[#475569]">{b.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`${tid}-benefits-book`}
              className="inline-flex items-center gap-2 h-12 md:h-13 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-7 py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
            >
              {config.hero.bookLabel || "Book Appointment"}
            </a>
            <a
              href={clinic.phoneHref}
              data-testid={`${tid}-consult-call`}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0A192F] hover:text-[#1A73E8] transition-colors"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;
  const item = gallery.find((g) => g.id === config.galleryId);
  if (!item) return null;

  return (
    <section ref={ref} data-testid={`${tid}-gallery`} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>Real patient, real result</Eyebrow>
            <h2 className={`${H2} text-[#0A192F]`}>
              {item.patient}&apos;s <span className="font-light text-[#64748B]">new smile.</span>
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#DB4437] font-semibold mb-2">Problem</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{item.problem}</p>
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#0F9D58] font-semibold mb-2">Solution</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{item.solution}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {[
              { label: "Before", src: item.before, badge: "bg-white text-[#0A192F]" },
              { label: "After", src: item.after, badge: "bg-[#0F9D58] text-white" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-[24px] overflow-hidden aspect-[24/7] shadow-[0_20px_50px_-20px_rgba(10,25,47,0.25)]">
                <img
                  src={`${process.env.PUBLIC_URL}${img.src}`}
                  alt={`${item.patient}'s smile ${img.label.toLowerCase()} ${config.name.toLowerCase()} treatment`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow ${img.badge}`}>
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "Why have it done here" on the soft green band, mirroring the homepage's
// services checklist and technology sections.
function WhyHereSection({ config }) {
  const ref = useReveal();
  const { whyHere } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-why`} className="reveal bg-gradient-to-b from-[#F3FAF5] via-[#E6F4EA] to-[#F3FAF5]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20 text-center">
        <Eyebrow tone="text-[#0F9D58]" className="mb-3">Why have it done here</Eyebrow>
        <h2 className={`${H2} text-[#0A192F]`}>
          <TwoTone a={whyHere.titleA} b={whyHere.titleB} />
        </h2>
        <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#334155] max-w-2xl mx-auto">
          {whyHere.paragraph}
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {whyHere.items.map((t, i) => (
            <li
              key={t.name}
              data-testid={`${tid}-why-item-${i}`}
              className="rounded-2xl bg-white/80 hover:bg-white px-5 py-4 shadow-[0_2px_10px_rgba(15,157,88,0.08)] hover:shadow-[0_8px_20px_rgba(15,157,88,0.15)] transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0F9D58] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-semibold text-[15.5px] text-[#0A192F] leading-tight">{t.name}</div>
                  <div className="mt-1.5 text-[13.5px] text-[#475569] leading-relaxed">{t.benefit}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Cost card in the insurance section's green treatment.
function CostSection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-cost`} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#E6F4EA] to-[#D8EEE1] shadow-[0_30px_70px_-35px_rgba(15,157,88,0.35)] p-10 md:p-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

          <div className="relative">
            <Eyebrow tone="text-[#0F9D58]">Cost and coverage</Eyebrow>
            <h2 className={`${H2} text-[#0A192F]`}>
              A clear price <span className="font-light text-[#0A192F]/70">before we begin.</span>
            </h2>
            <p className="mt-6 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#334155]">{config.cost.paragraph}</p>
          </div>

          <div className="relative">
            <ul className="space-y-3">
              {[
                { icon: CheckCircle2, text: "Written estimate before any treatment starts" },
                { icon: Landmark, text: "Direct billing to your insurer and CDCP accepted" },
                { icon: CreditCard, text: "0% financing over 6, 12 or 24 months" },
              ].map((f, i) => (
                <li
                  key={i}
                  data-testid={`${tid}-cost-item-${i}`}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 backdrop-blur border border-white px-5 py-4 text-[15px] text-[#0A192F] shadow-sm"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#E6F4EA] text-[#0F9D58] flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4" />
                  </span>
                  <span className="pt-0.5">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ in the homepage format: smiling patient photo with a call chip on the
// left, questions on the right.
function FAQSection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-faq`} className="reveal py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Smiling patient photo. Stock placeholder in a swappable single <img> slot */}
          <div className="relative lg:sticky lg:top-28 max-w-md mx-auto lg:mx-0 w-full">
            <div className="rounded-[32px] overflow-hidden shadow-[0_35px_80px_-25px_rgba(10,25,47,0.35)] -rotate-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/stock/faq-smile.jpg`}
                alt="A patient smiling after her dental visit"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-[0_20px_45px_-15px_rgba(10,25,47,0.35)] border border-slate-100">
              <span className="w-9 h-9 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="text-left">
                <span className="block text-[11.5px] text-[#64748B]">Still have a question?</span>
                <a href={clinic.phoneHref} className="block text-[14px] font-semibold text-[#0A192F] hover:text-[#1A73E8] transition-colors">
                  {clinic.phone}
                </a>
              </span>
            </div>
          </div>

          {/* Questions */}
          <div>
            <div className="mb-8 md:mb-10">
              <Eyebrow>{config.faqEyebrow || `${config.name} questions`}</Eyebrow>
              <h2 className={`${H2} text-[#0A192F]`}>
                Asked in this chair, <span className="font-light text-[#64748B]">every week.</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {config.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`${tid}-faq-item-${i}`}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-[16px] md:text-[17px] font-semibold text-[#0A192F] hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-[#475569] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePageTemplateV2({ config }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [config.slug]);

  return (
    <div data-testid={`${config.testIdPrefix}-page`} className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta config={config} />
      <Header />
      <main>
        <PageHero config={config} />
        <Awards
          eyebrow={config.awards.eyebrow || "Award-winning dentists in Milton"}
          title={<TwoTone a={config.awards.titleA} b={config.awards.titleB} />}
          subtitle={config.awards.subtitle}
        />
        <IntroSection config={config} />
        <ContextSection config={config} />
        <BenefitsSection config={config} />
        <BookingPromo />
        {config.galleryId && <GallerySection config={config} />}
        <WhyHereSection config={config} />
        {config.cost && <CostSection config={config} />}
        <SocialProof />
        <FAQSection config={config} />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
