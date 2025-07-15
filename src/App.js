import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-950 dark:text-white scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
