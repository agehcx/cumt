export type ProgramType = "Management Trainee" | "Internship" | "Graduate Program";
export type Industry =
  | "FMCG"
  | "Banking"
  | "Consulting"
  | "Technology"
  | "Retail"
  | "E-Commerce"
  | "Other";
export type ApplicationStatus = "Open for Registration" | "Coming Soon" | "Registration Closed";

export interface OpportunityItem {
  slug: string;
  companyName: string;
  programName: string;
  applicationDeadline: string;
  programType: ProgramType;
  industry: Industry;
  applicationStatus: ApplicationStatus;
  timelineSteps: string[];
  overview: string;
  eligibility: string[];
  officialLink: string;
}

export const opportunities: OpportunityItem[] = [
  {
    slug: "unilever-future-leaders",
    companyName: "Unilever Thailand",
    programName: "Unilever Future Leaders Programme",
    applicationDeadline: "30 Sep 2026",
    programType: "Management Trainee",
    industry: "FMCG",
    applicationStatus: "Open for Registration",
    timelineSteps: [
      "Online application - Open now",
      "Online assessment - Early Oct 2026",
      "Assessment center - Late Oct 2026",
      "Final interview - Nov 2026",
    ],
    overview:
      "A 3-year rotational program across marketing, supply chain, and customer development functions, designed to fast-track future business leaders at Unilever.",
    eligibility: [
      "Final-year student or recent graduate (within 2 years)",
      "GPA 3.00 or above",
      "Fluent in Thai and English",
      "Demonstrated leadership in student activities or clubs",
    ],
    officialLink: "https://www.unilever.com/careers/",
  },
  {
    slug: "pttgc-mt-program",
    companyName: "PTT Global Chemical",
    programName: "PTTGC Management Trainee Program",
    applicationDeadline: "15 Oct 2026",
    programType: "Management Trainee",
    industry: "Other",
    applicationStatus: "Open for Registration",
    timelineSteps: [
      "Application submission - Open now",
      "Aptitude test - Mid Oct 2026",
      "Group discussion - Nov 2026",
      "Panel interview - Dec 2026",
    ],
    overview:
      "An 18-month rotational program covering operations, strategy, and sustainability functions within Thailand's leading petrochemical company.",
    eligibility: [
      "Bachelor's or Master's degree, any major",
      "GPA 2.75 or above",
      "Strong analytical and communication skills",
      "Willingness to relocate to Rayong for rotations",
    ],
    officialLink: "https://www.pttgcgroup.com/en/career",
  },
  {
    slug: "scb-future-banker",
    companyName: "Siam Commercial Bank",
    programName: "SCB Future Banker Program",
    applicationDeadline: "20 Oct 2026",
    programType: "Management Trainee",
    industry: "Banking",
    applicationStatus: "Open for Registration",
    timelineSteps: [
      "Online application - Open now",
      "Psychometric test - Late Oct 2026",
      "Business case interview - Nov 2026",
      "Final interview with executives - Dec 2026",
    ],
    overview:
      "A 2-year program rotating through retail banking, digital banking, and corporate strategy, built for candidates aiming to become future SCB leaders.",
    eligibility: [
      "Final-year student or graduate with any degree",
      "GPA 3.00 or above",
      "Strong interest in financial services and digital banking",
    ],
    officialLink: "https://careers.scb.co.th/",
  },
  {
    slug: "bcg-summer-internship",
    companyName: "Boston Consulting Group",
    programName: "BCG Summer Associate Internship",
    applicationDeadline: "05 Nov 2026",
    programType: "Internship",
    industry: "Consulting",
    applicationStatus: "Coming Soon",
    timelineSteps: [
      "Applications open - Nov 2026",
      "Case interview round 1 - Dec 2026",
      "Case interview round 2 - Dec 2026",
      "Offer decisions - Jan 2027",
    ],
    overview:
      "An 8-week summer internship giving students exposure to live client casework across strategy, digital transformation, and operations projects.",
    eligibility: [
      "Penultimate-year student, any major",
      "GPA 3.25 or above",
      "Prior case interview practice recommended",
    ],
    officialLink: "https://careers.bcg.com/",
  },
  {
    slug: "central-retail-graduate",
    companyName: "Central Retail Corporation",
    programName: "Central Retail Graduate Development Program",
    applicationDeadline: "12 Nov 2026",
    programType: "Graduate Program",
    industry: "Retail",
    applicationStatus: "Coming Soon",
    timelineSteps: [
      "Application submission - Nov 2026",
      "Retail simulation exercise - Dec 2026",
      "Store immersion week - Jan 2027",
      "Final interview - Feb 2027",
    ],
    overview:
      "A 12-month graduate program combining store operations, merchandising, and omnichannel strategy across Central Retail's business units.",
    eligibility: [
      "Recent graduate (within 1 year)",
      "GPA 2.75 or above",
      "Customer-centric mindset and retail interest",
    ],
    officialLink: "https://careers.centralretail.com/",
  },
  {
    slug: "line-thailand-internship",
    companyName: "LINE Thailand",
    programName: "LINE Product & Growth Internship",
    applicationDeadline: "25 Nov 2026",
    programType: "Internship",
    industry: "Technology",
    applicationStatus: "Coming Soon",
    timelineSteps: [
      "Application submission - Nov 2026",
      "Take-home product exercise - Dec 2026",
      "Team interview - Dec 2026",
      "Offer decisions - Jan 2027",
    ],
    overview:
      "A semester-long internship embedded within LINE's product and growth teams, working on real feature launches and growth experiments.",
    eligibility: [
      "Currently enrolled student, any year",
      "Interest in product management or growth marketing",
      "Basic data analysis skills (Excel/SQL a plus)",
    ],
    officialLink: "https://linecorp.com/en/career",
  },
  {
    slug: "lazada-mt-program",
    companyName: "Lazada Thailand",
    programName: "Lazada Management Trainee Program",
    applicationDeadline: "08 Dec 2026",
    programType: "Management Trainee",
    industry: "E-Commerce",
    applicationStatus: "Registration Closed",
    timelineSteps: [
      "Applications closed",
      "Online assessment - completed",
      "Business case interview - completed",
      "Final panel - completed",
    ],
    overview:
      "A rotational program across commercial, marketing, and logistics functions built to prepare future e-commerce leaders across Southeast Asia.",
    eligibility: [
      "Final-year student or recent graduate",
      "GPA 3.00 or above",
      "Comfortable with fast-paced, data-driven environments",
    ],
    officialLink: "https://www.lazada.com/careers/",
  },
  {
    slug: "nestle-technical-graduate",
    companyName: "Nestle Thailand",
    programName: "Nestle Technical Graduate Program",
    applicationDeadline: "01 Dec 2026",
    programType: "Graduate Program",
    industry: "FMCG",
    applicationStatus: "Registration Closed",
    timelineSteps: [
      "Applications closed",
      "Technical assessment - completed",
      "Site visit interview - completed",
      "Final offer round - completed",
    ],
    overview:
      "A 2-year program for engineering and supply chain graduates rotating through manufacturing, quality, and logistics functions at Nestle's Thai factories.",
    eligibility: [
      "Engineering, food science, or supply chain degree",
      "GPA 2.75 or above",
      "Willingness to relocate to factory locations",
    ],
    officialLink: "https://www.nestle.co.th/en/jobs",
  },
];
