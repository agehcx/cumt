import Link from "next/link";
import { JoinHeroArt } from "@/components/join-hero-art";
import { recruitmentTeams } from "@/data/teams";

const APPLY_HREF =
  "mailto:chulalongkorn.management.trainee.club@gmail.com?subject=Application%20to%20join%20CUMT";

const INSTAGRAM_URL = "https://instagram.com";
const LINKEDIN_URL = "https://linkedin.com";

interface ExperienceRow {
  heading: string;
  body: string;
  align: "left" | "right";
  photo: string;
}

const EXPERIENCE_ROWS: readonly ExperienceRow[] = [
  {
    heading: "What Members Will Experience",
    body: "Work alongside a driven team to plan real events, build partnerships with top companies, and take ownership of projects from day one. Every member leaves with something they built themselves.",
    align: "left",
    photo: "/images/join/student-collaboration.png",
  },
  {
    heading: "Skills and Exposure to Gain",
    body: "Develop project management, communication, and stakeholder skills while getting direct exposure to how corporate Management Trainee programs are actually run, from the people who run them.",
    align: "right",
    photo: "/images/events/career-fair-crowd.png",
  },
];

type MarkerSide = "top" | "left" | "right" | "bottom";

interface TimelineStop {
  label: string;
  detail: string;
  side: MarkerSide;
  /** Distance in px from the block top to this diamond's top tip. */
  markerTop: number;
  /** Distance in px from the block top to this label group's box top. */
  labelTop: number;
}

// Offsets traced from the reference: diamond centres sit 233.5px, 324px and
// 283.5px apart — deliberately uneven, kept as measured.
const TIMELINE_STOPS: readonly TimelineStop[] = [
  {
    label: "Start Date",
    detail: "Coming Soon — Applications open",
    side: "top",
    markerTop: 85,
    labelTop: 0,
  },
  {
    label: "Application Deadline",
    detail: "To be announced — Stay tuned",
    side: "left",
    markerTop: 318,
    labelTop: 330,
  },
  {
    label: "Interview Round",
    detail: "Faculty of Commerce and Accountancy, Chulalongkorn University",
    side: "right",
    markerTop: 642,
    labelTop: 654,
  },
  {
    label: "Onboarding",
    detail: "Welcome to the CUMT Family",
    side: "bottom",
    markerTop: 926,
    labelTop: 1000,
  },
];

const TIMELINE_HEIGHT = 1068;
const RAIL_TOP = 120;
const RAIL_HEIGHT = 841;

const SECTION_HEADING = "text-center font-serif text-[42px] md:text-[48px] leading-[1.2] font-semibold text-navy";
const SHELL = "mx-auto w-[min(1032px,calc(100%-48px))]";
const CARD_SHELL = "mx-auto w-[min(1246px,calc(100%-48px))]";

function TimelineDiamond({ top }: { top: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 h-[70px] w-[70px] -translate-x-1/2 bg-navy"
      style={{ top, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
    />
  );
}

const LABEL_SIDE_CLASSES: Record<MarkerSide, string> = {
  top: "left-1/2 -translate-x-1/2 text-center",
  bottom: "left-1/2 -translate-x-1/2 text-center",
  left: "right-[calc(50%+47px)] text-right",
  right: "left-[calc(50%+47px)] text-left",
};

function TimelineLabel({ stop }: { stop: TimelineStop }) {
  const isCentred = stop.side === "top" || stop.side === "bottom";
  return (
    <div
      className={`absolute w-[min(320px,44%)] ${LABEL_SIDE_CLASSES[stop.side]}`}
      style={{ top: stop.labelTop, ...(isCentred ? { width: "min(420px, 92%)" } : {}) }}
    >
      <p className="font-serif text-[28px] md:text-[32px] leading-[1.2] font-semibold text-navy">{stop.label}</p>
      <p className="mt-[5px] text-[16px] md:text-[18px] leading-[23px] text-blue">{stop.detail}</p>
    </div>
  );
}

export default function JoinPage() {
  return (
    <main className="bg-white">
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative h-[1091px] overflow-hidden bg-navy max-md:h-[620px]">
        <JoinHeroArt />
        
        <div className="absolute top-[32%] right-[8%] left-[8%] md:left-auto md:right-[12.22%] text-center md:text-right max-w-xl">
          <span className="inline-block rounded-full bg-rose/25 px-4 py-1 text-sm font-semibold tracking-wide text-pink backdrop-blur-sm border border-pink/30">
            Recruitment Notice
          </span>
          <h1 className="mt-4 bg-[linear-gradient(90deg,#D8809F_0%,#E5A7C0_28%,#EFC9D9_60%,#FBF3F7_88%,#FFFFFF_100%)] bg-clip-text font-serif text-[clamp(34px,5vw,68px)] leading-[1.1] font-semibold text-transparent">
            Build the Future of CUMT with Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-cream/80 leading-relaxed font-sans">
            Our next recruitment round will open soon! Follow us on social media so you don&apos;t miss any updates and key announcements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pink px-6 py-2.5 text-sm font-semibold text-navy shadow-md transition-transform hover:scale-105"
            >
              Follow on Instagram
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Announcement Banner */}
      <section className="mx-auto mt-12 w-[min(1100px,calc(100%-48px))] rounded-2xl border border-pink/30 bg-gradient-to-r from-cream via-pink/20 to-cream p-8 text-center shadow-sm">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-rose">
          Coming Soon
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">
          Recruitment is Currently Closed
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-navy/70 leading-relaxed">
          We are currently preparing for upcoming events, case workshops, and industry partnerships. Stay connected with our channels to be the first to know when member applications officially launch!
        </p>
        <div className="mt-5 flex justify-center gap-4 text-sm font-semibold text-navy">
          <span className="flex items-center gap-1.5 text-rose">✨ MT Career Acceleration</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-rose">🤝 Corporate Networking</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-rose">🏆 Real Case Challenges</span>
        </div>
      </section>

      {/* ------------------------------------------------------- why join CUMT */}
      <section className="pt-[100px]">
        <h2 className={SECTION_HEADING}>Why Join CUMT?</h2>

        <div className={`${SHELL} mt-[80px] flex flex-col gap-[36px]`}>
          {EXPERIENCE_ROWS.map((row) => {
            const isRight = row.align === "right";
            return (
              <div
                key={row.heading}
                className="grid grid-cols-1 items-center gap-[32px] md:grid-cols-[480px_480px] md:justify-center"
              >
                <div className={`${isRight ? "md:order-2" : ""} ${isRight ? "text-right" : ""}`}>
                  <h3 className="font-serif text-[32px] md:text-[36px] leading-[1.2] font-semibold text-navy">
                    {row.heading}
                  </h3>
                  <p className="mt-[20px] text-[17px] md:text-[18px] leading-[26px] text-navy/80">{row.body}</p>
                </div>
                <div className={isRight ? "md:order-1" : ""}>
                  <div className="overflow-hidden rounded-2xl border border-gray-light bg-white shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={row.photo}
                      alt={row.heading}
                      className="h-[264px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------- available teams */}
      <section className="pt-[160px]">
        <h2 className={SECTION_HEADING}>Available Teams</h2>
        <p className="mt-3 text-center text-base text-navy/60">
          Core divisions we will recruit for in our upcoming cycle (roles subject to expansion)
        </p>

        <div
          className={`${CARD_SHELL} mt-[60px] grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-4`}
        >
          {recruitmentTeams.map((team) => (
            <div key={team.name} className="flex flex-col">
              <article className="flex min-h-[360px] flex-col rounded-[18px] bg-[linear-gradient(180deg,#F4F2F4_0%,#F3EAEE_27%,#F1DAE4_52%,#EFC9D9_78%,#EEBDD1_100%)] p-[28px] shadow-[0_6px_20px_rgba(13,25,56,0.08)]">
                <span className="text-xs font-bold uppercase tracking-wider text-rose">Team</span>
                <h3 className="mt-2 font-serif text-[34px] leading-[1.15] font-semibold break-words hyphens-auto text-navy">
                  {team.name}
                </h3>
                <p className="mt-[24px] text-[15px] leading-[22px] text-navy/80">{team.description}</p>
              </article>
              <span
                className="mx-[7px] mt-[13px] flex h-[43px] items-center justify-center rounded-full border border-dashed border-navy/40 bg-cream/60 text-[15px] font-medium text-navy/70"
              >
                Opening Soon
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- recruitment timeline */}
      <section className="pt-[180px] pb-[160px]">
        <h2 className={SECTION_HEADING}>Recruitment Timeline</h2>
        <p className="mt-2 text-center text-base text-navy/60">
          Tentative selection timeline (Stay tuned for finalized dates)
        </p>

        <div
          className="relative mx-auto mt-[40px] w-[min(760px,calc(100%-32px))]"
          style={{ height: TIMELINE_HEIGHT }}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 w-[13px] -translate-x-1/2 bg-navy"
            style={{ top: RAIL_TOP, height: RAIL_HEIGHT }}
          />
          {TIMELINE_STOPS.map((stop) => (
            <TimelineDiamond key={`d-${stop.label}`} top={stop.markerTop} />
          ))}
          {TIMELINE_STOPS.map((stop) => (
            <TimelineLabel key={stop.label} stop={stop} />
          ))}
        </div>
      </section>
    </main>
  );
}
