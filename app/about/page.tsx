import { Placeholder } from "@/components/ui";
import { TeamCard } from "@/components/cards";
import { teamDepartments } from "@/data/team";

const ABOUT_SECTIONS = [
  {
    heading: "Who We Are",
    body: "CUMT (Chulalongkorn Management Trainee Club) is a student-run club at Chulalongkorn University dedicated to helping students discover and pursue Management Trainee careers.",
  },
  {
    heading: "Our Mission",
    body: "To equip Chulalongkorn students with the knowledge, network, and confidence to succeed in Management Trainee and graduate program applications.",
  },
  {
    heading: "Our Vision",
    body: "A community where every student who aspires to a leadership career has clear, equal access to the opportunities and mentorship to get there.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-pink/40 to-cream px-6 py-20 text-center">
        <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">About Us</h1>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <Placeholder label="Photo of club's members" className="h-64 w-full" />
      </div>

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-12 text-center">
        {ABOUT_SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="font-serif text-2xl font-semibold text-navy">{section.heading}</h2>
            <p className="mt-3 text-navy/70">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy">Our Team</h2>
        {teamDepartments.map((department) => (
          <div key={department.department} className="flex flex-col gap-6">
            <h3 className="font-serif text-xl font-semibold text-blue">{department.department}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {department.members.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
