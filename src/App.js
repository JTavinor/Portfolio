import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";
import LandingCard from "./components/LandingCard";
import ProjectsCard from "./components/ProjectsCard";
import SkillsCard from "./components/SkillsCard";

import "./Sass/Sass.css";
//App
function App() {
  return (
    <div className="App">
      <LandingCard />
      <div className="paralax"></div>
      <AboutCard />
      <ProjectsCard />
      <SkillsCard />
      <ContactCard />
    </div>
  );
}

export default App;
