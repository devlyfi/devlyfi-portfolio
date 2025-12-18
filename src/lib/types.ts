// Type definitions for the Devlyfi portfolio website

import { StaticImageData } from "next/image";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

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

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  video?: string;
  icon: string;
  features: string[];
  cover: StaticImageData;
  color?: string;
  bgColor?: string;
  process?: {
    id: number;
    title: string;
    description: string;
    tasks: string[];
    icon: StaticImageData;
  }[];
  featureImages?: string[]; // Images for bento grid cards at index 0 and 2
}

export interface Work {
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

export interface BlogPost {
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
  readTime: number;
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

// Team Member Interface
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// FAQ Item Interface
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// About Page Data Interface
export interface AboutPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  images: string[];
  mission: string;
  vision: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  team: {
    founder: TeamMember;
    members: TeamMember[];
  };
  milestones: Array<{
    year: number;
    title: string;
    description: string;
  }>;
  faq: FAQItem[];
}

// Contact Page Data Interface
export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  profileCard: {
    name: string;
    role: string;
    image: string;
    phone: string;
    bookingLink?: string;
  };
  businessHours: {
    weekdays: string;
    weekend: string;
  };
  faq: FAQItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component Props Types

export interface HeaderProps {
  transparent?: boolean;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface ServicesPreviewProps {
  services: Service[];
  maxDisplay?: number;
}

export interface WorksPreviewProps {
  works: Work[];
  maxDisplay?: number;
}

export interface ServiceCardProps {
  service: Service;
  variant?: "preview" | "full";
}

export interface ProjectCardProps {
  project: Work;
  variant?: "grid" | "featured";
}

export interface BlogCardProps {
  post: BlogPost;
  variant?: "grid" | "list";
}

export interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  threshold?: number;
}

export interface ServiceDetailProps {
  service: Service;
}

export interface WorkDetailProps {
  work: Work;
}

export interface BlogDetailProps {
  post: BlogPost;
}
