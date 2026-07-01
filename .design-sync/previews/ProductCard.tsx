import { ProductCard, products } from 'mandalyne-website';

const ring = products[0];     // Aanya Solitaire Ring
const earring = products[3];  // Saanvi Drop Earrings
const necklace = products[5]; // Kiara Pendant Necklace

export function Ring() {
  return (
    <div style={{ background: '#120f09', padding: 32 }}>
      <div style={{ width: 220 }}>
        <ProductCard product={ring} />
      </div>
    </div>
  );
}

export function Earring() {
  return (
    <div style={{ background: '#120f09', padding: 32 }}>
      <div style={{ width: 220 }}>
        <ProductCard product={earring} />
      </div>
    </div>
  );
}

export function Necklace() {
  return (
    <div style={{ background: '#120f09', padding: 32 }}>
      <div style={{ width: 220 }}>
        <ProductCard product={necklace} />
      </div>
    </div>
  );
}

export function Grid() {
  return (
    <div style={{ background: '#120f09', padding: 32, display: 'grid', gridTemplateColumns: 'repeat(3,220px)', gap: 24 }}>
      {[ring, earring, necklace].map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
