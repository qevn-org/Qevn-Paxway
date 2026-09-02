import React, { useState } from 'react';
import { 
  Layers, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  Zap,
  Globe,
  Bot,
  UserSearch,
  Megaphone
} from 'lucide-react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('ankush@paxway.app');
  const [password, setPassword] = useState('paxway2026');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: 'Ankush Pathak',
        email: email,
        role: 'Founder & CEO',
        workspace: 'Paxway AI Growth OS'
      });
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: 'Ankush Pathak',
        email: 'ankush@paxway.app',
        role: 'Founder & CEO',
        workspace: 'Paxway AI Growth OS'
      });
    }, 400);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      background: '#060708',
      color: '#FFFFFF',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* LEFT SPLIT: Dark immersive AI features backdrop (Mirroring the screenshot layout) */}
      <div style={{
        background: 'linear-gradient(145deg, #07080A 0%, #0D1013 50%, #050607 100%)',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '56px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient background glows */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.15,
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-50px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #38E1FF 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.12,
          pointerEvents: 'none'
        }} />

        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, zIndex: 10 }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent) 0%, #84D931 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#08090A',
            boxShadow: '0 0 25px var(--accent-glow)'
          }}>
            <Layers size={22} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 8 }}>
              PAXWAY
              <span className="brand-badge">AI GROWTH OS</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Engineered by QEVN Studio</div>
          </div>
        </div>

        {/* Middle Feature Section (Screenshot exact format) */}
        <div style={{ margin: '48px 0', zIndex: 10, maxWidth: '520px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: 16,
            color: '#FFFFFF'
          }}>
            Create your high-growth AI operating system
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 28 }}>
            Explore Paxway's core autonomous capabilities for high-velocity customer support, lead enrichment, and Meta ads acquisition.
          </p>

          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>See what's included</span>
            <span style={{ color: 'var(--accent)' }}>▾</span>
          </div>

          {/* Bullet Items with Checkmarks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginTop: 2 }}>
                <Check size={13} strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>Autonomous Customer Support Agent</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>Omnichannel WhatsApp, Instagram & Email query resolution in 1.4s (92.4% auto-resolved).</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginTop: 2 }}>
                <Check size={13} strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>6-Stage AI Lead-Gen Scraper</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>Chains Apify, Apollo.io, Hunter.io SMTP and Lusha direct-dials with 0% bounce rate.</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginTop: 2 }}>
                <Check size={13} strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>Meta Ads Growth Engine</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>Replaces manual SDR prospecting with 4.82x blended ROAS & Lookalike 1% targeting.</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginTop: 2 }}>
                <Check size={13} strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>Integration Mesh & Cost Observability</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>10 connected enterprise APIs with live token metering (avg ₹0.042 / support ticket).</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D AI Orbs / Visual elements at bottom (Mirroring bottom creatures in screenshot) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10, paddingTop: 20, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF'
            }}>
              <Bot size={18} />
            </div>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #38E1FF 0%, #3B82F6 100%)',
              boxShadow: '0 0 20px rgba(56, 225, 255, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF'
            }}>
              <UserSearch size={18} />
            </div>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, #10B981 100%)',
              boxShadow: '0 0 20px var(--accent-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#08090A'
            }}>
              <Megaphone size={18} />
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Paxway OS v2.4.0 Production Release
          </div>
        </div>
      </div>

      {/* RIGHT SPLIT: Clean GitHub-style authentication form (Mirroring screenshot right side) */}
      <div style={{
        background: '#FFFFFF',
        color: '#0D1117',
        padding: '56px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'auto'
      }}>
        {/* Top bar with account link */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.85rem', color: '#57606A' }}>
          <span>Already have an account? <strong style={{ color: '#0969DA', cursor: 'pointer' }}>Sign in →</strong></span>
        </div>

        {/* Main Sign in Box */}
        <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            color: '#1F2328'
          }}>
            Sign in to Paxway
          </h2>

          {/* Social Auth Buttons (Google & Apple) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            <button 
              type="button"
              onClick={handleQuickDemoLogin}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #D0D7DE',
                background: '#F6F8FA',
                color: '#24292F',
                fontWeight: 600,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button 
              type="button"
              onClick={handleQuickDemoLogin}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #D0D7DE',
                background: '#F6F8FA',
                color: '#24292F',
                fontWeight: 600,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.64-.78 1.08-1.87.96-2.96-1 .04-2.18.66-2.88 1.48-.61.71-1.14 1.83-1 2.9 1.11.09 2.24-.58 2.92-1.42z"/>
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', color: '#8C959F', fontSize: '0.8rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#D8DEE4' }} />
            <span style={{ padding: '0 12px' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: '#D8DEE4' }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#24292F', display: 'block', marginBottom: 6 }}>
                Email address *
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ankush@paxway.app"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid #D0D7DE',
                  fontSize: '0.9rem',
                  color: '#1F2328',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#24292F' }}>
                  Password *
                </label>
                <span style={{ fontSize: '0.78rem', color: '#0969DA', cursor: 'pointer' }}>Forgot password?</span>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid #D0D7DE',
                  fontSize: '0.9rem',
                  color: '#1F2328',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <div style={{ fontSize: '0.72rem', color: '#57606A', marginTop: 4 }}>
                Password should be at least 8 characters including numbers.
              </div>
            </div>

            {/* Quick Demo Credentials Box */}
            <div style={{
              padding: '12px 14px',
              borderRadius: '6px',
              background: '#F6F8FA',
              border: '1px solid #D0D7DE',
              fontSize: '0.78rem',
              color: '#57606A'
            }}>
              <div style={{ fontWeight: 700, color: '#24292F', marginBottom: 2 }}>
                Founder Demo Credentials:
              </div>
              <div>ID: <strong>ankush@paxway.app</strong> • Pass: <strong>paxway2026</strong></div>
            </div>

            {error && (
              <div style={{ color: '#CF222E', fontSize: '0.8rem', fontWeight: 600 }}>
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px 20px',
                borderRadius: '6px',
                border: 'none',
                background: '#1F883D',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 4,
                boxShadow: '0 2px 6px rgba(31, 136, 61, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{isLoading ? 'Signing In to Paxway OS...' : 'Sign in to Dashboard'}</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div style={{ fontSize: '0.74rem', color: '#57606A', textAlign: 'center', marginTop: 32 }}>
          By signing in, you agree to Paxway Terms of Service and Privacy Policy. Built by QEVN.
        </div>
      </div>
    </div>
  );
}
