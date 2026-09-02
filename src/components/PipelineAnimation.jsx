import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCw, 
  CheckCircle2, 
  Loader2, 
  Globe, 
  Users, 
  MailCheck, 
  PhoneCall, 
  Sparkles, 
  Send,
  Zap,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PipelineAnimation({ onComplete }) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0: Idle, 1-6: Running/Completed
  const [stageProgress, setStageProgress] = useState([0, 0, 0, 0, 0, 0]);
  const [counters, setCounters] = useState({
    scanned: 0,
    matched: 0,
    verified: 0,
    phones: 0,
    scored: 0,
    pushed: 0
  });

  const stages = [
    {
      id: 1,
      title: "Discover",
      provider: "Apify Headless Actor",
      badgeClass: "source-apify",
      icon: Globe,
      color: "var(--color-cyan)",
      targetCount: 50,
      detail: "Scanning LinkedIn Sales Nav & registries for ICP match"
    },
    {
      id: 2,
      title: "Match & Profile",
      provider: "Apollo.io Identity",
      badgeClass: "source-apollo",
      icon: Users,
      color: "#FBBF24",
      targetCount: 48,
      detail: "Matching company domain, seniority & employee headcount"
    },
    {
      id: 3,
      title: "Verify Deliverability",
      provider: "Hunter.io SMTP",
      badgeClass: "source-hunter",
      icon: MailCheck,
      color: "#F87171",
      targetCount: 45,
      detail: "Live SMTP probe handshake + catch-all domain filter"
    },
    {
      id: 4,
      title: "Enrich Direct-Dials",
      provider: "Lusha Mobile Intelligence",
      badgeClass: "source-lusha",
      icon: PhoneCall,
      color: "#C084FC",
      targetCount: 42,
      detail: "Direct executive phone & WhatsApp mobile enrichment"
    },
    {
      id: 5,
      title: "AI Intent Scoring",
      provider: "Claude 3.5 Sonnet",
      badgeClass: "cost-chip-accent",
      icon: Cpu,
      color: "var(--accent)",
      targetCount: 42,
      detail: "Evaluating hiring velocity, tech stack & urgency triggers"
    },
    {
      id: 6,
      title: "Push to CRM & Outreach",
      provider: "HubSpot + WhatsApp",
      badgeClass: "source-meta",
      icon: Send,
      color: "#60A5FA",
      targetCount: 42,
      detail: "Auto-creating deals and scheduling personalized drip step #1"
    }
  ];

  const triggerPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStage(1);
    setCounters({ scanned: 0, matched: 0, verified: 0, phones: 0, scored: 0, pushed: 0 });
    setStageProgress([0, 0, 0, 0, 0, 0]);

    // Step 1: Apify
    setTimeout(() => {
      setCounters(c => ({ ...c, scanned: 50 }));
      setStageProgress(prev => [100, 0, 0, 0, 0, 0]);
      setCurrentStage(2);

      // Step 2: Apollo
      setTimeout(() => {
        setCounters(c => ({ ...c, matched: 48 }));
        setStageProgress(prev => [100, 100, 0, 0, 0, 0]);
        setCurrentStage(3);

        // Step 3: Hunter
        setTimeout(() => {
          setCounters(c => ({ ...c, verified: 45 }));
          setStageProgress(prev => [100, 100, 100, 0, 0, 0]);
          setCurrentStage(4);

          // Step 4: Lusha
          setTimeout(() => {
            setCounters(c => ({ ...c, phones: 42 }));
            setStageProgress(prev => [100, 100, 100, 100, 0, 0]);
            setCurrentStage(5);

            // Step 5: Claude scoring
            setTimeout(() => {
              setCounters(c => ({ ...c, scored: 42 }));
              setStageProgress(prev => [100, 100, 100, 100, 100, 0]);
              setCurrentStage(6);

              // Step 6: HubSpot
              setTimeout(() => {
                setCounters(c => ({ ...c, pushed: 42 }));
                setStageProgress([100, 100, 100, 100, 100, 100]);
                setCurrentStage(7); // Completed all
                setIsRunning(false);

                // Confetti burst for celebratory demo feedback
                try {
                  confetti({
                    particleCount: 60,
                    spread: 70,
                    origin: { y: 0.7 },
                    colors: ['#B6F76E', '#38E1FF', '#C084FC']
                  });
                } catch (e) {}

                if (onComplete) onComplete(42);
              }, 1200);
            }, 1100);
          }, 1100);
        }, 1000);
      }, 1000);
    }, 1100);
  };

  return (
    <div className="card" style={{ background: 'linear-gradient(180deg, var(--bg-surface-elevated) 0%, var(--bg-surface) 100%)', borderColor: isRunning ? 'var(--border-accent)' : 'var(--border-subtle)' }}>
      {/* Pipeline Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="live-dot-pulse" style={{ background: isRunning ? 'var(--accent)' : 'var(--color-cyan)' }} />
            <h3 className="card-title" style={{ margin: 0 }}>
              Live Autonomous Enrichment Pipeline
            </h3>
          </div>
          <p className="card-subtitle">
            Multi-agent orchestrated scrape chaining 5 real-time data providers in 6.4 seconds
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button 
            className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'}`}
            onClick={triggerPipeline}
            disabled={isRunning}
            style={{ minWidth: 160 }}
          >
            {isRunning ? (
              <>
                <Loader2 size={16} className="pipeline-active" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Enriching Leads...</span>
              </>
            ) : currentStage === 7 ? (
              <>
                <RotateCw size={16} />
                <span>Run Scrape Again</span>
              </>
            ) : (
              <>
                <Play size={16} fill="currentColor" />
                <span>Trigger Scrape Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Pipeline Stages Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 12,
        position: 'relative',
        marginTop: 16
      }}>
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isStageActive = currentStage === stage.id;
          const isStageDone = currentStage > stage.id || currentStage === 7;
          const isStagePending = currentStage < stage.id && currentStage !== 7;

          let countVal = 0;
          if (stage.id === 1) countVal = counters.scanned;
          if (stage.id === 2) countVal = counters.matched;
          if (stage.id === 3) countVal = counters.verified;
          if (stage.id === 4) countVal = counters.phones;
          if (stage.id === 5) countVal = counters.scored;
          if (stage.id === 6) countVal = counters.pushed;

          return (
            <div 
              key={stage.id} 
              style={{
                background: isStageActive ? 'rgba(182, 247, 110, 0.06)' : 'var(--bg-surface-elevated)',
                border: isStageActive 
                  ? '1px solid var(--accent)' 
                  : isStageDone 
                    ? '1px solid rgba(182, 247, 110, 0.3)' 
                    : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 14px',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isStageActive ? 'translateY(-2px)' : 'none',
                boxShadow: isStageActive ? '0 0 20px var(--accent-glow)' : 'none'
              }}
            >
              {/* Stage Top Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ 
                  fontSize: '0.68rem', 
                  fontFamily: 'var(--font-mono)', 
                  color: isStageActive ? 'var(--accent)' : 'var(--text-muted)',
                  fontWeight: 700 
                }}>
                  STAGE 0{stage.id}
                </span>

                {isStageDone ? (
                  <CheckCircle2 size={16} color="var(--accent)" />
                ) : isStageActive ? (
                  <Loader2 size={16} color="var(--accent)" style={{ animation: 'spin 1s linear infinite' }} />
                ) : (
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--border-medium)' }} />
                )}
              </div>

              {/* Provider Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <div style={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: 6, 
                  background: 'var(--bg-base)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: stage.color
                }}>
                  <Icon size={14} />
                </div>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {stage.title}
                </span>
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', minHeight: 32, marginBottom: 12 }}>
                {stage.provider}
              </div>

              {/* Stage Counter */}
              <div style={{ 
                borderTop: '1px solid var(--border-subtle)', 
                paddingTop: 10, 
                display: 'flex', 
                alignItems: 'baseline', 
                justifyContent: 'space-between' 
              }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Status</span>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 700, 
                  fontSize: '0.92rem',
                  color: isStageDone || isStageActive ? 'var(--accent)' : 'var(--text-muted)'
                }}>
                  {countVal > 0 ? `${countVal} leads` : isStagePending ? "Queued" : "Active"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Run Summary Footer */}
      {(isRunning || currentStage === 7) && (
        <div style={{
          marginTop: 18,
          padding: '12px 18px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(10, 12, 14, 0.8)',
          border: '1px solid var(--border-medium)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.76rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ color: 'var(--text-muted)' }}>RUN METRICS:</span>
            <span style={{ color: 'var(--accent)' }}>✦ 42 Leads 100% Enriched</span>
            <span style={{ color: 'var(--color-cyan)' }}>✦ 5 API Calls/Lead</span>
            <span style={{ color: '#FBBF24' }}>✦ Latency: 6.4s</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: 'var(--text-muted)' }}>Est. Cost: <strong style={{ color: '#FFFFFF' }}>$2.44</strong> ($0.058/lead)</span>
            <span style={{ 
              background: 'var(--accent-dim)', 
              color: 'var(--accent)', 
              padding: '2px 8px', 
              borderRadius: 'var(--radius-pill)',
              fontWeight: 700,
              fontSize: '0.7rem' 
            }}>
              SAVED 96.1% VS MANUAL
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
