import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Login from './pages/Login';
import CommandCenter from './pages/CommandCenter';
import SupportAgent from './pages/SupportAgent';
import LeadGen from './pages/LeadGen';
import MetaAds from './pages/MetaAds';
import IntegrationHub from './pages/IntegrationHub';
import UsageCostConsole from './pages/UsageCostConsole';
import Settings from './pages/Settings';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('command-center');
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentScreen('command-center');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const getPageTitle = () => {
    switch (currentScreen) {
      case 'command-center': return 'Command Center';
      case 'support-agent': return 'AI Customer Service Agent';
      case 'lead-gen': return 'AI Lead-Gen Scraper';
      case 'meta-ads': return 'Meta Ads Growth Engine';
      case 'integration-hub': return 'Integration & Observability Hub';
      case 'usage-cost': return 'Usage & Cost Observability Console';
      case 'settings': return 'Workspace & Brand Settings';
      default: return 'Paxway AI Growth OS';
    }
  };

  const handleGlobalAction = (action) => {
    if (action === 'scrape') {
      setCurrentScreen('lead-gen');
    }
  };

  // If not authenticated, render the GitHub-style split-screen login page
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-container">
      {/* Ambient background glow blobs (Spotify visual signature) */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-glow ambient-glow-3" />

      {/* Persistent Left Nav */}
      <Sidebar 
        currentScreen={currentScreen} 
        onSelectScreen={(screenId) => setCurrentScreen(screenId)} 
      />

      {/* Main Shell */}
      <div className="main-shell">
        <TopBar 
          title={getPageTitle()} 
          onNavigate={(screenId) => setCurrentScreen(screenId)}
          onTriggerGlobalAction={handleGlobalAction}
          onLogout={handleLogout}
        />

        <main className="page-content">
          {currentScreen === 'command-center' && (
            <CommandCenter onNavigate={(screenId) => setCurrentScreen(screenId)} />
          )}
          {currentScreen === 'support-agent' && (
            <SupportAgent />
          )}
          {currentScreen === 'lead-gen' && (
            <LeadGen />
          )}
          {currentScreen === 'meta-ads' && (
            <MetaAds />
          )}
          {currentScreen === 'integration-hub' && (
            <IntegrationHub />
          )}
          {currentScreen === 'usage-cost' && (
            <UsageCostConsole />
          )}
          {currentScreen === 'settings' && (
            <Settings />
          )}
        </main>
      </div>
    </div>
  );
}
