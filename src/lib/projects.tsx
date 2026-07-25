import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Holidaze 🏡',
    description:
      'Modern accommodation booking platform built with React and TypeScript, featuring venue management, bookings, authentication, and a scalable frontend architecture.',

    problem:
      'Travelers need an easy way to discover and book accommodation, while venue owners require efficient tools for managing listings, bookings, and availability.',

    uxProcess: [
      'Researched existing accommodation booking platforms to understand user expectations and booking behaviors.',
      'Created user journeys for both customers and venue managers.',
      'Designed wireframes to validate booking workflows and venue management experiences.',
      'Tested navigation patterns and layouts to ensure accessibility and responsiveness.',
    ],

    figmaDesign: [
      'Created low-fidelity wireframes for search, booking, and venue management pages.',
      'Designed responsive high-fidelity mockups for desktop and mobile devices.',
      'Developed a reusable component system for forms, cards, and navigation.',
      'Prototyped key user interactions before development.',
    ],

    finalSolution: [
      'Built a fully responsive accommodation booking platform using React and TypeScript.',
      'Implemented venue browsing, search functionality, booking management, and availability calendars.',
      'Created a dedicated dashboard for venue managers to manage listings and reservations.',
      'Integrated authentication, form validation, state management, and automated testing.',
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
    Figma:
      'https://www.figma.com/design/XNqFbiOZuNuuIp7xPNdLtc/Holidaze?node-id=0-1&t=w4cNDvcLeRQdYoPI-1',
    thumbnail: '/projects/holidaze.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 2,
    name: 'Online Shop 🛒',
    description:
      'Frontend e-commerce application built with React and TypeScript, focused on performance, scalability, and a clean user experience.',

    problem:
      'Online shoppers need a fast and intuitive way to browse products, compare options, manage purchases, and complete transactions efficiently across all devices.',

    uxProcess: [
      'Analyzed common e-commerce user journeys and purchasing behaviors.',
      'Created user flows for product discovery, cart management, and checkout.',
      'Designed wireframes to simplify navigation and reduce friction throughout the shopping experience.',
      'Focused on accessibility, responsive layouts, and mobile-first design principles.',
    ],

    figmaDesign: [
      'Created responsive layouts for product listings, product detail pages, and checkout flows.',
      'Designed reusable UI components including cards, navigation, forms, and product galleries.',
      'Built a consistent visual hierarchy to improve product discoverability and readability.',
      'Prototyped shopping interactions and checkout experiences before development.',
    ],

    finalSolution: [
      'Built a scalable e-commerce application using React and TypeScript.',
      'Implemented product browsing, search, sorting, filtering, and detailed product pages.',
      'Created a Zustand-powered shopping cart with seamless product management.',
      'Integrated TanStack Query for efficient API communication, caching, and server-state management.',
      'Added form validation and responsive UI components for a polished user experience.',
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
    category: 'frontend',
  },

  {
    id: 3,
    name: 'NewsHub 📰',
    description:
      'Full-stack news platform built with React, TypeScript, and Tailwind CSS, using Supabase as a Backend-as-a-Service for authentication, database management, and secure CRUD operations.',

    problem:
      'Aspiring writers and content creators need a secure platform where they can publish, edit, and manage articles while ensuring ownership and privacy of their content.',

    uxProcess: [
      'Researched content management systems and online publishing platforms to identify common user expectations.',
      'Mapped user journeys for reading articles, creating content, editing posts, and managing accounts.',
      'Created wireframes focused on readability, content hierarchy, and streamlined navigation.',
      'Designed authentication and article management flows to reduce complexity for users.',
    ],

    figmaDesign: [
      'Designed responsive article feeds and article detail pages.',
      'Created dashboard layouts for content creation and article management.',
      'Built reusable UI components for forms, navigation, and content cards.',
      'Established a clean visual hierarchy that prioritizes readability and accessibility.',
    ],

    finalSolution: [
      'Developed a full-stack news platform using React, TypeScript, and Supabase.',
      'Implemented authentication, protected routes, and user-specific content management.',
      'Added full CRUD functionality for article creation, editing, and deletion.',
      'Applied Row Level Security (RLS) to ensure users can only modify their own content.',
      'Delivered a responsive and accessible user experience across all devices.',
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
    category: 'frontend',
  },

  {
    id: 4,
    name: 'Auction House 🏷️',
    description:
      'Responsive and accessible auction platform built with Vanilla TypeScript and Tailwind CSS, integrating the Noroff Auction House API v2.',

    problem:
      'Users need a transparent and trustworthy auction platform where they can create listings, place bids, and manage auctions in a secure and easy-to-use environment.',

    uxProcess: [
      'Researched common auction platforms to understand bidding behavior and user expectations.',
      'Mapped user journeys for listing creation, browsing, bidding, and profile management.',
      'Created wireframes focused on clarity, accessibility, and real-time interaction flow.',
      'Tested navigation and layout structure for responsiveness across devices.',
    ],

    figmaDesign: [
      'Designed listing pages, auction detail views, and user profile dashboards.',
      'Created reusable UI components for cards, forms, and bidding interfaces.',
      'Focused on clear visual hierarchy to highlight bids and listing details.',
      'Developed responsive designs optimized for both desktop and mobile screens.',
    ],

    finalSolution: [
      'Built a complete auction platform using Vanilla TypeScript without frameworks.',
      'Integrated the Noroff Auction House API for authentication and auction data.',
      'Implemented bidding functionality, listing management, and user profiles.',
      'Added dynamic UI updates for real-time interaction without page reloads.',
      'Delivered a fully responsive and accessible user experience.',
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
    Figma:
      'https://www.figma.com/design/24nEKpFa9DxvuXji5oADrA/Auction-House?node-id=0-1&t=V6CCv8hOE97gdcae-1',
    thumbnail: '/projects/aution-house.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 5,
    name: 'Flip Match – Memory Card Game',
    description:
      'A responsive memory card matching game built with React, TypeScript, and Tailwind CSS, featuring smooth interactions and simple game mechanics.',

    problem:
      'Players need a simple, engaging game that challenges memory skills while remaining intuitive, fast, and responsive across all devices.',

    uxProcess: [
      'Defined core game mechanics including card flipping, matching logic, and win conditions.',
      'Created user flows focusing on simplicity and quick gameplay loops.',
      'Designed wireframes for game board layout and interaction states.',
      'Tested usability to ensure smooth and predictable gameplay behavior.',
    ],

    figmaDesign: [
      'Designed card layouts and game board structure with a clear grid system.',
      'Created responsive layouts for desktop and mobile gameplay.',
      'Developed visual states for card flip, match, and mismatch interactions.',
      'Focused on a playful, minimal UI that supports gameplay clarity.',
    ],

    finalSolution: [
      'Built an interactive memory card game using React and TypeScript.',
      'Implemented card shuffling, matching logic, and win detection.',
      'Added move tracking and restart functionality for replayability.',
      'Created smooth UI interactions and responsive design using Tailwind CSS.',
    ],

    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],

    github: 'https://github.com/Nirush4/Flip-Match',
    live: 'https://flip-match-memory.netlify.app/',
    thumbnail: '/projects/flip-match.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 6,
    name: 'Rainy Days – Interactive Product Storefronts',
    description:
      'A dynamic online shop built with vanilla JavaScript and real-time product data from an external API.',

    problem:
      'Customers need a simple, fast, and responsive storefront where product information is always up to date and easy to browse.',

    uxProcess: [
      'Researched common e-commerce layouts and user expectations for product browsing.',
      'Planned user flows for discovering products and viewing product details.',
      'Created wireframes focused on simplicity, clarity, and ease of navigation.',
      'Tested layouts across multiple screen sizes to ensure responsiveness.',
    ],

    figmaDesign: [
      'Designed product listing pages and product detail views.',
      'Created reusable card components for displaying product information.',
      'Focused on clear hierarchy to highlight product images, price, and description.',
      'Developed responsive layouts optimized for mobile and desktop users.',
    ],

    finalSolution: [
      'Built a dynamic storefront using vanilla JavaScript and external APIs.',
      'Implemented real-time product fetching and rendering.',
      'Created reusable functions for API handling and DOM manipulation.',
      'Delivered a responsive shopping experience without frameworks.',
    ],

    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],

    github: 'https://github.com/Nirush4/Fed1-JavaScript-1-CA-Rainy-Days',
    live: 'https://rainydays-webshop-no.netlify.app/',
    Figma:
      'https://www.figma.com/design/hgQ4WNNGSHOxg9DViYzdIA/Rainydays-Superman?node-id=0-1&t=2S1d9x6TllOtDOsy-1',
    thumbnail: '/projects/rainydays.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 7,
    name: 'Social Media App – Frontend Social Platform',
    description:
      'Frontend social media application with post management, interactions, and responsive design.',

    problem:
      'Users need a social platform where they can create posts, interact with content, and engage with other users in a fast and responsive interface.',

    uxProcess: [
      'Analyzed common social media interaction patterns and user expectations.',
      'Created user flows for posting, commenting, liking, and following users.',
      'Designed layouts focused on content hierarchy and engagement.',
      'Tested usability across mobile and desktop devices.',
    ],

    figmaDesign: [
      'Designed feed layouts, profile pages, and post interaction components.',
      'Created reusable UI patterns for posts, comments, and user cards.',
      'Established a clear visual hierarchy for content-heavy interfaces.',
      'Designed responsive layouts optimized for mobile-first usage.',
    ],

    finalSolution: [
      'Built a frontend social media application using TypeScript and Vite.',
      'Implemented CRUD functionality for posts.',
      'Added commenting, reactions, and follow/unfollow features.',
      'Created a responsive and scalable UI using Tailwind CSS.',
      'Included unit and component testing with Vitest.',
    ],

    technologies: [
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'HTML5',
      'CSS3',
      'Vitest',
    ],

    github: 'https://github.com/Nirush4/JavaScript-2-Course-Assignment',
    live: 'https://javascript-2-assignment-socialmedia.netlify.app/',
    thumbnail: '/projects/social-media-app.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 8,
    name: 'Lens of Wanderlust 📸 – Travel Vlog Page',
    description:
      'Responsive travel vlog website with API-driven content, videos, and image-based storytelling.',

    problem:
      'Travel enthusiasts need an engaging platform where they can discover destinations and explore rich visual travel content in an intuitive way.',

    uxProcess: [
      'Researched travel blogs and media-heavy content platforms.',
      'Planned user journeys for exploring destinations and viewing travel content.',
      'Created wireframes focused on storytelling and visual engagement.',
      'Tested layouts to ensure responsiveness and usability across devices.',
    ],

    figmaDesign: [
      'Designed content-focused layouts with strong emphasis on imagery and video.',
      'Created reusable components for travel posts and media sections.',
      'Developed responsive designs optimized for mobile-first browsing.',
      'Focused on visual hierarchy to support storytelling content.',
    ],

    finalSolution: [
      'Built a travel vlog website using HTML, CSS, and JavaScript.',
      'Integrated external APIs to fetch and display travel content.',
      'Implemented responsive layouts and interactive media components.',
      'Delivered a smooth and engaging user experience across devices.',
    ],

    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],

    github: 'https://github.com/Nirush4/FED1-exam-Nirush',
    live: 'https://lensofwanderlust.netlify.app/',
    Figma:
      'https://www.figma.com/design/tC4Vb684z0vqyUyatYSfpv/Lens-of-Wanderlust?node-id=0-1&t=0WfBButjx90Q0IqV-1',
    thumbnail: '/projects/lensofwanderlust-vlog.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 9,
    name: 'Square Pumpkin 🤳🏼 – Social Media Platform',
    description:
      'Interactive social media platform with photo sharing, personalized feeds, and built-in camera functionality.',

    problem:
      'Users need a creative and engaging social platform where they can share visual content, personalize their profiles, and interact with a community in a seamless way.',

    uxProcess: [
      'Researched social media platforms to understand engagement patterns and user behavior.',
      'Created user flows for posting, interacting, and profile customization.',
      'Designed navigation structures focused on content discovery and ease of use.',
      'Tested usability across mobile and desktop layouts for responsiveness.',
    ],

    figmaDesign: [
      'Designed profile pages, feeds, and content creation interfaces.',
      'Created reusable card-based components for posts and interactions.',
      'Established consistent spacing, typography, and visual hierarchy.',
      'Focused on mobile-first responsive design principles.',
    ],

    finalSolution: [
      'Built a social media platform using HTML, CSS, Tailwind CSS, and JavaScript.',
      'Implemented photo posting, likes, comments, and personalized feeds.',
      'Added a built-in camera feature for instant content creation.',
      'Created a responsive and interactive user experience across devices.',
    ],

    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],

    github: 'https://github.com/Nirush4/Fed1-agency-1-ca',
    live: 'https://squarepumpkin.netlify.app/',
    thumbnail: '/projects/squarepumpkin.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 10,
    name: 'The Community Science Museum: Discover Together',
    description:
      'Interactive and responsive science museum website designed for children, families, and educators.',

    problem:
      'Science museums need an engaging digital experience that makes educational content accessible, interactive, and enjoyable for children, families, and educators.',

    uxProcess: [
      'Researched educational websites and museum platforms to understand user needs.',
      'Created user journeys for children, families, and educators.',
      'Designed information architecture focused on exploration and discoverability.',
      'Tested layouts for accessibility, clarity, and ease of navigation.',
    ],

    figmaDesign: [
      'Designed colorful, engaging layouts suitable for a younger audience.',
      'Created reusable content sections for exhibitions, events, and information pages.',
      'Developed responsive designs optimized for tablets, mobile, and desktop.',
      'Focused on visual storytelling and educational engagement.',
    ],

    finalSolution: [
      'Built a responsive science museum website using HTML, CSS, and JavaScript.',
      'Created structured pages for exhibitions, events, and visitor information.',
      'Implemented accessible navigation and interactive UI elements.',
      'Delivered a family-friendly educational experience across all devices.',
    ],

    technologies: ['HTML5', 'CSS3', 'JavaScript'],

    github: 'https://github.com/Nirush4/Semesterproject-1',
    live: 'https://thecommunitysciencemuseum1.netlify.app/',
    thumbnail: '/projects/community-science-museum.jpg',
    screenshots: [],
    category: 'frontend',
  },
];
