export type EventCategory = "Workshop" | "Company Visit" | "Networking" | "Career Talk";
export type EventStatus = "Open for Registration" | "Coming Soon" | "Registration Closed";

export interface EventItem {
  slug: string;
  title: string;
  partnerCompany: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  shortDescription: string;
  fullDescription: string;
  registrationPeriod: { from: string; to: string };
}

export const events: EventItem[] = [
  {
    slug: "unilever-fmcg-workshop",
    title: "FMCG Brand Management Workshop",
    partnerCompany: "Unilever Thailand",
    date: "05 Sep 2026",
    time: "13:00 - 16:00",
    location: "Chulalongkorn Business School, Room 301",
    category: "Workshop",
    status: "Open for Registration",
    shortDescription:
      "Hands-on session on brand strategy and go-to-market planning led by Unilever brand managers.",
    fullDescription:
      "Join Unilever Thailand's brand management team for an interactive workshop covering brand positioning, campaign planning, and go-to-market execution. Participants will work in small groups on a live mini case and present recommendations to a panel of Unilever managers.",
    registrationPeriod: { from: "10 Aug 2026", to: "01 Sep 2026" },
  },
  {
    slug: "pttgc-site-visit",
    title: "PTTGC Rayong Site Visit",
    partnerCompany: "PTT Global Chemical",
    date: "20 Sep 2026",
    time: "08:00 - 17:00",
    location: "PTTGC Rayong Complex",
    category: "Company Visit",
    status: "Open for Registration",
    shortDescription:
      "Full-day visit to PTTGC's petrochemical complex with plant tour and MT program briefing.",
    fullDescription:
      "Experience PTT Global Chemical's operations firsthand with a guided plant tour, sustainability briefing, and a Q&A session with current Management Trainees. Transportation from Chulalongkorn University is provided.",
    registrationPeriod: { from: "15 Aug 2026", to: "10 Sep 2026" },
  },
  {
    slug: "scb-networking-night",
    title: "SCB Networking Night",
    partnerCompany: "Siam Commercial Bank",
    date: "28 Sep 2026",
    time: "18:00 - 20:30",
    location: "SCB Park Plaza, Ratchayothin",
    category: "Networking",
    status: "Coming Soon",
    shortDescription:
      "Casual networking evening with SCB executives, alumni, and current MT program participants.",
    fullDescription:
      "An evening of structured networking rounds and open mingling with SCB leadership, HR, and alumni of the SCB Future Banker program. Business casual attire recommended.",
    registrationPeriod: { from: "01 Sep 2026", to: "20 Sep 2026" },
  },
  {
    slug: "unilever-career-talk",
    title: "Career Talk: Life as an MT",
    partnerCompany: "Unilever Thailand",
    date: "12 Oct 2026",
    time: "17:00 - 19:00",
    location: "Chulalongkorn Business School Auditorium",
    category: "Career Talk",
    status: "Coming Soon",
    shortDescription:
      "Panel discussion with current and former Unilever Future Leaders Programme trainees.",
    fullDescription:
      "Hear directly from Unilever Future Leaders Programme alumni about day-to-day responsibilities, rotation structure, and tips for a strong application. Open floor Q&A follows the panel.",
    registrationPeriod: { from: "15 Sep 2026", to: "05 Oct 2026" },
  },
  {
    slug: "pepsico-case-workshop",
    title: "PepsiCo Case Cracking Workshop",
    partnerCompany: "PepsiCo Thailand",
    date: "18 Oct 2026",
    time: "13:00 - 17:00",
    location: "Chulalongkorn Business School, Room 205",
    category: "Workshop",
    status: "Coming Soon",
    shortDescription:
      "Learn structured case-solving frameworks used in PepsiCo's assessment center.",
    fullDescription:
      "PepsiCo talent acquisition leads will walk through a sample assessment-center case, share evaluation criteria, and coach participants through a live practice case in small groups.",
    registrationPeriod: { from: "20 Sep 2026", to: "12 Oct 2026" },
  },
  {
    slug: "central-retail-visit",
    title: "Central Retail Headquarters Visit",
    partnerCompany: "Central Retail Corporation",
    date: "02 Nov 2026",
    time: "09:00 - 15:00",
    location: "Central Retail Head Office, Bangkok",
    category: "Company Visit",
    status: "Registration Closed",
    shortDescription:
      "Behind-the-scenes look at Central Retail's merchandising and omnichannel operations.",
    fullDescription:
      "Tour Central Retail's headquarters to see how merchandising, supply chain, and omnichannel teams collaborate. Includes a briefing on the Central Group Management Trainee pathway.",
    registrationPeriod: { from: "01 Sep 2026", to: "25 Sep 2026" },
  },
];
