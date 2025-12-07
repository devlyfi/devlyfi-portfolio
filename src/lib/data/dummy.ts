import {
  CompanyInfo,
  NavigationData,
  HomePageData,
  AboutPageData,
  ContactPageData,
  Service,
  Work,
  BlogPost,
  FAQItem,
} from "../types";

// Company Information
export const companyInfo: CompanyInfo = {
  name: "Devlyfi",
  tagline: "Transforming Ideas into Digital Reality",
  description:
    "Devlyfi is a leading software development company specializing in cutting-edge web and mobile applications. We combine innovative technology with creative design to deliver exceptional digital experiences that drive business growth.",
  email: "contact@devlyfi.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, San Francisco, CA 94105",
  socialMedia: {
    linkedin: "https://linkedin.com/company/devlyfi",
    twitter: "https://twitter.com/devlyfi",
    github: "https://github.com/devlyfi",
    facebook: "https://facebook.com/devlyfi",
    instagram: "https://instagram.com/devlyfi",
  },
};

// Navigation Data
export const navigation: NavigationData = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Works", href: "/works" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/works" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

// Home Page Data
export const homePageData: HomePageData = {
  hero: {
    title: "Building Digital Excellence",
    subtitle:
      "We craft innovative software solutions that transform businesses and delight users",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
  },
  about: {
    title: "Why Choose Devlyfi",
    description:
      "With over a decade of experience in software development, we bring together talented developers, designers, and strategists to create digital products that make a difference. Our commitment to quality, innovation, and client success sets us apart.",
    stats: [
      { label: "Projects Completed", value: "200+" },
      { label: "Happy Clients", value: "150+" },
      { label: "Team Members", value: "50+" },
      { label: "Years of Experience", value: "10+" },
    ],
  },
};

// About Page Data
export const aboutPageData: AboutPageData = {
  hero: {
    title: "Building Digital Excellence with Integrity",
    subtitle:
      "We're a team of passionate developers, designers, and strategists committed to transforming your vision into reality through transparent collaboration and cutting-edge technology.",
  },

  images: [
    "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvim.5c77518f.jpg&w=1080&q=75",
    "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvim.5c77518f.jpg&w=1080&q=75",
    "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvim.5c77518f.jpg&w=1080&q=75",
    "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvim.5c77518f.jpg&w=1080&q=75",
  ],

  mission:
    "To build a transparent, trustworthy, and human-centered technology partner that guides businesses from idea to execution — with honesty, clarity, and real expertise.",

  vision:
    "To create a world where every client, technical or not, can build digital products confidently without being misled, overcharged, or overpromised.",

  values: [
    {
      title: "Transparency",
      description:
        "We communicate openly, set realistic expectations, and commit only when success is achievable.",
      icon: "eye",
    },
    {
      title: "Integrity",
      description:
        "We treat every client with honesty, fairness, and respect — always choosing long-term trust over short-term profit.",
      icon: "shield",
    },
    {
      title: "Guidance",
      description:
        "We help clients understand technology, make the right decisions, and avoid costly mistakes.",
      icon: "compass",
    },
    {
      title: "Collaboration",
      description:
        "We work as one team with our clients, blending their vision with our expertise.",
      icon: "users",
    },
    {
      title: "Excellence",
      description:
        "We deliver polished, reliable, and user-friendly solutions that create real business value.",
      icon: "star",
    },
    {
      title: "Innovation",
      description:
        "We continuously explore modern tools and approaches to future-proof our clients' products.",
      icon: "lightbulb",
    },
  ],

  team: {
    founder: {
      name: "John Anderson",
      role: "Founder & CEO",
      image: "/images/team/founder.jpg",
      bio: "With over 15 years of experience in software development and a passion for building transparent client relationships, John founded Devlyfi to create a technology partner that businesses can truly trust.",
      social: {
        linkedin: "https://linkedin.com/in/johnanderson",
        twitter: "https://twitter.com/johnanderson",
        github: "https://github.com/johnanderson",
      },
    },
    members: [
      {
        name: "Sarah Mitchell",
        role: "Lead Developer",
        image: "/images/team/sarah.jpg",
        bio: "Full-stack developer specializing in React and Node.js with a focus on scalable architecture.",
        social: {
          linkedin: "https://linkedin.com/in/sarahmitchell",
          github: "https://github.com/sarahmitchell",
        },
      },
      {
        name: "Michael Chen",
        role: "UI/UX Designer",
        image: "/images/team/michael.jpg",
        bio: "Creative designer passionate about crafting intuitive user experiences that delight and engage.",
        social: {
          linkedin: "https://linkedin.com/in/michaelchen",
          twitter: "https://twitter.com/michaelchen",
        },
      },
      {
        name: "Emily Rodriguez",
        role: "Project Manager",
        image: "/images/team/emily.jpg",
        bio: "Experienced PM ensuring projects are delivered on time with clear communication and quality.",
        social: {
          linkedin: "https://linkedin.com/in/emilyrodriguez",
        },
      },
      {
        name: "David Kim",
        role: "Mobile Developer",
        image: "/images/team/david.jpg",
        bio: "React Native specialist building high-performance mobile apps for iOS and Android.",
        social: {
          linkedin: "https://linkedin.com/in/davidkim",
          github: "https://github.com/davidkim",
        },
      },
    ],
  },

  milestones: [
    {
      year: 2023,
      title: "The Beginning",
      description:
        "Founded Devlyfi after witnessing clients being misled in the marketplace. Determined to create a transparent alternative.",
    },
    {
      year: 2023,
      title: "First Local Clients",
      description:
        "Started working with local businesses, helping them build and scale digital products with honest guidance.",
    },
    {
      year: 2024,
      title: "International Expansion",
      description:
        "Collaborated with foreign clients and refined our development and product strategies.",
    },
    {
      year: 2024,
      title: "26+ Projects Completed",
      description:
        "Successfully delivered over 26 projects with a 98.5% success rate across 20+ clients.",
    },
    {
      year: 2025,
      title: "Growing Stronger",
      description:
        "Expanding our team, improving processes, and building a platform centered around client empowerment.",
    },
  ],

  faq: [
    {
      id: "about-1",
      question: "What makes Devlyfi different from other development agencies?",
      answer:
        "We prioritize transparency, honest communication, and realistic expectations. We never overpromise, and we guide clients through every decision with clear explanations of trade-offs and options.",
    },
    {
      id: "about-2",
      question: "What is your company culture like?",
      answer:
        "Our culture is built on collaboration, continuous learning, and mutual respect. We believe in work-life balance and creating an environment where creativity and innovation thrive.",
    },
    {
      id: "about-3",
      question: "Do you work with startups or only established businesses?",
      answer:
        "We work with both! We've helped startups launch their MVPs and assisted established businesses in scaling their digital products. Our approach adapts to your stage and needs.",
    },
    {
      id: "about-4",
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web and mobile technologies including Next.js, React, React Native, Node.js, TypeScript, and cloud platforms like AWS. We choose the right tech stack based on your specific requirements.",
    },
    {
      id: "about-5",
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback loops. Quality is built into every stage of our process.",
    },
  ],
};

// Contact Page Data
export const contactPageData: ContactPageData = {
  hero: {
    title: "Let's Build Something Amazing Together",
    subtitle:
      "Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help bring your vision to life.",
  },

  contactInfo: {
    email: "contact@devlyfi.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94105",
  },

  profileCard: {
    name: "John Anderson",
    role: "Founder & CEO",
    image: "/images/team/founder.jpg",
    phone: "+1 (555) 123-4567",
    bookingLink: "https://calendly.com/devlyfi/consultation",
  },

  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    weekend: "Saturday - Sunday: Closed",
  },

  faq: [
    {
      id: "contact-1",
      question: "What's the best way to get started?",
      answer:
        "Simply fill out the contact form or schedule a call with us. We'll discuss your project requirements, timeline, and budget to determine if we're a good fit.",
    },
    {
      id: "contact-2",
      question: "How quickly can you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call us directly.",
    },
    {
      id: "contact-3",
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer a free 30-minute consultation to discuss your project and provide initial recommendations.",
    },
    {
      id: "contact-4",
      question: "What information should I prepare before contacting you?",
      answer:
        "Having a clear idea of your project goals, target audience, timeline, and budget helps us provide more accurate guidance. However, we're happy to help you refine these details during our consultation.",
    },
    {
      id: "contact-5",
      question: "Can you work with clients in different time zones?",
      answer:
        "Absolutely! We have experience working with clients globally and can adjust our communication schedule to accommodate different time zones.",
    },
  ],
};

// Services Data (keeping original structure for compatibility)
export const services: Service[] = [
  {
    id: "1",
    slug: "web-development",
    title: "Web Development",
    description:
      "Build powerful, scalable web applications with modern frameworks and best practices.",
    icon: "code",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Performance optimization",
      "Responsive web design",
    ],
    featureImages: [
      "/images/services/web-dev-hero.jpg",
      "/images/services/web-dev-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvim.5c77518f.jpg&w=1080&q=75",
    process: [
      "Discovery Phase: Understanding your vision and goals | We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
      "Design Architecture: Planning the blueprint | Our team creates detailed wireframes, interactive mockups, and clickable prototypes to visualize the complete user experience.",
      "Agile Development: Building with precision | Using agile methodology, we develop your application in iterative two-week sprints with continuous integration.",
      "Quality Assurance: Ensuring perfection | Comprehensive testing strategy including automated unit tests, integration tests, performance testing, and security audits.",
      "Production Launch: Going live seamlessly | We deploy your application to production with zero downtime using blue-green deployment strategies.",
      "Ongoing Support: Continuous improvement | Post-launch maintenance includes 24/7 monitoring, regular security updates, and performance optimization.",
    ],
    color: "#F9D1E6",
    bgColor: "rgba(250, 225, 238, 1)",
  },
  {
    id: "2",
    slug: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Create engaging native and cross-platform mobile applications for iOS and Android.",
    icon: "smartphone",
    features: [
      "Native iOS and Android development",
      "Cross-platform development (React Native, Flutter)",
      "Mobile UI/UX design",
      "App Store optimization",
      "Push notifications and real-time features",
      "Offline functionality",
      "In-app purchases and monetization",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewdopegood.2c4b50f7.jpg&w=1080&q=75",
    featureImages: [
      "/images/services/mobile-hero.jpg",
      "/images/services/mobile-feature.jpg",
    ],
    process: [
      "Market Research: Understanding your audience | We conduct comprehensive market analysis, competitor research, and user persona development.",
      "Interactive Prototype: Validating the concept | Creating high-fidelity interactive prototypes and detailed user flow diagrams.",
      "Native Development: Building with excellence | Developing native or cross-platform applications with clean architecture.",
      "Device Testing: Ensuring compatibility | Rigorous testing across multiple devices, screen sizes, and OS versions.",
      "Store Launch: Maximizing visibility | Complete app store optimization including compelling descriptions and screenshots.",
      "Continuous Evolution: Growing with users | Post-launch monitoring, crash analytics, and regular feature updates.",
    ],
    color: "#CDD1FF",
    bgColor: "rgba(224, 240, 255, 1)",
  },
  {
    id: "3",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Leverage cloud infrastructure for scalable, reliable, and cost-effective solutions.",
    icon: "cloud",
    features: [
      "Cloud architecture design",
      "AWS, Azure, and Google Cloud services",
      "Serverless applications",
      "Database management and optimization",
      "DevOps and CI/CD pipelines",
      "Cloud migration services",
      "Multi-cloud and hybrid solutions",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fam-arc.e31e094e.jpg&w=1080&q=75",
    featureImages: [
      "/images/services/cloud-hero.jpg",
      "/images/services/cloud-feature.jpg",
    ],
    process: [
      "Infrastructure Assessment: Evaluating current state | We thoroughly evaluate your existing infrastructure and identify optimization opportunities.",
      "Migration Strategy: Planning the journey | Developing a comprehensive cloud migration roadmap with detailed cost projections.",
      "Data Migration: Moving seamlessly | Executing carefully planned data migration with zero downtime.",
      "Cloud Implementation: Building infrastructure | Setting up secure cloud infrastructure with proper network configuration.",
      "Performance Optimization: Maximizing efficiency | Fine-tuning cloud resources and implementing auto-scaling policies.",
      "Ongoing Management: Maintaining excellence | Continuous monitoring, proactive security updates, and cost optimization.",
    ],
    color: "#FFE4D2",
    bgColor: "rgba(255, 237, 224, 1)",
  },
  {
    id: "4",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Design beautiful, intuitive interfaces that users love and that drive conversions.",
    icon: "palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems and style guides",
      "Accessibility and inclusive design",
    ],
    featureImages: [
      "/images/services/uiux-hero.jpg",
      "/images/services/uiux-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    process: [
      "User Research: Understanding real needs | Deep dive into user behavior, pain points, and expectations.",
      "Information Architecture: Structuring content logically | Creating intuitive information architecture and site maps.",
      "Wireframe Creation: Establishing the foundation | Developing low-fidelity sketches and detailed wireframes.",
      "Visual Design: Bringing beauty to function | Crafting high-fidelity mockups with your brand identity.",
      "Interactive Prototype: Testing the experience | Building fully interactive prototypes that simulate the final product.",
      "Usability Testing: Validating with users | Conducting moderated user testing sessions to gather feedback.",
    ],
    color: "#CDD1FF",
    bgColor: "rgba(211, 214, 240, 1)",
  },
  {
    id: "5",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Design beautiful, intuitive interfaces that users love and that drive conversions.",
    icon: "palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems and style guides",
      "Accessibility and inclusive design",
    ],
    featureImages: [
      "/images/services/uiux-hero.jpg",
      "/images/services/uiux-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    process: [
      "User Research: Understanding real needs | Deep dive into user behavior, pain points, and expectations.",
      "Information Architecture: Structuring content logically | Creating intuitive information architecture and site maps.",
      "Wireframe Creation: Establishing the foundation | Developing low-fidelity sketches and detailed wireframes.",
      "Visual Design: Bringing beauty to function | Crafting high-fidelity mockups with your brand identity.",
      "Interactive Prototype: Testing the experience | Building fully interactive prototypes that simulate the final product.",
      "Usability Testing: Validating with users | Conducting moderated user testing sessions to gather feedback.",
    ],
    color: "#CDD1FF",
    bgColor: "rgba(211, 214, 240, 1)",
  },
  {
    id: "6",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Design beautiful, intuitive interfaces that users love and that drive conversions.",
    icon: "palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems and style guides",
      "Accessibility and inclusive design",
    ],
    featureImages: [
      "/images/services/uiux-hero.jpg",
      "/images/services/uiux-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    process: [
      "User Research: Understanding real needs | Deep dive into user behavior, pain points, and expectations.",
      "Information Architecture: Structuring content logically | Creating intuitive information architecture and site maps.",
      "Wireframe Creation: Establishing the foundation | Developing low-fidelity sketches and detailed wireframes.",
      "Visual Design: Bringing beauty to function | Crafting high-fidelity mockups with your brand identity.",
      "Interactive Prototype: Testing the experience | Building fully interactive prototypes that simulate the final product.",
      "Usability Testing: Validating with users | Conducting moderated user testing sessions to gather feedback.",
    ],
    color: "#CDD1FF",
    bgColor: "rgba(211, 214, 240, 1)",
  },
];

// Works/Projects Data
export const works: Work[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    description:
      "A fully-featured e-commerce platform with advanced product filtering, real-time inventory management, and seamless checkout experience.",
    thumbnail:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewdopegood.2c4b50f7.jpg&w=1080&q=75",
    images: [
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewdopegood.2c4b50f7.jpg&w=1080&q=75",
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopegood.60ec4fdf.jpg&w=1080&q=75",
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    client: "RetailCo",
    year: 2024,
    challenge:
      "The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while providing a smooth user experience across all devices.",
    solution:
      "We built a modern e-commerce platform using Next.js for optimal performance, implemented advanced caching strategies, and integrated with multiple payment gateways for flexibility.",
    results: [
      "300% increase in conversion rate",
      "50% reduction in page load time",
      "Successfully handled 10,000+ concurrent users",
      "99.9% uptime during Black Friday sales",
    ],
  },
  {
    id: "2",
    slug: "fitness-tracking-app",
    title: "AI-Powered Fitness Tracking App",
    category: "Mobile Development",
    description:
      "A comprehensive fitness tracking mobile app with AI-powered workout recommendations and social features.",
    thumbnail:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fam-arc.e31e094e.jpg&w=1080&q=75",
    images: [
      "/images/works/fitness-1.jpg",
      "/images/works/fitness-2.jpg",
      "/images/works/fitness-3.jpg",
    ],
    technologies: [
      "React Native",
      "TensorFlow",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    client: "FitLife",
    year: 2023,
    challenge:
      "Creating an engaging fitness app that provides personalized workout plans and keeps users motivated through social features and gamification.",
    solution:
      "We developed a cross-platform mobile app with AI-powered workout recommendations, real-time progress tracking, and social challenges to keep users engaged.",
    results: [
      "100,000+ downloads in first 3 months",
      "4.8-star rating on app stores",
      "70% user retention after 30 days",
      'Featured in App Store "Apps We Love"',
    ],
  },
  {
    id: "3",
    slug: "fitness-tracking-app",
    title: "AI-Powered Fitness Tracking App",
    category: "Mobile Development",
    description:
      "A comprehensive fitness tracking mobile app with AI-powered workout recommendations and social features.",
    thumbnail:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fam-arc.e31e094e.jpg&w=1080&q=75",
    images: [
      "/images/works/fitness-1.jpg",
      "/images/works/fitness-2.jpg",
      "/images/works/fitness-3.jpg",
    ],
    technologies: [
      "React Native",
      "TensorFlow",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    client: "FitLife",
    year: 2023,
    challenge:
      "Creating an engaging fitness app that provides personalized workout plans and keeps users motivated through social features and gamification.",
    solution:
      "We developed a cross-platform mobile app with AI-powered workout recommendations, real-time progress tracking, and social challenges to keep users engaged.",
    results: [
      "100,000+ downloads in first 3 months",
      "4.8-star rating on app stores",
      "70% user retention after 30 days",
      'Featured in App Store "Apps We Love"',
    ],
  },
  {
    id: "4",
    slug: "fitness-tracking-app",
    title: "AI-Powered Fitness Tracking App",
    category: "Mobile Development",
    description:
      "A comprehensive fitness tracking mobile app with AI-powered workout recommendations and social features.",
    thumbnail:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fam-arc.e31e094e.jpg&w=1080&q=75",
    images: [
      "/images/works/fitness-1.jpg",
      "/images/works/fitness-2.jpg",
      "/images/works/fitness-3.jpg",
    ],
    technologies: [
      "React Native",
      "TensorFlow",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    client: "FitLife",
    year: 2023,
    challenge:
      "Creating an engaging fitness app that provides personalized workout plans and keeps users motivated through social features and gamification.",
    solution:
      "We developed a cross-platform mobile app with AI-powered workout recommendations, real-time progress tracking, and social challenges to keep users engaged.",
    results: [
      "100,000+ downloads in first 3 months",
      "4.8-star rating on app stores",
      "70% user retention after 30 days",
      'Featured in App Store "Apps We Love"',
    ],
  },
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development, from AI integration to edge computing.",
    content:
      "<p>The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications.</p>",
    featuredImage: "/images/blog/web-dev-future.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/authors/sarah.jpg",
    },
    publishedAt: "2024-01-15",
    category: "Web Development",
    tags: ["AI", "Edge Computing", "React", "Trends"],
    readTime: 8,
  },
  {
    id: "2",
    slug: "mobile-app-performance-optimization",
    title: "Mobile App Performance Optimization: Best Practices",
    excerpt:
      "Learn proven techniques to optimize your mobile app performance and deliver a smooth user experience.",
    content:
      "<p>Performance is crucial for mobile app success. Users expect fast, responsive applications, and even small delays can lead to abandonment.</p>",
    featuredImage: "/images/blog/mobile-performance.jpg",
    author: {
      name: "Michael Chen",
      avatar: "/images/authors/michael.jpg",
    },
    publishedAt: "2024-01-22",
    category: "Mobile Development",
    tags: ["Performance", "Optimization", "Mobile", "Best Practices"],
    readTime: 10,
  },
];

// General FAQ Data
export const generalFAQ: FAQItem[] = [
  {
    id: "1",
    question: "What services do you provide?",
    answer:
      "We offer web development, mobile app development, UI/UX design, branding, and custom software solutions tailored to business needs.",
  },
  {
    id: "2",
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on scope. Simple websites take 2–4 weeks, and larger applications can take 8–16 weeks. A detailed timeline is shared after the project discovery phase.",
  },
  {
    id: "3",
    question: "Do you provide maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance, security monitoring, performance optimization, and feature enhancements after the project is delivered.",
  },
  {
    id: "4",
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with regular sprints, continuous feedback, and iterative improvements. This ensures transparency and allows for flexibility as requirements evolve.",
  },
  {
    id: "5",
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We can collaborate with in-house teams, follow your workflow, and provide dedicated developers or supplementary technical support.",
  },
];

// Brands Data
export const brands = [
  "ritualogy",
  "Alibaba",
  "SONY",
  "Dolby",
  "flormar",
  "nvidia",
  "tubi",
  "Cineplex",
  "salesforce",
  "runway",
  "Costco",
  "odoo",
];

// Working Process Data
export const workingProcess = [
  {
    id: 1,
    title: "Requirement Gathering",
    subtitle:
      "Understanding client goals, business challenges, and user needs to define a clear product vision.",
    problem:
      "Clients often have scattered ideas and unclear priorities, leading to confusion and scope creep later.",
    approach:
      "We conduct stakeholder interviews, user research, and discovery workshops to extract the core requirements. Our team then documents clear user stories, technical needs, and success metrics to ensure mutual clarity from day one.",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    subtitle:
      "Translating ideas into an actionable roadmap and defining milestones for smooth project execution.",
    problem:
      "Projects frequently fail due to lack of clear planning, timeline estimation, or undefined deliverables.",
    approach:
      "We create a detailed project plan with milestones, dependencies, and sprint breakdowns. Tools like Jira and Notion help us maintain transparency and track progress effectively.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle:
      "Designing user-centered interfaces that balance aesthetics, accessibility, and functionality.",
    problem:
      "Designs often look appealing but fail to solve user problems or align with brand identity.",
    approach:
      "We use design thinking principles to craft wireframes, prototypes, and user flows. Every screen is tested for usability and consistency with the brand tone before moving into development.",
  },
  {
    id: 4,
    title: "Development",
    subtitle:
      "Transforming design into a functional, scalable, and maintainable digital product.",
    problem:
      "Poor code structure or inconsistent collaboration between backend and frontend can lead to inefficiencies.",
    approach:
      "Our developers follow modular, scalable architectures using modern frameworks like Next.js, React Native, and Node.js. Regular code reviews and CI/CD pipelines ensure stability and speed.",
  },
  {
    id: 5,
    title: "Testing & Deployment",
    subtitle:
      "Ensuring a bug-free, optimized experience before your product goes live.",
    problem:
      "Skipping proper testing leads to unexpected bugs, poor performance, and user frustration post-launch.",
    approach:
      "We perform multi-layer testing—unit, integration, and user acceptance testing—before deploying on secure, optimized servers. Automated pipelines ensure fast, reliable delivery.",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    subtitle:
      "Continuous improvement through monitoring, updates, and long-term technical support.",
    problem:
      "Neglecting post-launch maintenance causes performance degradation and security vulnerabilities over time.",
    approach:
      "We provide ongoing monitoring, security patches, feature enhancements, and performance optimization. Our support team ensures your product evolves smoothly with changing business needs.",
  },
];

// Core Values Data
export const ourCoreValues = [
  { id: 1, name: "Integrity" },
  { id: 2, name: "Excellence" },
  { id: 3, name: "Collaboration" },
  { id: 4, name: "Innovation" },
  { id: 5, name: "Customer Focus" },
  { id: 6, name: "Teamwork" },
  { id: 7, name: "Professionalism" },
  { id: 8, name: "Respect" },
  { id: 9, name: "Transparency" },
  { id: 10, name: "Ethics" },
];
