import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "large";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-rose text-white hover:bg-rose/90",
  secondary: "border border-white text-white hover:bg-white/10",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-sm",
  large: "px-8 py-3.5 text-base",
};

const BASE_BUTTON_CLASSES =
  "inline-flex items-center justify-center rounded-full font-sans font-medium transition-colors";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${BASE_BUTTON_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${BASE_BUTTON_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full bg-pink/40 px-3 py-1 text-xs font-medium text-navy ${className}`}
    >
      {children}
    </span>
  );
}

const STATUS_COLOR: Record<string, string> = {
  "Open for Registration": "bg-rose/10 text-rose",
};
const DEFAULT_STATUS_COLOR = "bg-gray-light text-navy/60";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const colorClasses = STATUS_COLOR[status] ?? DEFAULT_STATUS_COLOR;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${colorClasses} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search...", className = "" }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={`w-full rounded-full border border-gray-light bg-white px-5 py-3 text-sm text-navy placeholder:text-gray focus:border-blue focus:outline-none ${className}`}
    />
  );
}

interface PlaceholderProps {
  label: string;
  className?: string;
}

// ponytail: stock photo via picsum.photos (seeded by label so it's stable across reloads) — swap for real club photos later.
export function Placeholder({ label, className = "" }: PlaceholderProps) {
  const seed = encodeURIComponent(label.toLowerCase().replace(/\s+/g, "-"));
  return (
    // eslint-disable-next-line @next/next/no-img-element -- placeholder-only, real photos will replace this
    <img
      src={`https://picsum.photos/seed/${seed}/600/600`}
      alt={label}
      className={`rounded-xl bg-gray-light object-cover ${className}`}
    />
  );
}

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl bg-white px-6 py-5 text-center shadow-md">
      <span className="font-serif text-2xl font-semibold text-navy sm:text-3xl">{value}</span>
      <span className="text-xs text-navy/60 sm:text-sm">{label}</span>
    </div>
  );
}
