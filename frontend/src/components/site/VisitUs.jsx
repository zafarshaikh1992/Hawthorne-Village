import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const directionsUrl =
  "https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3/@43.5286418,-79.8392422,17z/data=!4m13!1m7!3m6!1s0x882b6f29c581f29b:0x4d3bf41b39da4397!2s10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3!3b1!8m2!3d43.5286418!4d-79.8370535!3m4!1s0x882b6f29c581f29b:0x4d3bf41b39da4397!8m2!3d43.5286418!4d-79.8370535";

const embedUrl =
  "https://maps.google.com/maps?q=10220%20Derry%20Rd%20%23206%20Milton%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed";

const googleListingUrl =
  "https://www.google.com/maps/search/?api=1&query=Hawthorne%20Village%20Dental%20Care%2C%2010220%20Derry%20Rd%20%23206%2C%20Milton%2C%20ON";

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/HawthorneVillageDentalCare/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hawthorne_dental/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@hawthornevillagedentalcare7693" },
];

// Opening windows in 24h time, keyed by weekday, for the "Open Now" pill.
const openWindows = {
  Monday: [10, 19],
  Tuesday: [10, 19],
  Wednesday: [10, 19],
  Thursday: [10, 19],
  Friday: [9, 18],
  Saturday: [9, 14],
  Sunday: null,
};

export default function VisitUs() {
  const ref = useReveal();
  // Evaluate day and hour in the clinic's timezone so the open/closed
  // indicator is correct for visitors anywhere.
  const clinicNow = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    weekday: "long",
    hour: "numeric",
    hour12: false,
  });
  const [today, hourStr] = clinicNow.split(", ");
  const hour = parseInt(hourStr, 10);
  const win = openWindows[today];
  const isOpen = !!win && hour >= win[0] && hour < win[1];

  return (
    <section
      id="visit"
      ref={ref}
      data-testid="visit-section"
      className="reveal py-14 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] overflow-hidden border border-slate-100 grid lg:grid-cols-[1.05fr_1fr]">
          {/* Left: clinic details on brand navy */}
          <div className="relative bg-gradient-to-br from-[#4285F4] via-[#1A73E8] to-[#1967D2] p-10 md:p-14 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#0A192F]/30 blur-3xl" />
            </div>

            <div className="relative">
              <div className="text-[12px] uppercase tracking-[0.14em] text-white/85 font-medium mb-3">
                Visit our Milton dental clinic
              </div>
              <h2 className="text-[30px] md:text-[42px] font-semibold text-white tracking-tight leading-[1.08]">
                We&apos;re right here, <span className="font-light text-[#FDD663]">on Derry Road.</span>
              </h2>
              <p className="mt-4 text-[15px] text-white/70 leading-relaxed max-w-md">
                Free parking, ground-floor access and an easy drive from anywhere in Milton.
              </p>

              {/* Address / phone / email */}
              <ul className="mt-9 space-y-5 text-[15.5px] text-white/90">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 text-white/85 flex items-center justify-center shrink-0">
                    <MapPin className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="visit-directions-btn"
                    className="pt-2 hover:text-white transition-colors"
                  >
                    {clinic.address.street}, {clinic.address.city}, {clinic.address.region} {clinic.address.postal}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 text-white/85 flex items-center justify-center shrink-0">
                    <Phone className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <a href={clinic.phoneHref} data-testid="visit-call-btn" className="pt-2 hover:text-white transition-colors">
                    {clinic.phone}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 text-white/85 flex items-center justify-center shrink-0">
                    <Mail className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <a href={`mailto:${clinic.email}`} className="pt-2 hover:text-white transition-colors break-all">
                    {clinic.email}
                  </a>
                </li>
                {/* Today's hours + open indicator */}
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 text-white/85 flex items-center justify-center shrink-0">
                    <Clock className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <div className="pt-2 flex-1">
                    <ul className="space-y-1.5 max-w-[340px]">
                      {clinic.hours.map((h) => (
                        <li
                          key={h.day}
                          className={`flex items-center justify-between gap-4 ${h.day === today ? "text-white font-medium" : "text-white/75"}`}
                        >
                          <span>{h.day}</span>
                          <span className={h.time === "Closed" ? "text-white/50" : ""}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-medium ${isOpen ? "text-[#CEEAD6]" : "text-white/50"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-[#7BE8A8]" : "bg-white/40"}`} />
                      {isOpen ? "Open now" : "Currently closed"}
                    </div>
                  </div>
                </li>
              </ul>

              {/* Serving locations */}
              <div className="mt-9 pt-8 border-t border-white/10">
                <div className="font-display text-[19px] text-white mb-4">Serving locations</div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                  {clinic.neighbourhoods.slice(0, 6).map((n) => (
                    <li key={n} className="flex items-center gap-2 text-[14px] text-white/80">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-white/85" strokeWidth={2} />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA + socials */}
              <div className="mt-10 text-center sm:text-left">
                <a
                  href={clinic.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="visit-book-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#E8F0FE] text-[#1A73E8] px-7 py-3.5 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(10,25,47,0.4)] hover:-translate-y-0.5 transition-all"
                >
                  Book Appointment
                </a>

                <div className="mt-8 flex items-center gap-4">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-white/60 font-medium">
                    Follow us on
                  </span>
                  <div className="flex items-center gap-2.5">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Hawthorne Village Dental Care on ${label}`}
                        data-testid={`visit-social-${label.toLowerCase()}`}
                        className="w-10 h-10 rounded-full border border-white/15 text-white/85 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                      </a>
                    ))}
                    <a
                      href={googleListingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Hawthorne Village Dental Care on Google"
                      data-testid="visit-social-google"
                      className="w-10 h-10 rounded-full border border-white/15 text-white/85 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors font-semibold text-[17px]"
                    >
                      G
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map on light background */}
          <div className="relative bg-[#F8FAFC] min-h-[420px] lg:min-h-full">
            <iframe
              title="Hawthorne Village Dental Care, 10220 Derry Rd #206, Milton, ON"
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale-[15%]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
