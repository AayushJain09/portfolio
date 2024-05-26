import {
  bharattech,
  jpmorgan,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  solidity,
  reactjs,
  redux,
  sanity,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Sanity",
    icon: sanity,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "MechBuddy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan",
    points: [
      "Designed and applied responsive user interfaces with React, leading to a 15% improvement in user satisfaction scores.",
      "Collaborated with team members to successfully manage projects, achieving a 10% reduction in project turnaround time.",
      "Revised backend and database for a web application using MongoDB and Node.js, resulting in a 15% improvement in database query performance ensuring a scalable and efficient architecture",
    ],
  },
  {
    title: "Team Lead",
    company_name: "Bharattech Pvt. Ltd.",
    icon: bharattech,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sept 2023",
    points: [
      "Engineered the development of 2 responsive and scalable applications, achieving a 15% improvement in project efficiency.",
      "Led a cross-functional team in implementing a new feature using React and Redux, resulting in a 10% increase in code efficiency.",
      "Optimized the application program, reducing page load times by 15% and enhancing overall application performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Virtual Experience",
    company_name: "JP Morgan Chase & Co.",
    icon: jpmorgan,
    iconBg: "#E6DEDD",
    date: "june 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Google Clone",
    description:
      "This is a Google Clone project I made using Next.Js, for styling I use Tailwind CSS and Google API. Deployment of this project is done with Vercel platform.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "google API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AayushJain09/Goog-v1",
  },
  {
    name: "Slayy",
    description:
      "Social Media Web application that enables users to share their thoughts and ideas with the world. It is a full-stack application built using React, Node, Typescript, and Sanity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AayushJain09/Slayy",
  },
  {
    name: "SnapIt",
    description:
      "SnapIt is a web application that allows users to upload images and share them with the world. It is a full-stack application built using React, Node, google oAuth, and Sanity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AayushJain09/SnapIt",
  },
];

export { services, technologies, experiences, testimonials, projects };
