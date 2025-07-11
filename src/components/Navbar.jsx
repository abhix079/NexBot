import "./Navbar.css";

import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";



function Navbar({ darkMode, handleToggle }) {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="logo">
          NEX<span>BOT</span>
        </p>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li className="theme-toggle" onClick={handleToggle}>
             {darkMode ? (
            <FiSun size={22} color="#000" />
          ) : (
            <IoMoonOutline size={22} color="#000" />
          )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
