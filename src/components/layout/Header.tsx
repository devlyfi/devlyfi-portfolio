"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import AnimatedButton from "../shared/AnimatedButton";
import { gsap } from "gsap";

// Separate component for dropdown navigation item card
interface DropdownNavItemProps {
  label: string;
  href: string;
  description: string;
}

const DropdownNavItem = ({
  label,
  href,
  description,
}: DropdownNavItemProps) => {
  const overlayRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const titleEl = titleRef.current;
    const descEl = descRef.current;
    const arrowEl = arrowRef.current;
    const card = cardRef.current;

    if (!overlay || !titleEl || !descEl || !arrowEl || !card) return;

    let enterAnim: gsap.core.Tween;
    let leaveAnim: gsap.core.Tween;

    const handleMouseEnter = () => {
      // Kill any running leave animation
      leaveAnim?.kill();

      // Set text and arrow to white instantly
      gsap.set([titleEl, descEl, arrowEl], { color: "#ffffff" });

      // Start enter animation
      enterAnim = gsap.fromTo(
        overlay,
        {
          clipPath: "circle(0% at 50% 0%)",
          backgroundColor: "#121315",
        },
        {
          clipPath: "circle(150% at 50% 0%)",
          duration: 2,
          ease: "power3.out",
          backgroundColor: "#121315",
        }
      );
    };

    const handleMouseLeave = () => {
      // Kill any running enter animation
      enterAnim?.kill();

      // Start leave animation immediately
      leaveAnim = gsap.fromTo(
        overlay,
        {
          clipPath: "circle(150% at 50% 0%)",
          backgroundColor: "#000000",
        },
        {
          clipPath: "circle(0% at 50% 100%)",
          duration: 1.0,
          ease: "power2.in",
          onStart: () => {
            // Keep text white during the animation
            gsap.set([titleEl, descEl, arrowEl], { color: "#ffffff" });
          },
          onComplete: () => {
            // Revert text colors only after animation completes
            gsap.set([titleEl, descEl, arrowEl], { color: "" });
          },
        }
      );
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group/item relative p-5 rounded-2xl border border-gray-200  transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl"
    >
      {/* Circular overlay */}
      <span
        ref={overlayRef}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          clipPath: "circle(0% at 50% 0%)",
          backgroundColor: "#000000",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="font-semibold text-gray-900 transition-colors duration-300 flex items-center justify-between mb-2">
          <span ref={titleRef}>{label}</span>
          <ArrowRight
            ref={arrowRef}
            className="w-4 h-4 transition-all duration-300"
          />
        </div>
        <p
          ref={descRef}
          className="text-sm text-gray-600 leading-relaxed transition-colors duration-300"
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Web Development",
          href: "/services/web-development",
          description:
            "Build modern, scalable web applications with cutting-edge technologies and frameworks.",
        },
        {
          label: "Mobile Apps",
          href: "/services/mobile-apps",
          description:
            "Create native iOS and Android apps that deliver exceptional user experiences.",
        },
        {
          label: "UI/UX Design",
          href: "/services/ui-ux-design",
          description:
            "Design beautiful, intuitive interfaces that users love and engage with daily.",
        },
        {
          label: "Cloud Solutions",
          href: "/services/cloud-solutions",
          description:
            "Deploy and manage scalable cloud infrastructure for your growing business needs.",
        },
        {
          label: "AI Integration",
          href: "/services/ai-integration",
          description:
            "Integrate artificial intelligence and machine learning into your products seamlessly.",
        },
        {
          label: "Consulting",
          href: "/services/consulting",
          description:
            "Get expert technical guidance and strategic planning for your digital projects.",
        },
      ],
    },
    { label: "Works", href: "/works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Only apply GSAP animation for large screens (lg and above)
    const isLargeScreen = window.innerWidth >= 1024;

    if (isLargeScreen) {
      // Set initial full-width transparent state for large screens
      gsap.set(nav, {
        width: "100vw",
        height: "80px",
        borderRadius: 0,
        left: "50%",
        xPercent: -50,
        padding: "0 2rem",
        backgroundColor: "rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
      });

      const handleScroll = () => {
        const shouldShrink = window.scrollY > 50;
        if (shouldShrink === scrolled) return; // avoid duplicate runs
        setScrolled(shouldShrink);

        if (shouldShrink) {
          // Shrink to centered with background - single smooth animation
          gsap.to(nav, {
            width: "64vw",
            height: "60px",
            padding: "0 1.5rem",
            backgroundColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          // Expand to full width with transparent background - single smooth animation
          gsap.to(nav, {
            width: "100vw",
            height: "80px",
            padding: "0 2rem",
            backgroundColor: "rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            border: "1px solid rgba(0, 0, 0, 0)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0)",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // For small and medium screens, set full width always
      gsap.set(nav, {
        width: "100vw",
        height: "80px",
        borderRadius: 0,
        left: "50%",
        xPercent: -50,
        padding: "0 1rem",
        backgroundColor: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      });
    }
  }, [scrolled]);

  // Handle resize to update animation for different screen sizes
  useEffect(() => {
    const handleResize = () => {
      const nav = navRef.current;
      if (!nav) return;

      const isLargeScreen = window.innerWidth >= 1024;

      if (!isLargeScreen) {
        // For small and medium screens, ensure full width with background
        gsap.set(nav, {
          width: "100vw",
          height: "80px",
          borderRadius: 0,
          left: "50%",
          xPercent: -50,
          padding: "0 1rem",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        });
      } else {
        // For large screens, reset to initial transparent state
        if (!scrolled) {
          gsap.set(nav, {
            width: "100vw",
            height: "80px",
            borderRadius: 0,
            left: "50%",
            xPercent: -50,
            padding: "0 2rem",
            backgroundColor: "rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            border: "1px solid rgba(0, 0, 0, 0)",
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrolled]);

  return (
    <nav
      ref={navRef}
      className="fixed md:top-5 left-1/2 -translate-x-1/2 z-50 container md:rounded-full! font-custom-primary bg-transparent"
    >
      <div className="flex items-center justify-between h-full w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="font-bold text-3xl text-white">D</span>
          <span className="text-white font-bold text-xl">EVLYFI</span>
        </Link>

        {/* Desktop Navigation - hidden on medium and small screens */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.href} className="relative group">
                  <button
                    className="text-white hover:text-gray-300 text-sm font-medium flex items-center gap-1"
                    onMouseEnter={() => setIsServicesOpen(true)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown with hover bridge */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Invisible bridge to prevent flickering */}
                    <div className="h-2 w-full absolute top-0 left-0" />

                    {isServicesOpen && (
                      <div className="w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                        <div className="grid grid-cols-2 gap-0.5">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <DropdownNavItem
                              key={dropdownItem.href}
                              label={dropdownItem.label}
                              href={dropdownItem.href}
                              description={dropdownItem.description}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 text-sm font-medium"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Free Consultation Button - hidden on medium and small screens */}
        <div className="hidden lg:block">
          <AnimatedButton />
        </div>

        {/* Mobile Menu Button - shown on medium and small screens */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - shown on medium and small screens */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-b-lg">
          {menuItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.href}>
                  <button
                    onClick={() =>
                      setIsMobileServicesOpen(!isMobileServicesOpen)
                    }
                    className="w-full flex items-center justify-between px-3 py-2 text-white  hover:bg-white/10 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="pl-4 mt-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-300  hover:bg-white/10 rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-white  hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Free Consultation Button */}
          <div className="my-5 w-1/2 mx-auto">
            <AnimatedButton></AnimatedButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
