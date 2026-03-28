export interface CodeBlock {
  language: string;
  code: string;
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "subheading" | "code" | "image" | "list" | "challenge" | "callout";
  content?: string;
  items?: string[];
  code?: CodeBlock;
  src?: string;
  alt?: string;
  topic?: string;
  text?: string;
  paragraph?: string;
  content1?: string
}

export interface BlogPostDetail {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPostDetail[] = [
  {
    slug: "building-high-performance-lms",  
    title: "Building a High-Performance LMS Front-End with React & Next.js",
    subtitle: "Creating a responsive, scalable, and user-friendly learning platform from scratch.",
    date: "Apr 8, 2025",
    readTime: "5 mins Read",
    content: [
      {
        type: "paragraph",
        
      },
      {
        type: "heading",
        content: "Introduction",
      },
      {
        type: "paragraph",
        content:
"In this post, I’ll walk through how I built the front-end of BlankSheet, a modern Learning Management System, using React and Next.js. The focus was on creating a smooth, responsive interface that supports both students and institutions while keeping performance at the forefront."      },
      {
        type: "image",
        src: "/assets/lms1.svg",
        alt: "LMS dashboard overview",
      },
      {
        type: "heading",
        content: "Challenges",
      },
      {
        type: "list",
        topic:"Building a modern LMS comes with unique front-end challenges:",
        items: [
          "Managing complex, dynamic content such as courses, modules, and student progress",
"Maintaining fast load times while supporting rich interactivity",
"Designing a responsive UI that works seamlessly across devices",         
"Balancing functionality and simplicity to ensure an intuitive user experience",        ],
      },
      {
        type: "image",
        src: "/assets/lms1.svg",
        alt: "LMS challenges diagram",
      },
      {
        type: "heading",
        content: "Tech Stack $ Tools",
      },
      {
        type: "list",
        topic:"React + Next.js – Component-based architecture with server-side rendering for fast initial load",
        items: [
"Tailwind CSS – Responsive design and rapid styling",
"REST APIs – Fetching dynamic course and student data",
"Framer Motion (optional) – Subtle UI animations",
"Vercel – Deployment and performance optimization",        ],
      },
      {
        type: "heading",
        content: "Implementation",
        text: "Dashboard & Layout",
        paragraph:"The dashboard was designed for both students and administrators. I built reusable components to display course lists, student progress, and notifications.",
      },
       {
        type: "image",
        src: "/assets/lms2.svg",
        alt: "Implementation",
      },
            {
        type: "heading",
        content: "API Integration for Dynamic Content",
        paragraph:"Dynamic course data and student progress were fetched from a REST API and displayed in real time.",
      },
       {
        type: "image",
        src: "/assets/lms3.svg",
        alt: "API integration for dynamic contet ",
      },
        {
        type: "heading",
        content: "Responsive Design & Interactions",
        content1:"The UI was built mobile-first with Tailwind CSS, ensuring layouts adapted across devices. Interactive elements included:",
      },
      {
        type: "list",
        topic:"React + Next.js – Component-based architecture with server-side rendering for fast initial load",
        items: [
"Expandable course modules",
"Hover effects and animated buttons using Framer Motion",
"Modal pop-ups for course details",       ],
      },
        {
        type: "heading",
        content: "Performance  Optimisation",
      },
      {
        type: "list",
        topic:"Key optimizations included:",
        items: [
            "Lazy-loading images and components",
"Using Next.js SSR for faster first-page load",
"Code-splitting to reduce bundle size",
"Accessibility improvements for smoother navigation",
        ]
      },
        {
        type: "heading",
        content: "Outcome & Lessons Learned",
      },
      {
        type: "list",
        topic: "Built a scalable, maintainable, and high-performing front-end",
        items: [
            "Learned advanced techniques in React component architecture, API integration, and responsive design",
"Optimized UX and performance, making the platform feel intuitive and fast",
        ]
      },

    ],
  },
];