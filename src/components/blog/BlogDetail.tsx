'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogDetailProps } from '@/lib/types';
import { blogPosts } from '@/lib/data/dummy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BlogCard } from '@/components/shared/BlogCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from 'lucide-react';

export default function BlogDetail({ post }: BlogDetailProps) {

  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);




  // Get related posts (same category, exclude current post, limit to 3)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // If not enough related posts from same category, add from other categories
  if (relatedPosts.length < 3) {
    const additionalPosts = blogPosts
      .filter((p) => p.id !== post.id && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Share functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fadeInUp">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              
              <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 md:pb-20">
        <div className="container-custom">
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="relative aspect-[24/9] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
            {/* Article Content - Centered */}
            <div className="mx-auto max-w-4xl">
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <article>
                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-muted-foreground">
                    {post.content.map((paragraph, index) => (
                      <p key={index} className="mb-12 text-lg leading-8 text-gray-600 dark:text-gray-300 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 border-t pt-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Author Info */}
                  <div className="mt-8 border-t pt-8">
                    <div className="flex items-center gap-4">
                      {post.author.avatar && (
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-muted-foreground">Written by</p>
                        <p className="font-semibold">{post.author.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-8 border-t pt-8">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Share this article:</span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-muted"
                          onClick={() => handleShare('twitter')}
                        >
                          <Twitter className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-muted"
                          onClick={() => handleShare('facebook')}
                        >
                          <Facebook className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-muted"
                          onClick={() => handleShare('linkedin')}
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-muted"
                          onClick={handleCopyLink}
                        >
                          <Link2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <section className="bg-muted/30 py-16 md:py-20">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Related Articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Continue reading on similar topics
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                    variant="grid"
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/blog">
                  <Button variant="outline" size="lg" className="group cursor-pointer">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl bg-gray-50 px-6 py-16 text-center shadow-2xl md:px-12 md:py-24">
              {/* Ambient Background Effects */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
                  Let's discuss how we can help you achieve your goals with innovative
                  technology solutions. Our team is ready to bring your vision to life.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="group cursor-pointer h-12 rounded-full px-8 text-base font-semibold transition-all hover:scale-105"
                    >
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="cursor-pointer h-12 rounded-full border-2 border-black bg-transparent px-8 text-base font-semibold text-black transition-all hover:bg-black hover:text-white"
                    >
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
