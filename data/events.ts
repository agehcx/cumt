export type EventCategory = "Workshop" | "Company Visit" | "Networking" | "Career Talk" | "Career Fair";
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

// CUMT's own activity timeline, sourced from the CUMT Proposal deck (Sep 2026).
// Dates as stated in the proposal; several are not yet finalised.
export const events: EventItem[] = [
  {
    slug: "mt-alumni-roundtable",
    title: "MT Alumni Roundtable",
    partnerCompany: "CUMT",
    date: "10 Oct 2026",
    time: "TBA",
    location: "Chulalongkorn University",
    category: "Networking",
    status: "Coming Soon",
    shortDescription: "Roundtable conversation with Management Trainee alumni kicking off the first semester.",
    fullDescription:
      "An informal roundtable connecting CUMT members with alumni who have gone through Management Trainee and graduate programs, sharing firsthand experience on recruitment and early careers.",
    registrationPeriod: { from: "TBA", to: "TBA" },
  },
  {
    slug: "panel-talk-mt-career-fair",
    title: "Panel Talk & MT Career Fair",
    partnerCompany: "CUMT",
    date: "2-6 Nov 2026 (not yet finalised)",
    time: "TBA",
    location: "Sala Phra Kiao, Chulalongkorn University",
    category: "Career Fair",
    status: "Coming Soon",
    shortDescription:
      "CUMT's flagship career event connecting Chulalongkorn students with leading employers and MT opportunities.",
    fullDescription:
      "The MT Career Fair & Panel Talk, organized by CUMT, is a flagship career event designed to connect Chulalongkorn University students with leading employers and Management Trainee (MT) opportunities across industries. The day includes an executive panel on MT recruitment trends, a dedicated career fair floor, direct HR Q&A sessions, and exclusive mentoring sessions. Targeting around 20 leading corporate partners for an audience of ambitious, highly vetted Chulalongkorn students actively preparing for MT and strategic roles.",
    registrationPeriod: { from: "TBA", to: "TBA" },
  },
  {
    slug: "networking-company-visit",
    title: "Networking & Company Visit",
    partnerCompany: "CUMT",
    date: "Jan-Feb 2027",
    time: "TBA",
    location: "Partner company offices",
    category: "Company Visit",
    status: "Coming Soon",
    shortDescription: "Networking sessions with company HR and on-site company visits for selected CUMT members.",
    fullDescription:
      "Two collaboration formats with partner companies: a networking session connecting company HR directly with ambitious Chulalongkorn students to share career experiences and introduce MT opportunities, and a company visit where selected CUMT members experience the workplace and culture firsthand, meeting employees and Management Trainees.",
    registrationPeriod: { from: "TBA", to: "TBA" },
  },
  {
    slug: "mt-career-accelerator-finalize",
    title: "MT Career Accelerator Program — Finalize",
    partnerCompany: "CUMT",
    date: "Early Jan 2027",
    time: "TBA",
    location: "Chulalongkorn University",
    category: "Workshop",
    status: "Coming Soon",
    shortDescription: "Corporate partners and project scope for the MT Career Accelerator Program are finalized.",
    fullDescription:
      "The MT Career Accelerator Program is an 8-10 week development program preparing high-potential students for Management Trainee careers through structured training (Learn), functional exposure (Seek), a real corporate project (Apply), and MT assessment-center practice (Test). This milestone finalizes the corporate partners and project scope for the upcoming cohort.",
    registrationPeriod: { from: "TBA", to: "TBA" },
  },
  {
    slug: "mt-career-accelerator-onboard",
    title: "MT Career Accelerator Program — Onboard",
    partnerCompany: "CUMT",
    date: "Late Jan 2027",
    time: "TBA",
    location: "Chulalongkorn University",
    category: "Workshop",
    status: "Coming Soon",
    shortDescription: "Selected students onboard onto the MT Career Accelerator Program cohort.",
    fullDescription:
      "Students selected for the MT Career Accelerator Program cohort onboard and begin the Learn phase: building core business acumen and strengthening hard and soft skills through professor-led development sessions, ahead of functional exposure and a real corporate project later in the program.",
    registrationPeriod: { from: "TBA", to: "TBA" },
  },
];
