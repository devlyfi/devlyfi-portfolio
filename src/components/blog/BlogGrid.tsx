'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/types';
import { BlogCard } from '@/components/shared/BlogCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Button } from '@/components/ui/button';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [displayCount, setDisplayCount] = useState(9);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set(posts.map((post) => post.category));
    return ['All', ...Array.from(cats).sort()];
  }, [posts]);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => allTags.add(tag));
    });
    return ['All', ...Array.from(allTags).sort()];
  }, [posts]);

  // Filter posts based on selected category and tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
      const tagMatch = selectedTag === 'All' || post.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [posts, selectedCategory, selectedTag]);

  // Paginated posts
  const displayedPosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayCount(9); // Reset pagination
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setDisplayCount(9); // Reset pagination
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Filter Section */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-12 space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className="transition-all"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Filter by Tag
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleTagChange(tag)}
                    className="transition-all"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing {displayedPosts.length} of {filteredPosts.length} posts
              {(selectedCategory !== 'All' || selectedTag !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTag('All');
                    setDisplayCount(9);
                  }}
                  className="ml-2 text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  animation="fadeInUp"
                  delay={index * 0.1}
                >
                  <BlogCard post={post} variant="grid" />
                </AnimatedSection>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <AnimatedSection animation="fadeInUp">
                <div className="mt-12 text-center">
                  <Button
                    onClick={handleLoadMore}
                    size="lg"
                    variant="outline"
                    className="min-w-[200px]"
                  >
                    Load More Posts
                  </Button>
                </div>
              </AnimatedSection>
            )}
          </>
        ) : (
          <AnimatedSection animation="fadeInUp">
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No posts found matching your filters. Try adjusting your selection.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
