import Spline from "@splinetool/react-spline";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaAngleDoubleDown } from "react-icons/fa";
import TextPressure from "./components/TextPressure";
import ScrambledText from "./components/ScrambledText";
import TiltedCard from "./components/TiltedCard";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import bot from "../src/assets/bot.png";
import data from "../src/assets/data.png";
import sentiment from "../src/assets/sentiment.png";
import task from "../src/assets/task.png";
import voice from "../src/assets/voice.png";
import aichat from "../src/assets/aichat.png";
import SplashCursor from "./components/SplashCursor";


function App() {
  const scrollToAbout = () => {
    const section = document.getElementById("about-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      name: "AI Chat Assistant",
      image: aichat,
      description: "Smart AI that chats like a human.\nImproves with every interaction."
    },
    {
      name: "Automation Bot",
      image: bot,
      description: "Handles repetitive tasks automatically.\nBoosts speed and efficiency."
    },
    {
      name: "Data Analyzer",
      image: data,
      description: "Turns raw data into insights.\nHelps you make smarter decisions."
    },
    {
      name: "Task Scheduler",
      image: task,
      description: "Schedules and manages your tasks.\nKeeps your day organized."
    },
    {
      name: "Voice Recognition",
      image: voice,
      description: "Understands and transcribes speech.\nEnables voice-based control."
    },
    {
      name: "Sentiment Engine",
      image: sentiment,
      description: "Detects emotion in user input.\nImproves response and experience."
    }
  ];

  return (
    <div>
      <SplashCursor/>
      <Navbar />
      <main className="spline-container" id="home">
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
              style={{ fontSize: "150px", transform: "scale(2)" }}
            />
          </div>

          <div className="text-pressure-wrapper slogan-width">
            <TextPressure
              text="Advancing   Human   Progress"
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
            <p>
              Nex<span>Bot</span> represents the next generation of artificial
              intelligence, designed to seamlessly integrate with human workflows
              and enhance productivity across industries. Built with cutting-edge
              machine learning algorithms and neural networks, NexBot adapts to
              user behavior and continuously evolves to provide more intelligent
              and personalized assistance. Our revolutionary platform combines
              natural language processing with advanced reasoning capabilities,
              enabling unprecedented levels of automation and decision-making
              support.
            </p>
          </ScrambledText>
        </div>
      </section>

      <section className="service" id="service-section">
        <p className="section-heading" id="service-heading">
          Our <span>Services</span>
        </p>
        <div className="card-grid">
          {services.map((service, index) => (
            <TiltedCard
              key={index}
              imageSrc={service.image}
              altText={service.name}
              captionText={
                <div className="hover-text">
                  <p style={{ whiteSpace: "pre-line" }}>{service.description}</p>
                </div>
              }
              containerHeight="350px"
              containerWidth="300px"
              imageHeight="330px"
              imageWidth="320px"
              rotateAmplitude={16}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="nexbot-overlay-content">{service.name}</div>
              }
            />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact-section">
      <Contact/>
       
      </section>
<Copyright/>
    </div>
  );
}

export default App;
