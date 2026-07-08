// Content config for /services/sleep-apnea.
const config = {
  slug: "sleep-apnea",
  name: "Sleep Apnea",
  testIdPrefix: "sleep",

  meta: {
    title: "Snoring & Sleep Apnea Treatment - Hawthorne Village Dental Care",
    description:
      "Hawthorne Village Dental Care is your sleep clinic in Milton, if you're suffering from sleep disorders such as sleep apnea and snoring.",
    procedure: {
      alternateName: "Oral Appliance Therapy for Snoring and Obstructive Sleep Apnea",
      description:
        "Custom-fitted oral appliances that gently reposition the jaw during sleep to keep the airway open, treating snoring and obstructive sleep apnea without surgery or CPAP.",
      howPerformed:
        "The airway and jaw are assessed, a custom-fitted snoring appliance is made for the patient, and the appliance is worn nightly to hold the jaw in a position that keeps the airway from collapsing.",
    },
  },

  hero: {
    eyebrow: "Snoring and sleep apnea treatment in Milton",
    titleA: "Quiet nights,",
    titleB: "restful mornings.",
    intro:
      "Snoring is a sign that something is wrong with your breathing during sleep — and it can progress to obstructive sleep apnea, which raises the risk of stroke, heart attack and hypertension. A custom-fitted oral appliance holds your jaw in position so your airway stays open, all night.",
    bookLabel: "Book an Assessment",
    image: {
      src: "https://images.unsplash.com/photo-1759540638947-82b58f341f52?w=1200&q=80&auto=format&fit=crop",
      alt: "A patient sleeping soundly after snoring appliance treatment in Milton",
    },
    stats: [
      { k: "90%", v: "Appliance effectiveness" },
      { k: "40%", v: "of adults 40+ snore" },
      { k: "CPAP", v: "Comfortable alternative" },
      { k: "0%", v: "Financing available" },
    ],
    floatBottomLeft: { icon: "Moon", label: "Worn at night", value: "Custom oral appliance" },
    floatTopRight: { icon: "ShieldCheck", title: "Non-surgical", sub: "and non-intrusive" },
  },

  awards: {
    titleA: "Sleep care from an",
    titleB: "award-winning team.",
    subtitle:
      "The same Milton clinic families have voted for in 12 consecutive community awards also serves as a trusted sleep clinic for snoring and obstructive sleep apnea.",
  },

  intro: {
    eyebrow: "What is a snoring appliance",
    titleA: "A small device",
    titleB: "with a big job.",
    paragraph:
      "Snoring happens when throat muscles relax during sleep and the airway partially collapses — the structures vibrate as air rushes past. A snoring appliance is worn in the mouth at night and gently repositions your jaw to optimize your airway while you sleep. Getting there is simple:",
    image: {
      src: "https://images.unsplash.com/photo-1770009534034-85be3c774f60?w=1200&q=80&auto=format&fit=crop",
      alt: "A custom-fitted oral appliance similar to those used for snoring and sleep apnea",
    },
    floatCards: [
      { icon: "Wind", title: "Open airway", sub: "all night long" },
      { icon: "Feather", title: "Less intrusive", sub: "than surgery or CPAP" },
    ],
    parts: [
      {
        icon: "Stethoscope",
        kicker: "Step 1",
        title: "Assess your airway",
        desc: "Dr. Sarna evaluates your snoring, jaw position and airway to confirm an oral appliance is the right fit for your situation.",
      },
      {
        icon: "Ruler",
        kicker: "Step 2",
        title: "Custom-fit your appliance",
        desc: "Your appliance is made to fit your mouth precisely, holding the jaw in the proper position so the airway can't collapse.",
      },
      {
        icon: "Moon",
        kicker: "Step 3",
        title: "Sleep — actually sleep",
        desc: "Worn nightly, the appliance keeps breathing smooth and quiet, restoring the restful sleep your health depends on.",
      },
    ],
    closingNote:
      "Snoring appliances are effective 90% of the time and are much less intrusive than the alternatives — surgery and the CPAP system.",
  },

  context: {
    eyebrow: "Why snoring matters",
    titleA: "Snoring isn't just noise.",
    titleB: "It's a warning.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=80&auto=format&fit=crop",
        alt: "A calm, rested patient after treating obstructive sleep apnea",
      },
      headline: "Untreated apnea can lead to permanent damage. It's that serious.",
      caption:
        "Whether it's you or your child who suffers from this disorder, Dr. Sarna may be able to help before it causes lasting harm.",
    },
    cards: [
      {
        icon: "Heart",
        title: "Heart and stroke risk",
        desc: "Snoring and sleep apnea increase the risk of stroke, heart attack and hypertension.",
      },
      {
        icon: "Gauge",
        title: "Daytime fatigue",
        desc: "Disrupted sleep leads to sleepiness that erodes your ability to function at home and at work.",
      },
      {
        icon: "Ear",
        title: "Second-hand snoring",
        desc: "Your snoring disrupts your partner's sleep too — everyone in the bedroom loses rest.",
      },
      {
        icon: "Baby",
        title: "Children snore too",
        desc: "Airway problems affect kids as well, and early assessment can prevent long-term damage.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits of oral appliance therapy",
    titleA: "Why patients choose",
    titleB: "an appliance.",
    stat: {
      icon: "Moon",
      value: "90%",
      label: "of the time, appliances work",
      note: "Snoring appliances are effective 90% of the time — without surgery and without a CPAP machine.",
    },
    cards: [
      {
        icon: "Wind",
        title: "A comfortable CPAP alternative",
        desc: "For mild to moderate cases, a small custom appliance replaces the mask, hose and hum of a CPAP machine.",
      },
      {
        icon: "Feather",
        title: "No surgery involved",
        desc: "The appliance simply repositions your jaw — far less intrusive than surgical alternatives.",
      },
      {
        icon: "Ruler",
        title: "Custom-fitted to you",
        desc: "Made for your mouth, so it stays comfortable and effective night after night.",
      },
      {
        icon: "RefreshCw",
        title: "Restores real rest",
        desc: "Normal, smooth, unobstructed breathing is the key to a genuinely restful night's sleep.",
      },
      {
        icon: "ShieldPlus",
        title: "Protects long-term health",
        desc: "Treating the airway lowers the serious cardiovascular risks that ride along with untreated apnea.",
      },
    ],
    cta: {
      title: "Tired of being tired?",
      sub: "Book an assessment with Dr. Sarna and find out whether an oral appliance can help.",
    },
  },

  options: {
    eyebrow: "How we can help",
    titleA: "From screening",
    titleB: "to sound sleep.",
    cards: [
      {
        title: "Snoring assessment",
        desc: "An evaluation of your airway, jaw and symptoms to understand what's disrupting your breathing.",
      },
      {
        title: "Custom oral appliance",
        desc: "A night-time appliance that gently repositions your jaw to keep the airway open while you sleep.",
      },
      {
        title: "CPAP-intolerant patients",
        desc: "A comfortable option for mild to moderate cases when the CPAP mask just isn't workable for you.",
      },
      {
        title: "Children's airway checks",
        desc: "Kids can suffer from airway obstruction too — early evaluation helps prevent lasting problems.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Sleep medicine,",
    titleB: "from your dentist.",
    paragraph:
      "Dentists are often the first to spot airway trouble — and the right custom appliance can change your nights entirely. Dr. Sarna has treated Milton families for over 25 years and fits every appliance personally, with the clinic's full diagnostic toolkit behind him.",
    items: [
      {
        icon: "Award",
        name: "25+ years of experience",
        benefit:
          "Dr. Sarna has been helping Milton patients — adults and children — breathe and sleep better for decades.",
      },
      {
        icon: "Ruler",
        name: "Custom-fitted appliances",
        benefit:
          "Every appliance is made for your mouth and adjusted until it's comfortable enough to wear every night.",
      },
      {
        icon: "ScanLine",
        name: "3D airway imaging",
        benefit:
          "Our 3D Cone Beam CT supports precise airway analysis with ultra-low radiation.",
      },
      {
        icon: "Clock",
        name: "Evenings and Saturdays",
        benefit:
          "Open until 7 PM weekdays and 2 PM Saturdays, so appointments fit around work and school.",
      },
    ],
  },

  cost: {
    paragraph:
      "Oral appliance therapy is often far more affordable than people expect, and many insurance plans contribute. You'll get a written estimate before anything begins, we bill your insurer directly, and 0% financing over 6 to 24 months is available if you'd like to spread the cost.",
  },

  faqEyebrow: "Snoring and sleep apnea questions",
  faqs: [
    {
      q: "What actually causes snoring?",
      a: "When you fall asleep, your throat muscles relax. If the airway partially collapses or throat structures are enlarged, air rushing past makes them vibrate — that's the snoring sound. It means your breathing is obstructed, not just noisy.",
    },
    {
      q: "Is snoring dangerous?",
      a: "It can be. Snoring can progress from upper airway resistance syndrome to obstructive sleep apnea, where breathing actually stops during sleep. Sleep apnea increases the risk of stroke, heart attack and hypertension, so persistent snoring deserves an assessment.",
    },
    {
      q: "How does a snoring appliance work?",
      a: "It's a custom-fitted device worn in the mouth at night that gently repositions your jaw to keep your airway from collapsing. Air keeps flowing smoothly, so the vibration — and the snoring — stops.",
    },
    {
      q: "Do oral appliances really work?",
      a: "Snoring appliances are effective 90% of the time, and they're much less intrusive than the alternatives — surgery or the CPAP system.",
    },
    {
      q: "How is this different from CPAP?",
      a: "CPAP pushes pressurized air through a mask you wear all night. An oral appliance is a small custom mouthpiece with no mask, hose or machine — a comfortable alternative for mild to moderate cases and for patients who can't tolerate CPAP.",
    },
    {
      q: "My child snores. Should I be concerned?",
      a: "Children can suffer from airway obstruction too. If your child snores regularly, it's worth an evaluation — Dr. Sarna may be able to help before it leads to lasting problems with sleep, growth or focus.",
    },
    {
      q: "Is a sleep appliance covered by insurance?",
      a: "Many plans contribute to oral appliance therapy. We provide a written estimate first, bill your insurance directly, and offer 0% financing over 6 to 24 months.",
    },
  ],
};

export default config;
