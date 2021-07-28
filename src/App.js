import AboutCard from "./components/AboutCard";
import LandingCard from "./components/LandingCard";
import ProjectsCard from "./components/ProjectsCard";
import logo from "./logo.svg";
import "./Sass/Sass.css";

function App() {
  return (
    <div className="App">
      <LandingCard />
      <AboutCard />
    </div>
  );
}

export default App;
