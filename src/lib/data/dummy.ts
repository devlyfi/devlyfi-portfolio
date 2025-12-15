import { ImageIcons, ThreeDIcon } from "../image/image";
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
      "/images/services/web2.jpg",
      "/images/services/web.jpg",
    ],
    cover:
      "/images/services/web2.jpg",
    video: "/videos/services/web.mp4",
    process: [
      {
        id: 1,
        title: "Understanding Your Needs",
        description:
          "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
        tasks: [
          "Analysis",
          "Objectives",
          "Audience",
          "Requirements",
          "Planning",
        ],
        icon: ThreeDIcon.searchBar
      },
      {
        id: 2,
        title: "Design and Prototyping",
        description:
          "We create visually appealing and user-friendly prototypes to present your vision and gather feedback.",
        tasks: [
          "Design",
          "Prototypes",
          "UI",
          "Feedback",
          "Concepts",
        ],
        icon: ThreeDIcon.stack
      },
      {
        id: 3,
        title: "Development and Testing",
        description:
          "We develop and test the web application using the best practices and technologies.",
        tasks: [
          "Development",
          "Coding",
          "Testing",
          "QA",
          "Framework",
        ],
        icon: ThreeDIcon.curly
      },
      {
        id: 4,
        title: "Deployment and Maintenance",
        description:
          "We deploy the web application to a production environment and provide ongoing maintenance and support.",
        tasks: [
          "Deployment",
          "Maintenance",
          "Support",
          "Monitoring",
          "Updates",
        ],
        icon: ThreeDIcon.launch
      },
      {
        id: 5,
        title: "Documentation and Training",
        description:
          "We provide detailed documentation and training to help you use and maintain the web application.",
        tasks: [
          "Documentation",
          "Training",
          "Guides",
          "Instructions",
          "Support",
        ],
        icon: ThreeDIcon.note
      },
      {
        id: 6,
        title: "Post Launch Strategy",
        description:
          "We guide you through post launch strategies to optimize performance, security, and user experience.",
        tasks: [
          "Optimization",
          "Security",
          "Performance",
          "Monitoring",
          "Strategy",
        ],
        icon: ThreeDIcon.target
      },
    ],

    color: "#BCBEF7",
    bgColor: "#BCBEF7",
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
      "/images/services/mobile.jpg",
    video: "/videos/services/mobile.mp4",
    featureImages: [
      "/images/services/mobile.jpg",
      "/images/services/mobile.jpg",
    ],
    process: [
      {
        id: 1,
        title: "Understanding Your Needs",
        description:
          "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
        tasks: [
          "Analysis",
          "Objectives",
          "Audience",
          "Requirements",
          "Planning",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 2,
        title: "Design and Prototyping",
        description:
          "We create wireframes and prototypes to visualize the app's structure and user flow.",
        tasks: [
          "Wireframes",
          "Prototypes",
          "UI",
          "Flow",
          "Concepts",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 3,
        title: "Development and Testing",
        description:
          "We build the app using the chosen framework and tools, and perform quality assurance checks to ensure it meets your requirements.",
        tasks: [
          "Development",
          "Coding",
          "Framework",
          "Testing",
          "QA",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 4,
        title: "Deployment and Launch",
        description:
          "We deploy the app to the App Store or Play Store, and provide post-launch support and maintenance.",
        tasks: [
          "Deployment",
          "Launch",
          "Stores",
          "Verification",
          "Support",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 5,
        title: "Post Launch Strategy",
        description:
          "We guide you through marketing and growth strategies to help your app succeed in the market.",
        tasks: [
          "Marketing",
          "Growth",
          "Strategy",
          "Promotion",
          "Analysis",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 6,
        title: "Ongoing Support",
        description:
          "We offer ongoing support and maintenance to ensure your app remains up-to-date and secure.",
        tasks: [
          "Maintenance",
          "Updates",
          "Security",
          "Support",
          "Monitoring",
        ],
        icon:ImageIcons.cube

      },
    ],


    color: "#FCE8F4",
    bgColor: "#FCE8F4",
  },

  {
    id: "3",
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
      "/images/services/ui.jpg",
      "/images/services/ux-ux.jpg",
    ],
    cover:
      "/images/services/uiuxhigh.png",
    video: "/videos/services/ui.mp4",
    process: [
      {
        id: 1,
        title: "Understanding Your Needs",
        description:
          "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
        tasks: [
          "Analysis",
          "Objectives",
          "Audience",
          "Positioning",
          "Requirements",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 2,
        title: "Research and Personas",
        description:
          "We conduct user research and create personas to understand your users and their needs.",
        tasks: [
          "Research",
          "Personas",
          "Users",
          "Insights",
          "Data",
        ],
        icon: ImageIcons.search
      },
      {
        id: 3,
        title: "Ideation & Strategy",
        description:
          "We brainstorm ideas and develop a design strategy that aligns with your business goals.",
        tasks: [
          "Ideation",
          "Strategy",
          "Planning",
          "Concepts",
          "Alignment",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 4,
        title: "Wireframing and Prototyping",
        description:
          "We create wireframes and prototypes to visualize the app's structure and user flow.",
        tasks: [
          "Wireframes",
          "Prototypes",
          "Structure",
          "Flow",
          "Visualization",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 5,
        title: "Visual Design and Branding",
        description:
          "We create visually appealing and user-friendly interfaces that align with your brand identity.",
        tasks: [
          "Design",
          "Branding",
          "UI",
          "Aesthetics",
          "Consistency",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 6,
        title: "Interaction Design",
        description:
          "We design interactive elements and interactions that enhance user experience and engagement.",
        tasks: [
          "Interactions",
          "Usability",
          "UX",
          "Engagement",
          "Feedback",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 7,
        title: "Usability Testing and Validation",
        description:
          "We conduct usability testing with real users to validate the design and identify areas for improvement.",
        tasks: [
          "Testing",
          "Validation",
          "Feedback",
          "Improvement",
          "Analysis",
        ],
        icon: ImageIcons.cube
      },
    ],

    color: "#B0C2F4",
    bgColor: "#B0C2F4",
  },

  {
    id: "4",
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate workflows, enhance user experiences, and unlock next-level business intelligence.",
    icon: "cpu",
    features: [
      "Custom AI model development",
      "AI-powered automation & workflow optimization",
      "Natural Language Processing (NLP)",
      "Generative AI (text, image, and audio)",
      "Computer vision and image recognition",
      "AI chatbots and virtual assistants",
      "Predictive analytics and data modeling",
      "AI integration with existing systems",
    ],
    featureImages: [
      "/images/services/ai.jpg",
      "/images/services/ai2.jpg",
    ],
    cover:
      "/images/services/ainew.jpg",
    video: "/videos/services/ai.mp4",
    process: [
      {
        id: 1,
        title: "Problem Identification & Use-Case Analysis",
        description:
          "We analyze your business challenges and identify where AI can deliver real value through automation, prediction, or intelligence.",
        tasks: [
          "Analysis",
          "Challenges",
          "UseCases",
          "Automation",
          "Insights",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 2,
        title: "Data Assessment & Preparation",
        description:
          "We evaluate available data sources, clean and structure the data, and prepare it for training reliable AI models.",
        tasks: [
          "Data",
          "Cleaning",
          "Structuring",
          "Validation",
          "Preparation",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 3,
        title: "AI Model Selection & Architecture",
        description:
          "We choose the most suitable AI models, frameworks, and system architecture based on performance, scalability, and cost.",
        tasks: [
          "Selection",
          "Models",
          "Architecture",
          "Frameworks",
          "Scalability",
        ],
        icon: ImageIcons.dev
      },
      {
        id: 4,
        title: "Model Development & Training",
        description:
          "We develop, train, and fine-tune AI models using real-world data to ensure accuracy and reliability.",
        tasks: [
          "Development",
          "Training",
          "Tuning",
          "Validation",
          "Optimization",
        ],
        icon: ImageIcons.search
      },
      {
        id: 5,
        title: "AI Integration & Automation",
        description:
          "We integrate AI models into your existing systems, APIs, or workflows to enable intelligent automation and decision-making.",
        tasks: [
          "Integration",
          "APIs",
          "Automation",
          "Workflows",
          "Deployment",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 6,
        title: "Testing, Validation & Performance Tuning",
        description:
          "We rigorously test AI outputs, validate results, and optimize models for speed, accuracy, and stability.",
        tasks: [
          "Testing",
          "Validation",
          "Optimization",
          "Performance",
          "Accuracy",
        ],
        icon: ImageIcons.starNew
      },
      {
        id: 7,
        title: "Deployment, Monitoring & Continuous Improvement",
        description:
          "We deploy AI solutions to production, monitor performance, retrain models when needed, and continuously improve results.",
        tasks: [
          "Deployment",
          "Monitoring",
          "Retraining",
          "Improvement",
          "Support",
        ],
        icon: ImageIcons.cube
      },
    ],


    color: "#C3C7F7",
    bgColor: "#C3C7F7",
  }
  ,
  {
    id: "5",
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
      "/images/services/cloudservice.jpg",
    video: "/videos/services/cloud.mp4",
    featureImages: [
      "/images/services/cloud.jpg",
      "/images/services/cloud.jpg",
    ],
    process: [
      {
        id: 1,
        title: "Cloud Readiness Assessment",
        description:
          "We analyze your existing systems, workloads, and dependencies to evaluate cloud suitability and identify improvement opportunities.",
        tasks: [
          "Assessment",
          "Analysis",
          "Workloads",
          "Dependencies",
          "Evaluation",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 2,
        title: "Migration Planning & Strategy",
        description:
          "We design a detailed cloud migration roadmap including timelines, risk mitigation, and cost estimation.",
        tasks: [
          "Planning",
          "Strategy",
          "Roadmap",
          "Timeline",
          "Budgeting",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 3,
        title: "Secure Data & Application Migration",
        description:
          "We migrate data and applications with minimal downtime while ensuring data integrity and security.",
        tasks: [
          "Migration",
          "Data",
          "Applications",
          "Security",
          "Integrity",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 4,
        title: "Cloud Infrastructure Setup",
        description:
          "We deploy scalable and secure cloud infrastructure with proper networking, access control, and compliance best practices.",
        tasks: [
          "Deployment",
          "Infrastructure",
          "Networking",
          "Access",
          "Compliance",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 5,
        title: "Performance & Cost Optimization",
        description:
          "We optimize cloud resources, implement auto-scaling, and continuously improve performance while reducing costs.",
        tasks: [
          "Optimization",
          "Performance",
          "Resources",
          "Scaling",
          "Cost",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 6,
        title: "Monitoring & Managed Services",
        description:
          "We provide continuous monitoring, security updates, backups, and ongoing maintenance to ensure reliability.",
        tasks: [
          "Monitoring",
          "Security",
          "Backups",
          "Maintenance",
          "Support",
        ],
        icon: ImageIcons.cube
      },
    ],


    color: "#D6D7F4",
    bgColor: "#D6D7F4",
  },
  {
    id: "7",
    slug: "wordpress-development",
    title: "WordPress Development",
    description:
      "Build fast, secure, and fully customized WordPress websites tailored to your business needs.",
    icon: "wordpress",
    features: [
      "Custom WordPress theme development",
      "Plugin development and integration",
      "WooCommerce setup and customization",
      "Performance optimization (speed & caching)",
      "SEO-friendly site architecture",
      "Security hardening and malware protection",
      "Responsive and mobile-first design",
      "Website maintenance and updates"
    ],
    featureImages: [
      "/images/services/wordpress.jpg",
      "/images/services/wordpress2.jpg"
    ],
    cover: "/images/services/content-management-system.jpg",
    video: "/videos/services/wp.mp4",
    process: [
      {
        id: 1,
        title: "Discovery & Planning",
        description:
          "We understand your goals by analyzing requirements, user needs, and overall site structure.",
        tasks: [
          "Requirements",
          "Analysis",
          "Planning",
          "Structure",
          "Alignment",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 2,
        title: "Design Phase",
        description:
          "We create pixel-perfect UI layouts aligned with your brand identity and business objectives.",
        tasks: [
          "Layouts",
          "Branding",
          "UI",
          "Consistency",
          "Approval",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 3,
        title: "Theme Development",
        description:
          "We build custom themes with clean, scalable, and maintainable code.",
        tasks: [
          "Themes",
          "Coding",
          "Scalability",
          "Testing",
          "Optimization",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 4,
        title: "Plugin Integration",
        description:
          "We configure or develop plugins to add advanced functionality tailored to your needs.",
        tasks: [
          "Plugins",
          "Integration",
          "Customization",
          "Configuration",
          "Testing",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 5,
        title: "Optimization",
        description:
          "We improve performance, caching, and core web vitals to ensure speed and stability.",
        tasks: [
          "Performance",
          "Caching",
          "Vitals",
          "Speed",
          "Stability",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 6,
        title: "Launch & Deployment",
        description:
          "We perform final testing, migration, and deployment to go live smoothly with zero downtime.",
        tasks: [
          "Testing",
          "Migration",
          "Deployment",
          "Verification",
          "Release",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 7,
        title: "Maintenance",
        description:
          "We provide long-term support including updates, backups, and continuous security monitoring.",
        tasks: [
          "Updates",
          "Backups",
          "Monitoring",
          "Security",
          "Support",
        ],
        icon: ImageIcons.cube
      },
    ],


    color: "#B5BAEE",
    bgColor: "#B5BAEE",
  },
  {
    id: "8",
    slug: "website-maintenance",
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with ongoing updates, security monitoring, performance optimization, and technical support.",
    icon: "settings",
    features: [
      "Regular core, theme, and plugin updates",
      "24/7 uptime monitoring",
      "Security scanning & malware protection",
      "Daily/weekly automated backups",
      "Performance checks & optimization",
      "Bug fixes and technical support",
      "Content updates and small design tweaks",
      "Broken link checks & error resolution"
    ],
    featureImages: [
      "/images/services/main.jpg",
      "/images/services/main.jpg"
    ],
    cover: "/images/services/sm.jpg",
    video: "/videos/services/maintenance.mp4",
    process: [
      {
        id: 1,
        title: "Initial Audit",
        description:
          "We assess overall site health by evaluating performance, security status, and update requirements.",
        tasks: [
          "Assessment",
          "Performance",
          "Security",
          "Updates",
          "Reporting",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 2,
        title: "Setup & Configuration",
        description:
          "We prepare the system by implementing monitoring tools, automated backups, and security layers.",
        tasks: [
          "Monitoring",
          "Backups",
          "Configuration",
          "Security",
          "Automation",
        ],
        icon: ImageIcons.cube
      },
      {
        id: 3,
        title: "Regular Updates",
        description:
          "We keep your website up-to-date by safely applying core, theme, and plugin updates without downtime.",
        tasks: [
          "Core",
          "Themes",
          "Plugins",
          "Testing",
          "Deployment",
        ],
        icon: ImageIcons.cube

      },
      {
        id: 4,
        title: "Performance Optimization",
        description:
          "We improve speed and stability through caching, image optimization, and database cleanup.",
        tasks: [
          "Caching",
          "Optimization",
          "Images",
          "Database",
          "Speed",
        ],
        icon: ImageIcons.cube

      },
      {
        id: 5,
        title: "Security Monitoring",
        description:
          "We protect your website with continuous malware scanning, firewall tuning, and vulnerability checks.",
        tasks: [
          "Scanning",
          "Firewall",
          "Hardening",
          "Monitoring",
          "Alerts",
        ],
        icon: ImageIcons.cube

      },
      {
        id: 6,
        title: "Continuous Support",
        description:
          "We provide fast assistance including bug fixes, debugging, and monthly maintenance reports.",
        tasks: [
          "Support",
          "Debugging",
          "Fixes",
          "Reports",
          "Assistance",
        ],
        icon: ImageIcons.cube

      },
      {
        id: 7,
        title: "Backup & Restore",
        description:
          "We ensure peace of mind with scheduled backups and guaranteed restoration when needed.",
        tasks: [
          "Backups",
          "Scheduling",
          "Storage",
          "Recovery",
          "Verification",
        ],
        icon: ImageIcons.cube

      },
    ],


    color: "#B5BAEE",
    bgColor: "#B5BAEE"
  }, {
    id: "9",
    slug: "project-management",
    title: "Project Management",
    description:
      "Protect your time, budget, and peace of mind with expert project managers who understand both business and technical execution.",
    icon: "clipboard-check",
    features: [
      "End-to-end project planning and execution",
      "Technical oversight to prevent scams and miscommunication",
      "Vendor and developer coordination",
      "Full-time, part-time, or meeting-based engagement options",
      "Milestone tracking and transparent reporting",
      "Scope management and requirement documentation",
      "Quality assurance and delivery verification",
      "Budget monitoring and risk management"
    ],
    featureImages: [
      "/images/services/pm.jpg",
      "/images/services/pm2.jpg"
    ],
    cover: "/images/services/pmmm.jpg",
    video: "/videos/services/pm.mp4",
    process: [
      {
        id: 1,
        title: "Discovery & Consultation",
        description:
          "We understand your goals by identifying project needs, challenges, and the ideal workflow.",
        tasks: [
          "Meetings",
          "Requirements",
          "Analysis",
          "Review",
          "Alignment",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 2,
        title: "Scope Definition",
        description:
          "We define clear, scam-proof requirements so no one can mislead or overcharge you.",
        tasks: [
          "Features",
          "Documentation",
          "Deliverables",
          "Boundaries",
          "Approval",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 3,
        title: "Strategy & Planning",
        description:
          "We build a realistic roadmap covering budget, timelines, milestones, and resources.",
        tasks: [
          "Roadmap",
          "Budgeting",
          "Timelines",
          "Milestones",
          "Risks",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 4,
        title: "Team Coordination",
        description:
          "We manage developers and vendors by verifying work, solving issues, and reducing confusion.",
        tasks: [
          "Communication",
          "Coordination",
          "Verification",
          "Clarification",
          "Resolution",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 5,
        title: "Progress Monitoring",
        description:
          "We ensure the project stays on track with regular updates and proactive issue handling.",
        tasks: [
          "Tracking",
          "Reporting",
          "Control",
          "Monitoring",
          "Adjustments",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 6,
        title: "Quality Check",
        description:
          "We validate all deliverables to ensure they meet agreed standards before acceptance.",
        tasks: [
          "Validation",
          "Testing",
          "Review",
          "Compliance",
          "Approval",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 7,
        title: "Launch & Handover",
        description:
          "We ensure stress-free completion with documentation, knowledge transfer, and support.",
        tasks: [
          "Deployment",
          "Documentation",
          "Transfer",
          "Support",
          "Closure",
        ],
        icon:ImageIcons.cube

      },
      {
        id: 8,
        title: "Flexible Engagement",
        description:
          "We offer engagement models that work on your terms and budget.",
        tasks: [
          "Consulting",
          "Hourly",
          "OnDemand",
          "Management",
          "Customization",
        ],
        icon:ImageIcons.cube

      },
    ],

    color: "#B5BAEE",
    bgColor: "#B5BAEE"
  }


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
