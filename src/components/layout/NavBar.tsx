"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

type NavItemEl = HTMLDivElement | null;

const navContents = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/works" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  // { title: "Blog", link: "/blog" },
];

export default function NavBar() {
  const itemsRef = useRef<NavItemEl[]>([]);
  const [activeNav, setActiveNav] = useState<string>("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const elements = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    elements.forEach((item) => {
      const letters = item.querySelectorAll(".char");

      const onEnter = () => {
        gsap.killTweensOf(letters);

        // Animate out: characters move up and fade out
        gsap.to(letters, {
          y: -20,
          opacity: 0,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.in",
          onComplete: () => {
            // Reset position to bottom for entrance
            gsap.set(letters, { y: 20, opacity: 0 });
            
            // Animate in: characters move up from bottom with stagger
            gsap.to(letters, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: "power3.out",
            });
          }
        });
      };

      const onLeave = () => {
        gsap.killTweensOf(letters);
        
        // Smooth reset to original position
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);

      return () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  const splitChars = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block opacity-100">
        {char}
      </span>
    ));

  const handleNavClick = (link: string) => {
    setActiveNav(link);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="my-10 fixed top-0 left-0 right-0 z-50 ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-12 px-4 sm:px-6 lg:px-0">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center  gap-4 lg:gap-8 nav-bg h-full justify-center rounded-full">
          {navContents.map((item, index) => {
            const isActive = item.link === activeNav;
            return (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`relative group text-sm lg:text-base font-medium h-full flex items-center px-4 lg:px-8 rounded-full cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#EFF4FF] text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                }`}
                onClick={() => handleNavClick(item.link)}
              >
                {/* Dot - visible on hover AND when active */}
                <div
                  className={`absolute left-2 lg:left-3 w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-blue-800 transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Animated letters */}
                <div className="flex pl-0.5 lg:pl-1 overflow-hidden">
                  <Link href={item.link} className="flex">
                    {splitChars(item.title)}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col w-6 h-6 justify-center items-center space-y-1"
          onClick={toggleMobileMenu}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-blue-800 z-40 md:hidden pt-20">
            <div className="flex flex-col items-center space-y-8 px-6">
              {navContents.map((item, index) => {
                const isActive = item.link === activeNav;
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`w-full text-center text-lg font-medium py-4 rounded-2xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#EFF4FF] text-blue-800"
                        : "text-gray-900 hover:text-blue-800"
                    }`}
                    onClick={() => handleNavClick(item.link)}
                  >
                    <div className="flex items-center justify-center">
                      {/* Dot for mobile */}
                      <div
                        className={`w-2 h-2 rounded-full bg-blue-800 mr-3 transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {item.title}
                    </div>
                  </Link>
                );
              })}
              
              {/* Mobile Button */}
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-medium hover:bg-blue-700 transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}