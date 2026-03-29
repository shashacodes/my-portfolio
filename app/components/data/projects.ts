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
    image: "/assets/project1.svg",
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
    next: { slug: "blanksheet-lms", label: "next" },
  },
  {
    id: 2,
    slug: "blanksheet-lms",
    title: "Blanksheet LMS",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://www.blanksheet.co",
    liveLinkLabel: "Blanksheet",
    year: "2025",
    image: "/assets/project2.svg",
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
    prev: { slug: "atmosphere", label: "prev" },
    next: { slug: "techbleat", label: "next" },
  },
  {
    id: 3,
    slug: "techbleat",
    title: "Techbleat Website",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://techbleat.co.uk",
    liveLinkLabel: "Techbleat",
    year: "2024",
    image: "/assets/project3.svg",
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
    prev: { slug: "blanksheet-lms", label: "prev" },
           next: { slug: "MyNaijaMarket", label: "next" },

  },
  {
    id: 4,
    slug: "MyNaijaMarket",
    title: "MyNaijaMarket Website",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "#",
    liveLinkLabel: "MyNaijaMarket",
    year: "2023",
    image: "/assets/project4.svg",
    overview:
"MyNaijaMarket is an e-commerce platform tailored for the Nigerian market, designed to provide a fast, seamless, and accessible online shopping experience. The project focused on building a responsive, scalable front-end that showcases products effectively and supports smooth customer interactions across all devices.", 
   projectGoal:
"Project GoalThe goal was to deliver a high-performance, user-friendly interface that allows users to browse products, manage carts, and complete purchases efficiently. The platform needed to feel intuitive, reliable, and visually appealing while maintaining strong responsiveness and fast load times."   ,
 roleAndServices: [
"Front-End Development: Implemented the interface using React and Next.js, leveraging reusable components for scalability and maintainability.",
"API Integration: Connected to RESTful APIs to fetch product listings, handle user authentication, and manage transactions in real time.",
"Responsive Design: Built a fully responsive UI using Tailwind CSS and media queries to ensure consistent experiences across desktops, tablets, and mobile devices.",
"Web Interactions: Developed interactive product cards, dynamic filters, and modals to enhance the user shopping experience.",
"Performance Optimization: Applied lazy loading, image optimization, and code-splitting to improve page speed and overall platform performance."   
],
    closing:
"I managed the end-to-end front-end development, delivering a scalable, maintainable, and performant interface that aligns with MyNaijaMarket’s mission of providing effortless online shopping in Nigeria." ,
   prev: { slug: "Techbleat", label: "prev" },
       next: { slug: "Blogr", label: "next" },

  },
  {
    id: 5,
    slug: "Blogr",
    title: "Blogr Website",
    role: "Front-End Development · Responsive Design · Web Interactions",
    liveLink: "https://shashacodes.github.io/tailwind-6b2/index.html#",
    liveLinkLabel: "Blogr",
    year: "2023",
    image: "/assets/project5.svg",
    overview:"Blogr is a modern blogging platform built to provide a seamless, extensible, and intuitive content creation experience. The project focused on creating a responsive, high-performance front-end that allows users to manage multiple blogs, customize layouts, and embed rich media with ease." ,
    projectGoal: "The goal was to create a content-first platform that felt premium and trustworthy. Fast page loads, readable typography, and mobile-first design were core priorities.",
    roleAndServices: [
"Front-End Development: Implemented the interface using React and Next.js, leveraging reusable components for scalability and maintainability.",
"API Integration: Connected to RESTful APIs to fetch product listings, handle user authentication, and manage transactions in real time.",
"Responsive Design: Built a fully responsive UI using Tailwind CSS and media queries to ensure consistent experiences across desktops, tablets, and mobile devices.",
"Web Interactions: Developed interactive product cards, dynamic filters, and modals to enhance the user shopping experience.",
"Performance Optimization: Applied lazy loading, image optimization, and code-splitting to improve page speed and overall platform performance."   
],
    closing:
"I handled the end-to-end front-end development, delivering a scalable, maintainable, and performant interface that allows users to focus on creating content while maintaining full control over their blog’s structure and appearance."  ,
 prev: { slug: "Techbleat ", label: "prev " },
  },
];