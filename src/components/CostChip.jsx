import React from 'react';
import { Cpu, Zap, Clock, Coins } from 'lucide-react';

export default function CostChip({ 
  model = "Claude 3.5 Sonnet", 
  tokens = 640, 
  latency = "1.2s", 
  cost = "₹0.04", 
  accent = false,
  compact = false 
}) {
  return (
    <div className={`cost-chip ${accent ? 'cost-chip-accent' : ''}`}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 700 }}>
        <Cpu size={12} color={accent ? "var(--accent)" : "var(--color-cyan)"} />
        {model}
      </span>
      <span style={{ color: 'var(--text-muted)' }}>•</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
        <Zap size={11} color="var(--color-amber)" />
        {tokens} tokens
      </span>
      {!compact && (
        <>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            <Clock size={11} />
            {latency}
          </span>
        </>
      )}
      <span style={{ color: 'var(--text-muted)' }}>•</span>
      <span style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: 3, 
        color: accent ? 'var(--accent)' : 'var(--text-primary)',
        fontWeight: 700 
      }}>
        <Coins size={11} />
        {cost}
      </span>
    </div>
  );
}
