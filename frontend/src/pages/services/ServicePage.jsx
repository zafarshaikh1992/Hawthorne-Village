import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplateV2 from "./ServicePageTemplateV2";
import { servicePages } from "./index";

// All service pages use the redesigned template that matches the homepage.
// Canonical service URLs read "/services/<service>-in-milton"; bare slugs
// from older links redirect to the canonical form.
export default function ServicePage() {
  const { slug } = useParams();
  const baseSlug = slug.replace(/-in-milton$/, "");
  const config = servicePages[baseSlug];
  if (!config) return <Navigate to="/" replace />;
  if (!slug.endsWith("-in-milton")) {
    return <Navigate to={`/services/${baseSlug}-in-milton`} replace />;
  }
  return <ServicePageTemplateV2 config={config} />;
}
