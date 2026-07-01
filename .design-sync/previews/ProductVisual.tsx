import { ProductVisual } from 'mandalyne-website';

export function Ring() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 240 }}>
        <ProductVisual category="Rings" size="lg" />
      </div>
    </div>
  );
}

export function Earring() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 240 }}>
        <ProductVisual category="Earrings" size="lg" />
      </div>
    </div>
  );
}

export function Necklace() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 240 }}>
        <ProductVisual category="Necklaces" size="lg" />
      </div>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 16 }}>
      <div style={{ width: 100 }}><ProductVisual category="Rings" size="sm" /></div>
      <div style={{ width: 160 }}><ProductVisual category="Earrings" size="md" /></div>
      <div style={{ width: 220 }}><ProductVisual category="Necklaces" size="lg" /></div>
    </div>
  );
}
