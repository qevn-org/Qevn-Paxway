import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Sparkles, 
  ShieldCheck, 
  Key, 
  Sliders, 
  Globe, 
  User, 
  Save,
  CheckCircle2,
  Layers,
  ExternalLink
} from 'lucide-react';

export default function Settings() {
  const [brandName, setBrandName] = useState("Paxway");
  const [accentColor, setAccentColor] = useState("#B6F76E");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 880 }}>
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Settings & Brand Configuration
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
          Manage workspace settings, API security keys, and brand aesthetic tokens.
        </p>
      </div>

      {/* Brand Identity & Theme Card */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Brand Identity & Visual System</h3>
            <p className="card-subtitle">Customizable theme accents for the client deployment</p>
          </div>
        </div>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Workspace Name</label>
              <input 
                type="text" 
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Primary Brand Accent</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input 
                  type="color" 
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  style={{ width: 44, height: 42, borderRadius: 'var(--radius-sm)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                />
                <input 
                  type="text" 
                  value={accentColor}
                  readOnly
                  style={{ flex: 1, padding: '10px 14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF', fontFamily: 'var(--font-mono)' }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Palette: QEVN Acid Green (`#B6F76E`) on Void Black (`#08090A`)
            </span>
            <button type="submit" className="btn btn-primary" style={{ gap: 6 }}>
              {saved ? <CheckCircle2 size={15} /> : <Save size={15} />}
              <span>{saved ? 'Saved Successfully' : 'Save Preferences'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Security & API Keys Card */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Production API Keys & Webhooks</h3>
            <p className="card-subtitle">Encrypted vault with automated rotation and KMS signature validation</p>
          </div>
          <span className="brand-badge">AES-256 ENCRYPTED</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: "Anthropic API Key (Claude 3.5 Sonnet)", key: "sk-ant-api03-9d4f...89e2", updated: "3d ago" },
            { label: "Meta Graph & WhatsApp Cloud Token", key: "EAAGNOwZAC...kd94", updated: "1w ago" },
            { label: "Apify & Apollo.io Master Connector", key: "apify_sec_99420...x91", updated: "1w ago" }
          ].map((k, idx) => (
            <div key={idx} style={{ padding: '14px 18px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#FFFFFF' }}>{k.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 2 }}>{k.key}</div>
              </div>
              <button className="btn btn-sm btn-ghost">Rotate</button>
            </div>
          ))}
        </div>
      </div>

      {/* System Engineering & QEVN Footer Credit */}
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(18, 20, 23, 0.9) 0%, rgba(182, 247, 110, 0.04) 100%)', borderColor: 'var(--border-accent)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="brand-icon-box" style={{ width: 44, height: 44 }}>
              <Sparkles size={22} color="var(--text-inverse)" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFFFFF' }}>
                Paxway AI Growth OS
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                Custom engineered & orchestrated by <strong>QEVN Studio</strong> for founder Ankush.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 700 }}>
            <span>v2.4.0 Production Release</span>
          </div>
        </div>
      </div>
    </div>
  );
}
