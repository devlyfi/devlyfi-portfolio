'use client';

import { Card } from '@/components/ui/card';

interface SkeletonCardProps {
  variant?: 'service' | 'project' | 'blog';
  className?: string;
}

/**
 * SkeletonCard - Loading placeholder for card components
 */
export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  variant = 'project',
  className = '',
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      {/* Image skeleton */}
      <div className="relative bg-muted animate-pulse">
        <div className={`${
          variant === 'blog' ? 'aspect-[16/9]' : 
          variant === 'project' ? 'aspect-[16/10]' : 
          'aspect-square'
        }`} />
      </div>

      {/* Content skeleton */}
      <div className="p-6 space-y-3">
        {/* Title */}
        <div className="h-6 bg-muted rounded animate-pulse w-3/4" />
        
        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse w-full" />
          <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
        </div>

        {/* Metadata */}
        {variant === 'blog' && (
          <div className="flex gap-4 pt-2">
            <div className="h-4 bg-muted rounded animate-pulse w-20" />
            <div className="h-4 bg-muted rounded animate-pulse w-24" />
            <div className="h-4 bg-muted rounded animate-pulse w-16" />
          </div>
        )}

        {/* Tags/Technologies */}
        {(variant === 'project' || variant === 'blog') && (
          <div className="flex gap-2 pt-2">
            <div className="h-6 bg-muted rounded-full animate-pulse w-16" />
            <div className="h-6 bg-muted rounded-full animate-pulse w-20" />
            <div className="h-6 bg-muted rounded-full animate-pulse w-14" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default SkeletonCard;
