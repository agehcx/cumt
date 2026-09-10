import Link from "next/link";
import type { ReactNode } from "react";
import HeroIllustration from "@/components/hero-illustration";

const STATS = [
  { value: "500+", label: "Students Reached" },
  { value: "20+", label: "Target Partners" },
  { value: "15+", label: "Career Events" },
  { value: "20+", label: "MT Opportunities" },
];

const PILLARS = [
  {
    title: "LEARN",
    body: "Develop business and leadership capabilities through workshops and practical experiences.",
    align: "left" as const,
    photo: "/images/home/pillar-learn.jpg",
  },
  {
    title: "CONNECT",
    body: "Meet leading companies, Management Trainees, executives, and like-minded students.",
    align: "right" as const,
    photo: "/images/home/pillar-connect.jpg",
  },
  {
    title: "LAUNCH",
    body: "Discover opportunities that help students begin their professional careers.",
    align: "left" as const,
    photo: "/images/home/pillar-launch.jpg",
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

/** Bento tile with photo background, dark gradient overlay and clear typography. */
function BentoTile({
  href,
  title,
  subtitle,
  photo,
  captionAtTop = false,
  className = "",
}: {
  href: string;
  title: string;
  subtitle?: string;
  photo?: string;
  captionAtTop?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-gray-light/60 bg-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:shadow-lg ${className}`}
    >
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
      <div
        className={`relative z-10 p-5 ${
          captionAtTop ? "top-0" : "mt-auto flex flex-col justify-end h-full"
        }`}
      >
        {subtitle && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-pink">
            {subtitle}
          </span>
        )}
        <span className="font-serif text-[24px] md:text-[28px] font-bold leading-[32px] text-white drop-shadow-md group-hover:text-pink transition-colors">
          {title}
        </span>
      </div>
    </Link>
  );
}

function Pillar({
  title,
  body,
  align,
  photo,
}: {
  title: string;
  body: string;
  align: "left" | "right";
  photo: string;
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

  const photoEl = (
    // eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here
    <img
      src={photo}
      alt=""
      className={`h-[226px] w-full rounded-[6px] object-cover ${isLeft ? "" : "md:order-1"}`}
    />
  );

  return (
    <div className="mx-auto grid w-[min(969px,calc(100%-48px))] grid-cols-1 items-start gap-[37px] md:grid-cols-2">
      {/* copy always precedes the photo in DOM order so it stacks first on mobile;
          md:order flips the visual position back for right-aligned pillars */}
      <div className={isLeft ? "" : "md:order-2"}>{copy}</div>
      {photoEl}
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

        <div className="relative mt-[50px] h-[420px] w-full overflow-hidden lg:h-[633px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
          <img
            src="/images/home/upcoming-programs.jpg"
            alt="CUMT panel talk and career fair"
            className="h-full w-full object-cover"
          />
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
            subtitle="Fast-Track"
            title="Selected Management Trainee"
            photo="/images/home/upcoming-programs.jpg"
            className="h-[260px] md:col-start-1 md:row-span-2 md:h-auto"
          />
          <BentoTile
            href="/opportunities"
            subtitle="Early Career"
            title="Graduate Program"
            photo="/images/join/student-collaboration.png"
            className="h-[188px] md:col-span-2 md:col-start-2 md:row-start-1 md:h-auto"
          />
          <BentoTile
            href="/opportunities"
            subtitle="Hands-On Experience"
            title="Internship Opportunities"
            photo="/images/events/career-fair-crowd.png"
            className="h-[260px] md:col-start-2 md:row-start-2 md:h-auto"
          />
          <div className="flex flex-col gap-[20px] md:col-start-3 md:row-start-2 justify-between">
            <BentoTile
              href="/events"
              subtitle="Events & Workshops"
              title="Event Discovery"
              photo="/images/events/sala-event-interior.png"
              className="h-[190px]"
            />
            <Link
              href="/opportunities"
              className="flex h-[52px] items-center justify-center rounded-full bg-navy text-[16px] font-semibold text-white shadow-md transition-colors hover:bg-rose"
            >
              Explore All Opportunities →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Corporate Engagement ---------------- */}
      <section className="bg-gradient-to-b from-white via-cream/60 to-[#D8DEE9]/40 pt-[90px] pb-[130px]">
        <div className="mx-auto max-w-4xl text-center px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            Industry Collaboration
          </span>
          <h2 className="mt-2 font-serif text-[38px] md:text-[46px] font-bold leading-tight text-navy">
            Connecting Ambitious Students with Leading Companies
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            Collaborating with premier industry leaders across FMCG, Banking, Consulting, Technology, and Retail to cultivate high-impact talent pipelines.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/partners"
              className="inline-flex h-[48px] items-center justify-center rounded-full bg-navy px-8 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-rose hover:shadow-lg"
            >
              Partner with CUMT →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
