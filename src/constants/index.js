import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
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
  nextjs,
  graphql,
  bun,
  vite,
  reactquery,
  bldr,
  sngular,
  everis,
  storybook,
  framermotion,
  reactrouter,
  chef,
  pizza,
  starwars,
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
  {
    title: "Frontend Architecture",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "React-Query",
    icon: reactquery,
  },
  {
    name: "React-Router",
    icon: reactrouter,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Framer Motion",
    icon: framermotion,
  },
];

const experiences = [
  {
    title: "FRONTEND ARCHITECT",
    company_name: "Builder’s First Source",
    icon: bldr,
    iconBg: "#383E56",
    date: "Oct 2019 - present",
    points: [
      "Demonstrating my expertise, I have been responsible for several key initiatives, including the creation of a Progressive Web App (PWA) for a warehouse scanner using React and Redux.",
      "Additionally, I played a pivotal role in establishing a web component catalog with Storybook, driving the team's transition towards a component-driven development mindset.",
      "Furthermore, I successfully implemented a micro front-end solution through module federation in Webpack.",
    ],
  },
  {
    title: "SENIOR SOFTWARE ENGINEER",
    company_name: "Sngular",
    icon: sngular,
    iconBg: "#E6DEDD",
    date: "May 2018 - Oct 2019",
    points: [
      "As part of the architecture, I contributed to building a comprehensive web components catalog equipped with a component generator and a design system.",
      "This resource proved instrumental in enabling developers to seamlessly achieve the desired functionality and the client's (banks) application's unique look and feel.",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company_name: "Everis",
    icon: everis,
    iconBg: "#383E56",
    date: "May 2017 - May 2018",
    points: [
      "Designing and developing new features for an internal app that facilitated bankers to originate accounts and credit cards.",
      "I was part of the team that worked on the Balance Transfer and ACH product, handling sensitive data and realtime transactions improving app’s speed and security.",
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
    name: "Pizza Style",
    description:
      "Create the pizza of your dreams.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://pizza-style.vercel.app/",
  },
  {
    name: "Star Wars Almanac",
    description:
      "Search the galaxy for interesting planets and characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
    ],
    image: starwars,
    source_code_link: "https://starwars-info-gold.vercel.app/",
  },
  {
    name: "Top Recipes",
    description:
      "Browse great recipes for the holidays... or any day!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: chef,
    source_code_link: "https://cook-kitchen.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
