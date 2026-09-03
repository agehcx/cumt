import Link from "next/link";
import { JoinHeroArt } from "@/components/join-hero-art";
import { recruitmentTeams } from "@/data/teams";

const APPLY_HREF =
  "mailto:chulalongkorn.management.trainee.club@gmail.com?subject=Application%20to%20join%20CUMT";

interface ExperienceRow {
  heading: string;
  body: string;
  align: "left" | "right";
}

const EXPERIENCE_ROWS: readonly ExperienceRow[] = [
  {
    heading: "What Members Will Experience",
    body: "Work alongside a driven team to plan real events, build partnerships with top companies, and take ownership of projects from day one. Every member leaves with something they built themselves.",
    align: "left",
  },
  {
    heading: "Skills and Exposure to Gain",
    body: "Develop project management, communication, and stakeholder skills while getting direct exposure to how corporate Management Trainee programs are actually run, from the people who run them.",
    align: "right",
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
    detail: "01 Sep 2026 — Applications open",
    side: "top",
    markerTop: 85,
    labelTop: 0,
  },
  {
    label: "Application Deadline",
    detail: "20 Sep 2026 — Applications close",
    side: "left",
    markerTop: 318,
    labelTop: 330,
  },
  {
    label: "Interview Round",
    detail: "25 Sep — 02 Oct 2026, CBS Building",
    side: "right",
    markerTop: 642,
    labelTop: 654,
  },
  {
    label: "End Date",
    detail: "10 Oct 2026 — Offers sent",
    side: "bottom",
    markerTop: 926,
    labelTop: 1000,
  },
];

const TIMELINE_HEIGHT = 1068;
const RAIL_TOP = 120;
const RAIL_HEIGHT = 841;

const SECTION_HEADING = "text-center font-serif text-[48px] leading-[56px] font-semibold text-navy";
const SHELL = "mx-auto w-[min(1032px,calc(100%-48px))]";
const CARD_SHELL = "mx-auto w-[min(1246px,calc(100%-48px))]";

function PhotoPlaceholder() {
  return (
    <div className="flex h-[264px] w-full items-center justify-center bg-gray text-[16px] leading-[23px] text-navy">
      Illustrative Photo
    </div>
  );
}

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
      <p className="font-serif text-[32px] leading-[40px] font-semibold text-navy">{stop.label}</p>
      <p className="mt-[5px] text-[18px] leading-[23px] text-blue">{stop.detail}</p>
    </div>
  );
}

export default function JoinPage() {
  return (
    <main className="bg-white">
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative h-[1091px] overflow-hidden bg-navy max-md:h-[560px]">
        <JoinHeroArt />
        <h1
          className="absolute top-[38.6%] right-[12.22%] inline-block bg-[linear-gradient(90deg,#D8809F_0%,#E5A7C0_28%,#EFC9D9_60%,#FBF3F7_88%,#FFFFFF_100%)] bg-clip-text text-right font-serif text-[clamp(34px,5vw,72px)] leading-[1.0833] font-semibold text-transparent"
        >
          Build the Future of
          <br />
          CUMT with Us
        </h1>
      </section>

      {/* ------------------------------------------------------- why join CUMT */}
      <section className="pt-[120px]">
        <h2 className={SECTION_HEADING}>Why Join CUMT?</h2>

        <div className={`${SHELL} mt-[136px] flex flex-col gap-[22px]`}>
          {EXPERIENCE_ROWS.map((row) => {
            const isRight = row.align === "right";
            return (
              <div
                key={row.heading}
                className="grid grid-cols-1 items-start gap-[32px] md:grid-cols-[500px_500px] md:justify-center"
              >
                <div className={`${isRight ? "md:order-2" : ""} ${isRight ? "text-right" : ""}`}>
                  <h3 className="font-serif text-[36px] leading-[44px] font-semibold text-navy">
                    {row.heading}
                  </h3>
                  <p className="mt-[24px] text-[18px] leading-[23px] text-navy">{row.body}</p>
                </div>
                <div className={isRight ? "md:order-1 md:mt-[9px]" : "md:mt-[9px]"}>
                  <PhotoPlaceholder />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------- available teams */}
      <section className="pt-[196px]">
        <h2 className={SECTION_HEADING}>Available Teams</h2>

        <div
          className={`${CARD_SHELL} mt-[109px] grid grid-cols-1 gap-[37px] sm:grid-cols-2 lg:grid-cols-4`}
        >
          {recruitmentTeams.map((team) => (
            <div key={team.name} className="flex flex-col">
              <article className="flex min-h-[383px] flex-col rounded-[18px] bg-[linear-gradient(180deg,#F4F2F4_0%,#F3EAEE_27%,#F1DAE4_52%,#EFC9D9_78%,#EEBDD1_100%)] px-[30px] pt-[68px] pb-[40px] shadow-[0_6px_24px_rgba(13,25,56,0.10)]">
                <h3 className="font-serif text-[46px] leading-[53px] font-semibold break-words hyphens-auto text-navy">
                  {team.name}
                </h3>
                <p className="mt-[43px] text-[16px] leading-[23px] text-navy">{team.description}</p>
              </article>
              <Link
                href={APPLY_HREF}
                className="mx-[7px] mt-[13px] flex h-[43px] items-center justify-center rounded-full border-[1.5px] border-navy bg-white text-[16px] leading-[23px] text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Apply to Join CUMT
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- recruitment timeline */}
      <section className="pt-[260px] pb-[176px]">
        <h2 className={SECTION_HEADING}>Recruitment Timeline</h2>

        <div
          className="relative mx-auto mt-[24px] w-[min(760px,calc(100%-32px))]"
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
