import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import { projects, practice_projects } from "./data";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects projects={projects} text="Web Creations" />
      <Projects projects={practice_projects} text="Web Creations - Practice" />
    </>
  );
};

export default App;
