'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { 
          label: 'Web Development', 
          href: '/services/web-development',
          description: 'Build modern, scalable web applications with cutting-edge technologies and frameworks.'
        },
        { 
          label: 'Mobile Apps', 
          href: '/services/mobile-apps',
          description: 'Create native iOS and Android apps that deliver exceptional user experiences.'
        },
        { 
          label: 'UI/UX Design', 
          href: '/services/ui-ux-design',
          description: 'Design beautiful, intuitive interfaces that users love and engage with daily.'
        },
        { 
          label: 'Cloud Solutions', 
          href: '/services/cloud-solutions',
          description: 'Deploy and manage scalable cloud infrastructure for your growing business needs.'
        },
        { 
          label: 'AI Integration', 
          href: '/services/ai-integration',
          description: 'Integrate artificial intelligence and machine learning into your products seamlessly.'
        },
        { 
          label: 'Consulting', 
          href: '/services/consulting',
          description: 'Get expert technical guidance and strategic planning for your digital projects.'
        },
      ]
    },
    { label: 'Works', href: '/works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <span className="font-bold text-3xl text-white">X</span>
            <span className="text-white font-bold text-xl">OBITZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.href}
                    className="relative group"
                  >
                    <button 
                      className="text-white hover:text-gray-300 font-medium flex items-center gap-1"
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
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
                          <div className="grid grid-cols-2 gap-3">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="group/item p-4 rounded-xl hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all"
                              >
                                <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors flex items-center justify-between mb-1">
                                  {dropdownItem.label}
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {dropdownItem.description}
                                </p>
                              </Link>
                            ))}
                            
                            {/* View All Products as last grid item */}
                            <Link
                              href="/services"
                              className="group/item p-4 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-900 transition-all flex items-center justify-center"
                            >
                              <div className="font-semibold text-white flex items-center gap-2">
                                VIEW ALL PRODUCTS
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </Link>
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
                  className="text-white hover:text-gray-300 font-medium"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Free Consultation Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 inline-flex items-center gap-2"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-white block h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-white block h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-white/10 rounded-md"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-md"
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
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Mobile Free Consultation Button */}
            <div className="mt-4 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
