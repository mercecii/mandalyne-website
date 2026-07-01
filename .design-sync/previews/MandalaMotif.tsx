import { MandalaMotif } from 'mandalyne-website';

const wrap = (bg = '#120f09') => ({
  background: bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 32,
  gap: 24,
});

export function Default() {
  return (
    <div style={wrap()}>
      <MandalaMotif style={{ width: 180, height: 180 }} />
    </div>
  );
}

export function GoldVariant() {
  return (
    <div style={wrap()}>
      <MandalaMotif ringColor="#C9A227" petalColor="#FBF6EA" style={{ width: 180, height: 180 }} />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ ...wrap(), flexDirection: 'row', alignItems: 'center' }}>
      <MandalaMotif style={{ width: 48, height: 48 }} />
      <MandalaMotif style={{ width: 96, height: 96 }} />
      <MandalaMotif style={{ width: 160, height: 160 }} />
    </div>
  );
}
