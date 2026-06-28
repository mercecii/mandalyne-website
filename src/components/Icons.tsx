export function RingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="38" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 22 L32 8 L40 22 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="15" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function EarringIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M32 8 C 24 8 20 16 24 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="28" r="4" fill="currentColor" />
      <path d="M32 32 L32 40" stroke="currentColor" strokeWidth="2.5" />
      <path d="M22 40 a10 12 0 0 0 20 0 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function NecklaceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M10 14 C 10 38 24 50 32 50 C 40 50 54 38 54 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M32 50 L32 42 L26 36 L38 36 L32 42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
