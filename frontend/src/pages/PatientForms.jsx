import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  Download,
  FileText,
  Clock,
  ClipboardCheck,
  Landmark,
  Printer,
  Mail,
  HeartPulse,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/patient-forms/";
const FORM_PDF = `${process.env.PUBLIC_URL}/forms/patient-registration-form.pdf`;

const whyAdvance = [
  {
    icon: Clock,
    title: "Skip the waiting-room paperwork",
    desc: "Arrive with your form done and your first visit starts in the chair, not on a clipboard.",
  },
  {
    icon: HeartPulse,
    title: "A more accurate health history",
    desc: "At home you can check medication names and dates properly — details that genuinely shape safe care.",
  },
  {
    icon: Landmark,
    title: "Direct billing, ready to go",
    desc: "With your insurance details captured up front, we can bill your provider directly from visit one.",
  },
];

const helpfulInfo = [
  "Have your insurance policy details handy — insurer, plan and member numbers.",
  "List your current medications and any health conditions your dental team should know about.",
  "Bring the completed form with you, or arrive a few minutes early to finish it at the front desk.",
  "Questions about any section? Call us — the front desk walks patients through it every day.",
];

const faqs = [
  {
    q: "Which form do I need to fill out?",
    a: "New patients complete our Patient Registration package — one download covers your personal details, health history and insurance information. Download it above, print it, and bring it to your first visit.",
  },
  {
    q: "Can I fill the form out at the office instead?",
    a: "Of course. Arrive about ten minutes before your appointment and our front desk will set you up — though completing it at home means your visit starts sooner.",
  },
  {
    q: "Do you bill my insurance directly?",
    a: "Yes. We bill almost every major Canadian insurer directly — including Manulife, Sun Life, Canada Life, GreenShield, Desjardins and Blue Cross — and we're a participating CDCP provider. The registration form captures the details we need to set that up.",
  },
  {
    q: "Does every family member need their own form?",
    a: "Yes — each new patient, including children, needs their own registration form so their individual health history and coverage are on file.",
  },
  {
    q: "What if I'm not sure how to answer something?",
    a: "Leave it blank and ask. Call us at (905) 864-3368 or bring your questions to the front desk — we'll complete it together, no stress.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Patient Forms, Milton - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Please fill up the dental patient forms before you schedule to our Milton Hawthorne Village Dental Care Clinic for your treatment."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
          { "@type": "ListItem", position: 2, name: "Patient Forms", item: PAGE_URL },
        ],
      },
    ];

    const scripts = schemas.map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-forms-${i}`;
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
  }, []);

  return null;
}

function Hero() {
  const ref = useReveal();
  return (
    <section data-testid="forms-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pt-14 md:pb-20">
        <nav data-testid="forms-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Patient Forms</span>
        </nav>

        <div ref={ref} className="reveal max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
            Patient forms
          </div>
          <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
            Paperwork, done <span className="font-light text-[#0284C7]">before you arrive.</span>
          </h1>
          <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-2xl">
            Before coming in, feel free to download and complete the patient registration form.
            Five quiet minutes at home means your first appointment starts on time — in the chair,
            where it should.
          </p>
        </div>

        {/* Download card */}
        <div className="mt-12 rounded-[32px] bg-[#0A192F] text-white p-8 md:p-12 relative overflow-hidden max-w-4xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <FileText className="w-8 h-8 text-[#7DD3FC]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-[28px] font-semibold tracking-tight">
                New Patient Registration Form
              </h2>
              <p className="mt-2 text-[15px] text-white/70 leading-relaxed max-w-xl">
                One PDF package covering your personal details, health history and insurance
                information — everything we need before your first visit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href={FORM_PDF}
                download="Hawthorne-Village-Dental-Patient-Registration.pdf"
                data-testid="forms-download-btn"
                className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" /> Download Form
              </a>
              <a
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="forms-book-btn"
                className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-7 text-[15px] font-medium hover:bg-[#E6F8F3] transition-colors"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyAdvance() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="forms-why" className="reveal py-24 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Why complete forms in advance
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[#0A192F] tracking-tight leading-[1.05]">
            Five minutes at home, <span className="font-light text-[#64748B]">a smoother first visit.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyAdvance.map((b, i) => (
            <div
              key={b.title}
              data-testid={`forms-benefit-${i}`}
              className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <b.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{b.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Helpful checklist */}
        <div className="mt-10 rounded-[24px] bg-white border border-slate-100 p-8 md:p-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-[21px] font-semibold text-[#0A192F]">Before you start, have these ready</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {helpfulInfo.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#475569]">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-[#0284C7]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-[#64748B]">
            <span className="inline-flex items-center gap-1.5"><Printer className="w-4 h-4 text-[#0284C7]" /> Print at home and bring it in</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#0284C7]" /> Or email it to {clinic.email}</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#0284C7]" /> Questions? {clinic.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormsFAQ() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="forms-faq" className="reveal py-24 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-14">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Patient form questions
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[#0A192F] tracking-tight leading-[1.05]">
            Asked at the front desk, <span className="font-light text-[#64748B]">every week.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`forms-faq-item-${i}`}
              className="border-b border-slate-200 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-display text-[17px] md:text-lg font-medium text-[#0A192F] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-[#475569] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function PatientForms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="forms-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <WhyAdvance />
        <FormsFAQ />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
