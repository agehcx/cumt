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
    <div className="flex flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16">
        <h1 className="text-center font-serif text-4xl font-semibold text-navy">Event Discovery</h1>

        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter ? "bg-rose text-white" : "bg-gray-light text-navy/70 hover:bg-pink/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="bg-cream px-6 py-16">
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
