"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, X } from "lucide-react";
import type { EventItem } from "@/data/events";
import type { PastEventItem } from "@/data/pastEvents";
import type { OpportunityItem } from "@/data/opportunities";
import type { TeamMember } from "@/data/team";
import { StatusBadge, Tag, ButtonLink } from "@/components/ui";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-light/80 bg-white p-6 shadow-[0_4px_16px_rgba(13,25,56,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:shadow-[0_12px_28px_rgba(13,25,56,0.12)]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-block rounded-full bg-pink/25 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-rose">
            {event.category}
          </span>
          <StatusBadge status={event.status} />
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold leading-snug text-navy group-hover:text-rose transition-colors">
            {event.title}
          </h3>
          <p className="mt-1 font-sans text-sm font-medium text-blue">{event.partnerCompany}</p>
        </div>

        <div className="flex flex-col gap-2 rounded-xl bg-cream/70 p-3.5 text-xs text-navy/80">
          <span className="flex items-center gap-2 font-medium">
            <Calendar size={14} className="text-rose shrink-0" /> {event.date}
          </span>
          <span className="flex items-center gap-2 font-medium">
            <Clock size={14} className="text-rose shrink-0" /> {event.time}
          </span>
          <span className="flex items-center gap-2 font-medium">
            <MapPin size={14} className="text-rose shrink-0" /> {event.location}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-navy/70 line-clamp-2">{event.shortDescription}</p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-light/60 pt-4 text-xs font-semibold text-navy">
        <span className="text-navy/60">View Details</span>
        <span className="flex items-center gap-1 text-rose group-hover:translate-x-1 transition-transform">
          Register <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

export function PastEventCard({ event }: { event: PastEventItem }) {
  return (
    <div className="group flex flex-col gap-2 rounded-xl border border-gray-light bg-white p-3 shadow-sm transition-all hover:shadow-md">
      <div className="relative flex h-40 items-end overflow-hidden rounded-lg bg-gradient-to-t from-navy/80 to-navy/30 p-4">
        <span className="font-serif text-base font-semibold text-white">{event.title}</span>
      </div>
      <Tag className="w-fit">{event.category}</Tag>
    </div>
  );
}

export function OpportunityCard({ opportunity }: { opportunity: OpportunityItem }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-light/80 bg-white shadow-[0_4px_16px_rgba(13,25,56,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:shadow-[0_12px_28px_rgba(13,25,56,0.12)]">
      <div>
        <div className="flex h-28 flex-col justify-center bg-[linear-gradient(135deg,#0D1938_0%,#324574_100%)] px-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink">Program Provider</span>
          <p className="font-serif text-lg font-bold">{opportunity.companyName}</p>
        </div>

        <div className="flex flex-col gap-3.5 p-6">
          <h3 className="font-serif text-xl font-bold leading-snug text-navy group-hover:text-rose transition-colors">
            {opportunity.programName}
          </h3>

          <p className="flex items-center gap-2 text-xs font-semibold text-navy/70">
            <span className="h-2 w-2 rounded-full bg-rose animate-pulse" />
            Deadline: <span className="text-navy font-bold">{opportunity.applicationDeadline}</span>
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="rounded-md bg-pink/20 px-2.5 py-1 text-xs font-medium text-navy">{opportunity.programType}</span>
            <span className="rounded-md bg-cream px-2.5 py-1 text-xs font-medium text-navy/80">{opportunity.industry}</span>
            <span className="rounded-md bg-rose/15 px-2.5 py-1 text-xs font-semibold text-rose">{opportunity.applicationStatus}</span>
          </div>

          <p className="text-xs leading-relaxed text-navy/70 line-clamp-3 pt-1">
            {opportunity.overview}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <ButtonLink
          href={`/opportunities/${opportunity.slug}`}
          className="w-full justify-center gap-2 rounded-full bg-navy py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-rose"
        >
          View Opportunity <ArrowRight size={14} />
        </ButtonLink>
      </div>
    </div>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="flex w-52 cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-light bg-white shadow-sm transition-transform hover:scale-105"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
        <img
          src={member.photo}
          alt={member.name}
          className="h-60 w-full object-cover object-top"
        />
        <div className="flex flex-col gap-1 p-4 text-center">
          <p className="font-serif text-sm font-semibold text-navy">
            {member.name} <br /><span className="text-navy/60">({member.nickname})</span>
          </p>
          <p className="text-xs font-medium text-rose">{member.role}</p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-navy/50 transition-colors hover:bg-gray-light hover:text-navy"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="h-32 w-32 shrink-0 rounded-full object-cover object-top border-4 border-cream"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  {member.name} <span className="font-normal text-navy/60">({member.nickname})</span>
                </h3>
                <p className="mt-1 font-medium text-rose">{member.role}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {member.achievements.map((achievement, idx) => (
                <div key={idx}>
                  <h4 className="font-serif text-lg font-semibold text-blue">{achievement.section}</h4>
                  <ul className="mt-3 flex flex-col gap-2 pl-5 text-sm text-navy/80">
                    {achievement.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="list-disc pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
