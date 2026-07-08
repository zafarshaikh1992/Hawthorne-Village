// Content config for /services/dental-implants — the approved master template page.
const config = {
  slug: "dental-implants",
  name: "Dental Implants",
  testIdPrefix: "implants",

  meta: {
    title: "Dental Implants in Milton, ON - Hawthorne Village Dental Care",
    description:
      "Are you suffering from permanent tooth loss? Hawthorne Village Dental Care offers same day dental implants service in Milton. Book your appointment now.",
    procedure: {
      alternateName: "Dental Implant Surgery",
      description:
        "Dental implants provide a secure foundation for replacement teeth that look, feel and function like natural teeth, placed by an ICOI Fellow using 3D CBCT-guided planning.",
      howPerformed:
        "3D CBCT-guided treatment planning, placement of a titanium implant that replaces the tooth root, healing and osseointegration supported by Plasma Rich Fibrin when indicated, and restoration with a custom crown.",
    },
  },

  hero: {
    eyebrow: "Dental implants in Milton",
    titleA: "Missing teeth,",
    titleB: "replaced for good.",
    intro:
      "Dental implants provide a secure foundation for replacement teeth that look, feel and function like natural teeth. Eliminate the problems of poorly fitting dentures or missing teeth, and rediscover the comfort and confidence to enjoy your life.",
    bookLabel: "Book a Consultation",
    image: {
      src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1200&q=80&auto=format&fit=crop",
      alt: "Dental implant treatment at Hawthorne Village Dental Care in Milton",
    },
    stats: [
      { k: "ICOI", v: "Implantology Fellow" },
      { k: "95%+", v: "10-year success rate" },
      { k: "3D", v: "CBCT-guided planning" },
      { k: "0%", v: "Financing available" },
    ],
    floatBottomLeft: { icon: "Award", label: "Dr. Raju Sarna", value: "ICOI Fellow, Implantology" },
    floatTopRight: { icon: "ShieldCheck", title: "Gold standard", sub: "for tooth replacement" },
  },

  awards: {
    titleA: "Implant dentistry from an",
    titleB: "award-winning team.",
    subtitle:
      "Dr. Sarna holds an ICOI Fellowship in Implantology, and our Milton clinic has earned 12 consecutive community awards from the Milton Champion, Hamilton Spectator and Three Best Rated.",
  },

  intro: {
    eyebrow: "What is a dental implant",
    titleA: "The closest thing to",
    titleB: "the tooth you lost.",
    paragraph:
      "Dental implants are currently the gold standard for tooth replacement. They look and feel like natural teeth, and a permanent implant lets you regain a natural-looking, healthy and functional smile. Each one has two simple parts:",
    image: {
      src: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?w=1200&q=80&auto=format&fit=crop",
      alt: "Model of a full-arch dental implant restoration, the gold standard for tooth replacement",
    },
    floatCards: [
      { icon: "HeartPulse", title: "A lifetime", sub: "with proper care" },
      { icon: "Bone", title: "Stimulates the jaw", sub: "and prevents bone loss" },
    ],
    parts: [
      {
        icon: "Anchor",
        kicker: "Part 1",
        title: "The implant",
        desc: "A small titanium post that replaces the root portion of your missing tooth, anchored securely in the jawbone.",
      },
      {
        icon: "Crown",
        kicker: "Part 2",
        title: "The crown",
        desc: "The visible tooth above the gums — custom-crafted porcelain matched to your natural teeth in shape and shade.",
      },
    ],
    closingNote:
      "Like your own teeth, implants stimulate the jaw and prevent bone loss — firm, safe support for your teeth with benefits that can last a lifetime.",
  },

  context: {
    eyebrow: "Why replace missing teeth",
    titleA: "One missing tooth",
    titleB: "rarely stays one problem.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&q=80&auto=format&fit=crop",
        alt: "Dental model showing how a missing tooth affects neighbouring teeth",
      },
      headline: "A gap does more damage than most people expect.",
      caption:
        "Dr. Sarna considers all of these factors when determining how to achieve dental aesthetics in harmony with your physiology.",
    },
    cards: [
      {
        icon: "MoveDiagonal",
        title: "Neighbouring teeth drift",
        desc: "Even one missing tooth lets neighbouring and opposing teeth tip, drift and over-erupt into the gap.",
      },
      {
        icon: "Utensils",
        title: "Chewing and speech suffer",
        desc: "Losing several teeth can make it genuinely hard to chew comfortably and speak clearly.",
      },
      {
        icon: "Layers",
        title: "Your bite can collapse",
        desc: "A collapsing bite puts stress on jaw joints and facial muscles, often showing up as tension and headaches.",
      },
      {
        icon: "Frown",
        title: "Facial structure changes",
        desc: "Reduced facial height from bone loss can create an older appearance and more noticeable facial lines.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits of a permanent solution",
    titleA: "Why patients choose",
    titleB: "implants.",
    stat: {
      icon: "HeartPulse",
      value: "95%+",
      label: "ten-year success rate",
      note: "With good oral hygiene and regular checkups, implants often last a lifetime.",
    },
    cards: [
      {
        icon: "Smile",
        title: "Looks and feels natural",
        desc: "Implants are designed to look, feel and function like your own teeth, in harmony with your smile and facial features.",
      },
      {
        icon: "Anchor",
        title: "A secure, permanent foundation",
        desc: "No slipping, no adhesives. Implants give replacement teeth firm, safe support you can rely on every day.",
      },
      {
        icon: "Bone",
        title: "Prevents further bone loss",
        desc: "Like natural roots, implants stimulate the jawbone, helping preserve it instead of letting it shrink away.",
      },
      {
        icon: "Utensils",
        title: "Eat what you love again",
        desc: "Rediscover the joy of eating healthy, varied food without the discomfort of poorly fitting dentures.",
      },
      {
        icon: "Sparkles",
        title: "Confidence in every laugh",
        desc: "Speak clearly, laugh comfortably and smile without thinking about it. That's the point of it all.",
      },
    ],
    cta: {
      title: "Wondering if implants are right for you?",
      sub: "Book a consultation with Dr. Sarna and get an honest assessment of your options.",
    },
  },

  options: {
    eyebrow: "Treatment options",
    titleA: "From one tooth",
    titleB: "to a whole smile.",
    cards: [
      {
        title: "Single tooth implant",
        desc: "One implant and one crown replace a single missing tooth without touching the healthy teeth beside it.",
      },
      {
        title: "Implant-supported bridge",
        desc: "Two or more implants anchor a fixed bridge, replacing several missing teeth in a row.",
      },
      {
        title: "Teeth In a Day",
        desc: "Full-arch implants placed and restored with new teeth in a single visit, one of our signature services.",
      },
      {
        title: "Bone grafting support",
        desc: "If bone has already been lost, grafting rebuilds a solid foundation so implants have something to hold onto.",
      },
    ],
  },

  galleryId: "implants-bridges-veneers",

  whyHere: {
    titleA: "Implants succeed",
    titleB: "on expertise.",
    paragraph:
      "Dr. Sarna is a recognized leader in cosmetic, restorative and implant dentistry with an emphasis on re-creating natural aesthetic beauty. He proudly holds an ICOI Fellowship in Implantology, and every implant at our Milton clinic is planned on 3D imaging before a single instrument touches your mouth.",
    items: [
      {
        icon: "Award",
        name: "ICOI Fellowship in Implantology",
        benefit:
          "Dr. Sarna proudly holds a Fellowship with the International Congress of Oral Implantologists, with training at UCSF and UCLA.",
      },
      {
        icon: "ScanLine",
        name: "3D CBCT-guided planning",
        benefit:
          "Every implant is planned on a 3D scan of your jaw, so placement is precise and predictable — no surprises mid-treatment.",
      },
      {
        icon: "HeartPulse",
        name: "Plasma Rich Fibrin healing",
        benefit:
          "Your own platelets are used to speed healing after placement and grafting, a technique few Milton clinics offer.",
      },
      {
        icon: "Timer",
        name: "Teeth In a Day capability",
        benefit:
          "For qualifying patients, full-arch implants are placed and restored with new teeth in a single visit.",
      },
    ],
  },

  cost: {
    paragraph:
      "A single implant with crown at our Milton clinic typically ranges from $3,500 to $5,500 depending on bone quality and materials. You always get a written estimate first, and financing lets you spread the cost so it never has to delay care.",
  },

  faqEyebrow: "Dental implant questions",
  faqs: [
    {
      q: "What exactly is a dental implant?",
      a: "A dental implant is the closest solution to a natural tooth. It has two components: an implant portion that replaces the root of the tooth, and a crown portion that replaces the visible tooth above the gums. Together they look, feel and function like a natural tooth.",
    },
    {
      q: "How much does a dental implant cost in Milton?",
      a: "A single implant with crown at Hawthorne Village Dental Care typically ranges from $3,500 to $5,500 depending on bone quality and materials. You receive a written estimate before any treatment begins, we bill your insurance directly, and 0% financing is available over 6 to 24 months.",
    },
    {
      q: "How long do dental implants last?",
      a: "With good oral hygiene and regular checkups, dental implants have a 95%+ ten-year success rate and often last a lifetime. Like your own teeth, they stimulate the jaw and help prevent further bone loss.",
    },
    {
      q: "Does getting an implant hurt?",
      a: "Most patients are surprised by how comfortable the procedure is. We use The Wand computer-controlled anaesthesia, and oral sedation is available for anxious patients. Most people describe the recovery as milder than a tooth extraction.",
    },
    {
      q: "What if I've already lost bone in my jaw?",
      a: "That's common, and usually solvable. Dental bone grafting rebuilds lost jawbone so implants have a solid foundation to hold onto, and Plasma Rich Fibrin made from your own platelets helps the area heal faster.",
    },
    {
      q: "Why does a missing tooth need replacing at all?",
      a: "Even one missing tooth can cause neighbouring and opposing teeth to tip, drift and over-erupt. Several missing teeth can affect chewing, speech and your bite, stressing jaw joints and facial muscles, and bone loss can change your facial appearance over time. Replacing the tooth stops that chain reaction.",
    },
    {
      q: "Are implants covered by insurance or the CDCP?",
      a: "Many dental insurance plans cover part of implant treatment, and we bill your provider directly so there's no reimbursement wait. We're also a participating CDCP provider. Our front desk will confirm your exact coverage before treatment begins.",
    },
  ],
};

export default config;
