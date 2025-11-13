# Animation System Documentation

This directory contains all animation-related components and utilities for the Devlyfi portfolio website.

## Overview

The animation system is built on GSAP (GreenSock Animation Platform) with ScrollTrigger for scroll-based animations. It includes:

- Page transition animations
- Scroll-triggered animations
- Micro-interactions
- Performance optimizations
- Accessibility support (prefers-reduced-motion)

## Components

### LoadingBar
A progress indicator that appears at the top of the page during route transitions.

**Usage:**
```tsx
// Already included in root layout
<LoadingBar />
```

### PageTransition
Wraps page content to provide smooth fade-in animations on route changes.

**Usage:**
```tsx
// Already included in root layout
<PageTransition>
  {children}
</PageTransition>
```

### AnimatedSection
A versatile wrapper component for applying scroll-triggered animations to content.

**Usage:**
```tsx
import AnimatedSection from '@/components/animations/AnimatedSection';

// Basic fade in up
<AnimatedSection>
  <h2>Animated Content</h2>
</AnimatedSection>

// With custom animation type
<AnimatedSection animation="fadeInLeft" delay={0.2}>
  <p>Content slides in from left</p>
</AnimatedSection>

// Stagger children
<AnimatedSection stagger staggerDelay={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedSection>

// Parallax effect
<AnimatedSection animation="parallax" parallaxSpeed={0.3}>
  <img src="background.jpg" alt="Background" />
</AnimatedSection>

// Reveal animation
<AnimatedSection 
  animation="reveal" 
  revealDirection="right" 
  revealDistance={80}
>
  <div>Content reveals from right</div>
</AnimatedSection>
```

**Props:**
- `animation`: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'parallax' | 'reveal' | 'custom'
- `delay`: Number (seconds)
- `stagger`: Boolean
- `staggerDelay`: Number (seconds)
- `parallaxSpeed`: Number (0-1)
- `revealDirection`: 'up' | 'down' | 'left' | 'right'
- `revealDistance`: Number (pixels)
- `className`: String

### SmoothScrollInit
Initializes smooth scrolling behavior for anchor links.

**Usage:**
```tsx
// Already included in root layout
<SmoothScrollInit />
```

### ScrollTriggerConfig
Configures ScrollTrigger defaults for optimal performance.

**Usage:**
```tsx
// Already included in root layout
<ScrollTriggerConfig />
```

## Animation Functions

### Core Animations

#### fadeInUp(element, delay)
Fades in element while sliding up from below.

#### fadeInLeft(element, delay)
Fades in element while sliding from left.

#### fadeInRight(element, delay)
Fades in element while sliding from right.

#### scaleIn(element, delay)
Fades in element with a scale effect.

#### staggerFadeIn(elements, stagger)
Animates multiple elements with a stagger delay.

#### parallaxEffect(element, speed)
Creates a parallax scrolling effect.

### Advanced Animations

#### revealOnScroll(element, options)
Optimized reveal animation with customizable direction and distance.

**Options:**
```typescript
{
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
}
```

#### batchAnimate(selector, animationProps, batchConfig)
Batch animate multiple elements for better performance.

**Example:**
```typescript
batchAnimate('.card', {
  opacity: 0,
  y: 60,
  duration: 0.8
}, {
  interval: 0.1,
  batchMax: 3
});
```

### Utility Functions

#### shouldReduceMotion()
Checks if user prefers reduced motion.

#### refreshScrollTriggers()
Refreshes all ScrollTrigger instances (useful after dynamic content changes).

#### killScrollTriggers()
Kills all ScrollTrigger instances (useful for cleanup).

#### configureScrollTriggerDefaults()
Configures ScrollTrigger with optimal defaults.

#### optimizeForPerformance()
Checks if device can handle animations smoothly.

## Smooth Scrolling

### smoothScrollTo(targetId, offset)
Smoothly scrolls to an element by ID.

**Example:**
```typescript
import { smoothScrollTo } from '@/lib/smooth-scroll';

smoothScrollTo('about-section', 80);
```

### scrollToTop()
Smoothly scrolls to the top of the page.

**Example:**
```typescript
import { scrollToTop } from '@/lib/smooth-scroll';

scrollToTop();
```

## CSS Utilities

### Animation Classes

```css
.animate-fade-in
.animate-slide-up
.animate-slide-down
.animate-slide-left
.animate-slide-right
.animate-scale-in
```

### Hover Effects

```css
.hover-lift        /* Lifts element on hover */
.hover-scale       /* Scales element on hover */
.hover-glow        /* Adds glow effect on hover */
.hover-brightness  /* Increases brightness on hover */
```

### Micro-interactions

```css
.ripple           /* Adds ripple effect on click */
```

## Performance Considerations

1. **Reduced Motion**: All animations respect `prefers-reduced-motion` setting
2. **Will-Change**: Automatically applied to animated elements for better performance
3. **Batch Animations**: Use `batchAnimate` for animating many elements
4. **ScrollTrigger Config**: Optimized to reduce recalculations
5. **Low-End Devices**: Animations can be disabled on low-end devices

## Accessibility

- All animations respect `prefers-reduced-motion: reduce`
- Focus states are clearly visible
- Keyboard navigation is fully supported
- ARIA attributes are used where appropriate

## Best Practices

1. **Use AnimatedSection for most cases**: It handles cleanup and optimization automatically
2. **Batch similar animations**: Use `batchAnimate` for multiple similar elements
3. **Avoid animating layout properties**: Stick to transform and opacity for best performance
4. **Test on low-end devices**: Ensure animations don't cause jank
5. **Keep animations subtle**: Don't overdo it - less is more

## Examples

### Hero Section with Stagger
```tsx
<AnimatedSection stagger staggerDelay={0.2}>
  <h1>Welcome to Devlyfi</h1>
  <p>Building the future of software</p>
  <Button>Get Started</Button>
</AnimatedSection>
```

### Card Grid with Batch Animation
```tsx
// In component
useEffect(() => {
  batchAnimate('.project-card', {
    opacity: 0,
    y: 60,
  }, {
    interval: 0.1,
    batchMax: 3,
  });
}, []);

return (
  <div className="grid">
    <div className="project-card">Project 1</div>
    <div className="project-card">Project 2</div>
    <div className="project-card">Project 3</div>
  </div>
);
```

### Parallax Background
```tsx
<AnimatedSection animation="parallax" parallaxSpeed={0.5}>
  <div className="hero-background">
    <img src="/hero-bg.jpg" alt="" />
  </div>
</AnimatedSection>
```

## Troubleshooting

### Animations not working
1. Check if `prefers-reduced-motion` is enabled
2. Verify GSAP and ScrollTrigger are properly imported
3. Check browser console for errors
4. Ensure elements are visible in viewport

### Performance issues
1. Reduce number of animated elements
2. Use `batchAnimate` for multiple elements
3. Check if device is low-end with `optimizeForPerformance()`
4. Simplify animation properties

### ScrollTrigger not triggering
1. Call `refreshScrollTriggers()` after dynamic content changes
2. Check start/end positions
3. Verify element is in DOM
4. Check if element has height/width

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Web Animations Best Practices](https://web.dev/animations/)
