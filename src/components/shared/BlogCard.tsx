'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogCardProps } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

export function BlogCard({ post, variant = 'grid' }: BlogCardProps) {
  const isList = variant === 'list';
  
  // Format date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className={`overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/40 ${isList ? 'md:flex md:flex-row' : ''}`}>
        {/* Featured Image */}
        <div className={`relative overflow-hidden bg-muted ${isList ? 'md:w-2/5' : 'aspect-[16/9]'}`}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={isList ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-lg">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col ${isList ? 'md:w-3/5' : ''}`}>
          <CardHeader>
            <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            {/* Author and Date Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </CardContent>

          <CardFooter>
            <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
              <span>Read More</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
