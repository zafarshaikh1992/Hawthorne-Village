import { useEffect, useState } from "react";
import {
  Phone,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Printer,
  Send,
  AlertTriangle,
  Landmark,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic, insurers, formspreeEndpoint } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/contact/";
const FAX = "905-864-3031";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#0A192F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/40 focus:border-[#1A73E8] transition-all";

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Contact Dental Clinic in Milton, ON - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Contact Hawthorne Village Dental Care for full range family dental services. We look forward to meeting you to provide our best dental care in Milton."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-contact-0";
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
  const ref = useReveal();
  return (
    <section data-testid="contact-hero" className="relative overflow-hidden bg-[#245583] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-14 md:pt-12 md:pb-20">
        <nav data-testid="contact-breadcrumb" aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[13px] text-white/60">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">Contact</span>
        </nav>

        <div ref={ref} className="reveal max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.14em] text-white/75 font-semibold mb-4">
            Contact Hawthorne Village Dental Care
          </div>
          <h1 className="font-semibold text-[38px] leading-[1.06] md:text-[54px] md:leading-[1.04] tracking-tight">
            We're easy <span className="text-[#F7A822]">to reach.</span>
          </h1>
          <p className="mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-white/80 max-w-2xl">
            Complete the form below and we will contact you as soon as possible. Urgent care is
            usually provided the same day. Prefer to talk? Our front desk answers in under a minute.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactMain() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "Checkup & cleaning", time: "Morning", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.target);
    data.append("_subject", `Appointment request from ${form.name}: ${form.reason}`);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", reason: "Checkup & cleaning", time: "Morning", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const cards = [
    {
      icon: MapPin,
      label: "Address",
      lines: [`${clinic.address.street}`, `${clinic.address.city}, ${clinic.address.region} ${clinic.address.postal}`],
      href: "https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3",
      external: true,
    },
    { icon: Phone, label: "Phone", lines: [clinic.phone], href: clinic.phoneHref },
    { icon: Mail, label: "Email", lines: [clinic.email], href: `mailto:${clinic.email}` },
    { icon: Printer, label: "Fax", lines: [FAX] },
  ];

  return (
    <section ref={ref} data-testid="contact-main" className="reveal py-14 md:py-20 bg-gradient-to-b from-white via-[#E8F0FE]/50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Form on the online-booking blue card treatment */}
        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="relative rounded-[32px] bg-gradient-to-br from-[#4285F4] via-[#2A72E8] to-[#1967D2] text-white overflow-hidden shadow-[0_40px_90px_-30px_rgba(25,103,210,0.6)] p-8 md:p-10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-[#0A192F]/30 blur-3xl" />
          </div>
          <div className="relative">
          <h2 className="text-2xl md:text-[28px] font-semibold tracking-tight">
            Send us a message
          </h2>
          <p className="mt-2 text-[14.5px] text-white/80">
            We'll get back to you as soon as possible, usually the same day.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="c-name" className="block text-[13px] font-medium text-white/90 mb-1.5">Name *</label>
              <input id="c-name" name="name" required value={form.name} onChange={set("name")} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-[13px] font-medium text-white/90 mb-1.5">Email *</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={set("email")} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="c-phone" className="block text-[13px] font-medium text-white/90 mb-1.5">Phone *</label>
              <input id="c-phone" name="phone" type="tel" required value={form.phone} onChange={set("phone")} className={inputClass} placeholder="(905) 000-0000" />
            </div>
            <div>
              <label htmlFor="c-reason" className="block text-[13px] font-medium text-white/90 mb-1.5">Reason for your visit *</label>
              <select id="c-reason" name="reason" value={form.reason} onChange={set("reason")} className={inputClass}>
                {["Checkup & cleaning", "Dental emergency", "Dental implants", "Invisalign / braces", "Cosmetic consultation", "New patient visit", "Other"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="c-time" className="block text-[13px] font-medium text-white/90 mb-1.5">Best time to contact you *</label>
              <select id="c-time" name="time" value={form.time} onChange={set("time")} className={inputClass}>
                {["Morning", "Afternoon", "Evening"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-msg" className="block text-[13px] font-medium text-white/90 mb-1.5">Message</label>
              <textarea id="c-msg" name="message" rows={4} value={form.message} onChange={set("message")} className={inputClass} placeholder="Tell us a little about what you need…" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              data-testid="contact-submit-btn"
              className="inline-flex items-center gap-2 h-12 md:h-13 rounded-full bg-white text-[#1967D2] px-8 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:pointer-events-none"
            >
              <Send className="w-4 h-4" /> {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
            <span className="text-[13px] text-white/75">
              Or book directly online. It takes 60 seconds.
            </span>
          </div>

          {status === "success" && (
            <p role="status" className="mt-4 text-[14px] font-medium text-white bg-white/15 rounded-xl px-4 py-3">
              Thanks — your message was sent. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-4 text-[14px] font-medium text-white bg-[#B31412]/40 rounded-xl px-4 py-3">
              Something went wrong sending your message. Please call us at {clinic.phone} instead.
            </p>
          )}
          </div>
        </form>

        {/* Contact cards */}
        <div className="grid gap-4">
          {cards.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href, ...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
                data-testid={`contact-card-${c.label.toLowerCase()}`}
                className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-[#E8F0FE] text-[#4285F4] flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium">{c.label}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="mt-0.5 font-display text-[16.5px] font-medium text-[#0A192F] break-all">{l}</div>
                  ))}
                </div>
              </Wrapper>
            );
          })}

          {/* Hours card */}
          <div data-testid="contact-card-hours" className="rounded-[24px] bg-gradient-to-br from-[#FDD663] via-[#F4C20D] to-[#E8A800] text-[#0A192F] p-6 shadow-[0_20px_50px_-25px_rgba(232,168,0,0.65)]">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-white text-[#B06000] shadow-sm flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#0A192F]/70 font-semibold mb-2">Office hours</div>
                <ul className="space-y-1.5 text-[14px] font-medium">
                  {[
                    ["Mon – Thu", "10 AM – 7 PM"],
                    ["Friday", "9 AM – 6 PM"],
                    ["Saturday", "9 AM – 2 PM"],
                    ["Sunday", "Closed"],
                  ].map(([d, t]) => (
                    <li key={d} className="flex justify-between gap-4">
                      <span>{d}</span>
                      <span className={t === "Closed" ? "text-[#0A192F]/60" : "text-[#0A192F]/80"}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyAndInsurance() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="contact-extra" className="reveal bg-gradient-to-b from-[#F3FAF5] via-[#E6F4EA] to-[#F3FAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-6">
        {/* Emergency */}
        <div className="rounded-[32px] bg-gradient-to-br from-[#E94235] via-[#DB4437] to-[#B31412] text-white p-8 md:p-12 relative overflow-hidden shadow-[0_40px_90px_-30px_rgba(179,20,18,0.55)]">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#FDD663]" strokeWidth={1.75} />
            </span>
            <h2 className="mt-5 font-display text-2xl md:text-[28px] font-semibold tracking-tight">
              Dental emergency?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85 max-w-md">
              Walk-ins are welcome and we hold same-day emergency slots every weekday for pain,
              swelling and broken teeth. Urgent care is usually provided the same day. Outside
              office hours, call and follow the after-hours prompt.
            </p>
            <a
              href={clinic.phoneHref}
              data-testid="contact-emergency-call"
              className="mt-6 inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#B31412] px-7 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
          </div>
        </div>

        {/* Insurance */}
        <div className="rounded-[32px] bg-gradient-to-br from-[#E6F4EA] to-[#D8EEE1] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_70px_-35px_rgba(15,157,88,0.35)]">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/40 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
              <Landmark className="w-6 h-6 text-[#0F9D58]" strokeWidth={1.75} />
            </span>
            <h2 className="mt-5 font-display text-2xl md:text-[28px] font-semibold text-[#0A192F] tracking-tight">
              Direct billing & insurance
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#334155] max-w-md">
              We bill almost every major Canadian insurer directly, with no paperwork and no
              reimbursement wait, and we're a participating CDCP provider.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {insurers.slice(0, 8).map((i) => (
                <span key={i} className="rounded-full bg-white/80 border border-white px-3 py-1 text-[12px] font-medium text-[#0A192F]">
                  {i}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-[#334155]">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0F9D58]" /> CDCP accepted</span>
              <span className="inline-flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#4285F4]" /> 0% financing over 6 to 24 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="contact-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <ContactMain />
        <EmergencyAndInsurance />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
