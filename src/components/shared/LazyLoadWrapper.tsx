'use client';

import React, { Suspense } from 'react';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

/**
 * LazyLoadWrapper - A wrapper component for lazy loading content
 * Provides a loading state while content is being loaded
 */
export const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  fallback,
  className = '',
}) => {
  const defaultFallback = (
    <div className={`animate-pulse ${className}`}>
      <div className="h-full w-full bg-muted rounded-lg" />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

export default LazyLoadWrapper;
