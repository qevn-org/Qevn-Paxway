import React, { useState } from 'react';

export default function Chart({ data, height = 220 }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!data || data.length === 0) return null;

  const maxTokens = Math.max(...data.map(d => d.tokensK));
  const svgWidth = 600;
  const svgHeight = height;
  const paddingX = 40;
  const paddingY = 30;

  const getX = (idx) => paddingX + (idx / (data.length - 1)) * (svgWidth - paddingX * 2);
  const getY = (val) => svgHeight - paddingY - (val / maxTokens) * (svgHeight - paddingY * 2);

  // Generate smooth SVG path
  const points = data.map((d, i) => `${getX(i)},${getY(d.tokensK)}`).join(' ');
  const areaPoints = `${getX(0)},${svgHeight - paddingY} ${points} ${getX(data.length - 1)},${svgHeight - paddingY}`;

  return (
    <div style={{ position: 'relative', width: '100%', height: `${height}px` }}>
      <svg 
        viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = svgHeight - paddingY - pct * (svgHeight - paddingY * 2);
          return (
            <g key={i}>
              <line 
                x1={paddingX} 
                y1={y} 
                x2={svgWidth - paddingX} 
                y2={y} 
                stroke="rgba(255, 255, 255, 0.06)" 
                strokeDasharray="4 4" 
              />
              <text 
                x={paddingX - 8} 
                y={y + 3} 
                fill="var(--text-muted)" 
                fontSize="10" 
                fontFamily="var(--font-mono)" 
                textAnchor="end"
              >
                {Math.round((pct * maxTokens))}k
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <polygon points={areaPoints} fill="url(#chartGrad)" />

        {/* Line */}
        <polyline 
          points={points} 
          fill="none" 
          stroke="var(--accent)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Data points & Interaction */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(d.tokensK);
          const isHovered = hoveredIdx === i;

          return (
            <g key={i} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} style={{ cursor: 'pointer' }}>
              <circle 
                cx={x} 
                cy={y} 
                r={isHovered ? 6 : 4} 
                fill={isHovered ? "#FFFFFF" : "var(--accent)"} 
                stroke="var(--bg-void)" 
                strokeWidth="2" 
                style={{ transition: 'all 0.2s ease' }}
              />
              <text 
                x={x} 
                y={svgHeight - 10} 
                fill={isHovered ? "var(--accent)" : "var(--text-muted)"} 
                fontSize="10" 
                fontWeight={isHovered ? "700" : "500"}
                textAnchor="middle"
              >
                {d.day.split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover Tooltip */}
      {hoveredIdx !== null && (
        <div style={{
          position: 'absolute',
          top: 10,
          right: 20,
          background: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-md)',
          padding: '8px 12px',
          boxShadow: 'var(--shadow-md)',
          pointerEvents: 'none',
          fontSize: '0.78rem'
        }}>
          <div style={{ fontWeight: 700, color: '#FFFFFF' }}>{data[hoveredIdx].day}</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 4, fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--accent)' }}>Tokens: {data[hoveredIdx].tokensK}k</span>
            <span style={{ color: 'var(--color-cyan)' }}>Cost: ${data[hoveredIdx].costUsd}</span>
            <span style={{ color: 'var(--text-secondary)' }}>Leads: {data[hoveredIdx].leads}</span>
          </div>
        </div>
      )}
    </div>
  );
}
