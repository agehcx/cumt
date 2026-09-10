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
