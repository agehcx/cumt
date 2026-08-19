"use client";

import { useState } from "react";
import { SearchBar } from "@/components/ui";
import { OpportunityCard } from "@/components/cards";
import {
  opportunities,
  type ProgramType,
  type Industry,
  type ApplicationStatus,
} from "@/data/opportunities";

const PROGRAM_TYPES: ProgramType[] = ["Management Trainee", "Internship", "Graduate Program"];
const INDUSTRIES: Industry[] = ["FMCG", "Banking", "Consulting", "Technology", "Retail", "E-Commerce", "Other"];
const STATUSES: ApplicationStatus[] = ["Open for Registration", "Coming Soon", "Registration Closed"];

function FilterPill<T extends string>({
  value,
  isActive,
  onToggle,
}: {
  value: T;
  isActive: boolean;
  onToggle: (value: T) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(value)}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? "bg-rose text-white" : "bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      {value}
    </button>
  );
}

function toggleInSet<T>(set: T[], value: T): T[] {
  return set.includes(value) ? set.filter((item) => item !== value) : [...set, value];
}

export default function OpportunitiesPage() {
  const [query, setQuery] = useState("");
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [statuses, setStatuses] = useState<ApplicationStatus[]>([]);

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesQuery =
      query.trim() === "" ||
      opportunity.programName.toLowerCase().includes(query.toLowerCase()) ||
      opportunity.companyName.toLowerCase().includes(query.toLowerCase());
    const matchesProgramType = programTypes.length === 0 || programTypes.includes(opportunity.programType);
    const matchesIndustry = industries.length === 0 || industries.includes(opportunity.industry);
    const matchesStatus = statuses.length === 0 || statuses.includes(opportunity.applicationStatus);

    return matchesQuery && matchesProgramType && matchesIndustry && matchesStatus;
  });

  return (
    <div className="flex flex-col">
      <section className="bg-navy px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-semibold">Opportunity Hub</h1>
            <p className="mt-2 text-white/70">
              Search and filter curated Management Trainee, internship, and graduate opportunities.
            </p>
          </div>

          <SearchBar value={query} onChange={setQuery} placeholder="Search company or program..." />

          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-medium text-white/70">Program Type</p>
              <div className="flex flex-wrap gap-2">
                {PROGRAM_TYPES.map((type) => (
                  <FilterPill
                    key={type}
                    value={type}
                    isActive={programTypes.includes(type)}
                    onToggle={(value) => setProgramTypes((current) => toggleInSet(current, value))}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-white/70">Industry</p>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry) => (
                  <FilterPill
                    key={industry}
                    value={industry}
                    isActive={industries.includes(industry)}
                    onToggle={(value) => setIndustries((current) => toggleInSet(current, value))}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-white/70">Application Status</p>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((status) => (
                  <FilterPill
                    key={status}
                    value={status}
                    isActive={statuses.includes(status)}
                    onToggle={(value) => setStatuses((current) => toggleInSet(current, value))}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy">Search Results</h2>
        {filteredOpportunities.length === 0 ? (
          <p className="text-center text-navy/60">No opportunities match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
