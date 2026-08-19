interface TimelineStep {
  label: string;
  date: string;
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

export function VerticalTimeline({ steps }: VerticalTimelineProps) {
  return (
    <ol className="relative flex flex-col gap-10 border-l-2 border-navy pl-8">
      {steps.map((step) => (
        <li key={step.label} className="relative">
          <span className="absolute -left-[2.15rem] top-1 h-4 w-4 rotate-45 bg-navy" />
          <p className="font-serif text-lg font-semibold text-navy">{step.label}</p>
          <p className="text-sm text-navy/60">{step.date}</p>
        </li>
      ))}
    </ol>
  );
}
