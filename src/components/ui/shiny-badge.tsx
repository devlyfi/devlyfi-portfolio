'use client';

import React from 'react';

interface ShinyBadgeProps {
  text?: string;
  shineColor?: string;
  className?: string;
  icon?: React.ReactElement<{ className?: string }>; // icon can receive className
  iconClassName?: string; // optional class for the icon
}

export default function ShinyBadge({
  text = "New text",
  shineColor = "#8484ff",
  className = "",
  icon,
  iconClassName = "",
}: ShinyBadgeProps) {
  return (
    <div className="inline-block bg-transparent">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .shiny-badge {
          --gradient-angle: 0deg;
          --gradient-shine: ${shineColor};

          display: inline-flex;
          align-items: center;
          justify-content: center;

          position: relative;
          overflow: hidden;
          border-radius: 9999px;
          padding: 0.35rem 0.75rem;
          font-size: 0.75rem;
          line-height: 1;
          font-weight: 500;
          color: #000000;

          background:
            linear-gradient(#ffff, #ffff) padding-box,
            conic-gradient(
              from var(--gradient-angle),
              transparent 0%,
              #1d4ed8 5%,
              var(--gradient-shine) 15%,
              #1d4ed8 30%,
              transparent 40%,
              transparent 100%
            ) border-box;

          border: 2px solid transparent;
          box-shadow: inset 0 0 0 1px #ffff;

          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          animation: border-spin 3s linear infinite;
        }

        @keyframes border-spin {
          to {
            --gradient-angle: 360deg;
          }
        }
      `}</style>

      <span className={`shiny-badge ${className}`}>
        {icon &&
          React.cloneElement(icon, {
            className: `inline-block mr-2 ${iconClassName}`.trim(),
          })}
        <span>{text}</span>
      </span>
    </div>
  );
}
