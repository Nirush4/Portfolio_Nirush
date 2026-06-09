import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Holidaze 🏡',
    description:
      'Modern accommodation booking platform built with React and TypeScript, featuring venue management, bookings, authentication, and a scalable frontend architecture.',
    story: [
      'Holidaze is a modern accommodation booking platform where users can browse venues, search destinations, view availability, and make bookings through an intuitive user experience.',
      'The application supports two user roles: customers and venue managers. Customers can book venues, manage upcoming bookings, and update their profiles, while venue managers can create, edit, and manage venue listings and bookings.',
      'Built with React and TypeScript, the project focuses on maintainable architecture, type safety, accessibility, and responsive design. Zustand is used for global state management, while React Hook Form and Zod provide robust form handling and validation.',
      'The user interface combines Mantine UI, Material UI, and Tailwind CSS to create a modern and responsive experience across desktop and mobile devices. Testing was implemented using Vitest and Playwright to ensure application reliability and quality.',
    ],
    features: [
      {
        title: 'Venue browsing & search',
        description:
          'Users can browse available venues, search destinations, and explore detailed venue information.',
      },
      {
        title: 'Venue details & availability',
        description:
          'Each venue includes images, amenities, pricing information, and an availability calendar for bookings.',
      },
      {
        title: 'Booking management',
        description:
          'Customers can create, view, and cancel bookings through a streamlined booking workflow.',
      },
      {
        title: 'Venue manager dashboard',
        description:
          'Venue managers can create, edit, delete, and manage accommodation listings and bookings.',
      },
      {
        title: 'Authentication & user profiles',
        description:
          'Secure user authentication with support for profile management and avatar updates.',
      },
      {
        title: 'Form validation (React Hook Form + Zod)',
        description:
          'Type-safe and scalable form validation for registration, login, venue management, and booking forms.',
      },
      {
        title: 'Responsive & accessible UI',
        description:
          'Built with Mantine UI, Material UI, and Tailwind CSS to provide a consistent experience across all devices.',
      },
      {
        title: 'Testing & quality assurance',
        description:
          'Unit, component, and end-to-end testing implemented using Vitest and Playwright.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mantine UI',
      'Material UI',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Vitest',
      'Playwright',
    ],
    github: 'https://github.com/Nirush4/Holidaze-booking-platform',
    live: 'https://holidaze-booking-hub.netlify.app/',
    thumbnail: '/projects/holidaze.png',
    screenshots: [],
  },
  {
    id: 2,
    name: 'Online Shop 🛒',
    description:
      'Frontend e-commerce application built with React and TypeScript, focused on performance, scalability, and a clean user experience.',
    story: [
      'Online Shop is a modern e-commerce web application where users can browse products, view detailed product pages, and complete purchases through a smooth checkout flow.',
      'The project is built using React and TypeScript, with TanStack Query handling server state, caching, and synchronization. Zustand is used for lightweight and scalable global state management, particularly for the shopping cart.',
      'Form validation is implemented using Zod to ensure type safety and a robust user input experience. The UI is built with Mantine UI and enhanced with Tailwind CSS for responsive design and flexible styling.',
      'This project focuses on frontend architecture and simulates real-world e-commerce functionality, strengthening my skills in state management, data fetching, and building scalable, user-friendly interfaces.',
    ],
    features: [
      {
        title: 'Product listing with search & sorting',
        description:
          'Users can browse products with dynamic search and sorting functionality for an efficient and intuitive shopping experience.',
      },
      {
        title: 'Product detail pages',
        description:
          'Each product includes detailed information, customer reviews, and ratings to help users make informed decisions.',
      },
      {
        title: 'Shopping cart (Zustand)',
        description:
          'Global cart state managed with Zustand, allowing users to add, remove, and update product quantities seamlessly.',
      },
      {
        title: 'Checkout flow',
        description:
          'Smooth and user-friendly checkout process with confirmation feedback upon successful order completion.',
      },
      {
        title: 'Form validation (Zod)',
        description:
          'Robust and type-safe validation for forms, ensuring accurate user input and better error handling.',
      },
      {
        title: 'Responsive & modern UI',
        description:
          'Built with Mantine UI and Tailwind CSS to deliver a clean, accessible, and fully responsive design across all devices.',
      },
      {
        title: 'Dynamic breadcrumbs',
        description:
          'Improved navigation with dynamic breadcrumb trails, helping users understand their location within the app.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Zod',
      'Mantine UI',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Nirush4/JavaScript-Frameworks',
    live: 'https://online-shopping-master.netlify.app/',
    thumbnail: '/projects/online-shopping.png',
    screenshots: [],
  },
  {
    id: 3,
    name: 'NewsHub 📰',
    description:
      'Full-stack news platform built with React, TypeScript, and Tailwind CSS, using Supabase as a Backend-as-a-Service for authentication, database management, and secure CRUD operations.',
    story: [
      'NewsHub is a full-stack web application that allows users to browse public news articles and, once authenticated, create, update, and manage their own content.',
      'The project is built using React and TypeScript on the frontend, with Supabase providing authentication, database storage, and Row Level Security (RLS). The application supports full CRUD functionality while enforcing access control so users can only modify their own articles.',
      'Through this project, I gained hands-on experience with Supabase as a BaaS, frontend route protection, and conditional UI rendering based on authentication state. It also strengthened my understanding of scalable frontend architecture and cloud-based data management.',
    ],
    features: [
      {
        title: 'User authentication',
        description:
          'Email and password authentication powered by Supabase Auth, with conditional UI rendering and protected routes based on login state.',
      },
      {
        title: 'Public article browsing',
        description:
          'All users can view published news articles, including title, body, category, submission date, and author information without authentication.',
      },
      {
        title: 'Article management (CRUD)',
        description:
          'Authenticated users can create, edit, and delete their own news articles with automatic handling of user IDs and timestamps.',
      },
      {
        title: 'Row Level Security (RLS)',
        description:
          'Secure database rules implemented in Supabase to ensure users can only modify their own content.',
      },
      {
        title: 'Responsive & accessible UI',
        description:
          'Modern, responsive layout built with Tailwind CSS, featuring clear feedback messages, error handling, and intuitive navigation.',
      },
      {
        title: 'State-driven UI logic',
        description:
          'Frontend UI dynamically adapts based on authentication state, hiding or revealing navigation links and actions as needed.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Supabase Auth',
      'PostgreSQL',
    ],
    github: 'https://github.com/Nirush4/Development-platforms-ca-nirush',
    live: 'https://news-hubnet.netlify.app/?q=&page=1',
    thumbnail: '/projects/news-hub.png',
    screenshots: [],
  },
  {
    id: 4,
    name: 'Auction House 🏷️',
    description:
      'Responsive and accessible auction platform built with Vanilla TypeScript and Tailwind CSS, integrating the Noroff Auction House API v2, developed under a strict requirement to use no JavaScript frameworks.',
    story: [
      'Auction House is a fully functional front-end web application developed as Semester Project 2 for the Front-End Development program at Noroff. The project focuses on building a modern, user-friendly, and secure auction platform that promotes fair bidding and transparent listing management among Noroff students.',
      'The application integrates with the Noroff Auction House API (v2) to support core features such as user authentication, listing creation and management, and real-time bidding. Strong emphasis was placed on accessibility, responsiveness, and clean UI design to ensure a seamless experience across devices.',
      'By completing this project, I strengthened my skills in Vanilla TypeScript, API-driven application architecture, and state management, while applying modern ES2025+ JavaScript features and best practices for maintainable front-end development.',
    ],
    features: [
      {
        title: 'Authentication system',
        description:
          'User registration and login powered by the Noroff Authentication API, including secure JWT token handling and protected routes.',
      },
      {
        title: 'Auction listings',
        description:
          'Browse, search, and view active listings, with authenticated users able to create, edit, and delete their own auctions.',
      },
      {
        title: 'Bidding system',
        description:
          'Place and view bids on active listings with dynamically updated bid information for a real-time auction experience.',
      },
      {
        title: 'Profile management',
        description:
          'View user profile data, owned listings, total credits, and update avatars through the Noroff API.',
      },
      {
        title: 'Responsive & dynamic UX',
        description:
          'Tailwind CSS–powered responsive layout with dynamic DOM updates, success feedback, and clear error messaging—no page reloads required.',
      },
      {
        title: 'TypeScript API architecture',
        description:
          'Modular API handling built with Vanilla TypeScript, implementing full CRUD functionality for all auction-related endpoints.',
      },
    ],
    technologies: [
      'HTML5',
      'Tailwind CSS',
      'TypeScript',
      'Noroff API v2',
      'JWT Authentication',
    ],
    github: 'https://github.com/Nirush4/Auction-House',
    live: 'https://auctionn-house.netlify.app/',
    thumbnail: '/projects/aution-house.png',
    screenshots: [],
  },
  {
    id: 5,
    name: 'Flip Match – Memory Card Game',
    description:
      'A responsive memory card matching game built with React, TypeScript, and Tailwind CSS, featuring smooth animations and intuitive gameplay.',
    story: [
      'Flip Match is an interactive memory card game developed as a front-end practice project to strengthen my skills in React, TypeScript, and modern UI development. The game challenges players to flip cards and find matching pairs while tracking moves and game progress.',
      'The project focuses on component-based architecture and predictable state management using React hooks. Core gameplay logic such as card flipping, match detection, turn control, and win conditions is handled through clean, well-structured TypeScript code, ensuring clarity and maintainability.',
      'By building Flip Match, I improved my understanding of React functional components, hook-driven state logic, and utility-first styling with Tailwind CSS. The project reinforced best practices for scalable front-end development while delivering a smooth, responsive, and engaging user experience.',
    ],
    features: [
      {
        title: 'Interactive memory game logic',
        description:
          'Implements card-flipping and matching mechanics with controlled turn flow, match validation, and win detection using React hooks.',
      },
      {
        title: 'Component-based architecture',
        description:
          'Built with reusable React components for cards and game state, promoting clean separation of logic and UI.',
      },
      {
        title: 'Move tracking & game reset',
        description:
          'Tracks the number of player moves and allows instant game restart with a newly shuffled deck.',
      },
      {
        title: 'Responsive UI with Tailwind CSS',
        description:
          'Styled using Tailwind CSS to ensure a modern, responsive layout that adapts seamlessly across devices.',
      },
      {
        title: 'TypeScript-first development',
        description:
          'Strongly typed game state, props, and logic improve reliability, readability, and long-term maintainability.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Nirush4/Flip-Match',
    live: 'https://flip-match-memory.netlify.app/',
    thumbnail: '/projects/flip-match.png',
    screenshots: [],
  },
  {
    id: 6,
    name: 'Rainy Days – Interactive Product Storefronts',
    description:
      'A dynamic online shop built with vanilla JavaScript and real-time product data from API.',
    story: [
      'Rainy Days is an interactive online shopping experience built as part of my JavaScript 1 CA at Noroff. The application fetches live product data from an external API and dynamically renders it on the page, giving users a smooth and engaging storefront experience built entirely with vanilla JavaScript.',
      'The project focuses on fundamental web development skills, including API consumption, DOM manipulation, and event-driven interactions—all without relying on frameworks. Product information such as names, prices, images, and descriptions is retrieved using the fetch() API, then injected into the UI through dynamically generated HTML elements.',
      'By building Rainy Days, I gained practical, real-world experience in handling asynchronous operations, structuring clean and reusable code, and creating responsive layouts. This project strengthened my foundation in JavaScript and taught me how to build dynamic interfaces from scratch using only core browser technologies.',
    ],
    features: [
      {
        title: 'Dynamic product rendering',
        description:
          'Fetches product data from a public API (Fake Store API) and populates the storefront with automatically generated product cards.',
      },
      {
        title: 'API-driven content',
        description:
          'All product details—including images, pricing, and descriptions—are pulled from the API, ensuring consistent, up-to-date information.',
      },
      {
        title: 'User interaction handling',
        description:
          'Interactive elements (such as clickable product cards) allow users to explore project details, enhancing overall engagement.',
      },
      {
        title: 'Clean, modular JavaScript',
        description:
          'Built using plain JS with a focus on readable code, reusable functions, and clear separation of logic and UI rendering.',
      },
      {
        title: 'Responsive layout',
        description:
          'Products and content adapt across screen sizes for a seamless experience on both desktop and mobile devices.',
      },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Nirush4/Fed1-JavaScript-1-CA-Rainy-Days',
    live: 'https://rainydays-webshop-no.netlify.app/',
    thumbnail: '/projects/rainydays.jpg',
    screenshots: [],
  },
  {
    id: 7,
    name: 'Social Media App – Frontend Social Platform',
    description:
      'Frontend social media app with post management, interactions, responsive design.',
    story: [
      'Social Media App is a frontend social networking application built as part of Semester Project 2. It allows users to create, read, update, and delete posts, follow or unfollow other users, comment on posts, and react with emojis.',
      'The project emphasizes responsive design, modular TypeScript code, and smooth user interactions, all styled with Tailwind CSS and built with Vite.',
      'By building this project, I gained hands-on experience in managing state, structuring reusable components, and implementing typical social media features in a performant, responsive interface.',
    ],
    features: [
      {
        title: 'CRUD Posts',
        description:
          'Users can create, edit, and delete posts, with live updates reflected in the UI.',
      },
      {
        title: 'Interactions',
        description:
          'Follow/unfollow users, comment on posts, and react with emojis to engage with content.',
      },
      {
        title: 'Responsive UI',
        description:
          'Fully responsive layout designed to work seamlessly across mobile and desktop devices.',
      },
      {
        title: 'Modern Tech Stack',
        description:
          'Built with Vite, TypeScript, and Tailwind CSS for fast, maintainable development.',
      },
      {
        title: 'Testing',
        description:
          'Includes unit and component testing using Vitest to ensure functionality and stability.',
      },
    ],
    technologies: ['TypeScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
    github: 'https://github.com/Nirush4/JavaScript-2-Course-Assignment',
    live: 'https://javascript-2-assignment-socialmedia.netlify.app/',
    thumbnail: '/projects/social-media-app.png',
    screenshots: [],
  },
  {
    id: 8,
    name: 'Lens of Wanderlust 📸 – Travel Vlog Page',
    description:
      'Responsive travel vlog page with API-driven images and content display.',
    story: [
      'Lens of Wanderlust is a responsive travel vlog web application built as Project Exam 1 for the Front-End Development 1 program. The project demonstrates my ability to interpret a brief, plan an effective solution, and deliver a polished, user-friendly experience using HTML, CSS, and vanilla JavaScript.',
      'The application integrates with external REST APIs to fetch and display travel vlog content, allowing users to explore travel destinations through videos, images, and descriptions.',
      'Focus was placed on creating an engaging, interactive interface that adapts seamlessly across devices. This project strengthened my skills in front-end development, API integration, and responsive design best practices.',
    ],
    features: [
      {
        title: 'Dynamic vlog content',
        description:
          'Fetches and displays travel videos, images, and descriptions from a REST API.',
      },
      {
        title: 'Responsive design',
        description:
          'Optimized for desktop, tablet, and mobile screens with a smooth, consistent layout.',
      },
      {
        title: 'Interactive UI',
        description:
          'Intuitive navigation, video playback, and content exploration for a user-friendly experience.',
      },
      {
        title: 'Front-end fundamentals',
        description:
          'Built with HTML5, CSS3, and vanilla JavaScript, emphasizing clean and modular code.',
      },
      {
        title: 'Project workflow',
        description:
          'Followed structured development and testing practices to deliver a polished, production-ready application.',
      },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Nirush4/FED1-exam-Nirush',
    live: 'https://lensofwanderlust.netlify.app/',
    thumbnail: '/projects/lensofwanderlust-vlog.jpg',
    screenshots: [],
  },
  {
    id: 9,
    name: 'Square Pumpkin 🤳🏼 – Social Media Platform',
    description:
      'Interactive social media platform with photo posts, personalized feeds, and built-in camera.',
    story: [
      'Square Pumpkin is an engaging social media web application developed for the Agency 1 CA assignment. The platform is designed to foster meaningful connections, content discovery, and creative expression by enabling users to share photos, interact with others, and personalize their profiles.',
      'The project emphasizes a seamless and interactive user experience, with features that allow users to create and manage profiles, post content, explore a dynamic feed, and engage with likes and comments.',
      'A built-in camera feature allows users to capture photos directly within the app, making content creation quick and intuitive. The application demonstrates responsive design and modern front-end development practices.',
    ],
    features: [
      {
        title: 'Profile customization',
        description:
          'Users can create and personalize profiles, updating avatars, bios, and display settings.',
      },
      {
        title: 'Photo posts',
        description:
          'Upload images or use the built-in camera to capture and share posts directly in the app.',
      },
      {
        title: 'Dynamic feed',
        description:
          'Explore a personalized feed with content tailored to user interests and activity.',
      },
      {
        title: 'Interactions',
        description:
          'Like, comment, and engage with posts to build a connected community.',
      },
      {
        title: 'Responsive design',
        description:
          'Fully optimized for desktop and mobile devices, ensuring a consistent and smooth experience.',
      },
      {
        title: 'Modern front-end stack',
        description:
          'Built with HTML5, CSS3, Tailwind CSS, and JavaScript, emphasizing clean, maintainable, and modular code.',
      },
    ],
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Nirush4/Fed1-agency-1-ca',
    live: 'https://squarepumpkin.netlify.app/',
    thumbnail: '/projects/squarepumpkin.jpg',
    screenshots: [],
  },
  {
    id: 10,
    name: 'The Community Science Museum: Discover Together',
    description:
      'Interactive, responsive science museum website for kids, families, and educators.',
    story: [
      'The Community Science Museum is a responsive, interactive website developed for Semester Project 1. The site is designed to engage children, families, and educators, providing an accessible and visually appealing online experience that encourages curiosity and exploration of science.',
      'The project focuses on creating an intuitive layout and vibrant design to ensure all visitors, regardless of age, can navigate and interact with content seamlessly.',
      'Built with HTML5, CSS3, and vanilla JavaScript, the site demonstrates modern front-end development practices, responsive design, and user-focused interface design.',
    ],
    features: [
      {
        title: 'Interactive experience',
        description:
          'Engaging and intuitive interface designed for children and families to explore science content easily.',
      },
      {
        title: 'Vibrant design',
        description:
          'Colorful and visually appealing elements to capture attention and inspire curiosity.',
      },
      {
        title: 'Educational focus',
        description:
          'Content and layout tailored to educators and learners, promoting an enjoyable and informative experience.',
      },
      {
        title: 'Responsive design',
        description:
          'Optimized for all devices, including desktops, tablets, and mobile screens.',
      },
      {
        title: 'Modern front-end fundamentals',
        description:
          'Built with HTML5, CSS3, and JavaScript, emphasizing clean, maintainable, and modular code.',
      },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Nirush4/Semesterproject-1',
    live: 'https://thecommunitysciencemuseum1.netlify.app/',
    thumbnail: '/projects/community-science-museum.jpg',
    screenshots: [],
  },
];
