import React from "react";

/**
 * IMPORTANT NOTE:
 * WE WILL NEVER EVER USE A DIY OR CUSTOM-DRAWN VERSION OF ANY COMPANY LOGO.
 * ALWAYS USE THE OFFICIAL COMPANY LOGO ASSETS SOURCED DIRECTLY FROM THE COMPANY
 * OR OFFICIAL VECTOR REPOSITORIES (e.g. /public/images/companies/*).
 */

interface CompanyLogoProps {
  company: string;
  className?: string;
  size?: number;
}

const COMPANY_LOGO_MAP: Record<string, { src: string; bg: string; padding: string }> = {
  unilever: {
    src: "/images/companies/unilever.svg",
    bg: "bg-white",
    padding: "p-1",
  },
  ptt: {
    src: "/images/companies/pttgc.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
  scb: {
    src: "/images/companies/scb.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
  "siam commercial": {
    src: "/images/companies/scb.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
  bcg: {
    src: "/images/companies/bcg.svg",
    bg: "bg-white",
    padding: "p-2",
  },
  boston: {
    src: "/images/companies/bcg.svg",
    bg: "bg-white",
    padding: "p-2",
  },
  central: {
    src: "/images/companies/central-retail.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
  line: {
    src: "/images/companies/line.svg",
    bg: "bg-white",
    padding: "p-1",
  },
  lazada: {
    src: "/images/companies/lazada.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
  nestle: {
    src: "/images/companies/nestle.svg",
    bg: "bg-white",
    padding: "p-1.5",
  },
};

export function CompanyLogo({ company, className = "", size = 52 }: CompanyLogoProps) {
  const norm = company.toLowerCase();
  const matchedKey = Object.keys(COMPANY_LOGO_MAP).find((k) => norm.includes(k));
  const logoInfo = matchedKey ? COMPANY_LOGO_MAP[matchedKey] : null;

  if (logoInfo) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex shrink-0 items-center justify-center rounded-xl ${logoInfo.bg} ${logoInfo.padding} shadow-md border border-white/80 overflow-hidden ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- official vector company logo */}
        <img
          src={logoInfo.src}
          alt={`${company} official logo`}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  // Strict fallback with clean badge (no DIY illustrations)
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-xl bg-white text-navy font-serif font-bold shadow-md border border-white/80 ${className}`}
    >
      <span style={{ fontSize: size * 0.45 }}>{company.charAt(0)}</span>
    </div>
  );
}
