export interface TeamMember {
  name: string;
  nickname: string;
  role: "President" | "Founder";
  achievements: {
    section: string;
    items: string[];
  }[];
  photo: string;
}

// Sourced from the CUMT Proposal deck (Sep 2026).
export const teamMembers: TeamMember[] = [
  {
    name: "Siravich Buddhaunchalee",
    nickname: "Green",
    role: "President",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Technology Consultant Intern, EY Corporate Services Limited",
          "Innovation and Product Development Intern, Pandora Production Co., Ltd.",
          "Software Engineer Intern, Vulcorn Co., Ltd.",
        ],
      },
      {
        section: "Activities",
        items: [
          "Case Writer, Intania Case Competition 2026",
          "Project Lead, CUCC 2025",
          "President of Baan Jodeh Huesa 2024",
        ],
      },
      {
        section: "Awards",
        items: [
          "Winner, CP CUP 2025 (National Round, Digital Innovation Track)",
          "Winner, Chula Carbon Neutrality 2025 by BCGeTec",
          "2nd Runner-up, Intania Case Competition 2025 (Sponsored by Boston Consulting Group)",
          "2nd Runner-up, TRECC 2026",
          "2nd Runner-up CFA mini Research 2026",
          "2nd Runner-up AI x Finance Hackathon by CFA Society 2026",
          "Semi-finalist, Challenger by TUBC 2025",
          "Semi-finalist, Challenger by TUBC 2026(Top 20 from 306 teams)",
          "Semi-finalist, Hult Prize 2026 (Top 16 teams)",
        ],
      },
    ],
    photo: "/images/team/pres_green.jpg",
  },
  {
    name: "Lillada Sukjaroenkraisri",
    nickname: "Lily",
    role: "President",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Investment Banking Intern at Kasikornbank Public Company Limited (KBANK)",
          "Business Development Intern at CJ More, CJ Express Co.Ltd.",
          "Research Intern at BDMS Health Research Center",
        ],
      },
      {
        section: "Publications",
        items: [
          "Published a paper at International Journal of Advanced Research IJAR (2022)",
        ],
      },
      {
        section: "Work Experience(University Level)",
        items: [
          "President of BBA Coreteam 2026",
          "President of CBS football team 2026",
          "Project Leader of IFMSA (SCORA) at Ramathibodi Hospital 2024",
          "Head of Activity at Rama openhouse 2023",
          "Head of a department at Ramapanitharn 2024 (P’Group)",
        ],
      },
      {
        section: "Awards",
        items: [
          "Winner of Intania Case Competition ICC 2026 (InnovestX)",
          "Winner of SIFE Social Enterprise Case Competition Chula 2026",
          "1st Runner-up of Big C Big seed Hackathon 2024",
          "1st Runner Up of Muangthong Hackathon 2024",
          "2nd Runner-up of TRECC 2026 (Central Pattana)",
          "2nd Runner-up of TICC (Muangthai Life)",
          "Semi-finalist, Challenger by TUBC 2025",
        ],
      },
    ],
    photo: "/images/team/pres_lily.jpg",
  },
  {
    name: "Pongburit Wongchaiyakul",
    nickname: "Yang",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Product Management (InnovestX)",
          "Information security intern(MFEC)",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "ChAMP ENG 8 mentee",
          "Coach 2025 of CBC",
          "Mentor 2026 of CBC",
          "President of IPH 2025",
        ],
      },
    ],
    photo: "/images/team/founder_yang.jpg",
  },
  {
    name: "Phuchispach Aranyaratchakul",
    nickname: "August",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Digital investment intern at Bualuang Securities",
          "Front end developer intern at AI Tech ovation",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "Full-ride to Chulalongkorn Business School (BBA) for the highest SAT admitted score 2024",
          "Winner, Intania Case Competition 2026",
          "2nd Runner-up, Thailand Insurnace Case Competition 2026",
          "3rd Runner-up, SIFE Social Enterprise Case Competition 2026",
          "Finalist, Thailand Social Case Competition 2025",
        ],
      },
    ],
    photo: "/images/team/founder_august.jpg",
  },
  {
    name: "Chanathan Tanglakdee",
    nickname: "Ray",
    role: "Founder",
    achievements: [
      {
        section: "Selected Activities",
        items: [
          "Consulting Manager at Chulalongkorn Consulting Club",
          "Project Manager & Market Intelligence Analyst at Bangkok Asset & Wealth Management Society",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "Winner, SME Financial Inclusion Hackathon 2025 x Ministry of Finance of Thailand x Boston Consulting Group (BCG)",
          "Winner, Rewastec Circular Challenger 2025",
          "1st Runner-up, Thailand Real Estate Case Competition 2026",
          "1st Runner-up, Stock Pitching, ECIC Case Competition 2026",
          "2nd-runner up, BIG’s SEED Talent Camp 2025",
        ],
      },
    ],
    photo: "/images/team/founder_ray.jpg",
  },
  {
    name: "Kamonchanok Wiseswitayawet",
    nickname: "Mint",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Business Development intern at CJ More",
        ],
      },
      {
        section: "Selected Activities",
        items: [
          "Project Leader, Adspire Chulalongkorn 2026",
          "Marketing Strategists, Adspire Chulalongkorn 2025",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "2nd Runner-Up of TICC (Muangthai Life)",
          "Semi-finalist, Challenger by TUBC 2025",
          "Honorable awards, Deaftech Hackathon 2024",
        ],
      },
    ],
    photo: "/images/team/founder_mint.jpg",
  },
  {
    name: "Walaipan Thamniyomkul",
    nickname: "Ping-Ping",
    role: "Founder",
    achievements: [
      {
        section: "Selected Projects",
        items: [
          "FotoSHI’s First Short Film Project (Initiator and Head of Scriptwriters)",
          "Media Essentials Workshop (Initiator, Organizer, and Speaker of Editing Session)",
          "CBS Spectrum by CBS Ambassadors x FotoSHI (On-set Production Team and Main Editor)",
        ],
      },
      {
        section: "Selected Activities",
        items: [
          "Head of Editor, FotoSHI Production House 2025",
          "Head of PRs, Coreteam B4 Group Banshi 2025",
          "Member of IBC, CBS Open House 2025",
        ],
      },
    ],
    photo: "/images/team/founder_pingping.jpg",
  },
  {
    name: "Teetouch Tiradechsakul",
    nickname: "Stamp",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Deloitte SEA (Thailand) | Finance Transformation intern",
          "LiBConsulting (Thailand) | Business Analyst intern",
          "Microsoft Thailand | AI & Analytics Project intern",
        ],
      },
      {
        section: "Selected Activities",
        items: [
          "STACKLUB (Case Club for Statistics student) | President",
          "CA-ASE | Strategic Partnerships",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "Winner, CP CUP 2025 - Digital Innovation Track",
          "Winner, CHOICEISYOURS2024 Microsoft Track",
          "Winner, STAT101 Case Competition x OIC",
        ],
      },
    ],
    photo: "/images/team/founder_stamp.jpg",
  },
  {
    name: "Natkamon Maleehuan",
    nickname: "Chega",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "Business Analyst Intern at Accenture Thailand",
          "True Alpha Intern at True Corporation",
          "AI & Technical Architect, Capstone Project at SCB TechX",
          "Quantitative Researcher Intern at Qlovr Co.",
          "Crypto Quantitative Researcher at QuantCorner Thailand",
          "Quantitative Researcher Intern at Yuanta Securities Thailand",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "Winner, Digital Innovation Track CP CUP 2025",
          "1st Runner Up, Monad Blitz Bangkok",
          "2nd Runner Up, AI x Finance Hackathon",
          "2nd Runner Up, CFA Mini Research 2026",
        ],
      },
    ],
    photo: "/images/team/founder_chega.jpg",
  },
  {
    name: "Chatchalai Podhiwattanangkura",
    nickname: "Tawan",
    role: "Founder",
    achievements: [
      {
        section: "Work Experience",
        items: [
          "E-commerce Marketing Intern, Antidote",
          "HR Marketing & Branding Intern, CP ALL",
          "Event Organizer Intern, Siam Piwat – ICONSIAM",
          "E-commerce Marketing Intern, Finetoday",
          "Project manager Intern, SCG",
        ],
      },
      {
        section: "Selected Activities",
        items: [
          "Project Leader – Event Organizer, IMPVEST at Chula Club",
        ],
      },
      {
        section: "Selected Awards",
        items: [
          "Finalist, TEDFund 2026 — Top 12",
          "Top 10 Finalist, Canvas Forum (Startup Uni Track) 2025",
          "Finalist, Banpu Hackathon 2023 — Top 10 out of 500 teams",
        ],
      },
    ],
    photo: "/images/team/founder_tawan.jpg",
  },
];
