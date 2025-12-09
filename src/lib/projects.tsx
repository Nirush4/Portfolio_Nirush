import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
