import { useParams, Navigate } from "react-router-dom";
import BlogPostTemplate from "@/pages/blog/BlogPostTemplate";
import { techPages } from "@/pages/technology/index";
import { servicePages } from "@/pages/services/index";
import { blogPostsBySlug } from "@/pages/blog/index";

// Root-level slugs serve either a technology page or a blog post,
// preserving the live site's URL structure.
export default function RootSlug() {
  const { slug } = useParams();
  // Technologies now live on the consolidated /technology page.
  if (techPages[slug]) return <Navigate to={`/technology#${slug}`} replace />;
  const post = blogPostsBySlug[slug];
  if (post) return <BlogPostTemplate post={post} />;
  // Old links sometimes used unprefixed service slugs; send them to the canonical URL.
  const baseSlug = slug.replace(/-in-milton$/, "");
  if (servicePages[baseSlug]) return <Navigate to={`/services/${baseSlug}-in-milton`} replace />;
  return <Navigate to="/" replace />;
}
