import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { About } from "./components/About";
import Contact from "./components/Contact";
import { Navbaar } from "./components/Navbaar";
import { MyCarousal } from "./components/my-carousal/my-carousal.component";
import { Title } from "./components/title-message/title-message.component";
import { Footer } from "./components/footer/Footer";
import ServicesExperience from "./components/ServicesExperience";
import Skills from "./components/Skills/Skills";
import GitHub from "./components/Github/Github";
import Project from "./components/Project/Project";


function App() {
  return (
    <div className="App">
      <Navbaar />
      <MyCarousal />
      <Title />
      <About />
      <ServicesExperience />
      <GitHub/>
      <Skills/>
      <Project/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
