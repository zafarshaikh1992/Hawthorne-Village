import { useEffect, useMemo, useState } from "react";
import { Calendar, Phone, ChevronRight, ChevronLeft, Clock, Search } from "lucide-react";
import Header from "@/components/site/Header";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { blogPosts } from "@/pages/blog/index";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/blog/";
const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Health Blog | Hawthorne Village Dental Care, Milton";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Oral health articles from the team at Hawthorne Village Dental Care in Milton: practical advice on children's dentistry, gum health, orthodontics, dental technology and more."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Hawthorne Village Dental Care Blog",
      url: PAGE_URL,
      blogPost: blogPosts.slice(0, 10).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://hawthornevillagedental.ca/${p.slug}/`,
        datePublished: p.datePublished,
      })),
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-blog-0";
    s.text = JSON.stringify(schema);
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

function PostCard({ p }) {
  return (
    <a
      href={`${process.env.PUBLIC_URL}/${p.slug}`}
      data-testid={`blog-card-${p.slug}`}
      className="group rounded-[24px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        {p.hero && (
          <img
            src={`${process.env.PUBLIC_URL}${p.hero}`}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
        )}
        <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur text-[#0A192F] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider shadow-sm">
          {p.category}
        </span>
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1 text-center sm:text-left">
        <h3 className="font-semibold text-[#0A192F] text-[18px] leading-snug group-hover:text-[#1A73E8] transition-colors">
          {p.title}
        </h3>
        <div className="mt-2.5 flex items-center justify-center sm:justify-start gap-4 text-[12.5px] text-[#94A3B8]">
          <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.dateDisplay}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {p.readingMinutes} min read</span>
        </div>
        <div className="mt-6 pt-1 mt-auto text-center">
          <span className="inline-flex items-center justify-center rounded-full border-2 border-[#1A73E8] text-[#1A73E8] px-7 py-2.5 text-[12.5px] font-semibold uppercase tracking-wide group-hover:bg-[#1A73E8] group-hover:text-white transition-colors">
            Read More
          </span>
        </div>
      </div>
    </a>
  );
}

const PER_PAGE = 12;

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!q) return true;
      return p.title.toLowerCase().includes(q) || p.contentHtml.toLowerCase().includes(q);
    });
  }, [query, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const rest = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const goTo = (n) => {
    setPage(n);
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section data-testid="blog-index" className="py-14 md:py-20 bg-gradient-to-b from-white via-[#E8F0FE]/40 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Intro heading */}
        <div id="articles" className="text-center mb-10 md:mb-12 scroll-mt-28">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-semibold mb-3">
            Welcome to our
          </div>
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#0A192F] tracking-tight leading-[1.08]">
            Dental articles
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#F7A822]" />
        </div>

        {/* Search + filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              data-testid="blog-search"
              placeholder="Search articles…"
              className="w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 py-3 text-[15px] text-[#0A192F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/40 focus:border-[#1A73E8] transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => { setCat(c); setPage(1); }}
                data-testid={`blog-filter-${c.replace(/\s+/g, "-").toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-all ${
                  cat === c
                    ? "bg-[#1A73E8] text-white shadow-[0_8px_24px_rgba(26,115,232,0.35)]"
                    : "bg-white border border-slate-200 text-[#334155] hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {rest.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <PostCard key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-10 text-center text-[15px] text-[#64748B]">
            No articles match your search. Try a different term or category.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav data-testid="blog-pagination" aria-label="Blog pages" className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goTo(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              aria-label="Previous page"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#334155] flex items-center justify-center hover:border-slate-300 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n)}
                data-testid={`blog-page-${n}`}
                aria-current={n === safePage ? "page" : undefined}
                className={`w-11 h-11 rounded-full text-[14.5px] font-semibold flex items-center justify-center transition-all ${
                  n === safePage
                    ? "bg-[#1A73E8] text-white shadow-[0_8px_24px_rgba(26,115,232,0.35)]"
                    : "bg-white border border-slate-200 text-[#334155] hover:border-slate-300"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#334155] flex items-center justify-center hover:border-slate-300 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

        {/* CTA panel */}
        <div className="mt-14 rounded-[32px] bg-gradient-to-br from-[#4285F4] via-[#2A72E8] to-[#1967D2] text-white p-8 md:p-12 relative overflow-hidden shadow-[0_40px_90px_-30px_rgba(25,103,210,0.6)]">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-[24px] md:text-[30px] font-semibold tracking-tight">
                Reading is good. <span className="font-light text-white/70">Checkups are better.</span>
              </h2>
              <p className="mt-2 text-[15px] text-white/85 max-w-xl">
                The best oral-health advice is the kind tailored to your mouth. Book a visit and get
                answers from the team behind these articles.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 shrink-0">
              <a
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="blog-cta-book"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#1967D2] px-7 text-[15px] font-semibold shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 rounded-full border border-white/30 text-white px-7 text-[15px] font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroAwards = [
  { src: "cert-01.png", alt: "Three Best Rated, Best Business of 2019 Excellence award" },
  { src: "cert-06.png", alt: "Readers' Choice Awards 2019, Diamond winner" },
  { src: "cert-07.png", alt: "Readers' Choice Awards 2020, Diamond winner" },
  { src: "cert-09.png", alt: "Canadian Champion Readers' Choice Awards 2021, Platinum winner" },
  { src: "cert-11.png", alt: "Hamilton Spectator Readers' Choice Awards 2022, Platinum winner" },
];

function Hero() {
  const ref = useReveal();
  return (
    <section data-testid="blog-hero" className="relative overflow-hidden bg-[#245583] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#4285F4]/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#1A3F63]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-14 md:pt-12 md:pb-20">
        <nav data-testid="blog-breadcrumb" aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[13px] text-white/60">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">Blog</span>
        </nav>

        <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
          <div className="text-[13px] uppercase tracking-[0.14em] text-white/75 font-semibold mb-4">
            The resource centre
          </div>
          <h1 className="font-semibold text-[38px] leading-[1.06] md:text-[54px] md:leading-[1.04] tracking-tight">
            Dental health, <span className="text-[#F7A822]">explained properly.</span>
          </h1>
          <p className="mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-white/80 max-w-2xl mx-auto">
            Practical articles from the Hawthorne Village Dental Care team, covering children's
            teeth, gum health, orthodontics, dental anxiety and the technology behind modern care.
          </p>

          {/* Award medallions, like the homepage hero */}
          <div data-testid="blog-hero-awards" className="mt-9 flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {heroAwards.map((a) => (
              <div key={a.src} className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(2,8,23,0.6)] flex items-center justify-center overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/images/certifications/${a.src}`}
                  alt={a.alt}
                  loading="eager"
                  className="w-[82%] h-[82%] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              data-testid="blog-hero-book"
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 md:h-14 rounded-full bg-[#1A73E8] hover:bg-[#185ABC] text-white px-9 py-3.5 text-[15px] font-semibold uppercase tracking-wide shadow-[0_16px_40px_-10px_rgba(10,25,47,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" /> Book Online
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-13 md:h-14 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="blog-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <BlogIndex />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
