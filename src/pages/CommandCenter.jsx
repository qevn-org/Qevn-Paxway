import React from 'react';
import { 
  Users, 
  Bot, 
  Megaphone, 
  Coins, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';
import CostChip from '../components/CostChip';
import { 
  MOCK_SUMMARY, 
  MOCK_DAILY_USAGE_TREND, 
  MOCK_LEADS, 
  MOCK_CONVERSATIONS, 
  MOCK_META_CAMPAIGNS 
} from '../data/mockData';

export default function CommandCenter({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Hero Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(182, 247, 110, 0.08) 0%, rgba(56, 225, 255, 0.03) 50%, var(--bg-surface) 100%)',
        border: '1px solid var(--border-accent)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative corner glow */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'var(--accent)',
          filter: 'blur(80px)',
          opacity: 0.15,
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span className="live-dot-pulse" />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Paxway AI Growth OS · Live System
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: 8 }}>
              Good evening, Ankush.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px' }}>
              Your 3 autonomous AI engines are running concurrently across WhatsApp, Meta Ads, and Apify scraper pipelines.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn btn-secondary" onClick={() => onNavigate('usage-cost')}>
              <Coins size={16} color="var(--accent)" />
              <span>Observability Console</span>
            </button>
            <button className="btn btn-primary" onClick={() => onNavigate('lead-gen')}>
              <Zap size={16} />
              <span>Launch Lead Scrape</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero 4 Big Numbers */}
      <div className="stat-grid">
        <StatCard
          label="Total Leads Scraped & Enriched"
          numericTarget={MOCK_SUMMARY.totalLeadsScraped}
          trend="+34% this week"
          trendDirection="up"
          subtitle="95.5% verification rate"
          icon={Users}
          accent={true}
          highlight={true}
        />
        <StatCard
          label="AI Support Resolution Rate"
          value="92.4%"
          trend="Avg 1.4s reply"
          trendDirection="up"
          subtitle="3,842 tickets handled"
          icon={Bot}
        />
        <StatCard
          label="Meta Ad Engine Blended ROAS"
          value={MOCK_SUMMARY.metaAdsRoas}
          trend="CAC: $18.40"
          trendDirection="up"
          subtitle="4 active campaigns"
          icon={Megaphone}
        />
        <StatCard
          label="Estimated Monthly Cost Saved"
          value={MOCK_SUMMARY.monthlySavings}
          trend="18.6x ROI Multiplier"
          trendDirection="up"
          subtitle="₹0.042 avg ticket cost"
          icon={Coins}
        />
      </div>

      {/* 3 Core Product Engine Quick-Cards */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>
            Core AI Growth Engines
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            All 3 engines running on dedicated models
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {/* Engine 1: Support Agent */}
          <div className="card card-interactive" onClick={() => onNavigate('support-agent')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                <Bot size={22} />
              </div>
              <span className="source-badge source-meta">WhatsApp + IG DM</span>
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>
              AI Customer Service Agent
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Autonomous follow-ups & query resolution. Powered by Claude 3.5 Sonnet with instant CRM actions.
            </p>
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CostChip model="Claude 3.5" tokens={684} cost="₹0.04" compact={true} />
              <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', fontWeight: 700 }}>
                <span>Open Inbox</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Engine 2: Lead Scraper */}
          <div className="card card-interactive" onClick={() => onNavigate('lead-gen')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-cyan)' }}>
                <Users size={22} />
              </div>
              <span className="source-badge source-apify">Apify + Apollo + Hunter</span>
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>
              AI Lead-Gen Scraper
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Targeting business-class individuals. Autonomous 6-stage enrichment with verified direct dials.
            </p>
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CostChip model="GPT-4o Mini" tokens={1400} cost="$0.058/lead" compact={true} />
              <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', fontWeight: 700 }}>
                <span>View Pipeline</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Engine 3: Meta Ads */}
          <div className="card card-interactive" onClick={() => onNavigate('meta-ads')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C084FC' }}>
                <Megaphone size={22} />
              </div>
              <span className="source-badge source-apollo">Meta Marketing API</span>
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>
              Meta Ads Growth Engine
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Replaces manual Reddit/LinkedIn prospecting. Automated lookalike budget optimization & AI copy variants.
            </p>
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CostChip model="Claude 3.5" tokens={1850} cost="$0.002/copy" compact={true} />
              <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', fontWeight: 700 }}>
                <span>Manage Ads</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Observability Snapshot: Token Trends & Recent Live Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 24 }}>
        {/* Token Usage Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">
                <Activity size={18} color="var(--accent)" />
                Daily Token Consumption & Spend
              </h3>
              <p className="card-subtitle">Aggregated across all 3 AI surfaces (Last 7 Days)</p>
            </div>
            <button className="btn btn-sm btn-ghost" onClick={() => onNavigate('usage-cost')}>
              Full Console <ArrowUpRight size={14} />
            </button>
          </div>
          <Chart data={MOCK_DAILY_USAGE_TREND} height={200} />
        </div>

        {/* Live Feed */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">
                <Sparkles size={18} color="var(--color-cyan)" />
                Recent Autonomous Actions
              </h3>
              <p className="card-subtitle">Real-time decisions taken by background agents</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', marginTop: 5 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700 }}>
                  <span>WhatsApp Lead Deal Created</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>2m ago</span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                  Tariq Al-Mansoor (Apex Luxury) booked sandbox. Auto-assigned to HubSpot pipeline.
                </p>
                <div style={{ marginTop: 6 }}>
                  <CostChip model="Claude Sonnet" tokens={684} cost="₹0.042" compact={true} />
                </div>
              </div>
            </div>

            <div style={{ padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cyan)', marginTop: 5 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700 }}>
                  <span>Hunter.io Spam Quarantine Triggered</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>8m ago</span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                  Detected 4 disposable domains on Meta Lead Form. Filtered before polluting CRM.
                </p>
                <div style={{ marginTop: 6 }}>
                  <CostChip model="Hunter SMTP" tokens={0} cost="$0.00" latency="180ms" compact={true} />
                </div>
              </div>
            </div>

            <div style={{ padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C084FC', marginTop: 5 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700 }}>
                  <span>Meta Ad Budget Shift (+15%)</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>18m ago</span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                  Shifted budget to "Lookalike 1% Founders" as ROAS touched 5.40x.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
