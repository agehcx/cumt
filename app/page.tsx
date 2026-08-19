import Link from "next/link";
import type { ReactNode } from "react";
import HeroIllustration from "@/components/hero-illustration";

const STATS = [
  { value: "500+", label: "Students Reached" },
  { value: "10+", label: "Corporate Partners" },
  { value: "15+", label: "Career Events" },
  { value: "20+", label: "MT Opportunities" },
];

const PILLARS = [
  {
    title: "LEARN",
    body: "Develop business and leadership capabilities through workshops and practical experiences.",
    align: "left" as const,
  },
  {
    title: "CONNECT",
    body: "Meet leading companies, Management Trainees, executives, and like-minded students.",
    align: "right" as const,
  },
  {
    title: "LAUNCH",
    body: "Discover opportunities that help students begin their professional careers.",
    align: "left" as const,
  },
];

const SLIDE_COUNT = 4;

/**
 * Photo slot rendered exactly as the design specifies it: a flat grey block
 * with its caption centred. Swap for real imagery when the club supplies it.
 */
function PhotoSlot({
  label,
  className = "",
}: {
  label: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gray text-center text-[17px] leading-[27px] text-navy ${className}`}
    >
      {label}
    </div>
  );
}

/** Grey bento tile whose serif caption sits over the image area. */
function BentoTile({
  href,
  title,
  captionAtTop = false,
  className = "",
}: {
  href: string;
  title: string;
  captionAtTop?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative block bg-gray transition-opacity hover:opacity-90 ${className}`}
    >
      <span
        className={`absolute left-[18px] max-w-[calc(100%-36px)] font-serif text-[28px] leading-[38px] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)] ${
          captionAtTop ? "top-[10px]" : "bottom-[10px]"
        }`}
      >
        {title}
      </span>
    </Link>
  );
}

function Pillar({
  title,
  body,
  align,
}: {
  title: string;
  body: string;
  align: "left" | "right";
}) {
  const isLeft = align === "left";

  const copy = (
    <div className={`relative ${isLeft ? "" : "text-right"}`}>
      {/* hairline that runs off to the nearest viewport edge */}
      <span
        aria-hidden="true"
        className={`absolute top-[36px] hidden h-[2px] w-screen md:block ${
          isLeft
            ? "right-full bg-gradient-to-r from-transparent to-blue"
            : "left-full bg-gradient-to-l from-transparent to-blue"
        }`}
      />
      <h3
        className={`bg-clip-text font-serif text-[58px] font-bold leading-[72px] text-transparent ${
          isLeft
            ? "bg-gradient-to-r from-blue to-navy"
            : "bg-gradient-to-r from-navy to-blue"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-[24px] max-w-[440px] text-[19px] leading-[27px] text-navy ${
          isLeft ? "" : "ml-auto"
        }`}
      >
        {body}
      </p>
    </div>
  );

  const photo = (
    <PhotoSlot
      label={
        <span>
          Illustrative
          <br />
          Photo
        </span>
      }
      className="h-[226px] w-full"
    />
  );

  return (
    <div className="mx-auto grid w-[min(969px,calc(100%-48px))] grid-cols-1 items-start gap-[37px] md:grid-cols-2">
      {isLeft ? (
        <>
          {copy}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {copy}
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative">
        <div className="relative h-[760px] overflow-hidden sm:h-[980px] lg:h-[1247px]">
          <HeroIllustration className="absolute inset-0 h-full w-full" />

          <div className="relative z-10 px-6 pt-[120px] lg:pl-[140px] lg:pr-0 lg:pt-[176px]">
            <h1 className="max-w-[660px] font-serif text-[40px] font-bold leading-[52px] text-white sm:text-[52px] sm:leading-[66px] lg:text-[64px] lg:leading-[80px]">
              Empowering Future Business Leaders
            </h1>
            <p className="mt-[30px] max-w-[640px] text-[17px] leading-[26px] text-white lg:text-[19px] lg:leading-[27px]">
              Connecting Chulalongkorn students with Management Trainee
              opportunities, industry leaders, and career-defining experiences.
            </p>
            <div className="mt-[46px] flex flex-wrap items-center gap-[12px] lg:mt-[56px]">
              <Link
                href="/opportunities"
                className="rounded-full border border-white/60 bg-navy px-[22px] py-[12px] text-[16px] text-white shadow-[0_0_0_4px_rgba(255,255,255,0.06)] transition-colors hover:bg-navy/80"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/join"
                className="rounded-full bg-cream px-[22px] py-[12px] text-[16px] text-navy transition-colors hover:bg-white"
              >
                Join CUMT
              </Link>
            </div>
          </div>
        </div>

        {/* stat cards straddle the skyline and the white section below */}
        <div className="relative z-20 mx-auto -mt-[55px] grid w-[min(1272px,calc(100%-48px))] grid-cols-2 gap-[24px] lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[158px] flex-col items-center justify-center gap-[6px] rounded-[6px] border border-[#9BA5C3]/70 bg-gradient-to-b from-[#F5F3F5] to-[#F2E5EB] shadow-[0_4px_14px_rgba(13,25,56,0.10)]"
            >
              <span className="font-serif text-[38px] font-bold leading-none text-navy">
                {stat.value}
              </span>
              <span className="text-[17px] text-navy">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- What We Do ---------------- */}
      <section className="overflow-hidden pt-[145px]">
        <h2 className="text-center font-serif text-[54px] font-bold leading-none text-navy">
          What We Do
        </h2>

        <div className="mt-[130px] flex flex-col gap-[44px]">
          {PILLARS.map((pillar) => (
            <Pillar key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      {/* ---------------- Upcoming Programs ---------------- */}
      <section className="pt-[250px]">
        <h2 className="pl-6 font-serif text-[40px] font-bold leading-none text-navy lg:pl-[60px]">
          Upcoming Programs
        </h2>

        <div className="relative mt-[50px] flex h-[420px] w-full items-center justify-center bg-gray lg:h-[633px]">
          <span className="px-6 text-center text-[17px] text-navy">
            Full-width slide show banners of upcoming programs
          </span>
          <div className="absolute bottom-[22px] left-1/2 flex -translate-x-1/2 gap-[15px]">
            {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
              <span
                key={index}
                className="block h-[14px] w-[14px] rounded-full bg-gray-light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured Opportunities ---------------- */}
      <section className="pt-[280px] pb-[205px]">
        <h2 className="pl-6 font-serif text-[40px] font-bold leading-none text-navy lg:pl-[60px]">
          Featured Opportunities
        </h2>

        <div className="mx-auto mt-[65px] grid w-[min(1086px,calc(100%-48px))] grid-cols-1 gap-[21px] md:grid-cols-3 md:grid-rows-[188px_299px]">
          <BentoTile
            href="/opportunities"
            title="Selected Management Trainee"
            className="h-[260px] md:col-start-1 md:row-span-2 md:h-auto"
          />
          <BentoTile
            href="/opportunities"
            title="Graduate Program"
            className="h-[188px] md:col-span-2 md:col-start-2 md:row-start-1 md:h-auto"
          />
          <BentoTile
            href="/opportunities"
            title="Internship Opportunities"
            className="h-[260px] md:col-start-2 md:row-start-2 md:h-auto"
          />
          <div className="flex flex-col gap-[44px] md:col-start-3 md:row-start-2">
            <BentoTile
              href="/events"
              title="Event Discovery"
              captionAtTop
              className="h-[188px]"
            />
            <Link
              href="/opportunities"
              className="flex h-[52px] items-center justify-center rounded-full bg-navy text-[16px] text-white transition-colors hover:bg-navy/90"
            >
              Explore All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Corporate Partners ---------------- */}
      <section className="bg-gradient-to-b from-white via-[#BFC2CC] to-[#7B8192] pt-[80px] pb-[200px]">
        <h2 className="text-center font-serif text-[40px] font-bold leading-none text-navy">
          Corporate Partners
        </h2>

        <PhotoSlot
          label="Logo Wall"
          className="mx-auto mt-[87px] h-[270px] w-[min(1060px,calc(100%-48px))] shadow-[0_10px_30px_rgba(13,25,56,0.18)]"
        />
      </section>
    </>
  );
}
