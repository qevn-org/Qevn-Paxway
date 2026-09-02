import React, { useState } from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCw, 
  Plus, 
  Layers, 
  CheckCircle2, 
  Eye, 
  MousePointer, 
  DollarSign, 
  Copy, 
  Zap,
  Target,
  Image as ImageIcon
} from 'lucide-react';
import StatCard from '../components/StatCard';
import CostChip from '../components/CostChip';
import { MOCK_META_CAMPAIGNS, MOCK_AI_CREATIVE_VARIANTS, MOCK_SUMMARY } from '../data/mockData';

export default function MetaAds() {
  const [activeTab, setActiveTab] = useState('campaigns'); // 'campaigns' | 'builder' | 'creative'
  const [campaigns, setCampaigns] = useState(MOCK_META_CAMPAIGNS);
  const [creativeVariants, setCreativeVariants] = useState(MOCK_AI_CREATIVE_VARIANTS);
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);
  const [builderStep, setBuilderStep] = useState(1);
  const [campaignForm, setCampaignForm] = useState({
    name: "AI WhatsApp Direct Inbound — Q4 Scale",
    objective: "Lead Generation (WhatsApp)",
    budget: "$150/day",
    audience: "Lookalike 1% + High Growth CEOs",
    creativeHeadline: "Stop Paying $4,000/mo For Slow Human Support Reps"
  });

  const toggleCampaignStatus = (id) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === id) {
        return {
          ...c,
          status: c.status === 'active' ? 'paused' : 'active'
        };
      }
      return c;
    }));
  };

  const handleRegenerateCreative = () => {
    setIsGeneratingCopy(true);
    setTimeout(() => {
      const newVariant = {
        id: `cr-${Date.now()}`,
        headline: "Scale From 0 To 1,000 Qualified B2B Leads Per Week Without SDRs",
        primaryText: "Paxway's AI growth engine replaces manual prospecting with autonomous Meta lookalikes and 1.4s instant WhatsApp conversion funnels. Cut your blended CAC by 64%.",
        cta: "Claim 14-Day Free Sandbox",
        format: "9:16 Vertical Story / Reel",
        score: 99,
        tokensUsed: 440,
        model: "Claude 3.5 Sonnet",
        cost: "$0.0022",
        predictedCtr: "4.4%"
      };

      setCreativeVariants(prev => [newVariant, ...prev]);
      setIsGeneratingCopy(false);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Header & Sub-Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Meta Ads Growth Engine
            </h2>
            <span className="brand-badge">4.82X BLENDED ROAS</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
            Replaces manual Reddit & LinkedIn prospecting with autonomous Meta campaigns & WhatsApp lookalikes.
          </p>
        </div>

        <div className="sub-tabs">
          <button 
            className={`sub-tab-btn ${activeTab === 'campaigns' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            <Megaphone size={15} />
            <span>Campaigns ({campaigns.length})</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'builder' ? 'active' : ''}`}
            onClick={() => setActiveTab('builder')}
          >
            <Plus size={15} />
            <span>Campaign Wizard</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'creative' ? 'active' : ''}`}
            onClick={() => setActiveTab('creative')}
          >
            <Sparkles size={15} />
            <span>AI Creative Studio</span>
          </button>
        </div>
      </div>

      {/* Hero Meta Metrics */}
      <div className="stat-grid">
        <StatCard
          label="Total Meta Spend (MTD)"
          value={MOCK_SUMMARY.metaAdsSpend}
          trend="+12% budget efficiency"
          trendDirection="up"
          subtitle="4 active ad sets"
          icon={DollarSign}
        />
        <StatCard
          label="Blended ROAS"
          value={MOCK_SUMMARY.metaAdsRoas}
          trend="Target: 3.5x"
          trendDirection="up"
          subtitle="Revenue: $40,580"
          icon={TrendingUp}
          accent={true}
          highlight={true}
        />
        <StatCard
          label="Cost Per Lead (CPL)"
          value={MOCK_SUMMARY.metaAdsCpl}
          trend="-28% vs manual outreach"
          trendDirection="up"
          subtitle="1,840 leads generated"
          icon={MousePointer}
        />
        <StatCard
          label="Customer Acquisition Cost"
          value={MOCK_SUMMARY.metaAdsCac}
          trend="Saved $68/acquisition"
          trendDirection="up"
          subtitle="Meta CAPI active"
          icon={Target}
        />
      </div>

      {/* TAB 1: CAMPAIGNS DASHBOARD */}
      {activeTab === 'campaigns' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Meta Business Suite Status Card */}
          <div className="card" style={{ padding: '16px 24px', background: 'var(--bg-surface-elevated)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
                <Megaphone size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Meta Business Suite Linked: Act_894102948
                  <span className="source-badge source-meta">Pixel: Active (99.8% Match)</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Connected Page: Paxway AI Systems • Conversions API (CAPI) Cloud Gateway Online
                </div>
              </div>
            </div>

            <button className="btn btn-sm btn-primary" onClick={() => setActiveTab('builder')}>
              <Plus size={14} />
              <span>Launch New Campaign</span>
            </button>
          </div>

          {/* Campaign Table */}
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Campaign & Audience</th>
                  <th>Status</th>
                  <th>Daily Budget</th>
                  <th>Impressions & CTR</th>
                  <th>CPL / CAC</th>
                  <th>ROAS</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map(cmp => (
                  <tr key={cmp.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.9rem' }}>
                        {cmp.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: 2 }}>
                        {cmp.audience} • {cmp.creativeVariants} AI Variants
                      </div>
                    </td>

                    <td>
                      <span className={`brand-badge ${cmp.status === 'active' ? '' : 'trend-neutral'}`} style={{
                        background: cmp.status === 'active' ? 'var(--accent-dim)' : 'rgba(255,255,255,0.06)',
                        color: cmp.status === 'active' ? 'var(--accent)' : 'var(--text-muted)',
                        borderColor: cmp.status === 'active' ? 'var(--border-accent)' : 'var(--border-subtle)'
                      }}>
                        {cmp.status.toUpperCase()}
                      </span>
                    </td>

                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {cmp.budgetDaily}
                    </td>

                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                        {cmp.impressions}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                        CTR: {cmp.ctr} ({cmp.clicks} clicks)
                      </div>
                    </td>

                    <td>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                        {cmp.cpl} CPL
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        CAC: {cmp.cac}
                      </div>
                    </td>

                    <td>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--accent)' }}>
                        {cmp.roas}
                      </span>
                    </td>

                    <td>
                      <button 
                        className="btn btn-sm btn-secondary"
                        onClick={() => toggleCampaignStatus(cmp.id)}
                        style={{ padding: '4px 10px', fontSize: '0.74rem' }}
                      >
                        {cmp.status === 'active' ? <Pause size={12} /> : <Play size={12} />}
                        <span>{cmp.status === 'active' ? 'Pause' : 'Resume'}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CAMPAIGN BUILDER WIZARD */}
      {activeTab === 'builder' && (
        <div className="card" style={{ maxWidth: 840, margin: '0 auto', width: '100%' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">AI Meta Campaign Deployer</h3>
              <p className="card-subtitle">Automated audience synthesis & ad set creation</p>
            </div>
            <span className="brand-badge">Step {builderStep} of 4</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {builderStep === 1 && (
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Campaign Name</label>
                <input 
                  type="text" 
                  value={campaignForm.name} 
                  onChange={(e) => setCampaignForm({...campaignForm, name: e.target.value})}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF' }} 
                />
                
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginTop: 14, marginBottom: 6 }}>Campaign Objective</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {["Lead Generation (Instant Form)", "Messages (WhatsApp AI)", "Conversions (Free Trial Demo)", "Traffic (Landing Page)"].map((obj, i) => (
                    <div 
                      key={i} 
                      onClick={() => setCampaignForm({...campaignForm, objective: obj})}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        background: campaignForm.objective === obj ? 'var(--accent-dim)' : 'var(--bg-surface-elevated)',
                        border: campaignForm.objective === obj ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        color: campaignForm.objective === obj ? 'var(--accent)' : 'var(--text-primary)'
                      }}
                    >
                      {obj}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {builderStep === 2 && (
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>AI-Suggested Lookalike Audience</label>
                <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-accent)', marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, color: 'var(--accent)' }}>✦ Lookalike 1% Seed: Closed High-Ticket Deals</span>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }}>Est. Reach: 420,000 - 680,000</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Generated from your HubSpot deal history + verified Hunter/Lusha CEO contacts.
                  </p>
                </div>

                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Daily Budget ($)</label>
                <input 
                  type="text" 
                  value={campaignForm.budget} 
                  onChange={(e) => setCampaignForm({...campaignForm, budget: e.target.value})}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF' }} 
                />
              </div>
            )}

            {builderStep === 3 && (
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Selected AI Ad Copy Headline</label>
                <input 
                  type="text" 
                  value={campaignForm.creativeHeadline} 
                  onChange={(e) => setCampaignForm({...campaignForm, creativeHeadline: e.target.value})}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF' }} 
                />
                
                <div style={{ marginTop: 14, padding: '14px', borderRadius: 'var(--radius-md)', background: 'rgba(182, 247, 110, 0.05)', border: '1px solid var(--border-accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', marginBottom: 4 }}>
                    <Sparkles size={14} />
                    <span>AI Predicted Performance</span>
                  </div>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                    Predicted CTR: <strong>4.2%</strong> • Predicted CPL: <strong>$3.90</strong> • Confidence: <strong>96.4%</strong>
                  </p>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setBuilderStep(s => Math.max(1, s - 1))}
                disabled={builderStep === 1}
              >
                Back
              </button>

              {builderStep < 3 ? (
                <button 
                  className="btn btn-primary" 
                  onClick={() => setBuilderStep(s => s + 1)}
                >
                  Continue to Step {builderStep + 1}
                </button>
              ) : (
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    alert("Campaign launched successfully to Meta Ads Manager API!");
                    setActiveTab('campaigns');
                  }}
                >
                  <Zap size={15} />
                  <span>Launch Campaign Live</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: AI CREATIVE STUDIO */}
      {activeTab === 'creative' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>AI Ad Copy & Hook Generator</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Tuned on high-converting B2B SaaS angles. Each variant meters exact token & LLM inference cost.
              </p>
            </div>

            <button 
              className="btn btn-primary"
              onClick={handleRegenerateCreative}
              disabled={isGeneratingCopy}
            >
              <RotateCw size={14} className={isGeneratingCopy ? 'pipeline-active' : ''} />
              <span>{isGeneratingCopy ? 'Synthesizing Copy...' : 'Generate New Variant'}</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
            {creativeVariants.map((cr) => (
              <div key={cr.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span className="brand-badge">SCORE: {cr.score}/100</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }}>
                      Est. CTR: {cr.predictedCtr}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 10, lineHeight: 1.4 }}>
                    "{cr.headline}"
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 14 }}>
                    {cr.primaryText}
                  </p>

                  <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', fontSize: '0.76rem', color: 'var(--text-primary)', marginBottom: 14 }}>
                    <strong>CTA Button:</strong> {cr.cta}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CostChip 
                    model={cr.model} 
                    tokens={cr.tokensUsed} 
                    cost={cr.cost} 
                    compact={true} 
                  />
                  <button 
                    className="btn btn-sm btn-ghost" 
                    onClick={() => navigator.clipboard && navigator.clipboard.writeText(cr.headline + "\n\n" + cr.primaryText)}
                    title="Copy to clipboard"
                  >
                    <Copy size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
