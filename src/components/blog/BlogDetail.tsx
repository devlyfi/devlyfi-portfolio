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
  const [activeSection, setActiveSection] = useState<string>('');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Extract headings from content for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /<h2>(.*?)<\/h2>/g;
    const headings: { id: string; text: string }[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[1];
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      headings.push({ id, text });
    }

    return headings;
  };

  const headings = extractHeadings(post.content);
  const hasTableOfContents = headings.length > 2;

  // Add IDs to headings in content for anchor links
  const contentWithIds = post.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, text) => {
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return `<h2 id="${id}">${text}</h2>`;
    }
  );

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

  // Scroll spy for table of contents
  useEffect(() => {
    if (!hasTableOfContents) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = document.getElementById(headings[i].id);
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings, hasTableOfContents]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Featured Image */}
      <AnimatedSection animation="fadeInUp">
        <section className="relative bg-black">
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Title and Metadata Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="container-custom">
                <div className="mx-auto max-w-4xl">
                  <span className="mb-3 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium">
                    {post.category}
                  </span>
                  <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>
                  
                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 md:gap-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            {/* Table of Contents - Sidebar (Desktop) */}
            {hasTableOfContents && (
              <aside className="hidden lg:col-span-3 lg:block">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-4 font-semibold">Table of Contents</h3>
                      <nav>
                        <ul className="space-y-2">
                          {headings.map((heading) => (
                            <li key={heading.id}>
                              <a
                                href={`#${heading.id}`}
                                className={`block text-sm transition-colors hover:text-primary ${
                                  activeSection === heading.id
                                    ? 'font-medium text-primary'
                                    : 'text-muted-foreground'
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                  });
                                }}
                              >
                                {heading.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </CardContent>
                  </Card>

                  {/* Share Buttons - Desktop */}
                  <Card className="mt-6">
                    <CardContent className="pt-6">
                      <h3 className="mb-4 font-semibold">Share Article</h3>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={() => handleShare('twitter')}
                        >
                          <Twitter className="mr-2 h-4 w-4" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={() => handleShare('facebook')}
                        >
                          <Facebook className="mr-2 h-4 w-4" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={() => handleShare('linkedin')}
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={handleCopyLink}
                        >
                          <Link2 className="mr-2 h-4 w-4" />
                          {copySuccess ? 'Copied!' : 'Copy Link'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            )}

            {/* Article Content */}
            <div className={hasTableOfContents ? 'lg:col-span-9' : 'lg:col-span-12'}>
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <article className="mx-auto max-w-4xl">
                  {/* Article Body */}
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-3xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm"
                    dangerouslySetInnerHTML={{ __html: contentWithIds }}
                  />

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

                  {/* Mobile Share Buttons */}
                  <div className="mt-8 border-t pt-8 lg:hidden">
                    <div className="relative">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setShowShareMenu(!showShareMenu)}
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Article
                      </Button>
                      
                      {showShareMenu && (
                        <div className="absolute bottom-full left-0 right-0 mb-2 rounded-lg border bg-background p-2 shadow-lg">
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                handleShare('twitter');
                                setShowShareMenu(false);
                              }}
                            >
                              <Twitter className="mr-2 h-4 w-4" />
                              Twitter
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                handleShare('facebook');
                                setShowShareMenu(false);
                              }}
                            >
                              <Facebook className="mr-2 h-4 w-4" />
                              Facebook
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                handleShare('linkedin');
                                setShowShareMenu(false);
                              }}
                            >
                              <Linkedin className="mr-2 h-4 w-4" />
                              LinkedIn
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                handleCopyLink();
                                setShowShareMenu(false);
                              }}
                            >
                              <Link2 className="mr-2 h-4 w-4" />
                              {copySuccess ? 'Copied!' : 'Copy'}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            </div>
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
                  <Button variant="outline" size="lg" className="group">
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
      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white md:py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Let's discuss how we can help you achieve your goals with innovative
                technology solutions. Get in touch with our team today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto group"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
