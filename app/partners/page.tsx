import { ArrowUpRight } from "lucide-react";
import { partners } from "@/data/partners";

const OFFERINGS = [
  "Company Visits",
  "Career Workshops",
  "Networking Events",
  "Case Workshops",
  "Management Trainee Talks",
  "Recruitment Promotion",
  "Sponsorship",
];

const INTEREST_OPTIONS = [
  "Company Visits",
  "Networking Events",
  "Career Workshops",
  "Recruitment Promotion",
  "Management Trainee Talks",
  "Sponsorship",
  "Case Workshops",
  "Others",
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-pink/40 to-cream px-6 py-20 text-center">
        <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">Partner with CUMT</h1>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering) => (
            <div
              key={offering}
              className="relative flex h-28 items-center justify-center rounded-xl bg-gray-light px-4 text-center text-sm font-medium text-navy/70"
            >
              {offering}
              <ArrowUpRight size={16} className="absolute right-3 top-3 text-rose" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-16 text-center">
        <h2 className="font-serif text-3xl font-semibold text-navy">Why Partner with CUMT?</h2>
        <p className="text-navy/70">
          CUMT gives your company direct access to Chulalongkorn&apos;s most motivated and career-driven
          students, well before they enter the job market.
        </p>
        <p className="text-navy/70">
          From company visits to sponsorship packages, we tailor every partnership to help you build
          brand affinity and identify future talent early.
        </p>
      </section>

      <section className="bg-cream px-6 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <h2 className="text-center font-serif text-3xl font-semibold text-navy">Current Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 w-40 items-center justify-center rounded-xl bg-gray-light px-4 text-center text-sm font-medium text-navy/60"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 text-white">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          <h2 className="text-center font-serif text-3xl font-semibold">Contact Form</h2>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-white/80">Partnership Interest</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {INTEREST_OPTIONS.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-white/80">
                    <input type="checkbox" name="partnershipInterest" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message & Details"
              rows={4}
              className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />

            <button
              type="submit"
              className="mx-auto rounded-full bg-pink px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-pink/80"
            >
              Let&apos;s Collaborate!
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
