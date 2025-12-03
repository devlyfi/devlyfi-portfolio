'use client';
import React, { useEffect } from 'react';

interface TextMarqueeProps {
  marquee1: string[];
  marquee2: string[];
}

const TextMarquee: React.FC<TextMarqueeProps & { className?: string }> = ({ className, marquee1, marquee2 }) => {
  // Inject keyframes once
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({ items, direction = 'forwards' }: { items: string[]; direction?: 'forwards' | 'reverse' }) => {
    const numItems = items.length;
    const speed = '50s';
    // const itemWidth = '120px';
    const itemGap = '25px';

    return (
      <div
        className="max-w-full overflow-hidden"
        style={{
          '--speed': speed,
          '--numItems': numItems,
          // '--item-width': itemWidth,
          '--item-gap': itemGap,
          '--direction': direction,
          maskImage: 'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
        } as React.CSSProperties}
      >
        <div
          className="w-max flex"
          style={{
            '--track-width': `calc(var(--item-width) * ${numItems})`,
            '--track-gap': `calc(var(--item-gap) * ${numItems})`,
          } as React.CSSProperties}
        >
          {[...items, ...items].map((text, index) => (
            <div
              key={index}
              className={`shrink-0 flex justify-center items-center  text-white font-medium text-lg italic font-serif px-4 ${className}`}
              style={{
                width: 'var(--item-width)',
                height: '60px',
                marginRight: 'var(--item-gap)',
                animation: `marquee-move var(--speed) linear infinite ${direction === 'reverse' ? 'reverse' : 'normal'}`,
              } as React.CSSProperties}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="items-center overflow-hidden py-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-6">
        <Marquee items={marquee1} />
        <Marquee items={marquee2} direction="reverse" />
      </div>
    </div>
  );
};

export default TextMarquee;
