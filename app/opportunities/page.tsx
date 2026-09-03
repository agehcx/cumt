"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Clock, Filter, Search } from "lucide-react";
import {
  opportunities,
  type ApplicationStatus,
  type Industry,
  type OpportunityItem,
  type ProgramType,
} from "@/data/opportunities";

const PROGRAM_TYPES: ProgramType[] = ["Management Trainee", "Internship", "Graduate Program"];
const INDUSTRIES: Industry[] = [
  "FMCG",
  "Banking",
  "Consulting",
  "Technology",
  "Retail",
  "E-Commerce",
  "Other",
];
const STATUSES: ApplicationStatus[] = [
  "Open for Registration",
  "Coming Soon",
  "Registration Closed",
];

/* Measured from the 1440px reference: hero art occupies x 800..1300, y 103..1215. */
const ART_WIDTH = 500;
const ART_HEIGHT = 1112;
const LADDER_HEIGHT = 1095;
const RUNG_Y = [
  6, 21, 37, 53, 70, 91, 109, 130, 151, 170, 190, 211, 233, 257, 283, 313, 348, 377, 407, 439, 476,
  515, 556, 599, 645, 683, 721, 761, 809, 864, 938, 993, 1050,
];
/* [x, y, width, height] of each cloud's bounding box. */
const CLOUDS: [number, number, number, number][] = [
  [182, 64, 51, 22],
  [243, 113, 78, 26],
  [256, 193, 71, 31],
  [130, 265, 113, 39],
  [247, 417, 108, 48],
  [89, 519, 79, 34],
  [13, 758, 209, 71],
  [224, 809, 253, 86],
];
const CLOUD_WHITE = "#F9F9F9";
const LADDER_PINK = "#ECAFC7";

const railProgress = (y: number) => y / LADDER_HEIGHT;
const rungLeft = (y: number) => 223 - 27 * railProgress(y);
const rungRight = (y: number) => 257 + 26 * railProgress(y);
const rungThickness = (y: number) => 3 + 8 * railProgress(y);

function toggle<T>(values: T[], value: T): T[] {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

/** Ladder-into-the-clouds illustration, hand-authored to match the reference art. */
function HeroArt() {
  return (
    <svg
      viewBox={`0 0 ${ART_WIDTH} ${ART_HEIGHT}`}
      width={ART_WIDTH}
      height={ART_HEIGHT}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="239.5" cy="1092.5" rx="180.5" ry="12.5" fill={CLOUD_WHITE} />

      {/* Ladder rails, converging towards the top for perspective. */}
      <polygon points="219,0 223,0 196,1095 183,1095" fill={LADDER_PINK} />
      <polygon points="257,0 261,0 296,1095 283,1095" fill={LADDER_PINK} />
      {RUNG_Y.map((y) => {
        const thickness = rungThickness(y);
        const left = rungLeft(y);
        return (
          <rect
            key={y}
            x={left}
            y={y - thickness / 2}
            width={rungRight(y) - left}
            height={thickness}
            fill={LADDER_PINK}
          />
        );
      })}

      {/* Climber. ponytail: flat silhouette, not the reference's per-limb shading. */}
      <path
        d="M214 622 L228 620 L233 634 L245 641 L262 624 L269 631 L249 655 L237 653 L241 690 L253 701 L246 709 L227 698 L223 673 L214 691 L214 707 L203 707 L203 682 L206 650 Z"
        fill={LADDER_PINK}
      />
      <circle cx="221" cy="612" r="9" fill="#0D1938" />
      <path d="M227 606 a8 8 0 0 1 1 15 l-7 1 z" fill={CLOUD_WHITE} />

      {CLOUDS.map(([x, y, w, h]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${w / 100} ${h / 44})`}>
          <rect x="0" y="30" width="100" height="14" rx="7" fill={CLOUD_WHITE} />
          <circle cx="38" cy="21" r="21" fill={CLOUD_WHITE} />
          <circle cx="15" cy="32" r="12" fill={CLOUD_WHITE} />
          <circle cx="72" cy="28" r="16" fill={CLOUD_WHITE} />
        </g>
      ))}
    </svg>
  );
}

function FilterGroup<T extends string>({
  title,
  options,
  selected,
  onToggle,
  className = "",
}: {
  title: string;
  options: readonly T[];
  selected: T[];
  onToggle: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-serif text-[28px] leading-[1.2] text-cream">{title}</h2>
      <div className="mt-[11px] flex flex-wrap gap-[7px]">
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(option)}
              className={`h-[26px] rounded-[4px] px-[8px] text-[14px] leading-[26px] text-navy transition-colors ${
                isActive ? "bg-pink" : "bg-gray hover:bg-pink/70"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CardTag({ label }: { label: string }) {
  return (
    <span className="inline-flex h-[28px] items-center gap-[5px] rounded-[5px] bg-pink px-[8px] text-[14px] text-navy">
      {label}
      <Check className="h-[13px] w-[13px]" strokeWidth={2.5} aria-hidden="true" />
    </span>
  );
}

function OpportunityCard({ item }: { item: OpportunityItem }) {
  return (
    <article className="flex h-full min-h-[441px] flex-col rounded-[14px] bg-cream p-[14px] shadow-[0_6px_16px_rgba(4,10,26,0.22)]">
      <div className="flex h-[145px] shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#F4F2F4_0%,#F2E1E9_50%,#F4F2F4_100%)] px-[16px]">
        <p className="text-center text-[18px] text-navy">{item.companyName}</p>
      </div>

      <h3 className="mt-[26px] font-serif text-[34px] leading-[1.15] text-navy">
        {item.programName}
      </h3>

      <p className="mt-[38px] flex items-center gap-[7px] text-[17px] text-navy">
        <Clock className="h-[15px] w-[15px] shrink-0" strokeWidth={1.6} aria-hidden="true" />
        <span>
          Application Deadline: <span className="ml-[6px]">{item.applicationDeadline}</span>
        </span>
      </p>

      <div className="mt-[35px] flex flex-wrap gap-[8px]">
        <CardTag label={item.programType} />
        <CardTag label={item.industry} />
        <CardTag label={item.applicationStatus} />
      </div>

      <Link
        href={`/opportunities/${item.slug}`}
        className="mx-auto mt-auto mb-[4px] flex h-[43px] w-[min(264px,100%)] items-center justify-center rounded-full bg-navy text-[17px] text-cream transition-opacity hover:opacity-90"
      >
        View Opportunity
      </Link>
    </article>
  );
}

export default function OpportunitiesPage() {
  const [query, setQuery] = useState("");
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [statuses, setStatuses] = useState<ApplicationStatus[]>([]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return opportunities.filter((item) => {
      const matchesQuery =
        needle === "" ||
        item.programName.toLowerCase().includes(needle) ||
        item.companyName.toLowerCase().includes(needle);
      const matchesType = programTypes.length === 0 || programTypes.includes(item.programType);
      const matchesIndustry = industries.length === 0 || industries.includes(item.industry);
      const matchesStatus = statuses.length === 0 || statuses.includes(item.applicationStatus);
      return matchesQuery && matchesType && matchesIndustry && matchesStatus;
    });
  }, [query, programTypes, industries, statuses]);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[1147px] overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 hidden justify-center xl:flex">
          <div className="relative w-[1440px]">
            <div className="absolute left-[800px] top-0">
              <HeroArt />
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-[min(1184px,calc(100%-48px))] pt-[222px]">
          <h1 className="font-serif text-[68px] leading-[1.1] text-cream">Opportunity Hub</h1>
          <p className="mt-[29px] max-w-[680px] text-[20px] leading-[1.5] text-cream">
            A career opportunity hub created specifically for university students
          </p>

          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-[108px] flex h-[38px] w-[min(428px,100%)] items-center rounded-full bg-cream pl-[20px] pr-[18px] shadow-[0_5px_14px_rgba(0,0,0,0.32)]"
          >
            <label htmlFor="opportunity-search" className="sr-only">
              Search opportunities
            </label>
            <input
              id="opportunity-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="min-w-0 flex-1 bg-transparent text-[19px] text-navy placeholder:text-navy focus:outline-none"
            />
            <Search className="h-[16px] w-[16px] shrink-0 text-navy" strokeWidth={1.8} aria-hidden="true" />
          </form>

          <p className="mt-[104px] flex items-center gap-[10px] font-serif text-[20px] leading-[1.2] text-cream">
            <Filter className="h-[18px] w-[18px]" strokeWidth={1.4} aria-hidden="true" />
            <span>
              <span className="underline underline-offset-[3px]">Filter</span>:
            </span>
          </p>

          <FilterGroup
            title="Program Type"
            options={PROGRAM_TYPES}
            selected={programTypes}
            onToggle={(value) => setProgramTypes((prev) => toggle(prev, value))}
            className="mt-[23px]"
          />
          <FilterGroup
            title="Industry"
            options={INDUSTRIES}
            selected={industries}
            onToggle={(value) => setIndustries((prev) => toggle(prev, value))}
            className="mt-[23px] max-w-[min(700px,100%)]"
          />
          <FilterGroup
            title="Application Status"
            options={STATUSES}
            selected={statuses}
            onToggle={(value) => setStatuses((prev) => toggle(prev, value))}
            className="mt-[23px]"
          />
        </div>
      </section>

      {/* Results — the navy hero keeps fading into white behind this section. */}
      <section className="bg-[linear-gradient(180deg,#0D1938_0%,#FFFFFF_86.5%)] pb-[186px]">
        <h2 className="pt-[178px] text-center font-serif text-[44px] leading-[1.2] text-cream">
          Search Results
        </h2>

        {results.length === 0 ? (
          <p className="mt-[95px] text-center text-[18px] text-navy">
            No opportunities match your search yet. Try clearing a filter.
          </p>
        ) : (
          <div className="mx-auto mt-[95px] grid w-[min(1270px,calc(100%-48px))] grid-cols-1 gap-[48px] md:grid-cols-2">
            {results.map((item) => (
              <OpportunityCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
