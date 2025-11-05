import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaCode,
  FaTerminal,
  FaLaptopCode,
} from "react-icons/fa";
// import { SiC, SiCsharp } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const programming_skills = [
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Python, experienced in developing scalable applications, and data-driven solutions with clean, efficient code.",
  },
  {
    id: nanoid(),
    title: "C",
    icon: <FaCode className="h-16 w-16 text-emerald-500" />,
    text: "Strong command of C programming, skilled in writing efficient low-level code and optimizing performance for systems and embedded applications.",
  },
  {
    id: nanoid(),
    title: "C#",
    icon: <FaTerminal className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in C#, building robust desktop programs using .NET frameworks with a focus on scalability and maintainability.",
  },
  {
    id: nanoid(),
    title: "C++",
    icon: <FaLaptopCode className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in C++, specializing in object-oriented design, high-performance computing, and software systems requiring precision and speed.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1761451833/color-generator_j4lxbj.png",
    url: "https://color-generator-react-prac.netlify.app/",
    github: "https://github.com/Shakir31/colors-generator-react",
    title: "Color Generator",
    text: "A simple tool that lets users generate, view, and copy custom color palettes with adjustable shades. Perfect for designers looking for quick color inspiration.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1761451833/lorem_o8p3d7.png",
    url: "https://lorem-ipsum-react-practice.netlify.app/",
    github: "https://github.com/Shakir31/lorem-ipsum-react",
    title: "Lorem Ipsum",
    text: "A lightweight text generator that produces unique placeholder content with customizable length and format for mockups and wireframes.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1761451730/grocery-bud_b7mmze.png",
    url: "https://grocery-bud-react-prac.netlify.app/",
    github: "https://github.com/Shakir31/grocery-bud-react",
    title: "Grocery Buddy",
    text: "A clean and functional list manager that helps users add, edit, and remove grocery items or tasks with real-time updates and persistent storage.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1761451835/menu_s5mueb.png",
    url: "https://menu-practice-react.netlify.app/",
    github: "https://github.com/Shakir31/menu-react",
    title: "Menu",
    text: "A stylish restaurant menu app that displays categorized dishes with images, prices, and filters for an interactive browsing experience.",
  },
];

export const practice_projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1762333829/bb_zfauhj.png",
    url: "https://birthday-buddy-practice.netlify.app/",
    github: "https://github.com/Shakir31/birthday-buddy-practice",
    title: "Birthday Buddy",
    text: "A simple app that displays a list of birthdays, allowing users to view whose birthday it is today with the option to clear the list instantly.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1762333830/tours_yopvs3.png",
    url: "https://tours-react-prac.netlify.app/",
    github: "https://github.com/Shakir31/tours-practice",
    title: "Tours",
    text: "An engaging tours showcase where users can browse travel destinations, read details, and remove tours they've already explored for a cleaner view.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1762333829/accordion_qpeoth.png",
    url: "https://accordion-practice.netlify.app/",
    github: "https://github.com/Shakir31/accordion-practice",
    title: "Accordion FAQ",
    text: "An interactive FAQ component that allows users to expand and collapse questions for a clean, user-friendly content presentation.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1762333829/slider_ijjdfe.png",
    url: "https://carousel-slider-practice.netlify.app/",
    github: "https://github.com/Shakir31/carousel-slider-practice",
    title: "Carousel Slider",
    text: "A responsive carousel slider that cycles through user reviews or images automatically, with controls for smooth manual navigation.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dv9rwydip/image/upload/v1762333829/cart_lsrpep.png",
    url: "https://cart-usereducer-practice.netlify.app/",
    github: "https://github.com/Shakir31/cart-useReducer-practice",
    title: "Shopping Cart",
    text: "A fully functional shopping cart app powered by useReducer that manages product items, quantities, and total pricing efficiently.",
  },
];
