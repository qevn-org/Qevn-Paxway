// ==========================================================================
// PAXWAY MOCK DATA LAYER — Single Source of Truth
// ==========================================================================

export const MOCK_SUMMARY = {
  totalLeadsScraped: 1428,
  leadsEnriched: 1364,
  enrichmentRate: 95.5,
  supportTicketsResolved: 3842,
  supportAvgResolutionTime: "1.4s",
  supportAutomationRate: 92.4,
  activeCampaigns: 4,
  metaAdsSpend: "$8,420",
  metaAdsRoas: "4.82x",
  metaAdsCpl: "$4.20",
  metaAdsCac: "$18.40",
  totalTokensUsed: "18.4M",
  totalCostUsd: "$142.60",
  totalCostInr: "₹11,840",
  monthlySavings: "$14,200",
  roiMultiplier: "18.6x"
};

// --------------------------------------------------------------------------
// 1. INTEGRATIONS (10 Services)
// --------------------------------------------------------------------------
export const MOCK_INTEGRATIONS = [
  {
    id: "apollo",
    name: "Apollo.io",
    category: "Lead Enrichment",
    description: "B2B contact database, corporate email discovery & ICP matching engine.",
    status: "connected",
    latency: "240ms",
    usage: {
      used: 14200,
      limit: 25000,
      unit: "credits",
      percent: 56.8
    },
    lastSync: "3 mins ago",
    costMonth: "$48.20",
    iconColor: "#FBBF24",
    logs: [
      { timestamp: "19:02:14", event: "Query executed: Senior Tech Founders UK", status: "200 OK", records: 45 },
      { timestamp: "18:44:02", event: "Enriched 120 profile emails", status: "200 OK", records: 120 },
      { timestamp: "17:15:30", event: "Sync contact data with HubSpot", status: "200 OK", records: 34 }
    ]
  },
  {
    id: "hunter",
    name: "Hunter.io",
    category: "Email Verification",
    description: "Multi-layer SMTP handshake, MX record check & deliverability confidence scoring.",
    status: "connected",
    latency: "180ms",
    usage: {
      used: 8940,
      limit: 15000,
      unit: "verifications",
      percent: 59.6
    },
    lastSync: "7 mins ago",
    costMonth: "$29.50",
    iconColor: "#F87171",
    logs: [
      { timestamp: "19:01:50", event: "Verified 45 domains via SMTP probe", status: "200 OK", records: 45 },
      { timestamp: "18:30:10", event: "Catch-all filter triggered on 4 domains", status: "200 OK", records: 4 }
    ]
  },
  {
    id: "lusha",
    name: "Lusha",
    category: "Direct Dials",
    description: "Direct-dial phone enrichment, WhatsApp mobile numbers & B2B mobile intelligence.",
    status: "connected",
    latency: "310ms",
    usage: {
      used: 1240,
      limit: 2500,
      unit: "direct dials",
      percent: 49.6
    },
    lastSync: "12 mins ago",
    costMonth: "$62.00",
    iconColor: "#C084FC",
    logs: [
      { timestamp: "18:50:22", event: "Direct phone lookup for 25 executives", status: "200 OK", records: 25 }
    ]
  },
  {
    id: "apify",
    name: "Apify Cloud Scraper",
    category: "Web Scraping",
    description: "Headless browser actors for LinkedIn sales nav, Google Maps & business registries.",
    status: "connected",
    latency: "840ms",
    usage: {
      used: 48.2,
      limit: 100,
      unit: "compute units ($)",
      percent: 48.2
    },
    lastSync: "1 min ago",
    costMonth: "$48.20",
    iconColor: "#38E1FF",
    logs: [
      { timestamp: "19:02:40", event: "Actor: linkedin-company-scraper completed", status: "200 OK", records: 180 },
      { timestamp: "17:40:11", event: "Actor: twitter-business-bios batch 4/4", status: "200 OK", records: 92 }
    ]
  },
  {
    id: "meta",
    name: "Meta Marketing API",
    category: "Ad Automation",
    description: "Programmatic campaign deployment, budget rebalancing & automated creative rotation.",
    status: "connected",
    latency: "410ms",
    usage: {
      used: 8420,
      limit: 20000,
      unit: "ad spend ($)",
      percent: 42.1
    },
    lastSync: "Just now",
    costMonth: "$8,420.00",
    iconColor: "#60A5FA",
    logs: [
      { timestamp: "19:00:00", event: "Dynamic budget shift: +15% to Lookalike_V3", status: "200 OK", records: 1 },
      { timestamp: "18:00:00", event: "Ad creative paused: CTR dropped below 1.8%", status: "200 OK", records: 1 }
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp Cloud API",
    category: "Conversational AI",
    description: "Direct official Meta business messaging with interactive reply buttons & drip logic.",
    status: "connected",
    latency: "120ms",
    usage: {
      used: 4890,
      limit: 10000,
      unit: "conversations",
      percent: 48.9
    },
    lastSync: "Just now",
    costMonth: "$34.10",
    iconColor: "#34D399",
    logs: [
      { timestamp: "19:02:55", event: "Inbound webhook dispatched to AI Support Agent", status: "200 OK", records: 1 },
      { timestamp: "19:01:10", event: "Template message delivered: Sequence #2", status: "200 OK", records: 1 }
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn Sales Navigator",
    category: "Outreach & ICP",
    description: "Account profiling, executive role changes & org chart mapping.",
    status: "connected",
    latency: "520ms",
    usage: {
      used: 3200,
      limit: 5000,
      unit: "profile views",
      percent: 64.0
    },
    lastSync: "18 mins ago",
    costMonth: "$79.00",
    iconColor: "#0A66C2",
    logs: [
      { timestamp: "18:40:12", event: "Extracted 50 C-level leads from FinTech London", status: "200 OK", records: 50 }
    ]
  },
  {
    id: "reddit",
    name: "Reddit Keyword Monitor",
    category: "Social Listening",
    description: "Subreddit trend monitoring (r/entrepreneur, r/smallbusiness) replacing manual hunt.",
    status: "connected",
    latency: "290ms",
    usage: {
      used: 2840,
      limit: 10000,
      unit: "scanned posts",
      percent: 28.4
    },
    lastSync: "4 mins ago",
    costMonth: "$0.00",
    iconColor: "#FF4500",
    logs: [
      { timestamp: "18:55:00", event: "Keyword trigger: 'looking for AI automation'", status: "200 OK", records: 3 }
    ]
  },
  {
    id: "google",
    name: "Google Workspace / Gmail",
    category: "Email Infrastructure",
    description: "Dedicated warm-up inbox rotation, custom domain DKIM/SPF alignment.",
    status: "connected",
    latency: "150ms",
    usage: {
      used: 6400,
      limit: 12000,
      unit: "sent emails",
      percent: 53.3
    },
    lastSync: "Just now",
    costMonth: "$18.00",
    iconColor: "#EA4335",
    logs: [
      { timestamp: "19:02:00", event: "Cold sequence step #1 dispatched via mailbox 4", status: "200 OK", records: 1 }
    ]
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "CRM & Pipeline",
    description: "Two-way contact sync, lifecycle stage progression & revenue attribution.",
    status: "connected",
    latency: "210ms",
    usage: {
      used: 1364,
      limit: 10000,
      unit: "contacts pushed",
      percent: 13.6
    },
    lastSync: "2 mins ago",
    costMonth: "$50.00",
    iconColor: "#FF7A59",
    logs: [
      { timestamp: "19:00:20", event: "Created 18 new qualified deals from Meta Ads", status: "200 OK", records: 18 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. LEAD-GEN ENGINE MOCK DATA & LEADS
// --------------------------------------------------------------------------
export const MOCK_LEADS = [
  {
    id: "ld-1",
    name: "Marcus Vance",
    title: "Chief Operating Officer",
    company: "Aura Logistics Group",
    companySize: "250-500",
    location: "London, UK",
    email: "m.vance@auralogistics.co.uk",
    emailStatus: "verified",
    phone: "+44 20 7946 0912",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/marcus-vance-ops",
    leadScore: 96,
    scrapedAt: "12 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "High growth indicator (+42% headcount in 6mo), active RFP for customer operations automation."
  },
  {
    id: "ld-2",
    name: "Elena Rostova",
    title: "Head of Growth & Retention",
    company: "FinScale Technologies",
    companySize: "100-250",
    location: "Singapore",
    email: "elena@finscale.io",
    emailStatus: "verified",
    phone: "+65 6789 0123",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/elenarostova-growth",
    leadScore: 94,
    scrapedAt: "18 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "Evaluating omnichannel support agents to replace Zendesk tier-1 staff."
  },
  {
    id: "ld-3",
    name: "Vikram Singhania",
    title: "Managing Director",
    company: "Apex Global Commerce",
    companySize: "500-1000",
    location: "Dubai, UAE",
    email: "vikram@apexcommerce.ae",
    emailStatus: "verified",
    phone: "+971 4 391 8820",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/vikram-singhania-md",
    leadScore: 98,
    scrapedAt: "25 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "High-ticket enterprise buyer. Managing $40M GMV across GCC with WhatsApp priority."
  },
  {
    id: "ld-4",
    name: "Sophie Tremblay",
    title: "VP of Customer Experience",
    company: "Novafy Health",
    companySize: "50-100",
    location: "Toronto, Canada",
    email: "s.tremblay@novafy.ca",
    emailStatus: "verified",
    phone: "+1 416 555 0184",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/sophietremblay-cx",
    leadScore: 91,
    scrapedAt: "34 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "Stated intent on LinkedIn: seeking HIPAA-compliant automated patient triage bot."
  },
  {
    id: "ld-5",
    name: "Alexander Becker",
    title: "Founder & CEO",
    company: "Krypton Commerce",
    companySize: "20-50",
    location: "Berlin, Germany",
    email: "alex@krypton.de",
    emailStatus: "verified",
    phone: "+49 30 220 1829",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/alexbecker-krypton",
    leadScore: 89,
    scrapedAt: "42 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "Scaling D2C brand spending $45k/mo on Meta ads with manual lead capture bottlenecks."
  },
  {
    id: "ld-6",
    name: "Priya Chandrasekhar",
    title: "Director of Digital Marketing",
    company: "Zepter Lifestyle",
    companySize: "100-250",
    location: "Mumbai, India",
    email: "priya.c@zepter.in",
    emailStatus: "verified",
    phone: "+91 98200 48192",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/priyachandra-mktg",
    leadScore: 95,
    scrapedAt: "50 mins ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "WhatsApp-first brand. Interested in Meta Ads + WhatsApp automated conversion funnel."
  },
  {
    id: "ld-7",
    name: "Daniel O'Connor",
    title: "Head of Revenue Operations",
    company: "OmniFlow Systems",
    companySize: "50-100",
    location: "Austin, TX, USA",
    email: "doconnor@omniflow.io",
    emailStatus: "verified",
    phone: "+1 512 555 0199",
    phoneStatus: "direct-dial",
    linkedin: "linkedin.com/in/daniel-oconnor-revops",
    leadScore: 92,
    scrapedAt: "1 hour ago",
    badges: {
      discovery: "Apify",
      match: "Apollo",
      email: "Hunter",
      phone: "Lusha"
    },
    reasoning: "HubSpot power user looking to auto-enrich incoming enterprise leads."
  }
];

export const MOCK_SCRAPE_PRESETS = [
  { id: "p1", title: "C-Level Founders (FinTech & B2B SaaS)", count: 320, region: "UK & US", estimatedCost: "$18.40" },
  { id: "p2", title: "Managing Directors in GCC (Luxury & Retail)", count: 240, region: "Dubai & Riyadh", estimatedCost: "$14.20" },
  { id: "p3", title: "VP Customer Experience (HealthTech)", count: 180, region: "North America", estimatedCost: "$11.00" }
];

// --------------------------------------------------------------------------
// 3. AI SUPPORT AGENT CONVERSATIONS & METADATA
// --------------------------------------------------------------------------
export const MOCK_CONVERSATIONS = [
  {
    id: "conv-101",
    customer: {
      name: "Tariq Al-Mansoor",
      company: "Apex Luxury Charter",
      avatar: "TA",
      channel: "whatsapp",
      phone: "+971 50 829 1044",
      status: "online"
    },
    unread: false,
    priority: "urgent",
    lastMessageTime: "2 mins ago",
    subject: "Custom pricing tier for 5,000 monthly WhatsApp leads",
    tags: ["High Value", "Pricing Inquiry", "GCC"],
    messages: [
      {
        id: "m1",
        sender: "customer",
        text: "Salaam. We are scaling our charter booking desk and want to confirm if Paxway can handle 5,000 inbound WhatsApp chats per week without human agent intervention?",
        timestamp: "19:00:15"
      },
      {
        id: "m2",
        sender: "ai",
        text: "Marhaba Tariq! Absolutely. Paxway's WhatsApp Autonomous Agent is built on Meta Cloud API with enterprise rate-limiting of 250 requests/sec. We currently route up to 20,000 chats/week for luxury hospitality clients with zero latency.\n\nOur system automatically extracts booking dates, passenger counts, yacht preferences, and generates verified Stripe payment links directly inside the WhatsApp conversation.",
        timestamp: "19:00:18",
        meta: {
          model: "Claude 3.5 Sonnet",
          tokens: 684,
          latency: "1.2s",
          costInr: "₹0.042",
          costUsd: "$0.0005"
        },
        reasoning: {
          intent: "Enterprise Scalability & Custom Workflow Inquiry",
          confidence: "99.2%",
          knowledgeCitations: ["Architecture_SLA_Doc_v4", "WhatsApp_Enterprise_Limits", "Stripe_InChat_Checkout"],
          actionTaken: "Answered with high-confidence enterprise SLA + feature breakdown. Initiated automated follow-up sequence."
        }
      },
      {
        id: "m3",
        sender: "customer",
        text: "That is perfect. Can you send over a custom contract draft for 3 accounts?",
        timestamp: "19:01:20"
      },
      {
        id: "m4",
        sender: "ai",
        text: "I have queued an Enterprise multi-seat proposal for Apex Luxury Charter with a dedicated account manager. In the meantime, I have enabled a 14-day sandbox access key for your team at apex.paxway.app/onboard. Would you like me to schedule a 10-minute technical kickoff with our lead engineer?",
        timestamp: "19:01:22",
        meta: {
          model: "Claude 3.5 Sonnet",
          tokens: 590,
          latency: "1.1s",
          costInr: "₹0.038",
          costUsd: "$0.0004"
        },
        reasoning: {
          intent: "Proposal Request & Multi-Seat Onboarding",
          confidence: "98.8%",
          knowledgeCitations: ["Enterprise_Pricing_Tier_3", "HubSpot_Deal_Creation_Flow"],
          actionTaken: "Pushed lead to HubSpot as Deal Stage: 'Proposal Sent ($18,000 ARR)'. Auto-generated sandbox credentials."
        }
      }
    ]
  },
  {
    id: "conv-102",
    customer: {
      name: "Hannah Schmidt",
      company: "Nordic Wave Apparel",
      avatar: "HS",
      channel: "instagram",
      phone: "@nordicwave_de",
      status: "offline"
    },
    unread: true,
    priority: "high",
    lastMessageTime: "8 mins ago",
    subject: "Ad click conversion tracking discrepancy",
    tags: ["Meta Ads Sync", "Support"],
    messages: [
      {
        id: "m201",
        sender: "customer",
        text: "Hey team, Meta Ads Manager says 142 leads came in today, but Paxway CRM only recorded 138. Where are the 4 missing leads?",
        timestamp: "18:54:10"
      },
      {
        id: "m202",
        sender: "ai",
        text: "Hi Hannah! I checked your Meta Conversions API webhook logs. The 4 leads were submitted with disposable/temporary email addresses (mailinator & temp-mail). Our Hunter.io verification filter automatically quarantined them to prevent spam from polluting your CRM sequence.\n\nYou can review these quarantined contacts under Lead-Gen > Quarantined Filter.",
        timestamp: "18:54:12",
        meta: {
          model: "Claude 3.5 Sonnet",
          tokens: 520,
          latency: "0.9s",
          costInr: "₹0.032",
          costUsd: "$0.00038"
        },
        reasoning: {
          intent: "Lead Discrepancy & Verification Audit",
          confidence: "99.5%",
          knowledgeCitations: ["Hunter_Verification_Rules", "Meta_CAPI_Webhook_Sync"],
          actionTaken: "Cross-referenced real-time webhook IDs with Hunter.io bounce logs. Resolved query accurately."
        }
      }
    ]
  },
  {
    id: "conv-103",
    customer: {
      name: "Liam O'Connor",
      company: "Dublin Cloud Solutions",
      avatar: "LO",
      channel: "email",
      phone: "liam@dublincloud.ie",
      status: "online"
    },
    unread: false,
    priority: "normal",
    lastMessageTime: "22 mins ago",
    subject: "API Token consumption & webhook retry policy",
    tags: ["API / Technical", "Billing"],
    messages: [
      {
        id: "m301",
        sender: "customer",
        text: "Hi support, does Paxway charge tokens for failed webhook retries on external endpoints?",
        timestamp: "18:40:00"
      },
      {
        id: "m302",
        sender: "ai",
        text: "Hi Liam, no — Paxway only meters token consumption for successfully generated LLM responses. Failed HTTP delivery retries on downstream webhooks (up to 5 exponential backoff attempts) are covered by our zero-charge infrastructure guarantee.",
        timestamp: "18:40:02",
        meta: {
          model: "Claude 3.5 Sonnet",
          tokens: 410,
          latency: "0.8s",
          costInr: "₹0.026",
          costUsd: "$0.0003"
        },
        reasoning: {
          intent: "Billing Guarantee & Webhook Policy",
          confidence: "99.8%",
          knowledgeCitations: ["Billing_Terms_Section_4", "Webhook_Retry_Guarantees"],
          actionTaken: "Resolved immediately from Billing Terms KB."
        }
      }
    ]
  }
];

export const MOCK_FOLLOW_UP_SEQUENCES = [
  {
    id: "seq-1",
    name: "Abandoned High-Value Lead Drip",
    trigger: "Lead viewed pricing page but didn't book demo within 2h",
    channel: "WhatsApp + Email",
    activeContacts: 342,
    conversionRate: "28.4%",
    steps: [
      { delay: "+2 hours", action: "WhatsApp AI Soft Nudge", content: "Personalized case study video relevant to lead's specific industry", responseRate: "42%" },
      { delay: "+24 hours", action: "Executive Email from Founder", content: "Direct calendar invite with 1-click VIP demo booking", responseRate: "24%" },
      { delay: "+72 hours", action: "Custom ROI Calculator Link", content: "Pre-computed cost breakdown showing estimated $14k savings", responseRate: "18%" }
    ]
  },
  {
    id: "seq-2",
    name: "Meta Ad Inbound Instant Qualification",
    trigger: "Meta Lead Form submitted via Instagram Ad",
    channel: "WhatsApp Instant Trigger (< 60s)",
    activeContacts: 820,
    conversionRate: "46.2%",
    steps: [
      { delay: "< 45 seconds", action: "WhatsApp AI Bot Greeting", content: "Instant interactive 3-question ICP qualifier", responseRate: "78%" },
      { delay: "+15 minutes", action: "Calendar Booker Link", content: "Auto-routes to regional sales team based on deal size", responseRate: "54%" }
    ]
  }
];

// --------------------------------------------------------------------------
// 4. META ADS GROWTH ENGINE MOCK DATA
// --------------------------------------------------------------------------
export const MOCK_META_CAMPAIGNS = [
  {
    id: "cmp-01",
    name: "Q3 High-Intent B2B Founders — UK/US",
    objective: "Lead Generation",
    status: "active",
    budgetDaily: "$250.00",
    spend: "$3,840.00",
    impressions: "184,200",
    clicks: "6,420",
    ctr: "3.48%",
    cpl: "$3.80",
    leads: 1010,
    cac: "$16.20",
    roas: "5.40x",
    audience: "Lookalike 1% + High-Growth Tech Founders",
    creativeVariants: 4,
    metaStatus: "Healthy · Pixel active"
  },
  {
    id: "cmp-02",
    name: "GCC Luxury Business WhatsApp Inbound",
    objective: "Messages (WhatsApp)",
    status: "active",
    budgetDaily: "$180.00",
    spend: "$2,640.00",
    impressions: "98,400",
    clicks: "4,120",
    ctr: "4.18%",
    cpl: "$4.80",
    leads: 550,
    cac: "$21.50",
    roas: "4.60x",
    audience: "Dubai/Riyadh Business Executives & Owners",
    creativeVariants: 3,
    metaStatus: "Healthy · WhatsApp Cloud connected"
  },
  {
    id: "cmp-03",
    name: "AI Customer Service Switcher Campaign",
    objective: "Conversions (Free Trial)",
    status: "active",
    budgetDaily: "$120.00",
    spend: "$1,420.00",
    impressions: "74,000",
    clicks: "2,290",
    ctr: "3.09%",
    cpl: "$5.10",
    leads: 278,
    cac: "$19.80",
    roas: "4.10x",
    audience: "Zendesk/Intercom Competitor Retargeting",
    creativeVariants: 2,
    metaStatus: "Learning · 84% optimized"
  },
  {
    id: "cmp-04",
    name: "D2C Automated Support Solution",
    objective: "Lead Generation",
    status: "paused",
    budgetDaily: "$80.00",
    spend: "$520.00",
    impressions: "32,000",
    clicks: "890",
    ctr: "2.78%",
    cpl: "$6.40",
    leads: 81,
    cac: "$24.00",
    roas: "3.20x",
    audience: "Shopify Plus Merchants & E-comm Directors",
    creativeVariants: 2,
    metaStatus: "Paused by Rule (CPL target exceeded)"
  }
];

export const MOCK_AI_CREATIVE_VARIANTS = [
  {
    id: "cr-1",
    headline: "Stop Paying $4,000/mo For Slow Human Support Reps",
    primaryText: "Paxway's AI Support Agent resolves 92% of customer WhatsApp & Instagram inquiries in 1.4 seconds flat. Zero hallucination. 100% verified against your knowledge base.",
    cta: "Start 14-Day Free Sandbox",
    format: "1:1 Square (Feed & Stories)",
    score: 98,
    tokensUsed: 420,
    model: "GPT-4o Reasoning",
    cost: "$0.0021",
    predictedCtr: "4.2%"
  },
  {
    id: "cr-2",
    headline: "How High-Growth Founders Find 500+ Verified Leads in 60s",
    primaryText: "Apify + Apollo + Hunter + Lusha in one autonomous pipeline. Enrich direct dials, verified emails, and trigger instant WhatsApp outreach on autopilot.",
    cta: "See Live Lead Scraper Demo",
    format: "4:5 Vertical (Instagram/FB)",
    score: 95,
    tokensUsed: 390,
    model: "Claude 3.5 Sonnet",
    cost: "$0.0019",
    predictedCtr: "3.9%"
  },
  {
    id: "cr-3",
    headline: "Replace Manual Reddit & LinkedIn Prospecting With Meta AI Ads",
    primaryText: "Scale from 0 to 1,000+ qualified B2B leads every single week. Connect your Meta Pixel to Paxway's Growth Engine and watch your CAC plummet by 64%.",
    cta: "Calculate Your CAC Savings",
    format: "16:9 Landscape / Video",
    score: 93,
    tokensUsed: 460,
    model: "Claude 3.5 Sonnet",
    cost: "$0.0024",
    predictedCtr: "3.6%"
  }
];

// --------------------------------------------------------------------------
// 5. USAGE & COST CONSOLE (AI Transparency flex)
// --------------------------------------------------------------------------
export const MOCK_MODEL_ROUTING = [
  {
    taskType: "Customer Support (Tier-1 Simple Queries)",
    model: "Claude 3.5 Haiku",
    provider: "Anthropic",
    tier: "Fast / Ultra-Cheap",
    avgTokens: "320 tokens",
    avgLatency: "0.4s",
    avgCostTask: "₹0.008 ($0.0001)",
    monthlyVolume: "24,800 tasks",
    status: "Active · Optimal"
  },
  {
    taskType: "Complex Customer Inquiries & Negotiation",
    model: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    tier: "High Reasoning / Production",
    avgTokens: "850 tokens",
    avgLatency: "1.1s",
    avgCostTask: "₹0.042 ($0.0005)",
    monthlyVolume: "14,200 tasks",
    status: "Active · High Confidence"
  },
  {
    taskType: "Lead ICP Scoring & Bio Synthesis",
    model: "GPT-4o Mini",
    provider: "OpenAI",
    tier: "Lightweight High-Throughput",
    avgTokens: "1,400 tokens",
    avgLatency: "0.6s",
    avgCostTask: "₹0.021 ($0.00025)",
    monthlyVolume: "18,600 tasks",
    status: "Active · Batch Cached"
  },
  {
    taskType: "Ad Copy & Creative Angle Generation",
    model: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    tier: "Creative High-Reasoning",
    avgTokens: "1,850 tokens",
    avgLatency: "1.4s",
    avgCostTask: "₹0.092 ($0.0011)",
    monthlyVolume: "1,420 tasks",
    status: "Active · Brand-Tuned"
  },
  {
    taskType: "Entity Extraction & JSON Schema Parsing",
    model: "Mistral Small / DeepSeek V3",
    provider: "Self-Hosted / Fast API",
    tier: "Deterministic Structural",
    avgTokens: "280 tokens",
    avgLatency: "0.2s",
    avgCostTask: "₹0.004 ($0.00005)",
    monthlyVolume: "42,000 tasks",
    status: "Active · Zero Latency"
  }
];

export const MOCK_COST_PER_OUTCOME = [
  {
    outcome: "Resolved Customer Ticket",
    rawMetric: "850 tokens avg (LLM) + WhatsApp API",
    unitCost: "₹0.042 ($0.0005)",
    traditionalCost: "₹250.00 ($3.00)",
    savingsMultiplier: "99.8% Savings",
    trend: "-12% vs last month"
  },
  {
    outcome: "Enriched & Verified Lead",
    rawMetric: "Apify (Scrape) + Apollo + Hunter (SMTP) + Lusha",
    unitCost: "$0.058 (₹4.80)",
    traditionalCost: "$1.50 - $3.00",
    savingsMultiplier: "96.1% Savings",
    trend: "-18% vs last month"
  },
  {
    outcome: "Acquired Customer (CAC)",
    rawMetric: "Meta Ad Spend + Instant AI WhatsApp Qualifier",
    unitCost: "$18.40 (₹1,527)",
    traditionalCost: "$85.00 - $140.00",
    savingsMultiplier: "82.5% Savings",
    trend: "-24% vs last month"
  }
];

export const MOCK_DAILY_USAGE_TREND = [
  { day: "Aug 26", tokensK: 520, costUsd: 4.20, leads: 180, tickets: 490 },
  { day: "Aug 27", tokensK: 640, costUsd: 5.10, leads: 220, tickets: 530 },
  { day: "Aug 28", tokensK: 580, costUsd: 4.80, leads: 195, tickets: 510 },
  { day: "Aug 29", tokensK: 820, costUsd: 6.90, leads: 310, tickets: 620 },
  { day: "Aug 30", tokensK: 940, costUsd: 7.80, leads: 380, tickets: 710 },
  { day: "Aug 31", tokensK: 720, costUsd: 5.90, leads: 260, tickets: 580 },
  { day: "Sep 01", tokensK: 1100, costUsd: 9.40, leads: 420, tickets: 840 },
  { day: "Sep 02 (Today)", tokensK: 880, costUsd: 7.20, leads: 340, tickets: 680 }
];
