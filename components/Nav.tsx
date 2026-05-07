'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/steakhouses',  label: 'Steakhouses' },
  { href: '/steak-bible',  label: 'Steak Bible' },
  { href: '/dispatches',   label: 'Dispatches' },
  { href: '/the-club',     label: 'The Club' },
  { href: '/merch',        label: 'Merch' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      background: '#1e0a06',
      borderBottom: '1px solid #7a3c14',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo + wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image
            src="/osbtsc_logo_transparent.png"
            alt="OSBTSC"
            width={40}
            height={60}
            style={{ width: '40px', height: 'auto' }}
          />
          <span style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '22px',
            background: 'linear-gradient(160deg, #f4e080 0%, #c89020 40%, #ecd058 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
          }}>
            The Ol&apos; Skool Big Time Steak Club
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: pathname === href ? '#f0d878' : '#9a7050',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/join"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#7a1e10',
              color: '#f0e0b0',
              padding: '7px 18px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            Join
          </Link>
          <Link
            href="/login"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              border: '1px solid #d4a860',
              color: '#c89030',
              padding: '6px 18px',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
