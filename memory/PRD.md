# Hawthorne Village Dental Care — Product Requirements

## Original Problem Statement
Redesign the complete website for Hawthorne Village Dental Care, Milton, Ontario — a premium, high-converting dental site optimised for Local SEO, Google AI Overviews, GEO (ChatGPT/Gemini/Claude/Perplexity), Core Web Vitals, WCAG AA. Must feel handcrafted by a premium creative agency, never AI-generated. Tech per spec: Next.js — mapped to React + FastAPI + MongoDB (Emergent stack) per user confirmation.

## User Personas
- **Milton family (primary)** — busy parents wanting convenient hours, direct billing, and a dentist their kids don't fear.
- **New patient searching Google** — wants a fast-loading page with proof (reviews, credentials, CDCP acceptance) and easy booking.
- **Emergency patient** — needs a same-day slot, prominent phone number, and immediate reassurance.
- **Cosmetic/implant patient** — wants credentials, before/after evidence, and transparent pricing.

## Core Requirements (Static)
- React + FastAPI + MongoDB (backend currently untouched — landing-only).
- Colour palette: Deep Navy `#0A192F`, Dental Blue `#0284C7`, Mint highlight `#E6F8F3`, CTA Warm Blue `#2563EB`, Success `#10B981`. No bright saturated colours.
- Typography: Outfit (display) + Inter (body).
- Design principles: breathing room, soft rounded cards, subtle shadows, micro-animations, mobile-first.
- Semantic HTML, JSON-LD schema, meta tags, sitemap.xml, robots.txt, canonical URL.
- WCAG AA — focus rings, `prefers-reduced-motion`, alt text on all images.

## Architecture
- `/app/frontend/src/pages/Home.jsx` — top-level composition of the homepage.
- `/app/frontend/src/components/site/*` — 15 section components (Header, Hero, SocialProof, WhyChoose, MeetDentist, Services, Technology, SmileGallery, PatientJourney, Insurance, FAQ, FinalCTA, Footer, StickyActions, BookingDialog, JsonLd).
- `/app/frontend/src/lib/site-data.js` — single source of truth for content (clinic details, services, testimonials, FAQs, gallery, insurers).
- `/app/frontend/src/hooks/useReveal.js` — IntersectionObserver-based fade-in-up reveal.
- Backend untouched (no forms persist per user choice).

## What's Been Implemented — 2026-12-07
- **Homepage (v1)** — complete, testing agent verified 100% pass on 24 review items.
  - Sticky header with emergency banner, glassmorphism, mobile hamburger.
  - Hero with H1, dual CTAs, floating trust cards (Google 4.9, CDCP), asymmetric layout.
  - Testimonials marquee (6 real Google reviews).
  - Why-Choose bento grid (8 features).
  - Meet Dr. Raju Sarna with credentials and photo.
  - Services grid (12 services with images and blurbs).
  - Technology showcase (dark navy section, 8 items).
  - Before/After smile gallery (3 cases).
  - Patient Journey timeline (4 steps).
  - Insurance + CDCP mint-highlight block (10 insurers).
  - 26-question FAQ accordion.
  - Final navy CTA section + comprehensive footer.
  - Mobile floating sticky Call/Book bar.
  - JSON-LD schema (LocalBusiness/Dentist, FAQPage, Physician) injected in <head>.
  - Meta tags, Open Graph, Twitter cards, canonical URL, robots.txt, sitemap.xml.
- Booking dialog is **client-side only** — shows success toast + inline confirmation, no persistence (per user choice).

## Prioritized Backlog

### P0 — Next
- Real clinic photography swap-in (currently curated Unsplash/Pexels).
- Inline appointment form on hero (short 3-field variant for higher conversion).

### P1 — Expand pages
- About / Meet the Team page (Dr. Malhi, Dr. Lulu bios + hygienist team).
- Individual service pages (Implants, Invisalign, Emergency, Children's, Cosmetic, Root Canal, Whitening, Sedation, Wisdom Teeth, Crowns, Bridges, Dentures, Preventive) — each with FAQ/HowTo schema.
- Emergency Dentist page (heavy conversion focus).
- CDCP dedicated page.
- Blog with 12+ topical-authority articles (family/pediatric/implants/CDCP/Milton community).
- Contact page with embedded Google Map, insurance enquiry form.
- Patient Reviews page.
- Privacy / Accessibility policy pages.

### P2 — Enhancements
- Live-chat placeholder + exit-intent capture.
- Backend booking persistence + email notification (Resend/SendGrid).
- Sitemap generation for expanded pages.
- Actual insurer logo images instead of text pills.
- Replace native date input with shadcn Calendar/Popover for consistency.
- Add data-testid on insurer cards.

## Success Criteria
- Feels like a $30–50k custom healthcare site by a Canadian agency.
- Outperforms current site in UX, conversion, SEO, mobile usability, accessibility, speed.
- Positions Hawthorne Village Dental Care as Milton's leading family dental clinic.
