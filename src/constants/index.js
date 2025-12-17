export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
  title: 'Genkit — AI Application Builder',
  desc: 'Genkit is an AI-powered application builder that generates complete full-stack applications from natural language prompts. It automates code generation, validation, and execution while maintaining structure and reliability.',
  subdesc:
    'Built as a full-stack AI SaaS using Next.js, TypeScript, Prisma, and PostgreSQL (Neon). Genkit uses event-driven workflows with Inngest and LLM-based agents to orchestrate multi-step application generation.',
  href: 'https://github.com/ABHIGGGG/Genkit',
  texture: '/textures/project/project1.mp4',
  logo: '/assets/logo1.svg',
  logoStyle: {
    backgroundColor: '#0F172A',
    border: '0.2px solid #1E293B',
    boxShadow: '0px 0px 60px 0px #3B82F64D',
  },
  spotlight: '/assets/spotlight1.png',
  tags: [
    {
      id: 1,
      name: 'Next.js',
      path: '/assets/Nextjs.svg',
    },
    {
      id: 2,
      name: 'TypeScript',
      path: '/assets/typescript.png',
    },
    {
      id: 3,
      name: 'Prisma',
      path: '/assets/prisma.svg',
    },
    {
      id: 4,
      name: 'Inngest',
      path: '/assets/Inngest.jpeg',
    },
  ],
  },
    {
  title: 'FoodoraX — Online Food Ordering Platform',
  desc: 'FoodoraX is a full-stack online food ordering platform that handles user sessions, restaurant catalogs, cart management, and complete order lifecycles through well-structured backend services.',
  subdesc:
    'Built using React, Node.js, Express, and MongoDB, the platform includes secure checkout flows with PayPal sandbox integration and location-aware order handling using Leaflet for delivery mapping and order tracking.',
  href: 'https://foodorax.onrender.com/',
  texture: '/textures/project/project2.mp4', // update if different
  logo: '/assets/logo2.jpeg',          // update if needed
  logoStyle: {
    backgroundColor: '#0F1A14',
    border: '0.2px solid #1F3D2B',
    boxShadow: '0px 0px 60px 0px #34D3994D',
  },
  spotlight: '/assets/spotlight2.png',
  tags: [
    {
      id: 1,
      name: 'React',
      path: '/assets/react.svg',
    },
    {
      id: 2,
      name: 'Node.js',
      path: '/assets/node.jpeg',
    },
    {
      id: 3,
      name: 'Express',
      path: '/assets/express.svg',
    },
    {
      id: 4,
      name: 'MongoDB',
      path: '/assets/mongo.svg',
    },
  ],

  },
  
   {
  title: 'Reelio — Video Reel Sharing Platform',
  desc: 'Reelio is a modern video reel sharing platform where users can upload, manage, and view short video content with user authentication and responsive design.',
  subdesc:
    'Built with Next.js, NextAuth.js, MongoDB, ImageKit CDN, and Tailwind CSS. The platform includes secure authentication (email/password, Google, GitHub), video uploads, and a smooth, responsive UI across devices.',
  href: 'https://reelios.vercel.app/',
  texture: '/textures/project/project3.mp4',
  logo: '/assets/logo3.jpeg',
  logoStyle: {
    backgroundColor: '#111827',
    border: '0.2px solid #374151',
    boxShadow: '0px 0px 60px 0px #6B72804D',
  },
  spotlight: '/assets/spotlight3.png',
  tags: [
    {
      id: 1,
      name: 'Next.js',
      path: '/assets/Nextjs.svg',
    },
    {
      id: 2,
      name: 'MongoDB',
      path: '/assets/mongo.svg',
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: '/assets/tailwindcss.png',
    },
    {
      id: 4,
      name: 'ImageKit',
      path: '/assets/imagekit.svg',
    },
  ],

  },
    {
  title: 'Credenza — CA Document Management Portal',
  desc: 'Credenza is a secure, cloud-based document management portal built for Chartered Accountants and their clients to upload, manage, and verify financial documents efficiently.',
  subdesc:
    'Built with React, Tailwind CSS, and Firebase, the platform supports role-based authentication for CAs and clients, secure file uploads, real-time document status updates, analytics dashboards, and access-controlled document management.',
  href: 'https://github.com/ABHIGGGG/Credenza',
  texture: '/textures/project/project4.mp4',
  logo: '/assets/logo4.jpeg',
  logoStyle: {
    backgroundColor: '#0B1220',
    border: '0.2px solid #1E293B',
    boxShadow: '0px 0px 60px 0px #3B82F64D',
  },
  spotlight: '/assets/spotlight4.png',
  tags: [
    {
      id: 1,
      name: 'React',
      path: '/assets/react.svg',
    },
    {
      id: 2,
      name: 'Firebase',
      path: '/assets/firebase.svg',
    },
    {
      id: 3,
      name: 'TailwindCSS',
      path: '/assets/tailwindcss.png',
    },
    {
      id: 4,
      name: 'Cloudinary',
      path: '/assets/cloudinary.svg',
    },
  ],
}
,
  {
  title: 'Chatfrik — Real-Time Messaging Platform',
  desc: 'A real-time chat application that enables users to send and receive messages instantly with support for online presence, message history, and responsive design.',
  subdesc:
    'Built with React, Firebase (Auth, Firestore, Storage), and Tailwind CSS. The app supports user authentication, real-time messaging, online/offline status, and message persistence across sessions.',
  href: 'https://github.com/ABHIGGGG/chat-app',
  texture: '/textures/project/project5.mp4',
  logo: '/assets/logo5.svg',
  logoStyle: {
    backgroundColor: '#0F1A2A',
    border: '0.2px solid #1D2A40',
    boxShadow: '0px 0px 60px 0px #2563EB4D',
  },
  spotlight: '/assets/spotlight5.png',
  tags: [
    {
      id: 1,
      name: 'React',
      path: '/assets/react.svg',
    },
    {
      id: 2,
      name: 'Firebase',
      path: '/assets/firebase.svg',
    },
    {
      id: 3,
      name: 'TailwindCSS',
      path: '/assets/tailwindcss.png',
    },
    {
      id: 4,
      name: 'Cloudinary',
      path: '/assets/cloudinary.svg',
    },
  ],
}
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
