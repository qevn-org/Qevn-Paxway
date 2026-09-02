import React, { useState } from 'react';
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Phone, 
  Database, 
  FileText, 
  Plus, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu,
  X,
  UploadCloud,
  Check
} from 'lucide-react';
import CostChip from '../components/CostChip';
import { MOCK_CONVERSATIONS, MOCK_FOLLOW_UP_SEQUENCES } from '../data/mockData';

export default function SupportAgent() {
  const [activeTab, setActiveTab] = useState('inbox'); // 'inbox' | 'followups' | 'knowledge'
  const [conversations, setConversations] = useState(MOCK_CONVERSATIONS);
  const [selectedConvId, setSelectedConvId] = useState(MOCK_CONVERSATIONS[0].id);
  const [expandedReasoning, setExpandedReasoning] = useState({ 'm2': true, 'm4': false });
  const [replyInput, setReplyInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Knowledge Base State & Add Doc Modal
  const [knowledgeDocs, setKnowledgeDocs] = useState([
    { name: "Enterprise_SLA_Doc_v4.pdf", size: "2.4 MB", vectors: "1,420 chunks", updated: "2h ago", status: "Indexed" },
    { name: "WhatsApp_Enterprise_Limits.md", size: "840 KB", vectors: "480 chunks", updated: "1d ago", status: "Indexed" },
    { name: "Refund_Policy_and_Guarantees.pdf", size: "1.1 MB", vectors: "610 chunks", updated: "3d ago", status: "Indexed" },
    { name: "Stripe_InChat_Checkout_Flow.json", size: "320 KB", vectors: "290 chunks", updated: "5d ago", status: "Indexed" }
  ]);
  const [isAddDocOpen, setIsAddDocOpen] = useState(false);
  const [newDocName, setNewDocName] = useState('');
  const [newDocContent, setNewDocContent] = useState('');
  const [isIndexing, setIsIndexing] = useState(false);
  const [indexingProgress, setIndexingProgress] = useState(0);

  const selectedConv = conversations.find(c => c.id === selectedConvId) || conversations[0];

  const toggleReasoning = (messageId) => {
    setExpandedReasoning(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  // Intelligent Multi-Channel Response Engine
  const generateAgentResponse = (userQuery, channel, customerName) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Greetings / Talkative Mode
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good morning') || q.includes('salam') || q.includes('yo') || q === 'start') {
      if (channel === 'whatsapp') {
        return {
          text: `Marhaba & Hey ${customerName.split(' ')[0]}! 👋\n\nGreat to connect with you on WhatsApp! I'm Paxway's autonomous AI Growth Agent. I can help you scale your outbound pipeline, launch high-ROAS Meta lookalike campaigns, or manage multi-seat customer support on autopilot.\n\nWhat would you like to explore today? We can look at pricing tiers, test a live scrape, or setup a 14-day free sandbox! ✨`,
          intent: "Conversational Greeting & Capabilities Overview (WhatsApp)",
          confidence: "99.8%",
          citations: ["WhatsApp_Onboarding_Flow", "Paxway_Executive_Brief"],
          action: "Greeted customer warmly with interactive options. Sent automated menu webhook."
        };
      } else if (channel === 'instagram') {
        return {
          text: `Hey ${customerName.split(' ')[0]}! 🔥 Thanks for sliding into Paxway's DMs!\n\nWe help fast-growing founders replace manual prospecting with autonomous Meta Ads & instant 1.4s WhatsApp conversion funnels. 🚀\n\nDrop a question or say 'demo' if you'd like a quick 60-second interactive sandbox link!`,
          intent: "Conversational Greeting & Social Engagement (Instagram DM)",
          confidence: "99.5%",
          citations: ["Instagram_DM_Conversion_Rules"],
          action: "Dispatched high-energy social greeting with demo trigger."
        };
      } else {
        return {
          text: `Dear ${customerName},\n\nThank you for contacting Paxway Enterprise Support. I am your autonomous AI operations assistant.\n\nOur system is currently monitoring 10 active integrations with 99.98% uptime. How may I assist your team today regarding API metering, lead enrichment workflows, or custom SLA configurations?`,
          intent: "Formal Enterprise Greeting (Email Support)",
          confidence: "99.7%",
          citations: ["Enterprise_SLA_Doc_v4", "Email_Support_Protocol"],
          action: "Acknowledged inquiry with enterprise SLA context."
        };
      }
    }

    // 2. Pricing & Cost Inquiries
    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('how much') || q.includes('tier') || q.includes('rate')) {
      return {
        text: `Here is our transparent AI unit economics breakdown:\n\n✦ **AI Customer Support**: ₹0.042 (~$0.0005) per resolved ticket (Claude 3.5 Sonnet / Haiku)\n✦ **B2B Lead Enrichment**: $0.058 per 100% verified lead (Apify + Apollo + Hunter + Lusha direct dials)\n✦ **Meta Ads Engine**: Replaces manual SDRs with blended CAC of $18.40 and 4.82x ROAS.\n\nAll plans include unlimited team seats and a 14-day free sandbox. Would you like me to generate a tailored enterprise agreement for ${selectedConv.customer.company}?`,
        intent: "Pricing Breakdown & Unit Economics Inquiry",
        confidence: "99.4%",
        citations: ["Enterprise_Pricing_Tier_3", "Token_Economics_Rate_Card"],
        action: "Provided transparent unit cost breakdown and offered instant contract generation."
      };
    }

    // 3. Refund & Cancellation Queries
    if (q.includes('refund') || q.includes('cancel') || q.includes('guarantee') || q.includes('money back')) {
      return {
        text: `Under Section 3.2 of the Paxway Service Agreement, all subscriptions carry a **30-Day Zero-Hassle Money-Back Guarantee**.\n\nIf our autonomous agents do not deliver measurable CAC reduction or at least 90%+ support automation within your first billing cycle, our billing gateway issues an immediate 100% refund with zero penalties.`,
        intent: "Refund Policy & Service Guarantee Clarification",
        confidence: "99.9%",
        citations: ["Refund_Policy_and_Guarantees.pdf §3.2"],
        action: "Confirmed 30-day money-back SLA guarantee from verified policy documentation."
      };
    }

    // 4. Lead Scraping & Enrichment Questions
    if (q.includes('lead') || q.includes('scrape') || q.includes('apollo') || q.includes('hunter') || q.includes('lusha') || q.includes('apify')) {
      return {
        text: `Our AI Lead-Gen Engine runs a 6-stage autonomous pipeline in 6.4 seconds:\n1. **Apify**: Headless browser scans for business-class profiles\n2. **Apollo.io**: Matches ICP company domains & headcount\n3. **Hunter.io**: Performs real-time SMTP handshakes to ensure 0% bounce rate\n4. **Lusha**: Appends verified direct-dial & WhatsApp mobile numbers\n5. **Claude 3.5**: Evaluates hiring signals & buying intent\n6. **HubSpot / CRM**: Syncs enriched lead directly to your sequence.\n\nWould you like me to trigger a sample scrape for your target market?`,
        intent: "Scraper Architecture & Multi-Source Verification Inquiry",
        confidence: "99.6%",
        citations: ["Scraper_Architecture_Spec_v2", "Hunter_Verification_Rules"],
        action: "Explained 6-stage data enrichment pipeline with real-time verification guarantees."
      };
    }

    // 5. Default Dynamic Talkative Synthesis
    return {
      text: `I've analyzed your inquiry regarding "${userQuery}".\n\nAll corresponding parameters have been verified against our live knowledge base. For ${selectedConv.customer.company}, our autonomous agents can execute this workflow immediately while preserving your exact brand tone, token efficiency (averaging 620 tokens/response), and compliance standards.\n\nWould you like me to execute this action or escalate to your assigned Paxway account engineer?`,
      intent: "Contextual Query Resolution & Operational Execution",
      confidence: "99.1%",
      citations: ["Enterprise_SLA_Doc_v4", "Realtime_Inquiry_Handler"],
      action: "Resolved query dynamically and updated HubSpot customer deal status."
    };
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyInput.trim() || isGenerating) return;

    const userText = replyInput;
    const userMsg = {
      id: `m-usr-${Date.now()}`,
      sender: 'customer',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    const updatedConvs = conversations.map(c => {
      if (c.id === selectedConvId) {
        return {
          ...c,
          messages: [...c.messages, userMsg]
        };
      }
      return c;
    });

    setConversations(updatedConvs);
    setReplyInput('');
    setIsGenerating(true);

    // Run channel-specific intelligent response engine
    setTimeout(() => {
      const generated = generateAgentResponse(userText, selectedConv.customer.channel, selectedConv.customer.name);
      
      const tokenCount = Math.floor(450 + Math.random() * 300);
      const latencySeconds = (0.9 + Math.random() * 0.5).toFixed(1);
      const costVal = (tokenCount * 0.00006).toFixed(3);

      const aiResponseMsg = {
        id: `m-ai-${Date.now()}`,
        sender: 'ai',
        text: generated.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        meta: {
          model: "Claude 3.5 Sonnet",
          tokens: tokenCount,
          latency: `${latencySeconds}s`,
          costInr: `₹${(tokenCount * 0.00005 * 83).toFixed(3)}`,
          costUsd: `$${costVal}`
        },
        reasoning: {
          intent: generated.intent,
          confidence: generated.confidence,
          knowledgeCitations: generated.citations,
          actionTaken: generated.action
        }
      };

      setConversations(prev => prev.map(c => {
        if (c.id === selectedConvId) {
          return {
            ...c,
            messages: [...c.messages, aiResponseMsg]
          };
        }
        return c;
      }));

      setExpandedReasoning(prev => ({ ...prev, [aiResponseMsg.id]: true }));
      setIsGenerating(false);
    }, 1100);
  };

  // Handle Adding Knowledge Document
  const handleAddKnowledgeDoc = (e) => {
    e.preventDefault();
    if (!newDocName.trim()) return;

    setIsIndexing(true);
    setIndexingProgress(20);

    setTimeout(() => {
      setIndexingProgress(60);
      setTimeout(() => {
        setIndexingProgress(100);
        setTimeout(() => {
          const newDoc = {
            name: newDocName.endsWith('.pdf') || newDocName.endsWith('.md') || newDocName.endsWith('.json') ? newDocName : `${newDocName}.md`,
            size: `${(0.4 + Math.random() * 1.8).toFixed(1)} MB`,
            vectors: `${Math.floor(320 + Math.random() * 800)} chunks`,
            updated: "Just now",
            status: "Indexed"
          };

          setKnowledgeDocs(prev => [newDoc, ...prev]);
          setIsIndexing(false);
          setIsAddDocOpen(false);
          setNewDocName('');
          setNewDocContent('');
          setIndexingProgress(0);
        }, 600);
      }, 700);
    }, 700);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              AI Customer Service Agent
            </h2>
            <span className="brand-badge">92.4% AUTO-RESOLVED</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
            Omnichannel conversational assistant resolving customer inquiries via WhatsApp, Instagram & Email in 1.4s.
          </p>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="sub-tabs">
          <button 
            className={`sub-tab-btn ${activeTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setActiveTab('inbox')}
          >
            <MessageSquare size={15} />
            <span>Live Inbox</span>
            <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '10px', background: 'var(--accent-dim)', color: 'var(--accent)' }}>3</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'followups' ? 'active' : ''}`}
            onClick={() => setActiveTab('followups')}
          >
            <Clock size={15} />
            <span>Follow-up Sequences</span>
          </button>
          <button 
            className={`sub-tab-btn ${activeTab === 'knowledge' ? 'active' : ''}`}
            onClick={() => setActiveTab('knowledge')}
          >
            <Database size={15} />
            <span>Knowledge Base & FAQs ({knowledgeDocs.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: LIVE INBOX */}
      {activeTab === 'inbox' && (
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 20, minHeight: '680px' }}>
          {/* Conversation List Sidebar */}
          <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>Conversations</span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Sorted by priority</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
              {conversations.map(conv => {
                const isSelected = conv.id === selectedConvId;
                return (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConvId(conv.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--bg-surface-elevated)' : 'transparent',
                      border: isSelected ? '1px solid var(--border-accent)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--accent) 0%, #38E1FF 100%)',
                          color: 'var(--text-inverse)',
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {conv.customer.avatar}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.84rem', color: isSelected ? '#FFFFFF' : 'var(--text-primary)' }}>
                            {conv.customer.name}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            {conv.customer.company}
                          </div>
                        </div>
                      </div>
                      <span className={`source-badge ${
                        conv.customer.channel === 'whatsapp' ? 'source-apollo' : 
                        conv.customer.channel === 'instagram' ? 'source-lusha' : 'source-meta'
                      }`}>
                        {conv.customer.channel}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {conv.subject}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      <span>{conv.lastMessageTime}</span>
                      {conv.priority === 'urgent' && (
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>● Priority Urgent</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Conversation Main Thread */}
          <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bg-surface)' }}>
            {/* Thread Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--border-subtle)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    {selectedConv.customer.name}
                  </h3>
                  <span className="source-badge source-meta">
                    {selectedConv.customer.channel.toUpperCase()} DIRECT
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {selectedConv.customer.phone}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                  {selectedConv.subject}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="live-dot-pulse" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>
                  AI AGENT ACTIVE
                </span>
              </div>
            </div>

            {/* Messages Thread */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {selectedConv.messages.map(msg => {
                const isAI = msg.sender === 'ai';
                return (
                  <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: isAI ? 'flex-start' : 'flex-end', maxWidth: '85%', alignSelf: isAI ? 'flex-start' : 'flex-end' }}>
                    {/* Message Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {isAI && <Bot size={13} color="var(--accent)" />}
                      <span style={{ fontWeight: 600 }}>{isAI ? 'Paxway AI Agent' : selectedConv.customer.name}</span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    {/* Message Bubble */}
                    <div style={{
                      padding: '14px 18px',
                      borderRadius: isAI ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                      background: isAI ? 'var(--bg-surface-elevated)' : 'rgba(182, 247, 110, 0.12)',
                      border: isAI ? '1px solid var(--border-medium)' : '1px solid var(--border-accent)',
                      color: isAI ? 'var(--text-primary)' : '#FFFFFF',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-wrap'
                    }}>
                      {msg.text}
                    </div>

                    {/* AI Metadata Chip */}
                    {isAI && msg.meta && (
                      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <CostChip 
                          model={msg.meta.model} 
                          tokens={msg.meta.tokens} 
                          latency={msg.meta.latency} 
                          cost={msg.meta.costInr} 
                          accent={true} 
                        />

                        {/* Expandable Agent Reasoning Button */}
                        {msg.reasoning && (
                          <button
                            onClick={() => toggleReasoning(msg.id)}
                            style={{
                              background: 'transparent',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: 'var(--radius-pill)',
                              padding: '3px 10px',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              color: 'var(--text-secondary)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4
                            }}
                          >
                            <Sparkles size={11} color="var(--accent)" />
                            <span>{expandedReasoning[msg.id] ? 'Hide Reasoning' : 'Agent Reasoning'}</span>
                            {expandedReasoning[msg.id] ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Expandable Agent Reasoning Panel */}
                    {isAI && msg.reasoning && expandedReasoning[msg.id] && (
                      <div style={{
                        marginTop: 10,
                        width: '100%',
                        background: 'rgba(10, 12, 14, 0.9)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: 'var(--radius-md)',
                        padding: '14px 16px',
                        fontSize: '0.78rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid var(--border-subtle)', paddingBottom: 6 }}>
                          <span style={{ fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Cpu size={13} />
                            AGENT REASONING TRACE
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>
                            Confidence: {msg.reasoning.confidence}
                          </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
                          <div>
                            <span style={{ color: 'var(--text-muted)' }}>Intent Detected: </span>
                            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{msg.reasoning.intent}</span>
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-muted)' }}>Citations: </span>
                            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }}>
                              {msg.reasoning.knowledgeCitations.join(', ')}
                            </span>
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-muted)' }}>Action Executed: </span>
                            <span style={{ color: 'var(--accent)' }}>{msg.reasoning.actionTaken}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {isGenerating && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: '0.8rem' }}>
                  <Sparkles size={14} style={{ animation: 'spin 2s linear infinite' }} />
                  <span>Agent reasoning with Claude 3.5 Sonnet & validating knowledge base...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendReply} style={{ display: 'flex', gap: 12, borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
              <input 
                type="text"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                placeholder="Type 'hello', 'pricing', 'refund policy', or any question to test conversational AI..."
                style={{
                  flex: 1,
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '12px 20px',
                  color: '#FFFFFF',
                  outline: 'none',
                  fontSize: '0.88rem'
                }}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isGenerating || !replyInput.trim()}
              >
                <Send size={15} />
                <span>Send Test</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TAB 2: FOLLOW-UP SEQUENCES */}
      {activeTab === 'followups' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {MOCK_FOLLOW_UP_SEQUENCES.map(seq => (
            <div key={seq.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{seq.name}</h3>
                    <span className="brand-badge">CONV: {seq.conversionRate}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                    <strong>Trigger:</strong> {seq.trigger} • <strong>Channel:</strong> {seq.channel}
                  </p>
                </div>
                <span className="source-badge source-apollo">{seq.activeContacts} Active Leads</span>
              </div>

              {/* Drip Steps Flowchart */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                {seq.steps.map((step, idx) => (
                  <div key={idx} style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    position: 'relative'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
                      <span>STEP 0{idx + 1} ({step.delay})</span>
                      <span style={{ color: 'var(--text-muted)' }}>Reply: {step.responseRate}</span>
                    </div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 4 }}>{step.action}</h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>{step.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: KNOWLEDGE BASE WITH FUNCTIONAL ADD DOCUMENT MODAL */}
      {activeTab === 'knowledge' && (
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Indexed Knowledge Base Sources</h3>
              <p className="card-subtitle">Vector embeddings indexed into Pinecone for zero-hallucination grounding</p>
            </div>
            <button className="btn btn-sm btn-primary" onClick={() => setIsAddDocOpen(true)}>
              <Plus size={14} />
              <span>Add Knowledge Doc</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {knowledgeDocs.map((doc, idx) => (
              <div key={idx} style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <FileText size={20} color="var(--accent)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#FFF' }}>{doc.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{doc.size} • {doc.vectors}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="brand-badge">{doc.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ADD KNOWLEDGE DOC MODAL */}
          {isAddDocOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20
            }}>
              <div style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                width: '100%',
                maxWidth: '540px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Database size={18} color="var(--accent)" />
                    Index New Knowledge Base Document
                  </h3>
                  <button onClick={() => !isIndexing && setIsAddDocOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleAddKnowledgeDoc} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>Document Title / File Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Luxury_Charter_Pricing_2026.pdf" 
                      value={newDocName}
                      onChange={(e) => setNewDocName(e.target.value)}
                      disabled={isIndexing}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>FAQ / Knowledge Content (Text or Markdown)</label>
                    <textarea 
                      rows={4}
                      placeholder="Paste FAQ answers, pricing rules, SLA terms, or policy guidelines for the AI agent to ground on..."
                      value={newDocContent}
                      onChange={(e) => setNewDocContent(e.target.value)}
                      disabled={isIndexing}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
                    />
                  </div>

                  {isIndexing && (
                    <div style={{ padding: '12px', background: 'var(--bg-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-accent)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        <span>Generating Pinecone Vector Embeddings...</span>
                        <span>{indexingProgress}%</span>
                      </div>
                      <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${indexingProgress}%`, height: '100%', background: 'var(--accent)', transition: 'width 0.3s ease' }} />
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 }}>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsAddDocOpen(false)} disabled={isIndexing}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={isIndexing || !newDocName.trim()}>
                      <UploadCloud size={15} />
                      <span>{isIndexing ? 'Indexing...' : 'Upload & Vectorize'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
