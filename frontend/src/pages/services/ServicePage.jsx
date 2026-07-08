import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "./index";

export default function ServicePage() {
  const { slug } = useParams();
  const config = servicePages[slug];
  if (!config) return <Navigate to="/" replace />;
  return <ServicePageTemplate config={config} />;
}
