import "./App.css";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Time from "./sections/Time";
import Cv from "./sections/Cv";
import ColorSelect from "./sections/ColorSelect";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="grid" id="grid">
      <Intro />
      <AboutMe />
      <Experience />
      <Time />
      <Contact />
      <Projects />
      <Cv />
      <ColorSelect />
    </div>
  );
}

export default App;
