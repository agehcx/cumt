import { ButtonLink, Placeholder } from "@/components/ui";
import { VerticalTimeline } from "@/components/timeline";
import { recruitmentTeams } from "@/data/teams";

const EXPERIENCE_COLUMNS = [
  {
    heading: "What Members Will Experience",
    body: "Work alongside a driven team to plan real events, build partnerships with top companies, and take ownership of projects from day one.",
  },
  {
    heading: "Skills and Exposure to Gain",
    body: "Develop project management, communication, and stakeholder skills while getting direct exposure to how corporate Management Trainee programs are run.",
  },
];

const RECRUITMENT_TIMELINE = [
  { label: "Start Date", date: "01 Sep 2026 - Applications open" },
  { label: "Application Deadline", date: "20 Sep 2026 - Applications close" },
  { label: "Interview Round", date: "25 Sep 2026 - 02 Oct 2026" },
  { label: "End Date", date: "10 Oct 2026 - Offers sent" },
];

export default function JoinPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy px-6 py-20 text-center text-white">
        <h1 className="mx-auto max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
          Build the Future of CUMT with Us
        </h1>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy">Why Join CUMT?</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {EXPERIENCE_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h3 className="font-serif text-xl font-semibold text-navy">{column.heading}</h3>
              <p className="text-navy/70">{column.body}</p>
              <Placeholder label="Illustrative Photo" className="h-48 w-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <h2 className="text-center font-serif text-3xl font-semibold text-navy">Available Teams</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recruitmentTeams.map((team) => (
              <div
                key={team.name}
                className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-pink/50 to-white p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">{team.name}</h3>
                <p className="flex-1 text-sm text-navy/70">{team.description}</p>
                <ButtonLink
                  href="#recruitment-timeline"
                  variant="secondary"
                  className="border-navy text-navy hover:bg-navy/10"
                >
                  Apply to Join CUMT
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recruitment-timeline" className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy">Recruitment Timeline</h2>
        <VerticalTimeline steps={RECRUITMENT_TIMELINE} />
      </section>
    </div>
  );
}
