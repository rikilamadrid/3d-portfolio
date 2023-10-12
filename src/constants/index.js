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
  eye,
  indigo,
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
    id: "feedbacks",
    title: "Testimonials",
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
    title: "Frontend Architect",
    icon: mobile,
  },
  {
    title: "Fullstack Engineer",
    icon: creator,
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
    name: "Framer Motion",
    icon: framermotion,
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
  {
    title: "SOFTWARE ENGINEER",
    company_name: "Indigo",
    icon: indigo,
    iconBg: "#E6DEDD",
    date: "Feb 2013 - May 2017",
    points: [
      "Spearheaded the development of a range of web applications and websites for various clients. These projects showcased a commitment to crafting tailored digital experiences, utilizing cutting-edge technologies to meet client objectives.",
      "Implemented efficient design systems and component catalogues, streamlining the development process and ensuring a consistent and user-friendly interface across all projects. This optimization significantly enhanced the productivity of the design and development teams.",
      "Pioneered the creation of Progressive Web Apps (PWAs) to provide clients with fast, reliable, and engaging mobile experiences. This initiative bolstered user engagement and satisfaction, making a substantial impact on clients' digital presence and success."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Every once in a while, one is fortunate to cross paths with excellent people: this has been my experience with Ricardo. Since the very first day of working together, Ricardo has always displayed a fantastic attitude, a willingness to learn and to improve himself and his work.",
    name: "Joaquin Lopez",
    designation: "Principal Engineer",
    company: "Sngular",
    image: "https://cdn.sanity.io/images/1rv0v8ta/production/627b59eeabfaa201c9a13cd18a9dc3ec1f122c59-956x838.png?rect=35,0,882,838",
  },
  {
    testimonial:
      "Working with Ricardo was very enlightening. He is an A++ player; very intellectual and thinks outside of the box, circle and square. One thing that I found particularly impressive was his ability to learn new things at an accelerated rate.",
    name: "Brandon Ward",
    designation: "Lead Backend Engineer",
    company: "Book Club",
    image: "https://cdn.sanity.io/images/1rv0v8ta/production/807313e1125ba23469cedf38c5c552e8de432c66-684x612.png?rect=75,6,579,575",
  },
  {
    testimonial:
      "I had the pleasure of working with Ricardo during my time at BBVA. He was a key resource for our development team and was always up for a challenge. He brings a great vibe to the working environment through his ideas and ideologies. The drive he possesses to learn and adapt quickly is a great asset of his.",
    name: "Prajith Kumar",
    designation: "Lead Frontend Engineer",
    company: "eBay",
    image: "https://cdn.sanity.io/images/1rv0v8ta/production/fd5d71670123aadeeb916746c084e30d5735cfb8-499x416.png?rect=56,15,384,389",
  },
  {
    testimonial:
    "Ricardo at Indigo was a key asset. Their work on design systems, component catalogues, and Progressive Web Apps significantly elevated our projects. His ability to create tailored web solutions for various clients was truly impressive.It was a pleasure to collaborate with such a skilled and dedicated professional.",
    name: "Max Sayenko",
    designation: "Lead Frontend Engineer",
    company: "Tanium",
    image: "https://media.licdn.com/dms/image/C5603AQE5Q5JZ5bcDww/profile-displayphoto-shrink_100_100/0/1517695283766?e=1702512000&v=beta&t=h9VDz0L7vBGO1YJ2POikQKNC4UVglHnbXe3AEIQx_JQ",
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
