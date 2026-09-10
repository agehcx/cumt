"use client";

import { useState } from "react";
import { EventCard, PastEventCard } from "@/components/cards";
import { events, type EventCategory } from "@/data/events";
import { pastEvents } from "@/data/pastEvents";

const FILTERS: Array<EventCategory | "All"> = [
  "All",
  "Career Fair",
  "Workshop",
  "Company Visit",
  "Networking",
  "Career Talk",
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");

  const filteredEvents =
    activeFilter === "All" ? events : events.filter((event) => event.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4D3E0]/50 via-cream to-white px-6 pt-16 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-rose/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-rose">
            CUMT Flagship & Career Series
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-navy sm:text-5xl md:text-6xl leading-[1.15]">
            Event Discovery
          </h1>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed max-w-xl mx-auto">
            Discover premier Management Trainee workshops, panel talks, and networking sessions designed to prepare you for top corporate recruitment.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {FILTERS.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-navy text-white shadow-md shadow-navy/20 scale-105"
                    : "bg-white text-navy/75 border border-gray-light hover:border-pink hover:text-navy hover:bg-cream/50"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Events Grid */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between pb-6 border-b border-gray-light/60">
          <p className="text-sm font-medium text-navy/60">
            Showing <span className="font-bold text-navy">{filteredEvents.length}</span> {filteredEvents.length === 1 ? "event" : "events"}
          </p>
          <span className="text-xs font-semibold text-rose uppercase tracking-wider">
            {activeFilter === "All" ? "All Categories" : activeFilter}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="bg-cream/60 px-6 py-16 border-t border-gray-light/60">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
            <h2 className="text-center font-serif text-3xl font-semibold text-navy">Past Events</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pastEvents.map((event) => (
                <PastEventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
