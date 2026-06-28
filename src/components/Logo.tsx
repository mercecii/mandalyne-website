export function MandalaMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="256" cy="256" r="230" fill="none" stroke="#8B6F1A" strokeWidth="4" />
      <g fill="#C9A227">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path
            key={deg}
            d="M256,200 C242,160 234,110 256,66 C278,110 270,160 256,200 Z"
            transform={deg ? `rotate(${deg},256,256)` : undefined}
          />
        ))}
      </g>
      <g fill="#8B6F1A">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <circle
            key={deg}
            cx="313.4"
            cy="117.4"
            r="6"
            transform={deg ? `rotate(${deg},256,256)` : undefined}
          />
        ))}
      </g>
      <circle cx="256" cy="256" r="40" fill="#8B6F1A" />
      <circle cx="256" cy="256" r="32" fill="#C9A227" />
    </svg>
  );
}

export function MandalyneWordmark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="translate(150,140) scale(0.4783) translate(-256,-256)">
        <circle cx="256" cy="256" r="230" fill="none" stroke="#8B6F1A" strokeWidth="4" />
        <g fill="#C9A227">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <path
              key={deg}
              d="M256,200 C242,160 234,110 256,66 C278,110 270,160 256,200 Z"
              transform={deg ? `rotate(${deg},256,256)` : undefined}
            />
          ))}
        </g>
        <g fill="#8B6F1A">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <circle
              key={deg}
              cx="313.4"
              cy="117.4"
              r="6"
              transform={deg ? `rotate(${deg},256,256)` : undefined}
            />
          ))}
        </g>
        <circle cx="256" cy="256" r="40" fill="#8B6F1A" />
        <circle cx="256" cy="256" r="32" fill="#C9A227" />
      </g>
      <text x="300" y="170" fontFamily="var(--font-playfair), Georgia, serif" fontSize="90" fill="#6B5410">
        Mandalyne
      </text>
    </svg>
  );
}
