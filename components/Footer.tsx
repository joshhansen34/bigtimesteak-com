import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    heading: 'The Club',
    links: [
      { href: '/the-club',  label: 'About' },
      { href: '/dispatches', label: 'Dispatches' },
      { href: '/join',       label: 'Join' },
    ],
  },
  {
    heading: 'Steakhouses',
    links: [
      { href: '/steakhouses',       label: 'Browse All' },
      { href: '/steakhouses#top',   label: 'Top Rated' },
      { href: '/survey',            label: 'Submit a Review' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { href: '/steak-bible',          label: 'The Steak Bible' },
      { href: '/steak-bible#cuts',     label: 'Know Your Cuts' },
      { href: '/steak-bible#temps',    label: 'Temps & Technique' },
    ],
  },
  {
    heading: 'More',
    links: [
      { href: '/merch',    label: 'Merch' },
      { href: '/login',    label: 'Sign In' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1a0806', borderTop: '1px solid #7a3c14' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 32px' }}>

        {/* Top: logo + links */}
        <div style={{ display: 'flex', gap: '48px', marginBottom: '40px' }}>

          {/* Brand */}
          <div style={{ minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Image
                src="/osbtsc_logo_transparent.png"
                alt="OSBTSC"
                width={36}
                height={54}
                style={{ width: '36px', height: 'auto' }}
              />
              <span style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '18px',
                background: 'linear-gradient(160deg, #f4e080 0%, #c89020 40%, #ecd058 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
              }}>
                Big Time Steak Club
              </span>
            </div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              fontStyle: 'italic',
              color: '#6a4828',
              lineHeight: 1.6,
            }}>
              Minneapolis, MN · Est. 1999<br />
              Purveyors of Fine Beef Since Day One
            </p>

            <div style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
              {[
                { href: 'https://instagram.com/olskoolbigtimesteak', label: 'IG' },
                { href: 'https://x.com/bigtimesteak', label: 'X' },
                { href: 'https://facebook.com', label: 'FB' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: '#9a7050',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', gap: '48px', flex: 1, justifyContent: 'flex-end' }}>
            {sections.map(({ heading, links }) => (
              <div key={heading}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#c89030',
                  marginBottom: '12px',
                }}>
                  {heading}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '13px',
                        color: '#9a7050',
                        textDecoration: 'none',
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #7a3c14, transparent)',
          marginBottom: '20px',
        }} />

        {/* Copyright */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '11px',
          color: '#6a4828',
          textAlign: 'center',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} The Ol&apos; Skool Big Time Steak Club™ · Minneapolis, MN · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
