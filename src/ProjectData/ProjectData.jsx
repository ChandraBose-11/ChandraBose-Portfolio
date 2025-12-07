const ProjectData = [
  {
    title: "Wedding Event Management",
    description:
      "A complete wedding event management platform designed to simplify planning. Users can explore venues, catering services, decorations, DJs, and photographers — all in one place. Features Google Authentication and fully responsive UI.",
    link: "https://weddingwise-management.netlify.app/",
    githubFrontend:
      "https://github.com/ChandraBose-11/WeddingWiseManagement-Frontend",
    githubBackend:
      "https://github.com/ChandraBose-11/WeddingWiseManagement-Backend",

    image: "/project-images/WeddingWise1.png",
    images: [
      "/project-images/WeddingWise1.png",
      "/project-images/WeddingWise1.png",
      "/project-images/WeddingWise1.png",
      "/project-images/WeddingWise1.png",
    ],

    // ⭐ NEW
    frontendTech: [
      "React JS",
      "Redux",
      "React DnD",
      "Tailwind CSS",
      "Google OAuth",
    ],

    backendTech: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT Authentication",
    ],

    features: [
      "User authentication with Google OAuth",
      "Responsive UI for desktop & mobile",
      "Drag-and-drop UI for event planning (via React DnD)",
      "CRUD operations for venues, services, and bookings",
      "JWT-based secure user management",
      "MongoDB database for storing user & booking data",
      "Admin & normal user roles",
    ],

    details:
      "WeddingWise is a full-stack wedding event management system — React + Redux on the frontend, Express + MongoDB on the backend. Users can browse services, book vendors, manage events, and authenticate using Google OAuth. Admin dashboard provides CRUD operations for event services. Fully responsive and secure."
  },

  {
    title: "MERN Stack Blog App",
    description:
      "A fully functional blogging platform built with the MERN stack. Includes authentication, rich text editor, image uploads, and a smooth responsive UI.",
    link: "https://bloggerhunt-app.netlify.app",
    github: "https://github.com/ChandraBose-11/Mern-Stack-Blog-App",

    image: "/project-images/Blogger-hunt.png",
    images: [
      "/project-images/Blogger-hunt.png",
      "/project-images/Blogger-hunt.png",
      "/project-images/Blogger-hunt.png",
    ],

    // ⭐ NEW
    frontendTech: [
      "React JS",
      "Context API",
      "Tailwind CSS",
    ],

    backendTech: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT Authentication",
      "Multer",
      "Cloudinary",
    ],

    features: [
      "JWT-based user authentication",
      "Rich-text blog editor",
      "Image upload using Cloudinary",
      "CRUD operations for blog posts",
      "Responsive UI using Tailwind",
    ],

    details:
      "A full-stack blog platform where users write, manage, and publish posts. Supports authentication, media uploads, rich content editing, and secure backend API."
  },

  {
    title: "GitHub Profile Finder",
    description:
      "A GitHub user search app built using JavaScript DOM manipulation and GitHub API integration.",
    link: "https://github-accountfinder.netlify.app/",
    github:
      "https://github.com/ChandraBose-11/Fetch-Project-Github-Profile-Finder",

    image: "/project-images/githubfinder.png",
    images: [
      "/project-images/githubfinder.png",
      "/project-images/githubfinder.png",
    ],

    // ⭐ NEW
    frontendTech: [
      "React JS",
      "Bootstrap",
      "GitHub REST API",
    ],

    backendTech: [],

    features: [
      "Search GitHub profiles",
      "Display repositories and bio",
      "Responsive UI",
    ],

    details:
      "This app allows searching GitHub users and fetching repositories, profile info, biography, and more using GitHub API. Fully frontend-based with no backend."
  },

  {
    title: "React Weather Pro",
    description:
      "A real-time weather application built with React.js.",
    link: "https://reactweatherapp-pro.netlify.app/",
    github: "https://github.com/ChandraBose-11/Weather-App",

    image: "/project-images/Weather-App.png",
    images: [
      "/project-images/Weather-App.png",
      "/project-images/Weather-App.png",
      "/project-images/Weather-App.png",
    ],

    // ⭐ NEW
    frontendTech: [
      "React JS",
      "Axios",
      "Tailwind CSS",
      "OpenWeatherMap API",
    ],

    backendTech: [],

    features: [
      "Real-time weather fetching",
      "Responsive UI",
      "City-based search",
    ],

    details:
      "Weather Pro fetches weather info from OpenWeatherMap API using Axios, displaying real-time temperature, humidity, and conditions."
  },

  {
    title: "Culineries Webpage",
    description:
      "A fully responsive static landing page built using HTML, CSS, and Bootstrap.",
    link: "https://culineries-webpage.netlify.app/",
    github: "https://github.com/ChandraBose-11/Culineries-Project",

    image: "/project-images/Culineries.png",
    images: [
      "/project-images/Culineries.png",
      "/project-images/Culineries.png",
    ],

    // ⭐ NEW
    frontendTech: [
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    backendTech: [],

    features: [
      "Fully responsive landing page",
      "Modern UI layout",
    ],

    details:
      "Static brand page for a food domain showcasing UI and web presentation skills."
  },
];

export default ProjectData;
