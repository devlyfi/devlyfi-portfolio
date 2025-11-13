import Link from 'next/link';
import { Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
import { navigation, companyInfo } from '@/lib/data/dummy';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    facebook: Facebook,
    instagram: Instagram,
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-gray-600">{companyInfo.tagline}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{companyInfo.email}</p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.address}</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {navigation.footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {navigation.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {navigation.footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-6 py-6 border-t border-gray-200">
          {Object.entries(companyInfo.socialMedia).map(([platform, url]) => {
            if (!url) return null;
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label={`Visit our ${platform} page`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright and Legal */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
