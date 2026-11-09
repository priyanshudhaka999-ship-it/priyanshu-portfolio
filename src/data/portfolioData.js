/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION & CONTENT DATA
 * ============================================================================
 * Edit this file to personalize your bio, projects, services, skills,
 * resume path, and contact/social links without touching UI component code.
 * ============================================================================
 */

export const portfolioData = {
  personal: {
    name: 'Priyanshu Dhaka',
    initials: 'PD',
    role: 'Full-stack Developer & AI Engineer',
    tagline: 'I build scalable web applications and AI-powered experiences.',
    subHeadline:
      'Architecting modern full-stack web systems, resilient backend APIs, and practical AI integrations designed for performance, clarity, and global scale.',
    availabilityBadge: 'Available for International Freelance & Remote Roles',
    location: 'India · Working Globally (UTC+5:30 / Flexible Overlap)',
    // PLACEHOLDER: Replace with your real email address
    email: 'hello.priyanshudhaka@example.com',
    isPlaceholderEmail: true,
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    primaryCta: {
      label: 'View My Work',
      href: '#projects',
    },
    secondaryCta: {
      label: "Let's Work Together",
      href: '#contact',
    },
    architecturePillars: [
      {
        id: 'fullstack',
        code: 'SYS.01',
        title: 'Full-Stack Web Systems',
        detail: 'React & Next.js interfaces paired with Node.js, Express & MongoDB.',
      },
      {
        id: 'ai',
        code: 'AI.02',
        title: 'Applied AI Engineering',
        detail: 'LLM API orchestration, structured outputs & context-aware workflows.',
      },
      {
        id: 'commerce',
        code: 'OPS.03',
        title: 'Production Architecture',
        detail: 'Containerized Docker deployments, Razorpay flows & fluid motion UI.',
      },
    ],
  },

  about: {
    sectionTag: '01 // ABOUT & PHILOSOPHY',
    headline: 'Engineering digital products where robust system architecture meets intelligent user experience.',
    // Editable paragraphs — no fabricated employment history, degrees, or unverified metrics
    paragraphs: [
      "I'm Priyanshu Dhaka, a Full-stack Developer and AI Engineer focused on building useful, scalable web applications and integrating modern AI capabilities into real-world software products.",
      'My engineering approach bridges clean, responsive frontend craftsmanship with reliable backend architecture. Whether designing an end-to-end MERN application, structuring RESTful APIs in Node.js and Express, or embedding AI APIs into product workflows, I focus on writing maintainable code that solves real problems.',
      'I work with founders, product teams, and international clients to take ideas from architectural blueprint to production-ready deployment—prioritizing clear communication, predictable delivery, and long-term maintainability.',
    ],
    customizationNote:
      'Personalization Note: You can easily customize this introduction and add specific personal milestones in src/data/portfolioData.js under `about.paragraphs`.',
    engineeringPrinciples: [
      {
        number: '01',
        title: 'Clean & Maintainable Architecture',
        description:
          'Modular React component hierarchies, predictable state management, and structured Express/MongoDB schemas designed so codebases stay easy to extend.',
      },
      {
        number: '02',
        title: 'Practical AI Integration',
        description:
          'Moving beyond novelty prompts—implementing resilient AI API pipelines with streaming responses, structured validation, and graceful fallbacks.',
      },
      {
        number: '03',
        title: 'Performance-First Interfaces',
        description:
          'Combining Tailwind CSS precision with purposeful Framer Motion micro-interactions that feel responsive and fluid across desktop and mobile devices.',
      },
      {
        number: '04',
        title: 'End-to-End Ownership',
        description:
          'Handling the full lifecycle from database modeling and payment gateway integration (Razorpay) to Docker containerization and production deployment.',
      },
    ],
  },

  skills: {
    sectionTag: '02 // SKILLS & TECHNOLOGY STACK',
    headline: 'A focused, production-oriented toolkit across frontend, backend, data, and AI integration.',
    subtitle:
      'Organized by architectural layer—each technology selected for building modern, maintainable web and AI applications.',
    categories: [
      {
        id: 'frontend',
        name: 'Frontend Architecture',
        code: 'LAYER // 01',
        accent: 'terracotta',
        summary: 'Component-driven interfaces, server & client rendering, and responsive styling.',
        items: [
          {
            name: 'React',
            category: 'Frontend',
            role: 'UI Library & Component Architecture',
            description: 'Reusable hooks, stateful interactive views, and modular component systems.',
          },
          {
            name: 'Next.js',
            category: 'Frontend',
            role: 'Full-stack React Framework',
            description: 'SSR/SSG routing, SEO-friendly rendering, and modern React application structure.',
          },
          {
            name: 'JavaScript',
            category: 'Frontend',
            role: 'Core Programming Language (ES6+)',
            description: 'Asynchronous programming, DOM manipulation, closures, and clean functional patterns.',
          },
          {
            name: 'Tailwind CSS',
            category: 'Frontend',
            role: 'Utility-First Design System',
            description: 'Bespoke design tokens, responsive breakpoints, and consistent typographic spacing.',
          },
        ],
      },
      {
        id: 'backend',
        name: 'Backend Engineering',
        code: 'LAYER // 02',
        accent: 'indigo',
        summary: 'Event-driven server logic, REST API design, authentication, and middleware pipelines.',
        items: [
          {
            name: 'Node.js',
            category: 'Backend',
            role: 'Server Runtime Environment',
            description: 'Non-blocking I/O, asynchronous service orchestration, and scalable backend execution.',
          },
          {
            name: 'Express.js',
            category: 'Backend',
            role: 'Web Application & API Framework',
            description: 'Structured RESTful routing, request validation, authentication middleware, and error handling.',
          },
        ],
      },
      {
        id: 'database',
        name: 'Database & Persistence',
        code: 'LAYER // 03',
        accent: 'emerald',
        summary: 'Document data modeling, indexing, and aggregation pipelines.',
        items: [
          {
            name: 'MongoDB',
            category: 'Database',
            role: 'NoSQL Document Database',
            description: 'Schema design, CRUD operations, indexing strategies, and data aggregation for web apps.',
          },
        ],
      },
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        code: 'LAYER // 04',
        accent: 'terracotta',
        summary: 'Integrating language and multimodal AI APIs into functional product experiences.',
        items: [
          {
            name: 'AI APIs & AI Integration',
            category: 'AI',
            role: 'Intelligent Workflow Engineering',
            description: 'Prompt structuring, API orchestration, streaming UI responses, and context-aware features.',
          },
        ],
      },
      {
        id: 'tools',
        name: 'Tools & Ecosystem',
        code: 'LAYER // 05',
        accent: 'indigo',
        summary: 'Motion design, transactional payment flows, and reproducible container environments.',
        items: [
          {
            name: 'Framer Motion',
            category: 'Tools',
            role: 'Production Motion Library',
            description: 'Layout transitions, scroll-triggered reveals, gesture interactions, and reduced-motion support.',
          },
          {
            name: 'Razorpay',
            category: 'Tools',
            role: 'Payment Gateway Integration',
            description: 'Checkout flows, order creation APIs, webhook signature verification, and payment states.',
          },
          {
            name: 'Docker',
            category: 'Tools',
            role: 'Containerization & Deployment',
            description: 'Containerized development environments, multi-stage builds, and consistent deployment packaging.',
          },
        ],
      },
    ],
  },

  projects: {
    sectionTag: '03 // FEATURED PROJECTS',
    headline: 'Selected full-stack and AI architectural showcases.',
    subtitle:
      'Explore representative architectures across ecommerce, applied AI, and SaaS systems. Links below are clearly marked placeholders ready for your live deployment and repository URLs.',
    items: [
      {
        id: 'mern-ecommerce',
        index: '01',
        category: 'Full-Stack Commerce',
        title: 'MERN Stack Ecommerce Application',
        subtitle: 'End-to-End Digital Storefront, Cart Engine & Razorpay Payment Workflow',
        description:
          'A full-featured ecommerce web application engineered with the MERN stack. Designed to handle dynamic product catalogs, persistent cart state, user authentication, order lifecycle management, and secure payment processing via Razorpay.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
        keyFeatures: [
          'Dynamic product catalog with category filtering, search queries, and responsive product detail views',
          'JWT-based user authentication, protected customer profiles, and role-gated admin inventory dashboard',
          'Stateful shopping cart with quantity validation and real-time order summary calculation',
          'Razorpay payment gateway integration with backend order creation and cryptographic signature verification',
          'MongoDB schema design for products, users, and multi-stage order tracking',
        ],
        architectureNotes: {
          frontend: 'React + Tailwind CSS SPA with modular product cards, cart drawer, and checkout stepper.',
          backend: 'Node.js & Express REST API with authentication middleware and payment verification routes.',
          dataLayer: 'MongoDB collections for catalog items, customer accounts, and transactional order logs.',
        },
        visualType: 'ecommerce',
        // PLACEHOLDER LINKS — Replace with your actual deployed URL and GitHub repository
        liveDemoUrl: 'https://your-mern-ecommerce-demo.example.com',
        githubRepoUrl: 'https://github.com/your-username/mern-ecommerce-placeholder',
        isPlaceholderLinks: true,
      },
      {
        id: 'ai-powered-apps',
        index: '02',
        category: 'Applied AI Engineering',
        title: 'AI-Powered Applications',
        subtitle: 'Intelligent Content, Document Assistant & Workflow Automation Suite',
        description:
          'A suite of AI-integrated web applications that connect modern frontend interfaces with AI APIs. Built to transform unstructured user inputs into structured insights, summaries, and interactive conversational workflows with low-latency feedback.',
        techStack: ['Next.js', 'React', 'AI APIs', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion'],
        keyFeatures: [
          'Server-side AI API proxy routes in Node.js/Next.js to keep API keys secure and never exposed to the client',
          'Streaming and progressive response rendering with smooth Framer Motion state transitions',
          'Structured prompt templates and output parsing for reliable, actionable UI rendering',
          'Conversation history management and persistent workspace sessions backed by MongoDB',
          'Graceful error boundaries, rate-limit handling, and clear loading states for real-world reliability',
        ],
        architectureNotes: {
          frontend: 'Next.js & React interactive workspace with prompt composer, streaming output cards, and history sidebar.',
          backend: 'Secure API route layer handling prompt sanitization, AI API orchestration, and response formatting.',
          dataLayer: 'MongoDB storage for saved prompts, structured outputs, and user session state.',
        },
        visualType: 'ai',
        // PLACEHOLDER LINKS — Replace with your actual deployed URL and GitHub repository
        liveDemoUrl: 'https://your-ai-application-demo.example.com',
        githubRepoUrl: 'https://github.com/your-username/ai-powered-app-placeholder',
        isPlaceholderLinks: true,
      },
      {
        id: 'saas-applications',
        index: '03',
        category: 'Cloud Software Architecture',
        title: 'SaaS Applications',
        subtitle: 'Multi-Workspace Web Platform with Subscription Billing & Containerized Deployment',
        description:
          'A scalable Software-as-a-Service (SaaS) application blueprint combining responsive dashboard interfaces, RESTful backend services, subscription tier management with Razorpay, and Dockerized deployment configuration.',
        techStack: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Docker', 'Tailwind CSS'],
        keyFeatures: [
          'Workspace-oriented dashboard layout with role-based navigation, settings panels, and activity feeds',
          'Subscription tier and billing workflow powered by Razorpay webhooks and account entitlement checks',
          'Modular REST API architecture in Express.js with clean separation of controllers, services, and models',
          'Dockerized setup for consistent local development and reproducible cloud deployment',
          'Accessible, keyboard-friendly UI components styled with Tailwind CSS and subtle Framer Motion transitions',
        ],
        architectureNotes: {
          frontend: 'React / Next.js dashboard interface with responsive sidebar navigation, data tables, and billing modals.',
          backend: 'Express.js service layer managing workspace permissions, webhook events, and API endpoints.',
          dataLayer: 'MongoDB indexed collections with Docker Compose orchestration for local and production parity.',
        },
        visualType: 'saas',
        // PLACEHOLDER LINKS — Replace with your actual deployed URL and GitHub repository
        liveDemoUrl: 'https://your-saas-platform-demo.example.com',
        githubRepoUrl: 'https://github.com/your-username/saas-application-placeholder',
        isPlaceholderLinks: true,
      },
    ],
  },

  services: {
    sectionTag: '04 // CLIENT SERVICES',
    headline: 'Engineering services tailored for international founders, startups, and product teams.',
    subtitle:
      'Clear scope, clean code, and direct technical collaboration—helping you launch new products or upgrade existing web platforms with modern full-stack and AI capabilities.',
    items: [
      {
        id: 'fullstack-dev',
        number: '01',
        title: 'Full-Stack Web Application Development',
        tagline: 'End-to-end custom web applications built from architectural blueprint to launch.',
        description:
          'Complete engineering of modern web applications combining responsive React or Next.js frontends with secure, well-structured Node.js backend APIs and database persistence.',
        deliverables: ['Frontend & Backend Architecture', 'RESTful API Design', 'Production Deployment Setup'],
      },
      {
        id: 'mern-dev',
        number: '02',
        title: 'MERN Stack Development',
        tagline: 'Unified JavaScript engineering across MongoDB, Express.js, React, and Node.js.',
        description:
          'Cohesive single-language stack development ideal for dynamic platforms, marketplaces, and custom business portals requiring fast iteration and clean data flow.',
        deliverables: ['MongoDB Schema Modeling', 'Express API Middleware', 'Stateful React Interfaces'],
      },
      {
        id: 'ai-api-integration',
        number: '03',
        title: 'AI API Integration',
        tagline: 'Embed intelligent capabilities directly into your existing product or workflow.',
        description:
          'Secure backend integration of modern AI APIs into your web application—enabling smart summarization, content generation, semantic search, or automated data extraction.',
        deliverables: ['Secure Server-Side AI Proxies', 'Prompt & Output Structuring', 'Streaming UI Feedback'],
      },
      {
        id: 'ai-app-dev',
        number: '04',
        title: 'AI-Powered Application Development',
        tagline: 'Purpose-built AI products designed around intuitive human-in-the-loop experiences.',
        description:
          'Design and development of dedicated AI web products from scratch, pairing thoughtful UX patterns with reliable backend orchestration and persistent user workspaces.',
        deliverables: ['Interactive AI Workspaces', 'Session & History Storage', 'Latency-Optimized UX'],
      },
      {
        id: 'saas-dev',
        number: '05',
        title: 'SaaS Development',
        tagline: 'Scalable multi-user web platforms ready for customer onboarding and monetization.',
        description:
          'Foundational SaaS engineering including authentication flows, customer dashboards, subscription tier gating, payment integration, and Dockerized deployment.',
        deliverables: ['Dashboard & Account Systems', 'Subscription Gating Logic', 'Containerized Infrastructure'],
      },
      {
        id: 'payment-integration',
        number: '06',
        title: 'Payment Gateway Integration',
        tagline: 'Reliable checkout and billing flows engineered with Razorpay.',
        description:
          'End-to-end implementation of payment workflows including order creation, checkout modal integration, server-side signature verification, and webhook event handling.',
        deliverables: ['Razorpay Checkout Flows', 'Cryptographic Verification', 'Webhook Order Sync'],
      },
      {
        id: 'responsive-web',
        number: '07',
        title: 'Responsive Website Development',
        tagline: 'High-craft, performant websites engineered with React, Tailwind CSS, and Framer Motion.',
        description:
          'Pixel-accurate, mobile-first websites and landing experiences featuring strong typographic hierarchy, smooth scroll animations, technical SEO, and fast load times.',
        deliverables: ['Mobile-First Layouts', 'Framer Motion Micro-Interactions', 'Technical SEO & Accessibility'],
      },
    ],
  },

  resume: {
    sectionTag: '05 // CURRICULUM VITAE',
    headline: 'Technical Resume & Architecture Summary',
    description:
      'Download a clean summary of my technical stack, full-stack and AI engineering capabilities, and project focus areas.',
    fileUrl: '/resume/Priyanshu_Dhaka_Resume_Placeholder.pdf',
    fileName: 'Priyanshu_Dhaka_Resume_Placeholder.pdf',
    isPlaceholder: true,
    placeholderNotice:
      'Placeholder Document Notice: The linked PDF (/public/resume/Priyanshu_Dhaka_Resume_Placeholder.pdf) is a clearly documented placeholder so no fake employment history or academic credentials are invented. Replace the file in /public/resume/ with your official PDF resume before publishing.',
  },

  contact: {
    sectionTag: '06 // INITIATE COLLABORATION',
    headline: "Let's build something intelligent, scalable, and enduring.",
    subtitle:
      'Available for international freelance projects, technical consulting, and remote Full-Stack / AI Engineering roles. Use the form below or reach out directly via email.',
    formNotice:
      'Form Configuration Notice: By default, this form runs client-side validation and prepares a structured inquiry (with one-click mailto handoff or copyable payload) so messages are never silently lost without a backend. To enable direct server delivery, set VITE_CONTACT_ENDPOINT in your .env.local file.',
    socials: [
      {
        id: 'github',
        label: 'GitHub',
        handle: '@your-github-username (Placeholder)',
        url: 'https://github.com/your-username',
        isPlaceholder: true,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        handle: '/in/your-linkedin-profile (Placeholder)',
        url: 'https://linkedin.com/in/your-profile',
        isPlaceholder: true,
      },
      {
        id: 'x',
        label: 'X / Twitter',
        handle: '@your-x-handle (Placeholder)',
        url: 'https://x.com/your-handle',
        isPlaceholder: true,
      },
    ],
  },
};
