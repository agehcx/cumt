"use client";

import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: ReactNode[];
}

export function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);

  if (items.length === 0) return null;

  const goPrev = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const goNext = () => setIndex((current) => (current + 1) % items.length);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-light">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, itemIndex) => (
          <div key={itemIndex} className="w-full shrink-0">
            {item}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy shadow hover:bg-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy shadow hover:bg-white"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 w-2 rounded-full transition-colors ${
              dotIndex === index ? "bg-rose" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
