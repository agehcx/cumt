import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import type { EventItem } from "@/data/events";
import type { PastEventItem } from "@/data/pastEvents";
import type { OpportunityItem } from "@/data/opportunities";
import type { TeamMember } from "@/data/team";
import { StatusBadge, Tag, ButtonLink } from "@/components/ui";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="flex flex-col gap-4 rounded-2xl border border-gray-light bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg font-semibold text-navy">{event.title}</h3>
          <p className="text-sm text-navy/60">{event.partnerCompany}</p>
        </div>
        <Tag>{event.category}</Tag>
      </div>

      <div className="flex flex-col gap-1.5 text-sm text-navy/70">
        <span className="flex items-center gap-2">
          <Calendar size={14} /> {event.date}
        </span>
        <span className="flex items-center gap-2">
          <Clock size={14} /> {event.time}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={14} /> {event.location}
        </span>
      </div>

      <p className="text-sm text-navy/70">{event.shortDescription}</p>

      <div className="mt-auto flex justify-end">
        <StatusBadge status={event.status} />
      </div>
    </Link>
  );
}

export function PastEventCard({ event }: { event: PastEventItem }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex h-40 items-end rounded-xl bg-gray-light p-4">
        <span className="font-serif text-base font-semibold text-navy/70">{event.title}</span>
      </div>
      <Tag className="w-fit">{event.category}</Tag>
    </div>
  );
}

export function OpportunityCard({ opportunity }: { opportunity: OpportunityItem }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-light bg-white shadow-sm">
      <div className="flex h-24 items-center justify-center bg-gradient-to-br from-pink/50 to-cream px-4 text-center text-sm font-medium text-navy/60">
        Company Name & Logo
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-serif text-lg font-semibold text-navy">{opportunity.programName}</h3>
          <p className="text-sm text-navy/60">{opportunity.companyName}</p>
        </div>

        <p className="text-sm text-navy/70">Deadline: {opportunity.applicationDeadline}</p>

        <div className="flex flex-wrap gap-2">
          <Tag>{opportunity.programType}</Tag>
          <Tag>{opportunity.industry}</Tag>
          <Tag>{opportunity.applicationStatus}</Tag>
        </div>

        <ButtonLink
          href={`/opportunities/${opportunity.slug}`}
          className="mt-auto w-full gap-2 bg-navy text-white hover:bg-navy/90"
        >
          View Opportunity <ArrowRight size={14} />
        </ButtonLink>
      </div>
    </div>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex w-52 flex-col overflow-hidden rounded-xl border border-gray-light bg-white shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
      <img
        src={member.photo}
        alt={member.name}
        className="h-60 w-full object-cover object-top"
      />
      <div className="flex flex-col gap-1 p-4 text-center">
        <p className="font-serif text-sm font-semibold text-navy">
          {member.name} <span className="text-navy/60">({member.nickname})</span>
        </p>
        <p className="text-xs font-medium text-rose">{member.role}</p>
        <p className="text-xs leading-snug text-navy/60">{member.highlight}</p>
      </div>
    </div>
  );
}
