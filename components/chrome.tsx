"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/join", label: "Join CUMT" },
  { href: "/partners", label: "Partners" },
];

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Programs" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/join", label: "Join CUMT" },
  { href: "/partners", label: "Partners" },
];

const CONTACT_EMAIL = "chulalongkorn.management.trainee.club@gmail.com";

/** lucide dropped the brand glyphs, so these two are drawn inline. */
function InstagramIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="4.2" cy="4.2" r="2.2" />
      <rect x="2.2" y="8.4" width="4" height="13.4" rx="1.4" />
      <path d="M10 8.4h3.8v1.9a4.3 4.3 0 0 1 3.8-2.1c3 0 4.4 1.9 4.4 5.3v8.3h-4v-7.4c0-1.8-.7-2.7-2.1-2.7-1.5 0-2.3 1-2.3 2.7v7.4h-3.6V8.4Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_6px_18px_rgba(13,25,56,0.10)]">
      <div className="flex h-[76px] items-center justify-between px-6 lg:h-[103px] lg:pl-[75px] lg:pr-[75px]">
        <Link href="/" aria-label="CUMT home">
          <Image
            src="/logo.svg"
            alt="CUMT — Chulalongkorn Management Trainee Club"
            width={122}
            height={57}
            priority
            className="h-[44px] w-auto lg:h-[57px]"
          />
        </Link>

        <nav className="hidden items-center gap-[40px] lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[17px] font-semibold transition-colors ${
                  isActive ? "text-rose" : "text-navy hover:text-rose"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="text-navy lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-light bg-white px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-[16px] font-semibold ${
                  isActive ? "bg-pink/30 text-rose" : "text-navy hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white shadow-[0_-6px_18px_rgba(13,25,56,0.10)]">
      <div className="grid grid-cols-1 gap-10 px-6 pt-[55px] pb-[30px] md:grid-cols-[334px_414px_1fr] md:gap-0 lg:pl-[113px] lg:pr-[95px]">
        <div>
          <Image
            src="/logo.svg"
            alt="CUMT — Chulalongkorn Management Trainee Club"
            width={197}
            height={95}
            className="h-[95px] w-auto"
          />
        </div>

        <div>
          <h3 className="font-serif text-[22px] font-bold text-navy">Links:</h3>
          <ul className="mt-[26px] flex max-w-[290px] flex-wrap gap-x-[16px] gap-y-[10px]">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[17px] text-navy underline underline-offset-[3px] hover:text-rose"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-[22px] font-bold text-navy">
            Contact:
          </h3>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-[22px] flex items-center gap-[14px] text-[17px] text-navy hover:text-rose"
          >
            <Mail size={26} strokeWidth={2} className="shrink-0" />
            <span className="break-all">{CONTACT_EMAIL}</span>
          </a>

          <div className="mt-[30px] flex items-center gap-[18px]">
            <h3 className="font-serif text-[22px] font-bold text-navy">
              Follow Us:
            </h3>
            <a
              href="https://instagram.com"
              aria-label="CUMT on Instagram"
              className="text-navy hover:text-rose"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="CUMT on LinkedIn"
              className="text-navy hover:text-rose"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <p className="pb-[26px] text-center text-[17px] text-pink">
        © 2026 Chulalongkorn Management Trainee Club. All rights reserved.
      </p>
    </footer>
  );
}
