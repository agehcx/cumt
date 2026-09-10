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
    <div className="min-h-screen bg-gradient-to-b from-[#F4D3E0]/30 via-cream/40 to-white px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <a
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 transition-colors hover:text-rose"
        >
          ← Back to All Events
        </a>

        <div className="rounded-3xl border border-gray-light/80 bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgba(13,25,56,0.06)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-light/60 pb-6">
            <span className="rounded-full bg-pink/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose">
              {event.category}
            </span>
            <StatusBadge status={event.status} />
          </div>

          <div className="mt-6">
            <h1 className="font-serif text-3xl font-bold leading-snug text-navy sm:text-4xl">
              {event.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-blue">{event.partnerCompany}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl bg-cream/70 p-5 text-sm text-navy/80 sm:grid-cols-2">
            <span className="flex items-center gap-3">
              <Calendar size={18} className="text-rose shrink-0" />
              <span>
                <strong className="block text-navy font-semibold">Date & Time</strong>
                {event.date} • {event.time}
              </span>
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={18} className="text-rose shrink-0" />
              <span>
                <strong className="block text-navy font-semibold">Location</strong>
                {event.location}
              </span>
            </span>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-navy">About This Event</h2>
              <p className="mt-3 text-base leading-relaxed text-navy/75">{event.fullDescription}</p>
            </div>

            <div className="rounded-xl border border-pink/30 bg-pink/10 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose">
                Registration Period
              </h3>
              <p className="mt-1 font-medium text-navy">
                {event.registrationPeriod.from} — {event.registrationPeriod.to}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-light/60 pt-8">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="eventSlug" value={event.slug} />
              <input type="hidden" name="eventTitle" value={event.title} />
              <button
                type="submit"
                className="w-full rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/20 transition-all hover:bg-rose hover:shadow-rose/30 sm:w-auto"
              >
                Register for this Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
