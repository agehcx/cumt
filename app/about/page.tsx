import { TeamCard } from "@/components/cards";
import { teamMembers } from "@/data/team";

const PURPOSE_ITEMS = [
  {
    number: "01",
    title: "Explore MT Careers",
    body: "Understand MT roles, career paths, and employer expectations.",
  },
  {
    number: "02",
    title: "Develop Core Business Skills",
    body: "Build structured thinking, communication, leadership, and commercial awareness.",
  },
  {
    number: "03",
    title: "Prepare for Recruitment",
    body: "Practice case interviews, group exercises, and other key selection activities.",
  },
  {
    number: "04",
    title: "Build a Supportive Network",
    body: "Connect students with alumni for career insights, mentorship, and long-term support.",
  },
];

export default function AboutPage() {
  const presidents = teamMembers.filter((member) => member.role === "President");
  const founders = teamMembers.filter((member) => member.role === "Founder");

  return (
    <div className="flex flex-col">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-gradient-to-b from-pink/40 to-cream px-6 py-20 text-center">
        <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-navy/70">
          CUMT is a student-led community that prepares Chulalongkorn University students for
          Management Trainee careers by providing career insights, developing essential business
          skills, and offering hands-on recruitment practice.
        </p>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
        <img
          src="/images/about/team-group.jpg"
          alt="CUMT founding team"
          className="h-64 w-full rounded-xl object-cover sm:h-96"
        />
      </div>

      {/* ---------------- Purpose ---------------- */}
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-12">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-navy px-6 py-8 text-center text-white sm:flex-row sm:text-left">
          <span className="font-serif text-sm font-semibold uppercase tracking-wide text-pink">
            Big Goal
          </span>
          <p className="text-lg font-medium">
            Develop MT-ready students with strong mindset, skills, and recruitment confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PURPOSE_ITEMS.map((item) => (
            <div key={item.number} className="flex gap-4 rounded-xl border border-gray-light bg-white p-5">
              <span className="font-serif text-2xl font-bold text-rose">{item.number}</span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-navy/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Vision & Mission ---------------- */}
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
        <div className="rounded-2xl border border-gray-light bg-gradient-to-b from-cream to-white p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-blue">Vision</h2>
          <p className="mt-3 text-navy/80">
            To empower Chulalongkorn University students to become confident, capable future
            business leaders through the Management Trainee pathway.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-light bg-gradient-to-b from-cream to-white p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-blue">Mission</h2>
          <p className="mt-3 text-navy/80">
            To provide practical career insights, develop essential business skills, offer
            hands-on recruitment preparation, and connect students with a supportive network of
            peers, alumni, and corporate partners.
          </p>
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy">Our Team</h2>

        <div className="flex flex-col gap-6">
          <h3 className="text-center font-serif text-xl font-semibold text-blue">Presidents</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {presidents.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-center font-serif text-xl font-semibold text-blue">Founders</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {founders.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
