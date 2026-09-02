import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function StatCard({ 
  label, 
  value, 
  numericTarget,
  prefix = "",
  suffix = "",
  trend, 
  trendDirection = "up", 
  subtitle, 
  icon: Icon,
  accent = false,
  highlight = false
}) {
  const [displayValue, setDisplayValue] = useState(0);

  // Animated count-up for numbers
  useEffect(() => {
    if (numericTarget === undefined || numericTarget === null) return;

    let start = 0;
    const duration = 1000;
    const steps = 30;
    const increment = numericTarget / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setDisplayValue(numericTarget);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericTarget]);

  return (
    <div className={`stat-card ${accent ? 'stat-card-accent' : ''}`}>
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        {Icon && (
          <div className="stat-icon-wrapper">
            <Icon size={18} strokeWidth={2.2} />
          </div>
        )}
      </div>

      <div className={`stat-value ${highlight ? 'highlight' : ''}`}>
        {numericTarget !== undefined ? (
          `${prefix}${displayValue.toLocaleString()}${suffix}`
        ) : (
          value
        )}
      </div>

      <div className="stat-footer">
        {trend && (
          <span className={`trend-badge ${
            trendDirection === 'up' ? 'trend-up' : 
            trendDirection === 'down' ? 'trend-down' : 'trend-neutral'
          }`}>
            {trendDirection === 'up' && <TrendingUp size={12} />}
            {trendDirection === 'down' && <TrendingDown size={12} />}
            {trendDirection === 'neutral' && <Minus size={12} />}
            {trend}
          </span>
        )}
        {subtitle && (
          <span style={{ color: 'var(--text-muted)' }}>{subtitle}</span>
        )}
      </div>
    </div>
  );
}
