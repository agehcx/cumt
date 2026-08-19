import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Placeholder } from "@/components/ui";
import { opportunities } from "@/data/opportunities";

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
    <div className="px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <Placeholder label="Program Banner" className="h-56 w-full" />

        <div>
          <h1 className="font-serif text-4xl font-semibold text-navy">{opportunity.programName}</h1>
          <p className="mt-2 text-lg text-navy/60">Company: {opportunity.companyName}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Application Timeline:</h2>
          <ul className="mt-2 list-disc pl-5 text-navy/70">
            {opportunity.timelineSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Program Overview:</h2>
          <p className="mt-2 text-navy/70">{opportunity.overview}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Eligibility:</h2>
          <ul className="mt-2 list-disc pl-5 text-navy/70">
            {opportunity.eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="font-semibold text-rose">
          Application Deadline: {opportunity.applicationDeadline}
        </p>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Official Application Link:</h2>
          <a
            href={opportunity.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-fit items-center gap-2 text-blue hover:underline"
          >
            {opportunity.officialLink} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
