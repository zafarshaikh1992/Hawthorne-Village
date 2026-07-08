// Content config for /services/root-canal-therapy.
// Copy carried over from the previously approved standalone Root Canal Therapy page.
const config = {
  slug: "root-canal-therapy",
  name: "Root Canal Therapy",
  testIdPrefix: "rct",

  meta: {
    title: "Root Canal Therapy in Milton | Hawthorne Village Dental Care",
    description:
      "Gentle, microscope-guided root canal therapy in Milton, Ontario. The Wand painless anaesthesia, single-visit treatment, direct billing and CDCP accepted. Same-day emergency appointments: (905) 864-3368.",
    procedure: {
      alternateName: "Endodontic Treatment",
      description:
        "Microscope-guided root canal therapy that removes infected nerve tissue, seals the canals and saves the natural tooth, usually in a single visit.",
      howPerformed:
        "Local anaesthesia via The Wand, canal cleaning and disinfection under a Seiler surgical microscope, sealing of the canals, and restoration with a crown when needed.",
    },
  },

  hero: {
    eyebrow: "Root canal therapy in Milton",
    titleA: "Save the tooth.",
    titleB: "Lose the pain.",
    intro:
      "A root canal has a scary reputation it no longer deserves. With microscope-guided treatment and computer-controlled freezing, most patients at our Milton dental clinic walk out saying the same thing: that was easier than a filling.",
    bookLabel: "Book Appointment",
    image: {
      src: "https://images.unsplash.com/photo-1643401142249-84ef35c123c9?w=1200&q=80&auto=format&fit=crop",
      alt: "Root canal therapy being performed at Hawthorne Village Dental Care in Milton",
    },
    stats: [
      { k: "40×", v: "Microscope precision" },
      { k: "~90 min", v: "Typical single visit" },
      { k: "Same-day", v: "Emergency slots" },
      { k: "0%", v: "Financing available" },
    ],
    floatBottomLeft: { icon: "Microscope", label: "Seiler microscope", value: "40× magnification" },
    floatTopRight: { icon: "ShieldCheck", title: "The Wand freezing", sub: "Most patients feel nothing" },
  },

  awards: {
    titleA: "Endodontics from an",
    titleB: "award-winning team.",
    subtitle:
      "The Milton clinic voted into 12 consecutive community awards performs root canals under a surgical microscope — precision most patients never knew was an option.",
  },

  intro: {
    eyebrow: "What actually happens",
    titleA: "Calm steps,",
    titleB: "usually one visit.",
    paragraph:
      "A root canal removes the inflamed nerve tissue inside a tooth, disinfects the canals, and seals them so bacteria can't return — saving the natural tooth and stopping the pain. At our clinic it goes like this:",
    image: {
      src: "https://images.unsplash.com/photo-1662837775146-871f817c7887?w=1200&q=80&auto=format&fit=crop",
      alt: "A CEREC crown that restores a tooth after root canal therapy",
    },
    floatCards: [
      { icon: "Microscope", title: "40× magnification", sub: "finds canals eyes can't" },
      { icon: "Timer", title: "~90 minutes", sub: "most finish in one visit" },
    ],
    parts: [
      {
        icon: "Wand2",
        kicker: "Step 1",
        title: "Get numb, comfortably",
        desc: "The Wand delivers freezing so gradually that most patients never feel the needle. If dental visits make you anxious, oral sedation is available too.",
      },
      {
        icon: "Microscope",
        kicker: "Step 2",
        title: "Clean out the infection",
        desc: "Working under the Seiler microscope at up to 40 times magnification, Dr. Sarna removes the inflamed nerve tissue and disinfects every canal.",
      },
      {
        icon: "Crown",
        kicker: "Step 3",
        title: "Seal and restore",
        desc: "Each canal is filled and sealed so bacteria cannot get back in, then a crown — often milled the same day with CEREC — restores full strength.",
      },
    ],
    closingNote:
      "Most root canals here are finished in a single visit of about 90 minutes, and you can chew on the restored tooth like nothing ever happened.",
  },

  context: {
    eyebrow: "When a tooth needs help",
    titleA: "Is your tooth trying to",
    titleB: "tell you something?",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1000&q=80&auto=format&fit=crop",
        alt: "Same-day emergency dental care for severe tooth pain in Milton",
      },
      headline: "In pain right now? Don't wait it out.",
      caption:
        "We hold same-day emergency slots every weekday — infection does not resolve on its own, and sooner is genuinely easier.",
    },
    cards: [
      {
        icon: "Activity",
        title: "A toothache that won't quit",
        desc: "Pain that throbs on its own, without biting or chewing, often means the nerve inside the tooth is inflamed.",
      },
      {
        icon: "Thermometer",
        title: "Hot and cold sensitivity",
        desc: "A sip of coffee or ice water that keeps stinging long after you swallow is a classic warning sign.",
      },
      {
        icon: "CircleDot",
        title: "Pain when you bite down",
        desc: "Pressure that hurts on one specific tooth can point to infection forming at the root.",
      },
      {
        icon: "Droplets",
        title: "Swollen or tender gums",
        desc: "A small pimple-like bump on the gum near a sore tooth is often an abscess trying to drain.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why treat it now",
    titleA: "Keeping your tooth",
    titleB: "beats every alternative.",
    stat: {
      icon: "Microscope",
      value: "40×",
      label: "microscope magnification",
      note: "Magnification finds tiny canals a naked eye would miss — a big part of why treatment succeeds long term.",
    },
    cards: [
      {
        icon: "Feather",
        title: "Easier than its reputation",
        desc: "With the tooth fully numb, most patients say the treatment felt like getting a filling — the pain they remember was the infection.",
      },
      {
        icon: "Smile",
        title: "Keeps your natural tooth",
        desc: "An extraction is cheaper on the day, then costs more later when the gap needs an implant or bridge.",
      },
      {
        icon: "Timer",
        title: "Usually one visit",
        desc: "Most root canals at our Milton clinic are completed in a single visit of 60 to 90 minutes.",
      },
      {
        icon: "ShieldCheck",
        title: "Stops the spread",
        desc: "Untreated infection spreads into the bone and can form a painful abscess — treatment ends it.",
      },
      {
        icon: "Crown",
        title: "Same-day crown after",
        desc: "CEREC crowns are milled in-office, so the protective crown is often placed the same day with no temporaries.",
      },
    ],
    cta: {
      title: "A tooth has been talking to you?",
      sub: "Sooner is genuinely easier, cheaper and more comfortable. Call us today.",
    },
  },

  options: {
    eyebrow: "How we treat it",
    titleA: "Built around",
    titleB: "your comfort.",
    cards: [
      {
        title: "Single-visit root canal",
        desc: "Most treatments finish in one visit of about 90 minutes — molars with extra canals are flagged upfront.",
      },
      {
        title: "Same-day CEREC crown",
        desc: "Back teeth usually need a crown afterwards; ours are milled in-office, often the same day.",
      },
      {
        title: "Sedation options",
        desc: "Oral sedation and The Wand painless anaesthesia for patients who'd rather not be fully present for it.",
      },
      {
        title: "Same-day emergency slots",
        desc: "Severe tooth pain rarely waits for a convenient time — we hold appointments every weekday.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Root canals succeed",
    titleB: "on the details.",
    paragraph:
      "A root canal is only as good as the canals it finds and cleans. That's why Dr. Sarna performs them under a surgical microscope rather than by feel, and why our Milton clinic invests in imaging that shows the whole root before a single instrument touches your tooth.",
    items: [
      {
        icon: "Microscope",
        name: "Seiler surgical microscope",
        benefit:
          "Up to 40 times magnification finds tiny canals a naked eye would miss, which is a big part of why treatment succeeds long term.",
      },
      {
        icon: "Syringe",
        name: "The Wand painless anaesthesia",
        benefit:
          "Computer-controlled freezing that patients consistently describe as the easiest injection they have never felt.",
      },
      {
        icon: "ScanLine",
        name: "3D CBCT and digital X-rays",
        benefit:
          "Low-radiation 3D imaging maps curved or extra roots before we start, so there are no surprises mid-treatment.",
      },
      {
        icon: "Timer",
        name: "Same-day emergency slots",
        benefit:
          "Severe tooth pain rarely waits for a convenient time. We hold appointments every weekday for exactly this reason.",
      },
    ],
  },

  cost: {
    paragraph:
      "A root canal at our Milton clinic typically runs from $900 to $1,600 depending on the tooth, with molars at the higher end, plus a crown if one is needed. You always get a written estimate first, and most dental insurance plans cover a significant portion.",
  },

  faqEyebrow: "Root canal questions",
  faqs: [
    {
      q: "Does a root canal hurt?",
      a: "Not the way its reputation suggests. With The Wand delivering the freezing and the tooth fully numb, most patients say the treatment felt like getting a filling. The pain people remember is usually the infection before treatment, not the root canal itself.",
    },
    {
      q: "How long does a root canal take?",
      a: "Most root canals at our Milton clinic are completed in a single visit of 60 to 90 minutes. Molars with extra canals can occasionally need a second visit, and we tell you that upfront, never partway through.",
    },
    {
      q: "How much does a root canal cost in Milton?",
      a: "A root canal at Hawthorne Village Dental Care typically ranges from $900 to $1,600 depending on the tooth, with molars at the higher end. You receive a written estimate before treatment begins, we bill your insurance directly, and CDCP is accepted.",
    },
    {
      q: "Can't I just have the tooth pulled instead?",
      a: "You can, but keeping your natural tooth is almost always the better long-term choice. An extraction is cheaper on the day, then costs more later when the gap needs an implant or bridge to stop neighbouring teeth from shifting.",
    },
    {
      q: "Will I need a crown afterwards?",
      a: "Back teeth usually do, because a treated tooth becomes more brittle over time. We mill CEREC crowns in-office, so the crown is often placed the same day with no temporaries and no second appointment.",
    },
    {
      q: "What happens if I put it off?",
      a: "The infection does not resolve on its own. It spreads into the bone, can form a painful abscess, and makes the tooth harder to save. If a tooth has been talking to you, sooner is genuinely easier, cheaper and more comfortable.",
    },
    {
      q: "Can you see me today for tooth pain?",
      a: "In most cases, yes. We reserve same-day emergency slots every weekday. Call (905) 864-3368 and our front desk will fit you in as quickly as possible, often within hours.",
    },
  ],
};

export default config;
