import Spline from "@splinetool/react-spline";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextPressure from "./components/TextPressure";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <main className="spline-container">
        <Spline
          scene={
            darkMode
              ? "https://prod.spline.design/5MncJAsOy6bqU6gI/scene.splinecode"
              : "https://prod.spline.design/j4DjXINWgooO0Pj2/scene.splinecode"
          }
        />
        <Navbar darkMode={darkMode} handleToggle={handleToggle} />
        <a
          href="https://github.com/abhix079"
          target="_blank"
          className="custom-watermark"
        >
          🌐 View My GitHub
        </a>
      </main>

      {/* About Section */}
      <section className="text-section">
        <h2 className="section-heading">About</h2>
        <div className="text-pressure-wrapper">
          <TextPressure
            text="NEXBOT"
            flex={true}
            alpha={true}
            stroke={false}
            width={false}
            weight={true}
            italic={false}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
