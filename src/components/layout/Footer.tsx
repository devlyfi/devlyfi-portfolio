'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyInfo } from '@/lib/data/dummy';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const quickLinksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { label: 'Who We Are', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  const socialIcons = [
    { icon: 'linkedin', url: companyInfo.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: 'twitter', url: companyInfo.socialMedia.twitter, label: 'Twitter' },
    { icon: 'github', url: companyInfo.socialMedia.github, label: 'Github' },
    { icon: 'instagram', url: companyInfo.socialMedia.instagram, label: 'Instagram' },
  ];

  /* --------------------------------------------------------------
     GSAP ANIMATIONS – ONE MASTER TIMELINE
     -------------------------------------------------------------- */
  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Tagline
      if (taglineRef.current) {
        tl.from(taglineRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        }, 0);
      }

      // 2. Social icons – staggered
      if (socialRef.current) {
        const icons = socialRef.current.querySelectorAll('a');
        tl.from(icons, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.12,
        }, '-=0.7');
      }

      // 3. Quick links – staggered
      if (quickLinksRef.current) {
        const links = quickLinksRef.current.querySelectorAll('li');
        tl.from(links, {
          opacity: 0,
          x: -40,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        }, '-=0.6');
      }

      // 4. Contact section – staggered
      if (contactRef.current) {
        const items = contactRef.current.querySelectorAll('div > *');
        tl.from(items, {
          opacity: 0,
          x: 40,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        }, '-=0.6');
      }

      // 5. Massive logo
      if (logoRef.current) {
        tl.from(logoRef.current, {
          opacity: 0,
          scale: 0.85,
          duration: 1.3,
          ease: 'power4.out',
        }, '-=0.5');
      }

      // 6. Legal section – visible & staggered
      if (legalRef.current) {
        const items = legalRef.current.children;
        tl.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
        }, '-=0.8');
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* --------------------------------------------------------------
     SOCIAL ICON SVGs
     -------------------------------------------------------------- */
  const getSocialIcon = (icon: string) => {
    const icons: Record<string, React.ReactElement> = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    };
    return icons[icon] || null;
  };

  /* --------------------------------------------------------------
     JSX
     -------------------------------------------------------------- */
  return (
    <footer ref={footerRef} className="relative bg-black overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/25 via-blue-950/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-950/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* LEFT – Tagline & Social */}
          <div className="space-y-8">
            <h2
              ref={taglineRef}
              className="text-4xl md:text-5xl font-semibold font-serif italic text-white leading-tight"
            >
              Helping businesses scale & grow.
            </h2>

            <div ref={socialRef} className="flex items-center gap-3">
              {socialIcons.map(({ icon, url, label }) =>
                url ? (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-blue-400 flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    aria-label={`Visit our ${label} page`}
                  >
                    {getSocialIcon(icon)}
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* MIDDLE – Quick Links */}
          <div ref={quickLinksRef}>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Quick links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT – Contact */}
          <div ref={contactRef}>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Contact
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition-colors">
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                  {companyInfo.phone}
                </a>
              </p>
              <p className="text-sm leading-relaxed">{companyInfo.address}</p>
            </div>
          </div>
        </div>

        {/* BOTTOM – Logo + Legal */}
        <div className= "pt-12 border-t border-gray-800/50">
          <div className="relative overflow-hidden">
            {/* Massive Logo */}
            <div className="relative">
              <h1
                ref={logoRef}
                className="text-[12vw] sm:text-[14vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] font-black leading-none tracking-wide uppercase"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  color: '#00010E',
                  WebkitTextStroke: '2px rgba(3, 84, 196, 0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                DEVLYFI
              </h1>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Legal – now fully visible & animated */}
            <div
              ref={legalRef}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10"
            >
              <p className="text-sm text-gray-200">
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/terms"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}