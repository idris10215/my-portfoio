export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];

export const myProjects = [
  {
    title: "🌍 Wanderlust - Travel Booking Platform",
    desc: "A server-rendered travel platform where users can browse beautiful destinations, add their own travel listings with images, edit or delete entries, rate places, and manage their accounts through a secure login/logout system.",
    subdesc:
      "Developed using MongoDB, Express.js, Node.js, and EJS for templating. The Web app includes user authentication via Passport.js, cloud-based image uploads with Cloudinary, and data handling with Mongoose. Wanderlust gave me real-world experience in building dynamic, full-featured web apps with secure routes, user sessions, and media integration",
    href: "https://github.com/idris10215/WanderLust",
    texture: "/textures/project/Wanderlust.mp4",
    // logo: '/assets/project-logo1.png',
    // logoStyle: {
    //     backgroundColor: '#2A1816',
    //     border: '0.2px solid #36201D',
    //     boxShadow: '0px 0px 60px 0px #AA3C304D',
    // },
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "🎥 Meetzy – Video Conferencing App",
    desc: "A full-stack web application for real-time video conferencing with features like audio/video chat, messaging, screen sharing, and secure meeting room creation.",
    subdesc:
      "Meetzy leverages WebRTC for real-time communication, React.js for a dynamic and responsive frontend, and Node.js/Express to handle backend logic and API routing. It includes user authentication, modular architecture, and is designed for scalability and ease of feature expansion.",
    href: "https://meetzy-8rdp.onrender.com/",
    texture: "/textures/project/meetzy.mp4",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
  },
  {
    title: "🍽️ The Cozy Table",
    desc: "A responsive restaurant website developed as part of a team internship project, featuring an interactive menu, order placement, and modular frontend components to enhance the dining experience.",
    subdesc:
      "I contributed to the frontend development and the design of the Order Management module's data structure, using Angular with TypeScript. Instead of a traditional database, we structured and handled data using JSON, simulating backend behavior for managing orders. This project helped me understand component communication, service-based architecture, and how to structure application data in real-world scenarios.",
    href: "https://github.com/idris10215/The-Cozy-Table",
    texture: "/textures/project/Thecozytable.mp4",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
  },
  {
    title: "📈 Zerodha Clone - Stock Trading App",
    desc: "A frontend clone of the Zerodha landing page, created to practice React fundamentals and build a deeper understanding of component-based UI design.",
    subdesc:
      "Built using React, Vite, and Bootstrap, this project focuses on recreating the structure and layout of a professional finance website. It helped me learn JSX syntax, component reuse, and responsive design principles while using Bootstrap’s utility classes for quick and consistent styling.",
    href: "https://zerodha-clone-ecru.vercel.app/",
    texture: "/textures/project/Zerodha.mp4",
    // logo: '/assets/project-logo2.png',
    // logoStyle: {
    //     backgroundColor: '#13202F',
    //     border: '0.2px solid #17293E',
    //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
    // },
    spotlight: "/assets/spotlight2.png",
  },

  // {
  //     title: 'Horizon - Online Banking Platform',
  //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //     subdesc:
  //         'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //     texture: '/textures/project/project4.mp4',
  //     logo: '/assets/project-logo4.png',
  //     logoStyle: {
  //         backgroundColor: '#0E1F38',
  //         border: '0.2px solid #0E2D58',
  //         boxShadow: '0px 0px 60px 0px #2F67B64D',
  //     },
  //     spotlight: '/assets/spotlight4.png',
  //     tags: [
  //         {
  //             id: 1,
  //             name: 'React.js',
  //             path: '/assets/react.svg',
  //         },
  //         {
  //             id: 2,
  //             name: 'TailwindCSS',
  //             path: 'assets/tailwindcss.png',
  //         },
  //         {
  //             id: 3,
  //             name: 'TypeScript',
  //             path: '/assets/typescript.png',
  //         },
  //         {
  //             id: 4,
  //             name: 'Framer Motion',
  //             path: '/assets/framer.png',
  //         },
  //     ],
  // },
  // {
  //     title: 'Imaginify - AI Photo Manipulation App',
  //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //     subdesc:
  //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //     texture: '/textures/project/project5.mp4',
  //     logo: '/assets/project-logo5.png',
  //     logoStyle: {
  //         backgroundColor: '#1C1A43',
  //         border: '0.2px solid #252262',
  //         boxShadow: '0px 0px 60px 0px #635BFF4D',
  //     },
  //     spotlight: '/assets/spotlight5.png',
  //     tags: [
  //         {
  //             id: 1,
  //             name: 'React.js',
  //             path: '/assets/react.svg',
  //         },
  //         {
  //             id: 2,
  //             name: 'TailwindCSS',
  //             path: 'assets/tailwindcss.png',
  //         },
  //         {
  //             id: 3,
  //             name: 'TypeScript',
  //             path: '/assets/typescript.png',
  //         },
  //         {
  //             id: 4,
  //             name: 'Framer Motion',
  //             path: '/assets/framer.png',
  //         },
  //     ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

// export const workExperiences = [
//     {
//         id: 1,
//         name: 'Framer',
//         pos: 'Lead Web Developer',
//         duration: '2022 - Present',
//         title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
//         icon: '/assets/framer.svg',
//         animation: 'victory',
//     },
//     {
//         id: 2,
//         name: 'Figma',
//         pos: 'Web Developer',
//         duration: '2020 - 2022',
//         title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
//         icon: '/assets/figma.svg',
//         animation: 'clapping',
//     },
//     {
//         id: 3,
//         name: 'Notion',
//         pos: 'Junior Web Developer',
//         duration: '2019 - 2020',
//         title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//         icon: '/assets/notion.svg',
//         animation: 'salute',
//     },
// ];
