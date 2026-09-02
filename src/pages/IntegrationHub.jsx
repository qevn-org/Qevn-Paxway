import React, { useState } from 'react';
import { 
  Network, 
  Activity, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Zap, 
  RefreshCw,
  X,
  Database,
  Cpu
} from 'lucide-react';
import ProgressRing from '../components/ProgressRing';
import { MOCK_INTEGRATIONS } from '../data/mockData';

export default function IntegrationHub() {
  const [integrations, setIntegrations] = useState(MOCK_INTEGRATIONS);
  const [selectedLogsIntegration, setSelectedLogsIntegration] = useState(null);
  const [isRefreshingAll, setIsRefreshingAll] = useState(false);

  const handleRefreshAll = () => {
    setIsRefreshingAll(true);
    setTimeout(() => {
      setIsRefreshingAll(false);
    }, 900);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Integration & Observability Hub
            </h2>
            <span className="brand-badge">10 OF 10 CONNECTED</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
            Direct API mesh powering lead scraping, WhatsApp autonomous agents, and Meta Ads orchestration.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button 
            className="btn btn-secondary"
            onClick={handleRefreshAll}
            disabled={isRefreshingAll}
          >
            <RefreshCw size={14} className={isRefreshingAll ? 'pipeline-active' : ''} />
            <span>{isRefreshingAll ? 'Pinging Endpoints...' : 'Ping All APIs'}</span>
          </button>
          <button className="btn btn-primary" onClick={() => alert("All 10 enterprise API connectors are active and verified.")}>
            <ShieldCheck size={16} />
            <span>Health Check (100% OK)</span>
          </button>
        </div>
      </div>

      {/* Global Observability Summary Bar */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(18, 20, 23, 0.9) 0%, rgba(24, 27, 31, 0.9) 100%)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 16,
        alignItems: 'center'
      }}>
        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>API Mesh Status</div>
          <div style={{ fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, fontSize: '0.95rem' }}>
            <span className="live-dot-pulse" style={{ width: 6, height: 6 }} />
            10 Connected · 0 Degradations
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avg Gateway Latency</div>
          <div style={{ fontWeight: 700, color: '#FFFFFF', marginTop: 2, fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
            184ms (Edge Routed)
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Monthly API Spend</div>
          <div style={{ fontWeight: 700, color: '#FFFFFF', marginTop: 2, fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
            $310.80 / $1,000 cap
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Token Rate Limiting</div>
          <div style={{ fontWeight: 700, color: 'var(--color-cyan)', marginTop: 2, fontSize: '0.95rem' }}>
            Enterprise Unmetered
          </div>
        </div>
      </div>

      {/* Grid of 10 Integration Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {integrations.map(integ => {
          return (
            <div 
              key={integ.id} 
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                {/* Card Top: Name, Status Pulse, Category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      color: integ.iconColor
                    }}>
                      {integ.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {integ.name}
                      </h4>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {integ.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--accent-dim)', padding: '4px 8px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-accent)' }}>
                    <span className="live-dot-pulse" style={{ width: 5, height: 5 }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)' }}>LIVE</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16, minHeight: 38 }}>
                  {integ.description}
                </p>

                {/* Quota Ring & Progress */}
                <div style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 16
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Monthly Plan Quota
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: 2 }}>
                      {typeof integ.usage.used === 'number' ? integ.usage.used.toLocaleString() : integ.usage.used} / {typeof integ.usage.limit === 'number' ? integ.usage.limit.toLocaleString() : integ.usage.limit}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {integ.usage.unit}
                    </span>
                  </div>

                  <ProgressRing 
                    radius={22} 
                    stroke={3.5} 
                    progress={integ.usage.percent} 
                    color={integ.usage.percent > 80 ? 'var(--color-amber)' : 'var(--accent)'} 
                    label={`${Math.round(integ.usage.percent)}%`}
                  />
                </div>
              </div>

              {/* Card Footer: Last sync time + View Logs Button */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={11} />
                  Synced {integ.lastSync}
                </span>

                <button 
                  className="btn btn-sm btn-ghost"
                  onClick={() => setSelectedLogsIntegration(integ)}
                  style={{ gap: 5, fontSize: '0.74rem', padding: '4px 10px' }}
                >
                  <Terminal size={12} color="var(--accent)" />
                  <span>Inspect Logs</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* INSPECT LOGS MODAL */}
      {selectedLogsIntegration && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20
        }}>
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '680px',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Terminal size={18} color="var(--accent)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {selectedLogsIntegration.name} — Webhook & API Logs
                </h3>
              </div>
              <button 
                onClick={() => setSelectedLogsIntegration(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <span>Status: <strong style={{ color: 'var(--accent)' }}>200 OK / Live Stream</strong></span>
                <span>Latency: <strong style={{ color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>{selectedLogsIntegration.latency}</strong></span>
              </div>

              <div style={{
                background: 'var(--bg-void)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                maxHeight: '260px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                {selectedLogsIntegration.logs.map((log, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--text-muted)' }}>[{log.timestamp}]</span>
                    <span style={{ color: 'var(--accent)' }}>{log.status}</span>
                    <span style={{ color: 'var(--text-primary)', flex: 1 }}>{log.event}</span>
                    <span style={{ color: 'var(--color-cyan)' }}>({log.records} recs)</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <button className="btn btn-sm btn-primary" onClick={() => setSelectedLogsIntegration(null)}>
                  Close Inspector
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
