import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

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
