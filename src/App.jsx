import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktail from "./components/Cocktail.jsx";
import About from "./components/About.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktail />
      <About />
    </main>
  );
}

export default App;
