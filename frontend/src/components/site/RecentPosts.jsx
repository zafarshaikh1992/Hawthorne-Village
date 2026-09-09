import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/pages/blog/index";
import { useReveal } from "@/hooks/useReveal";

// Recent posts in the reference site's arrangement: section title in a left
// rail, post cards to the right with the date overlaid on the image and a
// "Read Post" action per card.
export default function RecentPosts() {
  const ref = useReveal();
  const posts = blogPosts.slice(0, 2);

  return (
    <section ref={ref} data-testid="recent-posts" className="reveal py-14 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
          {/* Title rail */}
          <div className="lg:sticky lg:top-28">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#4285F4] font-semibold mb-3">
              From our blog
            </div>
            <h2 className="text-3xl md:text-[40px] text-[#0A192F] tracking-tight leading-[1.08] font-semibold">
              Recent Posts
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#64748B]">
              Practical advice from our Milton dental team, written for real patients.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/blog`}
              data-testid="recent-posts-all"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0A192F] hover:border-slate-400 hover:shadow-sm transition-all"
            >
              View all articles <ArrowRight className="w-4 h-4 text-[#4285F4]" />
            </a>
          </div>

          {/* Post cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article
                key={p.slug}
                data-testid={`recent-post-${p.slug}`}
                className="group rounded-[24px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_40px_-20px_rgba(10,25,47,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(10,25,47,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <a href={`${process.env.PUBLIC_URL}/${p.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={`${process.env.PUBLIC_URL}${p.hero}`}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#0A192F]/85 backdrop-blur text-white text-[12px] font-medium px-3.5 py-1.5">
                    {p.dateDisplay}
                  </span>
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <a
                    href={`${process.env.PUBLIC_URL}/${p.slug}`}
                    className="text-[18px] font-semibold text-[#0A192F] leading-snug group-hover:text-[#1A73E8] transition-colors"
                  >
                    {p.title}
                  </a>
                  <div className="mt-3 flex items-center gap-3 text-[12.5px] text-[#94A3B8]">
                    <span>{p.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {p.readingMinutes} min read
                    </span>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 mt-auto">
                    <a
                      href={`${process.env.PUBLIC_URL}/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1A73E8] hover:text-[#0A192F] transition-colors"
                    >
                      Read Post <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
