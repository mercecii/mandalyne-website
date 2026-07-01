import { Header } from 'mandalyne-website';

export function Default() {
  return (
    <div style={{ background: '#120f09', minHeight: 300, position: 'relative' }}>
      <Header />
    </div>
  );
}

export function OnDarkContent() {
  return (
    <div style={{ background: '#120f09', minHeight: 400, position: 'relative' }}>
      <Header />
      <div style={{ paddingTop: 120, paddingLeft: 48, paddingRight: 48 }}>
        <p style={{ color: '#b3a07c', fontFamily: 'Georgia, serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>New Arrivals</p>
        <h2 style={{ color: '#f3ead6', fontFamily: 'Georgia, serif', fontSize: 28, marginBottom: 8 }}>Jewelry, inspired by symmetry.</h2>
        <p style={{ color: '#b3a07c', fontFamily: 'Georgia, serif', fontSize: 14 }}>Handcrafted artificial jewelry, launching soon on Amazon India.</p>
      </div>
    </div>
  );
}
