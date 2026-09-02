import React from 'react';
import { 
  Coins, 
  Cpu, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  DollarSign, 
  CheckCircle2, 
  Sparkles,
  ArrowDownRight,
  Zap,
  BarChart2
} from 'lucide-react';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';
import CostChip from '../components/CostChip';
import { 
  MOCK_MODEL_ROUTING, 
  MOCK_COST_PER_OUTCOME, 
  MOCK_DAILY_USAGE_TREND, 
  MOCK_SUMMARY 
} from '../data/mockData';

export default function UsageCostConsole() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Usage & Cost Observability Console
            </h2>
            <span className="brand-badge">TRANSPARENT AI ECONOMICS</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
            Full breakdown of token metering, intelligent model routing, and unit cost per business outcome.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary" onClick={() => alert("All LLM inferences verified against Anthropic & OpenAI direct rate cards.")}>
            <ShieldCheck size={16} color="var(--accent)" />
            <span>Rate Card Audited</span>
          </button>
        </div>
      </div>

      {/* Hero Numbers */}
      <div className="stat-grid">
        <StatCard
          label="Total LLM Tokens Metered"
          value={MOCK_SUMMARY.totalTokensUsed}
          trend="+18% inference volume"
          trendDirection="up"
          subtitle="Claude 3.5 & GPT-4o Mini"
          icon={Activity}
        />
        <StatCard
          label="Total AI Compute Spend (MTD)"
          value={MOCK_SUMMARY.totalCostUsd}
          trend={MOCK_SUMMARY.totalCostInr}
          trendDirection="neutral"
          subtitle="99.2% gross margin"
          icon={Coins}
          accent={true}
          highlight={true}
        />
        <StatCard
          label="Estimated Monthly Cost Saved"
          value={MOCK_SUMMARY.monthlySavings}
          trend="Saved 18.6x AI ROI"
          trendDirection="up"
          subtitle="Replaced 3 full-time roles"
          icon={TrendingUp}
        />
        <StatCard
          label="Avg Support Ticket Cost"
          value="₹0.042"
          trend="$0.0005 USD"
          trendDirection="down"
          subtitle="850 tokens / response"
          icon={DollarSign}
        />
      </div>

      {/* SECTION 1: COST PER OUTCOME (THE FOUNDER ROI FLEX) */}
      <div className="card" style={{ background: 'linear-gradient(180deg, var(--bg-surface-elevated) 0%, var(--bg-surface) 100%)', borderColor: 'var(--border-accent)' }}>
        <div className="card-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="live-dot-pulse" />
              <h3 className="card-title">
                Cost Per Business Outcome (ROI Translation)
              </h3>
            </div>
            <p className="card-subtitle">Translating raw token & API consumption into concrete founder unit economics</p>
          </div>
          <span className="brand-badge">FOUNDER VALUE EQUATION</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {MOCK_COST_PER_OUTCOME.map((item, idx) => (
            <div 
              key={idx}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  OUTCOME 0{idx + 1}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: 4, marginBottom: 8 }}>
                  {item.outcome}
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                  {item.rawMetric}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Paxway AI Cost:</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent)' }}>
                    {item.unitCost}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 10 }}>
                  <span>Traditional Human/Agency:</span>
                  <span style={{ textDecoration: 'line-through' }}>{item.traditionalCost}</span>
                </div>

                <div style={{
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span>{item.savingsMultiplier}</span>
                  <span>{item.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: INTELLIGENT MODEL ROUTING TABLE */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <Cpu size={18} color="var(--accent)" />
              Task-Specific Model Routing Matrix
            </h3>
            <p className="card-subtitle">Dynamic traffic tiering routing lightweight tasks to micro-models and complex logic to frontier models</p>
          </div>
          <span className="source-badge source-meta">Dynamic LLM Router</span>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Agent Task Type</th>
                <th>Assigned LLM Model</th>
                <th>Routing Tier</th>
                <th>Avg Tokens / Task</th>
                <th>Avg Latency</th>
                <th>Avg Unit Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_MODEL_ROUTING.map((route, idx) => (
                <tr key={idx}>
                  <td>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.86rem' }}>
                      {route.taskType}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {route.monthlyVolume}
                    </div>
                  </td>

                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span className="cost-chip cost-chip-accent" style={{ fontWeight: 700 }}>
                        {route.model}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>
                      {route.provider}
                    </div>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {route.tier}
                    </span>
                  </td>

                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-cyan)' }}>
                    {route.avgTokens}
                  </td>

                  <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    {route.avgLatency}
                  </td>

                  <td>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>
                      {route.avgCostTask}
                    </span>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <CheckCircle2 size={12} />
                      {route.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: TIME SERIES DAILY CHART */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <BarChart2 size={18} color="var(--accent)" />
              Daily Token Ingestion & Cost Velocity
            </h3>
            <p className="card-subtitle">Real-time telemetry across WhatsApp conversations, lead scrapers, and ad generation</p>
          </div>
        </div>

        <Chart data={MOCK_DAILY_USAGE_TREND} height={220} />
      </div>
    </div>
  );
}
