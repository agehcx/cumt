export interface TeamMember {
  name: string;
  nickname: string;
  role: "President" | "Founder";
  highlight: string;
  photo: string;
}

// Sourced from the CUMT Proposal deck (Sep 2026).
export const teamMembers: TeamMember[] = [
  {
    name: "Siravich Buddhaunchalee",
    nickname: "Green",
    role: "President",
    highlight: "Winner, CP CUP 2025 (National Round, Digital Innovation Track)",
    photo: "/images/team/pres_green.jpg",
  },
  {
    name: "Lillada Sukjaroenkraisri",
    nickname: "Lily",
    role: "President",
    highlight: "Winner, Intania Case Competition 2026 (InnovestX) & SIFE Social Enterprise Case Competition",
    photo: "/images/team/pres_lily.jpg",
  },
  {
    name: "Pongburit Wongchaiyakul",
    nickname: "Yang",
    role: "Founder",
    highlight: "President, IPH 2025; Coach & Mentor, CBC",
    photo: "/images/team/founder_yang.jpg",
  },
  {
    name: "Phuchispach Aranyaratchakul",
    nickname: "August",
    role: "Founder",
    highlight: "Full-ride to Chulalongkorn Business School (BBA), highest SAT admitted score 2024",
    photo: "/images/team/founder_august.jpg",
  },
  {
    name: "Chanathan Tanglakdee",
    nickname: "Ray",
    role: "Founder",
    highlight: "Winner, SME Financial Inclusion Hackathon 2025 (Ministry of Finance x BCG)",
    photo: "/images/team/founder_ray.jpg",
  },
  {
    name: "Kamonchanok Wiseswitayawet",
    nickname: "Mint",
    role: "Founder",
    highlight: "Project Leader, Adspire Chulalongkorn 2026",
    photo: "/images/team/founder_mint.jpg",
  },
  {
    name: "Walaipan Thamniyomkul",
    nickname: "Ping-Ping",
    role: "Founder",
    highlight: "Head of Editor, FotoSHI Production House 2025",
    photo: "/images/team/founder_pingping.jpg",
  },
  {
    name: "Teetouch Tiradechsakul",
    nickname: "Stamp",
    role: "Founder",
    highlight: "President, STACKLUB; Winner, CP CUP 2025 Digital Innovation Track",
    photo: "/images/team/founder_stamp.jpg",
  },
  {
    name: "Natkamon Maleehuan",
    nickname: "Chega",
    role: "Founder",
    highlight: "Winner, Digital Innovation Track, CP CUP 2025",
    photo: "/images/team/founder_chega.jpg",
  },
  {
    name: "Chatchalai Podhiwattanangkura",
    nickname: "Tawan",
    role: "Founder",
    highlight: "Finalist, TEDFund 2026 — Top 12",
    photo: "/images/team/founder_tawan.jpg",
  },
];
