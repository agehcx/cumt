import { ChevronRight } from "lucide-react";

/**
 * Geometry is measured from the 1440px design canvas.
 * Reference anchors (absolute y on canvas): navbar bottom 103, bento 450-1370,
 * hrule 1939, logo wall 2937-3205, navy block 3433-5318, button 5025-5115.
 */

type CardTile = {
  readonly lines: readonly string[];
  /** grid placement at md+ */
  readonly area: string;
  /** title corner */
  readonly title: string;
  /** chevron corner */
  readonly chevron: string;
  /** background photo */
  readonly photo?: string;
};

const CARDS: readonly CardTile[] = [
  {
    lines: ["Company Visits"],
    area: "md:col-start-1 md:col-span-2 md:row-start-1",
    title: "left-[32px] top-[33px]",
    chevron: "bottom-[25px] right-[25px]",
    photo: "/images/home/upcoming-programs.jpg",
  },
  {
    lines: ["Career", "Workshops"],
    area: "md:col-start-3 md:row-start-1 md:row-span-2",
    title: "left-[28px] top-[33px]",
    chevron: "bottom-[25px] right-[25px]",
    photo: "/images/events/career-fair-crowd.png",
  },
  {
    lines: ["Networking", "Events"],
    area: "md:col-start-1 md:row-start-2 md:row-span-2",
    title: "left-[32px] top-[29px]",
    chevron: "bottom-[25px] right-[25px]",
    photo: "/images/home/pillar-connect.jpg",
  },
  {
    lines: ["Case", "Workshops"],
    area: "md:col-start-2 md:row-start-2",
    title: "bottom-[27px] left-[32px]",
    chevron: "bottom-[25px] right-[25px]",
    photo: "/images/home/pillar-learn.jpg",
  },
  {
    lines: ["Management", "Trainee Talks"],
    area: "md:col-start-2 md:col-span-2 md:row-start-3",
    title: "right-[22px] top-[16px] text-right",
    chevron: "bottom-[25px] right-[25px]",
    photo: "/images/events/sala-event-interior.png",
  },
  {
    lines: ["Recruitment Promotion"],
    area: "md:col-start-1 md:col-span-2 md:row-start-4",
    title: "bottom-[27px] left-[32px]",
    chevron: "right-[25px] top-[20px]",
    photo: "/images/join/student-collaboration.png",
  },
  {
    lines: ["Sponsorship"],
    area: "md:col-start-3 md:row-start-4",
    title: "bottom-[27px] left-[28px]",
    chevron: "right-[25px] top-[20px]",
    photo: "/images/home/pillar-launch.jpg",
  },
];

/** Row-major order — the design lays these out across two columns, not down them. */
const INTEREST_OPTIONS: readonly string[] = [
  "Company Visits",
  "Networking Events",
  "Career Workshops",
  "Recruitment Promotion",
  "Management Trainee Talks",
  "Sponsorship",
  "Case Workshops",
  "Others",
];

type PartnershipModel = {
  readonly title: string;
  readonly weOffer: readonly string[];
  readonly weGain: readonly string[];
};

// Sourced from the CUMT Proposal deck (Sep 2026).
const PARTNERSHIP_MODELS: readonly PartnershipModel[] = [
  {
    title: "Panel Talk & Career Fair",
    weOffer: [
      "Access to a targeted student talent pool",
      "Employer branding and promotion",
      "Engagement with potential candidates",
      "Opportunities to support student projects",
      "CSR and university engagement opportunities",
    ],
    weGain: [
      "Group networking with HR",
      "Training sessions",
      "Company visits",
      "Direct exposure to MT",
      "Potential recruitment pipeline",
    ],
  },
  {
    title: "MT Career Accelerator Program",
    weOffer: [
      "Access to university talent and faculty network",
      "Student project teams",
      "Training and capability-building support",
      "Club network and student engagement",
    ],
    weGain: [
      "Fast-track opportunities for project participants",
      "Internship opportunities",
      "Potential full-time career pathways",
      "Exposure to real business projects",
    ],
  },
];

const LABEL_CLASS =
  "block font-serif text-[24px] font-bold leading-none text-pink md:text-[34px]";

const INPUT_CLASS =
  "mt-[18px] block h-[58px] w-full rounded-[6px] bg-cream px-[18px] font-serif text-[18px] font-bold text-navy shadow-[0_3px_8px_rgba(13,25,56,0.35)] outline-none placeholder:font-serif placeholder:font-bold placeholder:text-gray focus-visible:ring-2 focus-visible:ring-pink md:mt-[28px] md:h-[76px] md:px-[21px] md:text-[22px]";

interface FieldProps {
  readonly label: string;
  readonly name: string;
  readonly type?: "text" | "email";
  readonly required?: boolean;
  readonly className?: string;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder="Text"
        className={INPUT_CLASS}
      />
    </div>
  );
}

function BentoCard({ lines, area, title, chevron, photo }: CardTile) {
  return (
    <div
      className={`group relative min-h-[180px] overflow-hidden rounded-[20px] border border-white/20 bg-navy shadow-[0_8px_30px_rgba(13,25,56,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-pink/80 hover:shadow-[0_20px_40px_rgba(13,25,56,0.22)] md:min-h-0 ${area}`}
    >
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}
      {/* Rich overlay matching the brand aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1938]/95 via-[#0D1938]/50 to-transparent" />
      <div className="absolute inset-0 bg-navy/20 transition-opacity group-hover:opacity-0" />
      
      <h3
        className={`absolute z-10 max-w-[calc(100%-80px)] font-serif text-[28px] font-bold leading-[34px] text-white drop-shadow-md transition-colors group-hover:text-pink md:text-[38px] md:leading-[46px] ${title}`}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <span
        aria-hidden="true"
        className={`absolute z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-pink bg-navy/80 text-pink shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:text-white group-hover:border-rose ${chevron}`}
      >
        <ChevronRight className="h-[22px] w-[22px]" strokeWidth={2.5} />
      </span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero + offerings + "Why" — pink→white gradient pinned to design pixels */}
      <div className="bg-[linear-gradient(180deg,#F4D3E0_0px,#FFFFFF_1900px)]">
        <section className="px-6 pt-[80px] text-center md:pt-[144px]">
          <h1 className="font-serif text-[40px] font-bold leading-none text-navy md:text-[68px]">
            Partner with CUMT
          </h1>
        </section>

        <div className="mx-auto mt-[64px] grid w-[min(1160px,calc(100%-48px))] grid-cols-1 gap-5 md:mt-[135px] md:auto-rows-[215px] md:grid-cols-3 md:gap-x-[21px] md:gap-y-[20px]">
          {CARDS.map((card) => (
            <BentoCard key={card.lines.join(" ")} {...card} />
          ))}
        </div>

        <section className="mx-auto mt-[120px] w-[min(1140px,calc(100%-48px))] md:mt-[240px]">
          <h2 className="font-serif font-bold text-navy">
            <span className="block text-[104px] leading-none md:text-[197px]">
              Why
            </span>
            <span className="mt-[16px] block text-[38px] leading-none md:mt-[31px] md:text-[70px]">
              Partner with <span className="text-rose">CUMT</span>?
            </span>
          </h2>

          <div className="mt-[24px] h-[2px] w-full bg-navy md:mt-[31px]" />

          <p className="mt-[56px] max-w-[1080px] font-serif text-[20px] font-bold leading-[27px] text-navy md:mt-[96px] md:text-[28px] md:leading-[35px]">
            Access to ambitious Chulalongkorn University students and two
            ready-made ways to build early talent engagement.
          </p>

          <div className="mt-[56px] grid max-w-[1140px] grid-cols-1 gap-8 md:mt-[96px] md:grid-cols-2 md:gap-10">
            {PARTNERSHIP_MODELS.map((model) => (
              <div key={model.title} className="rounded-2xl border border-navy/10 bg-white/70 p-6">
                <h3 className="font-serif text-[22px] font-bold text-navy">{model.title}</h3>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-rose">
                  What we offer
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-[15px] leading-[22px] text-navy/80">
                  {model.weOffer.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-rose">
                  What CUMT gains
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-[15px] leading-[22px] text-navy/80">
                  {model.weGain.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Panel Talk & Career Fair — event at a glance */}
      <section className="bg-white px-6 py-[100px]">
        <div className="mx-auto grid w-[min(1140px,100%)] grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
          <img
            src="/images/events/sala-phra-kiao.jpg"
            alt="Sala Phra Kiao, Chulalongkorn University"
            className="h-64 w-full rounded-xl object-cover md:h-80"
          />
          <div>
            <h2 className="font-serif text-[28px] font-bold leading-none text-navy md:text-[36px]">
              Panel Talk &amp; Career Fair — Event at a Glance
            </h2>
            <ul className="mt-6 flex flex-col gap-2 text-navy/80">
              <li>
                <strong className="text-navy">Date:</strong> 2–6 Nov 2026 (not yet finalised)
              </li>
              <li>
                <strong className="text-navy">Scale:</strong> ~20 leading corporate partners
              </li>
              <li>
                <strong className="text-navy">Audience:</strong> Ambitious, highly vetted
                Chulalongkorn students actively preparing for MT and strategic roles
              </li>
              <li>
                <strong className="text-navy">Venue:</strong> Sala Phra Kiao, Chulalongkorn
                University
              </li>
            </ul>
          </div>
        </div>
      </section>



      {/* Contact form */}
      <section className="bg-[linear-gradient(180deg,#324574_0%,#0D1938_100%)] px-6 pt-[110px] pb-[110px] md:pt-[198px] md:pb-[203px]">
        <h2 className="text-center font-serif text-[32px] font-bold leading-none text-white md:text-[46px]">
          Contact Form
        </h2>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mx-auto mt-[72px] w-[min(1062px,100%)] md:mt-[127px]"
        >
          <Field
            label="Company Name"
            name="companyName"
            required
            className="md:w-[731px]"
          />

          <div className="mt-[48px] grid grid-cols-1 gap-y-[48px] md:mt-[79px] md:grid-cols-2 md:gap-x-[41px] md:gap-y-0">
            <Field label="Full Name" name="fullName" required />
            <Field label="Position" name="position" />
          </div>

          <Field
            label="Email"
            name="email"
            type="email"
            required
            className="mt-[48px] md:mt-[79px] md:w-[731px]"
          />

          <div
            role="group"
            aria-labelledby="interest-label"
            className="mt-[48px] md:mt-[79px]"
          >
            <span id="interest-label" className={LABEL_CLASS}>
              Partnership Interest
            </span>
            <div className="mt-[14px] grid grid-cols-1 md:mt-[16px] md:w-[738px] md:grid-cols-2">
              {INTEREST_OPTIONS.map((option) => (
                <label
                  key={option}
                  className="flex h-[42px] cursor-pointer items-center gap-[14px] md:h-[48px]"
                >
                  <input
                    type="checkbox"
                    name="partnershipInterest"
                    value={option}
                    className="h-[14px] w-[14px] shrink-0 appearance-none rounded-[2px] bg-white outline-none checked:bg-rose focus-visible:ring-2 focus-visible:ring-pink"
                  />
                  <span className="font-serif text-[18px] font-bold leading-none text-white md:text-[22px]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-[48px] md:mt-[68px]">
            <label htmlFor="message" className={LABEL_CLASS}>
              Message &amp; Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={1}
              placeholder="Text"
              className={`${INPUT_CLASS} resize-none pt-[16px] md:pt-[24px]`}
            />
          </div>

          <button
            type="submit"
            className="mx-auto mt-[80px] flex h-[68px] w-[min(472px,100%)] items-center justify-center rounded-full bg-cream font-serif text-[26px] text-navy shadow-[6px_6px_10px_rgba(0,0,0,0.28)] transition-colors hover:bg-white md:mt-[124px] md:h-[90px] md:text-[36px]"
          >
            Let&rsquo;s Collaborate!
          </button>
        </form>
      </section>
    </div>
  );
}
