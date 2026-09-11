import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  BadgeCheck,
  Heart,
  Clock,
  Languages,
  Sparkles,
  Smile,
  MessageCircle,
  Baby,
} from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/our-team/";
const IMG = (f) => `${process.env.PUBLIC_URL}/images/team/${f}`;

const team = {
  dentists: [],
  hygienists: [
    {
      name: "Haidy",
      role: "Dental Hygienist",
      photo: IMG("haidy.png"),
      bio: "Haidy is one of the hygienists patients mention by name in their reviews, known for unhurried cleanings and for taking the time to explain everything, so you leave knowing exactly how to keep your smile healthy between visits.",
      chips: ["Hygiene", "Patient education"],
    },
  ],
  admin: [
    {
      name: "Tania Dimitrova",
      role: "Operations Manager",
      photo: IMG("tania.jpg"),
      bio: "Tania holds an Honours Bachelor of Arts and Science from the University of Toronto and completed two years of Dental Technology studies at George Brown College, dental knowledge she puts to work delivering the best care and customer service to every patient. She continues to broaden her expertise through office management courses and continuing education, and outside of work her passion is her family.",
      chips: ["Operations", "Dental Technology", "Bulgarian & Russian"],
    },
    {
      name: "Nosheen",
      role: "Office Manager",
      photo: IMG("nosheen.jpg"),
      bio: "A loving mother of three, Nosheen knows first-hand how challenging dental visits can be for parents whose kids aren't too fond of the dentist. Because dental care matters for the whole family, she always tries her best to help, and she loves making children feel as comfortable as possible from the moment they walk in.",
      chips: ["Front office", "Families & kids"],
    },
  ],
};

const whyLoved = [
  {
    icon: Clock,
    title: "Generous time, every visit",
    desc: "A generous amount of time is spent getting to know each patient: their needs, wants and special circumstances.",
  },
  {
    icon: MessageCircle,
    title: "Everything explained",
    desc: "From clear treatment walk-throughs to Haidy's home-care coaching, you always know what's happening and why.",
  },
  {
    icon: Languages,
    title: "Seven languages spoken",
    desc: "English, French, Hindi, Punjabi, Urdu, Tagalog and Spanish. Tell us your preference when booking.",
  },
  {
    icon: Baby,
    title: "Kids feel safe here",
    desc: "A gentle first-visit routine from age one, and a team that genuinely loves making children comfortable.",
  },
  {
    icon: Heart,
    title: "Named in the reviews",
    desc: "Read our Google reviews and you'll notice patients thank team members by name. That's rare, and earned.",
  },
  {
    icon: Sparkles,
    title: "Greeted with a smile",
    desc: "Patients are welcomed warmly by the entire staff, in an office dedicated to comfortable, personalized care.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Team of Hawthorne Village Dental Care in Milton, ON";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Hawthorne Village Dental Care has a dental team of dedicated health professionals to serve you better with your oral health in a comfortable environment."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Our Team", item: PAGE_URL },
      ],
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-team-0";
    s.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      s.remove();
    };
  }, []);

  return null;
}

function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section data-testid="team-hero" className="relative overflow-hidden bg-[#245583] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pt-12 md:pb-24">
        <nav data-testid="team-breadcrumb" aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[13px] text-white/60">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">Our Team</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-white/75 font-semibold mb-4">
              Meet our team
            </div>

            <h1 className="font-semibold text-[38px] leading-[1.06] md:text-[54px] md:leading-[1.04] tracking-tight">
              The people behind <span className="text-[#F7A822]">the smiles.</span>
            </h1>

            <p className="mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-white/80 max-w-xl">
              Hawthorne Village Dental Care is a team of dedicated health professionals serving your
              oral health in a comfortable environment: dentists, hygienists and a front office that
              patients thank by name in their reviews.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                data-testid="team-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-13 md:h-14 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_16px_40px_-10px_rgba(10,25,47,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </a>
              <a
                data-testid="team-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-13 md:h-14 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "25+", v: "Years led by Dr. Sarna" },
                { k: "7", v: "Languages spoken" },
                { k: "10k+", v: "Milton smiles cared for" },
                { k: "12", v: "Community awards" },
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
              {/* Premium stock placeholder — replace with clinic photography (see public/images/stock/PLACEHOLDERS.md) */}
              <img
                src={`${process.env.PUBLIC_URL}/images/stock/clinic-modern.jpg`}
                alt="Inside Hawthorne Village Dental Care, home of our Milton dental team"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#1A73E8]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Our promise</div>
                <div className="font-semibold text-[#0A192F]">Personalized care</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] max-w-[230px]">
              <Smile className="w-5 h-5 text-[#0F9D58] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Greeted with a smile</div>
                <div className="text-[#64748B]">by the entire staff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedDentist() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="team-featured" className="reveal py-14 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-3">
            Lead dentist
          </div>
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
            Led by <span className="font-light text-[#64748B]">Dr. Raju Sarna.</span>
          </h2>
        </div>

        <div className="rounded-[32px] bg-white border border-slate-100 overflow-hidden shadow-[0_20px_60px_-25px_rgba(10,25,47,0.18)] grid lg:grid-cols-[1fr_1.4fr]">
          <div className="relative min-h-[320px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/dr-sarna-portrait.jpg`}
              alt="Dr. Raju Sarna, DDS, lead dentist at Hawthorne Village Dental Care"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[center_top]"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[#4285F4] font-medium">
              Doctor of Dental Surgery
            </div>
            <h3 className="mt-2 text-[20px] md:text-[24px] font-semibold text-[#0A192F] tracking-tight">
              Dr. Raju Sarna
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#475569] max-w-2xl">
              A UCSF graduate who completed his AEGD at UCLA, where he also served as a Preceptor,
              Dr. Sarna concentrates on implant-assisted dental rehabilitation and aesthetics, and
              maintains this high-end, boutique-style practice in Milton. He holds Fellowships with
              the ICOI, the International Association for Orthodontics and the Academy of General
              Dentistry.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["FICOI", "FIAO", "FAGD", "UCSF", "UCLA"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 px-3 py-1.5 text-[12.5px] font-semibold text-[#0A192F]"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-[#4285F4]" /> {c}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href={`${process.env.PUBLIC_URL}/dr-sarna`}
                data-testid="team-sarna-profile-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-6 text-[14.5px] font-medium hover:-translate-y-0.5 transition-all"
              >
                View full profile <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="team-sarna-book-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 text-[14.5px] font-medium text-[#0A192F] transition-all"
              >
                <Calendar className="w-4 h-4" /> Book with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m, tid }) {
  return (
    <div
      data-testid={tid}
      className="rounded-[24px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={m.photo}
          alt={`${m.name}, ${m.role} at Hawthorne Village Dental Care`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#4285F4] font-medium">{m.role}</div>
        <h3 className="mt-1 text-[21px] font-semibold text-[#0A192F]">{m.name}</h3>
        <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B] flex-1">{m.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {m.chips.map((c) => (
            <span key={c} className="rounded-full bg-[#F8FAFC] border border-slate-200 px-2.5 py-1 text-[11.5px] font-medium text-[#334155]">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamGroup({ id, eyebrow, titleA, titleB, members, cols = "sm:grid-cols-2 lg:grid-cols-2", bg = "bg-white" }) {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid={`team-${id}`} className={`reveal py-24 md:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-3">{eyebrow}</div>
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
            {titleA} <span className="font-light text-[#64748B]">{titleB}</span>
          </h2>
        </div>
        <div className={`grid ${cols} gap-6`}>
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} tid={`team-${id}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLoved() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="team-why" className="reveal bg-gradient-to-b from-[#F3FAF5] via-[#E6F4EA] to-[#F3FAF5] overflow-hidden relative">
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20 text-center">
        <div className="text-[13px] uppercase tracking-[0.14em] text-[#0F9D58] font-semibold mb-3">
          Why patients love our team
        </div>
        <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
          Kindness, <span className="font-light text-[#64748B]">consistently.</span>
        </h2>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {whyLoved.map((t, i) => (
            <li
              key={t.title}
              data-testid={`team-why-item-${i}`}
              className="rounded-2xl bg-white/80 hover:bg-white px-5 py-4 shadow-[0_2px_10px_rgba(15,157,88,0.08)] hover:shadow-[0_8px_20px_rgba(15,157,88,0.15)] transition-all"
            >
              <span className="w-10 h-10 rounded-xl bg-[#E6F4EA] text-[#0F9D58] flex items-center justify-center">
                <t.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="mt-4 font-semibold text-[15px] text-[#0A192F] leading-tight">{t.title}</div>
              <div className="mt-1.5 text-[13.5px] text-[#475569] leading-relaxed">{t.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="team-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <FeaturedDentist />
        <TeamGroup
          id="members"
          eyebrow="The team"
          titleA="Dentists, hygienists"
          titleB="and the front office."
          members={[...team.dentists, ...team.hygienists, ...team.admin]}
          cols="sm:grid-cols-2 lg:grid-cols-4"
        />
        <WhyLoved />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
