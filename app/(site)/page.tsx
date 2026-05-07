import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "The Ol' Skool Big Time Steak Club — Minneapolis, MN",
  description: "Minneapolis's premier steak review institution. Est. 1999. Purveyors of Fine Beef Since Day One.",
};

// ── Placeholder data ─────────────────────────────────────────────────────────

const TOP_STEAKHOUSES = [
  {
    name: "Murray's",
    neighborhood: "Downtown",
    price: '$$$$',
    overall: 9.2,
    scores: { steak: 9.6, atmosphere: 9.1, server: 8.9 },
    visited: true,
    slug: 'murrays',
  },
  {
    name: "Manny's Steakhouse",
    neighborhood: "Downtown",
    price: '$$$$',
    overall: 8.9,
    scores: { steak: 9.3, atmosphere: 8.7, server: 9.0 },
    visited: true,
    slug: 'mannys-steakhouse',
  },
  {
    name: "Lindey's Prime Steak House",
    neighborhood: "Arden Hills",
    price: '$$$',
    overall: 8.6,
    scores: { steak: 9.0, atmosphere: 8.4, server: 8.5 },
    visited: true,
    slug: 'lindeys',
  },
];

const LATEST_DISPATCH = {
  title: "On the Occasion of Our 25th Anniversary: A Reflection",
  excerpt: "Twenty-five years ago, a group of former college athletes sat down at a steakhouse and decided, with the full weight of mock-seriousness, to make this official. What followed was a quarter century of scorecards, arguments about doneness, and the quiet satisfaction of knowing exactly what you're doing on a Friday night.",
  author: "The President",
  date: "January 1, 2025",
  slug: "25th-anniversary-reflection",
};

// ── Components ────────────────────────────────────────────────────────────────

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div style={{ marginBottom: '6px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', color: '#8a7060', letterSpacing: '0.06em' }}>
          {label}
        </span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', fontWeight: 600, color: '#2a1a0e' }}>
          {score.toFixed(1)}
        </span>
      </div>
      <div style={{ height: '3px', background: '#e8dfc8', borderRadius: '2px' }}>
        <div style={{
          height: '100%',
          width: `${score * 10}%`,
          background: 'linear-gradient(90deg, #7a1e10, #c89030)',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  );
}

function RestaurantCard({ r }: { r: typeof TOP_STEAKHOUSES[0] }) {
  return (
    <Link href={`/steakhouses/${r.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#fff',
        border: '1px solid #e0d8cc',
        borderTop: '3px solid #8a2e10',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        padding: '24px',
        transition: 'box-shadow 0.2s, transform 0.2s',
        cursor: 'pointer',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#2a1a0e',
              marginBottom: '4px',
            }}>
              {r.name}
            </h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              color: '#8a7060',
              letterSpacing: '0.06em',
            }}>
              {r.neighborhood} · {r.price}
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #7a1e10, #c89030)',
            color: '#fff',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '22px',
            fontWeight: 700,
            width: '52px',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {r.overall.toFixed(1)}
          </div>
        </div>

        {/* Score bars */}
        <ScoreBar label="Steak" score={r.scores.steak} />
        <ScoreBar label="Atmosphere" score={r.scores.atmosphere} />
        <ScoreBar label="Server" score={r.scores.server} />

        {/* Badge */}
        <div style={{ marginTop: '16px' }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            border: '1px solid #c89030',
            color: '#c89030',
            padding: '3px 10px',
          }}>
            OSBTSC Verified
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Homepage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(170deg, #4a0e18 0%, #3a0c10 35%, #1c0606 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px 90px',
        textAlign: 'center',
      }}>
        {/* Radial glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(122,30,16,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <Image
              src="/osbtsc_logo_transparent.png"
              alt="OSBTSC Logo"
              width={120}
              height={180}
              style={{ width: '120px', height: 'auto' }}
              priority
            />
          </div>

          {/* "The Ol' Skool" */}
          <p style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(40px, 6vw, 72px)',
            background: 'linear-gradient(160deg, #f4e080 0%, #c89020 28%, #ecd058 62%, #a47010 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
            lineHeight: 1.2,
            marginBottom: '4px',
          }}>
            The Ol&apos; Skool
          </p>

          {/* "BIG TIME STEAK CLUB" */}
          <h1 style={{
            fontFamily: "'Alfa Slab One', serif",
            fontSize: 'clamp(32px, 5.5vw, 72px)',
            background: 'linear-gradient(160deg, #f0dc78 0%, #c88c1a 28%, #eece54 56%, #a06810 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.8))',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Big Time Steak Club
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '15px',
            fontStyle: 'italic',
            color: '#c89030',
            letterSpacing: '0.16em',
            marginBottom: '36px',
          }}>
            Minneapolis, MN &nbsp;·&nbsp; Est. 1999 &nbsp;·&nbsp; Purveyors of Fine Beef Since Day One
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/steakhouses" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: '#7a1e10',
              color: '#f0e0b0',
              padding: '14px 32px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}>
              Browse Steakhouses
            </Link>
            <Link href="/join" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: '1px solid #d4a860',
              color: '#c89030',
              padding: '13px 32px',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}>
              Join the Club
            </Link>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section style={{
        background: '#240c08',
        borderTop: '1px solid #7a3c14',
        borderBottom: '1px solid #7a3c14',
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '24px',
          textAlign: 'center',
        }}>
          {[
            { value: '20+',  label: 'Restaurants' },
            { value: '300+', label: 'Surveys' },
            { value: '25',   label: 'Years' },
            { value: 'Mpls', label: 'Minnesota' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{
                fontFamily: "'Alfa Slab One', serif",
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                background: 'linear-gradient(160deg, #f0d870, #b07c18)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}>
                {value}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8a6040',
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOP RATED STEAKHOUSES ── */}
      <section style={{ background: '#f5f0e8', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 700,
              color: '#2a1a0e',
              marginBottom: '12px',
            }}>
              Top Rated Steakhouses
            </h2>
            <div style={{
              width: '28px',
              height: '2px',
              background: '#7a1e10',
              margin: '0 auto 12px',
            }} />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#6a5040',
            }}>
              Ranked by the OSBTSC's proprietary 21-question scoring system
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}>
            {TOP_STEAKHOUSES.map(r => <RestaurantCard key={r.slug} r={r} />)}
          </div>

          {/* View all CTA */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/steakhouses" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: '1px solid #7a1e10',
              color: '#7a1e10',
              padding: '12px 32px',
              textDecoration: 'none',
            }}>
              View All Steakhouses
            </Link>
          </div>
        </div>
      </section>

      {/* ── ORNAMENTAL DIVIDER ── */}
      <div style={{
        background: '#f5f0e8',
        textAlign: 'center',
        padding: '8px 24px 0',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        gap: '16px',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #c89030)' }} />
        <span style={{ color: '#c89030', fontSize: '14px' }}>✦</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #c89030, transparent)' }} />
      </div>

      {/* ── LATEST DISPATCH ── */}
      <section style={{ background: '#f5f0e8', padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 700,
              color: '#2a1a0e',
              marginBottom: '10px',
            }}>
              Dispatches from the Field
            </h2>
            <div style={{ width: '28px', height: '2px', background: '#7a1e10', margin: '0 auto' }} />
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #e0d8cc',
            borderTop: '3px solid #8a2e10',
            padding: '40px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c89030',
              marginBottom: '16px',
            }}>
              {LATEST_DISPATCH.author} &nbsp;·&nbsp; {LATEST_DISPATCH.date}
            </p>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700,
              color: '#2a1a0e',
              lineHeight: 1.3,
              marginBottom: '16px',
            }}>
              {LATEST_DISPATCH.title}
            </h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '17px',
              fontStyle: 'italic',
              color: '#6a5040',
              lineHeight: 1.75,
              marginBottom: '28px',
            }}>
              {LATEST_DISPATCH.excerpt}
            </p>
            <Link href={`/dispatches/${LATEST_DISPATCH.slug}`} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#7a1e10',
              textDecoration: 'none',
              borderBottom: '1px solid #7a1e10',
              paddingBottom: '2px',
            }}>
              Read the Full Dispatch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
