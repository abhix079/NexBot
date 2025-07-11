import Spline from "@splinetool/react-spline";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaAngleDoubleDown } from "react-icons/fa";
import TextPressure from "./components/TextPressure";
import ScrambledText from "./components/ScrambledText";

function App() {
  const scrollToAbout = () => {
    const section = document.getElementById("about-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <main className="spline-container">
        <Spline scene="https://prod.spline.design/5MncJAsOy6bqU6gI/scene.splinecode" />
        <button className="scroll-down-btn" onClick={scrollToAbout}>
          <FaAngleDoubleDown /> Click to Explore
        </button>
      </main>

      <section className="text-section" id="about-section">
        <p className="section-heading">
          About Nex<span>Bot</span>
        </p>

        <div className="text-stack">
          <div className="text-pressure-wrapper nexbot-large">
            <TextPressure
              text="NEXBOT"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={200}
              maxFontSize={300}
              style={{ fontSize: '150px', transform: 'scale(2)' }}
            />
          </div>

          <div className="text-pressure-wrapper slogan-width">
            <TextPressure
              text="Advancing   Human   Progress"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={18}
            />
          </div>
        </div>

        <div className="scrambled-wrapper">
          <ScrambledText
            className="scrambled-text-demo"
            radius={50}
            duration={1.2}
            speed={0.5}
            scrambleChars={".:"}
          >
            <p>NexBot represents the next generation of artificial intelligence, designed to seamlessly integrate with human workflows and enhance productivity across industries. Built with cutting-edge machine learning algorithms and neural networks, NexBot adapts to user behavior and continuously evolves to provide more intelligent and personalized assistance. Our revolutionary platform combines natural language processing with advanced reasoning capabilities, enabling unprecedented levels of automation and decision-making support.</p>
          </ScrambledText>
        </div>
      </section>
    </div>
  );
}

export default App;
