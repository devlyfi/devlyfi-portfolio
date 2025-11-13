# Design Document

## Overview

The Devlyfi portfolio website is a modern, performant Next.js application that showcases the company's services, projects, and thought leadership through blog content. The architecture leverages Next.js 14+ App Router for optimal performance, static generation for SEO, and GSAP for professional animations. The design emphasizes modularity, type safety, and maintainability while delivering a unique visual experience through customized shadcn/ui components.

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS with custom configuration
- **UI Components**: shadcn/ui (customized)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Form Handling**: React Hook Form with Zod validation
- **API Routes**: Next.js API Routes for contact form submission

### Design Principles

1. **Performance First**: Static generation, optimized images, minimal JavaScript
2. **SEO Optimized**: Proper meta tags, semantic HTML, structured data
3. **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
4. **Maintainability**: Centralized data, reusable components, clear separation of concerns
5. **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

## Architecture

### Directory Structure

```
devlyfi-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with metadata
│   │   ├── page.tsx                   # Home page
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── services/
│   │   │   ├── page.tsx              # Services listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Service detail page
│   │   ├── works/
│   │   │   ├── page.tsx              # Recent works listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Work detail page
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Blog detail page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components (customized)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── WorksPreview.tsx
│   │   │   └── CTASection.tsx
│   │   ├── shared/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── AnimatedSection.tsx
│   │   └── animations/
│   │       └── gsap-animations.ts
│   ├── lib/
│   │   ├── data/
│   │   │   └── dummy.ts              # Centralized data source
│   │   ├── utils.ts                  # Utility functions
│   │   └── types.ts                  # TypeScript type definitions
│   └── styles/
│       └── globals.css               # Global styles and Tailwind imports
├── public/
│   ├── images/
│   │   ├── logo.svg                  # Devlyfi logo
│   │   ├── services/
│   │   ├── works/
│   │   └── blog/
│   └── fonts/                        # Custom fonts if needed
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── next.config.js                    # Next.js configuration
```

### Routing Strategy

The application uses Next.js App Router with file-based routing:

- **Static Routes**: `/`, `/about`, `/services`, `/works`, `/blog`
- **Dynamic Routes**: `/services/[slug]`, `/works/[slug]`, `/blog/[slug]`
- **API Routes**: `/api/contact`

All content pages use Static Site Generation (SSG) with `generateStaticParams` for dynamic routes, ensuring optimal performance and SEO.

## Components and Interfaces

### Layout Components

#### Header Component
```typescript
interface HeaderProps {
  transparent?: boolean; // For hero sections
}
```

Features:
- Sticky positioning with backdrop blur on scroll
- Responsive navigation (hamburger menu on mobile)
- Logo with link to home
- Active link highlighting
- Smooth scroll behavior for anchor links

#### Navigation Component
```typescript
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[]; // For dropdown menus
}
```

Features:
- Desktop: Horizontal navigation with hover effects
- Mobile: Slide-in drawer with animated menu items
- Accessibility: Keyboard navigation and ARIA labels

#### Footer Component
```typescript
interface FooterProps {
  // No props needed, uses data from dummy.ts
}
```

Features:
- Multi-column layout (desktop) / stacked (mobile)
- Quick links, contact info, social media icons
- Newsletter subscription form (optional)
- Copyright and legal links

### Home Page Components

#### HeroSection Component
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}
```

Features:
- Full-viewport height with centered content
- Animated text entrance (GSAP)
- Gradient overlay on background
- Scroll indicator animation

#### ServicesPreview Component
```typescript
interface ServicesPreviewProps {
  services: Service[];
  maxDisplay?: number; // Default: 3
}
```

Features:
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Service cards with hover animations
- "View All Services" CTA button

#### WorksPreview Component
```typescript
interface WorksPreviewProps {
  works: Work[];
  maxDisplay?: number; // Default: 6
}
```

Features:
- Masonry or grid layout
- Project cards with image overlay on hover
- Filter by category (optional)
- "View All Works" CTA button

### Shared Components

#### ServiceCard Component
```typescript
interface ServiceCardProps {
  service: Service;
  variant?: 'preview' | 'full';
}

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // Icon name or path
  features: string[];
  process?: string[];
}
```

Features:
- Icon with brand color accent
- Title and description
- Hover effect with scale and shadow
- Link to detail page

#### ProjectCard Component
```typescript
interface ProjectCardProps {
  project: Work;
  variant?: 'grid' | 'featured';
}

interface Work {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  client?: string;
  year: number;
  challenge?: string;
  solution?: string;
  results?: string[];
}
```

Features:
- Responsive image with Next.js Image optimization
- Category badge
- Overlay with title and brief description
- Smooth hover transition revealing more info

#### BlogCard Component
```typescript
interface BlogCardProps {
  post: BlogPost;
  variant?: 'grid' | 'list';
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number; // in minutes
}
```

Features:
- Featured image with aspect ratio preservation
- Title, excerpt, and metadata (author, date, read time)
- Category and tags
- "Read More" link with arrow animation

#### ContactForm Component
```typescript
interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

Features:
- Form validation with Zod schema
- Real-time error messages
- Loading state during submission
- Success/error toast notifications
- Honeypot field for spam prevention

#### AnimatedSection Component
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number; // Intersection observer threshold
}
```

Features:
- Wraps content with GSAP scroll-triggered animations
- Configurable animation type and timing
- Respects prefers-reduced-motion
- Reusable across all pages

### Detail Page Components

#### ServiceDetail Component
```typescript
interface ServiceDetailProps {
  service: Service;
}
```

Layout:
- Hero section with service title and description
- Features grid with icons
- Process timeline (if applicable)
- Related services carousel
- CTA section

#### WorkDetail Component
```typescript
interface WorkDetailProps {
  work: Work;
}
```

Layout:
- Hero image gallery (carousel or grid)
- Project overview with metadata
- Challenge, solution, and results sections
- Technologies used (badges)
- Related projects carousel
- CTA section

#### BlogDetail Component
```typescript
interface BlogDetailProps {
  post: BlogPost;
}
```

Layout:
- Featured image
- Article metadata (author, date, read time)
- Rich text content with proper typography
- Table of contents (for long posts)
- Social share buttons
- Related posts section
- Comments section (optional)

## Data Models

### Centralized Data Structure (dummy.ts)

```typescript
// lib/data/dummy.ts

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface NavigationData {
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    services: NavItem[];
    resources: NavItem[];
  };
}

export interface HomePageData {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  about: {
    title: string;
    description: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
}

export interface AboutPageData {
  mission: string;
  vision: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  team?: Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
  }>;
  milestones: Array<{
    year: number;
    title: string;
    description: string;
  }>;
}

// Export all data
export const companyInfo: CompanyInfo = { /* ... */ };
export const navigation: NavigationData = { /* ... */ };
export const homePageData: HomePageData = { /* ... */ };
export const aboutPageData: AboutPageData = { /* ... */ };
export const services: Service[] = [ /* ... */ ];
export const works: Work[] = [ /* ... */ ];
export const blogPosts: BlogPost[] = [ /* ... */ ];
```

### Type Definitions (lib/types.ts)

All interfaces are exported from a central types file for reusability and consistency across the application.

## Styling and Theming

### TailwindCSS Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0354C4',
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0354C4',
          600: '#02439D',
          700: '#023276',
          800: '#01214F',
          900: '#011128',
        },
        background: '#FFFFFF',
        foreground: '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
```

### shadcn/ui Customization

All shadcn/ui components will be customized with:
- Primary color scheme using #0354C4
- Custom border radius and spacing
- Unique hover and focus states
- Custom animation timings
- Brand-specific shadows and effects

### Global Styles

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-inter: 'Inter', sans-serif;
    --font-poppins: 'Poppins', sans-serif;
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .container-custom {
    @apply container mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

## Animation Strategy

### GSAP Implementation

```typescript
// components/animations/gsap-animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const staggerFadeIn = (elements: HTMLElement[], stagger: number = 0.1) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const parallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const scaleOnHover = (element: HTMLElement) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
};

// Respect user preferences
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

### Animation Guidelines

1. **Entrance Animations**: Use on page load and scroll-triggered sections
2. **Hover Effects**: Subtle scale, color, or shadow changes
3. **Page Transitions**: Smooth fade between routes
4. **Loading States**: Skeleton screens with shimmer effect
5. **Micro-interactions**: Button clicks, form focus, etc.

All animations respect `prefers-reduced-motion` and are optimized to not block rendering.

## Error Handling

### Client-Side Error Handling

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-custom py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600"
      >
        Try again
      </button>
    </div>
  );
}
```

### Not Found Handling

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="container-custom py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600"
      >
        Go Home
      </a>
    </div>
  );
}
```

### API Error Handling

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation
    const validatedData = contactSchema.parse(body);
    
    // Process form submission (email service, database, etc.)
    // ...
    
    return Response.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    
    return Response.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Testing Strategy

### Unit Testing

- **Framework**: Jest + React Testing Library
- **Coverage**: All utility functions, hooks, and complex components
- **Focus**: Component rendering, user interactions, data transformations

### Integration Testing

- **Framework**: Playwright or Cypress
- **Coverage**: User flows (navigation, form submission, page transitions)
- **Focus**: End-to-end scenarios from user perspective

### Visual Regression Testing

- **Framework**: Chromatic or Percy
- **Coverage**: All pages and component variants
- **Focus**: Detecting unintended visual changes

### Performance Testing

- **Tools**: Lighthouse CI, WebPageTest
- **Metrics**: Core Web Vitals (LCP, FID, CLS)
- **Targets**: 
  - Performance score: 90+
  - Accessibility score: 95+
  - SEO score: 95+
  - Best Practices: 95+

### Accessibility Testing

- **Tools**: axe DevTools, WAVE
- **Standards**: WCAG 2.1 AA compliance
- **Manual Testing**: Keyboard navigation, screen reader testing

## SEO Optimization

### Metadata Configuration

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://devlyfi.com'),
  title: {
    default: 'Devlyfi - Professional Software Development Services',
    template: '%s | Devlyfi',
  },
  description: 'Devlyfi provides cutting-edge software development services...',
  keywords: ['software development', 'web development', 'mobile apps', '...'],
  authors: [{ name: 'Devlyfi' }],
  creator: 'Devlyfi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devlyfi.com',
    siteName: 'Devlyfi',
    title: 'Devlyfi - Professional Software Development Services',
    description: 'Devlyfi provides cutting-edge software development services...',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devlyfi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devlyfi - Professional Software Development Services',
    description: 'Devlyfi provides cutting-edge software development services...',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Structured Data

```typescript
// components/shared/StructuredData.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Devlyfi',
    url: 'https://devlyfi.com',
    logo: 'https://devlyfi.com/logo.svg',
    description: '...',
    address: {
      '@type': 'PostalAddress',
      // ...
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '...',
      contactType: 'customer service',
    },
    sameAs: [
      // Social media URLs
    ],
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devlyfi.com';
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/works',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  const services = /* get from dummy.ts */.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  // Similar for works and blog posts
  
  return [...staticPages, ...services, /* ... */];
}
```

## Performance Optimization

### Image Optimization

- Use Next.js Image component for all images
- Implement lazy loading for below-the-fold images
- Use WebP format with fallbacks
- Provide appropriate sizes and srcset
- Implement blur placeholders for better perceived performance

### Code Splitting

- Automatic code splitting via Next.js App Router
- Dynamic imports for heavy components (e.g., GSAP animations)
- Lazy load non-critical components

### Caching Strategy

- Static pages cached at CDN level
- Implement stale-while-revalidate for API routes
- Browser caching for static assets

### Bundle Optimization

- Tree shaking for unused code
- Minimize third-party dependencies
- Use bundle analyzer to identify large dependencies
- Implement font optimization with next/font

## Deployment and Configuration

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://devlyfi.com
CONTACT_EMAIL_TO=contact@devlyfi.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASSWORD=password
```

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['gsap', 'lucide-react'],
  },
};

module.exports = nextConfig;
```

### Build and Deployment

- **Platform**: Vercel (recommended) or any Node.js hosting
- **Build Command**: `npm run build`
- **Output**: Static HTML + API routes
- **CDN**: Automatic via Vercel or CloudFlare

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy, landmarks, lists
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **Focus Management**: Visible focus indicators, logical tab order
4. **ARIA Labels**: Descriptive labels for screen readers
5. **Color Contrast**: WCAG AA compliance (4.5:1 for normal text)
6. **Alt Text**: Descriptive alt text for all images
7. **Form Accessibility**: Labels, error messages, validation feedback
8. **Skip Links**: Skip to main content link for keyboard users

## Security Considerations

1. **Form Validation**: Server-side validation for contact form
2. **CSRF Protection**: Built-in Next.js protection
3. **XSS Prevention**: React's built-in escaping
4. **Content Security Policy**: Implement CSP headers
5. **Rate Limiting**: Implement for contact form API
6. **Honeypot Field**: Spam prevention for contact form
7. **Environment Variables**: Secure storage of sensitive data
8. **HTTPS**: Enforce HTTPS in production

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Graceful Degradation**: Core functionality works without JavaScript
- **Progressive Enhancement**: Enhanced experience with modern features

## Conclusion

This design provides a comprehensive blueprint for building the Devlyfi portfolio website. The architecture emphasizes performance, maintainability, and user experience while leveraging modern web technologies. The modular component structure and centralized data management ensure easy updates and scalability as the company grows.
