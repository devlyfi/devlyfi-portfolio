import {
  CompanyInfo,
  NavigationData,
  HomePageData,
  AboutPageData,
  Service,
  Work,
  BlogPost,
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
  mission:
    "Our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
  vision:
    "To be the most trusted technology partner for businesses worldwide, known for delivering exceptional software solutions that exceed expectations.",
  values: [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: "lightbulb",
    },
    {
      title: "Quality",
      description:
        "We maintain the highest standards in code quality, design, and user experience.",
      icon: "award",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring their vision becomes reality.",
      icon: "users",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices.",
      icon: "shield",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code to customer service.",
      icon: "star",
    },
    {
      title: "Agility",
      description:
        "We adapt quickly to changing requirements and market conditions.",
      icon: "zap",
    },
  ],
  milestones: [
    {
      year: 2014,
      title: "Company Founded",
      description:
        "Devlyfi was established with a vision to transform digital experiences.",
    },
    {
      year: 2016,
      title: "Reached 50 Projects",
      description:
        "Successfully delivered 50 projects across various industries.",
    },
    {
      year: 2018,
      title: "Expanded Team",
      description: "Grew our team to 25 talented professionals.",
    },
    {
      year: 2020,
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve global clients.",
    },
    {
      year: 2022,
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and client satisfaction.",
    },
    {
      year: 2024,
      title: "AI Integration",
      description:
        "Launched AI-powered solutions and expanded our service offerings.",
    },
  ],
};

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build fast, scalable websites and apps with seamless performance.",
    description2:
      "Our stack includes modern frameworks like Next.js, React, and Node.js—delivering maintainable, high-performance solutions that grow with your business.",
    tools: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "TypeScript",
    ],
    // image: one,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We create engaging Android and iOS apps designed for speed and reliability.",
    description2:
      "From ideation to deployment, we integrate APIs, real-time data, and cloud services to deliver seamless, high-performing mobile experiences.",
    tools: [
      "React Native",
      "Expo",
      "Firebase",
      "Node.js",
      "TypeScript",
      "Redux Toolkit",
      "REST API",
    ],
    // image: two,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design intuitive and visually striking interfaces that elevate your brand.",
    description2:
      "Every design decision is rooted in empathy—crafting experiences that feel natural, beautiful, and accessible to all users.",
    tools: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Sketch",
      "Illustrator",
      "Photoshop",
    ],
    // image: three,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We grow brands through strategies that increase visibility and engagement.",
    description2:
      "By analyzing trends and audience behavior, we craft targeted campaigns that maximize ROI and build brand loyalty.",
    tools: [
      "Google Ads",
      "Meta Business Suite",
      "SEMrush",
      "Ahrefs",
      "Mailchimp",
      "Google Analytics",
    ],
    // image: three,
  },
  {
    id: 5,
    title: "Brand Strategy & Identity",
    description:
      "We build memorable brands that connect emotionally and communicate clearly.",
    description2:
      "Our process blends creativity and strategy—helping you craft an authentic brand that inspires trust and stands out in the market.",
    tools: ["Figma", "Illustrator", "Photoshop", "Canva", "Notion", "Miro"],
    // image: one,
  },
  {
    id: 6,
    title: "Cloud & DevOps Solutions",
    description:
      "We optimize scalability and reliability with automated cloud and DevOps tools.",
    description2:
      "Our DevOps practices ensure faster delivery, reduced downtime, and seamless scalability as your business grows.",
    tools: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Nginx",
      "GitHub Actions",
    ],
    // image: two,
  },
];

// Services Data
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
      "Discovery Phase: Understanding your vision and goals | We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements. Through collaborative workshops and stakeholder interviews, we create a comprehensive project roadmap that aligns technology solutions with your business strategy.",
      "Design Architecture: Planning the blueprint | Our team creates detailed wireframes, interactive mockups, and clickable prototypes to visualize the complete user experience. We establish design systems, component libraries, and technical architecture before any code is written.",
      "Agile Development: Building with precision | Using agile methodology, we develop your application in iterative two-week sprints with continuous integration. Regular demos, feedback loops, and progress updates ensure transparency and alignment throughout the development process.",
      "Quality Assurance: Ensuring perfection | Comprehensive testing strategy including automated unit tests, integration tests, performance testing, security audits, and user acceptance testing. We identify and fix issues before they reach production.",
      "Production Launch: Going live seamlessly | We deploy your application to production with zero downtime using blue-green deployment strategies. Complete monitoring setup, performance optimization, and launch coordination ensure a smooth rollout.",
      "Ongoing Support: Continuous improvement | Post-launch maintenance includes 24/7 monitoring, regular security updates, performance optimization, bug fixes, and feature enhancements based on user feedback and analytics.",
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
      "Market Research: Understanding your audience | We conduct comprehensive market analysis, competitor research, and user persona development to define your app strategy. This includes identifying market gaps, analyzing user behavior patterns, and establishing your unique value proposition.",
      "Interactive Prototype: Validating the concept | Creating high-fidelity interactive prototypes and detailed user flow diagrams to validate the concept early. We gather stakeholder feedback and conduct user testing sessions before committing to full development.",
      "Native Development: Building with excellence | Developing native or cross-platform applications with clean architecture, optimized performance, and seamless device integration. We follow platform-specific guidelines while maintaining code quality and scalability.",
      "Device Testing: Ensuring compatibility | Rigorous testing across multiple devices, screen sizes, OS versions, and network conditions. We test on real devices, simulate various scenarios, and ensure flawless performance for all users.",
      "Store Launch: Maximizing visibility | Complete app store optimization including compelling descriptions, screenshots, and preview videos. We handle submission process, review management, and launch coordination for maximum impact.",
      "Continuous Evolution: Growing with users | Post-launch monitoring, crash analytics, user feedback analysis, and regular feature updates. We optimize performance based on real-world usage data and evolving user needs.",
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
      "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dlJ_5c4xgtsQ7kNvwHVjhvP&_nc_oc=AdmbvCqQjhq8rtI2lWsUuTmILXD4yNR5U4s9nVQ5PAzd_Kp5RJdmts0eoArxxJbM5Js&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=L9HvsZDhphvsQhwd6JazCw&oh=00_Afj1MkXtQqcTWV3gN5T8Kl07DkpINffcIEgRfMAYRpmdfQ&oe=691C6DEA",
      "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dlJ_5c4xgtsQ7kNvwHVjhvP&_nc_oc=AdmbvCqQjhq8rtI2lWsUuTmILXD4yNR5U4s9nVQ5PAzd_Kp5RJdmts0eoArxxJbM5Js&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=L9HvsZDhphvsQhwd6JazCw&oh=00_Afj1MkXtQqcTWV3gN5T8Kl07DkpINffcIEgRfMAYRpmdfQ&oe=691C6DEA",
    ],
    process: [
      "Infrastructure Assessment: Evaluating current state | We thoroughly evaluate your existing infrastructure, identify performance bottlenecks, security vulnerabilities, and cost inefficiencies. This assessment determines the optimal cloud architecture tailored to your specific needs.",
      "Migration Strategy: Planning the journey | Developing a comprehensive cloud migration roadmap with detailed cost projections, realistic timelines, and risk mitigation strategies. We prioritize workloads and plan for minimal disruption to operations.",
      "Data Migration: Moving seamlessly | Executing carefully planned data migration with zero downtime using proven strategies. We ensure business continuity, data integrity, and complete validation throughout the entire transition process.",
      "Cloud Implementation: Building infrastructure | Setting up secure cloud infrastructure with proper network configuration, identity management, CI/CD pipelines, and comprehensive monitoring systems. Everything follows security best practices and compliance requirements.",
      "Performance Optimization: Maximizing efficiency | Fine-tuning cloud resources, implementing auto-scaling policies, optimizing database queries, and reducing costs through right-sizing. We ensure peak performance while minimizing operational expenses.",
      "Ongoing Management: Maintaining excellence | Continuous monitoring, proactive security updates, cost optimization reviews, and infrastructure improvements. We scale resources dynamically as your business grows and requirements evolve.",
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
      "User Research: Understanding real needs | Deep dive into user behavior, pain points, motivations, and expectations through interviews, surveys, analytics review, and competitive analysis. We create detailed user personas and journey maps.",
      "Information Architecture: Structuring content logically | Creating intuitive information architecture, site maps, and user flows that guide users seamlessly through your product. We organize content and features for maximum discoverability and ease of use.",
      "Wireframe Creation: Establishing the foundation | Developing low-fidelity sketches and detailed wireframes to establish layout, visual hierarchy, and interaction patterns. This phase focuses on functionality and structure before visual design.",
      "Visual Design: Bringing beauty to function | Crafting high-fidelity mockups with your brand identity, carefully selected color schemes, typography, iconography, and visual elements. Every design decision is intentional and user-centered.",
      "Interactive Prototype: Testing the experience | Building fully interactive prototypes that simulate the final product experience. Stakeholders can click through flows, test interactions, and provide feedback before development begins.",
      "Usability Testing: Validating with users | Conducting moderated user testing sessions to gather qualitative feedback, identify usability issues, and validate design decisions. We iterate and refine until we achieve optimal user experience.",
    ],
    color: "#CDD1FF",
    bgColor: "rgba(211, 214, 240, 1)",
  },
  {
    id: "5",
    slug: "ai-ml-solutions",
    title: "AI & Machine Learning",
    description:
      "Integrate intelligent features and automation into your applications with AI and ML.",
    icon: "brain",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive analytics",
      "Recommendation systems",
      "Chatbots and virtual assistants",
      "Custom ML model development",
      "AI-powered automation solutions",
    ],
    featureImages: [
      "/images/services/ai-ml-hero.jpg",
      "/images/services/ai-ml-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fam-arc.e31e094e.jpg&w=1080&q=75",
    process: [
      "Problem Definition: Identifying the opportunity | We identify the specific business problem, define clear success metrics, and assess data availability and quality requirements. This ensures AI/ML is the right solution for your needs.",
      "Data Preparation: Building the foundation | Collecting, cleaning, and transforming raw data into formats suitable for machine learning. We handle missing values, outliers, feature engineering, and ensure data quality and relevance.",
      "Model Training: Teaching machines | Selecting appropriate algorithms, training multiple model candidates, and fine-tuning hyperparameters for optimal performance. We experiment with various approaches to find the best solution.",
      "Performance Evaluation: Ensuring accuracy | Rigorous testing with validation datasets, comprehensive performance metrics analysis, bias detection, and fairness evaluation. We ensure models are accurate, reliable, and ethical.",
      "Production Deployment: Integrating intelligence | Deploying ML models into your production environment with proper API endpoints, version control, monitoring dashboards, and fallback mechanisms for reliability.",
      "Continuous Monitoring: Maintaining performance | Ongoing performance tracking, model retraining with fresh data, drift detection, and optimization. We ensure models maintain accuracy as data patterns evolve over time.",
    ],
    color: "#FFB499",
    bgColor: "rgba(255, 234, 224, 1)",
  },
  {
    id: "6",
    slug: "consulting",
    title: "Technology Consulting",
    description:
      "Get expert guidance on technology strategy, architecture, and digital transformation.",
    icon: "briefcase",
    features: [
      "Technology stack selection",
      "Architecture review and optimization",
      "Digital transformation strategy",
      "Technical due diligence",
      "Team augmentation",
      "Best practices and training",
      "Legacy system modernization",
    ],
    featureImages: [
      "/images/services/consulting-hero.jpg",
      "/images/services/consulting-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopegood.60ec4fdf.jpg&w=1080&q=75",
    process: [
      "Current Assessment: Understanding your landscape | Comprehensive evaluation of your technology stack, development processes, team capabilities, and business objectives. We identify strengths, weaknesses, and opportunities for improvement.",
      "Gap Analysis: Finding opportunities | Identifying gaps between your current state and desired outcomes. We highlight areas for improvement, innovation opportunities, and potential risks that need to be addressed.",
      "Strategy Development: Charting the course | Developing a tailored technology strategy perfectly aligned with your business goals, budget constraints, and timeline requirements. Every recommendation is practical and actionable.",
      "Roadmap Creation: Planning execution | Creating a detailed implementation roadmap with clear milestones, resource allocation, risk management strategies, and success criteria for each phase of the transformation.",
      "Implementation Guidance: Supporting success | Providing hands-on support during implementation including architectural reviews, code reviews, technical guidance, and problem-solving to ensure successful execution.",
      "Knowledge Transfer: Empowering teams | Conducting comprehensive knowledge transfer sessions, creating detailed documentation, and providing training. We enable your team to maintain and evolve the solution independently.",
    ],
    color: "#FFB499",
    bgColor: "rgba(255, 234, 224, 1)",
  },
  {
    id: "7",
    slug: "blockchain",
    title: "Blockchain Development",
    description:
      "Build secure, decentralized applications and smart contracts on blockchain platforms.",
    icon: "link",
    features: [
      "Smart contract development",
      "DApp development",
      "NFT marketplace creation",
      "Cryptocurrency integration",
      "Blockchain consulting",
      "Security audits",
      "Token economics and design",
    ],
    featureImages: [
      "/images/services/blockchain-hero.jpg",
      "/images/services/blockchain-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    process: [
      "Use Case Analysis: Validating blockchain fit | We evaluate your use case to determine if blockchain is the right solution and identify the optimal approach. Not every problem needs blockchain, and we provide honest assessment.",
      "Platform Selection: Choosing the foundation | Selecting the appropriate blockchain platform (Ethereum, Solana, Polygon, or others) based on your specific requirements, transaction volume, cost constraints, and technical needs.",
      "Smart Contract Design: Architecting security | Designing smart contracts with security, gas optimization, and scalability as top priorities. We follow industry best practices and learn from past exploits to build robust contracts.",
      "Contract Development: Writing secure code | Writing, compiling, and thoroughly testing smart contracts with comprehensive unit tests and integration tests on test networks. We ensure code quality and functionality before mainnet.",
      "Security Audit: Ensuring protection | Professional third-party security audit to identify vulnerabilities, ensure regulatory compliance, and validate contract logic. We fix all issues before mainnet deployment.",
      "Mainnet Deployment: Going live safely | Launching on mainnet with comprehensive monitoring tools, transaction tracking, gas optimization, and ongoing maintenance plans to ensure reliable and secure operation.",
    ],
    color: "#FFB499",
    bgColor: "rgba(255, 234, 224, 1)",
  },
  {
    id: "8",
    slug: "devops",
    title: "DevOps Services",
    description:
      "Streamline your development and deployment processes with modern DevOps practices.",
    icon: "settings",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration (Kubernetes)",
      "Monitoring and logging",
      "Automated testing",
      "Security and compliance",
      "Disaster recovery and backup",
    ],
    featureImages: [
      "/images/services/devops-hero.jpg",
      "/images/services/devops-feature.jpg",
    ],
    cover:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopegood.60ec4fdf.jpg&w=1080&q=75",
    process: [
      "Workflow Audit: Identifying bottlenecks | Reviewing your current development workflow, deployment process, and infrastructure to identify bottlenecks, inefficiencies, and areas where automation can provide the most value.",
      "Pipeline Design: Planning automation | Selecting the right DevOps tools and designing CI/CD pipelines tailored to your tech stack, team size, and deployment requirements. We create a blueprint for automation.",
      "Infrastructure Build: Creating foundations | Configuring automated pipelines for testing, building, and deploying code with proper staging environments, rollback capabilities, and approval gates for production releases.",
      "Full Automation: Streamlining processes | Implementing infrastructure as code, automated testing suites, security scanning, container orchestration, and deployment automation. We eliminate manual steps and reduce errors.",
      "Team Training: Building expertise | Providing comprehensive training on DevOps practices, tools, and workflows. We ensure your team understands the new processes and can maintain them independently.",
      "Continuous Optimization: Improving constantly | Ongoing monitoring, performance tuning, and process improvements to reduce deployment time, increase reliability, and adapt to changing needs as your team grows.",
    ],
    color: "#FFB499",
    bgColor: "rgba(255, 234, 224, 1)",
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
      "/images/works/ecommerce-1.jpg",
      "/images/works/ecommerce-2.jpg",
      "/images/works/ecommerce-3.jpg",
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
    slug: "healthcare-portal",
    title: "Patient Management Portal",
    category: "Healthcare",
    description:
      "A secure healthcare portal for managing patient records, appointments, and telemedicine consultations.",
    thumbnail:
      "https://deveb.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdopop2.377994a1.jpg&w=1080&q=75",
    images: [
      "/images/works/healthcare-1.jpg",
      "/images/works/healthcare-2.jpg",
      "/images/works/healthcare-3.jpg",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "AWS",
      "HIPAA Compliance",
    ],
    client: "MediCare Solutions",
    year: 2023,
    challenge:
      "Building a HIPAA-compliant platform that enables secure communication between patients and healthcare providers while managing sensitive medical data.",
    solution:
      "We implemented end-to-end encryption, secure video consultations, and a robust access control system to ensure patient data privacy and regulatory compliance.",
    results: [
      "HIPAA compliance certification achieved",
      "5,000+ active patients",
      "40% reduction in no-show appointments",
      "95% patient satisfaction score",
    ],
  },
  {
    id: "4",
    slug: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    category: "FinTech",
    description:
      "A real-time financial analytics dashboard with advanced data visualization and reporting capabilities.",
    thumbnail: "/images/works/fintech-thumb.jpg",
    images: [
      "/images/works/fintech-1.jpg",
      "/images/works/fintech-2.jpg",
      "/images/works/fintech-3.jpg",
    ],
    technologies: [
      "Vue.js",
      "D3.js",
      "Python",
      "FastAPI",
      "TimescaleDB",
      "Docker",
    ],
    client: "InvestPro",
    year: 2024,
    challenge:
      "Processing and visualizing large volumes of financial data in real-time while maintaining accuracy and performance.",
    solution:
      "We built a high-performance dashboard with optimized data pipelines, interactive visualizations, and customizable reporting features.",
    results: [
      "Processing 1M+ transactions per day",
      "Sub-second query response times",
      "60% faster report generation",
      "Reduced operational costs by 35%",
    ],
  },
  {
    id: "5",
    slug: "education-platform",
    title: "Interactive Learning Platform",
    category: "Education",
    description:
      "An engaging online learning platform with interactive courses, live classes, and progress tracking.",
    thumbnail: "/images/works/education-thumb.jpg",
    images: [
      "/images/works/education-1.jpg",
      "/images/works/education-2.jpg",
      "/images/works/education-3.jpg",
    ],
    technologies: [
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "WebRTC",
      "AWS",
      "Stripe",
    ],
    client: "EduTech Academy",
    year: 2023,
    challenge:
      "Creating an intuitive platform that supports various learning styles and enables seamless interaction between students and instructors.",
    solution:
      "We developed a feature-rich learning platform with video courses, live classes, interactive quizzes, and a gamified progress system.",
    results: [
      "50,000+ enrolled students",
      "1,000+ courses available",
      "85% course completion rate",
      "4.7-star average course rating",
    ],
  },
  {
    id: "6",
    slug: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    category: "Real Estate",
    description:
      "A comprehensive real estate marketplace with advanced search, virtual tours, and property management tools.",
    thumbnail: "/images/works/realestate-thumb.jpg",
    images: [
      "/images/works/realestate-1.jpg",
      "/images/works/realestate-2.jpg",
      "/images/works/realestate-3.jpg",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Mapbox", "Three.js", "AWS"],
    client: "PropertyHub",
    year: 2024,
    challenge:
      "Building a user-friendly platform that helps buyers find their perfect property while providing agents with powerful management tools.",
    solution:
      "We created an intuitive marketplace with AI-powered property recommendations, 3D virtual tours, and integrated communication tools.",
    results: [
      "10,000+ property listings",
      "200% increase in lead generation",
      "45% faster property search",
      "30% increase in agent productivity",
    ],
  },
  {
    id: "7",
    slug: "restaurant-ordering-system",
    title: "Restaurant Ordering System",
    category: "Food & Beverage",
    description:
      "A complete restaurant ordering system with online ordering, table reservations, and kitchen management.",
    thumbnail: "/images/works/restaurant-thumb.jpg",
    images: [
      "/images/works/restaurant-1.jpg",
      "/images/works/restaurant-2.jpg",
      "/images/works/restaurant-3.jpg",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Stripe",
    ],
    client: "FoodieChain",
    year: 2023,
    challenge:
      "Streamlining restaurant operations from online ordering to kitchen management while improving customer experience.",
    solution:
      "We developed an integrated system that connects customers, waitstaff, and kitchen staff in real-time, reducing wait times and errors.",
    results: [
      "50% reduction in order errors",
      "35% increase in online orders",
      "25% faster table turnover",
      "Expanded to 50+ restaurant locations",
    ],
  },
  {
    id: "8",
    slug: "logistics-tracking-platform",
    title: "Logistics Tracking Platform",
    category: "Logistics",
    description:
      "A real-time logistics tracking platform with route optimization and fleet management capabilities.",
    thumbnail: "/images/works/logistics-thumb.jpg",
    images: [
      "/images/works/logistics-1.jpg",
      "/images/works/logistics-2.jpg",
      "/images/works/logistics-3.jpg",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
      "IoT",
      "AWS",
    ],
    client: "LogiTech Solutions",
    year: 2024,
    challenge:
      "Managing complex logistics operations with real-time tracking, route optimization, and predictive maintenance.",
    solution:
      "We built a comprehensive platform that integrates IoT sensors, GPS tracking, and AI-powered route optimization to improve efficiency.",
    results: [
      "30% reduction in fuel costs",
      "40% improvement in on-time deliveries",
      "25% increase in fleet utilization",
      "ROI achieved within 6 months",
    ],
  },
  {
    id: "9",
    slug: "social-networking-app",
    title: "Niche Social Networking App",
    category: "Social Media",
    description:
      "A specialized social networking app for creative professionals with portfolio showcasing and collaboration features.",
    thumbnail: "/images/works/social-thumb.jpg",
    images: [
      "/images/works/social-1.jpg",
      "/images/works/social-2.jpg",
      "/images/works/social-3.jpg",
    ],
    technologies: [
      "React Native",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    client: "CreativeConnect",
    year: 2023,
    challenge:
      "Creating a social platform that stands out in a crowded market by focusing on the specific needs of creative professionals.",
    solution:
      "We developed a feature-rich app with portfolio showcasing, project collaboration tools, and a discovery algorithm tailored for creatives.",
    results: [
      "250,000+ registered users",
      "1M+ portfolio pieces shared",
      "50,000+ collaborations initiated",
      "Secured Series A funding",
    ],
  },
  {
    id: "10",
    slug: "iot-smart-home",
    title: "IoT Smart Home System",
    category: "IoT",
    description:
      "An integrated smart home system with voice control, automation, and energy management features.",
    thumbnail: "/images/works/smarthome-thumb.jpg",
    images: [
      "/images/works/smarthome-1.jpg",
      "/images/works/smarthome-2.jpg",
      "/images/works/smarthome-3.jpg",
    ],
    technologies: [
      "React",
      "Python",
      "MQTT",
      "TensorFlow",
      "AWS IoT",
      "Alexa Skills",
    ],
    client: "SmartLiving Inc",
    year: 2024,
    challenge:
      "Integrating various IoT devices from different manufacturers into a unified, user-friendly smart home system.",
    solution:
      "We created a platform-agnostic system with AI-powered automation, voice control, and predictive energy management.",
    results: [
      "30% reduction in energy consumption",
      "Compatible with 100+ device types",
      "4.6-star user rating",
      "Installed in 5,000+ homes",
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
      "<p>The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications.</p><h2>AI-Powered Development</h2><p>Artificial Intelligence is no longer just a buzzword—it is becoming an integral part of the development process. From code completion tools to automated testing, AI is helping developers work more efficiently.</p><h2>Edge Computing</h2><p>Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences. Platforms like Vercel and Cloudflare are making edge deployment accessible to all developers.</p><h2>Server Components</h2><p>React Server Components are revolutionizing how we think about rendering. By moving more logic to the server, we can reduce bundle sizes and improve performance.</p><h2>Conclusion</h2><p>The future of web development is exciting and full of possibilities. By staying informed and adapting to these trends, developers can build better, faster, and more efficient applications.</p>",
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
      "<p>Performance is crucial for mobile app success. Users expect fast, responsive applications, and even small delays can lead to abandonment.</p><h2>Image Optimization</h2><p>Images are often the largest assets in mobile apps. Use appropriate formats, compress images, and implement lazy loading to reduce initial load times.</p><h2>Code Splitting</h2><p>Break your app into smaller chunks that can be loaded on demand. This reduces the initial bundle size and improves startup time.</p><h2>Memory Management</h2><p>Proper memory management prevents crashes and ensures smooth performance. Always clean up resources and avoid memory leaks.</p><h2>Network Optimization</h2><p>Minimize network requests, implement caching strategies, and use efficient data formats like Protocol Buffers or MessagePack.</p>",
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
  {
    id: "3",
    slug: "cloud-architecture-patterns",
    title: "Essential Cloud Architecture Patterns for Scalable Applications",
    excerpt:
      "Discover the most important cloud architecture patterns that enable building scalable, resilient applications.",
    content:
      "<p>Building scalable applications in the cloud requires understanding and implementing proven architecture patterns.</p><h2>Microservices Architecture</h2><p>Breaking applications into smaller, independent services allows for better scalability and maintainability. Each service can be developed, deployed, and scaled independently.</p><h2>Event-Driven Architecture</h2><p>Event-driven systems enable loose coupling and asynchronous communication between services, improving resilience and scalability.</p><h2>CQRS Pattern</h2><p>Command Query Responsibility Segregation separates read and write operations, allowing for optimized data models and better performance.</p><h2>Circuit Breaker Pattern</h2><p>Implement circuit breakers to prevent cascading failures and improve system resilience when dealing with external dependencies.</p>",
    featuredImage: "/images/blog/cloud-architecture.jpg",
    author: {
      name: "David Martinez",
      avatar: "/images/authors/david.jpg",
    },
    publishedAt: "2024-02-05",
    category: "Cloud Computing",
    tags: ["Cloud", "Architecture", "Microservices", "Scalability"],
    readTime: 12,
  },
  {
    id: "4",
    slug: "ui-ux-design-principles",
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt:
      "Understanding fundamental design principles helps developers create better user experiences and collaborate effectively with designers.",
    content:
      "<p>Great user experiences do not happen by accident. They are the result of applying proven design principles and understanding user needs.</p><h2>Visual Hierarchy</h2><p>Guide users attention through proper use of size, color, contrast, and spacing. The most important elements should be the most prominent.</p><h2>Consistency</h2><p>Maintain consistent patterns, terminology, and visual design throughout your application. This reduces cognitive load and improves usability.</p><h2>Feedback and Response</h2><p>Always provide clear feedback for user actions. Loading states, success messages, and error handling are crucial for good UX.</p><h2>Accessibility</h2><p>Design for all users, including those with disabilities. Follow WCAG guidelines and test with assistive technologies.</p>",
    featuredImage: "/images/blog/ui-ux-principles.jpg",
    author: {
      name: "Emily Rodriguez",
      avatar: "/images/authors/emily.jpg",
    },
    publishedAt: "2024-02-12",
    category: "Design",
    tags: ["UI/UX", "Design", "Accessibility", "User Experience"],
    readTime: 7,
  },
  {
    id: "5",
    slug: "ai-integration-web-apps",
    title: "Integrating AI into Web Applications: A Practical Guide",
    excerpt:
      "Learn how to integrate AI capabilities into your web applications with practical examples and best practices.",
    content:
      "<p>AI is transforming web applications, enabling new features and experiences that were previously impossible.</p><h2>Natural Language Processing</h2><p>Implement chatbots, sentiment analysis, and content generation using NLP APIs like OpenAI or Hugging Face.</p><h2>Computer Vision</h2><p>Add image recognition, object detection, and visual search capabilities to your applications using services like Google Vision or AWS Rekognition.</p><h2>Recommendation Systems</h2><p>Build personalized recommendation engines using collaborative filtering and machine learning algorithms.</p><h2>Ethical Considerations</h2><p>Always consider privacy, bias, and transparency when implementing AI features. Be clear about how AI is being used in your application.</p>",
    featuredImage: "/images/blog/ai-integration.jpg",
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
    },
    publishedAt: "2024-02-20",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "NLP", "Integration"],
    readTime: 15,
  },
  {
    id: "6",
    slug: "devops-best-practices-2024",
    title: "DevOps Best Practices for Modern Development Teams",
    excerpt:
      "Implement these DevOps best practices to improve your team efficiency, code quality, and deployment frequency.",
    content:
      "<p>DevOps practices are essential for modern software development, enabling faster delivery and better collaboration.</p><h2>Continuous Integration/Continuous Deployment</h2><p>Automate your build, test, and deployment processes to catch issues early and deploy with confidence.</p><h2>Infrastructure as Code</h2><p>Manage your infrastructure using code with tools like Terraform or CloudFormation. This ensures consistency and enables version control.</p><h2>Monitoring and Observability</h2><p>Implement comprehensive monitoring, logging, and tracing to understand system behavior and quickly identify issues.</p><h2>Security Integration</h2><p>Integrate security practices throughout the development lifecycle with automated security scanning and compliance checks.</p>",
    featuredImage: "/images/blog/devops-practices.jpg",
    author: {
      name: "James Wilson",
      avatar: "/images/authors/james.jpg",
    },
    publishedAt: "2024-03-01",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Infrastructure", "Automation"],
    readTime: 11,
  },
  {
    id: "7",
    slug: "react-server-components-guide",
    title: "React Server Components: A Complete Guide",
    excerpt:
      "Understand React Server Components and how they can improve your application performance and developer experience.",
    content:
      "<p>React Server Components represent a paradigm shift in how we build React applications, offering significant performance benefits.</p><h2>What Are Server Components?</h2><p>Server Components run only on the server, allowing you to access backend resources directly without exposing sensitive data to the client.</p><h2>Benefits</h2><p>Reduced bundle size, improved performance, better data fetching, and simplified architecture are just some of the benefits.</p><h2>When to Use Server Components</h2><p>Use Server Components for data fetching, accessing backend resources, and rendering static content. Use Client Components for interactivity.</p><h2>Migration Strategy</h2><p>Start by identifying components that do not need client-side interactivity and gradually migrate them to Server Components.</p>",
    featuredImage: "/images/blog/react-server-components.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/authors/sarah.jpg",
    },
    publishedAt: "2024-03-10",
    category: "Web Development",
    tags: ["React", "Server Components", "Performance", "Next.js"],
    readTime: 13,
  },
  {
    id: "8",
    slug: "blockchain-development-basics",
    title: "Blockchain Development: Getting Started with Smart Contracts",
    excerpt:
      "Learn the fundamentals of blockchain development and how to create your first smart contract.",
    content:
      "<p>Blockchain technology is revolutionizing various industries, and understanding smart contract development is becoming increasingly valuable.</p><h2>Understanding Blockchain</h2><p>Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record-keeping.</p><h2>Smart Contracts</h2><p>Smart contracts are self-executing programs that run on the blockchain. They automatically enforce agreements without intermediaries.</p><h2>Development Tools</h2><p>Learn about essential tools like Hardhat, Truffle, and Remix for developing and testing smart contracts.</p><h2>Security Considerations</h2><p>Security is paramount in blockchain development. Always audit your contracts and follow best practices to prevent vulnerabilities.</p>",
    featuredImage: "/images/blog/blockchain-basics.jpg",
    author: {
      name: "Michael Chen",
      avatar: "/images/authors/michael.jpg",
    },
    publishedAt: "2024-03-18",
    category: "Blockchain",
    tags: ["Blockchain", "Smart Contracts", "Web3", "Solidity"],
    readTime: 14,
  },
  {
    id: "9",
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Better Code Quality",
    excerpt:
      "Master advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    content:
      "<p>TypeScript type system is powerful and flexible. Learning advanced patterns can significantly improve your code quality.</p><h2>Generics and Constraints</h2><p>Use generics to create reusable components and functions while maintaining type safety. Apply constraints to ensure type correctness.</p><h2>Conditional Types</h2><p>Conditional types enable type transformations based on conditions, allowing for more flexible and expressive type definitions.</p><h2>Mapped Types</h2><p>Create new types by transforming properties of existing types. This is useful for creating variations of types.</p><h2>Type Guards</h2><p>Implement custom type guards to narrow types and provide better type inference in your code.</p>",
    featuredImage: "/images/blog/typescript-patterns.jpg",
    author: {
      name: "Emily Rodriguez",
      avatar: "/images/authors/emily.jpg",
    },
    publishedAt: "2024-03-25",
    category: "Programming",
    tags: ["TypeScript", "Programming", "Type Safety", "Best Practices"],
    readTime: 9,
  },
  {
    id: "10",
    slug: "api-design-best-practices",
    title: "RESTful API Design: Best Practices and Common Pitfalls",
    excerpt:
      "Learn how to design robust, scalable RESTful APIs that are easy to use and maintain.",
    content:
      "<p>Well-designed APIs are crucial for building scalable applications and enabling integration with other systems.</p><h2>Resource Naming</h2><p>Use clear, consistent naming conventions for your resources. Prefer plural nouns and avoid verbs in endpoint names.</p><h2>HTTP Methods</h2><p>Use appropriate HTTP methods (GET, POST, PUT, DELETE) for different operations. Follow REST conventions for predictable behavior.</p><h2>Error Handling</h2><p>Provide clear, consistent error messages with appropriate HTTP status codes. Include helpful information for debugging.</p><h2>Versioning</h2><p>Implement API versioning from the start to allow for future changes without breaking existing clients.</p><h2>Documentation</h2><p>Comprehensive documentation is essential. Use tools like OpenAPI/Swagger to generate interactive API documentation.</p>",
    featuredImage: "/images/blog/api-design.jpg",
    author: {
      name: "David Martinez",
      avatar: "/images/authors/david.jpg",
    },
    publishedAt: "2024-04-02",
    category: "Backend Development",
    tags: ["API", "REST", "Backend", "Best Practices"],
    readTime: 10,
  },
  {
    id: "11",
    slug: "web-accessibility-guide",
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    excerpt:
      "A comprehensive guide to making your web applications accessible to all users, including those with disabilities.",
    content:
      "<p>Web accessibility is not just about compliance—it is about creating inclusive experiences for all users.</p><h2>Semantic HTML</h2><p>Use proper HTML elements for their intended purpose. This provides meaning and structure that assistive technologies can understand.</p><h2>Keyboard Navigation</h2><p>Ensure all interactive elements are accessible via keyboard. Test your application using only the keyboard.</p><h2>ARIA Attributes</h2><p>Use ARIA attributes to provide additional context for assistive technologies, but only when semantic HTML is not sufficient.</p><h2>Color and Contrast</h2><p>Ensure sufficient color contrast and do not rely solely on color to convey information.</p><h2>Testing</h2><p>Use automated tools like axe or WAVE, but also perform manual testing with screen readers and keyboard navigation.</p>",
    featuredImage: "/images/blog/web-accessibility.jpg",
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
    },
    publishedAt: "2024-04-10",
    category: "Web Development",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "UX"],
    readTime: 11,
  },
  {
    id: "12",
    slug: "microservices-architecture-guide",
    title: "Microservices Architecture: When and How to Implement",
    excerpt:
      "Understand when microservices make sense for your project and how to implement them effectively.",
    content:
      "<p>Microservices architecture offers many benefits, but it is not always the right choice. Understanding when and how to use it is crucial.</p><h2>When to Use Microservices</h2><p>Consider microservices when you have a large, complex application with distinct business domains and need independent scalability.</p><h2>Service Boundaries</h2><p>Define clear service boundaries based on business capabilities. Each service should have a single responsibility.</p><h2>Communication Patterns</h2><p>Choose appropriate communication patterns: synchronous (REST, gRPC) for immediate responses, asynchronous (message queues) for eventual consistency.</p><h2>Data Management</h2><p>Each service should own its data. Avoid shared databases and use events or APIs for data sharing.</p><h2>Challenges</h2><p>Be prepared for increased complexity in deployment, monitoring, and debugging. Invest in proper tooling and observability.</p>",
    featuredImage: "/images/blog/microservices-guide.jpg",
    author: {
      name: "James Wilson",
      avatar: "/images/authors/james.jpg",
    },
    publishedAt: "2024-04-18",
    category: "Architecture",
    tags: ["Microservices", "Architecture", "Scalability", "Backend"],
    readTime: 16,
  },
];

export const ourCoreValues = [
  {
    id: 1,
    name: "Integrity",
  },
  {
    id: 2,
    name: "Excellence",
  },
  {
    id: 3,
    name: "Collaboration",
  },
  {
    id: 4,
    name: "Innovation",
  },
  {
    id: 5,
    name: "Customer Focus",
  },
  {
    id: 6,
    name: "Teamwork",
  },
  {
    id: 7,
    name: "Professionalism",
  },
  {
    id: 8,
    name: "Respect",
  },
  {
    id: 9,
    name: "Transparency",
  },
  {
    id: 10,
    name: "Ethics",
  },
  {
    id: 11,
    name: "Diversity",
  },
  {
    id: 12,
    name: "Sustainability",
  },
  {
    id: 13,
    name: "Responsibility",
  },
  {
    id: 14,
    name: "Accountability",
  },
  {
    id: 15,
    name: "Customer Satisfaction",
  },
  {
    id: 16,
    name: "Quality",
  },
  {
    id: 17,
    name: "Efficiency",
  },
  {
    id: 18,
    name: "Timeliness",
  },
  {
    id: 19,
    name: "Creativity",
  },
  {
    id: 20,
    name: "Teamwork",
  },
];

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
