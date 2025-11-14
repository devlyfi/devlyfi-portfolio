# Implementation Plan: Services Preview Section Redesign

- [ ] 1. Create enhanced ServiceCard component with new visual design
  - Create new ServiceCard component file with TypeScript interfaces for props
  - Implement base card structure with rounded-2xl corners, gradient border, and backdrop blur
  - Add gradient overlay layer with configurable colors per service
  - Implement larger icon container (64px × 64px) with gradient background and shadow
  - Style content layer with improved typography (text-2xl title, better spacing)
  - Add technology badge display with horizontal layout and max 6 visible badges
  - _Requirements: 1.1, 1.3, 1.4, 5.3, 5.4_

- [ ] 2. Implement interactive hover overlay system
  - Create hover overlay component with full card coverage and glassmorphism effect
  - Implement translateY animation (100% to 0) with 400ms ease-out transition
  - Add extended description display in overlay with proper typography
  - Display full technology list in overlay with improved badge layout
  - Add "Learn More" CTA button in overlay with primary styling
  - Implement backdrop-filter blur effect with fallback for unsupported browsers
  - _Requirements: 1.2, 5.2, 5.5_

- [ ] 3. Add interactive states and animations to ServiceCard
  - Implement default state styling (scale: 1, shadow-md, border-border)
  - Add hover state with scale: 1.03, shadow-2xl, and border-primary/40
  - Implement focus state with ring-2 ring-primary for keyboard navigation
  - Add active state with scale: 0.98 press effect
  - Create icon animation (rotation or scale) on card hover
  - Implement smooth transitions for all state changes (300-400ms)
  - _Requirements: 1.2, 1.4, 3.1, 4.2_

- [ ] 4. Create TechnologyBadge component
  - Create reusable TechnologyBadge component with TypeScript interface
  - Implement pill-shaped design with rounded-full and backdrop-blur
  - Style with bg-primary/10, text-xs, and appropriate padding
  - Add hover effect with scale: 1.05 transition
  - Create variant support (primary, secondary, accent)
  - Implement "+X more" indicator badge for overflow technologies
  - _Requirements: 5.3, 5.4_

- [ ] 5. Redesign ServicesPreview container component
  - Update ServicesPreview component with enhanced TypeScript interfaces
  - Implement larger section padding (py-24) and improved spacing
  - Create enhanced section header with gradient text effect
  - Update grid layout with proper responsive breakpoints (1→2→3 columns)
  - Increase gap between cards to gap-8 for better breathing room
  - Add subtle background gradient (bg-gradient-to-br from-background via-muted/20)
  - _Requirements: 1.5, 2.2, 2.3, 2.4, 7.1, 7.2_

- [ ] 6. Implement GSAP stagger animations for card entrance
  - Import and configure GSAP for card entrance animations
  - Implement Intersection Observer to trigger animations when section enters viewport
  - Create staggered fade-in animation with 0.15s delay between cards
  - Add animation configuration with duration: 0.6s and ease-out easing
  - Implement cleanup function to kill animations on component unmount
  - Ensure animations respect existing shouldReduceMotion utility
  - _Requirements: 4.1, 4.3, 4.4_

- [ ] 7. Add reduced motion support and accessibility features
  - Detect prefers-reduced-motion media query using existing utility
  - Disable all animations when reduced motion is preferred
  - Ensure all interactive elements are keyboard accessible (Tab, Enter, Space)
  - Add proper ARIA labels and semantic HTML structure
  - Implement visible focus indicators for keyboard navigation
  - Verify color contrast ratios meet WCAG AA standards
  - _Requirements: 3.2, 3.3, 3.4, 4.4_

- [ ] 8. Implement responsive design for mobile and tablet
  - Configure single-column layout for mobile (< 768px)
  - Implement two-column grid for tablet (768px - 1024px)
  - Ensure three-column grid for desktop (> 1024px)
  - Add touch-friendly interactions for mobile devices (tap to expand overlay)
  - Adjust card heights and padding for smaller screens
  - Test and optimize technology badge wrapping on mobile
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 9. Optimize performance with lazy loading and code splitting
  - Implement lazy loading for service card images and icons
  - Add Intersection Observer for viewport-based rendering
  - Optimize GSAP imports with dynamic loading
  - Use CSS containment for card components
  - Implement will-change hints for animated properties
  - Minimize layout shifts during content loading (CLS optimization)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 10. Integrate with existing data structure and ensure maintainability
  - Update component to consume servicesData from dummy.ts
  - Implement maxDisplay prop with default value of 6
  - Add variant prop support (default, compact, featured)
  - Ensure ServiceCard is reusable across different pages
  - Add proper TypeScript types for all props and data structures
  - Document component props and usage in code comments
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 11. Add error handling and graceful degradation
  - Implement fallback icon display when service icon fails to load
  - Add skeleton loader for loading states
  - Create error boundary for component failures
  - Implement backdrop-filter fallback for unsupported browsers
  - Add gradient fallback to solid colors for older browsers
  - Handle missing or incomplete service data gracefully
  - _Requirements: 1.1, 6.4_

- [ ] 12. Update homepage to use redesigned ServicesPreview component
  - Import redesigned ServicesPreview component in homepage
  - Pass servicesData from dummy.ts to component
  - Configure maxDisplay prop to show 6 services
  - Verify component renders correctly in homepage context
  - Test navigation to service detail pages
  - Ensure "View All Services" button works correctly
  - _Requirements: 5.5, 7.1_

- [ ]* 13. Create visual regression tests and accessibility tests
  - Write snapshot tests for ServiceCard in all states (default, hover, focus)
  - Test responsive breakpoints (mobile, tablet, desktop)
  - Verify keyboard navigation functionality
  - Test screen reader compatibility with ARIA labels
  - Verify color contrast ratios with automated tools
  - Test reduced motion preference handling
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ]* 14. Performance testing and optimization validation
  - Measure First Contentful Paint (FCP) impact
  - Check Cumulative Layout Shift (CLS) scores
  - Verify animation frame rates (target 60fps)
  - Test with throttled CPU and network conditions
  - Validate lazy loading behavior
  - Measure component render time and optimize if needed
  - _Requirements: 6.1, 6.2, 6.5_
