import React from "react";

interface CompanyLogoProps {
  company: string;
  className?: string;
  size?: number;
}

export function CompanyLogo({ company, className = "", size = 48 }: CompanyLogoProps) {
  const norm = company.toLowerCase();

  // Unilever
  if (norm.includes("unilever")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Unilever"
      >
        <rect width="100" height="100" rx="20" fill="#1F36C7" />
        <path
          d="M32 30 C32 24, 38 20, 50 20 C62 20, 68 24, 68 30 C68 38, 58 42, 58 50 C58 58, 64 62, 64 68 C64 76, 56 80, 50 80 C44 80, 36 76, 36 68 C36 62, 42 58, 42 50 C42 42, 32 38, 32 30 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="50" cy="32" r="4" fill="#FFFFFF" />
        <circle cx="43" cy="65" r="3" fill="#FFFFFF" />
        <circle cx="57" cy="65" r="3" fill="#FFFFFF" />
        <path d="M46 72 C48 74, 52 74, 54 72" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // PTT / PTTGC
  if (norm.includes("ptt")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="PTT Global Chemical"
      >
        <rect width="100" height="100" rx="20" fill="#0072CE" />
        {/* PTT flame droplet motif */}
        <path
          d="M50 20 C50 20, 32 44, 32 60 C32 72, 40 80, 50 80 C60 80, 68 72, 68 60 C68 44, 50 20, 50 20 Z"
          fill="#00A3E0"
        />
        <path
          d="M50 34 C50 34, 39 49, 39 61 C39 69, 44 75, 50 75 C56 75, 61 69, 61 61 C61 49, 50 34, 50 34 Z"
          fill="#ED1B2D"
        />
        <circle cx="50" cy="61" r="5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Siam Commercial Bank (SCB)
  if (norm.includes("siam commercial") || norm.includes("scb")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Siam Commercial Bank"
      >
        <rect width="100" height="100" rx="20" fill="#4E2A84" />
        {/* SCB Bodhi Tree stylized leaf */}
        <path
          d="M50 22 C48 30, 32 42, 32 58 C32 70, 40 76, 50 76 C60 76, 68 70, 68 58 C68 42, 52 30, 50 22 Z"
          fill="#FFB81C"
        />
        <path
          d="M50 34 C49 40, 38 48, 38 60 C38 66, 43 70, 50 70 C57 70, 62 66, 62 60 C62 48, 51 40, 50 34 Z"
          fill="#4E2A84"
        />
        <circle cx="50" cy="56" r="4.5" fill="#FFB81C" />
      </svg>
    );
  }

  // Boston Consulting Group (BCG)
  if (norm.includes("bcg") || norm.includes("boston")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Boston Consulting Group"
      >
        <rect width="100" height="100" rx="20" fill="#005A36" />
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="30"
          letterSpacing="1.5"
        >
          BCG
        </text>
      </svg>
    );
  }

  // Central Retail Corporation
  if (norm.includes("central")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Central Retail Corporation"
      >
        <rect width="100" height="100" rx="20" fill="#D71920" />
        <circle cx="50" cy="50" r="28" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeDasharray="145 40" transform="rotate(-30 50 50)" />
        <circle cx="50" cy="50" r="9" fill="#FFFFFF" />
      </svg>
    );
  }

  // LINE Thailand
  if (norm.includes("line")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="LINE Thailand"
      >
        <rect width="100" height="100" rx="20" fill="#06C755" />
        <path
          d="M50 25 C33.4 25 20 35.7 20 48.9 C20 57.1 25.5 64.2 33.8 68.3 C35.1 68.9 36 69.9 35.6 71.5 C35.2 73.1 34.3 76.7 33.7 78.9 C33.2 80.9 35 81.9 36.4 80.9 C42.3 76.8 49 72.8 50 72.8 C66.6 72.8 80 62.1 80 48.9 C80 35.7 66.6 25 50 25 Z"
          fill="#FFFFFF"
        />
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="#06C755"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17"
          letterSpacing="0.5"
        >
          LINE
        </text>
      </svg>
    );
  }

  // Lazada Thailand
  if (norm.includes("lazada")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Lazada Thailand"
      >
        <rect width="100" height="100" rx="20" fill="#0F146D" />
        <path
          d="M50 30 L35 43 C29 48 29 57 35 62 C41 67 48 67 50 65 C52 67 59 67 65 62 C71 57 71 48 65 43 L50 30 Z"
          fill="#F57224"
        />
        <path
          d="M50 38 L40 47 C37 50 37 55 40 58 C43 61 47 61 50 59 C53 61 57 61 60 58 C63 55 63 50 60 47 L50 38 Z"
          fill="#0F146D"
        />
      </svg>
    );
  }

  // Nestle Thailand
  if (norm.includes("nestle") || norm.includes("nestlé")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-xl overflow-hidden shadow-sm ${className}`}
        aria-label="Nestle Thailand"
      >
        <rect width="100" height="100" rx="20" fill="#005CA9" />
        <path
          d="M28 58 Q50 72 72 58 Q50 64 28 58 Z"
          fill="#FFFFFF"
        />
        <path
          d="M38 52 C38 46 44 42 48 42 C52 42 56 46 54 52 Z"
          fill="#FFFFFF"
        />
        <path
          d="M52 48 C52 44 56 40 60 40 C63 40 66 43 64 48 Z"
          fill="#FFFFFF"
        />
        <circle cx="48" cy="40" r="2.5" fill="#FFFFFF" />
        <circle cx="59" cy="38" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Fallback
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink/20 to-cream font-serif font-bold text-navy shadow-inner ${className}`}
    >
      <span style={{ fontSize: size * 0.45 }}>{company.charAt(0)}</span>
    </div>
  );
}
