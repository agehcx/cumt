export interface PastEventItem {
  slug: string;
  title: string;
  category: string;
}

// CUMT is newly founded (2025) — no past events to report yet.
// Populate this once the first event on the activity timeline (see data/events.ts) has run.
export const pastEvents: PastEventItem[] = [];
