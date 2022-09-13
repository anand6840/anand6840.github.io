import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { About } from "./components/About";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { Navbaar } from "./components/Navbaar";
import { MyCarousal } from "./components/my-carousal/my-carousal.component";
import { Title } from "./components/title-message/title-message.component";
import { Footer } from "./components/footer/Footer";
import ServicesExperience from "./components/ServicesExperience";


function App() {
  return (
    <div className="App">
      <Navbaar />
      <MyCarousal />
      <Title />
      <About />
      <ServicesExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
