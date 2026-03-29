export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  role: string;
  liveLink: string;
  liveLinkLabel: string;
  year: string;
  image: string;
  overview: string;
  projectGoal: string;
  roleAndServices: string[];
  closing: string;
  prev?: { slug: string; label: string };
  next?: { slug: string; label: string };
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "atmosphere",
    title: "Atmosphere for Business",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://www.atmosphere.ng",
    liveLinkLabel: "Atmosphere",
    year: "2024",
    image: "/assets/atmosphere.svg",
    overview:
      "Atmosphere.ng is a dynamic e-commerce platform built to provide a fast, engaging, and seamless shopping experience. The project focused on creating a responsive, scalable front-end that brings the platform's modern design and functionality to life across devices.",
    projectGoal:
      "The goal was to deliver a high-performance, user-friendly interface that supports browsing, purchasing, and account management with minimal friction. The platform needed to feel intuitive, reliable, and visually engaging while maintaining strong responsiveness and fast load times.",
    roleAndServices: [
      "Front-End Development: Built the interface using React.js, leveraging component-based architecture and server-side rendering for faster initial load and SEO optimization.",
      "API Integration: Integrated with RESTful APIs to fetch product data, manage user accounts, and handle transactions in real time.",
      "Responsive Design: Developed a fully responsive UI with Tailwind CSS and CSS media queries to ensure seamless experiences across desktops, tablets, and mobile devices.",
      "UI Implementation: Translated UI/UX designs into reusable React components, implementing interactive elements such as carousels, modals, and dynamic product filters.",
      "Web Performance Optimization: Applied lazy loading, image optimization, and code-splitting to enhance page speed and runtime efficiency.",
    ],
    closing:
      "I handled the end-to-end front-end development, creating a maintainable, performant, and visually consistent experience that aligns with Atmosphere.ng's mission of delivering an effortless online shopping journey.",
    next: { slug: "blanksheet", label: "Blanksheet" },
  },
  {
    id: 2,
    slug: "blanksheet",
    title: "Blanksheet LMS",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://www.blanksheet.co",
    liveLinkLabel: "Blanksheet",
    year: "2025",
    image: "/assets/bla.svg",
    overview:
      "Blanksheet is a modern learning platform designed to deliver a fast, intuitive, and accessible digital learning experience. The project focused on building a responsive and scalable front-end architecture that brings the product's simplicity and functionality to life across devices.",
    projectGoal:
      "The objective was to build a high-performance, user-centric interface that caters to both students and institutions. The platform needed to feel smooth, reliable, and easy to navigate, while maintaining optimal performance and responsiveness.",
    roleAndServices: [
      "Front-End Development: Implemented the platform using React, leveraging component-based architecture for modularity and maintainability.",
      "API Integration: Connected to RESTful APIs and GraphQL endpoints to dynamically fetch and manage content, ensuring real-time data updates.",
      "Responsive Design: Developed a fully responsive UI with CSS-in-JS and media queries to ensure seamless experiences across desktops, tablets, and mobile devices.",
      "UI Implementation: Translated high-fidelity designs into clean, reusable React components with a focus on accessibility and UX best practices.",
      "Web Performance Optimisation: Applied code-splitting, lazy loading, and performance profiling to minimise load times and enhance runtime efficiency.",
    ],
    closing:
      "I managed the front-end experience end-to-end, delivering a scalable, maintainable, and performant interface that aligns with Blanksheet's vision of simplicity and speed.",
    prev: { slug: "atmosphere", label: "Atmosphere" },
    next: { slug: "techbleat", label: "Techbleat" },
  },
  {
    id: 3,
    slug: "techbleat",
    title: "Techbleat Website",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://techbleat.co.uk",
    liveLinkLabel: "Techbleat",
    year: "2024",
    image: "/assets/bleat.svg",
    overview:
      "Techbleat is a tech media platform built to deliver fast, readable, and engaging content experiences. The project focused on building a performant marketing site and blog with clean editorial design.",
    projectGoal:
      "The goal was to create a content-first platform that felt premium and trustworthy. Fast page loads, readable typography, and mobile-first design were core priorities.",
    roleAndServices: [
      "Front-End Development: Built the site using Next.js with SSG for fast page delivery and excellent SEO.",
      "Responsive Design: Implemented a mobile-first layout system using Tailwind CSS.",
      "UI Implementation: Translated editorial design mockups into reusable components.",
      "Performance: Optimised images, fonts, and scripts to achieve high Lighthouse scores.",
    ],
    closing:
      "I delivered a polished, fast, and accessible marketing site that reflects Techbleat's brand and content strategy.",
    prev: { slug: "blanksheet", label: "Blanksheet" },
  },
];