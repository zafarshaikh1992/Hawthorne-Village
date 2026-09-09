import { useEffect } from "react";
import { Calendar, Phone, ChevronRight, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { servicePages } from "@/pages/services/index";
import { techPages } from "@/pages/technology/index";
import { useReveal } from "@/hooks/useReveal";

// Resolve a related-page path ("/services/x" or "/x") to its page config.
function resolveConfig(path) {
  const slug = path.split("/").filter(Boolean).pop();
  return servicePages[slug] || techPages[slug] || null;
}

function PageMeta({ post }) {
  useEffect(() => {
    const pageUrl = `https://hawthornevillagedental.ca/${post.slug}/`;
    const prevTitle = document.title;
    document.title = post.metaTitle;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute("content", post.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", pageUrl);

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        url: pageUrl,
        ...(post.hero ? { image: `https://hawthornevillagedental.ca${post.hero}` } : {}),
        author: { "@type": "Person", name: "Dr. Raju Sarna", url: "https://hawthornevillagedental.ca/dr-sarna/" },
        publisher: { "@type": "Dentist", name: clinic.name, telephone: clinic.phone },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://hawthornevillagedental.ca/blog/" },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
    ];

    const scripts = schemas.map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-post-${i}`;
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
  }, [post]);

  return null;
}

function PostHero({ post }) {
  const ref = useReveal();
  return (
    <section data-testid="post-hero" className="relative">
      {/* Title banner on the site's blue block */}
      <div className="relative overflow-hidden bg-[#245583] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
          <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pt-12 md:pb-24">
          <nav data-testid="post-breadcrumb" aria-label="Breadcrumb" className="mb-9 flex items-center justify-center gap-1.5 text-[13px] text-white/60">
            <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href={`${process.env.PUBLIC_URL}/blog`} className="hover:text-white transition-colors">Blog</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium truncate max-w-[220px] sm:max-w-none">{post.title}</span>
          </nav>

          <div ref={ref} className="reveal text-center">
            <span className="inline-flex items-center rounded-full bg-white/15 border border-white/25 text-white px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em]">
              {post.category}
            </span>

            <h1 className="mt-5 font-semibold text-[32px] leading-[1.1] md:text-[44px] md:leading-[1.08] tracking-tight">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#F7A822]" /> {post.dateDisplay}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F7A822]" /> {post.readingMinutes} min read
              </span>
              <a href={`${process.env.PUBLIC_URL}/dr-sarna`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/sarna.jpg`}
                  alt="Dr. Raju Sarna"
                  className="w-6 h-6 rounded-full object-cover ring-2 ring-white/40"
                />
                Hawthorne Village Dental Care
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image overlaps the banner */}
      {post.hero && (
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 -mt-10 md:-mt-14">
          <div className="rounded-[32px] overflow-hidden ring-8 ring-white shadow-[0_30px_80px_-20px_rgba(10,25,47,0.35)]">
            <img
              src={`${process.env.PUBLIC_URL}${post.hero}`}
              alt={post.title}
              className="w-full h-auto max-h-[480px] object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      )}
    </section>
  );
}

// Early conversion card, styled after the reference site's exam card.
function ExamCard() {
  return (
    <div data-testid="post-exam-card" className="mt-10 rounded-[24px] bg-white border border-slate-100 shadow-[0_20px_50px_-25px_rgba(10,25,47,0.25)] overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="sm:w-40 md:w-48 shrink-0 bg-gradient-to-br from-[#4285F4] to-[#1967D2] flex items-center justify-center p-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/dr-sarna-portrait.jpg`}
            alt="Dr. Raju Sarna"
            loading="lazy"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top ring-4 ring-white/40"
          />
        </div>
        <div className="flex-1 p-6 md:p-7 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex-1 text-center sm:text-left">
            <div className="text-[18px] md:text-[20px] font-semibold text-[#0A192F]">Worried about your own smile?</div>
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1.5 text-[13.5px] text-[#475569]">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#0F9D58]" /> Full exam with digital X-rays</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#0F9D58]" /> Same-week appointments</span>
            </div>
          </div>
          <a
            href={clinic.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="post-exam-book"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-7 py-3 text-[13.5px] font-semibold uppercase tracking-wide shadow-[0_8px_24px_rgba(26,115,232,0.35)] hover:-translate-y-0.5 transition-all"
          >
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}

// CDCP note near the end of every article, echoing the homepage's red band.
function CdcpNote() {
  return (
    <div data-testid="post-cdcp" className="mt-12 rounded-[24px] bg-gradient-to-br from-[#E94235] via-[#DB4437] to-[#B31412] text-white p-7 md:p-9 relative overflow-hidden shadow-[0_30px_70px_-30px_rgba(179,20,18,0.55)]">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div className="relative">
        <div className="text-[11.5px] uppercase tracking-[0.16em] font-semibold text-white/80">Canadian Dental Care Plan</div>
        <div className="mt-2 text-[20px] md:text-[24px] font-semibold tracking-tight">Eligible for the CDCP? Your visit may be covered.</div>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/90 max-w-2xl">
          Many of the exams and treatments discussed in our articles are covered for eligible
          Canadians under the federal plan. We are a participating CDCP provider and bill directly,
          and our front desk will confirm your coverage before treatment begins.
        </p>
        <a
          href={clinic.phoneHref}
          data-testid="post-cdcp-call"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-[#B31412] px-6 py-2.5 text-[14px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all"
        >
          <Phone className="w-4 h-4" /> Ask about CDCP coverage
        </a>
      </div>
    </div>
  );
}

function AuthorBox() {
  return (
    <div data-testid="post-author" className="mt-12 rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-6 md:p-7 flex flex-col sm:flex-row items-start gap-5">
      <img
        src={`${process.env.PUBLIC_URL}/images/team/sarna.jpg`}
        alt="Dr. Raju Sarna, DDS"
        className="w-16 h-16 rounded-2xl object-cover shrink-0"
        loading="lazy"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-display text-[17px] font-semibold text-[#0A192F]">Dr. Raju Sarna, DDS</span>
          <BadgeCheck className="w-4 h-4 text-[#4285F4]" />
        </div>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[#64748B]">
          A UCSF-trained Doctor of Dental Surgery and ICOI Implantology Fellow, Dr. Sarna leads
          Hawthorne Village Dental Care in Milton, where these articles come from the same team
          that answers your questions chairside.
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/dr-sarna`}
          className="mt-2 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#4285F4] hover:text-[#1967D2] transition-colors"
        >
          Meet Dr. Sarna <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function RelatedServices({ post }) {
  const items = post.related.map((path) => ({ path, config: resolveConfig(path) })).filter((i) => i.config);
  if (!items.length) return null;

  return (
    <section data-testid="post-related" className="mt-12">
      <div className="text-[12px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-4">
        Related care at our Milton clinic
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(({ path, config }) => (
          <a
            key={path}
            href={`${process.env.PUBLIC_URL}${path}`}
            className="group rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="font-display text-[18px] font-semibold text-[#0A192F] leading-snug">{config.name}</div>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#64748B] line-clamp-2">{config.hero.intro}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#4285F4] group-hover:gap-1.5 transition-all">
              Learn more <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PostFAQ({ post }) {
  const primary = post.related.map(resolveConfig).find(Boolean);
  if (!primary) return null;
  const faqs = primary.faqs.slice(0, 3);

  return (
    <section data-testid="post-faq" className="mt-12">
      <div className="text-[12px] uppercase tracking-[0.14em] text-[#4285F4] font-medium mb-2">
        Common questions about {primary.name.toLowerCase()}
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 last:border-b-0">
            <AccordionTrigger className="text-left font-display text-[16.5px] font-medium text-[#0A192F] hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-[#475569] pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function PostCTA() {
  return (
    <div data-testid="post-cta" className="mt-8 flex flex-wrap items-center gap-4 rounded-[24px] bg-gradient-to-br from-[#4285F4] via-[#2A72E8] to-[#1967D2] text-white px-7 py-6 shadow-[0_30px_70px_-30px_rgba(25,103,210,0.6)]">
      <div className="flex-1 min-w-[240px]">
        <div className="font-display text-lg md:text-xl font-semibold">Questions about your own smile?</div>
        <div className="mt-1 text-[14.5px] text-white/80">
          Book a visit at our Milton clinic. New patients are always welcome.
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        <a
          href={clinic.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-11 rounded-full bg-white text-[#1967D2] px-6 text-[14.5px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all"
        >
          <Calendar className="w-4 h-4" /> Book Appointment
        </a>
        <a
          href={clinic.phoneHref}
          className="inline-flex items-center gap-2 h-11 rounded-full border border-white/30 text-white px-6 text-[14.5px] font-medium hover:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4" /> {clinic.phone}
        </a>
      </div>
    </div>
  );
}

export default function BlogPostTemplate({ post }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  return (
    <div data-testid="post-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta post={post} />
      <Header />
      <main>
        <PostHero post={post} />

        <article className="max-w-3xl mx-auto px-6 md:px-8 pt-4 pb-20 md:pb-24">
          <ExamCard />
          {/* Post content uses root-absolute links; prefix them so they work when
              the app is hosted under a sub-path. */}
          <div
            className="article-body mt-10"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml.replace(/href="\//g, `href="${process.env.PUBLIC_URL}/`),
            }}
          />
          <CdcpNote />
          <PostCTA />
          <AuthorBox />
          <RelatedServices post={post} />
          <PostFAQ post={post} />
        </article>

        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
