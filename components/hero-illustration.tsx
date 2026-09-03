/**
 * Hero artwork for the homepage — composed from the actual design assets
 * (Homepage.svg): a night-sky wash, the "looking up at skyscrapers" skyline
 * illustration anchored to the ground, and the "helping each other climb"
 * illustration floating as a card, top-right — same images, same placement.
 */

interface HeroIllustrationProps {
  className?: string;
}

export default function HeroIllustration({
  className = "",
}: HeroIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden bg-gradient-to-b from-[#0D1938] via-[#16224A] to-[#22315C] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
      <img
        src="/images/home/hero-skyline.png"
        alt=""
        className="absolute inset-x-0 bottom-0 h-[42%] w-full object-cover object-bottom sm:h-[48%] lg:h-[54%]"
      />

      <div className="absolute right-[6%] top-[16%] hidden w-[38%] max-w-[420px] rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(13,25,56,0.45)] sm:block lg:top-[14%]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static asset in public/, next/image adds no value here */}
        <img
          src="/images/home/hero-climb.png"
          alt="Illustration of people helping each other climb higher"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
