'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { navigation, companyInfo, services } from '@/lib/data/dummy';
import { HeaderProps } from '@/lib/types';

export default function Header({ transparent = false }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Increased delay to 300ms for better UX
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Set initial full-width transparent state
    gsap.set(nav, {
      width: '100vw',
      height: '80px',
      borderRadius: 0,
      left: '50%',
      xPercent: -50,
      paddingLeft: '2rem',
      paddingRight: '2rem',
      backgroundColor: transparent ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.9)',
      backdropFilter: transparent ? 'blur(0px)' : 'blur(10px)',
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const shouldShrink = currentScroll > 50;
      const isLargeScreen = window.innerWidth >= 768; // md breakpoint

      setScrolled(shouldShrink)
      // Only apply shrinking animation on large screens (desktop)
      if (isLargeScreen) {
        if (shouldShrink) {
          // Shrink to centered with background - single smooth animation
          gsap.to(nav, {
            width: '90vw',
            maxWidth: '80rem', // 7xl
            height: '70px',
            borderRadius: '9999px',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            duration: 0.5,
            ease: 'power2.out',
          });
        } else {
          // Expand to full width with transparent background - single smooth animation
          gsap.to(nav, {
            width: '100vw',
            height: '80px',
            borderRadius: 0,
            paddingLeft: '2rem',
            paddingRight: '2rem',
            backgroundColor: transparent ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.9)',
            backdropFilter: transparent ? 'blur(0px)' : 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0)',
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      } else {
        // On mobile, maintain consistent styling regardless of scroll
        gsap.set(nav, {
          width: '100vw',
          height: '80px',
          borderRadius: 0,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          backgroundColor: shouldShrink ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.9)',
          backdropFilter: shouldShrink ? 'blur(10px)' : 'blur(0px)',
          border: shouldShrink ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0)',
          boxShadow: shouldShrink ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0)',
        });
      }
    };

    const handleResize = () => {
      // Reset navigation styles when screen size changes
      const isLargeScreen = window.innerWidth >= 768;
      const shouldShrink = window.scrollY > 50;

      if (!isLargeScreen) {
        // Reset to mobile styles
        gsap.set(nav, {
          width: '100vw',
          height: '80px',
          borderRadius: 0,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          backgroundColor: shouldShrink ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.9)',
          backdropFilter: shouldShrink ? 'blur(10px)' : 'blur(0px)',
          border: shouldShrink ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0)',
          boxShadow: shouldShrink ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0)',
        });
      } else {
        // Trigger scroll handler to apply correct desktop styles
        handleScroll();
      }
    };

    // Run initial scroll handler
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [transparent]); // Removed scrolled from dependencies

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Animate dropdown
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    if (isServicesOpen) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -10, display: 'none' },
        { opacity: 1, y: 0, display: 'block', duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(dropdown, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(dropdown, { display: 'none' });
        },
      });
    }
  }, [isServicesOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 md:top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center justify-between h-full w-full relative">
        {/* Logo */}
        <div className="flex items-center z-10 flex-shrink-0">
          <Link
            href="/"
            className="text-xl md:text-2xl font-heading font-bold text-primary hover:text-primary-600 transition-colors"
          >
            {companyInfo.name}
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {navigation.mainNav.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown with bridge area */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {/* Invisible bridge to prevent flicker */}
                    <div className="h-2 w-full absolute top-0 left-0" />
                    
                    <div
                      ref={dropdownRef}
                      className="w-[650px] bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 hidden"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                          >
                            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                              {service.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-primary hover:text-primary-600 transition-colors inline-flex items-center gap-2"
                        >
                          View All Services
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Free Consultation Button - Far right */}
        <div className="hidden md:block ml-auto z-10 flex-shrink-0">
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 whitespace-nowrap"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden ml-auto text-foreground p-2 z-10"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl mt-2">
          {navigation.mainNav.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isMobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pt-2 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Free Consultation Button - Mobile */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-all duration-300"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}