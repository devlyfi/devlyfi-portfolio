/**
 * Smooth scroll utility for anchor links
 * Provides smooth scrolling behavior with offset for fixed headers
 */

/**
 * Smooth scroll to an element by ID
 * @param targetId - The ID of the target element (without #)
 * @param offset - Offset from the top in pixels (default: 80 for header)
 */
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const element = document.getElementById(targetId);
  
  if (!element) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Initialize smooth scroll for all anchor links on the page
 * Automatically handles links with href="#something"
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return;

  // Handle all anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    // Prevent default behavior
    e.preventDefault();

    // Get the target ID (remove the #)
    const targetId = href.substring(1);
    
    // Smooth scroll to the target
    smoothScrollTo(targetId);

    // Update URL without jumping
    if (history.pushState) {
      history.pushState(null, '', href);
    }
  });
}

/**
 * Scroll to top of page smoothly
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
