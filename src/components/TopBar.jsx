import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Activity, 
  Bell, 
  Zap, 
  CheckCircle2, 
  Cpu,
  ChevronDown,
  User,
  Shield,
  Key,
  LogOut,
  ExternalLink,
  Bot,
  UserSearch,
  Megaphone,
  Network,
  X,
  Sparkles
} from 'lucide-react';
import { MOCK_LEADS, MOCK_CONVERSATIONS, MOCK_META_CAMPAIGNS, MOCK_INTEGRATIONS } from '../data/mockData';

export default function TopBar({ title, onNavigate, onTriggerGlobalAction }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const [notifications] = useState([
    { id: 1, title: "Lead Scrape Finished", desc: "45 high-intent UK founders enriched via Hunter + Lusha", time: "2m ago", unread: true },
    { id: 2, title: "Meta Campaign Shift", desc: "Budget reallocated to Lookalike_V3 (+15% CTR surge)", time: "18m ago", unread: false },
    { id: 3, title: "WhatsApp Autonomous Deal", desc: "Tariq Al-Mansoor scheduled kickoff demo ($18k ARR deal)", time: "24m ago", unread: false }
  ]);

  // Handle Cmd+K global shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setShowProfileModal(false);
        setShowNotifications(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter global search results
  const searchResults = searchQuery.trim() ? [
    ...MOCK_LEADS.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.company.toLowerCase().includes(searchQuery.toLowerCase())).map(l => ({
      type: 'Lead',
      title: `${l.name} · ${l.title}`,
      subtitle: `${l.company} (${l.location})`,
      screen: 'lead-gen',
      icon: UserSearch,
      badge: `${l.leadScore} Score`
    })),
    ...MOCK_CONVERSATIONS.filter(c => c.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.subject.toLowerCase().includes(searchQuery.toLowerCase())).map(c => ({
      type: 'Conversation',
      title: `${c.customer.name} (${c.customer.channel})`,
      subtitle: c.subject,
      screen: 'support-agent',
      icon: Bot,
      badge: c.priority
    })),
    ...MOCK_META_CAMPAIGNS.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())).map(m => ({
      type: 'Campaign',
      title: m.name,
      subtitle: `ROAS: ${m.roas} • Budget: ${m.budgetDaily}`,
      screen: 'meta-ads',
      icon: Megaphone,
      badge: m.status
    })),
    ...MOCK_INTEGRATIONS.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase())).map(i => ({
      type: 'Integration',
      title: i.name,
      subtitle: i.category,
      screen: 'integration-hub',
      icon: Network,
      badge: 'Live'
    }))
  ] : [];

  const handleSelectSearchResult = (screen) => {
    if (onNavigate) onNavigate(screen);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">
          {title}
        </h1>
      </div>

      {/* Interactive Global Search Bar */}
      <div 
        className="topbar-search"
        onClick={() => {
          setIsSearchOpen(true);
          setTimeout(() => searchInputRef.current?.focus(), 50);
        }}
        style={{ cursor: 'pointer' }}
      >
        <Search size={16} color="var(--text-muted)" />
        <input 
          ref={searchInputRef}
          type="text" 
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (!isSearchOpen) setIsSearchOpen(true);
          }}
          placeholder="Search leads, campaigns, WhatsApp chats, APIs..." 
        />
        <span className="search-shortcut">⌘K</span>
      </div>

      {/* Global Search Modal / Dropdown */}
      {isSearchOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '80px'
        }} onClick={() => setIsSearchOpen(false)}>
          <div 
            style={{
              width: '100%',
              maxWidth: '620px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px var(--accent-glow)',
              overflow: 'hidden',
              height: 'fit-content',
              maxHeight: '520px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              gap: 12
            }}>
              <Search size={18} color="var(--accent)" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all Paxway modules (e.g., 'Marcus', 'Apollo', 'WhatsApp', 'ROAS')..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFF',
                  fontSize: '0.95rem'
                }}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Results List */}
            <div style={{ padding: '12px', overflowY: 'auto', maxHeight: '380px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {searchResults.length > 0 ? (
                searchResults.map((res, i) => {
                  const Icon = res.icon;
                  return (
                    <div
                      key={i}
                      onClick={() => handleSelectSearchResult(res.screen)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.background = 'var(--bg-surface-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.background = 'var(--bg-surface)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#FFF' }}>{res.title}</div>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{res.subtitle}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className="brand-badge">{res.badge}</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600 }}>Jump →</span>
                      </div>
                    </div>
                  );
                })
              ) : searchQuery.trim() ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                  No matching results found for "{searchQuery}". Try searching for 'Marcus', 'Apollo', 'WhatsApp', or 'Lookalike'.
                </div>
              ) : (
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Suggested Quick Navigation</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <button 
                      className="btn btn-sm btn-secondary" 
                      style={{ justifyContent: 'flex-start' }}
                      onClick={() => handleSelectSearchResult('lead-gen')}
                    >
                      <UserSearch size={14} color="var(--accent)" />
                      <span>Live Lead Scraper</span>
                    </button>
                    <button 
                      className="btn btn-sm btn-secondary" 
                      style={{ justifyContent: 'flex-start' }}
                      onClick={() => handleSelectSearchResult('support-agent')}
                    >
                      <Bot size={14} color="var(--accent)" />
                      <span>WhatsApp Support Inbox</span>
                    </button>
                    <button 
                      className="btn btn-sm btn-secondary" 
                      style={{ justifyContent: 'flex-start' }}
                      onClick={() => handleSelectSearchResult('meta-ads')}
                    >
                      <Megaphone size={14} color="var(--accent)" />
                      <span>Meta Ads Engine</span>
                    </button>
                    <button 
                      className="btn btn-sm btn-secondary" 
                      style={{ justifyContent: 'flex-start' }}
                      onClick={() => handleSelectSearchResult('integration-hub')}
                    >
                      <Network size={14} color="var(--accent)" />
                      <span>Integration Hub (10 APIs)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="topbar-right">
        {/* Live System Observability Status */}
        <div className="status-pill-live">
          <span className="live-dot-pulse" style={{ width: 6, height: 6 }} />
          <span>ALL 10 APIS OPERATIONAL</span>
        </div>

        {/* Global AI Quick Action */}
        <button 
          className="btn btn-sm btn-secondary"
          style={{ gap: 6 }}
          onClick={() => onTriggerGlobalAction && onTriggerGlobalAction('scrape')}
        >
          <Zap size={14} color="var(--accent)" />
          <span>Instant Scrape</span>
        </button>

        {/* Notifications Icon with unread badge */}
        <div style={{ position: 'relative' }}>
          <button 
            className="quick-action-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileModal(false);
            }}
            title="Notifications"
          >
            <Bell size={17} />
            <span style={{
              position: 'absolute',
              top: 8,
              right: 8,
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)'
            }} />
          </button>

          {showNotifications && (
            <div style={{
              position: 'absolute',
              top: '48px',
              right: '0',
              width: '320px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 100,
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Recent AI Events</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer' }}>Mark all read</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {notifications.map(n => (
                  <div key={n.id} style={{
                    padding: '10px',
                    borderRadius: 'var(--radius-md)',
                    background: n.unread ? 'rgba(182, 247, 110, 0.05)' : 'var(--bg-surface)',
                    border: n.unread ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      <span>{n.title}</span>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.7rem' }}>{n.time}</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                      {n.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Button & Interactive Dropdown Modal */}
        <div style={{ position: 'relative' }}>
          <div 
            className="user-profile-btn"
            onClick={() => {
              setShowProfileModal(!showProfileModal);
              setShowNotifications(false);
            }}
          >
            <div className="user-avatar">
              AP
            </div>
            <span className="user-name">Ankush (Paxway)</span>
            <ChevronDown size={14} color="var(--text-muted)" />
          </div>

          {showProfileModal && (
            <div style={{
              position: 'absolute',
              top: '48px',
              right: 0,
              width: '280px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 100,
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10, borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="user-avatar" style={{ width: 38, height: 38, fontSize: '0.9rem' }}>
                  AP
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFF' }}>Ankush Pathak</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Founder & CEO · Paxway</div>
                  <span className="brand-badge" style={{ marginTop: 4, display: 'inline-block' }}>ENTERPRISE TIER</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8rem' }}>
                <button 
                  onClick={() => {
                    if (onNavigate) onNavigate('settings');
                    setShowProfileModal(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFF'; e.currentTarget.style.background = 'var(--bg-surface-hover)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Key size={14} />
                  <span>API Keys & Encryption Vault</span>
                </button>

                <button 
                  onClick={() => {
                    if (onNavigate) onNavigate('usage-cost');
                    setShowProfileModal(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFF'; e.currentTarget.style.background = 'var(--bg-surface-hover)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Activity size={14} />
                  <span>Token & Billing Analytics</span>
                </button>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600 }}>Engineered by QEVN</span>
                <span className="live-dot-pulse" style={{ width: 6, height: 6 }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
