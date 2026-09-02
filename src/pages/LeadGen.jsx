import React, { useState } from 'react';
import { 
  UserSearch, 
  Filter, 
  Search, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Phone, 
  Mail, 
  Linkedin, 
  ChevronDown, 
  ChevronUp,
  Layers,
  ArrowUpRight,
  Send,
  Zap,
  ShieldCheck,
  X,
  Building,
  MapPin,
  Clock,
  Play,
  RotateCw,
  Plus
} from 'lucide-react';
import PipelineAnimation from '../components/PipelineAnimation';
import CostChip from '../components/CostChip';
import { MOCK_LEADS, MOCK_SCRAPE_PRESETS, MOCK_SUMMARY } from '../data/mockData';

export default function LeadGen() {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'table' | 'presets'
  const [leads, setLeads] = useState(MOCK_LEADS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedLeadModal, setSelectedLeadModal] = useState(null);
  const [pushedLeadIds, setPushedLeadIds] = useState([]);
  const [presets, setPresets] = useState(MOCK_SCRAPE_PRESETS);

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          l.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handlePipelineComplete = (newLeadCount) => {
    // Add a freshly enriched lead to top of table
    const freshLead = {
      id: `ld-${Date.now()}`,
      name: "Arthur Sterling",
      title: "Chief Executive Officer",
      company: "Sterling Wealth Partners",
      companySize: "100-250",
      location: "Mayfair, London, UK",
      email: "arthur@sterlingwealth.co.uk",
      emailStatus: "verified",
      phone: "+44 20 7946 0881",
      phoneStatus: "direct-dial",
      linkedin: "linkedin.com/in/arthursterling-ceo",
      leadScore: 99,
      scrapedAt: "Just now",
      badges: {
        discovery: "Apify",
        match: "Apollo",
        email: "Hunter",
        phone: "Lusha"
      },
      reasoning: "High-ticket asset manager actively hiring VP Sales. Scraped via Apify actor, verified with Hunter SMTP & direct dial extracted via Lusha."
    };

    setLeads(prev => [freshLead, ...prev]);
  };

  const handlePushToHubspot = (leadId, e) => {
    if (e) e.stopPropagation();
    if (!pushedLeadIds.includes(leadId)) {
      setPushedLeadIds(prev => [...prev, leadId]);
    }
  };

  const handleRunPreset = (preset) => {
    setActiveTab('pipeline');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Page Title & Sub-tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              AI Lead-Gen Scraper
            </h2>
            <span className="brand-badge">BUSINESS-CLASS ICP</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
            Autonomous multi-source extraction chaining Apify, Apollo.io, Hunter.io and Lusha.
          </p>
        </div>

        <div className="sub-tabs">
          <button 
            className={`sub-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('pipeline')}
          >
            <Zap size={15} />
            <span>Live Scraper & ICP</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'table' ? 'active' : ''}`}
            onClick={() => setActiveTab('table')}
          >
            <Layers size={15} />
            <span>Enriched Leads ({leads.length})</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'presets' ? 'active' : ''}`}
            onClick={() => setActiveTab('presets')}
          >
            <Filter size={15} />
            <span>Saved ICP Presets ({presets.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: LIVE SCRAPER & ICP BUILDER */}
      {activeTab === 'pipeline' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* ICP FILTER BUILDER */}
          <div className="card" style={{ padding: '20px', background: 'var(--bg-surface-elevated)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Filter size={16} color="var(--accent)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)' }}>
                Target Ideal Customer Profile (ICP) Criteria
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>Seniority & Title</label>
                <select style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: '0.82rem', color: '#FFF' }}>
                  <option>Founder / CEO / Managing Director</option>
                  <option>VP / Head of Growth & Operations</option>
                  <option>Chief Operating Officer</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>Industry</label>
                <select style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: '0.82rem', color: '#FFF' }}>
                  <option>FinTech & B2B SaaS</option>
                  <option>Luxury Goods & GCC Hospitality</option>
                  <option>HealthTech & High-Growth D2C</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>Geography</label>
                <select style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: '0.82rem', color: '#FFF' }}>
                  <option>United Kingdom & North America</option>
                  <option>Dubai & Riyadh (GCC)</option>
                  <option>Singapore & Asia-Pacific</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>Company Headcount</label>
                <select style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: '0.82rem', color: '#FFF' }}>
                  <option>50 - 500 employees ($5M - $50M Rev)</option>
                  <option>100 - 1,000 employees</option>
                  <option>20 - 50 employees (Early scaling)</option>
                </select>
              </div>
            </div>
          </div>

          {/* MARQUEE PIPELINE ANIMATION */}
          <PipelineAnimation onComplete={handlePipelineComplete} />

          {/* Quick Preview of Recent Scraped Leads */}
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Recent Scrape Pipeline Batch</h3>
                <p className="card-subtitle">Click any contact row to inspect full verified intelligence profile</p>
              </div>
              <button className="btn btn-sm btn-secondary" onClick={() => setActiveTab('table')}>
                View All {leads.length} Leads →
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
              {leads.slice(0, 3).map(lead => (
                <div 
                  key={lead.id}
                  onClick={() => setSelectedLeadModal(lead)}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFF' }}>{lead.name}</div>
                    <span className="brand-badge">{lead.leadScore} SCORE</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--accent)', fontWeight: 600 }}>{lead.title}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: 2 }}>{lead.company} • {lead.location}</div>
                  <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 10, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-cyan)' }}>
                    <span>{lead.email}</span>
                    <span style={{ color: 'var(--accent)' }}>View Profile →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FULL ENRICHED LEADS TABLE */}
      {activeTab === 'table' && (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                Enriched Executive Contact Database ({filteredLeads.length})
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                Click on any executive row to open full verified intelligence profile & direct dial details
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 260 }}>
                <Search size={14} style={{ position: 'absolute', left: 10, top: 10, color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Filter by name, company, city..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '6px 12px 6px 32px',
                    fontSize: '0.8rem',
                    color: '#FFFFFF'
                  }}
                />
              </div>
              <button className="btn btn-sm btn-secondary" onClick={() => alert("Exported all verified leads to CSV format.")}>
                <Download size={13} />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <div className="data-table-container" style={{ border: 'none', borderRadius: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lead & Executive</th>
                  <th>Company & Size</th>
                  <th>Verified Email</th>
                  <th>Direct Dial / Phone</th>
                  <th>AI Score</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map(lead => {
                  const isPushed = pushedLeadIds.includes(lead.id);

                  return (
                    <tr 
                      key={lead.id}
                      onClick={() => setSelectedLeadModal(lead)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            width: 34,
                            height: 34,
                            borderRadius: '50%',
                            background: 'var(--bg-surface-elevated)',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.78rem',
                            color: 'var(--accent)'
                          }}>
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: 6 }}>
                              {lead.name}
                              <span className="source-badge source-apify" title="Extracted via Apify Scraper">
                                {lead.badges.discovery}
                              </span>
                            </div>
                            <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                              {lead.title}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          {lead.company}
                          <span className="source-badge source-apollo" title="Matched via Apollo.io">
                            {lead.badges.match}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {lead.location} • {lead.companySize}
                        </div>
                      </td>

                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                          <Mail size={13} color="var(--accent)" />
                          <span>{lead.email}</span>
                          <span className="source-badge source-hunter" title="Verified via Hunter.io SMTP probe">
                            {lead.badges.email}
                          </span>
                        </div>
                      </td>

                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                          <Phone size={13} color="#C084FC" />
                          <span>{lead.phone}</span>
                          <span className="source-badge source-lusha" title="Direct dial from Lusha intelligence">
                            {lead.badges.phone}
                          </span>
                        </div>
                      </td>

                      <td>
                        <span style={{ 
                          fontFamily: 'var(--font-display)', 
                          fontWeight: 800, 
                          fontSize: '1rem', 
                          color: lead.leadScore >= 95 ? 'var(--accent)' : '#FBBF24' 
                        }}>
                          {lead.leadScore}
                        </span>
                      </td>

                      <td>
                        <button
                          className={`btn btn-sm ${isPushed ? 'btn-secondary' : 'btn-primary'}`}
                          onClick={(e) => handlePushToHubspot(lead.id, e)}
                          style={{ gap: 4, padding: '4px 10px', fontSize: '0.74rem' }}
                        >
                          {isPushed ? (
                            <>
                              <CheckCircle2 size={12} color="var(--accent)" />
                              <span>In CRM</span>
                            </>
                          ) : (
                            <>
                              <Send size={12} />
                              <span>Push CRM</span>
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SAVED ICP PRESETS */}
      {activeTab === 'presets' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Saved ICP Scrape Presets</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Pre-configured targeting rules with pre-computed cost and lead yields</p>
            </div>
            <button className="btn btn-primary" onClick={() => alert("New ICP Preset saved to workspace.")}>
              <Plus size={14} />
              <span>Save Current Filter as Preset</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
            {presets.map(p => (
              <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span className="brand-badge">{p.region}</span>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>Est. Yield: ~{p.count} leads</span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: 8 }}>
                    {p.title}
                  </h4>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                    Chains Apify LinkedIn scraping actor + Hunter.io SMTP email verification + Lusha mobile enrichment.
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Estimated Cost: </span>
                    <strong style={{ fontFamily: 'var(--font-mono)', color: '#FFF' }}>{p.estimatedCost}</strong>
                  </div>
                  <button className="btn btn-sm btn-primary" onClick={() => handleRunPreset(p)}>
                    <Play size={13} fill="currentColor" />
                    <span>Run This Scrape</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COMPREHENSIVE LEAD DETAILS MODAL / SLIDE-OVER */}
      {selectedLeadModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
        }} onClick={() => setSelectedLeadModal(null)}>
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '680px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 30px var(--accent-glow)',
            overflow: 'hidden'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent) 0%, #38E1FF 100%)',
                  color: 'var(--text-inverse)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {selectedLeadModal.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF' }}>
                    {selectedLeadModal.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {selectedLeadModal.title}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {selectedLeadModal.company} • {selectedLeadModal.location}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedLeadModal(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 18, maxHeight: '520px', overflowY: 'auto' }}>
              {/* Data Sourcing Badges */}
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Multi-Source Intelligence Verification
                </span>
                <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
                  <span className="source-badge source-apify">Discovery: {selectedLeadModal.badges.discovery}</span>
                  <span className="source-badge source-apollo">Profile Match: {selectedLeadModal.badges.match}</span>
                  <span className="source-badge source-hunter">Email Handshake: {selectedLeadModal.badges.email}</span>
                  <span className="source-badge source-lusha">Direct Dial: {selectedLeadModal.badges.phone}</span>
                </div>
              </div>

              {/* Direct Contact Points */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Verified Corporate Email</div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Mail size={13} color="var(--accent)" />
                    {selectedLeadModal.email}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--accent)' }}>● 0% Bounce Rate (Hunter SMTP Verified)</span>
                </div>

                <div style={{ padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Direct Executive Phone / WhatsApp</div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Phone size={13} color="#C084FC" />
                    {selectedLeadModal.phone}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#C084FC' }}>● Direct Dial Appended (Lusha)</span>
                </div>
              </div>

              {/* AI Intent Analysis */}
              <div style={{ padding: '16px', background: 'rgba(182, 247, 110, 0.05)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Sparkles size={14} />
                    AI BUYING INTENT REASONING (CLAUDE 3.5 SONNET)
                  </span>
                  <span className="brand-badge">{selectedLeadModal.leadScore}/100 SCORE</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedLeadModal.reasoning}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ padding: '18px 24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Scraped: {selectedLeadModal.scrapedAt}
              </span>

              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn btn-secondary" onClick={() => setSelectedLeadModal(null)}>
                  Close
                </button>
                <button 
                  className={`btn ${pushedLeadIds.includes(selectedLeadModal.id) ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => handlePushToHubspot(selectedLeadModal.id)}
                >
                  <Send size={14} />
                  <span>{pushedLeadIds.includes(selectedLeadModal.id) ? 'Pushed to HubSpot CRM' : 'Push to HubSpot & Start Sequence'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
