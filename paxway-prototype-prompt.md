# PAXWAY — AI Growth OS Prototype
### Build Prompt for Antigravity (Gemini)

Paste everything below this line directly into Antigravity as your build instruction.

---

## 0. ROLE & OBJECTIVE

You are building a **high-fidelity, working front-end prototype** called **Paxway** — an AI Growth Operating System built by **QEVN**. This is a client-demo build, not a throwaway mockup: every screen must feel like a real, shipped SaaS product with live-looking data, working navigation, and interactive states. The goal is to make the client (Ankush, founder of Paxway) feel like he is looking at software that already exists and already works.

Paxway has three core AI capabilities that must all be represented as fully navigable product surfaces:

1. **AI Customer Service Agent** — automated follow-ups and query resolution for Paxway's own customers.
2. **AI Lead-Gen Scraper** — finds and enriches business-class individuals as sales leads.
3. **Meta Ads Growth Engine** — plans, launches and optimizes Meta (Facebook/Instagram) ad campaigns to acquire B2C clients, replacing their current manual Reddit/LinkedIn prospecting.

Everything must be wrapped in one unified **Integration & Observability Layer** that visibly shows which third-party APIs are being called, how many tokens/credits each action consumes, and what it costs — this is the single most important "wow" element for this demo, so do not treat it as an afterthought.

---

## 1. DESIGN SYSTEM — "Spotify-grade dark immersive"

Do NOT build a light or neutral SaaS theme. Build a dark, immersive, editorial product — the same design register as Spotify: bold geometry, oversized type, saturated accent color against near-black surfaces, generous negative space, layered depth.

**Surfaces**
- Base background: near-black, e.g. `#0A0A0C` / `#0D0F10` — never pure `#000000`.
- Elevated surfaces (cards, modals, sidebars) use subtle layered tints, e.g. `#151718`, `#1C1F20`, with soft inner borders (`1px solid rgba(255,255,255,0.06)`), not drop shadows — depth comes from layered tone, not shadow.
- Use large blurred gradient "glow" blobs behind hero sections (acid-green / electric accent bleeding into black) for atmosphere, the way Spotify uses color washes behind album art.

**Color**
- Primary accent: an electric, high-saturation color that reads as "AI/tech" against black — default to QEVN's existing brand accent, **acid green `#B6F76E`**, on void black `#08090A`, unless you want to propose a Paxway-specific accent (e.g. electric violet or signal blue) — if you do, keep the same "one loud accent on near-black" formula.
- One accent color only. Use it sparingly and decisively (primary CTAs, active nav state, key data points, live/status indicators) — not everywhere.
- Status colors: success (green-lime), warning (amber), error (red-orange), all desaturated enough to sit quietly on black until needed.

**Typography**
- One bold, geometric/grotesk display face for headlines and big numbers (Spotify Circular / Neue Montreal / General Sans energy) — huge type on dashboards (48–96px hero stats).
- A clean, highly legible secondary face for body/UI text.
- Tight letter-spacing on headlines, generous line-height on body copy.
- Numbers (token counts, costs, lead counts) should be treated as hero content — large, tabular-nums, animated count-up on load.

**Geometry & Motion**
- Rounded-but-confident corner radii (12–20px cards, pill-shaped buttons/tags).
- Diagonal or angular section dividers/gradients in hero areas — avoid flat rectangles everywhere.
- Micro-interactions: hover states that lift/glow cards, animated progress bars for "agent working" states, live-updating counters, skeleton loaders that feel premium not janky.
- Sidebar navigation with icon + label, active item gets a filled accent pill background (Spotify left-nav energy).

---

## 2. INFORMATION ARCHITECTURE

Build these as fully connected screens (persistent left sidebar + top bar shell):

1. **Command Center (Home/Dashboard)** — cross-product overview.
2. **AI Support Agent**
   - Live conversation/inbox view
   - Automated follow-up sequences view
   - Knowledge base / training sources
3. **Lead-Gen Engine**
   - Search/ICP builder
   - Live scrape + enrichment run view
   - Enriched lead table with per-lead data-source badges
4. **Meta Ads Growth**
   - Campaign dashboard (spend, ROAS, CPL, CAC)
   - Campaign builder/wizard
   - Audience & creative studio
5. **Integration Hub** — all connected apps, status, credentials, usage caps.
6. **Usage & Cost Console** — API calls, tokens, cost-per-outcome, model routing.
7. **Settings / Brand** — Paxway branding, built-by-QEVN footer credit.

---

## 3. FEATURE SPEC

### 3.1 AI Customer Service Agent
- Inbox-style UI (like a modern helpdesk) listing customer conversations across channels (WhatsApp, Instagram DM, Email, Web chat) with unread/priority indicators.
- Open a thread → show the AI's drafted/sent replies inline, with a visible "Agent reasoning" expandable panel (intent detected, confidence score, knowledge sources cited, action taken — e.g. "answered from FAQ," "escalated to human," "sent automated follow-up #2 of 3").
- A "Follow-up Sequences" view showing automated drip logic per customer segment (e.g. "abandoned inquiry → follow-up at 2h / 24h / 72h") as a visual timeline/flow.
- Every AI response bubble shows a small metadata chip: model used, tokens used, response latency, cost (e.g. `Claude Sonnet · 640 tokens · 1.2s · ₹0.04`).

### 3.2 AI Lead-Gen Scraper (business-class individuals)
- ICP builder: filters for title/seniority, industry, company size, geography, keywords — styled as an elegant filter/search bar, not a boring form.
- "Run scrape" triggers a visible pipeline animation: **Discover (Apify) → Match (Apollo.io) → Verify Email (Hunter.io) → Enrich Phone/Direct-dial (Lusha) → Score → Push to CRM/Sequence**. Each stage should visually light up as it "completes," with a live counter of leads found/enriched.
- Result table: name, title, company, verified email, phone, LinkedIn, lead score, and a small badge per field showing which API sourced/verified it (Apollo / Hunter / Lusha / Apify), since "which data came from where" is exactly what will impress a technical buyer.
- Per-run summary card: total leads found, enrichment success rate, total API calls used, estimated cost of the run.

### 3.3 Meta Ads Growth Engine
- Campaign dashboard: active campaigns with spend, impressions, CTR, CPL, CAC, ROAS — big hero metrics up top, trend chart below.
- Campaign builder wizard: objective → audience → placements → budget → creative, mirroring Meta Ads Manager's mental model but themed to Paxway.
- Audience builder should show estimated reach and an AI-suggested "lookalike" audience option, since this replaces their current manual Reddit/LinkedIn prospecting.
- Creative studio: AI-generated ad copy variants with a "generated by AI" tag, tokens used, and quick regenerate action.
- A "Meta Business Suite" connection status card showing linked ad account, pixel status, and page.

### 3.4 Integration Hub (this is the centerpiece — do not undersell it)
Build a grid of integration cards for at minimum: **Apollo.io, Hunter.io, Lusha, Apify, Meta Marketing API, WhatsApp Cloud API, LinkedIn, Reddit, Google/Gmail, a CRM (e.g. HubSpot)**. Each card shows:
- Connection status (connected/needs auth) with a live pulse indicator when connected.
- Rolling usage this month (API calls, credits/tokens remaining vs. plan limit) as a mini progress ring or bar.
- Last sync time, and a "view logs" action.

### 3.5 Usage & Cost Console
This screen is the "AI transparency" flex for the client. Include:
- A model-routing table: which task type uses which model (e.g. lead scoring → lightweight/cheap model, customer replies → mid-tier model, ad copy generation → higher-reasoning model), with **average tokens per task** and **average cost per task** columns.
- A time-series chart of daily token usage / cost across the three products.
- A "cost per outcome" section translating raw usage into business terms: cost per resolved ticket, cost per enriched lead, cost per acquired customer — this is the line that actually sells the ROI story to a founder.
- Use realistic but clearly-labeled mock figures (e.g. "avg 850 tokens / support reply," "avg 1,400 tokens / lead enrichment summary," "avg $0.06 / enriched lead") — invent sensible numbers, but keep them internally consistent across screens.

---

## 4. TECHNICAL IMPLEMENTATION NOTES

- Build as a modern web app (React/Next.js + Tailwind is the expected stack in Antigravity) with client-side routing between all screens listed in Section 2.
- All third-party integrations (Apollo, Hunter, Lusha, Apify, Meta) should be **simulated with realistic mock data and staged loading states** — do not attempt real API calls or ask for real credentials. Fake it convincingly: fabricated-but-plausible lead names/companies, realistic token/cost numbers, animated "calling API…" states with brief artificial delay so it reads as live.
- Keep a single shared mock-data/state layer so numbers stay consistent across the dashboard, integration hub, and usage console (e.g. total leads found on the Lead-Gen screen should match the count referenced on the Command Center).
- Responsive down to tablet width at minimum; desktop-first since this is a founder demo on a laptop.
- Footer/about credit: **"Paxway — built by QEVN"**, small and tasteful, not a big logo lockup.

---

## 5. WHAT "IMPRESSIVE" LOOKS LIKE HERE

Prioritize, in order:
1. The **Integration Hub + Usage/Cost Console** feeling real and specific (this is what makes it look like infrastructure, not a mockup).
2. The **Lead-Gen pipeline animation** (Apify → Apollo → Hunter → Lusha) — this single interaction sells the "AI scraper" story better than any text can.
3. A dark, confident, Spotify-grade visual identity applied consistently across every screen, with no default/light UI kit look anywhere.
4. Smooth, purposeful motion (loading, count-ups, live status pulses) over static screens.

Build all screens listed in Section 2 as real, clickable, connected views — not a single-page mockup with placeholder tabs.
