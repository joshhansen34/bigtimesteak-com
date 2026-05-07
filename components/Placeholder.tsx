export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f0e8',
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '40px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #7a1e10, transparent)',
        marginBottom: '32px',
      }} />
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: 700,
        color: '#2a1a0e',
        marginBottom: '16px',
      }}>
        {title}
      </h1>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '18px',
        color: '#6a5040',
        maxWidth: '480px',
        lineHeight: 1.7,
      }}>
        {description}
      </p>
      <div style={{
        width: '40px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #7a1e10, transparent)',
        marginTop: '32px',
      }} />
    </div>
  );
}
