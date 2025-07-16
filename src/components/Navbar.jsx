import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Optional: Highlight section based on scroll
  useEffect(() => {
    const sectionIds = ["home", "about-section", "service-section", "contact-section"];

    const handleScrollSpy = () => {
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="logo" onClick={() => handleScroll("home")}>
          NEX<span>BOT</span>
        </p>

        <ul className="nav-links">
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className={activeSection === "about-section" ? "active" : ""}
            onClick={() => handleScroll("about-section")}
          >
            About
          </li>
          <li
            className={activeSection === "service-section" ? "active" : ""}
            onClick={() => handleScroll("service-section")}
          >
            Services
          </li>
          <li
            className={activeSection === "contact-section" ? "active" : ""}
            onClick={() => handleScroll("contact-section")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
