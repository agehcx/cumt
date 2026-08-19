import { notFound } from "next/navigation";
import { Calendar, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/ui";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-pink/30 to-white px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div>
          <h1 className="font-serif text-4xl font-semibold text-navy">{event.title}</h1>
          <p className="mt-2 text-lg text-navy/60">{event.partnerCompany}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-navy/70">
          <span className="flex items-center gap-2">
            <Calendar size={16} /> {event.date}, {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {event.location}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-navy">Status:</span>
          <StatusBadge status={event.status} />
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Event Full Detail:</h2>
          <p className="mt-2 text-navy/70">{event.fullDescription}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Registration Period:</h2>
          <p className="mt-2 text-navy/70">
            {event.registrationPeriod.from} - {event.registrationPeriod.to}
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="eventSlug" value={event.slug} />
          <input type="hidden" name="eventTitle" value={event.title} />
          <button
            type="submit"
            className="w-full rounded-full bg-navy px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy/90 sm:w-auto"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
