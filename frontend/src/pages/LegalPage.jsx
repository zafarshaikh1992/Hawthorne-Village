import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";

// Shared layout for the Privacy Policy and Terms of Use pages.
export default function LegalPage({ title, metaTitle, metaDescription, slug, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = metaTitle;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute("content", metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", `https://hawthornevillagedental.ca/${slug}/`);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
    };
  }, [metaTitle, metaDescription, slug]);

  return (
    <div data-testid={`${slug}-page`} className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8F0FE] blur-3xl opacity-70" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 pt-10 pb-14 md:pt-14 md:pb-16">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
              <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#0A192F] font-medium">{title}</span>
            </nav>

            <h1 className="font-display font-medium text-[36px] leading-[1.08] md:text-[48px] md:leading-[1.04] text-[#0A192F] tracking-tight">
              {title}
            </h1>
            <p className="mt-3 text-[14px] text-[#64748B]">Last updated: {updated}</p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 bg-white">
          <div
            className="max-w-4xl mx-auto px-6 md:px-8 space-y-8 text-[15.5px] leading-relaxed text-[#475569]
              [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:md:text-[26px] [&_h2]:text-[#0A192F] [&_h2]:tracking-tight [&_h2]:mt-2
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5"
          >
            {children}
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
