import React from 'react';
import { 
  LayoutDashboard, 
  Bot, 
  UserSearch, 
  Megaphone, 
  Network, 
  Coins, 
  Settings, 
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Sidebar({ currentScreen, onSelectScreen }) {
  const navItems = [
    {
      section: "Overview",
      items: [
        { id: "command-center", label: "Command Center", icon: LayoutDashboard, badge: "Live" }
      ]
    },
    {
      section: "AI Growth Engines",
      items: [
        { id: "support-agent", label: "AI Support Agent", icon: Bot, badge: "92% Auto" },
        { id: "lead-gen", label: "Lead-Gen Scraper", icon: UserSearch, badge: "1.4k Leads" },
        { id: "meta-ads", label: "Meta Ads Engine", icon: Megaphone, badge: "4.8x ROAS" }
      ]
    },
    {
      section: "Observability & Platform",
      items: [
        { id: "integration-hub", label: "Integration Hub", icon: Network, badge: "10 Connected" },
        { id: "usage-cost", label: "Usage & Cost Console", icon: Coins, badge: "₹0.04/ticket" },
        { id: "settings", label: "Settings & Brand", icon: Settings, badge: null }
      ]
    }
  ];

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-icon-box">
          <Layers size={20} strokeWidth={2.5} />
        </div>
        <div className="brand-info">
          <div className="brand-name">
            PAXWAY
            <span className="brand-badge">AI OS</span>
          </div>
          <span className="brand-sub">Growth Operating System</span>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="sidebar-nav">
        {navItems.map((group, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <div className="nav-section-label">{group.section}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectScreen(item.id)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-item-left">
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="nav-item-pill">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Built by QEVN Footer Credit */}
      <div className="sidebar-footer">
        <div className="qevn-credit-card">
          <div className="qevn-meta">
            <span className="qevn-title">ENGINEERED BY</span>
            <span className="qevn-name">
              <Sparkles size={13} color="var(--accent)" />
              QEVN Studio
            </span>
          </div>
          <div className="live-dot-pulse" title="System Operational · 99.98% uptime" />
        </div>
      </div>
    </aside>
  );
}
