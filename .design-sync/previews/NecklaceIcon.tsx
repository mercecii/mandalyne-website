import { NecklaceIcon } from 'mandalyne-website';

export function Default() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A227' }}>
      <NecklaceIcon className="h-14 w-14" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, color: '#C9A227' }}>
      <NecklaceIcon className="h-9 w-9" />
      <NecklaceIcon className="h-14 w-14" />
      <NecklaceIcon className="h-20 w-20" />
    </div>
  );
}

export function Muted() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b3a07c' }}>
      <NecklaceIcon className="h-14 w-14" />
    </div>
  );
}
