'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleJoin() {
    if (!email) { setMsg('Enter your email first.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMsg(data.message || 'Welcome to the club.');
      if (data.message === 'Welcome to the club.') setEmail('');
    } catch {
      setMsg('Something went wrong. Try again.');
    }
    setLoading(false);
  }

  return (
    <>
      <style>{`
        .bg {
          position: fixed; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% 0%, #7a1828 0%, transparent 65%),
            radial-gradient(ellipse 100% 60% at 50% 100%, #1e0406 0%, transparent 60%),
            repeating-linear-gradient(91deg, transparent 0, transparent 28px, rgba(0,0,0,0.07) 28px, rgba(0,0,0,0.07) 29px),
            linear-gradient(170deg, #6b1220 0%, #4a0c16 30%, #3a0910 60%, #5c1018 100%);
        }
        .vig {
          position: fixed; inset: 0; z-index: 1;
          background: radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%);
        }
        .stage {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          min-height: 100vh; width: 100%;
          padding: 60px 5% 40px;
          text-align: center; gap: 0;
          background: #3d0810;
          font-family: 'Cormorant Garamond', serif;
        }
        .arch-wrap {
          width: 100%; display: flex; justify-content: center;
          overflow: visible; padding: 4px 120px 0;
          margin-bottom: -30px;
          opacity: 0;
          animation: fadeIn 2.4s ease forwards 0.1s;
        }
        .arch-title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 1.4; white-space: nowrap; overflow: visible;
          padding: 14px 40px 0;
          background: linear-gradient(160deg, #f4e080 0%, #c89020 28%, #ecd058 62%, #a47010 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 5px rgba(244,224,128,0.75)) drop-shadow(0 4px 10px rgba(0,0,0,0.65));
          transform: rotate(-4deg);
        }
        .logo-wrap {
          width: clamp(180px, 20vw, 260px);
          opacity: 0; overflow: visible;
          margin-bottom: 0; max-height: 0;
        }
        .logo-wrap.visible {
          max-height: 400px;
          animation: logoRise 1s cubic-bezier(0.18,1.1,0.4,1) forwards;
        }
        .wordmark-stage {
          display: flex; flex-direction: row;
          align-items: baseline; justify-content: center;
          gap: 0.28em; height: auto; overflow: visible; padding: 0;
        }
        .drop-word {
          font-family: 'Alfa Slab One', serif;
          font-size: clamp(32px, 4.8vw, 72px);
          letter-spacing: 0.02em;
          background: linear-gradient(160deg, #f0dc78 0%, #c88c1a 28%, #eece54 56%, #a06810 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.8));
          display: inline-block; opacity: 0;
          transform: translateY(-180px); overflow: visible;
          line-height: 1.3; padding: 10px 8px;
        }
        .word-big   { animation: wordDrop 0.65s cubic-bezier(0.22,1.4,0.4,1) forwards 1.0s, wordFlash 0.4s ease forwards 1.62s; }
        .word-time  { animation: wordDrop 0.65s cubic-bezier(0.22,1.4,0.4,1) forwards 1.8s, wordFlash 0.4s ease forwards 2.42s; }
        .word-steak { animation: wordDrop 0.65s cubic-bezier(0.22,1.4,0.4,1) forwards 2.6s, wordFlash 0.4s ease forwards 3.22s; }
        .club-wrap {
          opacity: 0; transform: translateY(4px);
          animation: clubUp 0.5s ease forwards 3.4s; margin-bottom: 0;
        }
        .club-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.6vw, 20px); font-weight: 600;
          color: #9a6828; text-transform: uppercase; letter-spacing: 0.55em;
        }
        .divider {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, transparent, #8a5820, transparent);
          margin-bottom: 20px; opacity: 0;
          animation: fadeIn 0.7s ease forwards 5.8s;
        }
        .bottom {
          opacity: 0; animation: fadeIn 0.7s ease forwards 6.1s;
          text-align: center; margin-bottom: 14px;
        }
        .coming-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px; font-weight: 600; color: #c89030;
          text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 14px;
        }
        .email-row { display: inline-flex; border: 1px solid #8a5c28; overflow: visible; }
        .email-row input[type="email"] {
          width: 200px; background: rgba(45,6,10,0.95);
          border: none; outline: none; color: #d4a040;
          font-family: 'Cormorant Garamond', serif; font-size: 13px;
          padding: 9px 14px; -webkit-appearance: none;
          -webkit-box-shadow: 0 0 0 1000px rgba(45,6,10,0.98) inset;
          -webkit-text-fill-color: #d4a040;
        }
        .email-row input[type="email"]::placeholder { color: #7a4820; opacity: 1; }
        .email-row button {
          background: #6a1e10; border: none; border-left: 1px solid #8a5c28;
          color: #f0d878; font-family: 'Cormorant Garamond', serif;
          font-size: 10px; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 9px 16px; cursor: pointer;
          white-space: nowrap; transition: background 0.2s;
        }
        .email-row button:hover { background: #8a2e18; }
        .email-row button:disabled { opacity: 0.6; cursor: default; }
        .signup-msg {
          margin-top: 10px; font-family: 'Cormorant Garamond', serif;
          font-size: 12px; color: #c89030; letter-spacing: 0.1em; min-height: 16px;
        }
        .social-row {
          display: flex; gap: 1.4rem; justify-content: center;
          margin-bottom: 12px; opacity: 0;
          animation: fadeIn 0.7s ease forwards 6.5s;
        }
        .social-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px; font-weight: 600; color: #c89030;
          text-transform: uppercase; letter-spacing: 0.28em;
          text-decoration: none;
          border-bottom: 1px solid rgba(200,144,48,0.4); padding-bottom: 1px;
          transition: color 0.2s;
        }
        .social-link:hover { color: #f0d878; }
        .tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px; font-style: italic; color: #c89030;
          letter-spacing: 0.13em; opacity: 0;
          animation: fadeIn 0.7s ease forwards 6.8s;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes logoRise {
          0%   { opacity: 0; transform: scale(0.82) translateY(20px); }
          60%  { opacity: 1; }
          85%  { transform: scale(1.03) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes wordDrop {
          0%   { opacity: 0; transform: translateY(-180px); }
          55%  { opacity: 1; transform: translateY(6px); }
          75%  { transform: translateY(-3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordFlash {
          0%   { filter: drop-shadow(0 4px 16px rgba(0,0,0,0.8)) drop-shadow(0 0 32px rgba(255,210,80,0.9)); }
          100% { filter: drop-shadow(0 4px 16px rgba(0,0,0,0.8)); }
        }
        @keyframes clubUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="bg" />
      <div className="vig" />

      <div className="stage">
        <div className="arch-wrap">
          <div className="arch-title">The Ol&apos; Skool</div>
        </div>

        <div className="logo-wrap" id="logoWrap">
          <Image
            src="/osbtsc_logo_transparent.png"
            alt="The Ol' Skool Big Time Steak Club"
            width={260}
            height={390}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div className="wordmark-stage">
          <span className="drop-word word-big"   id="wBig">Big</span>
          <span className="drop-word word-time"  id="wTime">Time</span>
          <span className="drop-word word-steak" id="wSteak">Steak</span>
        </div>

        <div className="club-wrap"><span className="club-text">Club</span></div>

        <div className="divider" />

        <div className="bottom">
          <p className="coming-label">Coming Soon</p>
          <div className="email-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
            />
            <button onClick={handleJoin} disabled={loading}>
              {loading ? '...' : 'Join the Club'}
            </button>
          </div>
          {msg && <p className="signup-msg">{msg}</p>}
        </div>

        <div className="social-row">
          <a className="social-link" href="https://instagram.com/olskoolbigtimesteak" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="social-link" href="https://x.com/bigtimesteak" target="_blank" rel="noopener noreferrer">X</a>
        </div>

        <p className="tagline">Minneapolis, MN &nbsp;·&nbsp; Est. 1999 &nbsp;·&nbsp; Purveyors of Fine Beef Since Day One</p>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        setTimeout(function() {
          ['wBig','wTime','wSteak'].forEach(function(id) {
            var el = document.getElementById(id);
            el.style.filter = 'drop-shadow(0 4px 16px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(255,210,80,1))';
            setTimeout(function() {
              el.style.transition = 'opacity 0.9s ease, filter 0.6s ease';
              el.style.opacity = '0.22';
              el.style.filter = 'drop-shadow(0 4px 16px rgba(0,0,0,0.8))';
            }, 200);
          });
        }, 3700);
        setTimeout(function() {
          var logo = document.getElementById('logoWrap');
          logo.style.overflow = 'visible';
          logo.classList.add('visible');
        }, 4200);
        setTimeout(function() {
          ['wBig','wTime','wSteak'].forEach(function(id) {
            var el = document.getElementById(id);
            el.style.transition = 'opacity 1s ease';
            el.style.opacity = '1';
          });
        }, 5500);
      `}} />
    </>
  );
}
