import React from 'react';

export default function ProgressRing({ 
  radius = 24, 
  stroke = 4, 
  progress = 60, 
  color = "var(--accent)", 
  backgroundColor = "rgba(255, 255, 255, 0.08)",
  label
}) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: radius * 2, height: radius * 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          stroke={backgroundColor}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ 
            strokeDashoffset, 
            transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            strokeLinecap: 'round'
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {label && (
        <span style={{ 
          position: 'absolute', 
          fontSize: `${radius * 0.45}px`, 
          fontWeight: 700, 
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-primary)'
        }}>
          {label}
        </span>
      )}
    </div>
  );
}
