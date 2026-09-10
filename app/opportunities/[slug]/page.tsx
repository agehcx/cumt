import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Placeholder } from "@/components/ui";
import { opportunities } from "@/data/opportunities";
import { CompanyLogo } from "@/components/company-logo";

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ slug: opportunity.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4D3E0]/30 via-cream/40 to-white px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <a
          href="/opportunities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 transition-colors hover:text-rose"
        >
          ← Back to All Opportunities
        </a>

        {/* Branded Program Banner instead of plain gray placeholder */}
        <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#1f3366] to-navy p-8 text-white shadow-xl shadow-navy/15">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-pink/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pink backdrop-blur-sm">
              {opportunity.programType}
            </span>
            <span className="rounded-full bg-rose/25 px-3.5 py-1 text-xs font-semibold text-white">
              {opportunity.applicationStatus}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <CompanyLogo company={opportunity.companyName} size={64} />
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-pink/80">Program Provider</span>
              <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl text-white">
                {opportunity.programName}
              </h1>
              <p className="mt-1 text-lg font-medium text-pink">{opportunity.companyName}</p>
            </div>
          </div>

          <div className="mt-4 border-t border-white/15 pt-3 text-xs text-white/80">
            Industry: <strong className="text-white font-semibold">{opportunity.industry}</strong>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="rounded-3xl border border-gray-light/80 bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgba(13,25,56,0.06)] space-y-8">
          {/* Deadline highlight */}
          <div className="flex items-center justify-between rounded-2xl bg-pink/15 p-5 border border-pink/30">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose">Application Deadline</span>
              <p className="font-serif text-xl font-bold text-navy mt-0.5">{opportunity.applicationDeadline}</p>
            </div>
            <a
              href={opportunity.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-rose hover:scale-105"
            >
              Apply Online <ExternalLink size={15} />
            </a>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Program Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-navy/80">{opportunity.overview}</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Application Timeline</h2>
            <ol className="mt-4 relative border-l-2 border-pink/60 ml-3 space-y-4 py-1">
              {opportunity.timelineSteps.map((step, idx) => (
                <li key={step} className="ml-6">
                  <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-rose ring-4 ring-white" />
                  <p className="text-sm font-medium text-navy/85">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Eligibility &amp; Requirements</h2>
            <ul className="mt-3 space-y-2 text-sm text-navy/80">
              {opportunity.eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-light/60 pt-6">
            <h2 className="font-serif text-lg font-bold text-navy">Official Program Link</h2>
            <a
              href={opportunity.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue transition-colors hover:text-rose hover:underline break-all"
            >
              {opportunity.officialLink} <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
